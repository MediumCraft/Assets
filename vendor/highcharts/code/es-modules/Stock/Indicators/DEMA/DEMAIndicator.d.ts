import type { DEMAOptions, DEMAParamsOptions } from './DEMAOptions';
import type DEMAPoint from './DEMAPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const EMAIndicator: typeof import("../EMA/EMAIndicator").default;
/**
 * The DEMA series Type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dema
 *
 * @augments Highcharts.Series
 */
declare class DEMAIndicator extends EMAIndicator {
    /**
     * Double exponential moving average (DEMA) indicator. This series requires
     * `linkedTo` option to be set and should be loaded after the
     * `stock/indicators/indicators.js`.
     *
     * @sample {highstock} stock/indicators/dema
     *         DEMA indicator
     *
     * @extends      plotOptions.ema
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/dema
     * @optionparent plotOptions.dema
     */
    static defaultOptions: DEMAOptions;
    EMApercent: number;
    data: Array<DEMAPoint>;
    options: DEMAOptions;
    points: Array<DEMAPoint>;
    getEMA(yVal: (Array<number> | Array<Array<number>>), prevEMA: (number | undefined), SMA: number, index?: number, i?: number, xVal?: Array<number>): [number, number];
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: DEMAParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface DEMAIndicator {
    pointClass: typeof DEMAPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        dema: typeof DEMAIndicator;
    }
}
export default DEMAIndicator;
