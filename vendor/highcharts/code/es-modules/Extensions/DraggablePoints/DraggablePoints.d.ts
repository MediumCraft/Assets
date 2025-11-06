import type Chart from '../../Core/Chart/Chart.js';
import type { DragDropHandleOptions, DragDropOptions } from './DragDropOptions';
import type { DragDropPositionObject } from './DraggableChart';
import type Point from '../../Core/Series/Point';
import type PointerEvent from '../../Core/PointerEvent';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type Series from '../../Core/Series/Series';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        /** @requires modules/draggable-points */
        getDropValues(origin: DragDropPositionObject, newPos: PointerEvent, updateProps: Record<string, SeriesDragDropPropsObject>): Record<string, number>;
        /** @requires modules/draggable-points */
        showDragHandles(): void;
    }
}
declare module '../../Core/Series/PointOptions' {
    interface PointOptions {
        dragDrop?: DragDropOptions;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        /** @requires modules/draggable-points */
        dragDropProps?: (Record<string, Partial<SeriesDragDropPropsObject>> | null);
        /** @requires modules/draggable-points */
        getGuideBox(points: Array<Point>): SVGElement;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        dragDrop?: DragDropOptions;
    }
}
export interface PointDragCallbackFunction {
    (this: Point, event: PointDragEventObject): void;
}
export interface PointDragDropObject {
    newValues: Record<string, number>;
    point: Point;
}
export interface PointDragEventObject {
    newPoint?: PointDragDropObject;
    newPointId?: string;
    newPoints: Record<string, PointDragDropObject>;
    origin: DragDropPositionObject;
    preventDefault: Function;
    target: Point;
    type: 'drag';
}
export interface PointDragStartEventObject extends MouseEvent {
    updateProp?: string;
}
export interface PointDragStartCallbackFunction {
    (this: Point, event: PointDragStartEventObject): void;
}
export interface PointDropCallbackFunction {
    (this: Point, event: PointDropEventObject): void;
}
export interface PointDropEventObject {
    newPoint?: PointDragDropObject;
    newPointId?: string;
    newPoints: Record<string, PointDragDropObject>;
    numNewPoints: number;
    origin: DragDropPositionObject;
    preventDefault: Function;
    target: Point;
    type: 'drop';
}
export interface SeriesDragDropPropsObject {
    axis: 'x' | 'y';
    beforeResize?: Function;
    handleOptions?: DragDropHandleOptions;
    move: boolean;
    optionName: string;
    resize: boolean;
    resizeSide: (string | SeriesDragDropPropsResizeSideFunction);
    validateIndividualDrag?: Function;
    handleFormatter(point: Point): (SVGPath | null);
    handlePositioner(point: Point): PositionObject;
    propValidate(val: number, point: Point): boolean;
}
interface SeriesDragDropPropsResizeSideFunction {
    (...args: Array<any>): string;
}
/** @private */
declare function compose(ChartClass: typeof Chart, SeriesClass: typeof Series): void;
declare const DraggablePoints: {
    compose: typeof compose;
};
export default DraggablePoints;
