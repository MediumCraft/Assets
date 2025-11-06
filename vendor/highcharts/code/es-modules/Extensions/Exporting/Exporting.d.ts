import type AnimationOptions from '../../Core/Animation/AnimationOptions';
import type { ExportingOptions, ExportingButtonOptions } from './ExportingOptions';
import type ExportingBase from './ExportingBase';
import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type Options from '../../Core/Options';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import type SVGRenderer from '../../Core/Renderer/SVG/SVGRenderer';
import Chart from '../../Core/Chart/Chart.js';
declare module '../../Core/Axis/AxisOptions' {
    interface AxisOptions {
        internalKey?: string;
    }
}
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        exporting?: Exporting;
        /**
         * Deprecated in favor of [Exporting.exportChart](https://api.highcharts.com/class-reference/Highcharts.Exporting#exportChart).
         *
         * @deprecated */
        exportChart(exportingOptions?: ExportingOptions, chartOptions?: Options): Promise<void>;
        /**
         * Deprecated in favor of [Exporting.getChartHTML](https://api.highcharts.com/class-reference/Highcharts.Exporting#getChartHTML).
         *
         * @deprecated */
        getChartHTML(applyStyleSheets?: boolean): (string | void);
        /**
         * Deprecated in favor of [Exporting.getFilename](https://api.highcharts.com/class-reference/Highcharts.Exporting#getFilename).
         *
         * @deprecated */
        getFilename(): (string | void);
        /**
         * Deprecated in favor of [Exporting.getSVG](https://api.highcharts.com/class-reference/Highcharts.Exporting#getSVG).
         *
         * @deprecated */
        getSVG(chartOptions?: Partial<Options>): (string | void);
        /**
         * Deprecated in favor of [Exporting.print](https://api.highcharts.com/class-reference/Highcharts.Exporting#print).
         *
         * @deprecated */
        print(): void;
    }
}
declare module '../../Core/Chart/ChartOptions' {
    interface ChartEventsOptions {
        afterPrint?: Exporting.AfterPrintCallbackFunction;
        beforePrint?: Exporting.BeforePrintCallbackFunction;
    }
}
declare module '../../Core/GlobalsBase.d.ts' {
    interface GlobalsBase {
        /**
         * Deprecated in favor of [Exporting.downloadSVG](https://api.highcharts.com/class-reference/Highcharts.Exporting#downloadSVG).
         *
         * @deprecated */
        downloadSVGLocal: Exporting.DownloadSVGFunction;
    }
}
export declare const domurl: {
    new (url: string | URL, base?: string | URL): URL;
    prototype: URL;
    canParse(url: string | URL, base?: string | URL): boolean;
    createObjectURL(obj: Blob | MediaSource): string;
    parse(url: string | URL, base?: string | URL): URL | null;
    revokeObjectURL(url: string): void;
};
/**
 * The Exporting class provides methods for exporting charts to images. If the
 * exporting module is loaded, this class is instantiated on the chart and
 * available through the `chart.exporting` property. Read more about the
 * [exporting module](https://www.highcharts.com/docs/export-module-overview).
 *
 * @class
 * @name Highcharts.Exporting
 *
 * @param {Highcharts.Chart} chart
 * The chart instance.
 *
 */
declare class Exporting {
    constructor(chart: Chart, options: ExportingOptions);
    static inlineAllowlist: Array<RegExp>;
    static inlineDenylist: Array<RegExp>;
    static inlineToAttributes: Array<string>;
    static loadEventDeferDelay: number;
    static objectURLRevoke?: boolean;
    static printingChart?: Chart;
    static unstyledElements: Array<string>;
    /**
     * Make hyphenated property names out of camelCase.
     *
     * @private
     * @static
     * @function Highcharts.Exporting#hyphenate
     *
     * @param {string} property
     * Property name in camelCase.
     *
     * @return {string}
     * Hyphenated property name.
     *
     * @requires modules/exporting
     */
    static hyphenate(property: string): string;
    /**
     * Get data:URL from image URL.
     *
     * @private
     * @static
     * @async
     * @function Highcharts.Exporting#imageToDataURL
     *
     * @param {string} imageURL
     * The address or URL of the image.
     * @param {number} scale
     * The scale of the image.
     * @param {string} imageType
     * The export type of the image.
     *
     * @requires modules/exporting
     */
    static imageToDataURL(imageURL: string, scale: number, imageType: string): Promise<string>;
    private static fetchCSS;
    private static handleStyleSheet;
    private static fetchStyleSheets;
    static inlineFonts(svg: SVGSVGElement): Promise<SVGSVGElement>;
    /**
     * Loads an image from the provided URL.
     *
     * @private
     * @static
     * @function Highcharts.Exporting#loadImage
     *
     * @param {string} imageURL
     * The address or URL of the image.
     *
     * @return {Promise<HTMLImageElement>}
     * Returns a Promise that resolves with the loaded HTMLImageElement.
     *
     * @requires modules/exporting
     */
    static loadImage(imageURL: string): Promise<HTMLImageElement>;
    /**
     * Prepares and returns the image export options with default values where
     * necessary.
     *
     * @private
     * @static
     * @function Highcharts.Exporting#prepareImageOptions
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     *
     * @return {Exporting.ImageOptions}
     * The finalized image export options with ensured values.
     *
     * @requires modules/exporting
     */
    static prepareImageOptions(exportingOptions: ExportingOptions): Exporting.ImageOptions;
    /**
     * A collection of fixes on the produced SVG to account for expand
     * properties and browser bugs. Returns a cleaned SVG.
     *
     * @private
     * @static
     * @function Highcharts.Exporting#sanitizeSVG
     *
     * @param {string} svg
     * SVG code to sanitize.
     * @param {Highcharts.Options} options
     * Chart options to apply.
     *
     * @return {string}
     * Sanitized SVG code.
     *
     * @requires modules/exporting
     */
    static sanitizeSVG(svg: string, options: Options): string;
    /**
     * Get blob URL from SVG code. Falls back to normal data URI.
     *
     * @private
     * @static
     * @function Highcharts.Exporting#svgToDataURL
     *
     * @param {string} svg
     * SVG to get the URL from.
     *
     * @return {string}
     * The data URL.
     *
     * @requires modules/exporting
     */
    static svgToDataURL(svg: string): string;
    btnCount: number;
    buttonOffset: number;
    chart: Chart;
    contextMenuEl?: Exporting.DivElement;
    divElements: Array<(Exporting.DivElement | null)>;
    events?: Array<Function>;
    group?: SVGElement;
    isDirty?: boolean;
    isPrinting?: boolean;
    menuHeight?: number;
    menuWidth?: number;
    openMenu?: boolean;
    options: ExportingOptions;
    printReverseInfo?: Exporting.PrintReverseInfoObject;
    svgElements: Array<(SVGElement | undefined)>;
    /**
     * Add the export button to the chart, with options.
     *
     * @private
     * @function Highcharts.Exporting#addButton
     *
     * @param {Highcharts.ExportingButtonOptions} options
     * The exporting button options object.
     *
     * @requires modules/exporting
     */
    addButton(options: ExportingButtonOptions): void;
    /**
     * Clean up after printing a chart.
     *
     * @private
     * @function Highcharts.Exporting#afterPrint
     *
     * @emits Highcharts.Chart#event:afterPrint
     *
     * @requires modules/exporting
     */
    afterPrint(): void;
    /**
     * Prepare chart and document before printing a chart.
     *
     * @private
     * @function Highcharts.Exporting#beforePrint
     *
     * @emits Highcharts.Chart#event:beforePrint
     *
     * @requires modules/exporting
     */
    beforePrint(): void;
    /**
     * Display a popup menu for choosing the export type.
     *
     * @private
     * @function Highcharts.Exporting#contextMenu
     *
     * @param {string} className
     * An identifier for the menu.
     * @param {Array<(string | Highcharts.ExportingMenuObject)>} items
     * A collection with text and onclicks for the items.
     * @param {number} x
     * The x position of the opener button.
     * @param {number} y
     * The y position of the opener button.
     * @param {number} width
     * The width of the opener button.
     * @param {number} height
     * The height of the opener button.
     * @param {SVGElement} button
     * The SVG button element.
     *
     * @emits Highcharts.Chart#event:exportMenuHidden
     * @emits Highcharts.Chart#event:exportMenuShown
     *
     * @requires modules/exporting
     */
    contextMenu(className: string, items: Array<(string | Exporting.MenuObject)>, x: number, y: number, width: number, height: number, button: SVGElement): void;
    /**
     * Destroy the export buttons.
     *
     * @private
     * @function Highcharts.Exporting#destroy
     *
     * @param {global.Event} [e]
     * Event object.
     *
     * @requires modules/exporting
     */
    destroy(e?: Event): void;
    /**
     * Get data URL to an image of an SVG and call download on its options
     * object:
     *
     * - **filename:** Name of resulting downloaded file without extension.
     * Default is based on the chart title.
     * - **type:** File type of resulting download. Default is `image/png`.
     * - **scale:** Scaling factor of downloaded image compared to source.
     * Default is `2`.
     * - **libURL:** URL pointing to location of dependency scripts to download
     * on demand. Default is the exporting.libURL option of the global
     * Highcharts options pointing to our server.
     *
     * @async
     * @private
     * @function Highcharts.Exporting#downloadSVG
     *
     * @param {string} svg
     * The generated SVG.
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     *
     * @requires modules/exporting
     */
    downloadSVG(svg: string, exportingOptions: ExportingOptions): Promise<void>;
    /**
     * Submit an SVG version of the chart along with some parameters for local
     * conversion (PNG, JPEG, and SVG) or conversion on a server (PDF).
     *
     * @sample highcharts/members/chart-exportchart/
     * Export with no options
     * @sample highcharts/members/chart-exportchart-filename/
     * PDF type and custom filename
     * @sample highcharts/exporting/menuitemdefinitions-webp/
     * Export to WebP
     * @sample highcharts/members/chart-exportchart-custom-background/
     * Different chart background in export
     * @sample stock/members/chart-exportchart/
     * Export with Highcharts Stock
     *
     * @async
     * @function Highcharts.Exporting#exportChart
     *
     * @param {Highcharts.ExportingOptions} [exportingOptions]
     * Exporting options in addition to those defined in
     * [exporting](https://api.highcharts.com/highcharts/exporting).
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the exported chart. For example a different
     * background color can be added here, or `dataLabels` for export only.
     *
     * @requires modules/exporting
     */
    exportChart(exportingOptions?: ExportingOptions, chartOptions?: Options): Promise<void>;
    /**
     * Handles the fallback to the export server when a local export fails.
     *
     * @private
     * @async
     * @function Highcharts.Exporting#fallbackToServer
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     * @param {Error} err
     * The error that caused the local export to fail.
     *
     * @return {Promise<void>}
     * A promise that resolves when the fallback process is complete.
     *
     * @requires modules/exporting
     */
    fallbackToServer(exportingOptions: ExportingOptions, err: Error): Promise<void>;
    /**
     * Return the unfiltered innerHTML of the chart container. Used as hook for
     * plugins. In styled mode, it also takes care of inlining CSS style rules.
     *
     * @see Chart#getSVG
     *
     * @function Highcharts.Exporting#getChartHTML
     *
     * @param {boolean} [applyStyleSheets]
     * whether or not to apply the style sheets.
     *
     * @return {string}
     * The unfiltered SVG of the chart.
     *
     * @requires modules/exporting
     */
    getChartHTML(applyStyleSheets?: boolean): string;
    /**
     * Get the default file name used for exported charts. By default it creates
     * a file name based on the chart title.
     *
     * @function Highcharts.Exporting#getFilename
     *
     * @return {string}
     * A file name without extension.
     *
     * @requires modules/exporting
     */
    getFilename(): string;
    /**
     * Return an SVG representation of the chart.
     *
     * @sample highcharts/members/chart-getsvg/
     * View the SVG from a button
     *
     * @function Highcharts.Exporting#getSVG
     *
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the generated SVG representation. For
     * collections like `xAxis`, `yAxis` or `series`, the additional options is
     * either merged in to the original item of the same `id`, or to the first
     * item if a common id is not found.
     *
     * @return {string}
     * The SVG representation of the rendered chart.
     *
     * @emits Highcharts.Chart#event:getSVG
     *
     * @requires modules/exporting
     */
    getSVG(chartOptions?: Partial<Options>): string;
    /**
     * Gets the SVG for export using the getSVG function with additional
     * options.
     *
     * @private
     * @function Highcharts.Exporting#getSVGForExport
     *
     * @param {Highcharts.ExportingOptions} [exportingOptions]
     * The exporting options.
     * @param {Highcharts.Options} [chartOptions]
     * Additional chart options for the exported chart.
     *
     * @return {string}
     * The SVG representation of the rendered chart.
     *
     * @requires modules/exporting
     */
    getSVGForExport(exportingOptions?: ExportingOptions, chartOptions?: Partial<Options>): string;
    /**
     * Analyze inherited styles from stylesheets and add them inline.
     *
     * @private
     * @function Highcharts.Exporting#inlineStyles
     *
     * @todo What are the border styles for text about? In general, text has a
     * lot of properties.
     *
     * @todo Make it work with IE9 and IE10.
     *
     * @requires modules/exporting
     */
    inlineStyles(): void;
    /**
     * Get SVG of chart prepared for client side export. This converts embedded
     * images in the SVG to data URIs. It requires the regular exporting module.
     * The options and chartOptions arguments are passed to the getSVGForExport
     * function.
     *
     * @private
     * @async
     * @function Highcharts.Exporting#localExport
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options.
     * @param {Highcharts.Options} chartOptions
     * Additional chart options for the exported chart.
     *
     * @return {Promise<string>}
     * The sanitized SVG.
     *
     * @requires modules/exporting
     */
    localExport(exportingOptions: ExportingOptions, chartOptions: Partial<Options>): Promise<string | void>;
    /**
     * Move the chart container(s) to another div.
     *
     * @private
     * @function Highcharts.Exporting#moveContainers
     *
     * @param {Highcharts.HTMLDOMElement} moveTo
     * Move target.
     *
     * @requires modules/exporting
     */
    moveContainers(moveTo: HTMLDOMElement): void;
    /**
     * Clears away other elements in the page and prints the chart as it is
     * displayed. By default, when the exporting module is enabled, a context
     * button with a drop down menu in the upper right corner accesses this
     * function.
     *
     * @sample highcharts/members/chart-print/
     * Print from a HTML button
     *
     * @function Highcharts.Exporting#print
     *
     * @emits Highcharts.Chart#event:beforePrint
     * @emits Highcharts.Chart#event:afterPrint
     *
     * @requires modules/exporting
     */
    print(): void;
    /**
     * Add the buttons on chart load.
     *
     * @private
     * @function Highcharts.Exporting#render
     *
     * @requires modules/exporting
     */
    render(): void;
    /**
     * Resolve CSS variables into hex colors.
     *
     * @private
     * @function Highcharts.Exporting#resolveCSSVariables
     *
     * @requires modules/exporting
     */
    resolveCSSVariables(): void;
    /**
     * Updates the exporting object with the provided exporting options.
     *
     * @private
     * @function Highcharts.Exporting#update
     *
     * @param {Highcharts.ExportingOptions} exportingOptions
     * The exporting options to update with.
     * @param {boolean} [redraw=true]
     * Whether to redraw or not.
     *
     * @requires modules/exporting
     */
    update(exportingOptions: ExportingOptions, redraw?: boolean): void;
}
interface Exporting extends ExportingBase {
}
declare namespace Exporting {
    interface AfterPrintCallbackFunction {
        (chart: Chart, event: Event): void;
    }
    interface BeforePrintCallbackFunction {
        (chart: Chart, event: Event): void;
    }
    interface ChartAdditions {
        update(options: ExportingOptions, redraw?: boolean): void;
    }
    interface DivElement extends HTMLDOMElement {
        hideTimer?: number;
        hideMenu(): void;
    }
    interface DownloadSVGFunction {
        (svg: string, exportingOptions: ExportingOptions): Promise<void>;
    }
    interface DownloadSVGEventArgs {
        svg: string;
        exportingOptions: ExportingOptions;
        exporting?: Exporting;
        defaultPrevented?: boolean;
        preventDefault?: Function;
    }
    interface ErrorCallbackFunction {
        (options: ExportingOptions, err: Error): void;
    }
    interface ExportEventCallback<T> {
        (this: T, eventArguments: (AnyRecord | Event)): (boolean | void | Promise<boolean | void>);
    }
    interface ImageOptions {
        type: string;
        filename: string;
        scale: number;
        libURL: string;
    }
    interface MenuObject {
        onclick?: ExportEventCallback<Chart>;
        separator?: boolean;
        text?: string;
        textKey?: string;
    }
    interface PrintReverseInfoObject {
        childNodes: NodeListOf<ChildNode>;
        origDisplay: Array<(string | null)>;
        resetParams?: [
            (number | null)?,
            (number | null)?,
            (boolean | Partial<AnimationOptions>)?
        ];
    }
    /**
     * Composition function.
     *
     * @private
     * @function Highcharts.Exporting#compose
     *
     * @param {ChartClass} ChartClass
     * Chart class.
     * @param {SVGRendererClass} SVGRendererClass
     * SVGRenderer class.
     *
     * @requires modules/exporting
     */
    function compose(ChartClass: typeof Chart, SVGRendererClass: typeof SVGRenderer): void;
}
export default Exporting;
