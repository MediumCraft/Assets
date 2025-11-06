import type Drilldown from './Drilldown';
import type Series from '../../Core/Series/Series';
import type { SeriesTypeOptions, SeriesTypeRegistry } from '../../Core/Series/SeriesType';
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        drilldown?: string;
        doDrilldown(): void;
        runDrilldown(holdRedraw?: boolean, category?: number, originalEvent?: Event): void;
        unbindDrilldownClick?: Function;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        drilldownLevel?: Drilldown.LevelObject;
        isDrilling?: boolean;
        purgedOptions?: SeriesTypeOptions;
        /** @requires Extensions/Drilldown */
        animateDrilldown(init?: boolean): void;
        /** @requires Extensions/Drilldown */
        animateDrillupFrom(level: Drilldown.LevelObject): void;
        /** @requires Extensions/Drilldown */
        animateDrillupTo(init?: boolean): void;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        _ddSeriesId?: number;
        _levelNumber?: number;
        drilldown?: string;
    }
}
/** @private */
declare function compose(SeriesClass: typeof Series, seriesTypes: SeriesTypeRegistry): void;
declare const DrilldownSeries: {
    compose: typeof compose;
};
export default DrilldownSeries;
