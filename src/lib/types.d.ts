export interface WorkspaceData {
  files: Record<string, string>; // filename -> base64 content
}

export interface FileData {
  path: string;
  content: string; // base64 encoded
}

export interface TyrariaEditorOptions {
  workspaceInput?: WorkspaceData['files'] | string;
  onWorkspaceOutput?: (output: WorkspaceData['files']) => void;
}

// Type for pastebin functions
export interface PastebinResponse {
  success: boolean;
  code?: string;
  error?: string;
}
