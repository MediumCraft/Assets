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
import type LinearRegressionSlopesPoint from './LinearRegressionSlopesPoint';
declare const LinearRegressionIndicator: typeof import("../LinearRegression/LinearRegressionIndicator").default;
/**
 * The Linear Regression Slope series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionSlope
 *
 * @augments Highcharts.Series
 */
declare class LinearRegressionSlopesIndicator extends LinearRegressionIndicator {
    /**
     * Linear regression slope indicator. This series requires `linkedTo`
     * option to be set.
     *
     * @sample {highstock} stock/indicators/linear-regression-slope
     *         Linear regression slope indicator
     *
     * @extends      plotOptions.linearregression
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires  stock/indicators/regressions
     * @optionparent plotOptions.linearregressionslope
     */
    static defaultOptions: LinearRegressionOptions;
    data: Array<LinearRegressionSlopesPoint>;
    options: LinearRegressionOptions;
    points: Array<LinearRegressionSlopesPoint>;
    getEndPointY(lineParameters: RegressionLineParametersObject): number;
}
interface LinearRegressionSlopesIndicator {
    pointClass: typeof LinearRegressionSlopesPoint;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        linearRegressionSlope: typeof LinearRegressionSlopesIndicator;
    }
}
export default LinearRegressionSlopesIndicator;
