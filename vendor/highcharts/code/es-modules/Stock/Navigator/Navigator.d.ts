import type Chart from '../../Core/Chart/Chart.js';
import type { NavigatorAxisComposition } from '../../Core/Axis/NavigatorAxisComposition';
import type { NavigatorOptions } from './NavigatorOptions';
import type PointerEvent from '../../Core/PointerEvent';
import type ScrollbarOptions from '../Scrollbar/ScrollbarOptions';
import type Series from '../../Core/Series/Series.js';
import type { SeriesTypeOptions } from '../../Core/Series/SeriesType';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import Axis from '../../Core/Axis/Axis.js';
import Scrollbar from '../Scrollbar/Scrollbar.js';
export interface SetRangeEvent {
    min: number;
    max: number;
    redraw: boolean;
    animation?: boolean;
    eventArguments: {
        trigger: 'navigator' | 'scrollbar';
        triggerOp: string;
        DOMEvent: any;
    };
}
/**
 * The Navigator class
 *
 * @private
 * @class
 * @name Highcharts.Navigator
 *
 * @param {Highcharts.Chart} chart
 *        Chart object
 */
declare class Navigator {
    static compose(ChartClass: typeof Chart, AxisClass: typeof Axis, SeriesClass: typeof Series): void;
    constructor(chart: Chart);
    baseSeries: Array<Series>;
    chart: Chart;
    dragOffset?: number;
    eventsToUnbind?: Array<Function>;
    fixedExtreme?: (null | number);
    fixedWidth?: number;
    grabbedCenter?: number;
    grabbedLeft?: boolean;
    grabbedRight?: boolean;
    handles: Array<SVGElement>;
    hasDragged?: boolean;
    hasNavigatorData?: boolean;
    height: number;
    isDirty: boolean;
    left: number;
    mouseMoveHandler?: Function;
    mouseUpHandler?: Function;
    navigatorEnabled: boolean;
    navigatorGroup: SVGElement;
    navigatorOptions: NavigatorOptions;
    navigatorSeries: Series;
    navigatorSize: number;
    opposite: boolean;
    otherHandlePos?: number;
    outline: SVGElement;
    range: number;
    rendered: boolean;
    reversedExtremes?: boolean;
    scrollbar?: Scrollbar;
    scrollbarEnabled?: boolean;
    scrollbarHeight: number;
    scrollButtonSize: number;
    scrollbarOptions?: ScrollbarOptions;
    series?: Array<Series>;
    shades: Array<SVGElement>;
    size: number;
    stickToMax?: boolean;
    stickToMin?: boolean;
    top: number;
    unbindRedraw?: Function;
    xAxis: NavigatorAxisComposition;
    yAxis: NavigatorAxisComposition;
    zoomedMax: number;
    zoomedMin: number;
    /**
     * Draw one of the handles on the side of the zoomed range in the navigator.
     *
     * @private
     * @function Highcharts.Navigator#drawHandle
     *
     * @param {number} x
     *        The x center for the handle
     *
     * @param {number} index
     *        0 for left and 1 for right
     *
     * @param {boolean|undefined} inverted
     *        Flag for chart.inverted
     *
     * @param {string} verb
     *        Use 'animate' or 'attr'
     */
    drawHandle(x: number, index: number, inverted: boolean | undefined, verb: string): void;
    /**
     * Render outline around the zoomed range
     *
     * @private
     * @function Highcharts.Navigator#drawOutline
     *
     * @param {number} zoomedMin
     *        in pixels position where zoomed range starts
     *
     * @param {number} zoomedMax
     *        in pixels position where zoomed range ends
     *
     * @param {boolean|undefined} inverted
     *        flag if chart is inverted
     *
     * @param {string} verb
     *        use 'animate' or 'attr'
     */
    drawOutline(zoomedMin: number, zoomedMax: number, inverted: (boolean | undefined), verb: string): void;
    /**
     * Render outline around the zoomed range
     *
     * @private
     * @function Highcharts.Navigator#drawMasks
     *
     * @param {number} zoomedMin
     *        in pixels position where zoomed range starts
     *
     * @param {number} zoomedMax
     *        in pixels position where zoomed range ends
     *
     * @param {boolean|undefined} inverted
     *        flag if chart is inverted
     *
     * @param {string} verb
     *        use 'animate' or 'attr'
     */
    drawMasks(zoomedMin: number, zoomedMax: number, inverted: (boolean | undefined), verb: string): void;
    /**
     * Generate and update DOM elements for a navigator:
     *
     * - main navigator group
     *
     * - all shades
     *
     * - outline
     *
     * - handles
     *
     * @private
     * @function Highcharts.Navigator#renderElements
     */
    renderElements(): void;
    /**
     * Update navigator
     *
     * @private
     * @function Highcharts.Navigator#update
     *
     * @param {Highcharts.NavigatorOptions} options
     *        Options to merge in when updating navigator
     */
    update(options: NavigatorOptions, redraw?: boolean): void;
    /**
     * Render the navigator
     *
     * @private
     * @function Highcharts.Navigator#render
     * @param {number} min
     *        X axis value minimum
     * @param {number} max
     *        X axis value maximum
     * @param {number} [pxMin]
     *        Pixel value minimum
     * @param {number} [pxMax]
     *        Pixel value maximum
     */
    render(min: number, max: number, pxMin?: number, pxMax?: number): void;
    /**
     * Set up the mouse and touch events for the navigator
     *
     * @private
     * @function Highcharts.Navigator#addMouseEvents
     */
    addMouseEvents(): void;
    /**
     * Generate events for handles and masks
     *
     * @private
     * @function Highcharts.Navigator#getPartsEvents
     *
     * @param {string} eventName
     *        Event name handler, 'mousedown' or 'touchstart'
     *
     * @return {Array<Function>}
     *         An array of functions to remove navigator functions from the
     *         events again.
     */
    getPartsEvents(eventName: string): Array<Function>;
    /**
     * Mousedown on a shaded mask, either:
     *
     * - will be stored for future drag&drop
     *
     * - will directly shift to a new range
     *
     * @private
     * @function Highcharts.Navigator#shadesMousedown
     *
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     *
     * @param {number} index
     *        Index of a mask in Navigator.shades array
     */
    shadesMousedown(e: PointerEvent, index: number): void;
    /**
     * Mousedown on a handle mask.
     * Will store necessary information for drag&drop.
     *
     * @private
     * @function Highcharts.Navigator#handlesMousedown
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     * @param {number} index
     *        Index of a handle in Navigator.handles array
     */
    handlesMousedown(e: PointerEvent, index: number): void;
    /**
     * Mouse move event based on x/y mouse position.
     *
     * @private
     * @function Highcharts.Navigator#onMouseMove
     *
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     */
    onMouseMove(e: PointerEvent): void;
    /**
     * Mouse up event based on x/y mouse position.
     *
     * @private
     * @function Highcharts.Navigator#onMouseUp
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event
     */
    onMouseUp(e: PointerEvent): void;
    /**
     * Removes the event handlers attached previously with addEvents.
     *
     * @private
     * @function Highcharts.Navigator#removeEvents
     */
    removeEvents(): void;
    /**
     * Remove data events.
     *
     * @private
     * @function Highcharts.Navigator#removeBaseSeriesEvents
     */
    removeBaseSeriesEvents(): void;
    /**
     * Calculate the navigator xAxis offsets
     *
     * @private
     */
    getXAxisOffsets(): [number, number, number, number];
    /**
     * Initialize the Navigator object
     *
     * @private
     * @function Highcharts.Navigator#init
     */
    init(chart: Chart): void;
    /**
     * Set the opposite property on navigator
     *
     * @private
     */
    setOpposite(): void;
    /**
     * Get the union data extremes of the chart - the outer data extremes of the
     * base X axis and the navigator axis.
     *
     * @private
     * @function Highcharts.Navigator#getUnionExtremes
     */
    getUnionExtremes(returnFalseOnNoBaseSeries?: boolean): (Record<string, (number | undefined)> | undefined);
    /**
     * Set the base series and update the navigator series from this. With a bit
     * of modification we should be able to make this an API method to be called
     * from the outside
     *
     * @private
     * @function Highcharts.Navigator#setBaseSeries
     * @param {Highcharts.SeriesOptionsType} [baseSeriesOptions]
     *        Additional series options for a navigator
     * @param {boolean} [redraw]
     *        Whether to redraw after update.
     */
    setBaseSeries(baseSeriesOptions?: SeriesTypeOptions, redraw?: boolean): void;
    /**
     * Update series in the navigator from baseSeries, adding new if does not
     * exist.
     *
     * @private
     * @function Highcharts.Navigator.updateNavigatorSeries
     */
    updateNavigatorSeries(addEvents: boolean, redraw?: boolean): void;
    /**
     * Add data events.
     * For example when main series is updated we need to recalculate extremes
     *
     * @private
     * @function Highcharts.Navigator#addBaseSeriesEvent
     */
    addBaseSeriesEvents(): void;
    /**
     * Get minimum from all base series connected to the navigator
     * @private
     * @param {number} currentSeriesMin
     *        Minium from the current series
     * @return {number}
     *         Minimum from all series
     */
    getBaseSeriesMin(currentSeriesMin: number): number;
    /**
     * Set the navigator x axis extremes to reflect the total. The navigator
     * extremes should always be the extremes of the union of all series in the
     * chart as well as the navigator series.
     *
     * @private
     * @function Highcharts.Navigator#modifyNavigatorAxisExtremes
     */
    modifyNavigatorAxisExtremes(): void;
    /**
     * Hook to modify the base axis extremes with information from the Navigator
     *
     * @private
     * @function Highcharts.Navigator#modifyBaseAxisExtremes
     */
    modifyBaseAxisExtremes(this: Axis): void;
    /**
     * Handler for updated data on the base series. When data is modified, the
     * navigator series must reflect it. This is called from the Chart.redraw
     * function before axis and series extremes are computed.
     *
     * @private
     * @function Highcharts.Navigator#updateDataHandler
     */
    updatedDataHandler(this: Series): void;
    /**
     * Detect if the zoomed area should stick to the minimum, #14742.
     *
     * @private
     * @function Highcharts.Navigator#shouldStickToMin
     */
    shouldStickToMin(baseSeries: Series, navigator: Navigator): boolean | undefined;
    /**
     * Add chart events, like redrawing navigator, when chart requires that.
     *
     * @private
     * @function Highcharts.Navigator#addChartEvents
     */
    addChartEvents(): void;
    /**
     * Destroys allocated elements.
     *
     * @private
     * @function Highcharts.Navigator#destroy
     */
    destroy(): void;
}
export default Navigator;
