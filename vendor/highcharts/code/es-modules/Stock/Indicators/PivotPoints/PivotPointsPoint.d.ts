import type SMAPointType from '../SMA/SMAPoint';
import type PivotPointsIndicator from './PivotPointsIndicator';
declare const SMAPoint: typeof SMAPointType;
declare class PivotPointsPoint extends SMAPoint {
    P: number;
    pivotLine: string;
    series: PivotPointsIndicator;
    destroyElements(this: PivotPointsPoint): void;
    destroy(this: PivotPointsPoint): void;
}
export default PivotPointsPoint;
