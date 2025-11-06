import type { ABandsOptions, ABandsParamsOptions } from './ABandsOptions';
import type ABandsPoint from './ABandsPoint';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The ABands series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.abands
 *
 * @augments Highcharts.Series
 */
declare class ABandsIndicator extends SMAIndicator {
    /**
     * Acceleration bands (ABANDS). This series requires the `linkedTo` option
     * to be set and should be loaded after the
     * `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/acceleration-bands
     *         Acceleration Bands
     *
     * @extends      plotOptions.sma
     * @mixes        Highcharts.MultipleLinesMixin
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking,
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/acceleration-bands
     * @optionparent plotOptions.abands
     */
    static defaultOptions: ABandsOptions;
    data: Array<ABandsPoint>;
    options: ABandsOptions;
    points: Array<ABandsPoint>;
    getValues<TLinkedSeries extends LineSeries>(this: ABandsIndicator, series: TLinkedSeries & IndicatorLinkedSeriesBase, params: ABandsParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface ABandsIndicator extends MultipleLinesComposition.IndicatorComposition {
    nameBase: string;
    nameComponents: Array<string>;
    pointArrayMap: Array<keyof ABandsPoint>;
    pointValKey: string;
    pointClass: typeof ABandsPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        abands: typeof ABandsIndicator;
    }
}
export default ABandsIndicator;
