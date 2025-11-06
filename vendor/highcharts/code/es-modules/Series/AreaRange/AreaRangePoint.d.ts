import type AreaRangePointOptions from './AreaRangePointOptions';
import type AreaRangeSeries from './AreaRangeSeries';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGLabel from '../../Core/Renderer/SVG/SVGLabel';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
declare const AreaPoint: typeof import("../Area/AreaPoint").default;
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        plotHigh?: AreaRangePoint['plotHigh'];
        plotLow?: AreaRangePoint['plotLow'];
    }
}
declare class AreaRangePoint extends AreaPoint {
    _plotY?: number;
    below?: boolean;
    dataLabelUpper?: SVGElement | SVGLabel;
    isInside?: boolean;
    isTopInside?: boolean;
    high: number;
    low: number;
    options: AreaRangePointOptions;
    origProps?: Partial<AreaRangePoint>;
    plotHigh?: number;
    plotLow?: number;
    plotHighX?: number;
    plotLowX?: number;
    plotX: number;
    series: AreaRangeSeries;
    /**
     * Range series only. The high or maximum value for each data point.
     * @name Highcharts.Point#high
     * @type {number|undefined}
     */
    /**
     * Range series only. The low or minimum value for each data point.
     * @name Highcharts.Point#low
     * @type {number|undefined}
     */
    /**
     * @private
     */
    setState(): void;
    haloPath(): SVGPath;
    isValid(): boolean;
}
export default AreaRangePoint;
