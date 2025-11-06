import type AnnotationChart from '../AnnotationChart';
import type AnnotationOptions from '../AnnotationOptions';
import type Chart from '../../../Core/Chart/Chart';
import type { HTMLDOMElement } from '../../../Core/Renderer/DOMElementType';
import BaseForm from '../../../Shared/BaseForm.js';
import PopupAnnotations from './PopupAnnotations.js';
import PopupIndicators from './PopupIndicators.js';
import PopupTabs from './PopupTabs.js';
interface InputAttributes {
    value?: string;
    type?: string;
    htmlFor?: string;
    labelClassName?: string;
}
export interface PopupFieldsObject {
    actionType: string;
    fields: PopupFieldsTree;
    linkedTo?: string;
    seriesId?: string;
    type?: string;
}
export interface PopupFieldsTree {
    [key: string]: (string | PopupFieldsTree);
}
declare class Popup extends BaseForm {
    constructor(parentDiv: HTMLDOMElement, iconsURL: string, chart?: Chart);
    chart?: Chart;
    type?: string;
    lang: Record<string, string>;
    /**
     * Create input with label.
     *
     * @private
     *
     * @param {string} option
     *        Chain of fields i.e params.styles.fontSize separated by the dot.
     *
     * @param {string} indicatorType
     *        Type of the indicator i.e. sma, ema...
     *
     * @param {HTMLDOMElement} parentDiv
     *        HTML parent element.
     *
     * @param {Highcharts.InputAttributes} inputAttributes
     *        Attributes of the input.
     *
     * @return {HTMLInputElement}
     *         Return created input element.
     */
    addInput(option: string, indicatorType: string, parentDiv: HTMLDOMElement, inputAttributes: InputAttributes): HTMLDOMElement;
    closeButtonEvents(): void;
    /**
     * Create button.
     * @private
     * @param {Highcharts.HTMLDOMElement} parentDiv
     * Container where elements should be added
     * @param {string} label
     * Text placed as button label
     * @param {string} type
     * add | edit | remove
     * @param {Function} callback
     * On click callback
     * @param {Highcharts.HTMLDOMElement} fieldsDiv
     * Container where inputs are generated
     * @return {Highcharts.HTMLDOMElement}
     * HTML button
     */
    addButton(parentDiv: HTMLDOMElement, label: string, type: string, fieldsDiv: HTMLDOMElement, callback?: Function): HTMLDOMElement;
    /**
     * Create content and show popup.
     * @private
     * @param {string} - type of popup i.e indicators
     * @param {Highcharts.Chart} - chart
     * @param {Highcharts.AnnotationsOptions} - options
     * @param {Function} - on click callback
     */
    showForm(type: string, chart: AnnotationChart, options: AnnotationOptions, callback: Function): void;
}
interface Popup {
    readonly annotations: typeof PopupAnnotations;
    readonly indicators: typeof PopupIndicators;
    readonly tabs: typeof PopupTabs;
}
export default Popup;
