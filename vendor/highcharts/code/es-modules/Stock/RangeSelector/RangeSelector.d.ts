import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type { RangeSelectorButtonOptions, RangeSelectorOptions } from './RangeSelectorOptions';
import type Time from '../../Core/Time';
import Axis from '../../Core/Axis/Axis.js';
import Chart from '../../Core/Chart/Chart.js';
import SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
declare module '../../Core/Axis/AxisBase' {
    interface AxisBase {
        newMax?: number;
        range?: (number | RangeSelectorButtonOptions);
    }
}
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        extraBottomMargin?: boolean;
        extraTopMargin?: boolean;
        fixedRange?: number;
        rangeSelector?: RangeSelector;
    }
}
declare module './RangeSelectorOptions' {
    interface RangeSelectorButtonOptions {
        _offsetMax?: number;
        _offsetMin?: number;
        _range?: number;
    }
}
/**
 * The range selector.
 *
 * @private
 * @class
 * @name Highcharts.RangeSelector
 * @param {Highcharts.Chart} chart
 */
declare class RangeSelector {
    isDirty: boolean;
    /**
     * @private
     */
    static compose(AxisClass: typeof Axis, ChartClass: typeof Chart): void;
    constructor(chart: Chart);
    buttons: Array<SVGElement>;
    isCollapsed?: boolean;
    buttonGroup?: SVGElement;
    buttonOptions: Array<RangeSelectorButtonOptions>;
    chart: Chart;
    deferredYTDClick?: number;
    div?: HTMLDOMElement;
    dropdown?: HTMLSelectElement;
    dropdownLabel: SVGElement;
    eventsToUnbind?: Array<Function>;
    forcedDataGrouping?: boolean;
    frozenStates?: boolean;
    group?: SVGElement;
    hasVisibleDropdown?: boolean;
    initialButtonGroupWidth: number;
    inputGroup?: SVGElement;
    isActive?: boolean;
    maxDateBox?: SVGElement;
    maxInput?: HTMLInputElement;
    maxLabel?: SVGElement;
    minDateBox?: SVGElement;
    minInput?: HTMLInputElement;
    minLabel?: SVGElement;
    options: RangeSelectorOptions;
    rendered?: boolean;
    selected?: number;
    zoomText: SVGElement;
    /**
     * The method to run when one of the buttons in the range selectors is
     * clicked
     *
     * @private
     * @function Highcharts.RangeSelector#clickButton
     * @param {number} i
     *        The index of the button
     * @param {boolean} [redraw]
     */
    clickButton(i: number, redraw?: boolean): void;
    /**
     * Set the selected option. This method only sets the internal flag, it
     * doesn't update the buttons or the actual zoomed range.
     *
     * @private
     * @function Highcharts.RangeSelector#setSelected
     * @param {number} [selected]
     */
    setSelected(selected?: number): void;
    /**
     * Initialize the range selector
     *
     * @private
     * @function Highcharts.RangeSelector#init
     * @param {Highcharts.Chart} chart
     */
    init(chart: Chart): void;
    /**
     * Dynamically update the range selector buttons after a new range has been
     * set
     *
     * @private
     * @function Highcharts.RangeSelector#updateButtonStates
     */
    updateButtonStates(): void;
    /**
     * Compute and cache the range for an individual button
     *
     * @private
     * @function Highcharts.RangeSelector#computeButtonRange
     * @param {Highcharts.RangeSelectorButtonsOptions} rangeOptions
     */
    computeButtonRange(rangeOptions: RangeSelectorButtonOptions): void;
    /**
     * Get the unix timestamp of a HTML input for the dates
     *
     * @private
     * @function Highcharts.RangeSelector#getInputValue
     */
    getInputValue(name: string): number;
    /**
     * Set the internal and displayed value of a HTML input for the dates
     *
     * @private
     * @function Highcharts.RangeSelector#setInputValue
     */
    setInputValue(name: string, inputTime?: number): void;
    /**
     * Set the min and max value of a HTML input for the dates
     *
     * @private
     * @function Highcharts.RangeSelector#setInputExtremes
     */
    setInputExtremes(name: string, min: number, max: number): void;
    /**
     * @private
     * @function Highcharts.RangeSelector#showInput
     * @param {string} name
     */
    showInput(name: ('min' | 'max')): void;
    /**
     * @private
     * @function Highcharts.RangeSelector#hideInput
     * @param {string} name
     */
    hideInput(name: ('min' | 'max')): void;
    /**
     * @private
     * @function Highcharts.RangeSelector#defaultInputDateParser
     */
    defaultInputDateParser(inputDate: string, useUTC: boolean, time?: Time): number;
    /**
     * Draw either the 'from' or the 'to' HTML input box of the range selector
     *
     * @private
     * @function Highcharts.RangeSelector#drawInput
     */
    drawInput(name: ('min' | 'max')): RangeSelector.InputElements;
    /**
     * Get the position of the range selector buttons and inputs. This can be
     * overridden from outside for custom positioning.
     *
     * @private
     * @function Highcharts.RangeSelector#getPosition
     */
    getPosition(): Record<string, number>;
    /**
     * Get the extremes of YTD. Will choose dataMax if its value is lower than
     * the current timestamp. Will choose dataMin if its value is higher than
     * the timestamp for the start of current year.
     *
     * @private
     * @function Highcharts.RangeSelector#getYTDExtremes
     * @return {*}
     * Returns min and max for the YTD
     */
    getYTDExtremes(dataMax: number, dataMin: number): RangeSelector.RangeObject;
    createElements(): void;
    /**
     * Create the input elements and its group.
     *
     */
    createInputs(): void;
    /**
     * Render the range selector including the buttons and the inputs. The first
     * time render is called, the elements are created and positioned. On
     * subsequent calls, they are moved and updated.
     *
     * @private
     * @function Highcharts.RangeSelector#render
     * @param {number} [min]
     *        X axis minimum
     * @param {number} [max]
     *        X axis maximum
     */
    render(min?: number, max?: number): void;
    /**
     * Render the range buttons. This only runs the first time, later the
     * positioning is laid out in alignElements.
     *
     * @private
     * @function Highcharts.RangeSelector#renderButtons
     */
    renderButtons(): void;
    private createButtons;
    private createButton;
    /**
     * Align the elements horizontally and vertically.
     *
     * @private
     * @function Highcharts.RangeSelector#alignElements
     */
    alignElements(): void;
    /**
     * @private
     */
    redrawElements(): void;
    /**
     * Align the button group horizontally and vertically.
     *
     * @private
     * @function Highcharts.RangeSelector#alignButtonGroup
     * @param {number} xOffsetForExportButton
     * @param {number} [width]
     */
    alignButtonGroup(xOffsetForExportButton: number, width?: number): void;
    /**
     * @private
     * @function Highcharts.RangeSelector#positionButtons
     */
    positionButtons(): void;
    maxButtonWidth: () => number;
    /**
     * Handle collision between the button group and the input group
     *
     * @private
     * @function Highcharts.RangeSelector#handleCollision
     *
     * @param  {number} xOffsetForExportButton
     *                  The X offset of the group required to make room for the
     *                  exporting button
     */
    handleCollision(xOffsetForExportButton: number): void;
    /**
     * Collapse the buttons and show the select element.
     *
     * @private
     * @function Highcharts.RangeSelector#collapseButtons
     * @param {number} xOffsetForExportButton
     */
    collapseButtons(): void;
    /**
     * Show all the buttons and hide the select element.
     *
     * @private
     * @function Highcharts.RangeSelector#expandButtons
     */
    expandButtons(): void;
    /**
     * Position the select element on top of the button.
     *
     * @private
     * @function Highcharts.RangeSelector#showDropdown
     */
    showDropdown(): void;
    /**
     * @private
     * @function Highcharts.RangeSelector#hideDropdown
     */
    hideDropdown(): void;
    /**
     * Extracts height of range selector
     *
     * @private
     * @function Highcharts.RangeSelector#getHeight
     * @return {number}
     * Returns rangeSelector height
     */
    getHeight(): number;
    /**
     * Detect collision with title or subtitle
     *
     * @private
     * @function Highcharts.RangeSelector#titleCollision
     * @return {boolean}
     * Returns collision status
     */
    titleCollision(chart: Chart): boolean;
    /**
     * Update the range selector with new options
     *
     * @private
     * @function Highcharts.RangeSelector#update
     * @param {Highcharts.RangeSelectorOptions} options
     */
    update(options: RangeSelectorOptions, redraw?: boolean): void;
    /**
     * Destroys allocated elements.
     *
     * @private
     * @function Highcharts.RangeSelector#destroy
     */
    destroy(): void;
}
interface RangeSelector {
    inputTypeFormats: Record<string, string>;
}
declare namespace RangeSelector {
    interface InputElements {
        dateBox: SVGElement;
        input: HTMLInputElement;
        label: SVGElement;
    }
    interface RangeObject {
        max: number;
        min: number;
    }
}
export default RangeSelector;
