import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { SlowStochasticOptions, SlowStochasticParamsOptions } from './SlowStochasticOptions';
import type SlowStochasticPoint from './SlowStochasticPoint';
declare const StochasticIndicator: typeof import("../Stochastic/StochasticIndicator").default;
/**
 * The Slow Stochastic series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.slowstochastic
 *
 * @augments Highcharts.Series
 */
declare class SlowStochasticIndicator extends StochasticIndicator {
    /**
     * Slow Stochastic oscillator. This series requires the `linkedTo` option
     * to be set and should be loaded after `stock/indicators/indicators.js`
     * and `stock/indicators/stochastic.js` files.
     *
     * @sample stock/indicators/slow-stochastic
     *         Slow Stochastic oscillator
     *
     * @extends      plotOptions.stochastic
     * @since        8.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/stochastic
     * @requires     stock/indicators/slow-stochastic
     * @optionparent plotOptions.slowstochastic
     */
    static defaultOptions: SlowStochasticOptions;
    data: Array<SlowStochasticPoint>;
    options: SlowStochasticOptions;
    points: Array<SlowStochasticPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries, params: SlowStochasticParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface SlowStochasticIndicator {
    pointClass: typeof SlowStochasticPoint;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        slowstochastic: typeof SlowStochasticIndicator;
    }
}
export default SlowStochasticIndicator;
