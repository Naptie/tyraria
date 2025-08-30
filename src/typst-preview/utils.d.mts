import { Observable } from "rxjs";
import { BrowserMessageWriter } from "vscode-languageclient/browser";
import { TypstPreviewMessage, TypstPreviewPageInner } from "./types";
export declare function createResizeObservable(element: HTMLElement): Observable<unknown>;
export declare function sendWebSocketMessage(writer: BrowserMessageWriter, data: string | ArrayBuffer): Promise<void>;
/** The strategy to set invert colors, see editors/vscode/package.json for enum descriptions */
export declare const INVERT_COLORS_STRATEGY: readonly ["never", "auto", "always"];
export declare function isTypstPreviewMessage(message: any): message is TypstPreviewMessage;
export declare function isTypstPreviewPageInner(element: Element | null | undefined): element is TypstPreviewPageInner;
export declare const ignoredEvent: (callback: () => void, delay: number, id: string) => void;
export declare function getRelatedElements(event: any): any;
