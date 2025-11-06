import type Legend from './Legend';
import type LegendItem from './LegendItem';
import type Point from '../Series/Point';
import type Series from '../Series/Series';
declare module '../Axis/AxisBase' {
    interface AxisBase extends LegendItem {
    }
}
declare module '../Series/PointBase' {
    interface PointBase extends LegendItem {
    }
}
declare module '../Series/SeriesBase' {
    interface SeriesBase extends LegendItem {
        drawLegendSymbol: (legend: Legend, item: (Point | Series)) => void;
    }
}
declare namespace LegendSymbol {
    /**
     * Draw a line, a point marker and an area in the legend.
     *
     * @private
     * @function Highcharts.LegendSymbolMixin.areaMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function areaMarker(this: Series, legend: Legend, item?: LegendItem): void;
    /**
     * Draw a line and a point marker in the legend.
     *
     * @private
     * @function Highcharts.LegendSymbolMixin.lineMarker
     *
     * @param {Highcharts.Legend} legend
     * The legend object.
     */
    function lineMarker(this: Series, legend: Legend, item?: LegendItem, hasArea?: boolean): void;
    /**
     * Get the series' symbol in the legend.
     *
     * This method should be overridable to create custom symbols through
     * Highcharts.seriesTypes[type].prototype.drawLegendSymbol.
     *
     * @private
     * @function Highcharts.LegendSymbolMixin.rectangle
     *
     * @param {Highcharts.Legend} legend
     * The legend object
     *
     * @param {Highcharts.Point|Highcharts.Series} item
     * The series (this) or point
     */
    function rectangle(this: Series, legend: Legend, item: LegendItem): void;
}
export default LegendSymbol;
