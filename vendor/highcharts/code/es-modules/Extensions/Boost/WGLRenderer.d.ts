import type BoostOptions from './BoostOptions';
import type Chart from '../../Core/Chart/Chart';
import type Series from '../../Core/Series/Series';
import type WGLOptions from './WGLOptions';
interface WGLRendererCallbackFunction {
    (renderer: WGLRenderer): void;
}
/**
 * Internal types
 * @private
 */
declare global {
    interface CanvasRenderingContext2D {
        FUNC_MIN: number;
        /** @deprecated */
        mozImageSmoothingEnabled?: (CanvasImageSmoothing['imageSmoothingEnabled']);
        /** @deprecated */
        msImageSmoothingEnabled?: CanvasImageSmoothing['imageSmoothingEnabled'];
        /** @deprecated */
        webkitImageSmoothingEnabled?: (CanvasImageSmoothing['imageSmoothingEnabled']);
    }
    interface WebGLRenderingContext {
        /** @deprecated */
        readonly FUNC_MIN: number;
    }
}
/**
 * Main renderer. Used to render series.
 *
 * Notes to self:
 * - May be able to build a point map by rendering to a separate canvas and
 *   encoding values in the color data.
 * - Need to figure out a way to transform the data quicker
 *
 * @private
 *
 * @param {Function} postRenderCallback
 */
declare class WGLRenderer {
    /**
     * Returns an orthographic perspective matrix
     * @private
     * @param {number} width
     * the width of the viewport in pixels
     * @param {number} height
     * the height of the viewport in pixels
     */
    private static orthoMatrix;
    /**
     * @private
     */
    private static seriesPointCount;
    constructor(postRenderCallback: WGLRendererCallbackFunction);
    private gl?;
    /**
     * The data to render - array of coordinates.
     * Repeating sequence of [x, y, checkThreshold, pointSize].
     */
    private data;
    private height;
    private isInited;
    private shader?;
    private markerData;
    private postRenderCallback?;
    settings: WGLOptions;
    private series;
    private textureHandles;
    private vbuffer?;
    private width;
    /**
     * @private
     */
    private getPixelRatio;
    /**
     * @private
     */
    setOptions(options: BoostOptions): void;
    /**
     * Allocate a float buffer to fit all series
     * @private
     */
    allocateBuffer(chart: Chart): void;
    /**
     * @private
     */
    allocateBufferForSingleSeries(series: Series): void;
    /**
     * Clear the depth and color buffer
     * @private
     */
    clear(): void;
    /**
     * Push data for a single series
     * This calculates additional vertices and transforms the data to be
     * aligned correctly in memory
     * @private
     */
    private pushSeriesData;
    /**
     * Push a series to the renderer
     * If we render the series immediately, we don't have to loop later
     * @private
     * @param {Highchart.Series} s
     * The series to push.
     */
    pushSeries(s: Series): void;
    /**
     * Flush the renderer.
     * This removes pushed series and vertices.
     * Should be called after clearing and before rendering
     * @private
     */
    private flush;
    /**
     * Pass x-axis to shader
     * @private
     * @param {Highcharts.Axis} axis
     * The x-axis.
     */
    private setXAxis;
    /**
     * Pass y-axis to shader
     * @private
     * @param {Highcharts.Axis} axis
     * The y-axis.
     */
    private setYAxis;
    /**
     * Set the translation threshold
     * @private
     * @param {boolean} has
     * Has threshold flag.
     * @param {numbe} translation
     * The threshold.
     */
    private setThreshold;
    /**
     * Render the data
     * This renders all pushed series.
     * @private
     */
    private renderChart;
    /**
     * Render the data when ready
     * @private
     */
    render(chart: Chart): (false | undefined);
    /**
     * Set the viewport size in pixels
     * Creates an orthographic perspective matrix and applies it.
     * @private
     */
    setSize(width: number, height: number): void;
    /**
     * Init OpenGL
     * @private
     */
    init(canvas?: HTMLCanvasElement, noFlush?: boolean): boolean;
    /**
     * @private
     * @todo use it
     */
    destroy(): void;
}
export default WGLRenderer;
