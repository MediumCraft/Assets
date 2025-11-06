import type BubbleSeries from '../../Series/Bubble/BubbleSeries';
type WGLProgramType = ('fragment' | 'vertex');
/**
 * A static shader mimicing axis translation functions found in Core/Axis
 *
 * @private
 *
 * @param {WebGLContext} gl
 * the context in which the shader is active
 */
declare class WGLShader {
    constructor(gl: WebGLRenderingContext);
    private bubbleSizeAbsUniform;
    private bubbleSizeAreaUniform;
    private errors;
    private fcUniform?;
    private gl;
    private isBubbleUniform?;
    private isCircleUniform;
    private isInverted;
    private psUniform?;
    private pUniform?;
    private shaderProgram?;
    private skipTranslationUniform;
    private uLocations;
    private uSamplerUniform;
    /**
     * Bind the shader.
     * This makes the shader the active one until another one is bound,
     * or until 0 is bound.
     * @private
     */
    bind(): void;
    /**
     * Create the shader.
     * Loads the shader program statically defined above
     * @private
     */
    createShader(): boolean;
    /**
     * Handle errors accumulated in errors stack
     * @private
     */
    handleErrors(): void;
    /**
     * String to shader program
     * @private
     * @param {string} str
     * Program source
     * @param {string} type
     * Program type: either `vertex` or `fragment`
     */
    stringToProgram(str: string, type: WGLProgramType): (false | WebGLShader | null);
    /**
     * Destroy the shader
     * @private
     */
    destroy(): void;
    fillColorUniform(): (WebGLUniformLocation | null);
    /**
     * Get the shader program handle
     * @private
     * @return {WebGLProgram}
     * The handle for the program
     */
    getProgram(): (WebGLProgram | null | undefined);
    pointSizeUniform(): (WebGLUniformLocation | null);
    perspectiveUniform(): (WebGLUniformLocation | null);
    /**
     * Flush
     * @private
     */
    reset(): void;
    /**
     * Set bubble uniforms
     * @private
     * @param {Highcharts.Series} series
     * Series to use
     */
    setBubbleUniforms(series: BubbleSeries, zCalcMin: number, zCalcMax: number, pixelRatio?: number): void;
    /**
     * Set the Color uniform.
     * @private
     * @param {Array<number>} color
     * Array with RGBA values.
     */
    setColor(color: Array<number>): void;
    /**
     * Enable/disable circle drawing
     * @private
     */
    setDrawAsCircle(flag?: boolean): void;
    /**
     * Set if inversion state
     * @private
     * @param {number} flag
     * Inversion flag
     */
    setInverted(flag: number): void;
    /**
     * Set the perspective matrix
     * @private
     * @param {Float32List} m
     * Matrix 4 x 4
     */
    setPMatrix(m: Float32List): void;
    /**
     * Set the point size.
     * @private
     * @param {number} p
     * Point size
     */
    setPointSize(p: number): void;
    /**
     * Set skip translation
     * @private
     */
    setSkipTranslation(flag?: boolean): void;
    /**
     * Set the active texture
     * @private
     * @param {number} texture
     * Texture to activate
     */
    setTexture(texture: number): void;
    /**
     * Set a uniform value.
     * This uses a hash map to cache uniform locations.
     * @private
     * @param {string} name
     * Name of the uniform to set.
     * @param {number} val
     * Value to set
     */
    setUniform(name: string, val: number): void;
}
export default WGLShader;
