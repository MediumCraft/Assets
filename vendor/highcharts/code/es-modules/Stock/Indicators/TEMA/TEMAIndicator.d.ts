import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { TEMAOptions, TEMAParamsOptions } from './TEMAOptions';
import type TEMAPoint from './TEMAPoint';
declare const EMAIndicator: typeof import("../EMA/EMAIndicator").default;
/**
 * The TEMA series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tema
 *
 * @augments Highcharts.Series
 */
declare class TEMAIndicator extends EMAIndicator {
    /**
     * Triple exponential moving average (TEMA) indicator. This series requires
     * `linkedTo` option to be set and should be loaded after the
     * `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/tema
     *         TEMA indicator
     *
     * @extends      plotOptions.ema
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/tema
     * @optionparent plotOptions.tema
     */
    static defaultOptions: TEMAOptions;
    EMApercent: number;
    data: Array<TEMAPoint>;
    options: TEMAOptions;
    points: Array<TEMAPoint>;
    getEMA(yVal: (Array<number> | Array<Array<number>>), prevEMA: (number | undefined), SMA: number, index?: number, i?: number, xVal?: Array<number>): [number, number];
    getTemaPoint(xVal: Array<number>, tripledPeriod: number, EMAlevels: TEMAIndicator.EMALevelsObject, i: number): ([number, (number | null)] | undefined);
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: TEMAParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface TEMAIndicator {
    pointClass: typeof TEMAPoint;
}
declare namespace TEMAIndicator {
    interface EMALevelsObject {
        level1: number;
        level2: number;
        level3: number;
        prevLevel3: number;
    }
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        tema: typeof TEMAIndicator;
    }
}
export default TEMAIndicator;
