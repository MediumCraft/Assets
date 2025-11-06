import type Options from '../../Core/Options';
import type ScatterSeries from '../../Series/Scatter/ScatterSeries';
/** @private */
declare function compose(highchartsDefaultOptions: Options, ScatterSeriesClass: typeof ScatterSeries): void;
declare const MarkerClusterScatter: {
    compose: typeof compose;
};
export default MarkerClusterScatter;
