import type NoDataOptions from './NoDataOptions';
import type Options from '../../Core/Options';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        noDataLabel?: SVGElement;
        /** @requires modules/no-data-to-display */
        showNoData(str?: string): void;
        /** @requires modules/no-data-to-display */
        hideNoData(): void;
        /** @requires modules/no-data-to-display */
        hasData(): (boolean | undefined);
    }
}
declare module '../../Core/Options' {
    interface LangOptions {
        noData?: string;
    }
    interface Options {
        noData?: NoDataOptions;
    }
}
/** @private */
declare function compose(ChartClass: typeof Chart, highchartsDefaultOptions: Options): void;
declare const NoDataToDisplay: {
    compose: typeof compose;
};
export default NoDataToDisplay;
