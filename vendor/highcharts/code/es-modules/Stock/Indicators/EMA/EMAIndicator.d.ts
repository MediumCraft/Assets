import type { EMAOptions, EMAParamsOptions } from './EMAOptions';
import type EMAPoint from './EMAPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The EMA series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ema
 *
 * @augments Highcharts.Series
 */
declare class EMAIndicator extends SMAIndicator {
    /**
     * Exponential moving average indicator (EMA). This series requires the
     * `linkedTo` option to be set.
     *
     * @sample stock/indicators/ema
     * Exponential moving average indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @optionparent plotOptions.ema
     */
    static defaultOptions: EMAOptions;
    data: Array<EMAPoint>;
    options: EMAOptions;
    points: Array<EMAPoint>;
    accumulatePeriodPoints(period: number, index: number, yVal: Array<Array<number>>): number;
    calculateEma(xVal: Array<number>, yVal: (Array<number> | Array<Array<number>>), i: number, EMApercent: number, calEMA: (number | undefined), index: number, SMA: number): [number, number];
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: EMAParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface EMAIndicator {
    pointClass: typeof EMAPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        ema: typeof EMAIndicator;
    }
}
export default EMAIndicator;
