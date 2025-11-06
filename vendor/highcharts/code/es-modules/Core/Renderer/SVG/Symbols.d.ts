import type SVGPath from './SVGPath';
import type SymbolOptions from './SymbolOptions';
import type { SymbolTypeRegistry } from './SymbolType';
/**
 *
 */
declare function arc(cx: number, cy: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 * Callout shape used for default tooltips.
 */
declare function callout(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 *
 */
declare function circle(x: number, y: number, w: number, h: number): SVGPath;
/**
 *
 */
declare function diamond(x: number, y: number, w: number, h: number): SVGPath;
/**
 *
 */
declare function rect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 *
 */
declare function roundedRect(x: number, y: number, w: number, h: number, options?: SymbolOptions): SVGPath;
/**
 *
 */
declare function triangle(x: number, y: number, w: number, h: number): SVGPath;
/**
 *
 */
declare function triangleDown(x: number, y: number, w: number, h: number): SVGPath;
declare module './SymbolType' {
    interface SymbolTypeRegistry {
        arc: typeof arc;
        callout: typeof callout;
        circle: typeof circle;
        diamond: typeof diamond;
        rect: typeof rect;
        roundedRect: typeof roundedRect;
        square: typeof rect;
        triangle: typeof triangle;
        'triangle-down': typeof triangleDown;
    }
}
declare const Symbols: SymbolTypeRegistry;
export default Symbols;
