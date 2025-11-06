import type { ApproximationKeyValue } from './ApproximationType';
import type Point from '../../Core/Series/Point';
import type { PointOptions, PointShortOptions } from '../../Core/Series/PointOptions';
import type Series from '../../Core/Series/Series';
import type TimeTicksInfoObject from '../../Core/Axis/TimeTicksInfoObject';
import type { SeriesTypeOptions } from '../../Core/Series/SeriesType';
import DataTableCore from '../../Data/DataTableCore.js';
declare module '../../Core/Axis/TimeTicksInfoObject' {
    interface TimeTicksInfoObject {
        gapSize?: number;
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        dataGroup?: DataGroupingInfoObject;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        allGroupedTable?: DataTableCore;
        cropStart?: number;
        currentDataGrouping?: TimeTicksInfoObject;
        dataGroupInfo?: DataGroupingInfoObject;
        forceCrop?: boolean;
        groupedData?: (Array<Point> | null);
        groupMap?: Array<DataGroupingInfoObject>;
        groupPixelWidth?: number;
        hasGroupedData?: boolean;
        hasProcessed?: boolean;
        preventGraphAnimation?: boolean;
        applyGrouping(hasExtremesChanged: boolean): void;
        destroyGroupedData(): void;
        generatePoints(): void;
        getDGApproximation(): ApproximationKeyValue;
        groupData(table: DataTableCore, groupPosition: Array<number>, approximation: (string | Function)): DataGroupingResultObject;
    }
}
export type AnchorChoiceType = Record<string, number>;
export interface DataGroupingInfoObject {
    length?: number;
    options?: (PointOptions | PointShortOptions | SeriesTypeOptions);
    start?: number;
    groupStart?: number;
}
export interface DataGroupingResultObject {
    modified: DataTableCore;
    groupMap: Array<DataGroupingInfoObject>;
}
/**
 * @private
 */
declare function compose(SeriesClass: typeof Series): void;
/**
 * Highcharts Stock only. Takes parallel arrays of x and y data and groups the
 * data into intervals defined by groupPositions, a collection of starting x
 * values for each group.
 *
 * @product highstock
 *
 * @function Highcharts.Series#groupData
 * @param {Highcharts.DataTable} table
 *        The series data table.
 * @param {Array<number>} groupPositions
 *        Group positions.
 * @param {string|Function} [approximation]
 *        Approximation to use.
 * @return {Highcharts.DataGroupingResultObject}
 *         Mapped groups.
 */
declare function groupData(this: Series, table: DataTableCore, groupPositions: Array<number>, approximation: (ApproximationKeyValue | Function)): DataGroupingResultObject;
declare const DataGroupingSeriesComposition: {
    compose: typeof compose;
    groupData: typeof groupData;
};
export default DataGroupingSeriesComposition;
