import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { SupertrendOptions, SupertrendParamsOptions, SupertrendLinkedParentObject } from './SupertrendOptions';
import type SupertrendPoint from './SupertrendPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Supertrend series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.supertrend
 *
 * @augments Highcharts.Series
 */
declare class SupertrendIndicator extends SMAIndicator {
    /**
     * Supertrend indicator. This series requires the `linkedTo` option to be
     * set and should be loaded after the `stock/indicators/indicators.js` and
     * `stock/indicators/sma.js`.
     *
     * @sample {highstock} stock/indicators/supertrend
     *         Supertrend indicator
     *
     * @extends      plotOptions.sma
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, cropThreshold, negativeColor, colorAxis, joinBy,
     *               keys, navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking, threshold
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/supertrend
     * @optionparent plotOptions.supertrend
     */
    static defaultOptions: SupertrendOptions;
    data: Array<SupertrendPoint>;
    linkedParent: SupertrendLinkedParentObject;
    options: SupertrendOptions;
    points: Array<SupertrendPoint>;
    init(): void;
    drawGraph(): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: SupertrendParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface SupertrendIndicator {
    nameBase: string;
    nameComponents: Array<string>;
    pointClass: typeof SupertrendPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        supertrend: typeof SupertrendIndicator;
    }
}
export default SupertrendIndicator;
