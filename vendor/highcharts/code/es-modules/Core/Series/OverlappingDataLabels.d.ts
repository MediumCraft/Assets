import type BBoxObject from '../Renderer/BBoxObject';
import type SVGElement from '../Renderer/SVG/SVGElement';
import Chart from '../Chart/Chart.js';
declare module '../Chart/ChartBase' {
    interface ChartBase {
        hideOverlappingLabels(labels: Array<SVGElement>): void;
    }
}
declare module '../Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        absoluteBox?: BBoxObject;
    }
}
/** @private */
declare function compose(ChartClass: typeof Chart): void;
declare const OverlappingDataLabels: {
    compose: typeof compose;
};
export default OverlappingDataLabels;
