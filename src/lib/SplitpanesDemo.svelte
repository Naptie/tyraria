<script>
  import { Splitpanes, Pane } from "svelte-splitpanes";

  // Component props
  let { initialWorkspace, onWorkspaceChange } = $props();

  // Reactive state
  let isMobile = $state(false);
  let isSidebarOpen = $state(true);

  // DOM references
  let sidebarContainer = $state(null);
  let editorsContainer = $state(null);
  let panelContainer = $state(null);

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

  // Check mobile on mount
  if (typeof window !== "undefined") {
    checkMobile();
    window.addEventListener("resize", checkMobile);
  }
</script>

<div class="flex flex-col h-screen w-full bg-gray-800 text-white">
  <div class="flex justify-between bg-gray-900 border-b border-gray-600">
    <div class="mx-2 flex">
      {#if isMobile}
        <button
          class="px-3 py-2 hover:bg-gray-700"
          title="Toggle explorer"
          onclick={toggleSidebar}
        >
          📁
        </button>
      {/if}
      <button class="px-3 py-2 hover:bg-gray-700" title="Empty workspace">
        🗑️
      </button>
    </div>

    <div class="mx-2 flex">
      <button class="px-3 py-2 hover:bg-gray-700" title="Share workspace">
        📤
      </button>
    </div>
  </div>

  <div class="flex-1 min-h-0">
    <Splitpanes>
      <!-- Sidebar -->
      <Pane
        size={isSidebarOpen ? 20 : 0}
        class="h-full {isSidebarOpen
          ? 'bg-gray-900 border-r border-gray-600'
          : 'hidden'}"
      >
        <div bind:this={sidebarContainer} class="h-full p-4">
          <h3 class="text-sm font-bold mb-3">EXPLORER</h3>
          <div class="text-sm">
            <div class="mb-2">📁 workspace</div>
            <div class="ml-4 mb-1">📄 main.typ</div>
            <div class="ml-4 mb-1">📄 template.typ</div>
            <div class="ml-4 mb-1">📄 references.bib</div>
          </div>
        </div>
      </Pane>

      <!-- Main content area -->
      <Pane size={isSidebarOpen ? 80 : 100} class="h-full">
        <Splitpanes>
          <!-- Left side: Editor and Panel area -->
          <Pane size={60} class="h-full">
            <Splitpanes horizontal={true}>
              <!-- Editor area -->
              <Pane size={isMobile ? 100 : 70} class="h-full bg-gray-800">
                <div bind:this={editorsContainer} class="h-full p-4">
                  <div class="bg-gray-700 p-2 mb-2 text-xs">main.typ ×</div>
                  <div class="font-mono text-sm">
                    <div class="text-blue-400">#import</div>
                    <div class="text-green-400">"template.typ"</div>
                    <div><br /></div>
                    <div class="text-blue-400">#show:</div>
                    <div class="text-yellow-400">project.with(</div>
                    <div class="ml-4">
                      title: <span class="text-green-400">"My Document"</span>,
                    </div>
                    <div class="ml-4">
                      authors: (<span class="text-green-400">"Author Name"</span
                      >,),
                    </div>
                    <div class="text-yellow-400">)</div>
                    <div><br /></div>
                    <div>= Introduction</div>
                    <div><br /></div>
                    <div>This is a sample Typst document...</div>
                  </div>
                </div>
              </Pane>

              <!-- Panel area (bottom) -->
              <Pane
                size={isMobile ? 0 : 30}
                class="h-full {isMobile
                  ? 'hidden'
                  : 'bg-gray-900 border-t border-gray-600'}"
              >
                <div bind:this={panelContainer} class="h-full p-4">
                  <h3 class="text-sm font-bold mb-3">PROBLEMS</h3>
                  <div class="text-sm text-gray-400">
                    No problems detected in workspace.
                  </div>
                </div>
              </Pane>
            </Splitpanes>
          </Pane>

          <!-- Right side: Typst preview -->
          <Pane
            size={40}
            class="border-l border-gray-600 h-full bg-white text-black"
          >
            <div class="h-full p-4">
              <h3 class="text-lg font-bold mb-4">My Document</h3>
              <p class="text-sm text-gray-600 mb-4">by Author Name</p>

              <h2 class="text-base font-bold mb-3">1 Introduction</h2>
              <p class="text-sm leading-relaxed">
                This is a sample Typst document that demonstrates the layout and
                preview functionality. The resizable panels allow you to adjust
                the workspace according to your preferences.
              </p>

              <div class="mt-8 text-xs text-gray-500 border-t pt-4">
                Preview rendered by Typst
              </div>
            </div>
          </Pane>
        </Splitpanes>
      </Pane>
    </Splitpanes>
  </div>
</div>

<style>
  /* Custom styling for svelte-splitpanes separators */
  :global(.splitpanes__splitter) {
    background-color: #4a5568 !important;
    transition: background-color 0.3s ease;
  }

  :global(.splitpanes__splitter:hover) {
    background-color: rgba(0, 120, 212, 0.6) !important;
  }

  :global(.splitpanes__splitter:active) {
    background-color: rgb(0, 120, 212) !important;
  }
</style>
