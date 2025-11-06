import type AnimationOptions from '../../Core/Animation/AnimationOptions';
import type { AnnotationPointType } from './AnnotationSeries';
import type AnnotationOptions from './AnnotationOptions';
import type { AnnotationTypeRegistry } from './Types/AnnotationType';
import type AxisType from '../../Core/Axis/AxisType';
import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type Chart from '../../Core/Chart/Chart';
import type { ControllableLabelType, ControllableShapeType, ControllableType } from './Controllables/ControllableType';
import type { ControllableLabelOptions, ControllableShapeOptions } from './Controllables/ControllableOptions';
import type { DeepPartial } from '../../Shared/Types';
import type MockPointOptions from './MockPointOptions';
import type NavigationBindings from './NavigationBindings.js';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
import AnnotationChart from './AnnotationChart.js';
import ControlPoint from './ControlPoint.js';
import ControlTarget from './ControlTarget.js';
import EventEmitter from './EventEmitter.js';
import MockPoint from './MockPoint.js';
import Pointer from '../../Core/Pointer.js';
declare module '../../Core/Options' {
    interface DefaultOptions {
        annotations?: AnnotationOptions;
    }
    interface Options {
        annotations?: (AnnotationOptions | Array<AnnotationOptions>);
    }
}
/**
 * An annotation class which serves as a container for items like labels or
 * shapes. Created items are positioned on the chart either by linking them to
 * existing points or created mock points
 *
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.Annotation
 *
 * @param {Highcharts.Chart} chart
 *        A chart instance
 * @param {Highcharts.AnnotationsOptions} userOptions
 *        The annotation options
 */
declare class Annotation extends EventEmitter implements ControlTarget {
    /**
     * @private
     */
    static readonly ControlPoint: typeof ControlPoint;
    /**
     * @private
     */
    static readonly MockPoint: typeof MockPoint;
    /**
     * An object uses for mapping between a shape type and a constructor.
     * To add a new shape type extend this object with type name as a key
     * and a constructor as its value.
     *
     * @private
     */
    static readonly shapesMap: Record<string, Function>;
    /**
     * @private
     */
    static readonly types: AnnotationTypeRegistry;
    /**
     * @private
     */
    static compose(ChartClass: typeof Chart, NavigationBindingsClass: typeof NavigationBindings, PointerClass: typeof Pointer, SVGRendererClass: typeof SVGRenderer): void;
    constructor(chart: AnnotationChart, userOptions: AnnotationOptions);
    chart: AnnotationChart;
    clipRect?: SVGElement;
    clipXAxis?: AxisType;
    clipYAxis?: AxisType;
    coll: 'annotations';
    animationConfig: Partial<AnimationOptions>;
    graphic: SVGElement;
    group: SVGElement;
    index: number;
    isUpdating?: boolean;
    labelCollector: Chart.LabelCollectorFunction;
    labels: Array<ControllableLabelType>;
    labelsGroup: SVGElement;
    options: AnnotationOptions;
    shapes: Array<ControllableShapeType>;
    shapesGroup: SVGElement;
    userOptions: AnnotationOptions;
    /**
     * @private
     */
    addClipPaths(): void;
    /**
     * @private
     */
    addLabels(): void;
    /**
     * @private
     */
    addShapes(): void;
    /**
     * Destroy the annotation. This function does not touch the chart
     * that the annotation belongs to (all annotations are kept in
     * the chart.annotations array) - it is recommended to use
     * {@link Highcharts.Chart#removeAnnotation} instead.
     * @private
     */
    destroy(): void;
    /**
     * Destroy a single item.
     * @private
     */
    destroyItem(item: ControllableType): void;
    /**
     * @private
     */
    getClipBox(): (BBoxObject | void);
    /**
     * Initialize the annotation properties.
     * @private
     */
    initProperties(chart: AnnotationChart, userOptions: AnnotationOptions): void;
    /**
     * Initialize the annotation.
     * @private
     */
    init(_annotationOrChart: (Annotation | AnnotationChart), _userOptions: AnnotationOptions, index?: number): void;
    /**
     * Initialisation of a single label
     * @private
     */
    initLabel(labelOptions: Partial<ControllableLabelOptions>, index: number): ControllableLabelType;
    /**
     * Initialisation of a single shape
     * @private
     * @param {Object} shapeOptions
     * a config object for a single shape
     * @param {number} index
     * annotation may have many shapes, this is the shape's index saved in
     * shapes.index.
     */
    initShape(shapeOptions: Partial<ControllableShapeOptions>, index: number): ControllableShapeType;
    /**
     * @private
     */
    redraw(animation?: boolean): void;
    /**
     * Redraw a single item.
     * @private
     */
    redrawItem(item: ControllableType, animation?: boolean): void;
    /**
     * @private
     */
    redrawItems(items: Array<ControllableType>, animation?: boolean): void;
    /**
     * See {@link Highcharts.Chart#removeAnnotation}.
     * @private
     */
    remove(): void;
    /**
     * @private
     */
    render(): void;
    /**
     * @private
     */
    renderItem(item: ControllableType): void;
    /**
     * @private
     */
    renderItems(items: Array<ControllableType>): void;
    /**
     * @private
     */
    setClipAxes(): void;
    /**
     * @private
     */
    setControlPointsVisibility(visible: boolean): void;
    /**
     * @private
     */
    setLabelCollector(): void;
    /**
     * Set an annotation options.
     * @private
     * @param {Highcharts.AnnotationsOptions} userOptions
     *        User options for an annotation
     */
    setOptions(userOptions: AnnotationOptions): void;
    /**
     * Set the annotation's visibility.
     * @private
     * @param {boolean} [visible]
     * Whether to show or hide an annotation. If the param is omitted, the
     * annotation's visibility is toggled.
     */
    setVisibility(visible?: boolean): void;
    /**
     * Updates an annotation.
     *
     * @function Highcharts.Annotation#update
     *
     * @param {Partial<Highcharts.AnnotationsOptions>} userOptions
     *        New user options for the annotation.
     *
     */
    update(userOptions: DeepPartial<AnnotationOptions>, redraw?: boolean): void;
}
interface Annotation extends ControlTarget {
    defaultOptions: AnnotationOptions;
    nonDOMEvents: Array<string>;
    getPointsOptions(): Array<MockPointOptions>;
    linkPoints(): (Array<AnnotationPointType> | undefined);
}
export default Annotation;
