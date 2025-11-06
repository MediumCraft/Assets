import type XAxisOptions from '../Core/Axis/AxisOptions';
import type DataConverter from '../Data/Converters/DataConverter';
import type Options from '../Core/Options';
import Axis from '../Core/Axis/Axis.js';
import Chart from '../Core/Chart/Chart.js';
declare module '../Core/Chart/ChartBase' {
    interface ChartBase {
        data?: Data;
        hasDataDef?: boolean;
        liveDataURL?: string;
    }
}
declare module '../Core/Options' {
    interface Options {
        data?: DataOptions;
    }
}
type DataValueType = (number | string | null);
interface DataAfterCompleteCallbackFunction {
    (dataInstance: Data, dataOptions?: Partial<Options>): void;
}
interface DataBeforeParseCallbackFunction {
    (csv: string): string;
}
interface DataColumnsArray extends Array<DataValueType> {
    isDatetime?: boolean;
    isNumeric?: boolean;
    mixed?: boolean;
    name?: string;
    unsorted?: boolean;
}
interface DataCompleteCallbackFunction {
    (chartOptions: Partial<Options>): void;
}
interface DataOptions {
    afterComplete?: DataAfterCompleteCallbackFunction;
    beforeParse?: DataBeforeParseCallbackFunction;
    columns?: Array<DataColumnsArray>;
    columnsURL?: string;
    columnTypes?: Array<'string' | 'number' | 'float' | 'date'>;
    complete?: DataCompleteCallbackFunction;
    csv?: string;
    csvURL?: string;
    dataRefreshRate?: number;
    dateFormat?: string;
    dateFormats?: undefined;
    decimalPoint?: string;
    enablePolling?: boolean;
    endColumn?: number;
    endRow?: number;
    error?: Function;
    firstRowAsNames?: boolean;
    googleAPIKey?: string;
    googleSpreadsheetKey?: string;
    googleSpreadsheetRange?: string;
    itemDelimiter?: string;
    lineDelimiter?: string;
    parsed?: DataParsedCallbackFunction;
    parseDate?: DataParseDateCallbackFunction;
    rows?: Array<DataColumnsArray>;
    rowsURL?: string;
    seriesMapping?: Array<Record<string, number>>;
    sort?: boolean;
    startColumn?: number;
    startRow?: number;
    switchRowsAndColumns?: boolean;
    table?: (string | HTMLTableElement);
}
interface DataParseDateCallbackFunction {
    (dateValue: string): number;
}
interface DataParsedCallbackFunction {
    (columns: Array<DataColumnsArray>): (boolean | undefined);
}
interface DataValueCountObject {
    global: number;
    globalPointArrayMap: Array<string>;
    individual: Array<number>;
    seriesBuilders: Array<SeriesBuilder>;
    xColumns: Array<number>;
}
interface SeriesBuilderReaderObject {
    columnIndex: (number | undefined);
    configName: string;
}
/**
 * The Data class
 *
 * @requires modules/data
 *
 * @class
 * @name Highcharts.Data
 *
 * @param {Highcharts.DataOptions} dataOptions
 *
 * @param {Highcharts.Options} [chartOptions]
 *
 * @param {Highcharts.Chart} [chart]
 */
declare class Data {
    /**
     * Creates a data object to parse data for a chart.
     *
     * @function Highcharts.data
     */
    static data(dataOptions: DataOptions, chartOptions: Partial<Options> | undefined, chart: Chart): Data;
    /**
     * Reorganize rows into columns.
     *
     * @function Highcharts.Data.rowsToColumns
     */
    static rowsToColumns(rows: (Array<DataColumnsArray> | undefined)): (Array<DataColumnsArray> | undefined);
    constructor(dataOptions: DataOptions, chartOptions: Partial<Options> | undefined, chart: Chart);
    alternativeFormat?: string;
    chart: Chart;
    chartOptions: Partial<Options>;
    columns?: Array<DataColumnsArray>;
    dateFormat?: string;
    decimalRegex?: RegExp;
    firstRowAsNames?: boolean;
    liveDataTimeout?: number;
    rawColumns: Array<Array<string>>;
    rowsToColumns: typeof Data.rowsToColumns;
    options: DataOptions;
    valueCount?: DataValueCountObject;
    xAxisOptions?: {
        type?: XAxisOptions['type'];
        uniqueNames?: false;
    };
    /**
     * Initialize the Data object with the given options
     *
     * @private
     * @function Highcharts.Data#init
     */
    init(dataOptions: DataOptions, chartOptions?: Partial<Options>, chart?: Chart): void;
    /**
     * Get the column distribution. For example, a line series takes a single
     * column for Y values. A range series takes two columns for low and high
     * values respectively, and an OHLC series takes four columns.
     *
     * @function Highcharts.Data#getColumnDistribution
     */
    getColumnDistribution(): asserts this is this & {
        valueCount: DataValueCountObject;
    };
    /**
     * When the data is parsed into columns, either by CSV, table, GS or direct
     * input, continue with other operations.
     *
     * @private
     * @function Highcharts.Data#dataFound
     */
    dataFound(): void;
    /**
     * Parse a CSV input string
     *
     * @function Highcharts.Data#parseCSV
     */
    parseCSV(inOptions?: DataOptions): NonNullable<Data['columns']>;
    /**
     * Parse a HTML table
     *
     * @function Highcharts.Data#parseTable
     */
    parseTable(): Array<DataColumnsArray>;
    /**
     * Fetch or refetch live data
     *
     * @function Highcharts.Data#fetchLiveData
     *
     * @return {boolean}
     *         The URLs that were tried can be found in the options
     */
    fetchLiveData(): boolean;
    /**
     * Parse a Google spreadsheet.
     *
     * @function Highcharts.Data#parseGoogleSpreadsheet
     *
     * @return {boolean}
     *         Always returns false, because it is an intermediate fetch.
     */
    parseGoogleSpreadsheet(): boolean;
    /**
     * Trim a string from whitespaces.
     *
     * @function Highcharts.Data#trim
     *
     * @param {string} str
     *        String to trim
     *
     * @param {boolean} [inside=false]
     *        Remove all spaces between numbers.
     *
     * @return {string}
     *         Trimed string
     */
    trim(str: string, inside?: boolean): string;
    /**
     * Parse numeric cells in to number types and date types in to true dates.
     *
     * @function Highcharts.Data#parseTypes
     */
    parseTypes(): void;
    /**
     * Parse a single column. Set properties like .isDatetime and .isNumeric.
     *
     * @function Highcharts.Data#parseColumn
     *
     * @param {Array<Highcharts.DataValueType>} column
     *        Column to parse
     *
     * @param {number} col
     *        Column index
     */
    parseColumn(column: NonNullable<Data['columns']>[number], col: number): void;
    /**
     * A collection of available date formats, extendable from the outside to
     * support custom date formats.
     *
     * @name Highcharts.Data#dateFormats
     * @type {Highcharts.Dictionary<Highcharts.DataDateFormatObject>}
     */
    dateFormats: Record<string, DataConverter.DateFormatObject>;
    /**
     * Parse a date and return it as a number. Overridable through
     * `options.parseDate`.
     *
     * @function Highcharts.Data#parseDate
     */
    parseDate(val: string): number;
    /**
     * Get the parsed data in a form that we can apply directly to the
     * `series.data` config. Array positions can be mapped using the
     * `series.keys` option.
     *
     * @example
     * const data = Highcharts.data({
     *   csv: document.getElementById('data').innerHTML
     * }).getData();
     *
     * @function Highcharts.Data#getData
     *
     * @return {Array<Array<DataValueType>>|undefined} Data rows
     */
    getData(): (Array<DataColumnsArray> | undefined);
    /**
     * A hook for working directly on the parsed columns
     *
     * @function Highcharts.Data#parsed
     */
    parsed(): (boolean | undefined);
    /**
     * If a complete callback function is provided in the options, interpret the
     * columns into a Highcharts options object.
     *
     * The function requires that the context has the `valueCount` property set.
     *
     * @function Highcharts.Data#complete
     */
    complete(this: Data & {
        valueCount: DataValueCountObject;
    }): void;
    /**
     * Sets properties directly on the xAxis object.
     *
     * @private
     */
    xAxisUpdateHandler(axis: Axis): void;
    /**
     * Updates the chart with new data options.
     *
     * @function Highcharts.Data#update
     *
     * @param {Highcharts.DataOptions} options
     *        The new data options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the new options are set.
     */
    update(options: DataOptions, redraw?: boolean): void;
}
/**
 * Creates a new SeriesBuilder. A SeriesBuilder consists of a number
 * of ColumnReaders that reads columns and give them a name.
 * Ex: A series builder can be constructed to read column 3 as 'x' and
 * column 7 and 8 as 'y1' and 'y2'.
 * The output would then be points/rows of the form {x: 11, y1: 22, y2: 33}
 *
 * The name of the builder is taken from the second column. In the above
 * example it would be the column with index 7.
 *
 * @private
 * @class
 * @name SeriesBuilder
 */
declare class SeriesBuilder {
    readers: Array<SeriesBuilderReaderObject>;
    pointIsArray: boolean;
    name?: string;
    /**
     * Populates readers with column indexes. A reader can be added without
     * a specific index and for those readers the index is taken sequentially
     * from the free columns (this is handled by the ColumnCursor instance).
     *
     * @function SeriesBuilder#populateColumns
     */
    populateColumns(freeIndexes: Array<number>): boolean;
    /**
     * Reads a row from the dataset and returns a point or array depending
     * on the names of the readers.
     *
     * @function SeriesBuilder#read<T>
     */
    read<T>(columns: Array<Array<T>>, rowIndex: number): (Array<T> | Record<string, T>);
    /**
     * Creates and adds ColumnReader from the given columnIndex and configName.
     * ColumnIndex can be undefined and in that case the reader will be given
     * an index when columns are populated.
     *
     * @function SeriesBuilder#addColumnReader
     */
    addColumnReader(columnIndex: (number | undefined), configName: string): void;
    /**
     * Returns an array of column indexes that the builder will use when
     * reading data.
     *
     * @function SeriesBuilder#getReferencedColumnIndexes
     */
    getReferencedColumnIndexes(): Array<number>;
    /**
     * Returns true if the builder has a reader for the given configName.
     *
     * @function SeriesBuilder#hasReader
     */
    hasReader(configName: string): (boolean | undefined);
}
export default Data;
