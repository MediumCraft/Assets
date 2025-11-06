import type ColorType from '../../Core/Color/ColorType';
declare const SVGElement3D: typeof import("../../Core/Renderer/SVG/SVGElement3D").default;
declare class SVGElement3DCylinder extends SVGElement3D {
    parts: string[];
    pathType: string;
    fillSetter(fill: ColorType): this;
}
export default SVGElement3DCylinder;
