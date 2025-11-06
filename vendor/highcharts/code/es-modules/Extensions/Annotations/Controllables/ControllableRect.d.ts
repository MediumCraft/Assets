import type Annotation from '../Annotation';
import type { ControllableShapeOptions } from './ControllableOptions';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import Controllable from './Controllable.js';
/**
 * A controllable rect class.
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationControllableRect
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A rect's options.
 *
 * @param {number} index
 * Index of the rectangle
 */
declare class ControllableRect extends Controllable {
    /**
     * A map object which allows to map options attributes to element attributes
     *
     * @type {Annotation.ControllableRect.AttrsMap}
     */
    static attrsMap: {
        dashStyle: string;
        strokeWidth: string;
        stroke: string;
        fill: string;
        zIndex: string;
    } & {
        width: string;
        height: string;
    };
    constructor(annotation: Annotation, options: ControllableShapeOptions, index: number);
    type: string;
    translate: (dx: number, dy: number, translateSecondPoint?: boolean) => void;
    render(parent: SVGElement): void;
    redraw(animation?: boolean): void;
}
interface ControllableRect {
    collections: 'shapes';
    itemType: 'shape';
    options: ControllableShapeOptions;
}
declare module './ControllableType' {
    interface ControllableShapeTypeRegistry {
        rect: typeof ControllableRect;
    }
}
export default ControllableRect;
