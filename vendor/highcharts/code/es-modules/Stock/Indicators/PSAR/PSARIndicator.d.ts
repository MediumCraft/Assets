import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { PSAROptions, PSARParamsOptions } from './PSAROptions';
import type PSARPoint from './PSARPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Parabolic SAR series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.psar
 *
 * @augments Highcharts.Series
 */
declare class PSARIndicator extends SMAIndicator {
    /**
     * Parabolic SAR. This series requires `linkedTo`
     * option to be set and should be loaded
     * after `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/psar
     *         Parabolic SAR Indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/psar
     * @optionparent plotOptions.psar
     */
    static defaultOptions: PSAROptions;
    data: Array<PSARPoint>;
    nameComponents: Array<string> | undefined;
    points: Array<PSARPoint>;
    options: PSAROptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: PSARParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface PSARIndicator {
    pointClass: typeof PSARPoint;
    nameComponents: Array<string> | undefined;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        psar: typeof PSARIndicator;
    }
}
export default PSARIndicator;
