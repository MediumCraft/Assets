import type Annotation from './Annotation';
import type AnnotationChart from './AnnotationChart';
import type { AnnotationPointType } from './AnnotationSeries';
import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type Controllable from './Controllables/Controllable';
import type ControlTargetOptions from './ControlTargetOptions';
import type MockPointOptions from './MockPointOptions';
import ControlPoint from './ControlPoint.js';
import MockPoint from './MockPoint.js';
interface ControlTarget {
    annotation?: Annotation;
    chart: AnnotationChart;
    controlPoints: Array<ControlPoint>;
    options: ControlTargetOptions;
    points: Array<AnnotationPointType>;
    addControlPoints(): void;
    anchor(point: AnnotationPointType): ControlTarget.Anchor;
    destroyControlTarget(): void;
    getPointsOptions(): Array<MockPointOptions>;
    linkPoints(): (Array<AnnotationPointType> | undefined);
    point(pointOptions: (string | Function | MockPoint | MockPointOptions), point: (AnnotationPointType | null)): (AnnotationPointType | null);
    redrawControlPoints(animation?: boolean): void;
    renderControlPoints(): void;
    transform(transformation: string, cx: (number | null), cy: (number | null), p1: number, p2?: number): void;
    transformPoint(transformation: string, cx: (number | null), cy: (number | null), p1: number, p2: (number | undefined), i: number): void;
    translate(dx: number, dy: number): void;
    translatePoint(dx: number, dy: number, i: number): void;
}
declare namespace ControlTarget {
    interface Anchor {
        absolutePosition: BBoxObject;
        relativePosition: BBoxObject;
    }
    type Class = (typeof Annotation | typeof Controllable);
    /**
     * Adds shared functions to be used with targets of ControlPoint.
     * @private
     */
    function compose(ControlTargetClass: Class): void;
}
export default ControlTarget;
