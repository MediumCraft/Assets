import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { WilliamsROptions, WilliamsRParamsOptions } from './WilliamsROptions';
import type WilliamsRPoint from './WilliamsRPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Williams %R series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.williamsr
 *
 * @augments Highcharts.Series
 */
declare class WilliamsRIndicator extends SMAIndicator {
    /**
     * Williams %R. This series requires the `linkedTo` option to be
     * set and should be loaded after the `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/williams-r
     *         Williams %R
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/williams-r
     * @optionparent plotOptions.williamsr
     */
    static defaultOptions: WilliamsROptions;
    data: Array<WilliamsRPoint>;
    options: WilliamsROptions;
    points: Array<WilliamsRPoint>;
    getValues<TLinkedSeries extends LineSeries>(this: WilliamsRIndicator, series: TLinkedSeries & IndicatorLinkedSeriesBase, params: WilliamsRParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface WilliamsRIndicator {
    nameBase: string;
    pointClass: typeof WilliamsRPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        williamsr: typeof WilliamsRIndicator;
    }
}
export default WilliamsRIndicator;
