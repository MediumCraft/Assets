import type Annotation from '../Annotation';
import type AnnotationChart from '../AnnotationChart';
import type ControllableBase from './ControllableBase';
import type ControllableOptions from './ControllableOptions';
import type { DeepPartial } from '../../../Shared/Types';
import type SVGAttributes from '../../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import ControlTarget from '../ControlTarget.js';
export type AttrsMapObject = Record<keyof ControllableOptions, keyof SVGAttributes>;
/**
 * It provides methods for handling points, control points
 * and points transformations.
 * @private
 */
declare abstract class Controllable implements ControlTarget {
    constructor(annotation: Annotation, options: ControllableOptions, index: number, itemType: ('label' | 'shape'));
    annotation: Annotation;
    chart: AnnotationChart;
    collection: ('labels' | 'shapes');
    graphic: SVGElement;
    index: number;
    itemType: ('label' | 'shape');
    options: ControllableOptions;
    tracker?: SVGElement;
    /**
     * Redirect attr usage on the controllable graphic element.
     * @private
     */
    attr<T>(..._args: Array<T>): void;
    /**
     * Utility function for mapping item's options
     * to element's attribute
     * @private
     * @param {Highcharts.AnnotationsLabelsOptions|Highcharts.AnnotationsShapesOptions} options
     * @return {Highcharts.SVGAttributes}
     *         Mapped options.
     */
    attrsFromOptions(options: ControllableOptions): SVGAttributes;
    /**
     * Destroy a controllable.
     * @private
     */
    destroy(): void;
    /**
     * Init the controllable
     * @private
     */
    init(annotation: Annotation, options: ControllableOptions, index: number): void;
    /**
     * Redraw a controllable.
     * @private
     */
    redraw(animation?: boolean): void;
    /**
     * Render a controllable.
     * @private
     */
    render(_parentGroup?: SVGElement): void;
    /**
     * Rotate a controllable.
     * @private
     * @param {number} cx
     *        Origin x rotation
     * @param {number} cy
     *        Origin y rotation
     * @param {number} radians
     **/
    rotate(cx: number, cy: number, radians: number): void;
    /**
     * Scale a controllable.
     * @private
     * @param {number} cx
     *        Origin x rotation
     * @param {number} cy
     *        Origin y rotation
     * @param {number} sx
     *        Scale factor x
     * @param {number} sy
     *        Scale factor y
     */
    scale(cx: number, cy: number, sx: number, sy: number): void;
    /**
     * Set control points' visibility.
     * @private
     */
    setControlPointsVisibility(visible: boolean): void;
    /**
     * Check if a controllable should be rendered/redrawn.
     * @private
     * @return {boolean}
     *         Whether a controllable should be drawn.
     */
    shouldBeDrawn(): boolean;
    /**
     * Translate shape within controllable item.
     * Replaces `controllable.translate` method.
     * @private
     * @param {number} dx
     *        Translation for x coordinate
     * @param {number} dy
     *        Translation for y coordinate
     * @param {boolean|undefined} translateSecondPoint
     *        If the shape has two points attached to it, this option allows you
     *        to translate also the second point.
     */
    translateShape(dx: number, dy: number, translateSecondPoint?: boolean): void;
    /**
     * Update a controllable.
     * @private
     */
    update(newOptions: DeepPartial<ControllableOptions>): void;
}
interface Controllable extends ControllableBase, ControlTarget {
}
export default Controllable;
