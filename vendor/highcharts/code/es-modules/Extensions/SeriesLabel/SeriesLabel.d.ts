import type Chart from '../../Core/Chart/Chart.js';
import type { LabelIntersectBoxObject, SeriesLabelOptions } from './SeriesLabelOptions';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
import Series from '../../Core/Series/Series.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        boxesToAvoid?: Array<LabelIntersectBoxObject>;
        labelSeries?: Array<Series>;
        labelSeriesMaxSum?: number;
        seriesLabelTimer?: number;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        interpolatedPoints?: Array<ControlPoint>;
        labelBySeries?: SVGElement;
        sum?: number;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        label?: SeriesLabelOptions;
    }
}
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Extensions/SeriesLabel */
        connector: SymbolFunction;
    }
}
interface ControlPoint {
    chartCenterX?: number;
    chartCenterY?: number;
    chartX: number;
    chartY: number;
    plotX?: number;
    plotY?: number;
}
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart, SVGRendererClass: typeof SVGRenderer): void;
declare const SeriesLabel: {
    compose: typeof compose;
};
export default SeriesLabel;
