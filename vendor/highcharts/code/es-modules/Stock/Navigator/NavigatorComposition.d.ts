import type Axis from '../../Core/Axis/Axis';
import type Series from '../../Core/Series/Series';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        'navigator-handle': SymbolFunction;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        baseSeries?: Series;
        navigatorSeries?: Series;
    }
}
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart, AxisClass: typeof Axis, SeriesClass: typeof Series): void;
declare const NavigatorComposition: {
    compose: typeof compose;
};
export default NavigatorComposition;
