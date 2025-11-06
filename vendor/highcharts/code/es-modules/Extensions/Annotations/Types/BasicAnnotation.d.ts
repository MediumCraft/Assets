import type ControlPointOptions from '../ControlPointOptions';
import type { DeepPartial } from '../../../Shared/Types';
import Annotation from '../Annotation.js';
declare class BasicAnnotation extends Annotation {
    static basicControlPoints: BasicAnnotation.ControlPoints;
    addControlPoints(): void;
    init(): void;
}
interface BasicAnnotation {
    basicType: string;
    defaultOptions: Annotation['defaultOptions'];
}
declare namespace BasicAnnotation {
    interface ControlPoints {
        label: DeepPartial<ControlPointOptions>[];
        rectangle: DeepPartial<ControlPointOptions>[];
        ellipse: DeepPartial<ControlPointOptions>[];
        circle: DeepPartial<ControlPointOptions>[];
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        basicAnnotation: typeof BasicAnnotation;
    }
}
export default BasicAnnotation;
