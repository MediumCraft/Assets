import type { ControllableLabelOptions } from '../Controllables/ControllableOptions';
import type ColorType from '../../../Core/Color/ColorType';
import CrookedLine from './CrookedLine.js';
declare class ElliottWave extends CrookedLine {
    addLabels(): void;
}
interface ElliottWave {
}
declare namespace ElliottWave {
    interface LabelOptions extends ControllableLabelOptions {
        backgroundColor: ColorType;
        borderWidth: number;
        y: number;
    }
    interface Options extends CrookedLine.Options {
        labelOptions: LabelOptions;
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        labels: Array<string>;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        elliottWave: typeof ElliottWave;
    }
}
export default ElliottWave;
