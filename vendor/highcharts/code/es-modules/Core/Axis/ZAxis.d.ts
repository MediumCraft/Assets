import type AxisBase from './AxisBase';
import type AxisOptions from './AxisOptions';
import type Chart from '../Chart/Chart.js';
import type { DeepPartial } from '../../Shared/Types';
import Axis from './Axis.js';
declare module './AxisType' {
    interface AxisTypeRegistry {
        ZAxis: ZAxis;
    }
}
declare module '../Chart/ChartBase' {
    interface ChartBase {
        zAxis?: Array<ZAxis>;
        addZAxis(options: DeepPartial<AxisOptions>): Axis;
    }
}
declare module '../Options' {
    interface Options {
        zAxis?: (DeepPartial<AxisOptions> | Array<DeepPartial<AxisOptions>>);
    }
}
/**
 * 3D axis for z coordinates.
 * @private
 */
declare class ZAxis extends Axis implements AxisBase {
    static compose(ChartClass: typeof Chart): void;
    init(chart: Chart, userOptions: AxisOptions): void;
    ignoreMaxPadding?: boolean;
    ignoreMinPadding?: boolean;
    isZAxis: true;
    getSeriesExtremes(): void;
    /**
     * @private
     */
    setAxisSize(): void;
}
export default ZAxis;
