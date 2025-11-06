import type AnnotationChart from '../AnnotationChart';
import type AnnotationOptions from '../AnnotationOptions';
import type Popup from './Popup';
/**
 * Create annotation simple form.
 * It contains fields with param names.
 * @private
 * @param {Highcharts.Chart} chart
 * Chart
 * @param {Object} options
 * Options
 * @param {Function} callback
 * On click callback
 * @param {boolean} [isInit]
 * If it is a form declared for init annotation
 */
declare function addForm(this: Popup, chart: AnnotationChart, options: AnnotationOptions, callback: Function, isInit?: boolean): void;
/**
 * Create annotation simple form. It contains two buttons
 * (edit / remove) and text label.
 * @private
 * @param {Highcharts.Chart} - chart
 * @param {Highcharts.AnnotationsOptions} - options
 * @param {Function} - on click callback
 */
declare function addToolbar(this: Popup, chart: AnnotationChart, options: AnnotationOptions, callback: Function): void;
declare const PopupAnnotations: {
    addForm: typeof addForm;
    addToolbar: typeof addToolbar;
};
export default PopupAnnotations;
