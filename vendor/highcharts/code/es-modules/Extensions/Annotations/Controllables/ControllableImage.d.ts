import type Annotation from '../Annotation';
import type { ControllableShapeOptions } from './ControllableOptions';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import Controllable from './Controllable.js';
/**
 * A controllable image class.
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationControllableImage
 *
 * @param {Highcharts.Annotation} annotation
 * An annotation instance.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A controllable's options.
 *
 * @param {number} index
 * Index of the image.
 */
declare class ControllableImage extends Controllable {
    /**
     * A map object which allows to map options attributes to element attributes
     *
     * @name Highcharts.AnnotationControllableImage.attrsMap
     * @type {Highcharts.Dictionary<string>}
     */
    static attrsMap: {
        width: string;
        height: string;
        zIndex: string;
    };
    constructor(annotation: Annotation, options: ControllableShapeOptions, index: number);
    type: string;
    translate: (dx: number, dy: number, translateSecondPoint?: boolean) => void;
    render(parent: SVGElement): void;
    redraw(animation?: boolean): void;
}
interface ControllableImage {
    collections: 'shapes';
    itemType: 'shape';
    options: ControllableShapeOptions;
}
declare module './ControllableType' {
    interface ControllableShapeTypeRegistry {
        image: typeof ControllableImage;
    }
}
export default ControllableImage;
