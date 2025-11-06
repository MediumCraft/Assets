import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { NATROptions, NATRParamsOptions } from './NATROptions';
import type NATRPoint from './NATRPoint';
declare const ATRIndicator: typeof import("../ATR/ATRIndicator").default;
/**
 * The NATR series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.natr
 *
 * @augments Highcharts.Series
 */
declare class NATRIndicator extends ATRIndicator {
    /**
     * Normalized average true range indicator (NATR). This series requires
     * `linkedTo` option to be set and should be loaded after the
     * `stock/indicators/indicators.js` and `stock/indicators/atr.js`.
     *
     * @sample {highstock} stock/indicators/natr
     *         NATR indicator
     *
     * @extends      plotOptions.atr
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/natr
     * @optionparent plotOptions.natr
     */
    static defaultOptions: NATROptions;
    /**
     * @lends Highcharts.Series#
     */
    data: Array<NATRPoint>;
    points: Array<NATRPoint>;
    options: NATROptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: NATRParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface NATRIndicator {
    pointClass: typeof NATRPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        natr: typeof NATRIndicator;
    }
}
export default NATRIndicator;
