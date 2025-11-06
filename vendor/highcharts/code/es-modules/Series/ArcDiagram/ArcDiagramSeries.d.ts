import type ArcDiagramSeriesOptions from './ArcDiagramSeriesOptions';
import type { StatesOptionsKey } from '../../Core/Series/StatesOptions';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
import ArcDiagramPoint from './ArcDiagramPoint.js';
import SankeyColumnComposition from '../Sankey/SankeyColumnComposition.js';
import Series from '../../Core/Series/Series.js';
declare const SankeySeries: typeof import("../Sankey/SankeySeries").default;
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.arcdiagram
 *
 * @augments Highcharts.seriesTypes.sankey
 */
declare class ArcDiagramSeries extends SankeySeries {
    static defaultOptions: import("../../Core/Series/SeriesOptions").PlotOptionsOf<Series> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Column/ColumnSeries").default> & import("../../Core/Series/SeriesOptions").PlotOptionsOf<import("../Sankey/SankeySeries").default> & ArcDiagramSeriesOptions;
    data: Array<ArcDiagramPoint>;
    options: ArcDiagramSeriesOptions;
    nodeColumns: Array<SankeyColumnComposition.ArrayComposition<ArcDiagramPoint>>;
    nodes: Array<ArcDiagramPoint>;
    points: Array<ArcDiagramPoint>;
    /**
     * Create node columns by analyzing the nodes and the relations between
     * incoming and outgoing links.
     * @private
     */
    createNodeColumns(): Array<SankeyColumnComposition.ArrayComposition<ArcDiagramPoint>>;
    /**
     * Run translation operations for one link.
     * @private
     */
    translateLink(point: ArcDiagramPoint): void;
    /**
     * Run translation operations for one node.
     * @private
     */
    translateNode(node: ArcDiagramPoint, column: SankeyColumnComposition.ArrayComposition<ArcDiagramPoint>): void;
    drawDataLabels(): void;
    pointAttribs(point?: ArcDiagramPoint, state?: StatesOptionsKey): SVGAttributes;
    markerAttribs(point: ArcDiagramPoint): SVGAttributes;
}
interface ArcDiagramSeries {
    orderNodes: boolean;
    pointClass: typeof ArcDiagramPoint;
}
declare module '../../Core/Series/SeriesType' {
    interface SeriesTypeRegistry {
        arcdiagram: typeof ArcDiagramSeries;
    }
}
export default ArcDiagramSeries;
