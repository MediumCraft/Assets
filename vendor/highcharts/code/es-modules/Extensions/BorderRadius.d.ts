import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer';
import Series from '../Core/Series/Series.js';
export interface BorderRadiusOptionsObject {
    radius: number | string;
    scope: 'point' | 'stack';
    where?: 'end' | 'all';
}
declare module '../Core/Renderer/SVG/SVGAttributes' {
    interface SVGAttributes {
        borderRadius?: number | string;
        /** The height of the border-radius box  */
        brBoxHeight?: number;
        /** The y position of the border-radius box  */
        brBoxY?: number;
        /** Corresponding to the `borderRadius.where` option */
        brEnd?: boolean;
        brStart?: boolean;
    }
}
declare module '../Core/Renderer/SVG/SymbolOptions' {
    interface SymbolOptions {
        borderRadius?: number | string;
        brBoxHeight?: number;
        brBoxY?: number;
        brEnd?: boolean;
        brStart?: boolean;
    }
}
/** @private */
declare function compose(SeriesClass: typeof Series, SVGElementClass: typeof SVGElement, SVGRendererClass: typeof SVGRenderer): void;
/** @private */
declare function optionsToObject(options?: number | string | Partial<BorderRadiusOptionsObject>, seriesBROptions?: Partial<BorderRadiusOptionsObject>): BorderRadiusOptionsObject;
declare const BorderRadius: {
    compose: typeof compose;
    optionsToObject: typeof optionsToObject;
};
export default BorderRadius;
