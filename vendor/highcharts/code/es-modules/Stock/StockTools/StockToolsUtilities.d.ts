/**
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2025 Paweł Fus
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type Annotation from '../../Extensions/Annotations/Annotation';
import type AxisType from '../../Core/Axis/AxisType';
import type Chart from '../../Core/Chart/Chart';
import type { FlagsShapeValue } from '../../Series/Flags/FlagsPointOptions';
import type NavigationBindings from '../../Extensions/Annotations/NavigationBindings';
import type Pointer from '../../Core/Pointer';
import type PointerEvent from '../../Core/PointerEvent';
import Series from '../../Core/Series/Series.js';
interface NavigationBindingsAttractionObject {
    x: number;
    y: number;
    below: boolean;
    series: Series;
    xAxis: number;
    yAxis: number;
}
interface StockToolsFieldsObject {
    [key: string]: any;
}
/**
 * Generates function which will add a flag series using modal in GUI.
 * Method fires an event "showPopup" with config:
 * `{type, options, callback}`.
 *
 * Example: NavigationBindings.utils.addFlagFromForm('url(...)') - will
 * generate function that shows modal in GUI.
 *
 * @private
 * @function bindingsUtils.addFlagFromForm
 *
 * @param {Highcharts.FlagsShapeValue} type
 *        Type of flag series, e.g. "squarepin"
 *
 * @return {Function}
 *         Callback to be used in `start` callback
 */
declare function addFlagFromForm(type: FlagsShapeValue): Function;
/**
 * @private
 * @todo
 * Consider using getHoverData(), but always kdTree (columns?)
 */
declare function attractToPoint(e: PointerEvent, chart: Chart): NavigationBindingsAttractionObject | void;
/**
 * Shorthand to check if given yAxis comes from navigator.
 *
 * @private
 * @function bindingsUtils.isNotNavigatorYAxis
 *
 * @param {Highcharts.Axis} axis
 * Axis to check.
 *
 * @return {boolean}
 * True, if axis comes from navigator.
 */
declare function isNotNavigatorYAxis(axis: AxisType): boolean;
/**
 * Check if any of the price indicators are enabled.
 * @private
 * @function bindingsUtils.isLastPriceEnabled
 *
 * @param {Array} series
 *        Array of series.
 *
 * @return {boolean}
 *         Tells which indicator is enabled.
 */
declare function isPriceIndicatorEnabled(series: Series[]): boolean;
/**
 * @private
 */
declare function manageIndicators(this: NavigationBindings, data: StockToolsFieldsObject): void;
/**
 * Update height for an annotation. Height is calculated as a difference
 * between last point in `typeOptions` and current position. It's a value,
 * not pixels height.
 *
 * @private
 * @function bindingsUtils.updateHeight
 *
 * @param {Highcharts.PointerEventObject} e
 *        normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 *        Annotation to be updated
 */
declare function updateHeight(this: NavigationBindings, e: PointerEvent, annotation: Annotation): void;
/**
 * Update each point after specified index, most of the annotations use
 * this. For example crooked line: logic behind updating each point is the
 * same, only index changes when adding an annotation.
 *
 * Example: NavigationBindings.utils.updateNthPoint(1) - will generate
 * function that updates all consecutive points except point with index=0.
 *
 * @private
 * @function bindingsUtils.updateNthPoint
 *
 * @param {number} startIndex
 *        Index from which point should update
 *
 * @return {Function}
 *         Callback to be used in steps array
 */
declare function updateNthPoint(startIndex: number): typeof updateHeight;
/**
 * Update size of background (rect) in some annotations: Measure, Simple
 * Rect.
 *
 * @private
 * @function Highcharts.NavigationBindingsUtilsObject.updateRectSize
 *
 * @param {Highcharts.PointerEventObject} event
 * Normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 * Annotation to be updated
 */
declare function updateRectSize(event: PointerEvent, annotation: Annotation): void;
/**
 * Compares two arrays of strings, checking their length and if corresponding
 * elements are equal.
 *
 * @param {string[]} a
 *        The first array to compare.
 * @param {string[]} b
 *        The second array to compare.
 * @return {boolean}
 *          Return `true` if the arrays are equal, otherwise `false`.
 */
declare function shallowArraysEqual(a: Array<string> | undefined, b: Array<string> | undefined): boolean;
declare const StockToolsUtilities: {
    indicatorsWithAxes: string[];
    indicatorsWithVolume: string[];
    addFlagFromForm: typeof addFlagFromForm;
    attractToPoint: typeof attractToPoint;
    getAssignedAxis: (coords: Array<Pointer.AxisCoordinateObject>) => Pointer.AxisCoordinateObject;
    isNotNavigatorYAxis: typeof isNotNavigatorYAxis;
    isPriceIndicatorEnabled: typeof isPriceIndicatorEnabled;
    manageIndicators: typeof manageIndicators;
    shallowArraysEqual: typeof shallowArraysEqual;
    updateHeight: typeof updateHeight;
    updateNthPoint: typeof updateNthPoint;
    updateRectSize: typeof updateRectSize;
};
export default StockToolsUtilities;
