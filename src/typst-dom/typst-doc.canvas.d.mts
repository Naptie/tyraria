import { TypstCancellationToken } from "./typst-cancel.mjs";
import type { GConstructor, TypstDocumentContext } from "./typst-doc.mjs";
import type { TypstOutlineDocument } from "./typst-outline.mjs";
export interface CanvasPage {
    tag: "canvas";
    index: number;
    width: number;
    height: number;
    container: HTMLElement;
    elem: HTMLElement;
    inserter?: (t: CanvasPage) => void;
    stub?: HTMLElement;
}
export interface CreateCanvasOptions {
    defaultInserter?: (page: CanvasPage) => void;
}
export interface UpdateCanvasOptions {
    cancel?: TypstCancellationToken;
    lazy?: boolean;
}
export interface TypstCanvasDocument {
    feat$canvas: boolean;
    createCanvas(pages: CanvasPage[], opts?: CreateCanvasOptions): void;
    updateCanvas(pages: CanvasPage[], opts?: UpdateCanvasOptions): Promise<void>;
}
export declare function provideCanvasDoc<TBase extends GConstructor<TypstDocumentContext & Partial<TypstOutlineDocument>>>(Base: TBase): TBase & GConstructor<TypstCanvasDocument>;
