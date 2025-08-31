<script>
  import { resolve } from 'pathe';

  import Icon from '@iconify/svelte';
  import { Splitpanes, Pane } from 'svelte-splitpanes';

  import * as vscode from 'vscode';
  import { LogLevel } from '@codingame/monaco-vscode-api';

  import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper';
  import { configureDefaultWorkerFactory } from 'monaco-editor-wrapper/workers/workerLoaders';

  import '@codingame/monaco-vscode-theme-defaults-default-extension';

  import {
    Parts,
    attachPart,
    onDidChangeSideBarPosition
  } from '@codingame/monaco-vscode-views-service-override';
  import getKeybindingsServiceOverride from '@codingame/monaco-vscode-keybindings-service-override';
  import getMarkersServiceOverride from '@codingame/monaco-vscode-markers-service-override';
  import getExplorerServiceOverride from '@codingame/monaco-vscode-explorer-service-override';

  import tinymistPackage from '../assets/tinymist-assets/package.json';

  import TypstPreview from './TypstPreview.svelte';
  import LoadingScreen from './LoadingScreen.svelte';
  import { createFileSystemProvider } from '../fs-provider/fs-provider.mts';
  import { defaultEntryFilePath, defaultWorkspacePath } from '../fs-provider/path-constants.mjs';
  import { defaultEntryFileUri, defaultWorkspaceUri } from '../fs-provider/uri-constants.mjs';
  import resourceLoader from '../resource-loader.mjs';
  import { TinymistLS } from '../tinymist-ls/ls.mts';
  import { uploadToPastebin } from '../pastebin';
  import { AutoSaveConfiguration } from '@codingame/monaco-vscode-api/vscode/vs/platform/files/common/files';

  // Component props using Svelte 5 runes syntax
  let { workspaceInput = null, onWorkspaceOutput = () => {} } = $props();

  let isMobile = $state(false);
  let isSidebarOpen = $state(true);
  let resourcesLoaded = $state(false);
  let isExporting = $state(false);
  let isSharing = $state(false);
  let exportButtonText = $state(null);
  let shareButtonText = $state(null);

  // Element references
  let sidebarContainer = $state(null);
  let editorsContainer = $state(null);
  let panelContainer = $state(null);
  let preview = $state(null);

  // Core app state
  let worker = null;
  let reader = $state(null);
  let writer = $state(null);
  let wrapper = null;
  let fileSystemProvider = null;

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };

  const checkMobile = () => {
    const before = isMobile;
    const after = window.innerWidth < 768;
    if (!before && after) {
      isSidebarOpen = false;
    } else if (before && !after) {
      isSidebarOpen = true;
    }
    isMobile = after;
  };

  async function printMain() {
    const decoder = new TextDecoder('utf-8');
    console.log(decoder.decode(await fileSystemProvider.readFile(defaultEntryFileUri)));
  }

  async function doPreview() {
    preview.initPreview(defaultEntryFilePath);
  }

  async function handleExportClicked() {
    if (isExporting) return;
    try {
      if (vscode.window.tabGroups.all.some((group) => group.tabs.some((tab) => tab.isDirty))) {
        await vscode.commands.executeCommand('workbench.action.files.saveAll');
      }

      await exportWorkspace();
    } catch (error) {
      console.error('Export failed:', error);
      exportButtonText = 'Failed';
      setTimeout(() => {
        isExporting = false;
        exportButtonText = null;
      }, 2000);
    }
  }

  async function handleShareClicked() {
    if (isSharing) return;
    try {
      if (vscode.window.tabGroups.all.some((group) => group.tabs.some((tab) => tab.isDirty))) {
        await vscode.commands.executeCommand('workbench.action.files.saveAll');
      }

      await share();
    } catch (error) {
      console.error('Share failed:', error);
      shareButtonText = 'Failed';
      setTimeout(() => {
        isSharing = false;
        shareButtonText = null;
      }, 2000);
    }
  }

  async function exportWorkspace() {
    isExporting = true;
    exportButtonText = 'Exporting...';

    const workspaceJSON = await fileSystemProvider.getAllFilesAsJSON(defaultWorkspacePath);
    onWorkspaceOutput(workspaceJSON);

    exportButtonText = 'Success!';
    setTimeout(() => {
      isExporting = false;
      exportButtonText = null;
    }, 2000);
  }

  async function share() {
    isSharing = true;
    shareButtonText = 'Sharing...';

    let code = await uploadToPastebin(fileSystemProvider);

    const shareUrl = `${window.location.origin}${window.location.pathname}?code=${code}`;
    await navigator.clipboard.writeText(shareUrl);

    shareButtonText = 'URL Copied!';

    setTimeout(() => {
      isSharing = false;
      shareButtonText = null;
    }, 2000);
  }

  async function handleEmptyClicked() {
    if (confirm(`Are you sure to empty current workspace? This cannot be reverted.`)) {
      await fileSystemProvider.empty();
    }
  }

  async function loadExtensionAssets() {
    const assetMap = {
      './syntaxes/language-configuration.json': () =>
        import('../assets/tinymist-assets/syntaxes/language-configuration.json?raw'),
      './syntaxes/typst-markdown-injection.json': () =>
        import('../assets/tinymist-assets/syntaxes/typst-markdown-injection.json?raw'),
      './out/typst.tmLanguage.json': () =>
        import('../assets/tinymist-assets/out/typst.tmLanguage.json?raw'),
      './out/typst-code.tmLanguage.json': () =>
        import('../assets/tinymist-assets/out/typst-code.tmLanguage.json?raw')
    };

    const extensionFilesOrContents = new Map();

    await Promise.all(
      Object.entries(assetMap).map(async ([key, importFn]) => {
        const { default: content } = await importFn();
        extensionFilesOrContents.set(key, content);
      })
    );

    return extensionFilesOrContents;
  }

  const viewsInit = async () => {
    for (const config of [
      {
        part: Parts.SIDEBAR_PART,
        get element() {
          return sidebarContainer;
        },
        onDidElementChange: onDidChangeSideBarPosition
      },
      { part: Parts.EDITOR_PART, element: editorsContainer },
      { part: Parts.PANEL_PART, element: panelContainer }
    ]) {
      attachPart(config.part, config.element);

      config.onDidElementChange?.(() => {
        attachPart(config.part, config.element);
      });
    }
  };

  async function getClientConfig() {
    const extensionFilesOrContents = await loadExtensionAssets();
    const config = {
      $type: 'extended',
      logLevel: LogLevel.Debug,
      automaticallyDispose: true,
      vscodeApiConfig: {
        serviceOverrides: {
          ...getKeybindingsServiceOverride(),
          ...getExplorerServiceOverride(),
          ...getMarkersServiceOverride()
        },
        userConfiguration: {
          json: JSON.stringify({
            'workbench.colorTheme': 'Default Dark Modern',
            'workbench.iconTheme': 'vs-minimal',
            'editor.guides.bracketPairsHorizontal': 'active',
            'editor.wordBasedSuggestions': 'off',
            'editor.experimental.asyncTokenization': false,
            'vitest.disableWorkspaceWarning': true,
            'editor.codeLens': false,
            'files.autoSave': AutoSaveConfiguration.OFF
          })
        },
        viewsConfig: {
          viewServiceType: 'ViewsService',
          viewsInitFunc: viewsInit
        },
        workspaceConfig: {
          enableWorkspaceTrust: true,
          workspaceProvider: {
            trusted: true,
            async open() {
              window.open(window.location.href);
              return true;
            },
            workspace: {
              folderUri: defaultWorkspaceUri
            }
          }
        }
      },
      extensions: [
        {
          config: {
            name: 'tinymist-wasm',
            publisher: tinymistPackage.publisher,
            version: tinymistPackage.version,
            engines: {
              vscode: '*'
            },
            contributes: {
              configuration: tinymistPackage.contributes.configuration,
              configurationDefaults: tinymistPackage.contributes.configurationDefaults,
              languages: tinymistPackage.contributes.languages,
              grammars: tinymistPackage.contributes.grammars,
              semanticTokenScopes: tinymistPackage.contributes.semanticTokenScopes
            }
          },
          filesOrContents: extensionFilesOrContents
        }
      ],
      editorAppConfig: {
        monacoWorkerFactory: configureDefaultWorkerFactory
      },
      languageClientConfigs: {
        configs: {
          typst: {
            clientOptions: {
              documentSelector: ['typst'],
              initializationOptions: {
                formatterMode: 'typstyle'
              }
            },
            connection: {
              options: {
                $type: 'WorkerDirect',
                worker: worker.worker
              },
              messageTransports: {
                reader: reader,
                writer: writer
              }
            }
          }
        }
      }
    };

    return config;
  }

  async function loadWorkspace(fileSystemProvider) {
    await fileSystemProvider.createDirectory(defaultWorkspaceUri);
    let res = null;
    const workspaceFiles = resourceLoader.getWorkspaceFiles();

    for (const workspaceFile of workspaceFiles) {
      let doc = await fileSystemProvider.addFileToWorkspace(
        resolve(defaultWorkspacePath, workspaceFile.path),
        workspaceFile.data,
        false
      );
      if (workspaceFile.path === defaultEntryFilePath) {
        res = doc;
      }
    }

    if (!res) {
      return await fileSystemProvider.empty();
    }

    return res;
  }

  async function startTinymistClient() {
    const { reader: tmpReader, writer: tmpWriter } = await worker.startTinymistServer();
    reader = tmpReader;
    writer = tmpWriter;

    const config = await getClientConfig();

    wrapper = new MonacoEditorLanguageClientWrapper();
    fileSystemProvider = await createFileSystemProvider();
    worker.fsProvider = fileSystemProvider;

    await wrapper.init(config);

    await wrapper.startLanguageClients();
    worker.lsClient = wrapper.getLanguageClient('typst');
    await worker.initWatcher();

    let defaultDocument = await loadWorkspace(fileSystemProvider);
    await vscode.window.showTextDocument(defaultDocument, {
      preserveFocus: true
    });

    await doPreview();
  }

  function handleBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = '';
    return "Are you sure to leave? You changes won't be saved.";
  }

  // Initialize the component
  $effect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('beforeunload', handleBeforeUnload);

    worker = new TinymistLS();
    worker.startWorker();

    const init = async () => {
      try {
        // Use workspaceInput if provided as a code parameter
        const code = workspaceInput;
        await resourceLoader.loadAll(worker, code);
        resourcesLoaded = true;
        await startTinymistClient();
      } catch (error) {
        console.error('Failed to load resources:', error);
      }
    };

    init();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (wrapper) {
        wrapper.dispose();
      }
    };
  });
</script>

<LoadingScreen />

{#if resourcesLoaded}
  <div class="flex h-screen w-full flex-col">
    <div class="hidden">
      <button onclick={doPreview}>do preview</button>
      <button onclick={printMain}>print main</button>
    </div>

    <div class="bg-base flex justify-between">
      <div class="mx-2 flex">
        {#if isMobile}
          <button class="vscode-action-button my-2" title="Toggle explorer" onclick={toggleSidebar}>
            <Icon icon="heroicons:archive-box" class="menu-btn-icon" />
          </button>
        {/if}
        <button
          class="vscode-action-button my-2"
          title="Empty workspace"
          onclick={handleEmptyClicked}
        >
          <Icon icon="heroicons:trash" class="menu-btn-icon" />
        </button>
      </div>

      <div class="mx-2 flex">
        <button
          class="vscode-action-button my-2"
          title="Export workspace"
          class:opacity-50={isExporting}
          class:cursor-not-allowed={isExporting}
          disabled={isExporting}
          onclick={handleExportClicked}
        >
          {#if !exportButtonText}
            <Icon icon="heroicons:arrow-up-on-square" class="menu-btn-icon" />
          {:else}
            <span class="mx-3 my-1">{exportButtonText}</span>
          {/if}
        </button>
        <button
          class="vscode-action-button my-2"
          title="Share workspace"
          class:opacity-50={isSharing}
          class:cursor-not-allowed={isSharing}
          disabled={isSharing}
          onclick={handleShareClicked}
        >
          {#if !shareButtonText}
            <Icon icon="heroicons:share" class="menu-btn-icon" />
          {:else}
            <span class="mx-3 my-1">{shareButtonText}</span>
          {/if}
        </button>
      </div>
    </div>
    <div class="min-h-0 flex-1">
      <Splitpanes theme="vscode" maximizePanes={false}>
        <Pane
          size={isSidebarOpen ? (isMobile ? 50 : 20) : 0}
          minSize={isMobile ? 0 : 15}
          maxSize={isSidebarOpen ? 50 : 0}
        >
          <div bind:this={sidebarContainer} class="h-full"></div>
        </Pane>
        <Pane size={isSidebarOpen ? 80 : 100} minSize={15}>
          <Splitpanes theme="vscode" horizontal={isMobile} maximizePanes={false}>
            <Pane size={50}>
              <Splitpanes theme="vscode" horizontal={true} maximizePanes={false}>
                <Pane size={isMobile ? 100 : 65} minSize={30}>
                  <div bind:this={editorsContainer} class="h-full"></div>
                </Pane>
                <Pane size={35} minSize={isMobile ? 0 : 20} maxSize={isMobile ? 0 : 50}>
                  <div bind:this={panelContainer} class="h-full"></div>
                </Pane>
              </Splitpanes>
            </Pane>
            <Pane size={50} minSize={20} maxSize={80} class="h-full">
              <TypstPreview
                class="bg-base"
                bind:this={preview}
                {reader}
                {writer}
                style="margin-top: -1px"
              />
            </Pane>
          </Splitpanes>
        </Pane>
      </Splitpanes>
    </div>
  </div>
{/if}
