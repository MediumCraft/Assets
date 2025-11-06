import type ParallelCoordinates from './ParallelCoordinates';
import type Series from '../../Core/Series/Series';
declare namespace ParallelSeries {
    class Composition extends Series {
        chart: ParallelCoordinates.ChartComposition;
    }
    /** @private */
    function compose(SeriesClass: typeof Series): void;
}
export default ParallelSeries;
