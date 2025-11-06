import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LinePoint from '../../../Series/Line/LinePoint';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { PivotPointsOptions, PivotPointsParamsOptions } from './PivotPointsOptions';
import type SVGPath from '../../../Core/Renderer/SVG/SVGPath';
import PivotPointsPoint from './PivotPointsPoint.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 *
 *  Class
 *
 **/
/**
 * The Pivot Points series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pivotpoints
 *
 * @augments Highcharts.Series
 */
declare class PivotPointsIndicator extends SMAIndicator {
    /**
     * Pivot points indicator. This series requires the `linkedTo` option to be
     * set and should be loaded after `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/pivot-points
     *         Pivot points
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/pivot-points
     * @optionparent plotOptions.pivotpoints
     */
    static defaultOptions: PivotPointsOptions;
    data: Array<PivotPointsPoint>;
    options: PivotPointsOptions;
    points: Array<PivotPointsPoint>;
    endPoint: number;
    plotEndPoint: number;
    toYData(point: PivotPointsPoint): Array<number>;
    translate(this: PivotPointsIndicator): void;
    getGraphPath(this: PivotPointsIndicator, points: Array<LinePoint>): SVGPath;
    drawDataLabels(this: PivotPointsIndicator): void;
    getValues<TLinkedSeries extends LineSeries>(this: PivotPointsIndicator, series: TLinkedSeries & IndicatorLinkedSeriesBase, params: PivotPointsParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
    getPivotAndHLC(values: Array<Array<number>>): [number, number, number, number];
    standardPlacement(values: Array<number>): Array<(number | null)>;
    camarillaPlacement(values: Array<number>): Array<number>;
    fibonacciPlacement(values: Array<number>): Array<(number | null)>;
}
interface PivotPointsIndicator {
    nameBase: string;
    pointArrayMap: Array<string>;
    pointClass: typeof PivotPointsPoint;
    pointValKey: string;
}
export default PivotPointsIndicator;
