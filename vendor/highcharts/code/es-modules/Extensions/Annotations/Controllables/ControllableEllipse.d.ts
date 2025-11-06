import type Annotation from '../Annotation';
import type { AnnotationPointType } from '../AnnotationSeries';
import type { ControllableShapeOptions } from './ControllableOptions';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import AxisType from '../../../Core/Axis/AxisType';
import BBoxObject from '../../../Core/Renderer/BBoxObject';
import Controllable from './Controllable.js';
interface EllipseShapeOptions extends ControllableShapeOptions {
    yAxis: number;
    xAxis: number;
    ry: number;
}
interface EllipseShapeSVGOptions {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    angle: number;
}
interface ReferencePointsOptions {
    x: number;
    y: number;
}
/**
 * A controllable ellipse class.
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationControllableEllipse
 *
 * @param {Highcharts.Annotation} annotation an annotation instance
 * @param {Highcharts.AnnotationsShapeOptions} options a shape's options
 * @param {number} index of the Ellipse
 */
declare class ControllableEllipse extends Controllable {
    /**
     * A map object which allows to map options attributes to element
     * attributes.
     *
     * @name Highcharts.AnnotationControllableEllipse.attrsMap
     * @type {Highcharts.Dictionary<string>}
     */
    static attrsMap: {
        dashStyle: string;
        strokeWidth: string;
        stroke: string;
        fill: string;
        zIndex: string;
    } & {
        ry: string;
    };
    constructor(annotation: Annotation, options: EllipseShapeOptions, index: number);
    type: string;
    /**
     * @private
     */
    init(annotation: Annotation, options: EllipseShapeOptions, index: number): void;
    /**
     * Render the element
     * @private
     * @param parent
     *        Parent SVG element.
     */
    render(parent: SVGElement): void;
    /**
     * Translate the points. Mostly used to handle dragging of the ellipse.
     * @private
     */
    translate(dx: number, dy: number): void;
    /**
     * Get the distance from the line to the point.
     * @private
     * @param point1
     *        First point which is on the line
     * @param point2
     *        Second point
     * @param x0
     *        Point's x value from which you want to calculate the distance from
     * @param y0
     *        Point's y value from which you want to calculate the distance from
     */
    getDistanceFromLine(point1: ReferencePointsOptions, point2: ReferencePointsOptions, x0: number, y0: number): number;
    /**
     * The function calculates the svg attributes of the ellipse, and returns
     * all parameters necessary to draw the ellipse.
     * @private
     * @param position
     *        Absolute position of the first point in points array
     * @param position2
     *        Absolute position of the second point in points array
     */
    getAttrs(position: BBoxObject, position2: BBoxObject): EllipseShapeSVGOptions;
    /**
     * Get the value of minor radius of the ellipse.
     * @private
     */
    getRY(): number;
    /**
     * Get the yAxis object to which the ellipse is pinned.
     * @private
     */
    getYAxis(): AxisType;
    /**
     * Get the absolute coordinates of the MockPoint
     * @private
     * @param point
     *        MockPoint that is added through options
     */
    getAbsolutePosition(point: AnnotationPointType): BBoxObject;
    /**
     * Redraw the element
     * @private
     * @param animation
     *        Display an animation
     */
    redraw(animation?: boolean): void;
    /**
     * Set the radius Y.
     * @private
     * @param {number} ry
     *        A radius in y direction to be set
     */
    setYRadius(ry: number): void;
}
interface ControllableEllipse {
    collection: 'shapes';
    itemType: 'shape';
    options: EllipseShapeOptions;
}
declare module './ControllableType' {
    interface ControllableShapeTypeRegistry {
        ellipse: typeof ControllableEllipse;
    }
}
export default ControllableEllipse;
