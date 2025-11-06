import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type Chart from '../../Core/Chart/Chart';
import type ColumnMetricsObject from './ColumnMetricsObject';
import type ColumnPoint from './ColumnPoint';
import type ColumnSeriesOptions from './ColumnSeriesOptions';
import type DashStyleValue from '../../Core/Renderer/DashStyleValue';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import Series from '../../Core/Series/Series.js';
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        barW?: number;
        pointXOffset?: number;
    }
}
/**
 * The column series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.column
 *
 * @augments Highcharts.Series
 */
declare class ColumnSeries extends Series {
    static defaultOptions: import("../../Core/Series/SeriesOptions").PlotOptionsOf<Series> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<ColumnSeries>;
    borderWidth: number;
    columnIndex?: number;
    columnMetrics?: ColumnMetricsObject;
    cropShould?: number;
    dashStyle?: DashStyleValue;
    data: Array<ColumnPoint>;
    dense?: boolean;
    group: SVGElement;
    options: ColumnSeriesOptions;
    points: Array<ColumnPoint>;
    pointXOffset?: number;
    translatedThreshold?: number;
    /**
     * Animate the column heights one by one from zero.
     *
     * @private
     * @function Highcharts.seriesTypes.column#animate
     *
     * @param {boolean} init
     *        Whether to initialize the animation or run it
     */
    animate(init: boolean): void;
    /**
     * Initialize the series. Extends the basic Series.init method by
     * marking other series of the same type as dirty.
     *
     * @private
     * @function Highcharts.seriesTypes.column#init
     */
    init(chart: Chart, options: ColumnSeriesOptions): void;
    /**
     * Return the width and x offset of the columns adjusted for grouping,
     * groupPadding, pointPadding, pointWidth etc.
     *
     * @private
     * @function Highcharts.seriesTypes.column#getColumnMetrics
     */
    getColumnMetrics(): ColumnMetricsObject;
    /**
     * Make the columns crisp. The edges are rounded to the nearest full
     * pixel.
     *
     * @private
     * @function Highcharts.seriesTypes.column#crispCol
     */
    crispCol(x: number, y: number, width: number, height: number): BBoxObject;
    /**
     * Adjust for missing columns, according to the `centerInCategory`
     * option. Missing columns are either single points or stacks where the
     * point or points are either missing or null.
     *
     * @private
     * @function Highcharts.seriesTypes.column#adjustForMissingColumns
     * @param {number} x
     * The x coordinate of the column, left side
     *
     * @param {number} pointWidth
     * The pointWidth, already computed upstream
     *
     * @param {Highcharts.ColumnPoint} point
     * The point instance
     *
     * @param {Highcharts.ColumnMetricsObject} metrics
     * The series-wide column metrics
     *
     * @return {number}
     * The adjusted x position, or the original if not adjusted
     */
    adjustForMissingColumns(x: number, pointWidth: number, point: ColumnPoint, metrics: ColumnMetricsObject): number;
    /**
     * Translate each point to the plot area coordinate system and find
     * shape positions
     *
     * @private
     * @function Highcharts.seriesTypes.column#translate
     */
    translate(): void;
    /**
     * Columns have no graph
     *
     * @private
     * @function Highcharts.seriesTypes.column#drawGraph
     */
    drawGraph(): void;
    /**
     * Get presentational attributes
     *
     * @private
     * @function Highcharts.seriesTypes.column#pointAttribs
     */
    pointAttribs(point?: ColumnPoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Draw the columns. For bars, the series.group is rotated, so the same
     * coordinates apply for columns and bars. This method is inherited by
     * scatter series.
     *
     * @private
     * @function Highcharts.seriesTypes.column#drawPoints
     */
    drawPoints(points?: Array<ColumnPoint>): void;
    /**
     * Draw the tracker for a point.
     * @private
     */
    drawTracker(points?: Array<ColumnPoint>): void;
    /**
     * Remove this series from the chart
     *
     * @private
     * @function Highcharts.seriesTypes.column#remove
     */
    remove(): void;
}
interface ColumnSeries {
    pointClass: typeof ColumnPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        column: typeof ColumnSeries;
    }
}
export default ColumnSeries;
