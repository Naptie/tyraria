<script>
  // Simple demo component to show the module structure
  import { uploadWorkspace, loadWorkspace, exportWorkspaceAsJSON } from '../../lib/workspace.js';
  
  let workspaceData = {
    files: {
      '/main.typ': 'Hello World', // base64 will be handled automatically
      '/config.toml': 'version = "1.0"'
    }
  };
  
  let status = '';
  let pasteId = '';
  
  async function testUpload() {
    status = 'Uploading...';
    try {
      const id = await uploadWorkspace(workspaceData);
      if (id) {
        pasteId = id;
        status = `Uploaded! Paste ID: ${id}`;
      } else {
        status = 'Upload failed';
      }
    } catch (error) {
      status = `Error: ${error.message}`;
    }
  }
  
  async function testLoad() {
    if (!pasteId) {
      status = 'No paste ID to load';
      return;
    }
    
    status = 'Loading...';
    try {
      const files = await loadWorkspace(pasteId);
      if (files) {
        status = `Loaded ${files.length} files`;
        console.log('Loaded files:', files);
      } else {
        status = 'Load failed';
      }
    } catch (error) {
      status = `Error: ${error.message}`;
    }
  }
  
  function testExport() {
    const mockFiles = [
      { path: '/main.typ', data: new TextEncoder().encode('= Hello World\n\nThis is a *Typst* document.') },
      { path: '/config.toml', data: new TextEncoder().encode('[build]\nentry = "main.typ"') }
    ];
    
    const json = exportWorkspaceAsJSON(mockFiles);
    console.log('Exported JSON:', json);
    status = 'Exported to console';
  }
</script>

<svelte:head>
  <title>Tyraria Module Demo</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-4xl">
  <h1 class="text-3xl font-bold mb-6">Tyraria Svelte Module Demo</h1>
  
  <div class="bg-gray-100 p-4 rounded-lg mb-6">
    <h2 class="text-xl font-semibold mb-3">Module Status</h2>
    <p class="text-green-600">✅ Successfully converted from Vue to Svelte</p>
    <p class="text-green-600">✅ NPM package structure created</p>
    <p class="text-green-600">✅ Workspace functions working</p>
    <p class="text-yellow-600">⚠️ Tinymist language server integration pending</p>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Workspace Functions Test</h2>
      
      <div class="space-y-3">
        <button 
          on:click={testUpload}
          class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Test Upload Workspace
        </button>
        
        <button 
          on:click={testLoad}
          class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          disabled={!pasteId}
        >
          Test Load Workspace
        </button>
        
        <button 
          on:click={testExport}
          class="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Test Export JSON
        </button>
      </div>
      
      {#if status}
        <div class="mt-4 p-3 bg-gray-50 rounded text-sm">
          Status: {status}
        </div>
      {/if}
      
      {#if pasteId}
        <div class="mt-4 p-3 bg-blue-50 rounded text-sm">
          Paste ID: <code class="bg-white px-1 rounded">{pasteId}</code>
        </div>
      {/if}
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Module Exports</h2>
      
      <div class="space-y-2 text-sm">
        <div class="flex items-center">
          <span class="w-4 h-4 bg-green-500 rounded mr-2"></span>
          <code>TyrariaEditor</code> - Main Svelte component
        </div>
        <div class="flex items-center">
          <span class="w-4 h-4 bg-green-500 rounded mr-2"></span>
          <code>uploadWorkspace(data)</code> - Upload to pastebin
        </div>
        <div class="flex items-center">
          <span class="w-4 h-4 bg-green-500 rounded mr-2"></span>
          <code>loadWorkspace(id)</code> - Load from pastebin
        </div>
        <div class="flex items-center">
          <span class="w-4 h-4 bg-green-500 rounded mr-2"></span>
          <code>exportWorkspaceAsJSON(files)</code> - Export as JSON
        </div>
      </div>
      
      <div class="mt-4 p-3 bg-gray-50 rounded text-xs">
        <strong>Usage in SvelteKit:</strong><br>
        <code>import {{ TyrariaEditor, uploadWorkspace }} from 'tyraria';</code>
      </div>
    </div>
  </div>

  <div class="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
    <h3 class="text-lg font-semibold mb-2">🚧 Current Limitations</h3>
    <ul class="text-sm space-y-1">
      <li>• Tinymist language server requires additional WASM modules</li>
      <li>• Monaco Editor integration needs proper worker configuration</li>
      <li>• Split panes could be improved with better resizing</li>
      <li>• Some VS Code service overrides may need adjustment</li>
    </ul>
  </div>

  <div class="mt-6 bg-green-50 border border-green-200 p-4 rounded-lg">
    <h3 class="text-lg font-semibold mb-2">✅ Successfully Completed</h3>
    <ul class="text-sm space-y-1">
      <li>• ✅ Converted Vue components to Svelte</li>
      <li>• ✅ Created NPM package structure with proper exports</li>
      <li>• ✅ Implemented workspace import/export functionality</li>
      <li>• ✅ Maintained layout structure (Monaco left, Typst preview right)</li>
      <li>• ✅ Fixed TypeScript compatibility issues</li>
      <li>• ✅ Package builds successfully with <code>yarn package</code></li>
    </ul>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    background-color: #f8fafc;
  }
</style>