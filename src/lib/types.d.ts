export interface FileContent {
  content: string;
  encoding: 'utf-8' | 'base64';
}

export interface WorkspaceData {
  files: Record<string, FileContent>; // filename -> file content with encoding metadata
}

export interface FileData {
  path: string;
  content: string; // base64 encoded for binary files, plain text for text files
}

export interface TyrariaEditorOptions {
  workspaceInput?: WorkspaceData['files'] | string;
  onWorkspaceOutput?: (output: WorkspaceData['files']) => void;
  enableShare?: boolean;
}

// Type for pastebin functions
export interface PastebinResponse {
  success: boolean;
  code?: string;
  error?: string;
}
