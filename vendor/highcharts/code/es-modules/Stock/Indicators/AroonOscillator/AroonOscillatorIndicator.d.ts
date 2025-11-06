import type { AroonOscillatorOptions, AroonOscillatorParamsOptions } from '../AroonOscillator/AroonOscillatorOptions';
import type AroonOscillatorPoint from '../AroonOscillator/AroonOscillatorPoint';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const AroonIndicator: typeof import("../Aroon/AroonIndicator").default;
/**
 * The Aroon Oscillator series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.aroonoscillator
 *
 * @augments Highcharts.Series
 */
declare class AroonOscillatorIndicator extends AroonIndicator {
    /**
     * Aroon Oscillator. This series requires the `linkedTo` option to be set
     * and should be loaded after the `stock/indicators/indicators.js` and
     * `stock/indicators/aroon.js`.
     *
     * @sample {highstock} stock/indicators/aroon-oscillator
     *         Aroon Oscillator
     *
     * @extends      plotOptions.aroon
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, aroonDown, colorAxis, compare, compareBase,
     *               joinBy, keys, navigatorOptions, pointInterval,
     *               pointIntervalUnit, pointPlacement, pointRange, pointStart,
     *               showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/aroon
     * @requires     stock/indicators/aroon-oscillator
     * @optionparent plotOptions.aroonoscillator
     */
    static defaultOptions: AroonOscillatorOptions;
    data: Array<AroonOscillatorPoint>;
    options: AroonOscillatorOptions;
    points: Array<AroonOscillatorPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries, params: AroonOscillatorParamsOptions): IndicatorValuesObject<TLinkedSeries>;
}
interface AroonOscillatorIndicator extends MultipleLinesComposition.IndicatorComposition {
    nameBase: string;
    pointArrayMap: Array<keyof AroonOscillatorPoint>;
    pointClass: typeof AroonOscillatorPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        aroonoscillator: typeof AroonOscillatorIndicator;
    }
}
export default AroonOscillatorIndicator;
