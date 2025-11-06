import type Chart from '../../Core/Chart/Chart';
import type Series from '../../Core/Series/Series';
import type Tooltip from '../../Core/Tooltip';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
interface Zooming {
    x: number;
    y: number;
    height: number;
    width: number;
    zoomX: number;
    zoomY: number;
    scale: number;
    panX: number;
    panY: number;
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        dataLabelsParentGroups?: Array<SVGElement>;
        zooming?: Zooming;
    }
}
/**
 * The series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tiledwebmap
 *
 * @augments Highcharts.Series
 */
declare class NonCartesianSeriesZoom {
    static compose(ChartClass: typeof Chart, SeriesClass: typeof Series, TooltipClass: typeof Tooltip): void;
}
export default NonCartesianSeriesZoom;
