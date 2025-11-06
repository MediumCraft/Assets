/**
 * (c) 2009-2025 Sebastian Bochann
 *
 * Price indicator for Highcharts
 *
 * License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 */
import type { AxisCrosshairOptions } from '../Core/Axis/AxisOptions';
import type ColorType from '../Core/Color/ColorType';
import type Series from '../Core/Series/Series';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase {
        lastPrice?: SVGElement;
        lastPriceLabel?: SVGElement;
        lastVisiblePrice?: SVGElement;
        lastVisiblePriceLabel?: SVGElement;
    }
}
declare module '../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        lastPrice?: LastPriceOptions;
        lastVisiblePrice?: LastVisiblePriceOptions;
    }
}
export interface LastPriceOptions extends AxisCrosshairOptions {
    enabled?: boolean;
}
export interface LastVisiblePriceOptions {
    enabled?: boolean;
    label?: LastVisiblePriceLabelOptions;
}
export interface LastVisiblePriceLabelOptions {
    enabled: true;
    color?: ColorType;
}
/** @private */
declare function compose(SeriesClass: typeof Series): void;
declare const PriceIndication: {
    compose: typeof compose;
};
export default PriceIndication;
