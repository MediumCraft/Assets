import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { PPOOptions, PPOParamsOptions } from './PPOOptions';
import type PPOPoint from './PPOPoint';
declare const EMAIndicator: typeof import("../EMA/EMAIndicator").default;
/**
 * The PPO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ppo
 *
 * @augments Highcharts.Series
 */
declare class PPOIndicator extends EMAIndicator {
    /**
     * Percentage Price Oscillator. This series requires the
     * `linkedTo` option to be set and should be loaded after the
     * `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/ppo
     *         Percentage Price Oscillator
     *
     * @extends      plotOptions.ema
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/ppo
     * @optionparent plotOptions.ppo
     */
    static defaultOptions: PPOOptions;
    data: Array<PPOPoint>;
    options: PPOOptions;
    points: Array<PPOPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries, params: PPOParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface PPOIndicator {
    nameBase: string;
    nameComponents: Array<string>;
    pointClass: typeof PPOPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        ppo: typeof PPOIndicator;
    }
}
export default PPOIndicator;
