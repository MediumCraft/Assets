import type Exporting from '../Exporting/Exporting';
import type ExportingOptions from '../Exporting/ExportingOptions';
import type Options from '../../Core/Options';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Deprecated in favor of [Exporting.exportChart](https://api.highcharts.com/class-reference/Highcharts.Exporting#exportChart).
         *
         * @deprecated */
        exportChartLocal(exportingOptions?: ExportingOptions, chartOptions?: Options): Promise<void>;
    }
}
declare module '../../Core/GlobalsBase.d.ts' {
    interface GlobalsBase {
        Exporting: typeof Exporting;
    }
}
declare namespace OfflineExporting {
    /**
     * Composition function.
     *
     * @private
     * @function compose
     *
     * @param {ExportingClass} ExportingClass
     * Exporting class.
     *
     * @requires modules/exporting
     * @requires modules/offline-exporting
     */
    function compose(ExportingClass: typeof Exporting): void;
    /**
     * Get data URL to an image of an SVG and call download on it options
     * object:
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is `chart`.
     *
     * - **type:** File type of resulting download. Default is `image/png`.
     *
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `1`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand. Default is the exporting.libURL option of the global
     * Highcharts options pointing to our server.
     *
     * @function Highcharts.downloadSVGLocal
     * @deprecated
     *
     * @param {string} svg
     * The generated SVG
     *
     * @param {Highcharts.ExportingOptions} options
     * The exporting options
     *
     */
    function downloadSVGLocal(svg: string, options: ExportingOptions): Promise<void>;
}
export default OfflineExporting;
