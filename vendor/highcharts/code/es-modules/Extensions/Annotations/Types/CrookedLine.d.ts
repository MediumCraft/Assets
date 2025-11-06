import type { AnnotationOptions, AnnotationTypeOptions, AnnotationTypePointsOptions } from '../AnnotationOptions';
import type MockPointOptions from '../MockPointOptions';
import Annotation from '../Annotation.js';
declare class CrookedLine extends Annotation {
    /**
     * Overrides default setter to get axes from typeOptions.
     * @private
     */
    setClipAxes(): void;
    getPointsOptions(): Array<MockPointOptions>;
    getControlPointsOptions(): Array<MockPointOptions>;
    addControlPoints(): void;
    addShapes(): void;
}
declare namespace CrookedLine {
    interface Options extends AnnotationOptions {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends AnnotationTypeOptions {
        points?: Array<AnnotationTypePointsOptions>;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        crookedLine: typeof CrookedLine;
    }
}
export default CrookedLine;
