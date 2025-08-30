import { TypstPreviewHookedElement, TypstPreviewWindowElement } from "../typst-preview/types";
import { type GConstructor, type TypstDocumentContext } from "./typst-doc.mjs";
export interface ElementPoint {
    kind: number;
    index: number;
    fingerprint: string;
}
export declare function removeSourceMappingHandler(docRoot: TypstPreviewHookedElement): void;
export declare function resolveSourceLeaf(elem: Element, path: ElementPoint[]): [Element, number] | undefined;
export declare function installEditorJumpToHandler(windowElem: TypstPreviewWindowElement, docRoot: TypstPreviewHookedElement): void;
export interface TypstDebugJumpDocument {
}
export declare function provideDebugJumpDoc<TBase extends GConstructor<TypstDocumentContext>>(Base: TBase): TBase & GConstructor<TypstDebugJumpDocument>;
