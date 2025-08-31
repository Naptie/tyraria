import type { Plugin } from 'vite';

export interface TyrariaVitePluginFontsConfig {
  /** Directory path containing font files (relative to vite.config.js) */
  dir?: string;
  /** Array of URLs to remote font files */
  urls?: string[];
}

export interface TyrariaVitePluginWorkspaceConfig {
  /** Directory path containing default workspace files (relative to vite.config.js) */
  dir: string;
}

export interface TyrariaVitePluginOptions {
  /** Font configuration */
  fonts?: TyrariaVitePluginFontsConfig;
  /** Workspace configuration */
  workspace?: TyrariaVitePluginWorkspaceConfig;
}

/**
 * Creates a Vite plugin that provides virtual modules for fonts and workspace files
 * @param options - Configuration options
 * @returns Vite plugin object
 */
export declare function tyrariaVitePlugin(options?: TyrariaVitePluginOptions): Plugin;
