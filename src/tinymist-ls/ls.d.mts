import { BrowserMessageReader, BrowserMessageWriter } from "vscode-languageclient/browser";
import { MonacoLanguageClient } from "monaco-languageclient";
import { FileSystemProvider } from "../fs-provider/fs-provider.mts";
export declare class TinymistLS {
    worker: Worker | null;
    lsClient: MonacoLanguageClient | null;
    fsProvider: FileSystemProvider | null;
    private reader;
    private writer;
    private watcher;
    private packagePromiseCache;
    constructor();
    startWorker(): Promise<Worker>;
    resolvePackage(url: string, packageRoot: string): Promise<void>;
    _doResolvePackage(url: string, packageRoot: string): Promise<void>;
    loadWasm(): Promise<void>;
    loadFonts(fonts: any[]): Promise<void>;
    startTinymistServer(): Promise<{
        reader: BrowserMessageReader;
        writer: BrowserMessageWriter;
    }>;
    initWatcher(): Promise<void>;
    sendWorkerMessage(type: string, content: any): void;
    _waitWorkerMessageInner(condition: (_data: WorkerMessage) => boolean, timeout: number, errorMessage?: string): Promise<unknown>;
    waitWorkerMessage(type: string, timeout?: number): Promise<unknown>;
}
interface FileResult {
    type: "ok" | "err";
    content?: string;
    error?: string;
}
interface FileChange {
    uri: string;
    content: FileResult;
}
/**
 * A parameter literal used in requests to pass a list of file changes.
 */
export interface FsChangeParams {
    inserts: FileChange[];
    removes: string[];
    isSync: boolean;
}
export interface WorkerMessage {
    method: string;
    params?: {
        type?: string;
        content?: any;
        data?: any;
    };
}
export {};
