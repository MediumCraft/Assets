import type { APOOptions, APOParamsOptions } from './APOOptions';
import type APOPoint from './APOPoint';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const EMAIndicator: typeof import("../EMA/EMAIndicator").default;
/**
 * The APO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.apo
 *
 * @augments Highcharts.Series
 */
declare class APOIndicator extends EMAIndicator {
    /**
     * Absolute Price Oscillator. This series requires the `linkedTo` option to
     * be set and should be loaded after the `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/apo
     *         Absolute Price Oscillator
     *
     * @extends      plotOptions.ema
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/apo
     * @optionparent plotOptions.apo
     */
    static defaultOptions: APOOptions;
    data: Array<APOPoint>;
    options: APOOptions;
    points: Array<APOPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries, params: APOParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface APOIndicator {
    nameBase: string;
    nameComponents: Array<string>;
    pointClass: typeof APOPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        apo: typeof APOIndicator;
    }
}
export default APOIndicator;
