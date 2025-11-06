import type Chart from '../../Core/Chart/Chart';
import type Legend from '../../Core/Legend/Legend';
/**
 * Compose classes for use with Bubble series.
 * @private
 *
 * @param {Highcharts.Chart} ChartClass
 * Core chart class to use with Bubble series.
 *
 * @param {Highcharts.Legend} LegendClass
 * Core legend class to use with Bubble series.
 */
declare function compose(ChartClass: typeof Chart, LegendClass: typeof Legend): void;
declare const BubbleLegendComposition: {
    compose: typeof compose;
};
export default BubbleLegendComposition;
