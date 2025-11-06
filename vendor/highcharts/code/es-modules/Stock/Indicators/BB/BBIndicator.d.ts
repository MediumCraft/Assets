/**
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type { BBOptions, BBParamsOptions } from './BBOptions';
import type BBPoint from './BBPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * Bollinger Bands series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.bb
 *
 * @augments Highcharts.Series
 */
declare class BBIndicator extends SMAIndicator {
    /**
     * Bollinger bands (BB). This series requires the `linkedTo` option to be
     * set and should be loaded after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/bollinger-bands
     *         Bollinger bands
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/bollinger-bands
     * @optionparent plotOptions.bb
     */
    static defaultOptions: BBOptions;
    data: Array<BBPoint>;
    options: BBOptions;
    points: Array<BBPoint>;
    init(this: BBIndicator): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: BBParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface BBIndicator extends MultipleLinesComposition.IndicatorComposition {
    linesApiNames: Array<string>;
    nameComponents: Array<string>;
    pointArrayMap: Array<keyof BBPoint>;
    pointClass: typeof BBPoint;
    pointValKey: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        bb: typeof BBIndicator;
    }
}
export default BBIndicator;
