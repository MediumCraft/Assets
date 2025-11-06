import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { WMAOptions, WMAParamsOptions } from './WMAOptions';
import type WMAPoint from './WMAPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The SMA series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.wma
 *
 * @augments Highcharts.Series
 */
declare class WMAIndicator extends SMAIndicator {
    /**
     * Weighted moving average indicator (WMA). This series requires `linkedTo`
     * option to be set.
     *
     * @sample stock/indicators/wma
     *         Weighted moving average indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/wma
     * @optionparent plotOptions.wma
     */
    static defaultOptions: WMAOptions;
    data: Array<WMAPoint>;
    options: WMAOptions;
    points: Array<WMAPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: WMAParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface WMAIndicator {
    pointClass: typeof WMAPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        wma: typeof WMAIndicator;
    }
}
export default WMAIndicator;
