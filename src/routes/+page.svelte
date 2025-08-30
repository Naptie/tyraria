<script>
  import { TyrariaEditor } from '../lib/index.js';
  
  let editorRef;
  
  function handleWorkspaceChange(workspaceData) {
    console.log('Workspace changed:', workspaceData);
  }
  
  async function getWorkspace() {
    if (editorRef) {
      const data = await editorRef.getWorkspaceData();
      console.log('Current workspace:', data);
    }
  }
</script>

<svelte:head>
  <title>Tyraria Demo</title>
</svelte:head>

<div class="h-screen w-full">
  <TyrariaEditor 
    bind:this={editorRef}
    onWorkspaceChange={handleWorkspaceChange}
  />
</div>

<!-- Demo controls -->
<div class="fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded text-white text-sm">
  <button on:click={getWorkspace} class="bg-blue-600 px-2 py-1 rounded hover:bg-blue-700">
    Get Workspace Data
  </button>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>