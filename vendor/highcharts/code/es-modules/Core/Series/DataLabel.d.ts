import type { AlignObject, AlignValue } from '../Renderer/AlignObject';
import type BBoxObject from '../Renderer/BBoxObject';
import type ColorString from '../Color/ColorString';
import type ColumnPoint from '../../Series/Column/ColumnPoint';
import type CorePositionObject from '../../Core/Renderer/PositionObject';
import type DataLabelOptions from './DataLabelOptions';
import type PiePoint from '../../Series/Pie/PiePoint';
import type Point from './Point';
import type Series from './Series';
import type SVGAttributes from '../Renderer/SVG/SVGAttributes';
import type SVGElement from '../Renderer/SVG/SVGElement';
import type SVGLabel from '../Renderer/SVG/SVGLabel';
import type SVGPath from '../../Core/Renderer/SVG/SVGPath';
import type AnimationOptions from '../Animation/AnimationOptions';
import R from '../Renderer/RendererUtilities.js';
declare module './PointBase' {
    interface PointBase {
        bottom?: number;
        contrastColor?: ColorString;
        dataLabel?: SVGElement | SVGLabel;
        dataLabelOnHidden?: boolean;
        dataLabelOnNull?: boolean;
        dataLabelPath?: SVGElement;
        dataLabels?: Array<SVGElement>;
        distributeBox?: R.BoxObject;
        dlBox?: BBoxObject;
        dlOptions?: DataLabelOptions & {
            zIndex?: undefined;
        };
        top?: number;
        getDataLabelPath(dataLabel: SVGElement): SVGElement;
    }
}
declare module './PointOptions' {
    interface PointOptions {
        dataLabels?: (DataLabelOptions | Array<DataLabelOptions>);
        labelrank?: number;
    }
}
declare module './SeriesBase' {
    interface SeriesBase {
        dataLabelPositioners?: DataLabel.PositionersObject;
        dataLabelsGroup?: SVGElement;
        dataLabelsGroups?: Array<SVGElement | undefined>;
        hasDataLabels?(): boolean;
        initDataLabelsGroup(index: number, dataLabelsOptions?: DataLabelOptions): SVGElement;
        initDataLabels(index: number, animationConfig?: Partial<AnimationOptions>, dataLabelsOptions?: DataLabelOptions): SVGElement;
        alignDataLabel(point: Point, dataLabel: SVGElement, options: DataLabelOptions, alignTo: BBoxObject | undefined, isNew?: boolean): void;
        drawDataLabels(points?: Array<Point>): void;
        getDataLabelPosition(point: PiePoint, distance: number): DataLabel.LabelPositionObject;
        justifyDataLabel(dataLabel: SVGElement, options: DataLabelOptions, alignAttr: SVGAttributes, bBox: BBoxObject, alignTo?: BBoxObject, isNew?: boolean): (boolean | undefined);
        mergeArrays(one: (DataLabelOptions | Array<DataLabelOptions> | undefined), two: (DataLabelOptions | Array<DataLabelOptions> | undefined)): (DataLabelOptions | Array<DataLabelOptions>);
        placeDataLabels?(): void;
        setDataLabelStartPos(point: ColumnPoint, dataLabel: SVGElement, isNew: boolean | undefined, isInside: boolean, alignOptions: AlignObject): void;
        verifyDataLabelOverflow?(overflow: Array<number>): boolean;
    }
}
declare module './SeriesOptions' {
    interface SeriesOptions {
        dataLabels?: (DataLabelOptions | Array<DataLabelOptions>);
    }
}
declare module '../../Core/Renderer/SVG/SVGElementBase' {
    interface SVGElementBase {
        options?: DataLabelOptions;
    }
}
declare namespace DataLabel {
    interface PositionersObject {
        alignToConnectors(points: Array<Point>, half: boolean, plotWidth: number, plotLeft: number): number;
        alignToPlotEdges(dataLabel: SVGElement, half: boolean, plotWidth: number, plotLeft: number): number;
        justify(point: Point, dataLabel: SVGElement, radius: number, seriesCenter: Array<number>): number;
        radialDistributionX(series: Series, point: Point, y: number, naturalY: number, dataLabel: SVGElement): number;
        radialDistributionY(point: Point, dataLabel: SVGElement): number;
    }
    interface ConnectorShapeFunction {
        (...args: Array<any>): SVGPath;
    }
    interface LabelConnectorPositionObject {
        angle?: number;
        breakAt: CorePositionObject;
        touchingSliceAt: CorePositionObject;
    }
    interface LabelPositionObject {
        alignment: AlignValue;
        attribs?: SVGAttributes;
        bottom?: number;
        connectorPosition: LabelConnectorPositionObject;
        computed: Record<string, undefined | number>;
        distance: number;
        natural: CorePositionObject;
        posAttribs?: SVGAttributes;
        sideOverflow?: number;
        top?: number;
    }
    interface PositionObject extends CorePositionObject {
        alignment: AlignValue;
    }
    /**
     * Compose the data label composition onto a series class.
     *
     * @private
     * @function compose
     *
     * @param {Highcharts.Series} SeriesClass
     * The series class to compose onto.
     *
     * @return {void}
     */
    function compose(SeriesClass: typeof Series): void;
}
export default DataLabel;
