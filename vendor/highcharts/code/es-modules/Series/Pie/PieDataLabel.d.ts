import type PieSeries from './PieSeries';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import DataLabel from '../../Core/Series/DataLabel.js';
declare module '../../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        connector?: SVGElement;
        dataLabelPosition?: DataLabel.LabelPositionObject;
    }
}
declare namespace ColumnDataLabel {
    /** @private */
    function compose(PieSeriesClass: typeof PieSeries): void;
}
export default ColumnDataLabel;
