import type Axis from '../../Core/Axis/Axis';
import type BubbleSeriesOptions from './BubbleSeriesOptions';
import type Chart from '../../Core/Chart/Chart';
import type Legend from '../../Core/Legend/Legend';
import type Point from '../../Core/Series/Point';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type KDPointSearchObjectBase from '../../Core/Series/KDPointSearchObjectBase';
import type PointerEvent from '../../Core/PointerEvent';
import BubblePoint from './BubblePoint.js';
declare const columnProto: import("../Column/ColumnSeries").default, ScatterSeries: typeof import("../Scatter/ScatterSeries").default;
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        bubbleZExtremes?: BubbleZExtremes;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        bubblePadding?: BubbleSeries['bubblePadding'];
        radii?: BubbleSeries['radii'];
        specialGroup?: BubbleSeries['specialGroup'];
        zData?: BubbleSeries['zData'];
    }
}
type BubblePxExtremes = {
    minPxSize: number;
    maxPxSize: number;
};
type BubbleZExtremes = {
    zMin: number;
    zMax: number;
};
interface KDPointSearchObject extends KDPointSearchObjectBase {
}
declare class BubbleSeries extends ScatterSeries {
    /**
     * A bubble series is a three dimensional series type where each point
     * renders an X, Y and Z value. Each points is drawn as a bubble where the
     * position along the X and Y axes mark the X and Y values, and the size of
     * the bubble relates to the Z value.
     *
     * @sample {highcharts} highcharts/demo/bubble/
     *         Bubble chart
     *
     * @extends      plotOptions.scatter
     * @excluding    cluster
     * @product      highcharts highstock
     * @requires     highcharts-more
     * @optionparent plotOptions.bubble
     */
    static defaultOptions: BubbleSeriesOptions;
    static compose(AxisClass: typeof Axis, ChartClass: typeof Chart, LegendClass: typeof Legend): void;
    data: Array<BubblePoint>;
    displayNegative: BubbleSeriesOptions['displayNegative'];
    maxPxSize: number;
    minPxSize: number;
    options: BubbleSeriesOptions;
    points: Array<BubblePoint>;
    radii: Array<(number | null)>;
    yData: Array<(number | null)>;
    zData: Array<(number | null)>;
    zMax: BubbleSeriesOptions['zMax'];
    zMin: BubbleSeriesOptions['zMin'];
    /**
     * Perform animation on the bubbles
     * @private
     */
    animate(init?: boolean): void;
    /**
     * Get the radius for each point based on the minSize, maxSize and each
     * point's Z value. This must be done prior to Series.translate because
     * the axis needs to add padding in accordance with the point sizes.
     * @private
     */
    getRadii(): void;
    /**
     * Get the individual radius for one point.
     * @private
     */
    getRadius(zMin: number, zMax: number, minSize: number, maxSize: number, value: (number | null | undefined), yValue?: (number | null)): (number | null);
    /**
     * Define hasData function for non-cartesian series.
     * Returns true if the series has points at all.
     * @private
     */
    hasData(): boolean;
    /**
     * @private
     */
    markerAttribs(point: Point, state?: StatesOptionsKey): SVGAttributes;
    /**
     * @private
     */
    pointAttribs(point?: BubblePoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Extend the base translate method to handle bubble size
     * @private
     */
    translate(): void;
    translateBubble(): void;
    getPxExtremes(): BubblePxExtremes;
    getZExtremes(): BubbleZExtremes | undefined;
    /**
     * @private
     * @function Highcharts.Series#searchKDTree
     */
    searchKDTree(point: KDPointSearchObject, compareX?: boolean, e?: PointerEvent, suppliedPointEvaluator?: Function, suppliedBSideCheckEvaluator?: Function): (Point | undefined);
}
interface BubbleSeries {
    alignDataLabel: typeof columnProto.alignDataLabel;
    bubblePadding: boolean;
    isBubble: true;
    pointClass: typeof BubblePoint;
    specialGroup: 'group' | 'markerGroup';
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        bubble: typeof BubbleSeries;
    }
}
export default BubbleSeries;
