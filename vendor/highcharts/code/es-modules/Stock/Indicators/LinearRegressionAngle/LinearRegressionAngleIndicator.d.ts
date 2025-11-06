/**
 *
 *  (c) 2010-2025 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type { LinearRegressionOptions, RegressionLineParametersObject } from '../LinearRegression/LinearRegressionOptions';
import type LinearRegressionAnglePoint from './LinearRegressionAnglePoint';
declare const LinearRegressionIndicator: typeof import("../LinearRegression/LinearRegressionIndicator").default;
/**
 * The Linear Regression Angle series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionAngle
 *
 * @augments Highcharts.Series
 */
declare class LinearRegressionAngleIndicator extends LinearRegressionIndicator {
    /**
     * Linear regression angle indicator. This series requires `linkedTo`
     * option to be set.
     *
     * @sample {highstock} stock/indicators/linear-regression-angle
     *         Linear intercept angle indicator
     *
     * @extends      plotOptions.linearregression
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires  stock/indicators/regressions
     * @optionparent plotOptions.linearregressionangle
     */
    static defaultOptions: LinearRegressionOptions;
    data: Array<LinearRegressionAnglePoint>;
    options: LinearRegressionOptions;
    points: Array<LinearRegressionAnglePoint>;
    /**
     * Convert a slope of a line to angle (in degrees) between
     * the line and x axis
     * @private
     * @param {number} slope of the straight line function
     * @return {number} angle in degrees
     */
    slopeToAngle(slope: number): number;
    getEndPointY(this: LinearRegressionAngleIndicator, lineParameters: RegressionLineParametersObject): number;
}
interface LinearRegressionAngleIndicator {
    pointClass: typeof LinearRegressionAnglePoint;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        linearRegressionAngle: typeof LinearRegressionAngleIndicator;
    }
}
export default LinearRegressionAngleIndicator;
