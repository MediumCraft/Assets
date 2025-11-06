import type { StandaloneNavigatorOptions } from './NavigatorOptions';
import type { SeriesOptions } from '../../Core/Series/SeriesOptions';
import type { Options } from '../../Core/Options';
import Chart from '../../Core/Chart/Chart.js';
import Navigator from './Navigator.js';
import Axis from '../../Core/Axis/Axis.js';
declare module '../../Core/GlobalsBase.d.ts' {
    interface GlobalsBase {
        navigators: Array<StandaloneNavigator>;
    }
}
/**
 * The StandaloneNavigator class. The StandaloneNavigator class allows for
 * creating a standalone navigator component that synchronizes the extremes
 * across multiple bound charts.
 *
 * @class
 * @name Highcharts.StandaloneNavigator
 *
 * @param {string|Highcharts.HTMLDOMElement} [renderTo]
 * The DOM element to render to, or its id.
 *
 * @param {StandaloneNavigatorOptions} userOptions
 * The standalone navigator options.
 */
declare class StandaloneNavigator {
    navigator: Navigator;
    boundAxes: Array<{
        axis: Axis;
        callbacks: Array<Function>;
    }>;
    chartOptions: Partial<Options>;
    userOptions: StandaloneNavigatorOptions;
    /**
     * Factory function for standalone navigator.
     *
     * @function Highcharts.navigator
     *
     * @param {string|Highcharts.HTMLDOMElement} [renderTo]
     * The DOM element to render to, or its id.
     *
     * @param {StandaloneNavigatorOptions} options
     * The standalone navigator options with chart-like structure.
     *
     * Returns the navigator object.
     */
    static navigator(renderTo: (string | globalThis.HTMLElement), options: StandaloneNavigatorOptions): StandaloneNavigator;
    constructor(element: (string | globalThis.HTMLElement), userOptions: StandaloneNavigatorOptions);
    /**
     * Binds an axis to the standalone navigator,
     * allowing the navigator to control the axis' range.
     *
     * @sample stock/standalone-navigator/bind/
     *         Bind chart with a button
     *
     * @function Highcharts.StandaloneNavigator#bind
     *
     * @param {Axis | Chart} axisOrChart
     *        The Axis or Chart to bind to the navigator.
     *
     * @param {boolean} [twoWay=true]
     *        Enables two-way binding between the navigator and the axis/chart.
     *        When true, changes in the navigator's range will update the axis
     *        and vice versa. When false, changes in the navigator's range will
     *        be reflected in the axis, but changes in the axis ranges won't be
     *        reflected on the navigator.
     */
    bind(axisOrChart: Axis | Chart, twoWay?: boolean): void;
    /**
     * Unbinds a single axis or all bound axes from the standalone navigator.
     *
     * @sample stock/standalone-navigator/unbind/
     *         Unbind chart with a button
     *
     * @function Highcharts.StandaloneNavigator#unbind
     *
     * @param {Chart | Axis | undefined} axisOrChart
     *        Passing a Chart object unbinds the first X axis of the chart,
     *        an Axis object unbinds that specific axis,
     *        and undefined unbinds all axes bound to the navigator.
     */
    unbind(axisOrChart?: Chart | Axis): void;
    /**
     * Destroys allocated standalone navigator elements.
     *
     * @function Highcharts.StandaloneNavigator#destroy
     */
    destroy(): void;
    /**
     * Updates the standalone navigator's options with a new set of user
     * options.
     *
     * @sample stock/standalone-navigator/update/
     *         Bind chart with a button
     *
     * @function Highcharts.StandaloneNavigator#update
     *
     * @param  {StandaloneNavigatorOptions} newOptions
     *         Updates the standalone navigator's options with new user options.
     *
     * @param  {boolean | undefined} redraw
     *         Whether to redraw the standalone navigator. By default, if not
     *         specified, the standalone navigator will be redrawn.
     */
    update(newOptions: StandaloneNavigatorOptions, redraw?: boolean): void;
    /**
     * Redraws the standalone navigator.
     *
     * @function Highcharts.StandaloneNavigator#redraw
     */
    redraw(): void;
    /**
     * Adds a series to the standalone navigator.
     *
     * @private
     *
     * @param {SeriesOptions} seriesOptions
     *        Options for the series to be added to the navigator.
     */
    addSeries(seriesOptions: SeriesOptions): void;
    /**
     * Initialize the standalone navigator.
     *
     * @private
     */
    initNavigator(): void;
    /**
     * Get the current range of the standalone navigator.
     *
     * @sample stock/standalone-navigator/getrange/
     *         Report the standalone navigator's range by clicking on a button
     *
     * @function Highcharts.StandaloneNavigator#getRange
     *
     * @return {Highcharts.ExtremesObject}
     *         The current range of the standalone navigator.
     */
    getRange(): Axis.ExtremesObject;
    /**
     * Set the range of the standalone navigator.
     *
     * @sample stock/standalone-navigator/setrange/
     *         Set range from a button
     *
     * @function Highcharts.StandaloneNavigator#setRange
     *
     * @param {number | undefined} min
     *        The new minimum value.
     *
     * @param {number | undefined} max
     *        The new maximum value.
     *
     * @emits Highcharts.StandaloneNavigator#event:setRange
     */
    setRange(min?: number, max?: number, redraw?: boolean, animation?: boolean, eventArguments?: AnyRecord): void;
    /**
     * Get the initial, options based extremes for the standalone navigator.
     *
     * @private
     *
     * @return {{ min: number, max: number }}
     *         The initial minimum and maximum extremes values.
     */
    getInitialExtremes(): {
        min: number;
        max: number;
    };
}
export default StandaloneNavigator;
