import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { StochasticOptions, StochasticParamsOptions } from './StochasticOptions';
import type StochasticPoint from './StochasticPoint';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Stochastic series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.stochastic
 *
 * @augments Highcharts.Series
 */
declare class StochasticIndicator extends SMAIndicator {
    /**
     * Stochastic oscillator. This series requires the `linkedTo` option to be
     * set and should be loaded after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/stochastic
     *         Stochastic oscillator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/stochastic
     * @optionparent plotOptions.stochastic
     */
    static defaultOptions: StochasticOptions;
    data: Array<StochasticPoint>;
    options: StochasticOptions;
    points: Array<StochasticPoint>;
    init(): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: StochasticParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface StochasticIndicator extends MultipleLinesComposition.IndicatorComposition {
    linesApiNames: Array<string>;
    nameBase: string;
    nameComponents: Array<string>;
    parallelArrays: Array<string>;
    pointArrayMap: Array<keyof StochasticPoint>;
    pointClass: typeof StochasticPoint;
    pointValKey: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        stochastic: typeof StochasticIndicator;
    }
}
export default StochasticIndicator;
