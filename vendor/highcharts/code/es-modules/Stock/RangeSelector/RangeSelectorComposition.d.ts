import type Axis from '../../Core/Axis/Axis';
import type Chart from '../../Core/Chart/Chart';
import type RangeSelector from './RangeSelector';
/**
 * @private
 */
declare function compose(AxisClass: typeof Axis, ChartClass: typeof Chart, RangeSelectorClass: typeof RangeSelector): void;
declare const RangeSelectorComposition: {
    compose: typeof compose;
};
export default RangeSelectorComposition;
