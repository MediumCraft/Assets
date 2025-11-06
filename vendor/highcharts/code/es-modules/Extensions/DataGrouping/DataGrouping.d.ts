import type Axis from '../../Core/Axis/Axis';
import type Series from '../../Core/Series/Series';
import type Tooltip from '../../Core/Tooltip';
/**
 * @private
 */
declare function compose(AxisClass: typeof Axis, SeriesClass: typeof Series, TooltipClass?: typeof Tooltip): void;
declare const DataGroupingComposition: {
    compose: typeof compose;
    groupData: (this: Series, table: import("../../Data/DataTableCore").default, groupPositions: Array<number>, approximation: (import("./ApproximationType").ApproximationKeyValue | Function)) => import("./DataGroupingSeriesComposition.js").DataGroupingResultObject;
};
export default DataGroupingComposition;
