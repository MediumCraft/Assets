import type CandlestickPoint from './CandlestickPoint';
import type CandlestickSeriesOptions from './CandlestickSeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
declare const OHLCSeries: typeof import("../OHLC/OHLCSeries").default;
/**
 * The candlestick series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.candlestick
 *
 * @augments Highcharts.seriesTypes.ohlc
 */
declare class CandlestickSeries extends OHLCSeries {
    static defaultOptions: CandlestickSeriesOptions;
    data: Array<CandlestickPoint>;
    options: CandlestickSeriesOptions;
    points: Array<CandlestickPoint>;
    /**
     * Postprocess mapping between options and SVG attributes
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#pointAttribs
     */
    pointAttribs(point: CandlestickPoint, state?: StatesOptionsKey): SVGAttributes;
    /**
     * Draw the data points.
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#drawPoints
     */
    drawPoints(): void;
}
interface CandlestickSeries {
    pointClass: typeof CandlestickPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        candlestick: typeof CandlestickSeries;
    }
}
export default CandlestickSeries;
