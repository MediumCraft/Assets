import type AnimationOptions from '../../Core/Animation/AnimationOptions';
import type DataLabel from '../../Core/Series/DataLabel';
import type PiePointOptions from './PiePointOptions';
import type PieSeries from './PieSeries';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import Point from '../../Core/Series/Point.js';
declare class PiePoint extends Point {
    angle?: number;
    delayedRendering?: boolean;
    half: number;
    options: PiePointOptions;
    series: PieSeries;
    sliced?: boolean;
    slicedTranslation?: PiePoint.TranslationAttributes;
    startR?: number;
    /**
     * Extendable method for getting the path of the connector between the
     * data label and the pie slice.
     * @private
     */
    getConnectorPath(dataLabel: SVGElement): SVGPath;
    /**
     * @private
     */
    getTranslate(): PiePoint.TranslationAttributes;
    /**
     * @private
     */
    haloPath(size: number): SVGPath;
    /**
     * Initialize the pie slice.
     * @private
     */
    constructor(series: PieSeries, options: PiePointOptions, x?: number);
    /**
     * Negative points are not valid (#1530, #3623, #5322)
     * @private
     */
    isValid(): boolean;
    /**
     * Toggle the visibility of a pie slice or other data point. Note that this
     * method is available only for some series, like pie, treemap and sunburst.
     *
     * @function Highcharts.Point#setVisible
     *
     * @param {boolean} [vis]
     * True to show the pie slice or other data point, false to hide. If
     * undefined, the visibility is toggled.
     *
     * @param {boolean} [redraw] Whether to redraw the chart after the point is
     * altered. If doing more operations on the chart, it is a good idea to set
     * redraw to false and call {@link Chart#redraw|chart.redraw()} after.
     *
     */
    setVisible(vis: boolean, redraw?: boolean): void;
    /**
     * Set or toggle whether the slice is cut out from the pie.
     * @private
     *
     * @param {boolean} sliced
     * When undefined, the slice state is toggled.
     *
     * @param {boolean} [redraw]
     * Whether to redraw the chart. True by default.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
     * Animation options.
     */
    slice(sliced: boolean, redraw?: boolean, animation?: (boolean | Partial<AnimationOptions>)): void;
}
interface PiePoint {
    connectorShapes: Record<string, DataLabel.ConnectorShapeFunction>;
}
declare namespace PiePoint {
    interface TranslationAttributes extends SVGAttributes {
        translateX: number;
        translateY: number;
    }
}
export default PiePoint;
