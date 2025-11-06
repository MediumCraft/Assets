import type Axis from '../../Core/Axis/Axis';
import type Chart from '../../Core/Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type PointerEvent from '../../Core/PointerEvent';
import type ScrollbarOptions from './ScrollbarOptions';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        scrollbarsOffsets?: [number, number];
    }
}
/**
 * A reusable scrollbar, internally used in Highcharts Stock's
 * navigator and optionally on individual axes.
 *
 * @private
 * @class
 * @name Highcharts.Scrollbar
 * @param {Highcharts.SVGRenderer} renderer
 * @param {Highcharts.ScrollbarOptions} options
 * @param {Highcharts.Chart} chart
 */
declare class Scrollbar {
    static defaultOptions: ScrollbarOptions;
    static compose(AxisClass: typeof Axis): void;
    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be
     * rotated. The same method is used in Navigator's handles, to rotate them.
     *
     * @function Highcharts.swapXY
     *
     * @param {Highcharts.SVGPathArray} path
     * Path to be rotated.
     *
     * @param {boolean} [vertical]
     * If vertical scrollbar, swap x-y values.
     *
     * @return {Highcharts.SVGPathArray}
     * Rotated path.
     *
     * @requires modules/stock
     */
    static swapXY(path: SVGPath, vertical?: boolean): SVGPath;
    constructor(renderer: SVGRenderer, options: DeepPartial<ScrollbarOptions>, chart: Chart);
    _events: Array<[
        any,
        string,
        Scrollbar.EventCallback
    ]>;
    barWidth?: number;
    calculatedWidth?: number;
    chart: Chart;
    private chartX;
    private chartY;
    from: number;
    private grabbedCenter?;
    group: SVGElement;
    hasDragged?: boolean;
    height?: number;
    private initPositions?;
    options: ScrollbarOptions;
    rendered?: boolean;
    renderer: SVGRenderer;
    scrollbar: SVGElement;
    scrollbarButtons: Array<SVGElement>;
    scrollbarGroup: SVGElement;
    scrollbarLeft: number;
    scrollbarRifles: SVGElement;
    scrollbarStrokeWidth: number;
    scrollbarTop: number;
    size: number;
    to: number;
    track: SVGElement;
    trackBorderWidth: number;
    userOptions: DeepPartial<ScrollbarOptions>;
    width?: number;
    x: number;
    xOffset?: number;
    y: number;
    yOffset?: number;
    /**
     * Set up the mouse and touch events for the Scrollbar
     *
     * @private
     * @function Highcharts.Scrollbar#addEvents
     */
    addEvents(): void;
    private buttonToMaxClick;
    private buttonToMinClick;
    /**
     * Get normalized (0-1) cursor position over the scrollbar
     *
     * @private
     * @function Highcharts.Scrollbar#cursorToScrollbarPosition
     *
     * @param  {*} normalizedEvent
     *         normalized event, with chartX and chartY values
     *
     * @return {Highcharts.Dictionary<number>}
     *         Local position {chartX, chartY}
     */
    cursorToScrollbarPosition(normalizedEvent: PointerEvent): Record<string, number>;
    /**
     * Destroys allocated elements.
     *
     * @private
     * @function Highcharts.Scrollbar#destroy
     */
    destroy(): void;
    /**
     * Draw the scrollbar buttons with arrows
     *
     * @private
     * @function Highcharts.Scrollbar#drawScrollbarButton
     * @param {number} index
     *        0 is left, 1 is right
     */
    drawScrollbarButton(index: number): void;
    /**
     * @private
     * @function Highcharts.Scrollbar#init
     * @param {Highcharts.SVGRenderer} renderer
     * @param {Highcharts.ScrollbarOptions} options
     * @param {Highcharts.Chart} chart
     */
    init(renderer: SVGRenderer, options: DeepPartial<ScrollbarOptions>, chart: Chart): void;
    private mouseDownHandler;
    /**
     * Event handler for the mouse move event.
     * @private
     */
    private mouseMoveHandler;
    /**
     * Event handler for the mouse up event.
     * @private
     */
    private mouseUpHandler;
    /**
     * Position the scrollbar, method called from a parent with defined
     * dimensions.
     *
     * @private
     * @function Highcharts.Scrollbar#position
     * @param {number} x
     *        x-position on the chart
     * @param {number} y
     *        y-position on the chart
     * @param {number} width
     *        width of the scrollbar
     * @param {number} height
     *        height of the scrollbar
     */
    position(x: number, y: number, width: number, height: number): void;
    /**
     * Removes the event handlers attached previously with addEvents.
     *
     * @private
     * @function Highcharts.Scrollbar#removeEvents
     */
    removeEvents(): void;
    /**
     * Render scrollbar with all required items.
     *
     * @private
     * @function Highcharts.Scrollbar#render
     */
    render(): void;
    /**
     * Set scrollbar size, with a given scale.
     *
     * @private
     * @function Highcharts.Scrollbar#setRange
     * @param {number} from
     *        scale (0-1) where bar should start
     * @param {number} to
     *        scale (0-1) where bar should end
     */
    setRange(from: number, to: number): void;
    /**
     * Checks if the extremes should be updated in response to a scrollbar
     * change event.
     *
     * @private
     * @function Highcharts.Scrollbar#shouldUpdateExtremes
     */
    shouldUpdateExtremes(eventType?: string): boolean;
    trackClick(e: PointerEvent): void;
    /**
     * Update the scrollbar with new options
     *
     * @private
     * @function Highcharts.Scrollbar#update
     * @param  {Highcharts.ScrollbarOptions} options
     */
    update(options: DeepPartial<ScrollbarOptions>): void;
    /**
     * Update position option in the Scrollbar, with normalized 0-1 scale
     *
     * @private
     * @function Highcharts.Scrollbar#updatePosition
     * @param  {number} from
     * @param  {number} to
     */
    updatePosition(from: number, to: number): void;
}
declare namespace Scrollbar {
    interface ChangedEvent {
        from: number;
        to: number;
        trigger: 'scrollbar';
        DOMType?: string;
        DOMEvent: Event;
    }
    interface EventCallback {
        (e: PointerEvent): void;
    }
}
export default Scrollbar;
