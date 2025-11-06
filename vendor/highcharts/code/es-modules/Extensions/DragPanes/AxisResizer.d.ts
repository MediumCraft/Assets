import type Axis from '../../Core/Axis/Axis';
import type { AxisResizeOptions } from './AxisResizerOptions';
import type PointerEvent from '../../Core/PointerEvent';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
/**
 * The AxisResizer class.
 *
 * @private
 * @class
 * @name Highcharts.AxisResizer
 *
 * @param {Highcharts.Axis} axis
 *        Main axis for the AxisResizer.
 */
declare class AxisResizer {
    static resizerOptions: import("./AxisResizerOptions").AxisResizerOptions;
    constructor(axis: Axis);
    axis: Axis;
    controlLine: SVGElement;
    eventsToUnbind?: Array<Function>;
    grabbed?: boolean;
    hasDragged?: boolean;
    lastPos: number;
    mouseDownHandler?: Function;
    mouseMoveHandler?: Function;
    mouseUpHandler?: Function;
    options: AxisResizeOptions;
    /**
     * Initialize the AxisResizer object.
     *
     * @function Highcharts.AxisResizer#init
     *
     * @param {Highcharts.Axis} axis
     *        Main axis for the AxisResizer.
     */
    init(axis: Axis, update?: boolean): void;
    /**
     * Render the AxisResizer
     *
     * @function Highcharts.AxisResizer#render
     */
    render(): void;
    /**
     * Set up the mouse and touch events for the control line.
     *
     * @function Highcharts.AxisResizer#addMouseEvents
     */
    addMouseEvents(): void;
    /**
     * Mouse move event based on x/y mouse position.
     *
     * @function Highcharts.AxisResizer#onMouseMove
     *
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event.
     */
    onMouseMove(e: PointerEvent): void;
    /**
     * Mouse up event based on x/y mouse position.
     *
     * @function Highcharts.AxisResizer#onMouseUp
     *
     * @param {Highcharts.PointerEventObject} e
     *        Mouse event.
     */
    onMouseUp(e: PointerEvent): void;
    /**
     * Mousedown on a control line.
     * Will store necessary information for drag&drop.
     *
     * @function Highcharts.AxisResizer#onMouseDown
     */
    onMouseDown(): void;
    /**
     * Update all connected axes after a change of control line position
     *
     * @function Highcharts.AxisResizer#updateAxes
     *
     * @param {number} chartY
     */
    updateAxes(chartY: number): void;
    /**
     * Destroy AxisResizer. Clear outside references, clear events,
     * destroy elements, nullify properties.
     *
     * @function Highcharts.AxisResizer#destroy
     */
    destroy(): void;
}
export default AxisResizer;
