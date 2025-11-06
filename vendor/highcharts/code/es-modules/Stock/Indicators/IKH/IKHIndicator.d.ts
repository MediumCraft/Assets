import type { IKHOptions, IKHParamsOptions } from './IKHOptions';
import type IKHPoint from './IKHPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LinePoint from '../../../Series/Line/LinePoint';
import type LineSeries from '../../../Series/Line/LineSeries';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../../Core/Renderer/SVG/SVGPath';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
declare module '../../../Core/Series/SeriesBase' {
    interface SeriesBase {
        fillGraph?: boolean;
    }
}
/**
 * The IKH series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ikh
 *
 * @augments Highcharts.Series
 */
declare class IKHIndicator extends SMAIndicator {
    /**
     * Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be
     * set.
     *
     * @sample stock/indicators/ichimoku-kinko-hyo
     *         Ichimoku Kinko Hyo indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/ichimoku-kinko-hyo
     * @optionparent plotOptions.ikh
     */
    static defaultOptions: IKHOptions;
    data: Array<IKHPoint>;
    options: IKHOptions;
    points: Array<IKHPoint>;
    graphCollection: Array<string>;
    graphsenkouSpan?: SVGElement;
    ikhMap?: Record<string, Array<IKHPoint>>;
    nextPoints?: Array<IKHPoint>;
    init(): void;
    toYData(point: IKHPoint): Array<number>;
    translate(): void;
    drawGraph(): void;
    getGraphPath(points: Array<LinePoint>): SVGPath;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: IKHParamsOptions): IndicatorValuesObject<TLinkedSeries> | undefined;
}
interface IKHIndicator {
    pointClass: typeof IKHPoint;
    nameComponents: Array<string>;
    pointValKey: string;
    pointArrayMap: Array<keyof IKHPoint>;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        ikh: typeof IKHIndicator;
    }
}
export default IKHIndicator;
