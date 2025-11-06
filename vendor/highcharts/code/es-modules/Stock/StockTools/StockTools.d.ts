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
import type AxisType from '../../Core/Axis/AxisType';
import NavigationBindings from '../../Extensions/Annotations/NavigationBindings.js';
import STU from './StockToolsUtilities.js';
declare module '../../Extensions/Annotations/NavigationBindingsBase' {
    interface NavigationBindingsBase {
        /** @requires modules/stock-tools */
        utils: Partial<typeof STU>;
        /** @requires modules/stock-tools */
        getYAxisPositions(yAxes: Array<AxisType>, plotHeight: number, defaultHeight: number, removedYAxisProps?: AxisPositions): YAxisPositions;
        /** @requires modules/stock-tools */
        getYAxisResizers(yAxes: Array<AxisType>): Array<NavigationBindingsResizerObject>;
        /** @requires modules/stock-tools */
        recalculateYAxisPositions(positions: Array<Record<string, number>>, changedSpace: number, modifyHeight?: boolean, adder?: number): Array<Record<string, number>>;
        /** @requires modules/stock-tools */
        resizeYAxes(removedYAxisProps?: AxisPositions): void;
    }
}
export interface AxisPositions {
    top: string;
    height: string;
}
export interface NavigationBindingsResizerObject {
    controlledAxis?: Record<string, Array<string | number>>;
    enabled: boolean;
}
export interface YAxisPositions {
    positions: Array<Record<string, number>>;
    allAxesHeight: number;
}
/**
 * @private
 */
declare function compose(NavigationBindingsClass: typeof NavigationBindings): void;
declare const StockTools: {
    compose: typeof compose;
};
export default StockTools;
