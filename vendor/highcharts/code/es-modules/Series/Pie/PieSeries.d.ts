import type PieSeriesOptions from './PieSeriesOptions';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import CU from '../CenteredUtilities.js';
import PiePoint from './PiePoint.js';
import Series from '../../Core/Series/Series.js';
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        redrawPoints?(): void;
        updateTotals?(): void;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesStateHoverOptions {
        brightness?: number;
    }
}
/**
 * Pie series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pie
 *
 * @augments Highcharts.Series
 */
declare class PieSeries extends Series {
    static defaultOptions: import("../../Core/Series/SeriesOptions").PlotOptionsOf<Series> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<PieSeries>;
    center: Array<number>;
    data: Array<PiePoint>;
    endAngleRad?: number;
    options: PieSeriesOptions;
    points: Array<PiePoint>;
    startAngleRad?: number;
    total?: number;
    /**
     * Animates the pies in.
     * @private
     */
    animate(init?: boolean): void;
    /**
     * Called internally to draw auxiliary graph in pie-like series in
     * situtation when the default graph is not sufficient enough to present
     * the data well. Auxiliary graph is saved in the same object as
     * regular graph.
     * @private
     */
    drawEmpty(): void;
    /**
     * Slices in pie chart are initialized in DOM, but it's shapes and
     * animations are normally run in `drawPoints()`.
     * @private
     */
    drawPoints(): void;
    /**
     * Extend the generatePoints method by adding total and percentage
     * properties to each point
     * @private
     */
    generatePoints(): void;
    /**
     * Utility for getting the x value from a given y, used for anticollision
     * logic in data labels.
     * @private
     */
    getX(y: number, left: boolean, point: PiePoint, dataLabel: SVGElement): number;
    /**
     * Define hasData function for non-cartesian series. Returns true if the
     * series has at least one visible point (#23235)
     * @private
     */
    hasData(): boolean;
    /**
     * Draw the data points
     * @private
     */
    redrawPoints(): void;
    /**
     * Utility for sorting data labels.
     * @private
     */
    sortByAngle(points: Array<PiePoint>, sign: number): void;
    /**
     * Do translation for pie slices
     * @private
     */
    translate(positions?: Array<number>): void;
    /**
     * Recompute total chart sum and update percentages of points.
     * @private
     */
    updateTotals(): void;
}
interface PieSeries {
    drawGraph: undefined;
    getCenter: typeof CU['getCenter'];
    pointClass: typeof PiePoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        pie: typeof PieSeries;
    }
}
export default PieSeries;
