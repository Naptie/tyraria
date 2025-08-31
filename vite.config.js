import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin';
import { assetsLoader } from './utils/load-assets.mjs';
import tailwindcss from '@tailwindcss/vite';
import { compression, defineAlgorithm } from 'vite-plugin-compression2';
import process from 'node:process';
import { constants } from 'zlib';

export default defineConfig(({ mode }) => {
  const isLibMode = mode === 'lib';

  const baseConfig = {
    plugins: [svelte(), !isLibMode && assetsLoader(), !isLibMode && tailwindcss()].filter(Boolean),
    optimizeDeps: {
      rollupOptions: {
        plugins: [importMetaUrlPlugin]
      },
      esbuildOptions: {
        plugins: [importMetaUrlPlugin]
      },
      include: [
        '@codingame/monaco-vscode-api',
        '@codingame/monaco-vscode-configuration-service-override',
        '@codingame/monaco-vscode-editor-api',
        '@codingame/monaco-vscode-editor-service-override',
        '@codingame/monaco-vscode-environment-service-override',
        '@codingame/monaco-vscode-extension-api',
        '@codingame/monaco-vscode-extensions-service-override',
        '@codingame/monaco-vscode-files-service-override',
        '@codingame/monaco-vscode-keybindings-service-override',
        '@codingame/monaco-vscode-languages-service-override',
        '@codingame/monaco-vscode-localization-service-override',
        '@codingame/monaco-vscode-log-service-override',
        '@codingame/monaco-vscode-model-service-override',
        '@codingame/monaco-vscode-monarch-service-override',
        '@codingame/monaco-vscode-textmate-service-override',
        '@codingame/monaco-vscode-theme-defaults-default-extension',
        '@codingame/monaco-vscode-theme-service-override',
        '@codingame/monaco-vscode-views-service-override',
        '@codingame/monaco-vscode-workbench-service-override',
        'vscode/localExtensionHost',
        'vscode-textmate',
        'vscode-oniguruma',
        'vscode-languageclient',
        'vscode-languageserver/browser.js'
      ]
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    worker: {
      plugins: () => [!isLibMode && assetsLoader()].filter(Boolean),
      format: 'es'
    },
    server: {
      fs: {
        allow: ['.', '../../rust/tinymist/crates/tinymist/pkg/', '../tinymist/crates/tinymist/pkg/']
      }
    }
  };

  if (isLibMode) {
    return {
      ...baseConfig,
      plugins: [
        svelte()
        // Don't include assets loader for library build
      ],
      build: {
        lib: {
          entry: 'src/lib/index.js',
          name: 'Tyraria',
          fileName: 'tyraria',
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: [
            'svelte',
            // Externalize all heavy dependencies that should be provided by the consumer
            '@codingame/monaco-vscode-api',
            '@codingame/monaco-vscode-explorer-service-override',
            '@codingame/monaco-vscode-keybindings-service-override',
            '@codingame/monaco-vscode-markers-service-override',
            '@codingame/monaco-vscode-views-service-override',
            'monaco-editor',
            'monaco-editor-wrapper',
            'monaco-languageclient',
            'vscode-languageclient',
            'vscode-languageserver',
            'tinymist',
            '@myriaddreamin/typst-ts-renderer',
            '@myriaddreamin/typst.ts',
            // Externalize virtual imports
            'virtual:fonts',
            'virtual:default-workspace'
          ],
          output: {
            globals: {
              svelte: 'Svelte'
            }
          }
        }
      }
    };
  }

  return {
    ...baseConfig,
    base: process.env.BUILD_PATH || '/',
    plugins: [
      ...baseConfig.plugins,
      compression({
        threshold: 1024 * 1024,
        include: /\.(html|xml|css|js|mjs|wasm|json|svg|otf|ttf|otc|ttc)$/,
        algorithm: [
          defineAlgorithm('brotliCompress', {
            params: {
              [constants.BROTLI_PARAM_QUALITY]: 11
            }
          })
        ]
      })
    ],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const ext = assetInfo.names?.[0]?.split('.').pop();

            if (['otf', 'ttf', 'otc', 'ttc'].includes(ext)) {
              return `assets/fonts/[name][extname]`;
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }
  };
});
