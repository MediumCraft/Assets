import type Axis from './Axis';
import type Chart from '../Chart/Chart.js';
import type StackingAxis from './Stacking/StackingAxis';
import type SVGLabel from '../Renderer/SVG/SVGLabel';
import StackItem from './Stacking/StackItem.js';
declare module './AxisComposition' {
    interface AxisComposition {
        waterfall?: WaterfallAxis['waterfall'];
    }
}
declare module '../../Core/Axis/AxisType' {
    interface AxisTypeRegistry {
        WaterfallAxis: WaterfallAxis;
    }
}
interface WaterfallAxis extends StackingAxis {
    waterfall?: WaterfallAxis.Composition;
}
declare namespace WaterfallAxis {
    interface StacksObject {
        changed: boolean;
        alreadyChanged?: Array<string>;
        waterfall?: Record<string, StacksItemObject>;
    }
    export interface StacksItemObject {
        absoluteNeg?: number;
        absolutePos?: number;
        connectorThreshold?: number;
        label?: SVGLabel;
        negTotal: number;
        posTotal: number;
        stackState: Array<number>;
        stackTotal: number;
        stateIndex: number;
        threshold: number;
    }
    /**
     * @private
     */
    export function compose(AxisClass: typeof Axis, ChartClass: typeof Chart): void;
    export class Composition {
        constructor(axis: WaterfallAxis);
        axis: WaterfallAxis;
        dummyStackItem?: StackItem;
        stacks: StacksObject;
        /**
         * Calls StackItem.prototype.render function that creates and renders
         * stack total label for each waterfall stack item.
         *
         * @private
         * @function Highcharts.Axis#renderWaterfallStackTotals
         */
        renderStackTotals(): void;
    }
    export {};
}
export default WaterfallAxis;
