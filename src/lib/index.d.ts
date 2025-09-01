// Main exports for the tyraria NPM package
export { default as TyrariaEditor } from './TyrariaEditor.svelte';
export { default as TypstPreview } from './TypstPreview.svelte';
export { default as LoadingScreen } from './LoadingScreen.svelte';

// Re-export utility functions
export { uploadToPastebin, fetchFromPastebin } from '../pastebin.ts';

// Export Vite plugin for virtual modules
export { tyrariaVitePlugin } from './vite-plugin.js';

// Export types
export type { WorkspaceData, FileData, TyrariaEditorOptions, PastebinResponse } from './types.d.ts';
export type {
  TyrariaVitePluginOptions,
  TyrariaVitePluginFontsConfig,
  TyrariaVitePluginWorkspaceConfig
} from './vite-plugin.d.ts';
