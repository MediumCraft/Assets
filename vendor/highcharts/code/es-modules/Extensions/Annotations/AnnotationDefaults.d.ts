import type { AnnotationOptions } from './AnnotationOptions';
/**
 * A collection of annotations to add to the chart. The basic annotation allows
 * adding custom labels or shapes. The items can be tied to points, axis
 * coordinates or chart pixel coordinates.
 *
 * General options for all annotations can be set using the
 * `Highcharts.setOptions` function. In this case only single objects are
 * supported, because it alters the defaults for all items. For initialization
 * in the chart constructors however, arrays of annotations are supported.
 *
 * See more in the [general docs](https://www.highcharts.com/docs/advanced-chart-features/annotations).
 *
 * @sample highcharts/annotations/basic/ Basic annotations
 * @sample highcharts/demo/annotations/ Annotated chart
 * @sample highcharts/css/annotations Styled mode
 * @sample highcharts/annotations-advanced/controllable Controllable items
 * @sample {highstock} stock/annotations/fibonacci-retracements
 *         Custom annotation, Fibonacci retracement
 * @sample highcharts/annotations/shape/
 *         Themed crooked line annotation
 *
 * @type         {Array<*>}
 * @since        6.0.0
 * @requires     modules/annotations
 * @optionparent annotations
 */
declare const AnnotationDefaults: AnnotationOptions;
export default AnnotationDefaults;
