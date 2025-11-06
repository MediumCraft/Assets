import type { AroonOptions, AroonParamsOptions } from '../Aroon/AroonOptions';
import type AroonPoint from '../Aroon/AroonPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Aroon series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.aroon
 *
 * @augments Highcharts.Series
 */
declare class AroonIndicator extends SMAIndicator {
    /**
     * Aroon. This series requires the `linkedTo` option to be
     * set and should be loaded after the `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/aroon
     *         Aroon
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/aroon
     * @optionparent plotOptions.aroon
     */
    static defaultOptions: AroonOptions;
    data: Array<AroonPoint>;
    options: AroonOptions;
    points: Array<AroonPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: AroonParamsOptions): IndicatorValuesObject<TLinkedSeries>;
}
interface AroonIndicator extends MultipleLinesComposition.IndicatorComposition {
    linesApiNames: Array<string>;
    nameComponents: Array<string> | undefined;
    pointArrayMap: Array<keyof AroonPoint>;
    pointValKey: string;
    pointClass: typeof AroonPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        aroon: typeof AroonIndicator;
    }
}
export default AroonIndicator;
