import type ColumnSeries from '../../../Series/Column/ColumnSeries';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { MACDOptions, MACDParamsOptions } from './MACDOptions';
import type MACDPoint from './MACDPoint';
import type Series from '../../../Core/Series/Series';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
interface MACDZonesObject {
    startIndex?: number;
    zones?: Series.ZoneObject[];
}
/**
 * The MACD series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.macd
 *
 * @augments Highcharts.Series
 */
declare class MACDIndicator extends SMAIndicator {
    /**
     * Moving Average Convergence Divergence (MACD). This series requires
     * `linkedTo` option to be set and should be loaded after the
     * `stock/indicators/indicators.js`.
     *
     * @sample stock/indicators/macd
     *         MACD indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/macd
     * @optionparent plotOptions.macd
     */
    static defaultOptions: MACDOptions;
    data: Array<MACDPoint>;
    graphmacd?: SVGElement;
    graphsignal?: SVGElement;
    macdZones: MACDZonesObject;
    options: MACDOptions;
    points: Array<MACDPoint>;
    signalZones: MACDZonesObject;
    init(): void;
    toYData(point: MACDPoint): Array<number>;
    translate(): void;
    destroy(): void;
    drawGraph(): void;
    applyZones(): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: MACDParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface MACDIndicator {
    crispCol: typeof ColumnSeries.prototype.crispCol;
    getColumnMetrics: typeof ColumnSeries.prototype.getColumnMetrics;
    nameComponents: Array<string>;
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof MACDPoint;
    pointValKey: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        macd: typeof MACDIndicator;
    }
}
export default MACDIndicator;
