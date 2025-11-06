import type { BoostChartComposition } from './BoostChart';
import type { BoostTargetAdditions, BoostTargetObject } from './BoostTargetObject';
import type Point from '../../Core/Series/Point';
import type { PointOptions, PointShortOptions } from '../../Core/Series/PointOptions';
import type Series from '../../Core/Series/Series';
import type Types from '../../Shared/Types';
import type SeriesRegistry from '../../Core/Series/SeriesRegistry';
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase extends BoostTargetObject {
        boosted?: boolean;
        boost?: BoostSeriesAdditions;
        fill?: boolean;
        fillOpacity?: boolean;
        processedData?: Array<(PointOptions | PointShortOptions)>;
        sampling?: boolean;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        boostData?: Array<unknown>;
        xData?: Array<number>;
        yData?: Array<(number | null)>;
    }
}
interface BoostAlteredObject {
    own: boolean;
    prop: ('allowDG' | 'directTouch' | 'stickyTracking');
    val: unknown;
    value?: unknown;
}
interface BoostPointMockup {
    destroy(): void;
    x: (false | number);
    clientX: number;
    dist?: number;
    distX?: number;
    plotX: number;
    plotY: number;
    i: number;
    percentage: number;
}
interface BoostSeriesAdditions extends BoostTargetAdditions {
    altered?: Array<BoostAlteredObject>;
    getPoint(boostPoint: (BoostPointMockup | Point)): BoostPointComposition;
}
export declare class BoostPointComposition extends Point {
    series: BoostSeriesComposition;
    init(series: BoostSeriesComposition, options: (PointOptions | PointShortOptions), x?: number): BoostPointComposition;
}
export declare class BoostSeriesComposition extends Series {
    boosted?: boolean;
    boost: BoostSeriesAdditions;
    chart: BoostChartComposition;
    pointClass: typeof BoostPointComposition;
}
/**
 * @private
 */
declare function compose<T extends typeof Series>(SeriesClass: T, seriesTypes: typeof SeriesRegistry.seriesTypes, PointClass: typeof Point, wglMode?: boolean): (T & typeof BoostSeriesComposition);
/**
 * If implemented in the core, parts of this can probably be
 * shared with other similar methods in Highcharts.
 * @private
 * @function Highcharts.Series#destroyGraphics
 */
declare function destroyGraphics(series: Series): void;
/**
 * An "async" foreach loop. Uses a setTimeout to keep the loop from blocking the
 * UI thread.
 *
 * @private
 * @param {Array<unknown>} arr
 * The array to loop through.
 * @param {Function} fn
 * The callback to call for each item.
 * @param {Function} finalFunc
 * The callback to call when done.
 * @param {number} [chunkSize]
 * The number of iterations per timeout.
 * @param {number} [i]
 * The current index.
 * @param {boolean} [noTimeout]
 * Set to true to skip timeouts.
 */
declare function eachAsync(arr: Array<unknown> | Types.TypedArray, fn: Function, finalFunc: Function, chunkSize?: number, i?: number, noTimeout?: boolean): void;
/**
 * Return a full Point object based on the index.
 * The boost module uses stripped point objects for performance reasons.
 * @private
 * @param {object|Highcharts.Point} boostPoint
 *        A stripped-down point object
 * @return {Highcharts.Point}
 *         A Point object as per https://api.highcharts.com/highcharts#Point
 */
declare function getPoint(series: Series, boostPoint: (BoostPointMockup | Point)): BoostPointComposition;
declare const BoostSeries: {
    compose: typeof compose;
    destroyGraphics: typeof destroyGraphics;
    eachAsync: typeof eachAsync;
    getPoint: typeof getPoint;
};
export default BoostSeries;
