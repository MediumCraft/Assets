import type LinePoint from './LinePoint';
import type LineSeriesOptions from './LineSeriesOptions';
import type { PlotOptionsOf } from '../../Core/Series/SeriesOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import Series from '../../Core/Series/Series.js';
/**
 * The line series is the base type and is therefor the series base prototype.
 *
 * @private
 */
declare class LineSeries extends Series {
    static defaultOptions: PlotOptionsOf<Series> & PlotOptionsOf<LineSeries>;
    data: Array<LinePoint>;
    options: LineSeriesOptions;
    points: Array<LinePoint>;
    /**
     * Draw the graph. Called internally when rendering line-like series
     * types. The first time it generates the `series.graph` item and
     * optionally other series-wide items like `series.area` for area
     * charts. On subsequent calls these items are updated with new
     * positions and attributes.
     *
     * @function Highcharts.Series#drawGraph
     */
    drawGraph(): void;
    /**
     * Get the graph path.
     *
     * @private
     */
    getGraphPath(points?: Array<LinePoint>, nullsAsZeroes?: boolean, connectCliffs?: boolean): SVGPath;
}
interface LineSeries {
    pointClass: typeof LinePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        line: typeof LineSeries;
    }
}
export default LineSeries;
