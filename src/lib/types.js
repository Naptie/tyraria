export interface FileData {
  data: Uint8Array;
  path: string;
}

export interface WorkspaceData {
  files: Record<string, string>; // path -> base64 content
}

export interface TyrariaEditorOptions {
  initialWorkspace?: WorkspaceData;
  onWorkspaceChange?: (workspace: WorkspaceData) => void;
}