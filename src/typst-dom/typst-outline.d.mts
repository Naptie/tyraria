import { TypstPreviewWindowElement } from "../typst-preview/types";
import type { GConstructor, TypstDocumentContext } from "./typst-doc.mjs";
interface CursorPosition {
    page_no: number;
    x: number;
    y: number;
}
export interface OutlineItemData {
    span?: string;
    title: string;
    position?: CursorPosition;
    children: OutlineItemData[];
}
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
export declare function patchOutlineEntry(prev: HTMLDivElement, pages: CanvasPage[], items: OutlineItemData[], windowElem: TypstPreviewWindowElement): void;
export interface TypstOutlineDocument {
    patchOutlineEntry(prev: HTMLDivElement, pages: CanvasPage[], items: OutlineItemData[]): void;
}
export declare function provideOutlineDoc<TBase extends GConstructor<TypstDocumentContext>>(Base: TBase): TBase & GConstructor<TypstOutlineDocument>;
export {};
