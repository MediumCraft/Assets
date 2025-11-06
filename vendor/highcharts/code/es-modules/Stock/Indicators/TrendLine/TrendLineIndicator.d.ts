import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { TrendLineOptions, TrendLineParamsOptions } from './TrendLineOptions';
import type TrendLinePoint from './TrendLinePoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Trend line series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.trendline
 *
 * @augments Highcharts.Series
 */
declare class TrendLineIndicator extends SMAIndicator {
    /**
     * Trendline (linear regression) fits a straight line to the selected data
     * using a method called the Sum Of Least Squares. This series requires the
     * `linkedTo` option to be set.
     *
     * @sample stock/indicators/trendline
     *         Trendline indicator
     *
     * @extends      plotOptions.sma
     * @since        7.1.3
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/trendline
     * @optionparent plotOptions.trendline
     */
    static defaultOptions: TrendLineOptions;
    data: Array<TrendLinePoint>;
    options: TrendLineOptions;
    points: Array<TrendLinePoint>;
    updateAllPoints?: boolean;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: TrendLineParamsOptions): IndicatorValuesObject<TLinkedSeries>;
}
interface TrendLineIndicator {
    nameBase: string;
    nameComponents: Array<string> | undefined;
    pointClass: typeof TrendLinePoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        trendline: typeof TrendLineIndicator;
    }
}
export default TrendLineIndicator;
