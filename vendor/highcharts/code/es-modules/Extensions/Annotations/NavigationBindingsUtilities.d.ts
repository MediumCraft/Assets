import type Pointer from '../../Core/Pointer';
/**
 * Returns the first xAxis or yAxis that was clicked with its value.
 *
 * @private
 *
 * @param {Array<Highcharts.PointerAxisCoordinateObject>} coords
 *        All the chart's x or y axes with a current pointer's axis value.
 *
 * @return {Highcharts.PointerAxisCoordinateObject}
 *         Object with a first found axis and its value that pointer
 *         is currently pointing.
 */
declare function getAssignedAxis(coords: Array<Pointer.AxisCoordinateObject>): Pointer.AxisCoordinateObject;
/**
 * Get field type according to value
 *
 * @private
 *
 * @param {'boolean'|'number'|'string'} value
 * Atomic type (one of: string, number, boolean)
 *
 * @return {'checkbox'|'number'|'text'}
 * Field type (one of: text, number, checkbox)
 */
declare function getFieldType(key: (0 | string), value: ('boolean' | 'number' | 'string')): ('checkbox' | 'number' | 'text');
declare const NavigationBindingUtilities: {
    annotationsFieldsTypes: Record<string, string>;
    getAssignedAxis: typeof getAssignedAxis;
    getFieldType: typeof getFieldType;
};
export default NavigationBindingUtilities;
