import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Series/PointAndFigure */
        cross: SymbolFunction;
    }
}
declare namespace PointAndFigureSymbols {
    /**
     * @private
     */
    function compose(SVGRendererClass: typeof SVGRenderer): void;
}
export default PointAndFigureSymbols;
