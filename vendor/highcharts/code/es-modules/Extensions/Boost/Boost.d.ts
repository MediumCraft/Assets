import type Axis from '../../Core/Axis/Axis';
import type Chart from '../../Core/Chart/Chart';
import type Color from '../../Core/Color/Color';
import type Series from '../../Core/Series/Series';
import type SeriesRegistry from '../../Core/Series/SeriesRegistry';
import type Point from '../../Core/Series/Point';
/**
 * @private
 */
declare function compose(ChartClass: typeof Chart, AxisClass: typeof Axis, SeriesClass: typeof Series, seriesTypes: typeof SeriesRegistry.seriesTypes, PointClass: typeof Point, ColorClass?: typeof Color): void;
/**
 * Returns true if the current browser supports WebGL.
 *
 * @requires modules/boost
 *
 * @function Highcharts.hasWebGLSupport
 *
 * @return {boolean}
 * `true` if the browser supports WebGL.
 */
declare function hasWebGLSupport(): boolean;
declare const Boost: {
    compose: typeof compose;
    hasWebGLSupport: typeof hasWebGLSupport;
};
export default Boost;
