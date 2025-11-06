import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { CMOOptions, CMOParamsOptions } from './CMOOptions';
import type CMOPoint from './CMOPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The CMO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cmo
 *
 * @augments Highcharts.Series
 */
declare class CMOIndicator extends SMAIndicator {
    /**
     * Chande Momentum Oscilator (CMO) technical indicator. This series
     * requires the `linkedTo` option to be set and should be loaded after
     * the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/cmo
     *         CMO indicator
     *
     * @extends      plotOptions.sma
     * @since 9.1.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/cmo
     * @optionparent plotOptions.cmo
     */
    static defaultOptions: CMOOptions;
    data: Array<CMOPoint>;
    options: CMOOptions;
    points: Array<CMOPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: CMOParamsOptions): IndicatorValuesObject<TLinkedSeries> | undefined;
}
interface CMOIndicator {
    pointClass: typeof CMOPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        cmo: typeof CMOIndicator;
    }
}
export default CMOIndicator;
