import type BoxPlotPoint from './BoxPlotPoint';
import type BoxPlotSeriesOptions from './BoxPlotSeriesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import ColumnSeries from '../Column/ColumnSeries.js';
/**
 * The boxplot series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes#boxplot
 *
 * @augments Highcharts.Series
 */
declare class BoxPlotSeries extends ColumnSeries {
    static defaultOptions: BoxPlotSeriesOptions;
    data: Array<BoxPlotPoint>;
    options: BoxPlotSeriesOptions;
    points: Array<BoxPlotPoint>;
    pointAttribs(): SVGAttributes;
    getWhiskerPair(halfWidth: number, stemX: number, upperWhiskerLength: number | string, lowerWhiskerLength: number | string, point: BoxPlotPoint): SVGPath;
    translate(): void;
    /**
     * Draw the data points
     * @private
     */
    drawPoints(): void;
    toYData(point: BoxPlotPoint): Array<number>;
}
interface BoxPlotSeries extends ColumnSeries {
    doQuartiles?: boolean;
    pointArrayMap: Array<string>;
    pointClass: typeof BoxPlotPoint;
    pointValKey: string;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        boxplot: typeof BoxPlotSeries;
    }
}
export default BoxPlotSeries;
