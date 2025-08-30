// Export the main Tyraria component
export { default as TyrariaEditor } from './TyrariaEditor.svelte';

// Export workspace management functions
export { uploadWorkspace, loadWorkspace, exportWorkspaceAsJSON } from './workspace.js';

// Export types
export type { WorkspaceData, FileData, TyrariaEditorOptions } from './types.js';