import type AnimationOptions from '../Animation/AnimationOptions';
import type BBoxObject from '../Renderer/BBoxObject';
import type BubbleLegendItem from '../../Series/Bubble/BubbleLegendItem';
import type { EventCallback } from '../Callback';
import type Chart from '../Chart/Chart';
import type ColorAxis from '../Axis/Color/ColorAxis';
import type CSSObject from '../Renderer/CSSObject';
import type { DeepPartial } from '../../Shared/Types';
import type FontMetricsObject from '../Renderer/FontMetricsObject';
import type { HTMLDOMElement } from '../Renderer/DOMElementType';
import type LegendBase from './LegendBase';
import type LegendOptions from './LegendOptions';
import type SVGElement from '../Renderer/SVG/SVGElement';
import Series from '../Series/Series.js';
import Point from '../Series/Point.js';
declare module '../Chart/ChartBase' {
    interface ChartBase {
        legend: Legend;
    }
}
declare module '../Series/SeriesOptions' {
    interface SeriesOptions {
        legendIndex?: number;
        legendType?: ('point' | 'series');
        showCheckbox?: boolean;
        showInLegend?: boolean;
    }
}
/**
 * The overview of the chart's series. The legend object is instantiated
 * internally in the chart constructor, and is available from the `chart.legend`
 * property. Each chart has only one legend.
 *
 * @class
 * @name Highcharts.Legend
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 * @param {Highcharts.LegendOptions} options
 * Legend options.
 */
declare class Legend {
    allItems: Array<Legend.Item>;
    baseline?: number;
    box: SVGElement;
    chart: Chart;
    clipHeight?: number;
    clipRect?: SVGElement;
    contentGroup: SVGElement;
    currentPage?: number;
    display?: boolean;
    down?: SVGElement;
    downTracker?: SVGElement;
    eventOptions: Record<string, EventCallback<Series, Event>>;
    fontMetrics?: FontMetricsObject;
    fullHeight?: number;
    group: SVGElement;
    initialItemY: number;
    itemHeight: number;
    itemHiddenStyle?: CSSObject;
    itemMarginBottom: number;
    itemMarginTop: number;
    itemStyle?: CSSObject;
    itemX: number;
    itemY: number;
    lastItemY: number;
    lastLineHeight: number;
    legendHeight: number;
    legendWidth: number;
    maxItemWidth: number;
    maxLegendWidth: number;
    nav?: SVGElement;
    offsetWidth: number;
    options: LegendOptions;
    padding: number;
    pager?: SVGElement;
    pages: Array<number>;
    proximate?: boolean;
    scrollGroup: SVGElement;
    scrollOffset?: number;
    symbolHeight: number;
    symbolWidth: number;
    title?: SVGElement;
    titleHeight: number;
    totalItemWidth: number;
    up?: SVGElement;
    upTracker?: SVGElement;
    widthOption: number;
    /**
     * Initialize the legend.
     *
     * @private
     * @function Highcharts.Legend#init
     *
     * @param {Highcharts.Chart} chart
     * The chart instance.
     *
     * @param {Highcharts.LegendOptions} options
     * Legend options.
     */
    constructor(chart: Chart, options: LegendOptions);
    /**
     * @private
     * @function Highcharts.Legend#setOptions
     * @param {Highcharts.LegendOptions} options
     */
    setOptions(options: LegendOptions): void;
    /**
     * Update the legend with new options. Equivalent to running `chart.update`
     * with a legend configuration option.
     *
     * @sample highcharts/legend/legend-update/
     *         Legend update
     *
     * @function Highcharts.Legend#update
     *
     * @param {Highcharts.LegendOptions} options
     * Legend options.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart after the axis is altered. If doing more
     * operations on the chart, it is a good idea to set redraw to false and
     * call {@link Chart#redraw} after. Whether to redraw the chart.
     *
     * @emits Highcharts.Legends#event:afterUpdate
     */
    update(options: DeepPartial<LegendOptions>, redraw?: boolean): void;
    /**
     * Set the colors for the legend item.
     *
     * @private
     * @function Highcharts.Legend#colorizeItem
     * @param {Highcharts.BubbleLegendItem|Highcharts.Point|Highcharts.Series} item
     *        A Series or Point instance
     * @param {boolean} [visible=false]
     *        Dimmed or colored
     *
     * @todo
     * Make events official: Fires the event `afterColorizeItem`.
     */
    colorizeItem(item: Legend.Item, visible?: boolean): void;
    /**
     * @private
     * @function Highcharts.Legend#positionItems
     */
    positionItems(): void;
    /**
     * Position the legend item.
     *
     * @private
     * @function Highcharts.Legend#positionItem
     * @param {Highcharts.BubbleLegendItem|Highcharts.Point|Highcharts.Series} item
     * The item to position
     */
    positionItem(item: Legend.Item): void;
    /**
     * Destroy a single legend item, used internally on removing series items.
     *
     * @private
     * @function Highcharts.Legend#destroyItem
     * @param {Highcharts.BubbleLegendItem|Highcharts.Point|Highcharts.Series} item
     * The item to remove
     */
    destroyItem(item: (BubbleLegendItem | ColorAxis | ColorAxis.LegendItemObject | Series | Point)): void;
    /**
     * Destroy the legend. Used internally. To reflow objects, `chart.redraw`
     * must be called after destruction.
     *
     * @private
     * @function Highcharts.Legend#destroy
     */
    destroy(): void;
    /**
     * Position the checkboxes after the width is determined.
     *
     * @private
     * @function Highcharts.Legend#positionCheckboxes
     */
    positionCheckboxes(): void;
    /**
     * Render the legend title on top of the legend.
     *
     * @private
     * @function Highcharts.Legend#renderTitle
     */
    renderTitle(): void;
    /**
     * Set the legend item text.
     *
     * @function Highcharts.Legend#setText
     * @param {Highcharts.Point|Highcharts.Series} item
     *        The item for which to update the text in the legend.
     */
    setText(item: Legend.Item): void;
    /**
     * Render a single specific legend item. Called internally from the `render`
     * function.
     *
     * @private
     * @function Highcharts.Legend#renderItem
     * @param {Highcharts.BubbleLegendItem|Highcharts.Point|Highcharts.Series} item
     * The item to render.
     */
    renderItem(item: Legend.Item): void;
    /**
     * Get the position of the item in the layout. We now know the
     * maxItemWidth from the previous loop.
     *
     * @private
     * @function Highcharts.Legend#layoutItem
     * @param {Highcharts.BubbleLegendItem|Highcharts.Point|Highcharts.Series} item
     */
    layoutItem(item: Legend.Item): void;
    /**
     * Get all items, which is one item per series for most series and one
     * item per point for pie series and its derivatives. Fires the event
     * `afterGetAllItems`.
     *
     * @private
     * @function Highcharts.Legend#getAllItems
     * @return {Array<(Highcharts.BubbleLegendItem|Highcharts.Point|Highcharts.Series)>}
     * The current items in the legend.
     * @emits Highcharts.Legend#event:afterGetAllItems
     */
    getAllItems(): Array<Legend.Item>;
    /**
     * Get a short, three letter string reflecting the alignment and layout.
     *
     * @private
     * @function Highcharts.Legend#getAlignment
     * @return {string}
     * The alignment, empty string if floating
     */
    getAlignment(): string;
    /**
     * Adjust the chart margins by reserving space for the legend on only one
     * side of the chart. If the position is set to a corner, top or bottom is
     * reserved for horizontal legends and left or right for vertical ones.
     *
     * @private
     * @function Highcharts.Legend#adjustMargins
     * @param {Array<number>} margin
     * @param {Array<number>} spacing
     */
    adjustMargins(margin: Array<number>, spacing: Array<number>): void;
    /**
     * @private
     * @function Highcharts.Legend#proximatePositions
     */
    proximatePositions(): void;
    /**
     * Render the legend. This method can be called both before and after
     * `chart.render`. If called after, it will only rearrange items instead
     * of creating new ones. Called internally on initial render and after
     * redraws.
     *
     * @private
     * @function Highcharts.Legend#render
     */
    render(): void;
    /**
     * Align the legend to chart's box.
     *
     * @private
     * @function Highcharts.align
     * @param {Highcharts.BBoxObject} alignTo
     */
    align(alignTo?: BBoxObject): void;
    /**
     * Set up the overflow handling by adding navigation with up and down arrows
     * below the legend.
     *
     * @private
     * @function Highcharts.Legend#handleOverflow
     */
    handleOverflow(legendHeight: number): number;
    /**
     * Scroll the legend by a number of pages.
     *
     * @private
     * @function Highcharts.Legend#scroll
     *
     * @param {number} scrollBy
     *        The number of pages to scroll.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Whether and how to apply animation.
     *
     */
    scroll(scrollBy: number, animation?: (boolean | Partial<AnimationOptions>)): void;
    /**
     * @private
     * @function Highcharts.Legend#setItemEvents
     * @param {Highcharts.BubbleLegendItem|Point|Highcharts.Series} item
     * @param {Highcharts.SVGElement} legendLabel
     * @param {boolean} [useHTML=false]
     * @emits Highcharts.Legend#event:itemClick
     */
    setItemEvents(item: Legend.Item, legendLabel: SVGElement, useHTML?: boolean): void;
    /**
     * @private
     * @function Highcharts.Legend#createCheckboxForItem
     * @param {Highcharts.BubbleLegendItem|Point|Highcharts.Series} item
     * @emits Highcharts.Series#event:checkboxClick
     */
    createCheckboxForItem(item: Legend.Item): void;
}
interface Legend extends LegendBase {
}
declare namespace Legend {
    interface CheckBoxElement extends HTMLDOMElement {
        checked?: boolean;
        x: number;
        y: number;
    }
    type Item = (BubbleLegendItem | Series | Point);
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart): void;
}
export default Legend;
