import type Exporting from '../Exporting/Exporting';
import type Series from '../../Core/Series/Series';
import AST from '../../Core/Renderer/HTML/AST.js';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Deprecated in favor of [Exporting.downloadCSV](https://api.highcharts.com/class-reference/Highcharts.Exporting#downloadCSV).
         *
         * @deprecated */
        downloadCSV(): void;
        /**
         * Deprecated in favor of [Exporting.downloadXLS](https://api.highcharts.com/class-reference/Highcharts.Exporting#downloadXLS).
         *
         * @deprecated */
        downloadXLS(): void;
        /**
         * Deprecated in favor of [Exporting.getCSV](https://api.highcharts.com/class-reference/Highcharts.Exporting#getCSV).
         *
         * @deprecated */
        getCSV(useLocalDecimalPoint?: boolean): (string | undefined);
        /**
         * Deprecated in favor of [Exporting.getDataRows](https://api.highcharts.com/class-reference/Highcharts.Exporting#getDataRows).
         *
         * @deprecated */
        getDataRows(multiLevelHeaders?: boolean): (Array<Array<(number | string)>> | undefined);
        /**
         * Deprecated in favor of [Exporting.getTable](https://api.highcharts.com/class-reference/Highcharts.Exporting#getTable).
         *
         * @deprecated */
        getTable(useLocalDecimalPoint?: boolean): (string | undefined);
        /**
         * Deprecated in favor of [Exporting.getTableAST](https://api.highcharts.com/class-reference/Highcharts.Exporting#getTableAST).
         *
         * @deprecated */
        getTableAST(useLocalDecimalPoint?: boolean): (AST.Node | undefined);
        /**
         * Deprecated in favor of [Exporting.hideData](https://api.highcharts.com/class-reference/Highcharts.Exporting#hideData).
         *
         * @deprecated */
        hideData(): void;
        /**
         * Deprecated in favor of [Exporting.toggleDataTable](https://api.highcharts.com/class-reference/Highcharts.Exporting#toggleDataTable).
         *
         * @deprecated */
        toggleDataTable(show?: boolean): void;
        /**
         * Deprecated in favor of [Exporting.viewData](https://api.highcharts.com/class-reference/Highcharts.Exporting#viewData).
         *
         * @deprecated */
        viewData(): void;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        exportKey?: string;
        keyToAxis?: Record<string, string>;
    }
}
declare module '../../Extensions/Exporting/ExportingBase' {
    interface ExportingBase {
        ascendingOrderInTable?: boolean;
        dataTableDiv?: HTMLDivElement;
        isDataTableVisible?: boolean;
        /** @requires modules/export-data */
        downloadCSV(): void;
        /** @requires modules/export-data */
        downloadXLS(): void;
        /** @requires modules/export-data */
        getCSV(useLocalDecimalPoint?: boolean): string;
        /** @requires modules/export-data */
        getDataRows(multiLevelHeaders?: boolean): Array<Array<(number | string)>>;
        /** @requires modules/export-data */
        getTable(useLocalDecimalPoint?: boolean): string;
        /** @requires modules/export-data */
        getTableAST(useLocalDecimalPoint?: boolean): AST.Node;
        /** @requires modules/export-data */
        hideData(): void;
        /** @requires modules/export-data */
        toggleDataTable(show?: boolean): void;
        /** @requires modules/export-data */
        viewData(): void;
        /** @requires modules/export-data */
        wrapLoading(fn: Function): void;
    }
}
declare namespace ExportData {
    /**
     * Composition function.
     *
     * @private
     * @function Highcharts.Exporting#compose
     *
     * @param {ChartClass} ChartClass
     * Chart class.
     * @param {ExportingClass} ExportingClass
     * Exporting class.
     * @param {SeriesClass} SeriesClass
     * Series class.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function compose(ChartClass: typeof Chart, ExportingClass: typeof Exporting, SeriesClass: typeof Series): void;
}
export default ExportData;
