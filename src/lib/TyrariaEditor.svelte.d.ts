import { SvelteComponent } from 'svelte';
import type { TyrariaEditorOptions, WorkspaceData } from './types.d.ts';

export default class TyrariaEditor extends SvelteComponent<TyrariaEditorOptions> {
  // Method to get current workspace data
  getWorkspaceData(): Promise<WorkspaceData>;
}
