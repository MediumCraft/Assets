import type ColorString from '../../../Core/Color/ColorString';
import CrookedLine from './CrookedLine';
import MockPoint from '../MockPoint.js';
import Tunnel from './Tunnel.js';
declare class Fibonacci extends Tunnel {
    static levels: number[];
    endRetracements?: Array<MockPoint>;
    startRetracements?: Array<MockPoint>;
    linkPoints(): undefined;
    linkRetracementsPoints(): void;
    linkRetracementPoint(pointIndex: number, x: number, y: number, retracements: Array<MockPoint>): void;
    addShapes(): void;
    addLabels(): void;
}
interface Fibonacci {
    defaultOptions: Tunnel['defaultOptions'];
    options: Fibonacci.Options;
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        fibonacci: typeof Fibonacci;
    }
}
declare namespace Fibonacci {
    interface Options extends Tunnel.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends Tunnel.TypeOptions {
        reversed: boolean;
        backgroundColors: Array<ColorString>;
        labels: Array<CrookedLine.Options['labelOptions']>;
        lineColor: ColorString;
        lineColors: Array<ColorString>;
    }
}
export default Fibonacci;
