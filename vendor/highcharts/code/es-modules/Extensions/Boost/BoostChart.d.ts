import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type { BoostSeriesComposition } from './BoostSeries';
import type { BoostTargetAdditions, BoostTargetObject } from './BoostTargetObject';
import type Chart from '../../Core/Chart/Chart';
import type Series from '../../Core/Series/Series';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
interface BoostChartAdditions extends BoostTargetAdditions {
    forceChartBoost?: boolean;
    markerGroup?: Series['markerGroup'];
    lineWidthFilter?: SVGElement;
}
export declare class BoostChartComposition extends Chart {
    boosted?: boolean;
    boost: BoostChartAdditions;
    series: Array<BoostSeriesComposition>;
}
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase extends BoostTargetObject {
        boosted?: boolean;
        boost?: BoostChartAdditions;
    }
}
/**
 * @private
 */
declare function compose<T extends typeof Chart>(ChartClass: T, wglMode?: boolean): T;
/**
 * Get the clip rectangle for a target, either a series or the chart.
 * For the chart, we need to consider the maximum extent of its Y axes,
 * in case of Highcharts Stock panes and navigator.
 *
 * @private
 * @function Highcharts.Chart#getBoostClipRect
 */
declare function getBoostClipRect(chart: Chart, target: BoostTargetObject): BBoxObject;
/**
 * Returns true if the chart is in series boost mode.
 * @private
 * @param {Highcharts.Chart} chart
 * Chart to check.
 * @return {boolean}
 * `true` if the chart is in series boost mode.
 */
declare function isChartSeriesBoosting(chart: Chart): chart is BoostChartComposition;
declare const BoostChart: {
    compose: typeof compose;
    getBoostClipRect: typeof getBoostClipRect;
    isChartSeriesBoosting: typeof isChartSeriesBoosting;
};
export default BoostChart;
