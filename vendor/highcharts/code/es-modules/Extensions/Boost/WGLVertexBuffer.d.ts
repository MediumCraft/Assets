import type { WGLDrawModeValue } from './WGLDrawMode';
import type WGLShader from './WGLShader';
/**
 * Vertex Buffer abstraction.
 * A vertex buffer is a set of vertices which are passed to the GPU
 * in a single call.
 *
 * @private
 * @class
 * @name WGLVertexBuffer
 *
 * @param {WebGLContext} gl
 * Context in which to create the buffer.
 * @param {WGLShader} shader
 * Shader to use.
 */
declare class WGLVertexBuffer {
    constructor(gl: WebGLRenderingContext, shader: WGLShader, dataComponents?: number);
    private buffer;
    private components;
    data: (Array<number> | undefined);
    private dataComponents?;
    private iterator;
    private gl;
    private preAllocated;
    private shader;
    private vertAttribute;
    /**
     * Note about pre-allocated buffers:
     *     - This is slower for charts with many series
     * @private
     */
    allocate(size: number): void;
    /**
     * Bind the buffer
     * @private
     */
    bind(): (boolean | undefined);
    /**
     * Build the buffer
     * @private
     * @param {Array<number>} dataIn
     * Zero padded array of indices
     * @param {string} attrib
     * Name of the Attribute to bind the buffer to
     * @param {number} dataComponents
     * Number of components per. indice
     */
    build(dataIn: Array<number>, attrib: string, dataComponents?: number): boolean;
    /**
     * @private
     */
    destroy(): void;
    /**
     * Adds data to the pre-allocated buffer.
     * @private
     * @param {number} x
     * X data
     * @param {number} y
     * Y data
     * @param {number} a
     * A data
     * @param {number} b
     * B data
     */
    push(x: number, y: number, a: number, b: number): void;
    /**
     * Render the buffer
     *
     * @private
     * @param {number} from
     * Start indice.
     * @param {number} to
     * End indice.
     * @param {WGLDrawModeValue} drawMode
     * Draw mode.
     */
    render(from: number, to: number, drawMode: WGLDrawModeValue): boolean;
}
export default WGLVertexBuffer;
