import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type MomentumOptions from './MomentumOptions';
import type MomentumPoint from './MomentumPoint';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Momentum series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.momentum
 *
 * @augments Highcharts.Series
 */
declare class MomentumIndicator extends SMAIndicator {
    /**
     * Momentum. This series requires `linkedTo` option to be set.
     *
     * @sample stock/indicators/momentum
     *         Momentum indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/momentum
     * @optionparent plotOptions.momentum
     */
    static defaultOptions: MomentumOptions;
    data: Array<MomentumPoint>;
    options: MomentumOptions;
    points: Array<MomentumPoint>;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: MomentumOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface MomentumIndicator {
    pointClass: typeof MomentumPoint;
    nameBase: string;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        momentum: typeof MomentumIndicator;
    }
}
export default MomentumIndicator;
