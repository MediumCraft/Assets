import type AnnotationChart from '../AnnotationChart';
import type { AnnotationDraggableValue, AnnotationOptions, AnnotationTypeOptions } from '../AnnotationOptions';
import type { AnnotationEventObject } from '../EventEmitter';
import type { ControllableShapeOptions } from '../Controllables/ControllableOptions';
import type CSSObject from '../../../Core/Renderer/CSSObject';
import type DashStyleValue from '../../../Core/Renderer/DashStyleValue';
import type Templating from '../../../Core/Templating';
import type MockPointOptions from '../MockPointOptions';
import Annotation from '../Annotation.js';
declare class Measure extends Annotation {
    /**
     * Init annotation object.
     * @private
     */
    init(annotationOrChart: (Annotation | AnnotationChart), userOptions: Measure.MeasureOptions, index?: number): void;
    /**
     * Overrides default setter to get axes from typeOptions.
     * @private
     */
    setClipAxes(): void;
    /**
     * Get points configuration objects for shapes.
     * @private
     */
    shapePointsOptions(): Array<MockPointOptions>;
    addControlPoints(): void;
    /**
     * Add label with calculated values (min, max, average, bins).
     * @private
     * @param {boolean} [resize]
     * The flag for resize shape
     */
    addValues(resize?: boolean): void;
    /**
     * Crosshair, background (rect).
     * @private
     */
    addShapes(): void;
    /**
     * Add background shape.
     * @private
     */
    addBackground(): void;
    /**
     * Add internal crosshair shapes (on top and bottom).
     * @private
     */
    addCrosshairs(): void;
    onDrag(e: AnnotationEventObject): void;
    /**
     * Translate start or end ("left" or "right") side of the measure.
     * Update start points (startXMin, startXMax, startYMin, startYMax)
     * @private
     * @param {number} dx
     * the amount of x translation
     * @param {number} dy
     * the amount of y translation
     * @param {number} cpIndex
     * index of control point
     * @param {Highcharts.AnnotationDraggableValue} selectType
     * x / y / xy
     */
    resize(dx: number, dy: number, cpIndex?: number, selectType?: AnnotationDraggableValue): void;
    /**
     * Redraw event which render elements and update start points if needed.
     * @private
     * @param {boolean} animation
     * @param {boolean} [resize]
     * flag if resized
     * @param {boolean} [setStartPoints]
     * update position of start points
     */
    redraw(animation: boolean, resize?: boolean, setStartPoints?: boolean): void;
    translate(dx: number, dy: number): void;
}
interface Measure {
    average: number;
    bins: number;
    defaultOptions: Annotation['defaultOptions'];
    min: number;
    max: number;
    offsetX: number;
    offsetY: number;
    options: Measure.MeasureOptions;
    resizeX: number;
    resizeY: number;
    startXMax: number;
    startXMin: number;
    startYMax: number;
    startYMin: number;
    xAxisMin: number;
    xAxisMax: number;
    yAxisMin: number;
    yAxisMax: number;
}
declare namespace Measure {
    interface MeasureOptions extends AnnotationOptions {
        typeOptions: MeasureTypeOptions;
    }
    interface MeasureTypeCrosshairOptions {
        dashStyle: DashStyleValue;
        enabled: boolean;
        markerEnd: string;
        zIndex: number;
    }
    interface MeasureTypeLabelOptions {
        enabled: boolean;
        formatter?: Templating.FormatterCallback<Measure>;
        style: CSSObject;
    }
    interface MeasureTypeOptions extends AnnotationTypeOptions {
        background: ControllableShapeOptions;
        crosshairX: MeasureTypeCrosshairOptions;
        crosshairY: MeasureTypeCrosshairOptions;
        label: MeasureTypeLabelOptions;
        selectType: AnnotationDraggableValue;
        xAxis: number;
        yAxis: number;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        measure: typeof Measure;
    }
}
export default Measure;
