declare const SMAPoint: typeof import("../SMA/SMAPoint.js").default;
import VBPIndicator from './VBPIndicator';
declare class VBPPoint extends SMAPoint {
    destroy(): void;
}
interface VBPPoint {
    barX: number;
    negativeGraphic: unknown;
    pointWidth: number;
    series: VBPIndicator;
    volumeAll: number;
    volumeNeg: number;
    volumePos: number;
}
export default VBPPoint;
