import type Annotation from '../Annotation';
import type AST from '../../../Core/Renderer/HTML/AST';
import type Chart from '../../../Core/Chart/Chart';
import type { ControllableShapeOptions } from './ControllableOptions';
import type SVGElement from '../../../Core/Renderer/SVG/SVGElement';
import type SVGPath from '../../../Core/Renderer/SVG/SVGPath';
import type SVGRenderer from '../../../Core/Renderer/SVG/SVGRenderer';
import Controllable from './Controllable.js';
declare module './ControllableBase' {
    interface ControllableBase {
        markerEnd?: SVGElement;
        markerStart?: SVGElement;
    }
}
declare module '../../../Core/Options' {
    interface Options {
        defs?: Record<string, AST.Node>;
    }
}
declare module '../../../Core/Renderer/SVG/SVGRendererBase' {
    interface SVGRendererBase {
        addMarker(id: string, markerOptions: AST.Node): SVGElement;
    }
}
/**
 * A controllable path class.
 *
 * @requires modules/annotations
 *
 * @private
 * @class
 * @name Highcharts.AnnotationControllablePath
 *
 * @param {Highcharts.Annotation}
 * Related annotation.
 *
 * @param {Highcharts.AnnotationsShapeOptions} options
 * A path's options object.
 *
 * @param {number} index
 * Index of the path.
 */
declare class ControllablePath extends Controllable {
    /**
     * A map object which allows to map options attributes to element attributes
     *
     * @name Highcharts.AnnotationControllablePath.attrsMap
     * @type {Highcharts.Dictionary<string>}
     */
    static attrsMap: {
        dashStyle: string;
        strokeWidth: string;
        stroke: string;
        fill: string;
        zIndex: string;
    };
    static compose(ChartClass: typeof Chart, SVGRendererClass: typeof SVGRenderer): void;
    constructor(annotation: Annotation, options: ControllableShapeOptions, index: number);
    type: string;
    /**
     * Map the controllable path to 'd' path attribute.
     *
     * @return {Highcharts.SVGPathArray|null}
     * A path's d attribute.
     */
    toD(): (SVGPath | string | null);
    shouldBeDrawn(): boolean;
    render(parent: SVGElement): void;
    redraw(animation?: boolean): void;
    /**
     * Set markers.
     * @private
     * @param {Highcharts.AnnotationControllablePath} item
     */
    setMarkers(item: ControllablePath): void;
}
interface ControllablePath {
    collections: 'shapes';
    itemType: 'shape';
    options: ControllableShapeOptions;
    tracker: SVGElement;
}
declare module './ControllableType' {
    interface ControllableShapeTypeRegistry {
        path: typeof ControllablePath;
    }
}
export default ControllablePath;
