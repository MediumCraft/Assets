import type Axis from '../../Core/Axis/Axis';
import type DataGroupingOptions from './DataGroupingOptions';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        applyGrouping(e: PostProcessDataEvent): void;
        getGroupPixelWidth(): number;
        setDataGrouping(dataGrouping?: (boolean | DataGroupingOptions), redraw?: boolean): void;
    }
}
export interface PostProcessDataEvent {
    hasExtremesChanged?: boolean;
}
/**
 * @private
 */
declare function compose(AxisClass: typeof Axis): void;
declare const DataGroupingAxisComposition: {
    compose: typeof compose;
};
export default DataGroupingAxisComposition;
