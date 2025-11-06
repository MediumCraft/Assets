/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "./globals";
import * as _Highcharts from "./highcharts";
declare module "./highcharts" {
    /**
     * Detailed options for border radius.
     */
    interface BorderRadiusOptionsObject {
        /**
         * The border radius. A number signifies pixels. A percentage string,
         * like for example `50%`, signifies a relative size. For columns this
         * is relative to the column width, for pies it is relative to the
         * radius and the inner radius.
         */
        radius: (number|string);
        /**
         * The scope of the rounding for column charts. In a stacked column
         * chart, the value `point` means each single point will get rounded
         * corners. The value `stack` means the rounding will apply to the full
         * stack, so that only points close to the top or bottom will receive
         * rounding.
         */
        scope: ("point"|"stack");
        /**
         * For column charts, where in the point or stack to apply rounding. The
         * `end` value means only those corners at the point value will be
         * rounded, leaving the corners at the base or threshold unrounded. This
         * is the most intuitive behaviour. The `all` value means also the base
         * will be rounded.
         */
        where: ("all"|"end");
    }
    /**
     * Merge and set options.
     *
     * @param options
     *        The new custom chart options.
     *
     * @return Updated options.
     */
    function setOptions(options: Options): Options;
    /**
     * If ranges are not specified, determine ranges from rendered bubble series
     * and render legend again.
     */
    function chartDrawChartBox(): void;
    /**
     * Wrap the getOffset method to return zero offset for title or labels in a
     * radial axis.
     */
    function getOffset(): void;
    /**
     * Find the path for plot lines perpendicular to the radial axis.
     */
    function getPlotLinePath(): void;
    /**
     * Find the position for the axis title, by default inside the gauge.
     */
    function getTitlePosition(): void;
    /**
     * Finalize modification of axis instance with radial logic.
     */
    function onAxisAfterInit(): void;
    /**
     * If a user has defined categories, it is necessary to retroactively hide
     * any ticks added by the 'onAxisFoundExtremes' function above (#21672).
     *
     * Otherwise they can show up on the axis, alongside user-defined
     * categories.
     */
    function onAxisAfterRender(): void;
    /**
     * Wrap auto label align to avoid setting axis-wide rotation on radial axes.
     * (#4920)
     */
    function onAxisAutoLabelAlign(): void;
    /**
     * Remove label collector function on axis remove/update.
     */
    function onAxisDestroy(): void;
    /**
     * Add logic to pad each axis with the amount of pixels necessary to avoid
     * the bubbles to overflow.
     */
    function onAxisFoundExtremes(): void;
    /**
     * Prepare axis translation.
     */
    function onAxisInitialAxisTranslation(): void;
    function onChartAfterDrawChartBox(): void;
    function onChartCreateAxes(): void;
    /**
     * Update default options for radial axes from setOptions method.
     */
    function onGlobalSetOptions(): void;
    /**
     * Start the bubble legend creation process.
     */
    function onLegendAfterGetAllItems(): void;
    /**
     * Toggle bubble legend depending on the visible status of bubble series.
     */
    function onLegendItemClick(): void;
    function onPointerAfterGetHoverData(): void;
    /**
     * Apply conditional rounding to polar bars
     */
    function onSeriesAfterColumnTranslate(): void;
    /**
     * Add special cases within the Tick class' methods for radial axes.
     */
    function onTickAfterGetPosition(): void;
    /**
     * Prevent setting Y axis dirty.
     */
    function renderHidden(): void;
}
export default _Highcharts;
