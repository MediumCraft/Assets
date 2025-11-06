import type AnimationOptions from '../Core/Animation/AnimationOptions';
import type BBoxObject from '../Core/Renderer/BBoxObject';
import type Chart from '../Core/Chart/Chart.js';
import type ColorString from '../Core/Color/ColorString';
import type Series from '../Core/Series/Series.js';
import type SVGAttributes from '../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer.js';
declare module '../Core/Renderer/SVG/SVGRendererBase' {
    interface SVGRendererBase {
        defIds?: Array<string>;
        idCounter?: number;
        patternElements?: Record<string, SVGElement>;
        addPattern(options: PatternOptionsObject, animation?: (boolean | AnimationOptions)): (SVGElement | undefined);
    }
}
declare module '../Core/Series/PointBase' {
    interface PointBase {
        /** @requires modules/pattern-fill */
        calculatePatternDimensions(pattern: PatternOptionsObject): void;
    }
}
export interface BPatternObject extends BBoxObject {
    aspectHeight?: number;
    aspectRatio?: number;
    aspectWidth?: number;
}
export interface PatternObject {
    animation?: Partial<AnimationOptions>;
    pattern: PatternOptionsObject;
    patternIndex?: number;
}
export interface PatternOptionsObject {
    _inverted?: boolean;
    _height?: (number | string);
    _width?: (number | string);
    _x?: number;
    _y?: number;
    aspectRatio?: number;
    backgroundColor?: ColorString;
    color: ColorString;
    height: number;
    id?: string;
    image?: string;
    opacity?: number;
    path: (string | SVGAttributes);
    patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    patternTransform?: string;
    width: number;
    x?: number;
    y?: number;
}
/** @private */
declare function compose(ChartClass: typeof Chart, SeriesClass: typeof Series, SVGRendererClass: typeof SVGRenderer): void;
declare module '../Core/Color/ColorType' {
    interface ColorTypeRegistry {
        PatternFill: PatternObject;
    }
}
declare const PatternFill: {
    compose: typeof compose;
    patterns: PatternOptionsObject[];
};
export default PatternFill;
