/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals";
import * as _Highcharts from "../highcharts";
declare module "../highcharts" {
    interface Axis {
        /**
         * Drill down to a given category. This is the same as clicking on an
         * axis label. If multiple series with drilldown are present, all will
         * drill down to the given category.
         *
         * See also `Point.doDrilldown` for drilling down on a single point
         * instance.
         *
         * @param x
         *        The index of the category
         *
         * @param originalEvent
         *        The original event, used internally.
         */
        drilldownCategory(x: number, originalEvent?: MouseEvent): void;
    }
    /**
     * Options for all breadcrumbs.
     */
    interface BreadcrumbsOptions {
        /**
         * Button theme.
         */
        buttonTheme?: SVGAttributes;
    }
    interface Chart {
        /**
         * Add a series to the chart as drilldown from a specific point in the
         * parent series. This method is used for async drilldown, when clicking
         * a point in a series should result in loading and displaying a more
         * high-resolution series. When not async, the setup is simpler using
         * the drilldown.series options structure.
         *
         * @param point
         *        The point from which the drilldown will start.
         *
         * @param options
         *        The series options for the new, detailed series.
         */
        addSeriesAsDrilldown(point: Point, options: SeriesOptionsType): void;
        /**
         * When the chart is drilled down to a child series, calling
         * `chart.drillUp()` will drill up to the parent series.
         */
        drillUp(): void;
    }
}
export default _Highcharts;
