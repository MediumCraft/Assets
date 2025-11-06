import type AreaSplineSeriesOptions from './AreaSplineSeriesOptions';
import type AreaSplinePoint from './AreaSplinePoint';
import SplineSeries from '../Spline/SplineSeries.js';
declare const areaProto: import("../Area/AreaSeries").default;
/**
 * AreaSpline series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.areaspline
 *
 * @augments Highcharts.Series
 */
declare class AreaSplineSeries extends SplineSeries {
    static defaultOptions: AreaSplineSeriesOptions;
    data: Array<AreaSplinePoint>;
    points: Array<AreaSplinePoint>;
    options: AreaSplineSeriesOptions;
}
interface AreaSplineSeries extends SplineSeries {
    pointClass: typeof AreaSplinePoint;
    getGraphPath: typeof areaProto.getGraphPath;
    getStackPoints: typeof areaProto.getStackPoints;
    drawGraph: typeof areaProto.drawGraph;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        areaspline: typeof AreaSplineSeries;
    }
}
export default AreaSplineSeries;
