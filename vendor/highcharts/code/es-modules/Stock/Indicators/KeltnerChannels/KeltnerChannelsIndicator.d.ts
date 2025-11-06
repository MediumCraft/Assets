import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type { KeltnerChannelsOptions, KeltnerChannelsParamsOptions } from './KeltnerChannelsOptions';
import type KeltnerChannelsPoint from './KeltnerChannelsPoint';
import type LineSeries from '../../../Series/Line/LineSeries';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Keltner Channels series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.keltnerchannels
 *
 * @augments Highcharts.Series
 */
declare class KeltnerChannelsIndicator extends SMAIndicator {
    /**
     * Keltner Channels. This series requires the `linkedTo` option to be set
     * and should be loaded after the `stock/indicators/indicators.js`,
     * `stock/indicators/atr.js`, and `stock/ema/.js`.
     *
     * @sample {highstock} stock/indicators/keltner-channels
     *         Keltner Channels
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart,showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/keltner-channels
     * @optionparent plotOptions.keltnerchannels
     */
    static defaultOptions: KeltnerChannelsOptions;
    data: Array<KeltnerChannelsPoint>;
    options: KeltnerChannelsOptions;
    points: Array<KeltnerChannelsPoint>;
    init(this: KeltnerChannelsIndicator): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: KeltnerChannelsParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface KeltnerChannelsIndicator extends MultipleLinesComposition.IndicatorComposition {
    nameBase: string;
    nameComponents: Array<string>;
    pointArrayMap: Array<keyof KeltnerChannelsPoint>;
    pointClass: typeof KeltnerChannelsPoint;
    pointValKey: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        keltnerchannels: typeof KeltnerChannelsIndicator;
    }
}
export default KeltnerChannelsIndicator;
