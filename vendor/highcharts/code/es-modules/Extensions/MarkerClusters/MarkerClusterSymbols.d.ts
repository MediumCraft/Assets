import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
declare module '../../Core/Renderer/SVG/SymbolType' {
    interface SymbolTypeRegistry {
        /** @requires Extensions/MarkerClusters */
        cluster: SymbolFunction;
    }
}
/**
 * @private
 */
declare function compose(SVGRendererClass: typeof SVGRenderer): void;
declare const MarkerClusterSymbols: {
    compose: typeof compose;
};
export default MarkerClusterSymbols;
