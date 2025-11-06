/**
 *
 *  (c) 2010-2025 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type { LinearRegressionOptions, LinearRegressionParamsOptions, RegressionLineParametersObject } from './LinearRegressionOptions';
import type LinearRegressionPoint from './LinearRegressionPoint';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * Linear regression series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearregression
 *
 * @augments Highcharts.Series
 */
declare class LinearRegressionIndicator extends SMAIndicator {
    /**
     * Linear regression indicator. This series requires `linkedTo` option to be
     * set.
     *
     * @sample {highstock} stock/indicators/linear-regression
     *         Linear regression indicator
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/regressions
     * @optionparent plotOptions.linearregression
     */
    static defaultOptions: LinearRegressionOptions;
    data: Array<LinearRegressionPoint>;
    options: LinearRegressionOptions;
    points: Array<LinearRegressionPoint>;
    /**
     * Return the slope and intercept of a straight line function.
     *
     * @private
     *
     * @param {Array<number>} xData
     * List of all x coordinates in a period.
     *
     * @param {Array<number>} yData
     * List of all y coordinates in a period.
     *
     * @return {Highcharts.RegressionLineParametersObject}
     * Object that contains the slope and the intercept of a straight line
     * function.
     */
    getRegressionLineParameters(xData: Array<number>, yData: Array<number>): RegressionLineParametersObject;
    /**
     * Return the y value on a straight line.
     *
     * @private
     *
     * @param {Highcharts.RegressionLineParametersObject} lineParameters
     * Object that contains the slope and the intercept of a straight line
     * function.
     *
     * @param {number} endPointX
     * X coordinate of the point.
     *
     * @return {number}
     * Y value of the point that lies on the line.
     */
    getEndPointY(lineParameters: RegressionLineParametersObject, endPointX: number): number;
    /**
     * Transform the coordinate system so that x values start at 0 and
     * apply xAxisUnit.
     *
     * @private
     *
     * @param {Array<number>} xData
     * List of all x coordinates in a period
     *
     * @param {number} xAxisUnit
     * Option (see the API)
     *
     * @return {Array<number>}
     * Array of transformed x data
     */
    transformXData(xData: Array<number>, xAxisUnit: number): Array<number>;
    /**
     * Find the closest distance between points in the base series.
     * @private
     * @param {Array<number>} xData list of all x coordinates in the base series
     * @return {number} - closest distance between points in the base series
     */
    findClosestDistance(xData: Array<number>): (number | undefined);
    getValues<TLinkedSeries extends LineSeries>(this: LinearRegressionIndicator, baseSeries: TLinkedSeries & IndicatorLinkedSeriesBase, regressionSeriesParams: LinearRegressionParamsOptions): IndicatorValuesObject<TLinkedSeries>;
}
interface LinearRegressionIndicator {
    pointClass: typeof LinearRegressionPoint;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        linearRegression: typeof LinearRegressionIndicator;
    }
}
export default LinearRegressionIndicator;
