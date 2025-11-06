import type { IndicatorBase, IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeriesType from '../../../Series/Line/LineSeries';
import type { SMAOptions, SMAParamsOptions } from './SMAOptions';
import type SMAPoint from './SMAPoint';
import Chart from '../../../Core/Chart/Chart.js';
declare const LineSeries: typeof LineSeriesType;
declare module '../../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        useOhlcData?: boolean;
    }
}
interface CalculateOnObject {
    chart: string;
    xAxis?: string;
}
/**
 * The SMA series type.
 *
 * @private
 */
declare class SMAIndicator extends LineSeries {
    /**
     * The parameter allows setting line series type and use OHLC indicators.
     * Data in OHLC format is required.
     *
     * @sample {highstock} stock/indicators/use-ohlc-data
     *         Use OHLC data format to plot line chart
     *
     * @type      {boolean}
     * @product   highstock
     * @apioption plotOptions.line.useOhlcData
     */
    /**
     * Simple moving average indicator (SMA). This series requires `linkedTo`
     * option to be set.
     *
     * @sample stock/indicators/sma
     *         Simple moving average indicator
     *
     * @extends      plotOptions.line
     * @since        6.0.0
     * @excluding    allAreas, colorAxis, dragDrop, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking, useOhlcData
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @optionparent plotOptions.sma
     */
    static defaultOptions: SMAOptions;
    data: Array<SMAPoint>;
    dataEventsToUnbind: Array<Function>;
    linkedParent: LineSeriesType & IndicatorLinkedSeriesBase;
    nameBase?: string;
    options: SMAOptions;
    points: Array<SMAPoint>;
    /**
     * @private
     */
    destroy(): void;
    /**
     * @private
     */
    getName(): string;
    /**
     * @private
     */
    getValues<TLinkedSeries extends LineSeriesType>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: SMAParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
    /**
     * @private
     */
    init(chart: Chart, options: SMAOptions): void;
    /**
     * @private
     */
    recalculateValues(): void;
    /**
     * @private
     */
    processData(): (boolean | undefined);
}
interface SMAIndicator extends IndicatorBase {
    calculateOn: CalculateOnObject;
    hasDerivedData: boolean;
    nameComponents: Array<string> | undefined;
    nameSuffixes: Array<string>;
    pointClass: typeof SMAPoint;
    useCommonDataGrouping: boolean;
    updateAllPoints?: boolean;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        sma: typeof SMAIndicator;
    }
}
export default SMAIndicator;
