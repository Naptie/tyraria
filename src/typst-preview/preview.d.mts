import { BrowserMessageReader, BrowserMessageWriter } from "vscode-languageclient/browser";
interface Ref<T> {
    value: T;
}
import { TypstPreviewHookedElement, TypstPreviewWindowElement } from "./types";
export declare function usePreviewComponent(reader: BrowserMessageReader, writer: BrowserMessageWriter, hookedElem: Ref<TypstPreviewHookedElement>, windowElem: Ref<TypstPreviewWindowElement>, outerElem: Ref<HTMLElement>): {
    initPreviewInner: () => Promise<() => void>;
};
export {};
