import type SVGElement from './SVGElement';
import type SVGRenderer from './SVGRenderer';
/**
 * SVG Text Builder
 * @private
 * @class
 * @name Highcharts.TextBuilder
 */
declare class TextBuilder {
    constructor(svgElement: SVGElement);
    ellipsis: boolean;
    lineClamp?: number;
    noWrap: boolean;
    renderer: SVGRenderer;
    svgElement: SVGElement;
    textLineHeight: any;
    textOutline: any;
    width?: number;
    /**
     * Build an SVG representation of the pseudo HTML given in the object's
     * svgElement.
     *
     * @private
     *
     * @return {void}.
     */
    buildSVG(): void;
    /**
     * Modify the DOM of the generated SVG structure. This function only does
     * operations that cannot be done until the elements are attached to the
     * DOM, like doing layout based on rendered metrics of the added elements.
     *
     * @private
     *
     */
    private modifyDOM;
    /**
     * Get the rendered line height of a <text>, <tspan> or pure text node.
     * @private
     * @param {Highcharts.DOMElementType|Text} node The node to check for
     * @return {number} The rendered line height
     */
    private getLineHeight;
    /**
     * Transform a pseudo HTML AST node tree into an SVG structure. We do as
     * much heavy lifting as we can here, before doing the final processing in
     * the modifyDOM function. The original data is mutated.
     *
     * @private
     *
     * @param {ASTNode[]} nodes The AST nodes
     *
     */
    private modifyTree;
    private truncate;
    private unescapeEntities;
}
export default TextBuilder;
