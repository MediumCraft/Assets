import type AnimationOptions from '../../Animation/AnimationOptions';
import type ColorType from '../../Color/ColorType';
import type SVGAttributes3D from './SVGAttributes3D';
import type SVGPath from './SVGPath';
import type SVGRenderer3D from './SVGRenderer3D';
declare const SVGElement: typeof import("./SVGElement").default;
declare class SVGElement3D extends SVGElement {
    static types: Record<string, typeof SVGElement3D>;
    parts: string[];
    pathType: string;
    /**
     * The init is used by base - renderer.Element
     * @private
     */
    initArgs(args: SVGAttributes3D): void;
    /**
     * Single property setter that applies options to each part
     * @private
     */
    singleSetterForParts(prop: string, val: any, values?: AnyRecord, verb?: string, duration?: any, complete?: any): this;
    /**
     * Calls function for each part. Used for attr, animate and destroy.
     * @private
     */
    processParts(props: any, partsProps: (AnyRecord | null), verb: string, duration?: any, complete?: any): this;
    /**
     * Destroy all parts
     * @private
     */
    destroy(): undefined;
    animate(args: SVGAttributes3D, duration?: (boolean | Partial<AnimationOptions>), complete?: Function): this;
    fillSetter(fill: ColorType): this;
}
interface SVGElement3D {
    renderer: SVGRenderer3D.Composition;
    add(parent?: SVGElement3D): this;
    attr(key: string): (number | string);
    attr(key: string, val: (number | string | ColorType | SVGPath), complete?: Function, continueAnimation?: boolean): this;
    attr(hash: SVGAttributes3D, val?: undefined, complete?: Function, continueAnimation?: boolean): this;
}
export default SVGElement3D;
