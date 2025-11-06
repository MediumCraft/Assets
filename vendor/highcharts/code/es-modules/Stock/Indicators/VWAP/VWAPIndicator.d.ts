import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { VWAPOptions, VWAPParamsOptions } from './VWAPOptions';
import type VWAPPoint from './VWAPPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Volume Weighted Average Price (VWAP) series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.vwap
 *
 * @augments Highcharts.Series
 */
declare class VWAPIndicator extends SMAIndicator {
    /**
     * Volume Weighted Average Price indicator.
     *
     * This series requires `linkedTo` option to be set.
     *
     * @sample stock/indicators/vwap
     *         Volume Weighted Average Price indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/vwap
     * @optionparent plotOptions.vwap
     */
    static defaultOptions: VWAPOptions;
    data: Array<VWAPPoint>;
    points: Array<VWAPPoint>;
    options: VWAPOptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: VWAPParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
    /**
     * Main algorithm used to calculate Volume Weighted Average Price (VWAP)
     * values
     *
     * @private
     *
     * @param {boolean} isOHLC
     * Says if data has OHLC format
     *
     * @param {Array<number>} xValues
     * Array of timestamps
     *
     * @param {Array<number|Array<number,number,number,number>>} yValues
     * Array of yValues, can be an array of a four arrays (OHLC) or array of
     * values (line)
     *
     * @param {Array<*>} volumeSeries
     * Volume series
     *
     * @param {number} period
     * Number of points to be calculated
     *
     * @return {Object}
     * Object contains computed VWAP
     **/
    calculateVWAPValues<TLinkedSeries extends LineSeries>(isOHLC: boolean, xValues: Array<number>, yValues: (Array<number> | Array<[number, number, number, number]>), volumeSeries: TLinkedSeries, period: number): IndicatorValuesObject<TLinkedSeries>;
}
interface VWAPIndicator {
    pointClass: typeof VWAPPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        vwap: typeof VWAPIndicator;
    }
}
export default VWAPIndicator;
