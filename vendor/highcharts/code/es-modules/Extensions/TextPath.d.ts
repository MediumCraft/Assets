import SVGElement from '../Core/Renderer/SVG/SVGElement';
/**
 * @private
 */
interface TextPathObject {
    path: SVGElement;
    undo: Function;
}
/**
 * @private
 */
declare module '../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        setTextPath(path: SVGElement | undefined, textPathOptions: AnyRecord): SVGElement;
        textPath: TextPathObject;
    }
}
declare function compose(SVGElementClass: typeof SVGElement): void;
declare const TextPath: {
    compose: typeof compose;
};
export default TextPath;
