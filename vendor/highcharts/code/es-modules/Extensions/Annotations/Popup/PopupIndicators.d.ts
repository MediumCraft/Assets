import type AnnotationChart from '../AnnotationChart';
import type AnnotationOptions from '../AnnotationOptions';
import type Chart from '../../../Core/Chart/Chart';
import type { default as Popup } from './Popup';
/**
 * Create indicator's form. It contains two tabs (ADD and EDIT) with
 * content.
 * @private
 */
declare function addForm(this: Popup, chart: AnnotationChart, _options: AnnotationOptions, callback: Function): void;
/**
 * Get amount of indicators added to chart.
 * @private
 * @return {number} - Amount of indicators
 */
declare function getAmount(this: Chart): number;
declare const PopupIndicators: {
    addForm: typeof addForm;
    getAmount: typeof getAmount;
};
export default PopupIndicators;
