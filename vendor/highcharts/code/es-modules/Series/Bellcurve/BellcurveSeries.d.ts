import type BellcurvePoint from './BellcurvePoint';
import type BellcurveSeriesOptions from './BellcurveSeriesOptions';
import DerivedComposition from '../DerivedComposition.js';
declare const AreaSplineSeries: typeof import("../AreaSpline/AreaSplineSeries").default;
import AnimationOptions from '../../Core/Animation/AnimationOptions';
/**
 * Bell curve class
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.bellcurve
 *
 * @augments Highcharts.Series
 */
declare class BellcurveSeries extends AreaSplineSeries {
    static defaultOptions: BellcurveSeriesOptions;
    /** @private */
    private static mean;
    /** @private */
    private static standardDeviation;
    /** @private */
    private static normalDensity;
    data: Array<BellcurvePoint>;
    mean?: number;
    options: BellcurveSeriesOptions;
    points: Array<BellcurvePoint>;
    standardDeviation?: number;
    setData(data: number[] | undefined, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>), updatePoints?: boolean): void;
    derivedData(mean: number, standardDeviation: number): Array<Array<number>>;
    setDerivedData(): void;
    setMean(data: number[]): void;
    setStandardDeviation(data: number[]): void;
}
interface BellcurveSeries extends DerivedComposition.SeriesComposition {
    pointClass: typeof BellcurvePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        bellcurve: typeof BellcurveSeries;
    }
}
export default BellcurveSeries;
