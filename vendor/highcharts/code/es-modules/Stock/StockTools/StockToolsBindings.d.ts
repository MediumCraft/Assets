/**
 *
 *  Events generator for Stock tools
 *
 *  (c) 2009-2025 Paweł Fus
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type NavigationBindingsOptions from '../../Extensions/Annotations/NavigationBindingsOptions';
declare module '../../Extensions/Annotations/NavigationBindingsBase' {
    interface NavigationBindingsBase {
        toggledAnnotations?: boolean;
        verticalCounter?: number;
    }
}
/**
 * @sample {highstock} stock/stocktools/custom-stock-tools-bindings
 *         Custom stock tools bindings
 *
 * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>}
 * @since        7.0.0
 * @optionparent navigation.bindings
 */
declare const StockToolsBindings: Record<string, NavigationBindingsOptions>;
export default StockToolsBindings;
