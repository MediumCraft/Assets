import type { AlignObject } from '../../../Core/Renderer/AlignObject';
import type Annotation from '../Annotation';
import type AnnotationChart from '../AnnotationChart';
import type { AnnotationPointType } from '../AnnotationSeries';
import type BBoxObject from '../../../Core/Renderer/BBoxObject';
import type { ControllableLabelOptions } from './ControllableOptions';
import type ControlTarget from '../ControlTarget';
import type PositionObject from '../../../Core/Renderer/PositionObject';
import type SVGAttributes from '../../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../../../Core/Renderer/SVG/SVGRenderer';
import Controllable from './Controllable.js';
declare module '../../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Extensions/ControllableLabel */
        connector: SymbolFunction;
    }
}
interface ControllableAlignObject extends AlignObject {
    height?: number;
    width?: number;
}
/**
 * A controllable label class.
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationControllableLabel
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 * @param {Highcharts.AnnotationsLabelOptions} options
 * A label's options.
 * @param {number} index
 * Index of the label.
 */
declare class ControllableLabel extends Controllable {
    /**
     * A map object which allows to map options attributes to element attributes
     *
     * @type {Highcharts.Dictionary<string>}
     */
    static attrsMap: {
        backgroundColor: string;
        borderColor: string;
        borderWidth: string;
        zIndex: string;
        borderRadius: string;
        padding: string;
    };
    /**
     * Shapes which do not have background - the object is used for proper
     * setting of the contrast color.
     *
     * @type {Array<string>}
     */
    static shapesWithoutBackground: string[];
    /**
     * Returns new aligned position based alignment options and box to align to.
     * It is almost a one-to-one copy from SVGElement.prototype.align
     * except it does not use and mutate an element
     *
     * @param {Highcharts.AnnotationAlignObject} alignOptions
     *
     * @param {Highcharts.BBoxObject} box
     *
     * @return {Highcharts.PositionObject}
     * Aligned position.
     */
    static alignedPosition(alignOptions: ControllableAlignObject, box: BBoxObject): PositionObject;
    static compose(SVGRendererClass: typeof SVGRenderer): void;
    /**
     * Returns new alignment options for a label if the label is outside the
     * plot area. It is almost a one-to-one copy from
     * Series.prototype.justifyDataLabel except it does not mutate the label and
     * it works with absolute instead of relative position.
     */
    static justifiedOptions(chart: AnnotationChart, label: SVGElement, alignOptions: ControllableAlignObject, alignAttr: SVGAttributes): ControllableAlignObject;
    constructor(annotation: Annotation, options: ControllableLabelOptions, index: number);
    text?: string;
    /**
     * Translate the point of the label by deltaX and deltaY translations.
     * The point is the label's anchor.
     *
     * @param {number} dx translation for x coordinate
     * @param {number} dy translation for y coordinate
     */
    translatePoint(dx: number, dy: number): void;
    /**
     * Translate x and y position relative to the label's anchor.
     *
     * @param {number} dx translation for x coordinate
     * @param {number} dy translation for y coordinate
     */
    translate(dx: number, dy: number): void;
    render(parent: SVGElement): void;
    redraw(animation?: boolean): void;
    /**
     * All basic shapes don't support alignTo() method except label.
     * For a controllable label, we need to subtract translation from
     * options.
     */
    anchor(_point: AnnotationPointType): ControlTarget.Anchor;
    /**
     * Returns the label position relative to its anchor.
     */
    position(anchor: ControlTarget.Anchor): (PositionObject | null | undefined);
}
interface ControllableLabel {
    collection: 'labels';
    itemType: 'label';
    options: ControllableLabelOptions;
}
declare module './ControllableType' {
    interface ControllableLabelTypeRegistry {
        label: typeof ControllableLabel;
    }
}
export default ControllableLabel;
