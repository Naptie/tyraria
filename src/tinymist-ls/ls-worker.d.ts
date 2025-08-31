/**
 * Type definitions for ls-worker.mjs
 */

export interface WorkerMessage {
  method: string;
  params: {
    type: string;
    content: any;
  };
}

export interface TinymistServerClass {
  new (): TinymistServer;
}

export interface TinymistServer {
  initServer(): Promise<void>;
  initializeLanguageServer(): Promise<void>;
  handleMessage(message: any): Promise<void>;
}

declare global {
  interface Window {
    TinymistServer: TinymistServerClass;
  }
}

export {};