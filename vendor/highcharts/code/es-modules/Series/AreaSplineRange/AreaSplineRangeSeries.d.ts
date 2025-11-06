import type AreaSplineRangePoint from './AreaSplineRangePoint';
import type AreaSplineRangeSeriesOptions from './AreaSplineRangeSeriesOptions';
import AreaRangeSeries from '../AreaRange/AreaRangeSeries.js';
declare const splineProto: import("../Spline/SplineSeries").default;
/**
 * The areasplinerange series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.areasplinerange
 *
 * @augments Highcharts.Series
 */
declare class AreaSplineRangeSeries extends AreaRangeSeries {
    static defaultOptions: AreaSplineRangeSeriesOptions;
    options: AreaSplineRangeSeriesOptions;
    data: Array<AreaSplineRangePoint>;
    points: Array<AreaSplineRangePoint>;
}
interface AreaSplineRangeSeries extends AreaRangeSeries {
    pointClass: typeof AreaSplineRangePoint;
    getPointSpline: typeof splineProto.getPointSpline;
}
/**
 * @private
 */
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        areasplinerange: typeof AreaSplineRangeSeries;
    }
}
export default AreaSplineRangeSeries;
