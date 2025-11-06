import type Chart from '../../Core/Chart/Chart';
import type Pane from './Pane';
import type Pointer from '../../Core/Pointer';
import type Series from '../../Core/Series/Series';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        hoverPane?: Pane;
        pane?: Array<Pane>;
        getHoverPane?(eventArgs: any): (Pane | undefined);
    }
}
export interface PaneChart extends Chart {
    hoverPane?: Pane;
    pane: Array<Pane>;
    getHoverPane(eventArgs: any): (Pane | undefined);
}
/** @private */
declare function compose(ChartClass: typeof Chart, PointerClass: typeof Pointer, SeriesClass: typeof Series): void;
declare const PaneComposition: {
    compose: typeof compose;
};
export default PaneComposition;
