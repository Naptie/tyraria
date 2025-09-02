import { SvelteComponent } from 'svelte';
import type { TyrariaEditorOptions, WorkspaceData } from './types.d.ts';

export default class TyrariaEditor extends SvelteComponent<TyrariaEditorOptions> {
  workspaceInput: WorkspaceData['files'] | string;
  onWorkspaceOutput: (output: WorkspaceData['files']) => void;
}
