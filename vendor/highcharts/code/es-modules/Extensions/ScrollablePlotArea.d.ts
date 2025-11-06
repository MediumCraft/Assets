import type Axis from '../Core/Axis/Axis';
import type BBoxObject from '../Core/Renderer/BBoxObject';
import type Chart from '../Core/Chart/Chart';
import type { HTMLDOMElement } from '../Core/Renderer/DOMElementType';
import type Series from '../Core/Series/Series';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer';
interface ScrollablePlotAreaOptions {
    minHeight?: number;
    minWidth?: number;
    opacity?: number;
    scrollPositionX?: number;
    scrollPositionY?: number;
}
declare module '../Core/Chart/ChartOptions' {
    interface ChartOptions {
        scrollablePlotArea?: ScrollablePlotAreaOptions;
    }
}
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        scrollablePixelsX?: number;
        scrollablePixelsY?: number;
        scrollablePlotBox?: BBoxObject;
        scrollablePlotArea?: ScrollablePlotArea;
    }
}
declare class ScrollablePlotArea {
    static compose(AxisClass: typeof Axis, ChartClass: typeof Chart, SeriesClass: typeof Series): void;
    static afterSetSize(chart: Chart, e: {
        skipAxes: boolean;
    }): void;
    static fixedSelectors: string[];
    chart: Chart;
    fixedDiv: HTMLDOMElement;
    fixedRenderer: SVGRenderer;
    innerContainer: HTMLDOMElement;
    isDirty?: boolean;
    scrollingContainer: HTMLDOMElement;
    parentDiv: HTMLDOMElement;
    mask: SVGElement;
    constructor(chart: Chart);
    applyFixed(): void;
    /**
     * These elements are moved over to the fixed renderer and stay fixed when
     * the user scrolls the chart
     * @private
     */
    moveFixedElements(): void;
}
export default ScrollablePlotArea;
