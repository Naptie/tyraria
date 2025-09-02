import * as vscode from 'vscode';
import {
  FileType,
  InMemoryFileSystemProvider,
  registerFileSystemOverlay
} from '@codingame/monaco-vscode-files-service-override';
import { URI } from '@codingame/monaco-vscode-api/vscode/vs/base/common/uri';
import { Buffer } from 'buffer';
import { defaultEntryFilePath, defaultHiddenPath } from './path-constants.mts';
import { defaultWorkspaceUri } from './uri-constants.mjs';
import { WorkspaceData } from '../lib';
import { isTextFile, isBase64, safeBase64Decode, uint8ArrayToString, stringToUint8Array } from '../lib/file-utils.mts';

export class FileSystemProvider extends InMemoryFileSystemProvider {
  protected textEncoder = new TextEncoder();

  constructor() {
    super();
  }

  async fileExists(uri: vscode.Uri) {
    try {
      await this.stat(uri);
      return true;
    } catch (_) {
      return false;
    }
  }

  async addFileToWorkspace(
    uriString: string,
    content: Uint8Array<ArrayBuffer>,
    open?: boolean
  ): Promise<vscode.Uri> {
    const uri = vscode.Uri.file(uriString);

    await this.createDirectory(uri);
    await this.writeFile(uri, content, {
      atomic: false,
      unlock: false,
      create: true,
      overwrite: true
    });

    if (open) {
      await vscode.workspace.openTextDocument(uri);
    }
    return uri;
  }

  async createDirectory(uri: vscode.Uri) {
    const segments = uri.path.split('/').slice(1, -1);
    for (let i = 0; i < segments.length; i++) {
      const path = '/' + segments.slice(0, i + 1).join('/');
      const dir = vscode.Uri.file(path);
      if (!(await this.fileExists(dir))) {
        await this.mkdir(dir);
      }
    }
  }

  async getAllFilesAsJSON(dirPath: string): Promise<WorkspaceData> {
    const files: Record<string, string> = {};

    try {
      await this.readDirectoryRecursively(dirPath, files);

      return {
        files
      };
    } catch (error) {
      console.error('Error reading directory files:', error);
      return { files: {} };
    }
  }

  private async readDirectoryRecursively(
    dirPath: string,
    files: Record<string, string>
  ): Promise<void> {
    try {
      const uri = URI.file(dirPath);
      const entries = await this.readdir(uri);

      for (const [name, type] of entries) {
        const fullPath = `${dirPath}/${name}`;
        const fileUri = URI.file(fullPath);

        if (type === FileType.File) {
          try {
            const fileContent = await this.readFile(fileUri);
            
            // Check if this is a text file based on extension
            if (isTextFile(fullPath)) {
              // Store text files as plain text (UTF-8)
              const textContent = uint8ArrayToString(fileContent);
              files[fullPath] = textContent;
            } else {
              // Store binary files as Base64
              const base64Content = Buffer.from(fileContent).toString('base64');
              files[fullPath] = base64Content;
            }
          } catch (error) {
            console.warn(`Failed to read file ${fullPath}:`, error);
          }
        } else if (type === FileType.Directory) {
          if (fullPath === defaultHiddenPath) {
            continue;
          }
          await this.readDirectoryRecursively(fullPath, files);
        }
      }
    } catch (error) {
      console.warn(`Failed to read directory ${dirPath}:`, error);
    }
  }

  async restoreFromJSON(jsonContent: string): Promise<void> {
    try {
      const data = JSON.parse(jsonContent);

      if (!data.files || typeof data.files !== 'object') {
        throw new Error('Invalid JSON format: missing files object');
      }
      for (const [filePath, content] of Object.entries(data.files)) {
        try {
          let fileContent: Uint8Array;
          
          // Check if this is a text file and if content appears to be Base64
          if (isTextFile(filePath) && !isBase64(content as string)) {
            // Content is plain text for a text file
            fileContent = stringToUint8Array(content as string);
          } else {
            // Content is Base64 (either for binary files or legacy text files)
            fileContent = safeBase64Decode(content as string);
          }
          
          await this.addFileToWorkspace(filePath, new Uint8Array(fileContent), true);
        } catch (error) {
          console.warn(`Failed to restore file ${filePath}:`, error);
        }
      }
    } catch (error) {
      console.error('Error restoring from JSON:', error);
      throw error;
    }
  }

  async empty(): Promise<URI> {
    await this.delete(defaultWorkspaceUri, {
      recursive: true,
      useTrash: false,
      atomic: false
    });
    return this.addFileToWorkspace(defaultEntryFilePath, new Uint8Array(0), true);
  }
}

export async function createFileSystemProvider(): Promise<FileSystemProvider> {
  const fileSystemProvider = new FileSystemProvider();
  registerFileSystemOverlay(1, fileSystemProvider);

  return fileSystemProvider;
}
