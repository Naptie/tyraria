import fs from 'fs/promises';
import path from 'path';
import process from 'process';

const FONT_EXTENSIONS = ['.ttc', '.ttf', '.otf', '.otc'];

async function getAllFiles(dir, extensions) {
  const files = [];

  async function scan(directory) {
    try {
      const entries = await fs.readdir(directory, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
          await scan(fullPath);
        } else if (
          !extensions ||
          extensions.some((ext) => entry.name.toLowerCase().endsWith(ext))
        ) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
      console.warn(`Could not read directory ${directory}:`, error.message);
    }
  }

  await scan(dir);
  return files;
}

async function getAllFontFiles(dir) {
  return getAllFiles(dir, FONT_EXTENSIONS);
}

async function getAllDefaultWorkspaceFiles(dir) {
  return getAllFiles(dir, null);
}

async function generateVirtualModule(options) {
  const { dir, urls = [], getFiles, prefix, suffix, getPathFromFile } = options;

  let files = [];
  let urlEntries = [];

  // Handle local files if dir is provided
  if (dir) {
    files = await getFiles(dir);
  }

  // Handle URLs if provided
  if (urls && urls.length > 0) {
    urlEntries = urls.map((url, index) => ({
      url,
      name: `remote-${prefix}-${index}`,
      path: url,
      isUrl: true
    }));
  }

  const fileImports = files
    .map((file, index) => {
      const absolutePath = path.resolve(file).replace(/\\/g, '/');
      return `import ${prefix}${index}Url from '${absolutePath}${suffix}'`;
    })
    .join('\n');

  const fileExports = files
    .map((file, index) => {
      const name = path.basename(file);
      const pathProp = `path: "${getPathFromFile(file, dir)}",`;
      const urlVariable = prefix + index;
      const getData = `async getData() {
            const response = await fetch(${urlVariable}Url)
            return new Uint8Array(await response.arrayBuffer())
        }`;

      return `{
            name: "${name}",
            ${pathProp}
            url: ${prefix}${index}Url,
            ${getData}
        }`;
    })
    .join(',');

  const urlExports = urlEntries
    .map((entry) => {
      const getData = `async getData() {
            const response = await fetch("${entry.url}")
            return new Uint8Array(await response.arrayBuffer())
        }`;

      return `{
            name: "${entry.name}",
            path: "${entry.path}",
            url: "${entry.url}",
            ${getData}
        }`;
    })
    .join(',');

  const allExports = [fileExports, urlExports].filter(Boolean).join(',');

  return `
        ${fileImports}
        export default [${allExports}]
    `;
}

/**
 * Creates a Vite plugin that provides virtual modules for fonts and workspace files
 * @param {Object} options - Configuration options
 * @param {Object} options.fonts - Font configuration
 * @param {string} [options.fonts.dir] - Directory path containing font files (relative to vite.config.js)
 * @param {string[]} [options.fonts.urls] - Array of URLs to remote font files
 * @param {Object} options.workspace - Workspace configuration
 * @param {string} options.workspace.dir - Directory path containing default workspace files (relative to vite.config.js)
 * @returns {Object} Vite plugin object
 */
export function tyraria(options = {}) {
  const { fonts = {}, workspace = {} } = options;

  return {
    name: 'tyraria-virtual-modules',
    resolveId(id) {
      if (id === 'virtual:fonts' || id === 'virtual:default-workspace') return id;
    },
    async load(id) {
      if (id === 'virtual:fonts') {
        const fontDir = fonts.dir ? path.resolve(process.cwd(), fonts.dir) : null;
        return generateVirtualModule({
          dir: fontDir,
          urls: fonts.urls || [],
          getFiles: getAllFontFiles,
          prefix: 'font',
          suffix: '?url',
          getPathFromFile: (file, dir) => (dir ? path.relative(dir, file) : file)
        });
      }

      if (id === 'virtual:default-workspace') {
        const workspaceDir = workspace.dir ? path.resolve(process.cwd(), workspace.dir) : null;
        if (!workspaceDir) {
          console.warn('No workspace directory configured for virtual:default-workspace');
          return 'export default []';
        }

        return generateVirtualModule({
          dir: workspaceDir,
          getFiles: getAllDefaultWorkspaceFiles,
          prefix: 'ws',
          suffix: '?url',
          getPathFromFile: (file, dir) => path.relative(dir, file)
        });
      }
    }
  };
}
