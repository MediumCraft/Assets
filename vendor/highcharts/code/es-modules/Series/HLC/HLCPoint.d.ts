import type HLCPointOptions from './HLCPointOptions';
import type HLCSeries from './HLCSeries';
declare const ColumnPoint: typeof import("../Column/ColumnPoint").ColumnPoint;
declare class HLCPoint extends ColumnPoint {
    close: number;
    high: number;
    low: number;
    options: HLCPointOptions;
    plotClose: number;
    plotHigh?: number;
    plotLow?: number;
    series: HLCSeries;
    yBottom?: number;
}
declare namespace HLCPoint {
    type PointShortOptions = Array<number>;
}
export default HLCPoint;
