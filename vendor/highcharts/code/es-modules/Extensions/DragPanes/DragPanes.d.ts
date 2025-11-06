import type Axis from '../../Core/Axis/Axis';
import type AxisResizerOptions from './AxisResizerOptions';
import type Pointer from '../../Core/Pointer';
import AxisResizer from './AxisResizer.js';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        resizer?: AxisResizer;
    }
}
declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions extends AxisResizerOptions {
    }
}
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        activeResizer?: boolean;
    }
}
/**
 * @private
 */
declare function compose(AxisClass: typeof Axis, PointerClass: typeof Pointer): void;
declare const DragPanes: {
    compose: typeof compose;
};
export default DragPanes;
