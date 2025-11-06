import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { RSIOptions, RSIParamsOptions } from './RSIOptions';
import type RSIPoint from './RSIPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The RSI series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.rsi
 *
 * @augments Highcharts.Series
 */
declare class RSIIndicator extends SMAIndicator {
    /**
     * Relative strength index (RSI) technical indicator. This series
     * requires the `linkedTo` option to be set and should be loaded after
     * the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/rsi
     *         RSI indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/rsi
     * @optionparent plotOptions.rsi
     */
    static defaultOptions: RSIOptions;
    data: Array<RSIPoint>;
    points: Array<RSIPoint>;
    options: RSIOptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: RSIParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface RSIIndicator {
    pointClass: typeof RSIPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        rsi: typeof RSIIndicator;
    }
}
export default RSIIndicator;
