import type Chart from '../../Core/Chart/Chart';
import type Navigator from './Navigator';
import type Scrollbar from '../Scrollbar/Scrollbar';
import type Series from '../../Core/Series/Series';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        navigator?: Navigator;
        scrollbar?: Scrollbar;
        scroller?: Navigator;
    }
}
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
declare function compose(ChartClass: typeof Chart, NavigatorClass: typeof Navigator): void;
declare const ChartNavigatorComposition: {
    compose: typeof compose;
};
export default ChartNavigatorComposition;
