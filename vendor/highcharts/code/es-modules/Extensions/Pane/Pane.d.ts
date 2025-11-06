import type { PaneBackgroundOptions, PaneOptions } from './PaneOptions';
import type { PaneChart } from './PaneComposition';
import type RadialAxis from '../../Core/Axis/RadialAxis';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        pane?: Pane;
    }
}
/**
 * The Pane object allows options that are common to a set of X and Y axes.
 *
 * In the future, this can be extended to basic Highcharts and Highcharts Stock.
 *
 * @private
 * @class
 * @name Highcharts.Pane
 * @param {Highcharts.PaneOptions} options
 * @param {Highcharts.Chart} chart
 */
declare class Pane {
    static compose: (ChartClass: typeof import("../../Core/Chart/Chart").default, PointerClass: typeof import("../../Core/Pointer").default, SeriesClass: typeof import("../../Core/Series/Series").default) => void;
    constructor(options: PaneOptions, chart: PaneChart);
    axis?: RadialAxis.AxisComposition;
    background: Array<SVGElement>;
    center: Array<number>;
    chart: PaneChart;
    group?: SVGElement;
    options: PaneOptions;
    coll: string;
    /**
     * Initialize the Pane object
     *
     * @private
     * @function Highcharts.Pane#init
     *
     * @param {Highcharts.PaneOptions} options
     *
     * @param {Highcharts.Chart} chart
     */
    init(options: PaneOptions, chart: PaneChart): void;
    /**
     * @private
     * @function Highcharts.Pane#setOptions
     *
     * @param {Highcharts.PaneOptions} options
     */
    setOptions(options: PaneOptions): void;
    /**
     * Render the pane with its backgrounds.
     *
     * @private
     * @function Highcharts.Pane#render
     */
    render(): void;
    /**
     * Render an individual pane background.
     *
     * @private
     * @function Highcharts.Pane#renderBackground
     *
     * @param {Highcharts.PaneBackgroundOptions} backgroundOptions
     *        Background options
     *
     * @param {number} i
     *        The index of the background in this.backgrounds
     */
    renderBackground(backgroundOptions: PaneBackgroundOptions, i: number): void;
    /**
     * Gets the center for the pane and its axis.
     *
     * @private
     * @function Highcharts.Pane#updateCenter
     * @param {Highcharts.Axis} [axis]
     */
    updateCenter(axis?: RadialAxis.AxisComposition): void;
    /**
     * Destroy the pane item
     *
     * @ignore
     * @private
     * @function Highcharts.Pane#destroy
     * /
    destroy: function () {
        erase(this.chart.pane, this);
        this.background.forEach(function (background) {
            background.destroy();
        });
        this.background.length = 0;
        this.group = this.group.destroy();
    },
    */
    /**
     * Update the pane item with new options
     *
     * @private
     * @function Highcharts.Pane#update
     * @param {Highcharts.PaneOptions} options
     *        New pane options
     * @param {boolean} [redraw]
     */
    update(options: PaneOptions, redraw?: boolean): void;
}
export default Pane;
