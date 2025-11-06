import type Chart from '../../Core/Chart/Chart';
/**
 * Sets the chart.fixedRange to the specified value. If the value is larger
 * than actual range, sets it to the maximum possible range. (#20327)
 *
 * @private
 * @function Highcharts.StockChart#setFixedRange
 * @param {number|undefined} range
 *        Range to set in axis units.
 */
declare function setFixedRange(this: Chart, range: number | undefined): void;
declare const StockUtilities: {
    setFixedRange: typeof setFixedRange;
};
export default StockUtilities;
