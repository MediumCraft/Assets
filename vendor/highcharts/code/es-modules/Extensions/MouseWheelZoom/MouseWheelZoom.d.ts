import type Chart from '../../Core/Chart/Chart';
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart): void;
declare const MouseWheelZoomComposition: {
    compose: typeof compose;
};
export default MouseWheelZoomComposition;
