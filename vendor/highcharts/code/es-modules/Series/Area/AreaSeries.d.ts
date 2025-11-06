import type AreaPoint from './AreaPoint';
import type AreaSeriesOptions from './AreaSeriesOptions';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const LineSeries: typeof import("../Line/LineSeries").default;
declare module '../../Core/Renderer/SVG/SVGPath' {
    interface SVGPath {
        isArea?: boolean;
        hasStackedCliffs?: boolean;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        areaPath?: SVGPath;
    }
}
/**
 * Area series type.
 *
 * @private
 * @class
 * @name AreaSeries
 *
 * @augments LineSeries
 */
declare class AreaSeries extends LineSeries {
    static defaultOptions: AreaSeriesOptions;
    areaPath?: SVGPath;
    data: Array<AreaPoint>;
    options: AreaSeriesOptions;
    points: Array<AreaPoint>;
    /**
     * Draw the graph and the underlying area. This method calls the Series
     * base function and adds the area. The areaPath is calculated in the
     * getSegmentPath method called from Series.prototype.drawGraph.
     * @private
     */
    drawGraph(): void;
    /**
     * @private
     */
    getGraphPath(points: Array<AreaPoint>): SVGPath;
    /**
     * Return an array of stacked points, where null and missing points are
     * replaced by dummy points in order for gaps to be drawn correctly in
     * stacks.
     * @private
     */
    getStackPoints(points: Array<AreaPoint>): Array<AreaPoint>;
}
interface AreaSeries {
    pointClass: typeof AreaPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        area: typeof AreaSeries;
    }
}
export default AreaSeries;
