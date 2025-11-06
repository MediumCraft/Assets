import type AnnotationChart from './AnnotationChart';
import type AnnotationOptions from './AnnotationOptions';
import type { ControllableLabelType, ControllableShapeType } from './Controllables/ControllableType';
import type { ControlPointOptionsObject } from './ControlPointOptions';
import type ControlTarget from './ControlTarget';
import type PointerEvent from '../../Core/PointerEvent';
import type PositionObject from '../../Core/Renderer/PositionObject';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
export interface AnnotationEventObject extends PointerEvent {
    prevChartX: number;
    prevChartY: number;
}
/**
 * @private
 */
declare abstract class EventEmitter {
    /**
     * Add emitter events.
     * @private
     */
    addEvents(): void;
    /**
     * Destroy the event emitter.
     */
    destroy(): void;
    /**
     * Map mouse move event to the radians.
     * @private
     */
    mouseMoveToRadians(e: AnnotationEventObject, cx: number, cy: number): number;
    /**
     * Map mouse move to the scale factors.
     * @private
     */
    mouseMoveToScale(e: AnnotationEventObject, cx: number, cy: number): PositionObject;
    /**
     * Map mouse move event to the distance between two following events.
     * @private
     */
    mouseMoveToTranslation(e: AnnotationEventObject): PositionObject;
    /**
     * Drag and drop event. All basic annotations should share this
     * capability as well as the extended ones.
     * @private
     */
    onDrag(e: AnnotationEventObject): void;
    /**
     * Mouse down handler.
     * @private
     */
    onMouseDown(e: AnnotationEventObject): void;
    /**
     * Mouse up handler.
     */
    onMouseUp(): void;
    abstract redraw(animation?: boolean): void;
    /**
     * Remove emitter document events.
     * @private
     */
    removeDocEvents(): void;
}
interface EventEmitter {
    cancelClick?: boolean;
    chart: AnnotationChart;
    graphic: SVGElement;
    hasDragged?: boolean;
    hcEvents?: unknown;
    isUpdating?: boolean;
    labels?: Array<ControllableLabelType>;
    nonDOMEvents?: Array<string>;
    options: Partial<(ControlPointOptionsObject | AnnotationOptions)>;
    removeDrag?: Function;
    removeMouseUp?: Function;
    shapes?: Array<ControllableShapeType>;
    target?: ControlTarget;
}
export default EventEmitter;
