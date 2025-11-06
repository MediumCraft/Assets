import type { KlingerOptions, KlingerParamsOptions } from './KlingerOptions';
import type KlingerPoint from './KlingerPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Klinger oscillator series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.klinger
 *
 * @augments Highcharts.Series
 */
declare class KlingerIndicator extends SMAIndicator {
    /**
     * Klinger oscillator. This series requires the `linkedTo` option to be set
     * and should be loaded after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/klinger
     *         Klinger oscillator
     *
     * @extends      plotOptions.sma
     * @since 9.1.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/klinger
     * @optionparent plotOptions.klinger
     */
    static defaultOptions: KlingerOptions;
    data: Array<KlingerPoint>;
    points: Array<KlingerPoint>;
    options: KlingerOptions;
    volumeSeries: LineSeries;
    calculateTrend(this: KlingerIndicator, yVal: (Array<Array<number>>), i: number): number;
    isValidData(this: KlingerIndicator, firstYVal: Array<number>): boolean;
    getCM(previousCM: number, DM: number, trend: number, previousTrend: number, prevoiusDM: number): number;
    getDM(high: number, low: number): number;
    getVolumeForce(yVal: Array<Array<number>>): Array<Array<number>>;
    getEMA(yVal: (Array<number> | Array<Array<number>>), prevEMA: (number | undefined), SMA: number, EMApercent: number, index?: number, i?: number, xVal?: Array<number>): [number, number];
    getSMA(period: number, index: number, values: Array<Array<number>>): number;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: KlingerParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface KlingerIndicator extends MultipleLinesComposition.IndicatorComposition {
    linesApiNames: Array<string>;
    nameBase: string;
    nameComponents: Array<string>;
    parallelArrays: Array<string>;
    pointArrayMap: Array<keyof KlingerPoint>;
    pointClass: typeof KlingerPoint;
    pointValKey: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        klinger: typeof KlingerIndicator;
    }
}
export default KlingerIndicator;
