import type AnnotationChart from './AnnotationChart';
import type { AnnotationPoint, AnnotationPointType } from './AnnotationSeries';
import type Axis from '../../Core/Axis/Axis';
import type ControlTarget from './ControlTarget';
import type MockPointOptions from './MockPointOptions';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type Series from '../../Core/Series/Series';
declare module './AnnotationSeries' {
    interface AnnotationPoint {
        command?: string;
        mock: undefined;
    }
}
declare module './MockPointOptions' {
    interface MockPointOptions {
        command?: string;
        series?: undefined;
    }
}
export interface MockLabelConfigObject {
    x?: number;
    y?: (number | null);
    point: MockPoint;
}
interface MockSeries {
    chart: AnnotationChart;
    getPlotBox: Series['getPlotBox'];
    xAxis?: (Axis | null);
    yAxis?: (Axis | null);
    visible: boolean;
}
/**
 * A trimmed point object which imitates {@link Highchart.Point} class. It is
 * created when there is a need of pointing to some chart's position using axis
 * values or pixel values
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationMockPoint
 *
 * @hideconstructor
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.AnnotationControllable|null} target
 * The related controllable.
 *
 * @param {Highcharts.AnnotationMockPointOptionsObject|Function} options
 * The options object.
 */
declare class MockPoint {
    point: MockPoint;
    /**
     * Create a mock point from a real Highcharts point.
     *
     * @private
     * @static
     *
     * @param {Highcharts.Point} point
     *
     * @return {Highcharts.AnnotationMockPoint}
     * A mock point instance.
     */
    static fromPoint(point: AnnotationPoint): MockPoint;
    /**
     * Get the pixel position from the point like object.
     *
     * @private
     * @static
     *
     * @param {Highcharts.AnnotationPointType} point
     *
     * @param {boolean} [paneCoordinates]
     *        Whether the pixel position should be relative
     *
     * @return {Highcharts.PositionObject} pixel position
     */
    static pointToPixels(point: AnnotationPointType, paneCoordinates?: boolean): PositionObject;
    /**
     * Get fresh mock point options from the point like object.
     *
     * @private
     * @static
     *
     * @param {Highcharts.AnnotationPointType} point
     *
     * @return {Highcharts.AnnotationMockPointOptionsObject}
     * A mock point's options.
     */
    static pointToOptions(point: AnnotationPointType): MockPointOptions;
    constructor(chart: AnnotationChart, target: (ControlTarget | null), options: (MockPointOptions | Function));
    command?: string;
    isInside?: boolean;
    negative?: boolean;
    options: (MockPointOptions | Function);
    plotX: number;
    plotY: number;
    series: MockSeries;
    target: (ControlTarget | null);
    ttBelow?: boolean;
    visible?: boolean;
    x?: number;
    y?: (number | null);
    /**
     * A flag indicating that a point is not the real one.
     *
     * @type {boolean}
     * @default true
     */
    mock: true;
    /**
     * Apply options for the point.
     * @private
     * @param {Highcharts.AnnotationMockPointOptionsObject} options
     */
    applyOptions(options: MockPointOptions): void;
    /**
     * Get the point's options.
     * @private
     * @return {Highcharts.AnnotationMockPointOptionsObject}
     * The mock point's options.
     */
    getOptions(): MockPointOptions;
    /**
     * Check if the point has dynamic options.
     * @private
     * @return {boolean}
     * A positive flag if the point has dynamic options.
     */
    hasDynamicOptions(): boolean;
    /**
     * Check if the point is inside its pane.
     * @private
     * @return {boolean} A flag indicating whether the point is inside the pane.
     */
    isInsidePlot(): boolean;
    /**
     * Refresh point values and coordinates based on its options.
     * @private
     */
    refresh(): void;
    /**
     * Refresh point options based on its plot coordinates.
     * @private
     */
    refreshOptions(): void;
    /**
     * Rotate the point.
     * @private
     * @param {number} cx origin x rotation
     * @param {number} cy origin y rotation
     * @param {number} radians
     */
    rotate(cx: number, cy: number, radians: number): void;
    /**
     * Scale the point.
     *
     * @private
     *
     * @param {number} cx
     * Origin x transformation.
     *
     * @param {number} cy
     * Origin y transformation.
     *
     * @param {number} sx
     * Scale factor x.
     *
     * @param {number} sy
     * Scale factor y.
     */
    scale(cx: number, cy: number, sx: number, sy: number): void;
    /**
     * Set x or y axis.
     * @private
     * @param {Highcharts.AnnotationMockPointOptionsObject} options
     * @param {string} xOrY
     * 'x' or 'y' string literal
     */
    setAxis(options: MockPointOptions, xOrY: ('x' | 'y')): void;
    /**
     * Transform the mock point to an anchor (relative position on the chart).
     * @private
     * @return {Array<number>}
     * A quadruple of numbers which denotes x, y, width and height of the box
     **/
    toAnchor(): Array<number>;
    /**
     * Translate the point.
     *
     * @private
     *
     * @param {number|undefined} cx
     * Origin x transformation.
     *
     * @param {number|undefined} cy
     * Origin y transformation.
     *
     * @param {number} dx
     * Translation for x coordinate.
     *
     * @param {number} dy
     * Translation for y coordinate.
     **/
    translate(_cx: (number | undefined), _cy: (number | undefined), dx: number, dy: number): void;
}
export default MockPoint;
