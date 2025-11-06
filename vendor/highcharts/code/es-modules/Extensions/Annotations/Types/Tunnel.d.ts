import type { ControlPointOptionsObject } from '../ControlPointOptions';
import type MockPointOptions from '../MockPointOptions';
import CrookedLine from './CrookedLine.js';
declare class Tunnel extends CrookedLine {
    getPointsOptions(): Array<MockPointOptions>;
    getControlPointsOptions(): Array<MockPointOptions>;
    heightPointOptions(pointOptions: MockPointOptions): MockPointOptions;
    addControlPoints(): void;
    addShapes(): void;
    addLine(): void;
    addBackground(): void;
    /**
     * Translate start or end ("left" or "right") side of the tunnel.
     * @private
     * @param {number} dx
     * the amount of x translation
     * @param {number} dy
     * the amount of y translation
     * @param {boolean} [end]
     * whether to translate start or end side
     */
    translateSide(dx: number, dy: number, end?: boolean): void;
    /**
     * Translate height of the tunnel.
     * @private
     * @param {number} dh
     * the amount of height translation
     */
    translateHeight(dh: number): void;
}
interface Tunnel {
    defaultOptions: CrookedLine['defaultOptions'];
}
declare namespace Tunnel {
    interface Options extends CrookedLine.Options {
        typeOptions: TypeOptions;
    }
    interface TypeOptions extends CrookedLine.TypeOptions {
        height: number;
        heightControlPoint: ControlPointOptionsObject;
    }
}
declare module './AnnotationType' {
    interface AnnotationTypeRegistry {
        tunnel: typeof Tunnel;
    }
}
export default Tunnel;
