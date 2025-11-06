import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { PCOptions, PCParamsOptions } from '../PC/PCOptions';
import type PCPoint from './PCPoint';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Price Channel series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pc
 *
 * @augments Highcharts.Series
 */
declare class PCIndicator extends SMAIndicator {
    /**
     * Price channel (PC). This series requires the `linkedTo` option to be
     * set and should be loaded after the `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/price-channel
     *         Price Channel
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/price-channel
     * @optionparent plotOptions.pc
     */
    static defaultOptions: PCOptions;
    data: Array<PCPoint>;
    options: PCOptions;
    points: Array<PCPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: PCParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface PCIndicator extends MultipleLinesComposition.IndicatorComposition {
    nameBase: string;
    nameComponents: Array<string>;
    pointArrayMap: Array<keyof PCPoint>;
    pointClass: typeof PCPoint;
    pointValKey: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pc: typeof PCIndicator;
    }
}
export default PCIndicator;
