import type { ControlPointOptionsObject } from '../ControlPointOptions';
import type SVGPath from '../../../Core/Renderer/SVG/SVGPath';
import Annotation from '../Annotation.js';
import CrookedLine from './CrookedLine.js';
interface TimeCyclesOptions extends CrookedLine.Options {
    xAxis: number;
    yAxis: number;
}
declare class TimeCycles extends CrookedLine {
    init(annotation: Annotation, userOptions: TimeCyclesOptions, index?: number): void;
    setPath(): void;
    getPath(): SVGPath;
    addShapes(): void;
    addControlPoints(): void;
    setPathProperties(): void;
    redraw(animation?: boolean): void;
}
interface TimeCycles {
    defaultOptions: CrookedLine['defaultOptions'];
    startX: number;
    pixelInterval: number;
    numberOfCircles: number;
    y: number;
}
declare namespace TimeCycles {
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        type: string;
        controlPointOptions: ControlPointOptionsObject[];
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        timeCycles: typeof TimeCycles;
    }
}
export default TimeCycles;
