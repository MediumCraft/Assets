import type { AlignValue } from '../../Core/Renderer/AlignObject';
import type BBoxObject from '../../Core/Renderer/BBoxObject';
import type { BubbleSizeByValue } from './BubbleSeriesOptions';
import type ColorType from '../../Core/Color/ColorType';
import type CSSObject from '../../Core/Renderer/CSSObject';
import type Templating from '../../Core/Templating';
import type { LegendItemObject, LegendItem } from '../../Core/Legend/LegendItem';
import type Point from '../../Core/Series/Point';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import Chart from '../../Core/Chart/Chart.js';
import Legend from '../../Core/Legend/Legend.js';
import Series from '../../Core/Series/Series.js';
declare module '../../Core/Legend/LegendBase' {
    interface LegendBase {
        bubbleLegend?: BubbleLegendItem;
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        isBubble?: boolean;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        ignoreSeries?: boolean;
        isBubble?: boolean;
    }
}
declare module '../../Core/Legend/LegendOptions' {
    interface LegendOptions {
        bubbleLegend?: BubbleLegendItem.Options;
    }
}
/**
 * BubbleLegend class.
 *
 * @private
 * @class
 * @name Highcharts.BubbleLegend
 * @param {Highcharts.LegendBubbleLegendOptions} options
 * Options of BubbleLegendItem.
 *
 * @param {Highcharts.Legend} legend
 * Legend of item.
 */
declare class BubbleLegendItem {
    constructor(options: BubbleLegendItem.Options, legend: Legend);
    chart: Chart;
    legend: Legend;
    maxLabel: BBoxObject;
    movementX: number;
    ranges: Array<BubbleLegendItem.RangesOptions>;
    selected: undefined;
    visible: boolean;
    symbols: Record<string, Array<SVGElement>>;
    options: BubbleLegendItem.Options;
    /**
     * Create basic bubbleLegend properties similar to item in legend.
     * @private
     */
    init(options: BubbleLegendItem.Options, legend: Legend): void;
    setState: (this: any, ...args: Array<any>) => any;
    /**
     * Depending on the position option, add bubbleLegend to legend items.
     *
     * @private
     *
     * @param {Array<(Highcharts.Point|Highcharts.Series)>} items
     *        All legend items
     */
    addToLegend(items: Array<(Series | Point)>): void;
    /**
     * Calculate ranges, sizes and call the next steps of bubbleLegend
     * creation.
     *
     * @private
     *
     * @param {Highcharts.Legend} legend
     *        Legend instance
     */
    drawLegendSymbol(legend: Legend): void;
    /**
     * Set style options for each bubbleLegend range.
     * @private
     */
    setOptions(): void;
    /**
     * Calculate radius for each bubble range,
     * used code from BubbleSeries.js 'getRadius' method.
     *
     * @private
     *
     * @param {number} value
     *        Range value
     *
     * @return {number|null}
     *         Radius for one range
     */
    getRangeRadius(value: number): (number | null);
    /**
     * Render the legendItem group.
     * @private
     */
    render(): void;
    /**
     * Render one range, consisting of bubble symbol, connector and label.
     *
     * @private
     *
     * @param {Highcharts.LegendBubbleLegendRangesOptions} range
     *        Range options
     */
    renderRange(range: BubbleLegendItem.RangesOptions): void;
    /**
     * Get the label which takes up the most space.
     * @private
     */
    getMaxLabelSize(): BBoxObject;
    /**
     * Get formatted label for range.
     *
     * @private
     *
     * @param {Highcharts.LegendBubbleLegendRangesOptions} range
     *        Range options
     *
     * @return {string}
     *         Range label text
     */
    formatLabel(range: BubbleLegendItem.RangesOptions): string;
    /**
     * By using default chart 'hideOverlappingLabels' method, hide or show
     * labels and connectors.
     * @private
     */
    hideOverlappingLabels(): void;
    /**
     * Calculate ranges from created series.
     *
     * @private
     *
     * @return {Array<Highcharts.LegendBubbleLegendRangesOptions>}
     *         Array of range objects
     */
    getRanges(): Array<BubbleLegendItem.RangesOptions>;
    /**
     * Calculate bubble legend sizes from rendered series.
     *
     * @private
     *
     * @return {Array<number,number>}
     *         Calculated min and max bubble sizes
     */
    predictBubbleSizes(): [number, number];
    /**
     * Correct ranges with calculated sizes.
     * @private
     */
    updateRanges(min: number, max: number): void;
    /**
     * Because of the possibility of creating another legend line, predicted
     * bubble legend sizes may differ by a few pixels, so it is necessary to
     * correct them.
     * @private
     */
    correctSizes(): void;
}
interface BubbleLegendItem extends LegendItem {
    legendItem: LegendItemObject;
}
declare namespace BubbleLegendItem {
    interface FormatterContextObject {
        center: number;
        radius: (number | null);
        value: number;
    }
    interface LabelsOptions {
        align?: AlignValue;
        allowOverlap?: boolean;
        className?: string;
        format?: string;
        formatter?: Templating.FormatterCallback<FormatterContextObject>;
        style?: CSSObject;
        x?: number;
        y?: number;
    }
    interface Options {
        borderColor?: ColorType;
        borderWidth?: number;
        className?: string;
        color?: ColorType;
        connectorClassName?: string;
        connectorColor?: ColorType;
        connectorDistance?: number;
        connectorWidth?: number;
        enabled?: boolean;
        labels?: LabelsOptions;
        legendIndex?: number;
        maxSize?: number;
        minSize?: number;
        placed?: boolean;
        ranges?: Array<RangesOptions>;
        seriesIndex?: number;
        sizeBy?: BubbleSizeByValue;
        sizeByAbsoluteValue?: boolean;
        zIndex?: number;
        zThreshold?: number;
    }
    interface RangesOptions extends Partial<FormatterContextObject> {
        autoRanges?: boolean;
        borderColor?: ColorType;
        color?: ColorType;
        connectorColor?: ColorType;
        bubbleAttribs?: SVGAttributes;
        connectorAttribs?: SVGAttributes;
        labelAttribs?: SVGAttributes;
        value?: any;
    }
}
export default BubbleLegendItem;
