import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Extensions/Exporting */
        menu: SymbolFunction;
        /** @requires Extensions/Exporting */
        menuball: SymbolFunction;
    }
}
declare namespace ExportingSymbols {
    /**
     * @private
     */
    function compose(SVGRendererClass: typeof SVGRenderer): void;
}
export default ExportingSymbols;
