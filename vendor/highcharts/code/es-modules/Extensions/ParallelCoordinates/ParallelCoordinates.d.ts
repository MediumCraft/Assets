import type Axis from '../../Core/Axis/Axis';
import type Chart from '../../Core/Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type Options from '../../Core/Options';
import type Series from '../../Core/Series/Series';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        hasParallelCoordinates?: boolean;
        parallelInfo?: ParallelCoordinates.InfoObject;
        /** @requires modules/parallel-coordinates */
        setParallelInfo(options: DeepPartial<Options>): void;
    }
}
declare namespace ParallelCoordinates {
    class ChartComposition extends Chart {
        hasParallelCoordinates?: boolean;
        parallelInfo: InfoObject;
    }
    interface InfoObject {
        counter: number;
    }
    /** @private */
    function compose(AxisClass: typeof Axis, ChartClass: typeof Chart, highchartsDefaultOptions: Options, SeriesClass: typeof Series): void;
}
export default ParallelCoordinates;
