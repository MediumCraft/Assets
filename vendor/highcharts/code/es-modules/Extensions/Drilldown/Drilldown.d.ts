import type AnimationOptions from '../../Core/Animation/AnimationOptions';
import type Axis from '../../Core/Axis/Axis';
import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type Chart from '../../Core/Chart/Chart';
import type ColorType from '../../Core/Color/ColorType';
import type DrilldownOptions from './DrilldownOptions';
import type Options from '../../Core/Options';
import type Point from '../../Core/Series/Point';
import type { PointOptions, PointShortOptions } from '../../Core/Series/PointOptions';
import type Series from '../../Core/Series/Series';
import type SeriesOptions from '../../Core/Series/SeriesOptions';
import type { SeriesTypeOptions, SeriesTypeRegistry } from '../../Core/Series/SeriesType';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
import type Tick from '../../Core/Axis/Tick';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        ddPoints?: Record<string, Array<(false | Point)>>;
        oldPos?: number;
        drilldownCategory(x: number, e: MouseEvent): void;
        getDDPoints(x: number): Array<(false | Point)>;
    }
}
declare module '../../Core/Axis/TickBase' {
    interface TickBase {
        drillable(): void;
    }
}
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        ddDupes?: Array<string>;
        drilldownLevels?: Array<Drilldown.LevelObject>;
        drillUpButton?: SVGElement;
        addSeriesAsDrilldown(point: Point, options: SeriesTypeOptions): void;
        addSingleSeriesAsDrilldown(point: Point, ddOptions: SeriesTypeOptions): void;
        applyDrilldown(): void;
        drillUp(isMultipleDrillUp?: boolean): void;
    }
}
declare module '../../Core/Options' {
    interface Options {
        drilldown?: DrilldownOptions;
    }
}
declare module '../../Core/Options' {
    interface LangOptions {
        /** @deprecated */
        drillUpText?: string;
    }
}
declare module '../../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        fadeIn(animation?: (boolean | Partial<AnimationOptions>)): void;
    }
}
/**
 * @private
 */
declare class ChartAdditions {
    constructor(chart: Drilldown.ChartComposition);
    chart: Drilldown.ChartComposition;
    /**
     * Add a series to the chart as drilldown from a specific point in the
     * parent series. This method is used for async drilldown, when clicking a
     * point in a series should result in loading and displaying a more
     * high-resolution series. When not async, the setup is simpler using the
     * [drilldown.series](https://api.highcharts.com/highcharts/drilldown.series)
     * options structure.
     *
     * @sample highcharts/drilldown/async/
     *         Async drilldown
     *
     * @function Highcharts.Chart#addSeriesAsDrilldown
     *
     * @param {Highcharts.Point} point
     * The point from which the drilldown will start.
     *
     * @param {Highcharts.SeriesOptionsType} options
     * The series options for the new, detailed series.
     */
    addSeriesAsDrilldown(this: (this | Drilldown.ChartComposition), point: Point, options: SeriesTypeOptions): void;
    /** @private */
    addSingleSeriesAsDrilldown(this: (this | Drilldown.ChartComposition), point: Point, ddOptions: SeriesTypeOptions): void;
    applyDrilldown(this: (this | Drilldown.ChartComposition)): void;
    /**
     * When the chart is drilled down to a child series, calling
     * `chart.drillUp()` will drill up to the parent series.
     *
     * @requires  modules/drilldown
     *
     * @function Highcharts.Chart#drillUp
     *
     * @sample {highcharts} highcharts/drilldown/programmatic
     *         Programmatic drilldown
     */
    drillUp(this: (this | Drilldown.ChartComposition), isMultipleDrillUp?: boolean): void;
    /**
     * A function to fade in a group. First, the element is being hidden, then,
     * using `opactiy`, is faded in. Used for example by `dataLabelsGroup` where
     * simple SVGElement.fadeIn() is not enough, because of other features (e.g.
     * InactiveState) using `opacity` to fadeIn/fadeOut.
     *
     * @requires modules/drilldown
     *
     * @private
     * @param {SVGElement} [group]
     *        The SVG element to be faded in.
     */
    fadeInGroup(group?: SVGElement): void;
    /**
     * Update function to be called internally from Chart.update (#7600, #12855)
     * @private
     */
    update(options: Partial<DrilldownOptions>, redraw?: boolean): void;
}
declare namespace Drilldown {
    class ChartComposition extends Chart {
        drilldown?: ChartAdditions;
    }
    interface EventObject {
        category?: number;
        defaultPrevented?: boolean;
        originalEvent?: Event;
        point: Point;
        points?: Array<(boolean | Point)>;
        preventDefault: Function;
        seriesOptions?: SeriesTypeOptions;
        target: Chart;
        type: 'drilldown';
    }
    interface LevelObject {
        bBox: (BBoxObject | Record<string, undefined>);
        color?: ColorType;
        colorIndex?: number;
        levelNumber: number;
        levelSeries: Array<Series>;
        levelSeriesOptions: Array<SeriesOptions>;
        lowerSeries: Series;
        lowerSeriesOptions: SeriesOptions;
        oldExtremes: Record<string, (number | undefined)>;
        pointIndex: number;
        pointOptions: (PointOptions | PointShortOptions);
        seriesOptions: SeriesOptions;
        seriesPurgedOptions: SeriesOptions;
        shapeArgs?: SVGAttributes;
        resetZoomButton: SVGElement;
    }
    /** @private */
    function compose(AxisClass: typeof Axis, ChartClass: typeof Chart, highchartsDefaultOptions: Options, SeriesClass: typeof Series, seriesTypes: SeriesTypeRegistry, SVGRendererClass: typeof SVGRenderer, TickClass: typeof Tick): void;
}
export default Drilldown;
