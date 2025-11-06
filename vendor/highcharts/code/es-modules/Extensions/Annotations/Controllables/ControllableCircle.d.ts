import type Annotation from '../Annotation';
import type { ControllableShapeOptions } from './ControllableOptions';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import Controllable from './Controllable.js';
/**
 * A controllable circle class.
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationControllableCircle
 *
 * @param {Highcharts.Annotation} annotation an annotation instance
 * @param {Highcharts.AnnotationsShapeOptions} options a shape's options
 * @param {number} index of the circle
 */
declare class ControllableCircle extends Controllable {
    /**
     * A map object which allows to map options attributes to element
     * attributes.
     *
     * @name Highcharts.AnnotationControllableCircle.attrsMap
     * @type {Highcharts.Dictionary<string>}
     */
    static attrsMap: {
        dashStyle: string;
        strokeWidth: string;
        stroke: string;
        fill: string;
        zIndex: string;
    } & {
        r: string;
    };
    constructor(annotation: Annotation, options: ControllableShapeOptions, index: number);
    type: string;
    translate: (dx: number, dy: number, translateSecondPoint?: boolean) => void;
    /**
     * @private
     */
    redraw(animation?: boolean): void;
    /**
     * @private
     */
    render(parent: SVGElement): void;
    /**
     * Set the radius.
     * @private
     * @param {number} r
     *        A radius to be set
     */
    setRadius(r: number): void;
}
interface ControllableCircle {
    collection: 'shapes';
    itemType: 'shape';
    options: ControllableShapeOptions;
}
declare module './ControllableType' {
    interface ControllableShapeTypeRegistry {
        circle: typeof ControllableCircle;
    }
}
export default ControllableCircle;
