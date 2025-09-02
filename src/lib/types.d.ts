export interface WorkspaceData {
  files: Record<string, string>; // filename -> content (base64 for binary files, plain text for text files)
}

export interface FileData {
  path: string;
  content: string; // base64 encoded for binary files, plain text for text files
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
