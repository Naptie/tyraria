// Export the main Tyraria component
export { default as TyrariaEditor } from './TyrariaEditor.svelte';

// Export workspace management functions
export { uploadWorkspace, loadWorkspace, exportWorkspaceAsJSON } from './workspace.js';

// Export types if needed
export type { WorkspaceData, FileData } from './types.js';