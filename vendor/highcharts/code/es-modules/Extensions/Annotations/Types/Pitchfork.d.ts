import type { AnnotationPointType } from '../AnnotationSeries';
import type { ControllableShapeOptions } from '../Controllables/ControllableOptions';
import type PositionObject from '../../../Core/Renderer/PositionObject';
import type MockPointOptions from '../MockPointOptions';
import Annotation from '../Annotation.js';
import InfinityLine from './InfinityLine.js';
declare class Pitchfork extends InfinityLine {
    static topLineEdgePoint: Function;
    static bottomLineEdgePoint: Function;
    private static outerLineEdgePoint;
    static findEdgePoint(point: AnnotationPointType, firstAnglePoint: AnnotationPointType, secondAnglePoint?: AnnotationPointType): PositionObject;
    static middleLineEdgePoint(target: Annotation): PositionObject;
    midPointOptions(): MockPointOptions;
    addShapes(): void;
    addLines(): void;
    addBackgrounds(): void;
}
interface Pitchfork {
    defaultOptions: InfinityLine['defaultOptions'];
}
declare namespace Pitchfork {
    interface Options extends InfinityLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends InfinityLine.TypeOptions {
        innerBackground: ControllableShapeOptions;
        outerBackground: ControllableShapeOptions;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        pitchfork: typeof Pitchfork;
    }
}
export default Pitchfork;
