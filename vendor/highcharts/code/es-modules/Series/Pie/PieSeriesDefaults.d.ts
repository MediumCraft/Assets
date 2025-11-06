import type PieSeries from './PieSeries';
import type { PlotOptionsOf } from '../../Core/Series/SeriesOptions';
/**
 * A pie chart is a circular graphic which is divided into slices to
 * illustrate numerical proportion.
 *
 * @sample highcharts/demo/pie-chart/
 *         Pie chart
 *
 * @extends      plotOptions.line
 * @excluding    animationLimit, boostThreshold, connectEnds, connectNulls,
 *               cropThreshold, dashStyle, dataSorting, dragDrop,
 *               findNearestPointBy, getExtremesFromAll, label, lineWidth,
 *               linkedTo, marker, negativeColor, pointInterval,
 *               pointIntervalUnit, pointPlacement, pointStart,
 *               softThreshold, stacking, step, threshold, turboThreshold,
 *               zoneAxis, zones, dataSorting, boostBlending
 * @product      highcharts highmaps
 * @optionparent plotOptions.pie
 *
 * @private
 */
declare const PieSeriesDefaults: PlotOptionsOf<PieSeries>;
export default PieSeriesDefaults;
