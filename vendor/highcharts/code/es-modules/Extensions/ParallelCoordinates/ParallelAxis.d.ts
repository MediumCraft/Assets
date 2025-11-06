import type Axis from '../../Core/Axis/Axis';
import type AxisOptions from '../../Core/Axis/AxisOptions';
import type ParallelCoordinates from './ParallelCoordinates';
declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions {
        angle?: number;
        tooltipValueFormat?: string;
    }
}
declare module '../../Core/Axis/AxisComposition' {
    interface AxisComposition {
        parallelCoordinates?: ParallelAxis.Composition['parallelCoordinates'];
    }
}
/**
 * Support for parallel axes.
 * @private
 * @class
 */
declare class ParallelAxisAdditions {
    constructor(axis: ParallelAxis.Composition);
    axis: ParallelAxis.Composition;
    position?: number;
    /**
     * Set predefined left+width and top+height (inverted) for yAxes.
     * This method modifies options param.
     *
     * @private
     *
     * @param  {Array<string>} axisPosition
     * ['left', 'width', 'height', 'top'] or ['top', 'height', 'width', 'left']
     * for an inverted chart.
     *
     * @param  {Highcharts.AxisOptions} options
     * Axis options.
     */
    setPosition(axisPosition: Array<('left' | 'width' | 'height' | 'top')>, options: AxisOptions): void;
}
declare namespace ParallelAxis {
    /**
     * Axis with parallel support.
     * @private
     */
    class Composition extends Axis {
        chart: ParallelCoordinates.ChartComposition;
        parallelCoordinates: ParallelAxisAdditions;
    }
    /**
     * Adds support for parallel axes.
     * @private
     */
    function compose(AxisClass: typeof Axis): void;
}
export default ParallelAxis;
