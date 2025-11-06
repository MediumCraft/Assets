import type TEMAIndicatorType from '../TEMA/TEMAIndicator';
import type { TRIXOptions } from './TRIXOptions';
import type TRIXPoint from './TRIXPoint';
declare const TEMAIndicator: typeof TEMAIndicatorType;
/**
 * The TRIX series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.trix
 *
 * @augments Highcharts.Series
 */
declare class TRIXIndicator extends TEMAIndicator {
    /**
     * Triple exponential average (TRIX) oscillator. This series requires
     * `linkedTo` option to be set.
     *
     * @sample {highstock} stock/indicators/trix
     * TRIX indicator
     *
     * @extends      plotOptions.tema
     * @since        7.0.0
     * @product      highstock
     * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
     *               navigatorOptions, pointInterval, pointIntervalUnit,
     *               pointPlacement, pointRange, pointStart, showInNavigator,
     *               stacking
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/tema
     * @requires     stock/indicators/trix
     * @optionparent plotOptions.trix
     */
    static defaultOptions: TRIXOptions;
    data: Array<TRIXPoint>;
    options: TRIXOptions;
    points: Array<TRIXPoint>;
    getTemaPoint(xVal: Array<number>, tripledPeriod: number, EMAlevels: TEMAIndicatorType.EMALevelsObject, i: number): ([number, (number | null)] | undefined);
}
interface TRIXIndicator {
    pointClass: typeof TRIXPoint;
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        trix: typeof TRIXIndicator;
    }
}
export default TRIXIndicator;
