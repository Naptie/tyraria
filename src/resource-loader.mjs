import { resolve } from 'pathe';
import { Buffer } from 'buffer';
import { fetchFromPastebin } from './pastebin';
import { defaultWorkspacePath } from './fs-provider/path-constants.mjs';
import { isTextFile, isBase64, safeBase64Decode, stringToUint8Array } from './lib/file-utils.mts';

class ResourceLoader {
  constructor() {
    if (ResourceLoader.instance) {
      return ResourceLoader.instance;
    }

    this.resources = {
      fonts: null,
      wasm: null,
      workspaceFiles: null
    };

    this.loadingProgress = {
      fonts: { loaded: false, progress: 0, name: 'Loading fonts' },
      wasm: { loaded: false, progress: 0, name: 'Loading WASM module' },
      workspaceFiles: { loaded: false, progress: 0, name: 'Loading workspace' }
    };

    this.listeners = [];
    ResourceLoader.instance = this;
  }

  addProgressListener(callback) {
    this.listeners.push(callback);
  }

  removeProgressListener(callback) {
    this.listeners = this.listeners.filter((listener) => listener !== callback);
  }

  notifyProgress() {
    this.listeners.forEach((callback) => callback(this.loadingProgress));
  }

  updateProgress(type, progress, error = null) {
    this.loadingProgress[type].progress = progress;
    if (error) {
      this.loadingProgress[type].error = error;
    }
    this.notifyProgress();
  }

  markComplete(type) {
    this.loadingProgress[type].loaded = true;
    this.loadingProgress[type].progress = 100;
    this.notifyProgress();
  }

  async loadFonts(worker) {
    if (this.resources.fonts) return this.resources.fonts;

    try {
      this.updateProgress('fonts', 10);
      const fonts = await import('virtual:fonts');
      this.updateProgress('fonts', 50);

      let completedCount = 0;
      const totalFonts = fonts.default.length;

      const loadedFonts = await Promise.all(
        fonts.default.map(async (font) => {
          const data = await font.getData();
          completedCount++;
          const progress = 50 + (completedCount / totalFonts) * 40;
          this.updateProgress('fonts', progress);
          return { ...font, data };
        })
      );

      this.resources.fonts = loadedFonts;
      this.updateProgress('fonts', 90);

      worker.loadFonts(loadedFonts.map((font) => font.data));
      this.markComplete('fonts');
      return loadedFonts;
    } catch (error) {
      console.error('Failed to load fonts:', error);
      this.updateProgress('fonts', this.loadingProgress.fonts.progress, error.message);
      throw error;
    }
  }

  async loadWasm(worker) {
    if (this.resources.wasm) return this.resources.wasm;

    try {
      this.updateProgress('wasm', 10);
      await worker.loadWasm();

      this.updateProgress('wasm', 90);
      this.resources.wasm = true;
      this.markComplete('wasm');
      return true;
    } catch (error) {
      console.error('Failed to load WASM module:', error);
      this.updateProgress('wasm', this.loadingProgress.wasm.progress, error.message);
      throw error;
    }
  }

  async loadWorkspaceFiles(code) {
    if (this.resources.workspaceFiles) return this.resources.workspaceFiles;

    try {
      this.updateProgress('workspaceFiles', 10);

      if (code) {
        let files = [];
        if (typeof code === 'string') {
          files = await fetchFromPastebin(code);
        } else {
          files = Object.fromEntries(
            Object.entries('files' in code ? code.files : code).map(([key, value]) => [
              resolve(defaultWorkspacePath, key.startsWith('/') ? key.substring(1) : key),
              value
            ])
          );
        }
        if (files) {
          const fileList = Object.entries(files)
            .map(([filePath, content]) => {
              try {
                let fileContent;

                // Check if this is a text file and if content appears to be Base64
                if (isTextFile(filePath) && !isBase64(content)) {
                  // Content is plain text for a text file
                  fileContent = stringToUint8Array(content);
                } else {
                  // Content is Base64 (either for binary files or legacy text files)
                  fileContent = safeBase64Decode(content);
                }

                return {
                  data: fileContent,
                  path: filePath
                };
              } catch (error) {
                console.warn(`Failed to restore file ${filePath}:`, error);
                return null;
              }
            })
            .filter((item) => item !== null);
          this.resources.workspaceFiles = fileList;
          this.markComplete('workspaceFiles');
          return fileList;
        }
      }

      // load default workspace
      const defaultWorkspaceFiles = await import('virtual:default-workspace');
      this.updateProgress('workspaceFiles', 50);
      let completedCount = 0;
      const totalFiles = defaultWorkspaceFiles.default.length;
      const loadedFiles = await Promise.all(
        defaultWorkspaceFiles.default.map(async (file) => {
          const data = await file.getData();
          completedCount++;
          const progress = 50 + (completedCount / totalFiles) * 50;
          this.updateProgress('workspaceFiles', progress);
          return {
            ...file,
            data,
            path: resolve(defaultWorkspacePath, file.path)
          };
        })
      );
      this.resources.workspaceFiles = loadedFiles;
      this.markComplete('workspaceFiles');
      return loadedFiles;
    } catch (error) {
      console.error('Failed to load workspace', error);
      this.updateProgress(
        'workspaceFiles',
        this.loadingProgress.workspaceFiles.progress,
        error.message
      );
      throw error;
    }
  }

  async loadAll(worker, code) {
    const promises = [this.loadFonts(worker), this.loadWasm(worker), this.loadWorkspaceFiles(code)];

    await Promise.all(promises);
    return this.resources;
  }

  getFonts() {
    console.log(this);
    return this.resources.fonts;
  }

  getWasm() {
    return this.resources.wasm;
  }

  getWorkspaceFiles() {
    return this.resources.workspaceFiles;
  }

  isAllLoaded() {
    return Object.values(this.loadingProgress).every((item) => item.loaded);
  }
}

export default new ResourceLoader();
