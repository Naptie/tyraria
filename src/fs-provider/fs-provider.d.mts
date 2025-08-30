import * as vscode from "vscode";
import { InMemoryFileSystemProvider } from "@codingame/monaco-vscode-files-service-override";
import { URI } from "@codingame/monaco-vscode-api/vscode/vs/base/common/uri";
export declare class FileSystemProvider extends InMemoryFileSystemProvider {
    protected textEncoder: TextEncoder;
    constructor();
    fileExists(uri: vscode.Uri): Promise<boolean>;
    addFileToWorkspace(uriString: string, content: Uint8Array<ArrayBuffer>, open?: boolean): Promise<vscode.Uri>;
    createDirectory(uri: vscode.Uri): Promise<void>;
    getAllFilesAsJSON(dirPath: string): Promise<string>;
    private readDirectoryRecursively;
    restoreFromJSON(jsonContent: string): Promise<void>;
    empty(): Promise<URI>;
}
export declare function createFileSystemProvider(): Promise<FileSystemProvider>;
