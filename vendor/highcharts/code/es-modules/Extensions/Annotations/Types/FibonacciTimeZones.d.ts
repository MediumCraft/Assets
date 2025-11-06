import type { ControlPointOptionsObject } from '../ControlPointOptions';
import CrookedLine from './CrookedLine.js';
declare class FibonacciTimeZones extends CrookedLine {
    addShapes(): void;
    addControlPoints(): void;
}
interface FibonacciTimeZones {
    defaultOptions: CrookedLine['defaultOptions'];
    secondLineEdgePoints: [Function, Function];
}
declare namespace FibonacciTimeZones {
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        type: string;
        controlPointOptions: ControlPointOptionsObject;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        fibonacciTimeZones: typeof FibonacciTimeZones;
    }
}
export default FibonacciTimeZones;
