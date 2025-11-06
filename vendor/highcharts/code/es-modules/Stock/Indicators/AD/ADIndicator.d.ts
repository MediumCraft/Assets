import type { ADOptions, ADParamsOptions } from './ADOptions';
import type ADPoint from './ADPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The AD series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ad
 *
 * @augments Highcharts.Series
 */
declare class ADIndicator extends SMAIndicator {
    /**
     * Accumulation Distribution (AD). This series requires `linkedTo` option to
     * be set.
     *
     * @sample stock/indicators/accumulation-distribution
     *         Accumulation/Distribution indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/accumulation-distribution
     * @optionparent plotOptions.ad
     */
    static defaultOptions: ADOptions;
    protected static populateAverage(xVal: Array<number>, yVal: Array<Array<number>>, yValVolume: Array<number>, i: number, _period: number): Array<number>;
    data: Array<ADPoint>;
    options: ADOptions;
    points: Array<ADPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: ADParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface ADIndicator {
    pointClass: typeof ADPoint;
    nameComponents: Array<string>;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        ad: typeof ADIndicator;
    }
}
export default ADIndicator;
