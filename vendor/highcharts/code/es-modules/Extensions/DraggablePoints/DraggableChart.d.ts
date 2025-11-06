import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type Chart from '../../Core/Chart/Chart';
import type { DragDropGuideBoxOptions } from './DragDropOptions';
import type Point from '../../Core/Series/Point';
import type PointerEvent from '../../Core/PointerEvent';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /** @requires modules/draggable-points */
        dragDropData?: DragDropDataObject;
        /** @requires modules/draggable-points */
        dragHandles?: DragHandlesObject;
        /** @requires modules/draggable-points */
        dragGuideBox?: SVGElement;
        /** @requires modules/draggable-points */
        hasAddedDragDropEvents?: boolean;
        /** @requires modules/annotations */
        hasDraggedAnnotation?: boolean;
        /** @requires modules/draggable-points */
        isDragDropAnimating?: boolean;
        /** @requires modules/draggable-points */
        unbindDragDropMouseUp?: Function;
        /** @requires modules/draggable-points */
        setGuideBoxState(state: string, options?: Record<string, DragDropGuideBoxOptions>): SVGElement;
        /** @requires modules/draggable-points */
        hideDragHandles(): void;
        /** @requires modules/draggable-points */
        zoomOrPanKeyPressed(e: Event): boolean;
    }
}
declare module '../../Core/Chart/ChartOptions' {
    interface ChartOptions {
        zoomKey?: string;
    }
}
interface DragDropDataObject {
    draggedPastSensitivity?: boolean;
    groupedPoints: Array<Point>;
    isDragging: boolean;
    isHoveringHandle?: string;
    newPoints?: Record<string, DragDropPointObject>;
    origin: DragDropPositionObject;
    point: Point;
    updateProp?: string;
}
interface DragDropPointObject {
    point: Point;
    newValues: Record<string, number>;
}
export interface DragDropPositionObject {
    chartX: number;
    chartY: number;
    guideBox?: BBoxObject;
    points: Record<string, Record<string, number>>;
    prevdX?: number;
    prevdY?: number;
}
interface DragHandlesObject {
    group: SVGElement;
    point: string;
}
/**
 * Composes the chart class with essential functions to support draggable
 * points.
 *
 * @private
 * @function compose
 *
 * @param {Highcharts.Chart} ChartClass
 *        Class constructor of chart.
 */
declare function compose(ChartClass: typeof Chart): void;
/**
 * Flip a side property, used with resizeRect. If input side is "left", return
 * "right" etc.
 *
 * @private
 * @function flipResizeSide
 *
 * @param {string} side
 *        Side prop to flip. Can be `left`, `right`, `top` or `bottom`.
 *
 * @return {"bottom"|"left"|"right"|"top"|undefined}
 *         The flipped side.
 */
declare function flipResizeSide(side: string): string;
/**
 * Prepare chart.dragDropData with origin info, and show the guide box.
 *
 * @private
 * @function initDragDrop
 * @param {Highcharts.PointerEventObject} e
 *        Mouse event with original mouse position.
 * @param {Highcharts.Point} point
 *        The point the dragging started on.
 * @return {void}
 */
declare function initDragDrop(e: PointerEvent, point: Point): void;
declare const DraggableChart: {
    compose: typeof compose;
    flipResizeSide: typeof flipResizeSide;
    initDragDrop: typeof initDragDrop;
};
export default DraggableChart;
