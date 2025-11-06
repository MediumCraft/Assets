import type Chart from '../../Core/Chart/Chart';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        errorElements?: Array<SVGElement>;
    }
}
declare module '../../Core/Chart/ChartOptions' {
    interface ChartOptions {
        displayErrors?: boolean;
    }
}
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart): void;
declare const Debugger: {
    compose: typeof compose;
};
export default Debugger;
