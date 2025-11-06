import type { ATROptions, ATRParamsOptions } from './ATROptions';
import type ATRPoint from './ATRPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The ATR series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.atr
 *
 * @augments Highcharts.Series
 */
declare class ATRIndicator extends SMAIndicator {
    /**
     * Average true range indicator (ATR). This series requires `linkedTo`
     * option to be set.
     *
     * @sample stock/indicators/atr
     *         ATR indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/atr
     * @optionparent plotOptions.atr
     */
    static defaultOptions: ATROptions;
    data: Array<ATRPoint>;
    points: Array<ATRPoint>;
    options: ATROptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: ATRParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface ATRIndicator {
    pointClass: typeof ATRPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        atr: typeof ATRIndicator;
    }
}
export default ATRIndicator;
