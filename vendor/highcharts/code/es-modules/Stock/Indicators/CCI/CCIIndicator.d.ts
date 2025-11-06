import type { CCIOptions, CCIParamsOptions } from './CCIOptions';
import type CCIPoint from './CCIPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The CCI series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cci
 *
 * @augments Highcharts.Series
 */
declare class CCIIndicator extends SMAIndicator {
    /**
     * Commodity Channel Index (CCI). This series requires `linkedTo` option to
     * be set.
     *
     * @sample stock/indicators/cci
     *         CCI indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/cci
     * @optionparent plotOptions.cci
     */
    static defaultOptions: CCIOptions;
    data: Array<CCIPoint>;
    points: Array<CCIPoint>;
    options: CCIOptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: CCIParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface CCIIndicator {
    pointClass: typeof CCIPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        cci: typeof CCIIndicator;
    }
}
export default CCIIndicator;
