import type { AnnotationPointType } from '../AnnotationSeries';
import type PositionObject from '../../../Core/Renderer/PositionObject';
import CrookedLine from './CrookedLine.js';
declare class InfinityLine extends CrookedLine {
    static endEdgePoint: Function;
    static startEdgePoint: Function;
    private static edgePoint;
    static findEdgeCoordinate(firstPoint: PositionObject, secondPoint: PositionObject, xOrY: ('x' | 'y'), edgePointFirstCoordinate: number): number;
    static findEdgePoint(firstPoint: AnnotationPointType, secondPoint: AnnotationPointType): PositionObject;
    addShapes(): void;
}
interface InfinityLine {
    defaultOptions: CrookedLine['defaultOptions'];
}
declare namespace InfinityLine {
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        type: string;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        infinityLine: typeof InfinityLine;
    }
}
export default InfinityLine;
