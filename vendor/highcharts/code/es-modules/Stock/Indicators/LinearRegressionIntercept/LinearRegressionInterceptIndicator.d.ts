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
import type LinearRegressionInterceptPoint from './LinearRegressionInterceptPoint';
declare const LinearRegressionIndicator: typeof import("../LinearRegression/LinearRegressionIndicator").default;
/**
 * The Linear Regression Intercept series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionIntercept
 *
 * @augments Highcharts.Series
 */
declare class LinearRegressionInterceptIndicator extends LinearRegressionIndicator {
    /**
     * Linear regression intercept indicator. This series requires `linkedTo`
     * option to be set.
     *
     * @sample {highstock} stock/indicators/linear-regression-intercept
     *         Linear intercept slope indicator
     *
     * @extends      plotOptions.linearregression
     * @since        7.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires  stock/indicators/regressions
     * @optionparent plotOptions.linearregressionintercept
     */
    static defaultOptions: LinearRegressionOptions;
    data: Array<LinearRegressionInterceptPoint>;
    options: LinearRegressionOptions;
    points: Array<LinearRegressionInterceptPoint>;
    getEndPointY(lineParameters: RegressionLineParametersObject): number;
}
interface LinearRegressionInterceptIndicator {
    pointClass: typeof LinearRegressionInterceptPoint;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        linearRegressionIntercept: typeof LinearRegressionInterceptIndicator;
    }
}
export default LinearRegressionInterceptIndicator;
