import TyrariaEditor from './lib/TyrariaEditor.svelte';
import './main.css';
import "@vscode-elements/elements-lite/components/action-button/action-button.css";
import "@vscode-elements/elements-lite/components/button/button.css";

// Function to handle workspace output
function handleWorkspaceOutput(workspaceData) {
  console.log('Workspace data:', workspaceData);
  // This is where you would save or send the workspace data
}

// Get workspace input from URL parameters (for pastebin functionality)
const urlParams = new URLSearchParams(window.location.search);
const workspaceInput = urlParams.get("code");

// Create and mount the Tyraria editor
new TyrariaEditor({
  target: document.getElementById('app'),
  props: {
    workspaceInput,
    onWorkspaceOutput: handleWorkspaceOutput
  }
});
