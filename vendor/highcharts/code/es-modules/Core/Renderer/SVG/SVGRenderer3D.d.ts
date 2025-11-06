import type Position3DObject from '../../Renderer/Position3DObject';
import type PositionObject from '../../Renderer/PositionObject';
import type SVGArc3D from './SVGArc3D';
import type SVGAttributes from './SVGAttributes';
import type SVGCuboid from './SVGCuboid';
import type SVGElement from './SVGElement';
import type SVGPath from './SVGPath';
import type SVGRenderer from './SVGRenderer';
import SVGElement3D from './SVGElement3D.js';
declare module './SVGElementBase' {
    interface SVGElementBase {
        attribs?: SVGAttributes;
        parts?: Array<string>;
        pathType?: string;
        vertexes?: Array<Position3DObject>;
        setPaths(attribs: SVGAttributes): void;
    }
}
declare module './SVGRendererBase' {
    interface SVGRendererBase {
        Element3D: typeof SVGElement3D;
        arc3d(attribs: SVGAttributes): SVGElement;
        arc3dPath(shapeArgs: SVGAttributes): SVGArc3D;
        cuboid(shapeArgs: SVGAttributes): SVGElement;
        cuboidPath(shapeArgs: SVGAttributes): SVGCuboid;
        element3d(type: string, shapeArgs: SVGAttributes): SVGElement3D;
        face3d(args?: SVGAttributes): SVGElement;
        polyhedron(args?: SVGAttributes): SVGElement3D;
        toLinePath(points: Array<PositionObject>, closed?: boolean): SVGPath;
        toLineSegments(points: Array<PositionObject>): SVGPath;
    }
}
declare namespace SVGRenderer3D {
    class Composition extends SVGRenderer {
        Element3D: typeof SVGElement3D;
        arc3d(attribs: SVGAttributes): SVGElement;
        arc3dPath(shapeArgs: SVGAttributes): SVGArc3D;
        cuboid(shapeArgs: SVGAttributes): SVGElement;
        cuboidPath(shapeArgs: SVGAttributes): SVGCuboid;
        element3d(type: string, shapeArgs: SVGAttributes): SVGElement3D;
        face3d(args?: SVGAttributes): SVGElement;
        polyhedron(args?: SVGAttributes): SVGElement3D;
        toLinePath(points: Array<PositionObject>, closed?: boolean): SVGPath;
        toLineSegments(points: Array<PositionObject>): SVGPath;
    }
    /** @private */
    function compose(SVGRendererClass: typeof SVGRenderer): void;
}
export default SVGRenderer3D;
