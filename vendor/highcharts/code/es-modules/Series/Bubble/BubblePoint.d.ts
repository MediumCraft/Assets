import type BubblePointOptions from './BubblePointOptions';
import type BubbleSeries from './BubbleSeries';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const ScatterPoint: typeof import("../Scatter/ScatterPoint").default;
declare class BubblePoint extends ScatterPoint {
    options: BubblePointOptions;
    series: BubbleSeries;
    /**
     * @private
     */
    haloPath(size: number): SVGPath;
}
export default BubblePoint;
