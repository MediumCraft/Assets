import type { DMIOptions, DMIParamsOptions } from './DMIOptions';
import type DMIPoint from './DMIPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Directional Movement Index (DMI) series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dmi
 *
 * @augments Highcharts.Series
 */
declare class DMIIndicator extends SMAIndicator {
    /**
     * Directional Movement Index (DMI).
     * This series requires the `linkedTo` option to be set and should
     * be loaded after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/dmi
     *         DMI indicator
     *
     * @extends      plotOptions.sma
     * @since 9.1.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/dmi
     * @optionparent plotOptions.dmi
     */
    static defaultOptions: DMIOptions;
    options: DMIOptions;
    calculateDM(yVal: Array<Array<number>>, i: number, isPositiveDM?: boolean): number;
    calculateDI(smoothedDM: number, tr: number): number;
    calculateDX(plusDI: number, minusDI: number): number;
    smoothValues(accumulatedValues: number, currentValue: number, period: number): number;
    getTR(currentPoint: Array<number>, prevPoint?: Array<number>): number;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: DMIParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface DMIIndicator extends MultipleLinesComposition.IndicatorComposition {
    nameBase: string;
    pointArrayMap: Array<keyof DMIPoint>;
    parallelArrays: Array<string>;
    pointValKey: string;
    linesApiNames: Array<string>;
    pointClass: typeof DMIPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        dmi: typeof DMIIndicator;
    }
}
export default DMIIndicator;
