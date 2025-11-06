import type Axis from '../../Core/Axis/Axis';
import type HeikinAshiSeriesOptions from './HeikinAshiSeriesOptions';
import type Series from '../../Core/Series/Series';
import HeikinAshiPoint from './HeikinAshiPoint.js';
declare const CandlestickSeries: typeof import("../Candlestick/CandlestickSeries").default;
/**
 * The Heikin Ashi series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.heikinashi
 *
 * @augments Highcharts.Series
 */
declare class HeikinAshiSeries extends CandlestickSeries {
    static defaultOptions: HeikinAshiSeriesOptions;
    static compose(SeriesClass: typeof Series, AxisClass: typeof Axis): void;
    data: Array<HeikinAshiPoint>;
    heikiashiData: Array<Array<number>>;
    options: HeikinAshiSeriesOptions;
    points: Array<HeikinAshiPoint>;
    yData: Array<Array<number>>;
    processedYData: Array<Array<(number | null)>>;
    /**
     * Calculate data set for the heikinashi series before creating the points.
     * @private
     */
    getHeikinashiData(): void;
    /**
     * @private
     */
    init(): void;
    /**
     * Calculate and modify the first data point value.
     * @private
     * @param {Array<(number)>} dataPoint
     *        Current data point.
     */
    modifyFirstPointValue(dataPoint: Array<(number)>): void;
    /**
     * Calculate and modify the data point's value.
     * @private
     * @param {Array<(number)>} dataPoint
     *        Current data point.
     * @param {Array<(number)>} previousDataPoint
     *        Previous data point.
     */
    modifyDataPoint(dataPoint: Array<(number)>, previousDataPoint: Array<(number)>): void;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        heikinashi: typeof HeikinAshiSeries;
    }
}
export default HeikinAshiSeries;
