import type { SeriesTypePlotOptions } from '../../Core/Series/SeriesType';
declare const DataGroupingDefaults: {
    common: {
        groupPixelWidth: number;
        dateTimeLabelFormats: {
            millisecond: string[];
            second: string[];
            minute: string[];
            hour: string[];
            day: string[];
            week: string[];
            month: string[];
            year: string[];
        };
    };
    seriesSpecific: SeriesTypePlotOptions;
    units: ((string | null)[] | (string | number[])[])[];
};
export default DataGroupingDefaults;
