import type AOOptions from './AOOptions';
import type AOPoint from './AOPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const columnProto: import("../../../Series/Column/ColumnSeries").default, SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The AO series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ao
 *
 * @augments Highcharts.Series
 */
declare class AOIndicator extends SMAIndicator {
    /**
     * Awesome Oscillator. This series requires the `linkedTo` option to
     * be set and should be loaded after the `stock/indicators/indicators.js`
     *
     * @sample {highstock} stock/indicators/ao
     *         Awesome
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               params, pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/ao
     * @optionparent plotOptions.ao
     */
    static defaultOptions: AOOptions;
    data: Array<AOPoint>;
    options: AOOptions;
    points: Array<AOPoint>;
    drawGraph(this: AOIndicator): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface AOIndicator {
    nameBase: string;
    nameComponents: Array<string> | undefined;
    pointClass: typeof AOPoint;
    crispCol: typeof columnProto.crispCol;
    drawPoints: typeof columnProto.drawPoints;
    getColumnMetrics: typeof columnProto.getColumnMetrics;
    translate: typeof columnProto.translate;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        ao: typeof AOIndicator;
    }
}
export default AOIndicator;
