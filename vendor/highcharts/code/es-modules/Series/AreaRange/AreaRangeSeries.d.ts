import type Axis from '../../Core/Axis/Axis';
import type AreaRangeSeriesOptions from './AreaRangeSeriesOptions';
import type { DeepPartial } from '../../Shared/Types';
import type PointMarkerOptions from '../../Core/Series/PointOptions';
import type RadialAxis from '../../Core/Axis/RadialAxis';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type { SymbolKey } from '../../Core/Renderer/SVG/SymbolType';
import AreaRangePoint from './AreaRangePoint.js';
declare const AreaSeries: typeof import("../Area/AreaSeries").default;
/**
 * The AreaRange series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.arearange
 *
 * @augments Highcharts.Series
 */
declare class AreaRangeSeries extends AreaSeries {
    /**
     *
     *  Static Properties
     *
     */
    static defaultOptions: AreaRangeSeriesOptions;
    data: Array<AreaRangePoint>;
    options: AreaRangeSeriesOptions;
    points: Array<AreaRangePoint>;
    lowerStateMarkerGraphic?: SVGElement;
    upperStateMarkerGraphic?: SVGElement;
    xAxis: Axis | RadialAxis.AxisComposition;
    toYData(point: AreaRangePoint): Array<number>;
    /**
     * Translate a point's plotHigh from the internal angle and radius measures
     * to true plotHigh coordinates. This is an addition of the toXY method
     * found in Polar.js, because it runs too early for arearanges to be
     * considered (#3419).
     * @private
     */
    highToXY(point: AreaRangePoint): void;
    /**
     * Extend the line series' getSegmentPath method by applying the segment
     * path to both lower and higher values of the range.
     * @private
     */
    getGraphPath(points: Array<AreaRangePoint>): SVGPath;
    /**
     * Extend the basic drawDataLabels method by running it for both lower and
     * higher values.
     * @private
     */
    drawDataLabels(): void;
    alignDataLabel(): void;
    modifyMarkerSettings(): {
        marker?: PointMarkerOptions;
        symbol?: SymbolKey;
    };
    restoreMarkerSettings(originalSettings: {
        marker?: PointMarkerOptions;
        symbol?: SymbolKey;
    }): void;
    drawPoints(): void;
    hasMarkerChanged(options: DeepPartial<AreaRangeSeriesOptions>, oldOptions: DeepPartial<AreaRangeSeriesOptions>): boolean | undefined;
}
interface AreaRangeSeries {
    deferTranslatePolar: boolean;
    pointArrayMap: Array<string>;
    pointClass: typeof AreaRangePoint;
    pointValKey: string;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        arearange: typeof AreaRangeSeries;
    }
}
export default AreaRangeSeries;
