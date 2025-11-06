import type Axis from './Axis';
import type ScrollbarType from '../../Stock/Scrollbar/Scrollbar';
import type ScrollbarOptions from '../../Stock/Scrollbar/ScrollbarOptions';
declare module './AxisComposition' {
    interface AxisComposition {
        scrollbar?: ScrollbarType;
    }
}
declare module './AxisOptions' {
    interface AxisOptions {
        scrollbar?: ScrollbarOptions;
    }
}
interface ScrollbarAxis extends Axis {
    scrollbar?: ScrollbarType;
}
declare namespace ScrollbarAxis {
    /**
     * Attaches to axis events to create scrollbars if enabled.
     *
     * @private
     *
     * @param {Highcharts.Axis} AxisClass
     * Axis class to extend.
     *
     * @param {Highcharts.Scrollbar} ScrollbarClass
     * Scrollbar class to use.
     */
    function compose(AxisClass: typeof Axis, ScrollbarClass: typeof ScrollbarType): void;
}
export default ScrollbarAxis;
