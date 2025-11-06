import type Axis from '../Core/Axis/Axis';
import type Chart from '../Core/Chart/Chart';
declare module '../Core/Axis/AxisOptions' {
    interface AxisOptions {
        staticScale?: number;
    }
}
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        redrawTrigger?: string;
        initiatedScale?: boolean;
        /** @requires modules/static-scale */
        adjustHeight(): void;
    }
}
/** @private */
declare function compose(AxisClass: typeof Axis, ChartClass: typeof Chart): void;
declare const StaticScale: {
    compose: typeof compose;
};
export default StaticScale;
