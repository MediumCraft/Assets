import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { MFIOptions, MFIParamsOptions } from '../MFI/MFIOptions';
import type MFIPoint from './MFIPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The MFI series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.mfi
 *
 * @augments Highcharts.Series
 */
declare class MFIIndicator extends SMAIndicator {
    /**
     * Money Flow Index. This series requires `linkedTo` option to be set and
     * should be loaded after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/mfi
     *         Money Flow Index Indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/mfi
     * @optionparent plotOptions.mfi
     */
    static defaultOptions: MFIOptions;
    data: Array<MFIPoint>;
    options: MFIOptions;
    points: Array<MFIPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: MFIParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface MFIIndicator {
    nameBase: string;
    pointClass: typeof MFIPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        mfi: typeof MFIIndicator;
    }
}
export default MFIIndicator;
