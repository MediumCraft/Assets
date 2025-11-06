import type ArcDiagramPointOptions from './ArcDiagramPointOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import ArcDiagramSeries from './ArcDiagramSeries';
import NodesComposition from '../NodesComposition.js';
declare const SankeyPoint: typeof import("../Sankey/SankeyPoint").default;
declare class ArcDiagramPoint extends SankeyPoint {
    fromNode: ArcDiagramPoint;
    index: number;
    linksFrom: Array<ArcDiagramPoint>;
    linksTo: Array<ArcDiagramPoint>;
    options: ArcDiagramPointOptions;
    series: ArcDiagramSeries;
    scale: number;
    shapeArgs: SVGAttributes;
    toNode: ArcDiagramPoint;
    isValid(): boolean;
}
interface ArcDiagramPoint {
    setState: typeof NodesComposition['setNodeState'];
}
export default ArcDiagramPoint;
