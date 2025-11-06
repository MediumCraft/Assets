import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { ZigzagOptions, ZigzagParamsOptions } from './ZigzagOptions';
import type ZigzagPoint from './ZigzagPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Zig Zag series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.zigzag
 *
 * @augments Highcharts.Series
 */
declare class ZigzagIndicator extends SMAIndicator {
    /**
     * Zig Zag indicator.
     *
     * This series requires `linkedTo` option to be set.
     *
     * @sample stock/indicators/zigzag
     *         Zig Zag indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/zigzag
     * @optionparent plotOptions.zigzag
     */
    static defaultOptions: ZigzagOptions;
    data: Array<ZigzagPoint>;
    points: Array<ZigzagPoint>;
    options: ZigzagOptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: ZigzagParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface ZigzagIndicator {
    nameComponents: Array<string>;
    nameSuffixes: Array<string>;
    nameBase: string;
    pointClass: typeof ZigzagPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        zigzag: typeof ZigzagIndicator;
    }
}
export default ZigzagIndicator;
