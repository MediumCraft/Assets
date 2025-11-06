import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type { PriceEnvelopesOptions, PriceEnvelopesParamsOptions } from './PriceEnvelopesOptions';
import type PriceEnvelopesPoint from './PriceEnvelopesPoint';
import MultipleLinesComposition from '../MultipleLinesComposition.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Price Envelopes series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.priceenvelopes
 *
 * @augments Highcharts.Series
 */
declare class PriceEnvelopesIndicator extends SMAIndicator {
    /**
     * Price envelopes indicator based on [SMA](#plotOptions.sma) calculations.
     * This series requires the `linkedTo` option to be set and should be loaded
     * after the `stock/indicators/indicators.js` file.
     *
     * @sample stock/indicators/price-envelopes
     *         Price envelopes
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/price-envelopes
     * @optionparent plotOptions.priceenvelopes
     */
    static defaultOptions: PriceEnvelopesOptions;
    data: Array<PriceEnvelopesPoint>;
    options: PriceEnvelopesOptions;
    points: Array<PriceEnvelopesPoint>;
    init(): void;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: PriceEnvelopesParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
}
interface PriceEnvelopesIndicator extends MultipleLinesComposition.IndicatorComposition {
    linesApiNames: Array<string>;
    nameComponents: Array<string>;
    nameBase: string;
    parallelArrays: Array<string>;
    pointArrayMap: Array<keyof PriceEnvelopesPoint>;
    pointClass: typeof PriceEnvelopesPoint;
    pointValKey: string;
}
declare namespace PriceEnvelopesIndicator {
    interface GappedExtensionObject {
        options?: GappedExtensionOptions;
    }
    interface GappedExtensionOptions {
        gapSize?: number;
    }
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        priceenvelopes: typeof PriceEnvelopesIndicator;
    }
}
export default PriceEnvelopesIndicator;
