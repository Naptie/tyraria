export interface WorkspaceData {
  files: Record<string, string>; // filename -> base64 content
}

export interface FileData {
  path: string;
  content: string; // base64 encoded
}

export interface TyrariaEditorOptions {
  initialWorkspace?: WorkspaceData;
  onWorkspaceChange?: (_workspace: WorkspaceData) => void;
}

// Type for pastebin functions
export interface PastebinResponse {
  success: boolean;
  code?: string;
  error?: string;
}
