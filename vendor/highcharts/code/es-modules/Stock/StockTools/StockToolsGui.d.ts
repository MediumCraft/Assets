import type Chart from '../../Core/Chart/Chart';
import type NavigationBindings from '../../Extensions/Annotations/NavigationBindings';
import type { LangStockToolsOptions, StockToolsOptions } from './StockToolsOptions';
import Toolbar from './StockToolbar.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        stockTools?: Toolbar;
        /** @requires modules/stock-tools */
        setStockTools(options?: StockToolsOptions): void;
    }
}
declare module '../../Core/Options' {
    interface LangOptions {
        stockTools?: LangStockToolsOptions;
    }
    interface Options {
        stockTools?: StockToolsOptions;
    }
}
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart, NavigationBindingsClass: typeof NavigationBindings): void;
declare const StockToolsGui: {
    compose: typeof compose;
};
export default StockToolsGui;
