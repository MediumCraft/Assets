import type { CMFOptions, CMFParamsOptions } from './CMFOptions';
import type CMFPoint from './CMFPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The CMF series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cmf
 *
 * @augments Highcharts.Series
 */
declare class CMFIndicator extends SMAIndicator {
    /**
     * Chaikin Money Flow indicator (cmf).
     *
     * @sample stock/indicators/cmf/
     *         Chaikin Money Flow indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @excluding    animationLimit
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/cmf
     * @optionparent plotOptions.cmf
     */
    static defaultOptions: CMFOptions;
    data: Array<CMFPoint>;
    options: CMFOptions;
    points: Array<CMFPoint>;
    volumeSeries: LineSeries;
    linkedParent: LineSeries;
    yData: Array<Array<number>>;
    nameBase: string;
    /**
     * Checks if the series and volumeSeries are accessible, number of
     * points.x is longer than period, is series has OHLC data
     * @private
     * @param {Highcharts.CMFIndicator} this indicator to use.
     * @return {boolean} True if series is valid and can be computed,
     * otherwise false.
     */
    isValid(this: CMFIndicator): boolean;
    /**
     * Returns indicator's data.
     * @private
     * @param {Highcharts.CMFIndicator} this indicator to use.
     * @param {Highcharts.Series} series to calculate values from
     * @param {Highcharts.CMFIndicatorParamsOptions} params to pass
     * @return {boolean|Highcharts.IndicatorNullableValuesObject} Returns false if the
     * indicator is not valid, otherwise returns Values object.
     */
    getValues<TLinkedSeries extends LineSeries>(this: CMFIndicator, series: TLinkedSeries & IndicatorLinkedSeriesBase, params: CMFParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
    /**
     * @private
     *
     * @param {Array<number>} xData
     * x timestamp values
     *
     * @param {Array<number>} seriesYData
     * yData of basic series
     *
     * @param {Array<number>} volumeSeriesYData
     * yData of volume series
     *
     * @param {number} period
     * indicator's param
     *
     * @return {Highcharts.IndicatorNullableValuesObject}
     * object containing computed money flow data
     */
    getMoneyFlow<TLinkedSeries extends LineSeries>(xData: Array<number>, seriesYData: IndicatorLinkedSeriesBase['yData'], volumeSeriesYData: Array<number>, period: number): IndicatorValuesObject<TLinkedSeries>;
}
interface CMFIndicator {
    pointClass: typeof CMFPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        cmf: typeof CMFIndicator;
    }
}
export default CMFIndicator;
