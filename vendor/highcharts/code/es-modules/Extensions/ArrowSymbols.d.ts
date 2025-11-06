import type SVGPath from '../Core/Renderer/SVG/SVGPath';
import type SVGRenderer from '../Core/Renderer/SVG/SVGRenderer';
declare module '../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Extensions/ArrowSymbols */
        arrow: typeof arrow;
        /** @requires Extensions/ArrowSymbols */
        'arrow-filled': typeof triangleLeft;
        /** @requires Extensions/ArrowSymbols */
        'arrow-filled-half': typeof triangleLeftHalf;
        /** @requires Extensions/ArrowSymbols */
        'arrow-half': typeof arrowHalf;
        /** @requires Extensions/ArrowSymbols */
        'triangle-left': typeof triangleLeft;
        /** @requires Extensions/ArrowSymbols */
        'triangle-left-half': typeof triangleLeftHalf;
    }
}
/**
 * Creates an arrow symbol. Like a triangle, except not filled.
 * ```
 *                   o
 *             o
 *       o
 * o
 *       o
 *             o
 *                   o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the arrow
 *
 * @param {number} y
 *        y position of the arrow
 *
 * @param {number} w
 *        width of the arrow
 *
 * @param {number} h
 *        height of the arrow
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function arrow(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Creates a half-width arrow symbol. Like a triangle, except not filled.
 * ```
 *       o
 *    o
 * o
 *    o
 *       o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the arrow
 *
 * @param {number} y
 *        y position of the arrow
 *
 * @param {number} w
 *        width of the arrow
 *
 * @param {number} h
 *        height of the arrow
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function arrowHalf(x: number, y: number, w: number, h: number): SVGPath;
/**
 * @private
 */
declare function compose(SVGRendererClass: typeof SVGRenderer): void;
/**
 * Creates a left-oriented triangle.
 * ```
 *             o
 *       ooooooo
 * ooooooooooooo
 *       ooooooo
 *             o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the triangle
 *
 * @param {number} y
 *        y position of the triangle
 *
 * @param {number} w
 *        width of the triangle
 *
 * @param {number} h
 *        height of the triangle
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function triangleLeft(x: number, y: number, w: number, h: number): SVGPath;
/**
 * Creates a half-width, left-oriented triangle.
 * ```
 *       o
 *    oooo
 * ooooooo
 *    oooo
 *       o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the triangle
 *
 * @param {number} y
 *        y position of the triangle
 *
 * @param {number} w
 *        width of the triangle
 *
 * @param {number} h
 *        height of the triangle
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
declare function triangleLeftHalf(x: number, y: number, w: number, h: number): SVGPath;
declare const ArrowSymbols: {
    compose: typeof compose;
};
export default ArrowSymbols;
