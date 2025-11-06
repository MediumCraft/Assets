import type AnnotationChart from '../AnnotationChart';
import type Popup from './Popup';
/**
 * Init tabs. Create tab menu items, tabs containers
 * @private
 * @param {Highcharts.Chart} chart
 * Reference to current chart
 */
declare function init(this: Popup, chart: AnnotationChart): void;
declare const PopupTabs: {
    init: typeof init;
};
export default PopupTabs;
