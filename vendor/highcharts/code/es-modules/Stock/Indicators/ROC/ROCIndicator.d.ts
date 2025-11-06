import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { ROCOptions, ROCParamsOptions } from './ROCOptions';
import type ROCPoint from './ROCPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The ROC series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.roc
 *
 * @augments Highcharts.Series
 */
declare class ROCIndicator extends SMAIndicator {
    /**
     * Rate of change indicator (ROC). The indicator value for each point
     * is defined as:
     *
     * `(C - Cn) / Cn * 100`
     *
     * where: `C` is the close value of the point of the same x in the
     * linked series and `Cn` is the close value of the point `n` periods
     * ago. `n` is set through [period](#plotOptions.roc.params.period).
     *
     * This series requires `linkedTo` option to be set.
     *
     * @sample stock/indicators/roc
     *         Rate of change indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/roc
     * @optionparent plotOptions.roc
     */
    static defaultOptions: ROCOptions;
    data: Array<ROCPoint>;
    options: ROCOptions;
    points: Array<ROCPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: ROCParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface ROCIndicator {
    nameBase: string;
    pointClass: typeof ROCPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        roc: typeof ROCIndicator;
    }
}
export default ROCIndicator;
