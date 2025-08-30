export * from "./typst-doc.mjs";
import { TypstDocumentContext } from "./typst-doc.mjs";
declare const TypstPreviewDocument_base: new (options: import("./typst-doc.mjs").Options) => import("./typst-doc.mjs").TypstDocument<TypstDocumentContext<unknown> & import("./typst-outline.mjs").TypstOutlineDocument & import("./typst-doc.canvas.mjs").TypstCanvasDocument & import("./typst-doc.svg.mjs").TypstSvgDocument & import("./typst-debug-info.mjs").TypstDebugJumpDocument>;
export declare class TypstPreviewDocument extends TypstPreviewDocument_base {
}
