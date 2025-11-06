import type { DPOOptions, DPOParamsOptions } from './DPOOptions';
import type DPOPoint from './DPOPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The DPO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dpo
 *
 * @augments Highcharts.Series
 */
declare class DPOIndicator extends SMAIndicator {
    /**
     * Detrended Price Oscillator. This series requires the `linkedTo` option to
     * be set and should be loaded after the `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/dpo
     *         Detrended Price Oscillator
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/dpo
     * @optionparent plotOptions.dpo
     */
    static defaultOptions: DPOOptions;
    options: DPOOptions;
    data: Array<DPOPoint>;
    points: Array<DPOPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: DPOParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface DPOIndicator {
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        dpo: typeof DPOIndicator;
    }
}
export default DPOIndicator;
