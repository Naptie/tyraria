import type { GConstructor, TypstDocumentContext } from "./typst-doc.mjs";
import type { TypstCanvasDocument } from "./typst-doc.canvas.mjs";
import { ElementPoint } from "./typst-debug-info.mjs";
export interface TypstSvgDocument {
    setCursorPaths(paths: ElementPoint[][]): void;
}
export declare function provideSvgDoc<TBase extends GConstructor<TypstDocumentContext & Partial<TypstCanvasDocument>>>(Base: TBase): TBase & GConstructor<TypstSvgDocument>;
