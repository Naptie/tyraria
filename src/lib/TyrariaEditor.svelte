<script>
  import { onMount, onDestroy } from "svelte";

  // These will be dynamically imported in onMount to avoid SSR issues
  let vscode;
  let LogLevel;
  let MonacoEditorLanguageClientWrapper;
  let configureDefaultWorkerFactory;
  let Parts, attachPart, onDidChangeSideBarPosition;
  let getKeybindingsServiceOverride;
  let getMarkersServiceOverride;
  let getExplorerServiceOverride;
  let createFileSystemProvider;
  let TinymistLS;
  let AutoSaveConfiguration;

  import tinymistPackage from "../assets/tinymist-assets/package.json";
  import TypstPreview from "./TypstPreview.svelte";
  import LoadingScreen from "./LoadingScreen.svelte";
  import { Buffer } from "buffer";
  import {
    defaultEntryFilePath,
    defaultWorkspacePath,
  } from "../fs-provider/path-constants.mjs";
  import {
    defaultEntryFileUri,
    defaultWorkspaceUri,
  } from "../fs-provider/uri-constants.mjs";
  import resourceLoader from "../resource-loader.mjs";
  import { uploadWorkspace, exportWorkspaceAsJSON } from "./workspace.js";
  import { resolve } from "pathe";

  // Component props
  let { initialWorkspace, onWorkspaceChange } = $props();

  // Reactive state
  let isMobile = $state(false);
  let isSidebarOpen = $state(true);
  let resourcesLoaded = $state(false);
  let isSharing = $state(false);
  let shareButtonText = $state(null);

  // DOM references
  let sidebarContainer = $state(null);
  let editorsContainer = $state(null);
  let panelContainer = $state(null);
  let preview = $state(null);

  // Core instances
  let worker = null;
  let reader = $state(null);
  let writer = $state(null);
  let wrapper = null;
  let fileSystemProvider = null;

  // Functions
  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function checkMobile() {
    const before = isMobile;
    const after = window.innerWidth < 768;
    if (!before && after) {
      isSidebarOpen = false;
    } else if (before && !after) {
      isSidebarOpen = true;
    }
    isMobile = after;
  }

  async function printMain() {
    const decoder = new TextDecoder("utf-8");
    console.log(
      decoder.decode(await fileSystemProvider.readFile(defaultEntryFileUri))
    );
  }

  async function doPreview() {
    if (preview) {
      preview.initPreview(defaultEntryFilePath);
    }
  }

  async function handleShareClicked() {
    if (isSharing) return;
    try {
      if (
        vscode.window.tabGroups.all.some((group) =>
          group.tabs.some((tab) => tab.isDirty)
        )
      ) {
        // TODO: Implement modal for unsaved changes
        await share();
        return;
      }

      await share();
    } catch (error) {
      console.error("Share failed:", error);
      shareButtonText = "Failed";
      setTimeout(() => {
        isSharing = false;
        shareButtonText = null;
      }, 2000);
    }
  }

  async function share() {
    isSharing = true;
    shareButtonText = "Sharing...";

    // Get current workspace data and call onWorkspaceChange if provided
    const workspaceData = await getCurrentWorkspaceData();
    if (onWorkspaceChange) {
      onWorkspaceChange(workspaceData);
    }

    const code = await uploadWorkspace(workspaceData);
    const shareUrl = `${window.location.origin}${window.location.pathname}?code=${code}`;
    await navigator.clipboard.writeText(shareUrl);

    shareButtonText = "URL Copied!";

    setTimeout(() => {
      isSharing = false;
      shareButtonText = null;
    }, 2000);
  }

  async function getCurrentWorkspaceData() {
    if (!fileSystemProvider) return { files: {} };

    try {
      const content =
        await fileSystemProvider.getAllFilesAsJSON(defaultWorkspacePath);
      return JSON.parse(content);
    } catch (error) {
      console.error("Error getting workspace data:", error);
      return { files: {} };
    }
  }

  async function handleEmptyClicked() {
    if (
      confirm(
        "Are you sure to empty current workspace? This cannot be reverted."
      )
    ) {
      await fileSystemProvider.empty();
    }
  }

  async function loadExtensionAssets() {
    const assetMap = {
      "./syntaxes/language-configuration.json": () =>
        import(
          "../assets/tinymist-assets/syntaxes/language-configuration.json?raw"
        ),
      "./syntaxes/typst-markdown-injection.json": () =>
        import(
          "../assets/tinymist-assets/syntaxes/typst-markdown-injection.json?raw"
        ),
      "./out/typst.tmLanguage.json": () =>
        import("../assets/tinymist-assets/out/typst.tmLanguage.json?raw"),
      "./out/typst-code.tmLanguage.json": () =>
        import("../assets/tinymist-assets/out/typst-code.tmLanguage.json?raw"),
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

  async function getClientConfig() {
    const extensionFilesOrContents = await loadExtensionAssets();
    const config = {
      htmlContainer: document.body,
      logLevel: LogLevel.Debug,
      vscodeApiConfig: {
        serviceOverrides: {
          ...getKeybindingsServiceOverride(),
          ...getExplorerServiceOverride(),
          ...getMarkersServiceOverride(),
        },
        userConfiguration: {
          json: JSON.stringify({
            "workbench.colorTheme": "Default Dark Modern",
            "workbench.iconTheme": "vs-minimal",
            "editor.guides.bracketPairsHorizontal": "active",
            "editor.wordBasedSuggestions": "off",
            "editor.experimental.asyncTokenization": false,
            "vitest.disableWorkspaceWarning": true,
            "editor.codeLens": false,
            "files.autoSave": AutoSaveConfiguration.OFF,
          }),
        },
        viewsConfig: {
          viewServiceType: "ViewsService",
          viewsInitFunc: viewsInit,
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
              folderUri: defaultWorkspaceUri,
            },
          },
        },
      },
      extensions: [
        {
          config: {
            name: "tinymist-wasm",
            publisher: tinymistPackage.publisher,
            version: tinymistPackage.version,
            engines: {
              vscode: "*",
            },
            contributes: {
              configuration: tinymistPackage.contributes.configuration,
              configurationDefaults:
                tinymistPackage.contributes.configurationDefaults,
              languages: tinymistPackage.contributes.languages,
              grammars: tinymistPackage.contributes.grammars,
              semanticTokenScopes:
                tinymistPackage.contributes.semanticTokenScopes,
            },
          },
          filesOrContents: extensionFilesOrContents,
        },
      ],
      editorAppConfig: {
        monacoWorkerFactory: configureDefaultWorkerFactory,
      },
      languageClientConfigs: {
        configs: {
          typst: {
            clientOptions: {
              documentSelector: ["typst"],
              initializationOptions: {
                formatterMode: "typstyle",
              },
            },
            connection: {
              options: {
                $type: "WorkerDirect",
                worker: worker.worker,
              },
              messageTransports: {
                reader: reader,
                writer: writer,
              },
            },
          },
        },
      },
    };

    return config;
  }

  const viewsInit = async () => {
    for (const config of [
      {
        part: Parts.SIDEBAR_PART,
        get element() {
          return sidebarContainer;
        },
        onDidElementChange: onDidChangeSideBarPosition,
      },
      { part: Parts.EDITOR_PART, element: editorsContainer },
      { part: Parts.PANEL_PART, element: panelContainer },
    ]) {
      attachPart(config.part, config.element);

      config.onDidElementChange?.(() => {
        attachPart(config.part, config.element);
      });
    }
  };

  async function loadWorkspace(fileSystemProvider) {
    await fileSystemProvider.createDirectory(defaultWorkspaceUri);
    let res = null;
    
    // Load initial workspace if provided
    if (initialWorkspace && initialWorkspace.files && Object.keys(initialWorkspace.files).length > 0) {
      console.log("Loading initial workspace");
      for (const [filePath, base64Content] of Object.entries(initialWorkspace.files)) {
        try {
          const fileContent = new Uint8Array(Buffer.from(base64Content, "base64"));
          const doc = await fileSystemProvider.addFileToWorkspace(
            resolve(defaultWorkspacePath, filePath),
            fileContent,
            false
          );
          if (filePath === defaultEntryFilePath) {
            res = doc;
          }
        } catch (error) {
          console.warn(`Failed to load initial file ${filePath}:`, error);
        }
      }
    } else {
      // Load default workspace files
      for (const workspaceFile of resourceLoader.getWorkspaceFiles()) {
        let doc = await fileSystemProvider.addFileToWorkspace(
          resolve(defaultWorkspacePath, workspaceFile.path),
          workspaceFile.data,
          false
        );
        if (workspaceFile.path === defaultEntryFilePath) {
          res = doc;
        }
      }
    }

    if (!res) {
      return await fileSystemProvider.empty();
    }

    return res;
  }

  async function startTinymistClient() {
    console.log(1145141919810);
    const { reader: tmpReader, writer: tmpWriter } =
      await worker.startTinymistServer();
    reader = tmpReader;
    writer = tmpWriter;

    const config = await getClientConfig();

    wrapper = new MonacoEditorLanguageClientWrapper();
    fileSystemProvider = await createFileSystemProvider();
    worker.fsProvider = fileSystemProvider;

    await wrapper.init(config);

    await wrapper.startLanguageClients();
    worker.lsClient = wrapper.getLanguageClient("typst");
    await worker.initWatcher();

    let defaultDocument = await loadWorkspace(fileSystemProvider);
    await vscode.window.showTextDocument(defaultDocument, {
      preserveFocus: true,
    });

    await doPreview();
  }

  function handleBeforeUnload(event) {
    // Only prevent unload if there are unsaved changes
    if (vscode && vscode.window.tabGroups.all.some((group) =>
      group.tabs.some((tab) => tab.isDirty)
    )) {
      event.preventDefault();
      event.returnValue = "";
    }
  }

  onMount(async () => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("beforeunload", handleBeforeUnload);

    try {
      // Dynamic imports to avoid SSR issues
      const [
        vscodeMod,
        { LogLevel: LogLevelMod },
        { MonacoEditorLanguageClientWrapper: WrapperMod },
        { configureDefaultWorkerFactory: WorkerFactoryMod },
        viewsMod,
        keybindingsMod,
        markersMod,
        explorerMod,
        { createFileSystemProvider: FsProviderMod },
        { TinymistLS: TinymistLSMod },
        { AutoSaveConfiguration: AutoSaveMod },
      ] = await Promise.all([
        import("vscode"),
        import("@codingame/monaco-vscode-api"),
        import("monaco-editor-wrapper"),
        import("monaco-editor-wrapper/workers/workerLoaders"),
        import("@codingame/monaco-vscode-views-service-override"),
        import("@codingame/monaco-vscode-keybindings-service-override"),
        import("@codingame/monaco-vscode-markers-service-override"),
        import("@codingame/monaco-vscode-explorer-service-override"),
        import("../fs-provider/fs-provider.mts"),
        import("../tinymist-ls/ls.mts"),
        import(
          "@codingame/monaco-vscode-api/vscode/vs/platform/files/common/files"
        ),
      ]);

      // Import the theme extension
      await import("@codingame/monaco-vscode-theme-defaults-default-extension");

      // Assign the imported modules
      vscode = vscodeMod;
      LogLevel = LogLevelMod;
      MonacoEditorLanguageClientWrapper = WrapperMod;
      configureDefaultWorkerFactory = WorkerFactoryMod;
      Parts = viewsMod.Parts;
      attachPart = viewsMod.attachPart;
      onDidChangeSideBarPosition = viewsMod.onDidChangeSideBarPosition;
      getKeybindingsServiceOverride = keybindingsMod.default;
      getMarkersServiceOverride = markersMod.default;
      getExplorerServiceOverride = explorerMod.default;
      createFileSystemProvider = FsProviderMod;
      TinymistLS = TinymistLSMod;
      AutoSaveConfiguration = AutoSaveMod;

      // Initialize the editor
      worker = new TinymistLS();
      worker.startWorker();

      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      console.log(12);
      await resourceLoader.loadAll(worker, code);
      console.log(13);
      await startTinymistClient();
      console.log(14);
      resourcesLoaded = true;

      console.log("TyrariaEditor initialized successfully");
    } catch (error) {
      console.error("Failed to initialize:", error);
    }
  });

  onDestroy(() => {
    window.removeEventListener("resize", checkMobile);
    window.removeEventListener("beforeunload", handleBeforeUnload);
  });

  // Export function to get current workspace
  export function getWorkspaceData() {
    return getCurrentWorkspaceData();
  }
</script>

<LoadingScreen />

{#if resourcesLoaded}
  <div class="flex flex-col h-screen w-full">
    <div class="hidden">
      <button onclick={doPreview}>do preview</button>
      <button onclick={printMain}>print main</button>
    </div>

    <div class="flex justify-between bg-base">
      <div class="mx-2 flex">
        {#if isMobile}
          <button
            class="vscode-action-button my-2"
            title="Toggle explorer"
            onclick={toggleSidebar}
          >
            📁
          </button>
        {/if}
        <button
          class="vscode-action-button my-2"
          title="Empty workspace"
          onclick={handleEmptyClicked}
        >
          🗑️
        </button>
      </div>

      <div class="mx-2 flex">
        <button
          class="vscode-action-button my-2"
          title="Share workspace"
          class:opacity-50={isSharing}
          class:cursor-not-allowed={isSharing}
          disabled={isSharing}
          onclick={handleShareClicked}
        >
          {#if !shareButtonText}
            📤
          {:else}
            <span class="mx-3 my-1">{shareButtonText}</span>
          {/if}
        </button>
      </div>
    </div>

    <div class="flex-1 min-h-0 flex">
      <!-- Sidebar -->
      {#if isSidebarOpen}
        <div class="w-1/5 min-w-0 border-r border-gray-600">
          <div bind:this={sidebarContainer} class="h-full"></div>
        </div>
      {/if}

      <!-- Main content area -->
      <div class="flex-1 flex">
        <!-- Left side: Editor area -->
        <div class="w-3/5 flex flex-col">
          <div class="flex-1">
            <div bind:this={editorsContainer} class="h-full"></div>
          </div>
          {#if !isMobile}
            <div class="h-1/3 border-t border-gray-600">
              <div bind:this={panelContainer} class="h-full"></div>
            </div>
          {/if}
        </div>

        <!-- Right side: Typst preview -->
        <div class="w-2/5 border-l border-gray-600">
          <TypstPreview
            class="bg-base"
            bind:this={preview}
            {reader}
            {writer}
            style="margin-top: -1px"
          />
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(.menu-btn-icon) {
    width: 16px;
    height: 16px;
  }

  :global(.bg-base) {
    background: var(--vscode-sideBar-background);
  }
</style>
