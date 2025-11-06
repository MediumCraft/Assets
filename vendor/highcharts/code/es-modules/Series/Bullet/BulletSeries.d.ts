import type BulletSeriesOptions from './BulletSeriesOptions';
import type DataExtremesObject from '../../Core/Series/DataExtremesObject';
import BulletPoint from './BulletPoint.js';
import ColumnSeries from '../Column/ColumnSeries.js';
/**
 * The bullet series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.bullet
 *
 * @augments Highcharts.Series
 */
declare class BulletSeries extends ColumnSeries {
    static defaultOptions: BulletSeriesOptions;
    data: Array<BulletPoint>;
    options: BulletSeriesOptions;
    points: Array<BulletPoint>;
    targetData: Array<number>;
    /**
     * Draws the targets. For inverted chart, the `series.group` is rotated,
     * so the same coordinates apply. This method is based on column series
     * drawPoints function.
     *
     * @ignore
     * @function Highcharts.Series#drawPoints
     */
    drawPoints(): void;
    /**
     * Includes target values to extend extremes from y values.
     *
     * @ignore
     * @function Highcharts.Series#getExtremes
     */
    getExtremes(yData?: Array<number>): DataExtremesObject;
}
interface BulletSeries {
    parallelArrays: Array<string>;
    pointArrayMap: Array<string>;
    pointClass: typeof BulletPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        bullet: typeof BulletSeries;
    }
}
export default BulletSeries;
