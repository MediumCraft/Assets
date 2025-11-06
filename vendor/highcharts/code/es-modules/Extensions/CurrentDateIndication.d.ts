import type { AlignValue, VerticalAlignValue } from '../Core/Renderer/AlignObject';
import type ColorString from '../Core/Color/ColorString';
import type CSSObject from '../Core/Renderer/CSSObject';
import type DashStyleValue from '../Core/Renderer/DashStyleValue';
import type Templating from '../Core/Templating';
import type Time from '../Core/Time';
import Axis from '../Core/Axis/Axis.js';
import PlotLineOrBand from '../Core/Axis/PlotLineOrBand/PlotLineOrBand.js';
declare module '../Core/Axis/AxisOptions' {
    interface AxisOptions {
        currentDateIndicator?: (boolean | CurrentDateIndicatorOptions);
    }
}
interface CurrentDateIndicatorLabelOptions {
    align?: AlignValue;
    format?: Time.DateTimeFormat;
    formatter?: Templating.FormatterCallback<PlotLineOrBand>;
    rotation?: number;
    style?: CSSObject;
    text?: string;
    textAlign?: AlignValue;
    useHTML?: boolean;
    verticalAlign?: VerticalAlignValue;
    x?: number;
    y?: number;
}
interface CurrentDateIndicatorOptions {
    acrossPanes?: boolean;
    className?: string;
    color?: ColorString;
    dashStyle?: DashStyleValue;
    events?: any;
    id?: string;
    label?: CurrentDateIndicatorLabelOptions;
    width?: number;
    zIndex?: number;
}
/**
 * @private
 */
declare function compose(AxisClass: typeof Axis, PlotLineOrBandClass: typeof PlotLineOrBand): void;
declare const CurrentDateIndication: {
    compose: typeof compose;
};
export default CurrentDateIndication;
