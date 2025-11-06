import type { ChaikinOptions, ChaikinParamsOptions } from './ChaikinOptions';
import type ChaikinPoint from './ChaikinPoint';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const EMAIndicator: typeof import("../EMA/EMAIndicator").default;
/**
 * The Chaikin series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.chaikin
 *
 * @augments Highcharts.Series
 */
declare class ChaikinIndicator extends EMAIndicator {
    /**
     * Chaikin Oscillator. This series requires the `linkedTo` option to
     * be set and should be loaded after the `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/chaikin
     *         Chaikin Oscillator
     *
     * @extends      plotOptions.ema
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/chaikin
     * @optionparent plotOptions.chaikin
     */
    static defaultOptions: ChaikinOptions;
    data: Array<ChaikinPoint>;
    options: ChaikinOptions;
    points: Array<ChaikinPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries, params: ChaikinParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface ChaikinIndicator {
    nameBase: string;
    nameComponents: Array<string>;
    pointClass: typeof ChaikinPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        chaikin: typeof ChaikinIndicator;
    }
}
export default ChaikinIndicator;
