import type { AnnotationOptions, AnnotationTypeOptions } from '../AnnotationOptions';
import type Controllable from '../Controllables/Controllable';
import type { ControllableLabelOptions, ControllableShapeOptions } from '../Controllables/ControllableOptions';
import type MockPointOptions from '../MockPointOptions';
import Annotation from '../Annotation.js';
declare class VerticalLine extends Annotation {
    static connectorFirstPoint(target: Controllable): MockPointOptions;
    static connectorSecondPoint(target: Controllable): MockPointOptions;
    getPointsOptions(): Array<MockPointOptions>;
    addShapes(): void;
    addLabels(): void;
}
interface VerticalLine {
    defaultOptions: Annotation['defaultOptions'];
    options: VerticalLine.Options;
}
declare namespace VerticalLine {
    interface Options extends AnnotationOptions {
        typeOptions: TypeOptions;
    }
    interface TypeLabelOptions extends ControllableLabelOptions {
        offset: number;
    }
    interface TypeOptions extends AnnotationTypeOptions {
        connector: Partial<ControllableShapeOptions>;
        label: TypeLabelOptions;
        yOffset: number;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        verticalLine: typeof VerticalLine;
    }
}
export default VerticalLine;
