import type { OBVOptions, OBVParamsOptions } from './OBVOptions';
import type OBVPoint from './OBVPoint';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The OBV series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.obv
 *
 * @augments Highcharts.Series
 */
declare class OBVIndicator extends SMAIndicator {
    /**
     * On-Balance Volume (OBV) technical indicator. This series
     * requires the `linkedTo` option to be set and should be loaded after
     * the `stock/indicators/indicators.js` file. Through the `volumeSeriesID`
     * there also should be linked the volume series.
     *
     * @sample stock/indicators/obv
     *         OBV indicator
     *
     * @extends      plotOptions.sma
     * @since 9.1.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/obv
     * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
     *               pointInterval, pointIntervalUnit, pointPlacement,
     *               pointRange, pointStart, showInNavigator, stacking
     * @optionparent plotOptions.obv
     */
    static defaultOptions: OBVOptions;
    data: Array<OBVPoint>;
    points: Array<OBVPoint>;
    options: OBVOptions;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: OBVParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface OBVIndicator {
    nameComponents: Array<string> | undefined;
    pointClass: typeof OBVPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        obv: typeof OBVIndicator;
    }
}
export default OBVIndicator;
