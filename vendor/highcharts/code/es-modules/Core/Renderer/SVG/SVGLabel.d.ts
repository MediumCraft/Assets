import type { AlignValue } from '../AlignObject';
import type BBoxObject from '../BBoxObject';
import type ColorType from '../../Color/ColorType';
import type CSSObject from '../CSSObject';
import type SVGAttributes from './SVGAttributes';
import type SVGPath from './SVGPath';
import type SVGRenderer from './SVGRenderer';
import SVGElement from './SVGElement.js';
/**
 * SVG label to render text.
 * @private
 * @class
 * @name Highcharts.SVGLabel
 * @augments Highcharts.SVGElement
 */
declare class SVGLabel extends SVGElement {
    static readonly emptyBBox: BBoxObject;
    /**
     * For labels, these CSS properties are applied to the `text` node directly.
     *
     * @private
     * @name Highcharts.SVGLabel#textProps
     * @type {Array<string>}
     */
    static textProps: Array<keyof CSSObject>;
    constructor(renderer: SVGRenderer, str: string, x: number, y?: number, shape?: string, // @todo (SymbolKey|string),
    anchorX?: number, anchorY?: number, useHTML?: boolean, baseline?: boolean, className?: string);
    alignFactor: number;
    baselineOffset: number;
    bBox: BBoxObject;
    box?: SVGElement;
    deferredAttr: (SVGAttributes & AnyRecord);
    heightSetting?: number;
    needsBox?: boolean;
    padding: number;
    paddingLeftSetter: (value: (number | string), key: string) => void;
    paddingRightSetter: (value: (number | string), key: string) => void;
    text: SVGElement;
    textStr: string;
    doUpdate: boolean;
    x: number;
    alignSetter(value: AlignValue): void;
    anchorXSetter(value: number, key: string): void;
    anchorYSetter(value: number, key: string): void;
    private boxAttr;
    css(styles: CSSObject): this;
    destroy(): undefined;
    fillSetter(value: ColorType, key: string): void;
    getBBox(reload?: boolean, rot?: number): BBoxObject;
    private getCrispAdjust;
    heightSetter(value: number): void;
    /**
     * This method is executed in the end of `attr()`, after setting all
     * attributes in the hash. In can be used to efficiently consolidate
     * multiple attributes in one SVG property -- e.g., translate, rotate and
     * scale are merged in one "transform" attribute in the SVG node.
     * Also updating height or width should trigger update of the box size.
     *
     * @private
     * @function Highcharts.SVGLabel#afterSetters
     */
    afterSetters(): void;
    onAdd(): void;
    paddingSetter(value: (number | string), key: string): void;
    rSetter(value: (number | string | ColorType | SVGPath), key: string): void;
    strokeSetter(value: ColorType, key: string): void;
    'stroke-widthSetter'(value: string, key: string): void;
    'text-alignSetter'(value: string): void;
    textSetter(text?: string): void;
    private updateBoxSize;
    updateTextPadding(): void;
    widthSetter(value: (number | string)): void;
    getPaddedWidth(): number;
    xSetter(value: number): void;
    ySetter(value: number): void;
}
export default SVGLabel;
