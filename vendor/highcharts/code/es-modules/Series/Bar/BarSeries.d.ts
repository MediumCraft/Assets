import type BarPoint from './BarPoint';
import type BarSeriesOptions from './BarSeriesOptions';
import ColumnSeries from '../Column/ColumnSeries.js';
/**
 * Bar series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.bar
 *
 * @augments Highcharts.Series
 */
declare class BarSeries extends ColumnSeries {
    /**
     * A bar series is a special type of column series where the columns are
     * horizontal.
     *
     * @sample highcharts/demo/bar-chart/
     *         Bar chart
     *
     * @extends      plotOptions.column
     * @product      highcharts
     * @optionparent plotOptions.bar
     */
    static defaultOptions: BarSeriesOptions;
    data: Array<BarPoint>;
    options: BarSeriesOptions;
    points: Array<BarPoint>;
}
interface BarSeries {
    inverted?: boolean;
    pointClass: typeof BarPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        bar: typeof BarSeries;
    }
}
export default BarSeries;
