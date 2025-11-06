import type { DisparityIndexOptions, DisparityIndexParamsOptions } from './DisparityIndexOptions';
import type DisparityIndexPoint from './DisparityIndexPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Disparity Index series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.disparityindex
 *
 * @augments Highcharts.Series
 */
declare class DisparityIndexIndicator extends SMAIndicator {
    /**
     * Disparity Index.
     * This series requires the `linkedTo` option to be set and should
     * be loaded after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/disparity-index
     *         Disparity Index indicator
     *
     * @extends      plotOptions.sma
     * @since 9.1.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/disparity-index
     * @optionparent plotOptions.disparityindex
     */
    static defaultOptions: DisparityIndexOptions;
    averageIndicator: typeof SMAIndicator;
    data: Array<DisparityIndexPoint>;
    options: DisparityIndexOptions;
    points: Array<DisparityIndexPoint>;
    init(): void;
    calculateDisparityIndex(curPrice: number, periodAverage: number): number;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: DisparityIndexParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface DisparityIndexIndicator {
    nameBase: string;
    nameComponents: Array<string>;
    pointClass: typeof DisparityIndexPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        disparityindex: typeof DisparityIndexIndicator;
    }
}
export default DisparityIndexIndicator;
