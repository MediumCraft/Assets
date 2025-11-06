import type AxisType from '../../../Core/Axis/AxisType';
import type Chart from '../../../Core/Chart/Chart';
import type ColumnSeries from '../../../Series/Column/ColumnSeries';
import type CSSObject from '../../../Core/Renderer/CSSObject';
import type DataExtremesObject from '../../../Core/Series/DataExtremesObject';
import type { IndicatorLinkedSeriesBase } from '../IndicatorBase';
import type IndicatorValuesObject from '../IndicatorValuesObject';
import type LineSeries from '../../../Series/Line/LineSeries';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import type { VBPOptions, VBPParamsOptions } from './VBPOptions';
import type Types from '../../../Shared/Types';
import VBPPoint from './VBPPoint.js';
declare const SMAIndicator: typeof import("../SMA/SMAIndicator").default;
/**
 * The Volume By Price (VBP) series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.vbp
 *
 * @augments Highcharts.Series
 */
declare class VBPIndicator extends SMAIndicator {
    /**
     * Volume By Price indicator.
     *
     * This series requires `linkedTo` option to be set.
     *
     * @sample stock/indicators/volume-by-price
     *         Volume By Price indicator
     *
     * @extends      plotOptions.sma
     * @since        6.0.0
     * @product      highstock
     * @requires     stock/indicators/indicators
     * @requires     stock/indicators/volume-by-price
     * @optionparent plotOptions.vbp
     */
    static defaultOptions: VBPOptions;
    data: Array<VBPPoint>;
    negWidths: Array<number>;
    options: VBPOptions;
    points: Array<VBPPoint>;
    posWidths: Array<number>;
    priceZones: Array<VBPIndicator.VBPIndicatorPriceZoneObject>;
    rangeStep: number;
    volumeDataArray: Array<number>;
    zoneStarts: Array<number>;
    zoneLinesSVG?: SVGElement;
    init(chart: Chart, options: VBPOptions): VBPIndicator;
    addCustomEvents(baseSeries: LineSeries, volumeSeries: LineSeries): VBPIndicator;
    animate(init: boolean): void;
    drawPoints(): void;
    posNegVolume(initVol: boolean, pos: boolean): void;
    translate(): void;
    getExtremes(): DataExtremesObject;
    getValues<TLinkedSeries extends LineSeries>(series: TLinkedSeries & IndicatorLinkedSeriesBase, params: VBPParamsOptions): (IndicatorValuesObject<TLinkedSeries> | undefined);
    specifyZones(isOHLC: boolean, xValues: Array<number> | Types.TypedArray, yValues: Array<Array<number>>, ranges: number, volumeSeries: LineSeries): Array<VBPIndicator.VBPIndicatorPriceZoneObject>;
    volumePerZone(isOHLC: boolean, priceZones: Array<VBPIndicator.VBPIndicatorPriceZoneObject>, volumeSeries: LineSeries, xValues: Array<number> | Types.TypedArray, yValues: Array<Array<number>>): Array<VBPIndicator.VBPIndicatorPriceZoneObject>;
    drawZones(chart: Chart, yAxis: AxisType, zonesValues: Array<number>, zonesStyles: CSSObject): void;
}
interface VBPIndicator {
    nameBase: string;
    nameComponents: Array<string>;
    pointClass: typeof VBPPoint;
    crispCol: ColumnSeries['crispCol'];
    getColumnMetrics: ColumnSeries['getColumnMetrics'];
}
declare namespace VBPIndicator {
    interface VBPIndicatorPriceZoneObject {
        end: number;
        index: number;
        negativeVolumeData: number;
        positiveVolumeData: number;
        start: number;
        wholeVolumeData: number;
        x: number;
    }
    interface VBPIndicatorStyleOptions {
        enabled?: boolean;
        styles?: CSSObject;
    }
}
declare module '../../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        vbp: typeof VBPIndicator;
    }
}
export default VBPIndicator;
