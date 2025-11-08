/**
 * @license Highstock JS v12.4.0-modified (2025-11-07)
 * @module highcharts/modules/stock-tools
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2025 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__accessibility_src_js_18c0d6a2__ from "./accessibility.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__datagrouping_src_js_902e97be__ from "./datagrouping.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// ./code/es-modules/Core/Chart/ChartNavigationComposition.js
/**
 *
 *  (c) 2010-2025 Paweł Fus
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Composition
 *
 * */
var ChartNavigationComposition;
(function (ChartNavigationComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * @private
     */
    function compose(chart) {
        if (!chart.navigation) {
            chart.navigation = new Additions(chart);
        }
        return chart;
    }
    ChartNavigationComposition.compose = compose;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Initializes `chart.navigation` object which delegates `update()` methods
     * to all other common classes (used in exporting and navigationBindings).
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructor
         *
         * */
        constructor(chart) {
            this.updates = [];
            this.chart = chart;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Registers an `update()` method in the `chart.navigation` object.
         *
         * @private
         * @param {UpdateFunction} updateFn
         * The `update()` method that will be called in `chart.update()`.
         */
        addUpdate(updateFn) {
            this.chart.navigation.updates.push(updateFn);
        }
        /**
         * @private
         */
        update(options, redraw) {
            this.updates.forEach((updateFn) => {
                updateFn.call(this.chart, options, redraw);
            });
        }
    }
    ChartNavigationComposition.Additions = Additions;
})(ChartNavigationComposition || (ChartNavigationComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chart_ChartNavigationComposition = (ChartNavigationComposition);

;// external ["../highcharts.src.js","default","Templating"]
const external_highcharts_src_js_default_Templating_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Templating;
var external_highcharts_src_js_default_Templating_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Templating_namespaceObject);
;// ./code/es-modules/Extensions/Annotations/NavigationBindingsUtilities.js
/* *
 *
 *  (c) 2009-2025 Highsoft, Black Label
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defined, isNumber, pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * Define types for editable fields per annotation. There is no need to define
 * numbers, because they won't change their type to string.
 * @private
 */
const annotationsFieldsTypes = {
    backgroundColor: 'string',
    borderColor: 'string',
    borderRadius: 'string',
    color: 'string',
    fill: 'string',
    fontSize: 'string',
    labels: 'string',
    name: 'string',
    stroke: 'string',
    title: 'string'
};
/* *
 *
 *  Functions
 *
 * */
/**
 * Returns the first xAxis or yAxis that was clicked with its value.
 *
 * @private
 *
 * @param {Array<Highcharts.PointerAxisCoordinateObject>} coords
 *        All the chart's x or y axes with a current pointer's axis value.
 *
 * @return {Highcharts.PointerAxisCoordinateObject}
 *         Object with a first found axis and its value that pointer
 *         is currently pointing.
 */
function getAssignedAxis(coords) {
    return coords.filter((coord) => {
        const extremes = coord.axis.getExtremes(), axisMin = extremes.min, axisMax = extremes.max, 
        // Correct axis edges when axis has series
        // with pointRange (like column)
        minPointOffset = pick(coord.axis.minPointOffset, 0);
        return isNumber(axisMin) && isNumber(axisMax) &&
            coord.value >= (axisMin - minPointOffset) &&
            coord.value <= (axisMax + minPointOffset) &&
            // Don't count navigator axis
            !coord.axis.options.isInternal;
    })[0]; // If the axes overlap, return the first axis that was found.
}
/**
 * Get field type according to value
 *
 * @private
 *
 * @param {'boolean'|'number'|'string'} value
 * Atomic type (one of: string, number, boolean)
 *
 * @return {'checkbox'|'number'|'text'}
 * Field type (one of: text, number, checkbox)
 */
function getFieldType(key, value) {
    const predefinedType = annotationsFieldsTypes[key];
    let fieldType = typeof value;
    if (defined(predefinedType)) {
        fieldType = predefinedType;
    }
    return {
        'string': 'text',
        'number': 'number',
        'boolean': 'checkbox'
    }[fieldType];
}
/* *
 *
 *  Default Export
 *
 * */
const NavigationBindingUtilities = {
    annotationsFieldsTypes,
    getAssignedAxis,
    getFieldType
};
/* harmony default export */ const NavigationBindingsUtilities = (NavigationBindingUtilities);

;// ./code/es-modules/Extensions/Annotations/NavigationBindingsDefaults.js
/* *
 *
 *  (c) 2009-2025 Highsoft, Black Label
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { getAssignedAxis: NavigationBindingsDefaults_getAssignedAxis } = NavigationBindingsUtilities;

const { isNumber: NavigationBindingsDefaults_isNumber, merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * @optionparent lang
 */
const lang = {
    /**
     * Configure the Popup strings in the chart. Requires the
     * `annotations.js` or `annotations-advanced.src.js` module to be
     * loaded.
     * @since   7.0.0
     * @product highcharts highstock
     */
    navigation: {
        /**
         * Translations for all field names used in popup.
         *
         * @product highcharts highstock
         */
        popup: {
            simpleShapes: 'Simple shapes',
            lines: 'Lines',
            circle: 'Circle',
            ellipse: 'Ellipse',
            rectangle: 'Rectangle',
            label: 'Label',
            shapeOptions: 'Shape options',
            typeOptions: 'Details',
            fill: 'Fill',
            format: 'Text',
            strokeWidth: 'Line width',
            stroke: 'Line color',
            title: 'Title',
            name: 'Name',
            labelOptions: 'Label options',
            labels: 'Labels',
            backgroundColor: 'Background color',
            backgroundColors: 'Background colors',
            borderColor: 'Border color',
            borderRadius: 'Border radius',
            borderWidth: 'Border width',
            style: 'Style',
            padding: 'Padding',
            fontSize: 'Font size',
            color: 'Color',
            height: 'Height',
            shapes: 'Shape options'
        }
    }
};
/**
 * @optionparent navigation
 * @product      highcharts highstock
 */
const navigation = {
    /**
     * A CSS class name where all bindings will be attached to. Multiple
     * charts on the same page should have separate class names to prevent
     * duplicating events.
     *
     * Default value of versions < 7.0.4 `highcharts-bindings-wrapper`
     *
     * @since     7.0.0
     * @type      {string}
     */
    bindingsClassName: 'highcharts-bindings-container',
    /**
     * Bindings definitions for custom HTML buttons. Each binding implements
     * simple event-driven interface:
     *
     * - `className`: classname used to bind event to
     *
     * - `init`: initial event, fired on button click
     *
     * - `start`: fired on first click on a chart
     *
     * - `steps`: array of sequential events fired one after another on each
     *   of users clicks
     *
     * - `end`: last event to be called after last step event
     *
     * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>|*}
     *
     * @sample {highstock} stock/stocktools/stocktools-thresholds
     *               Custom bindings
     * @sample {highcharts} highcharts/annotations/bindings/
     *               Simple binding
     * @sample {highcharts} highcharts/annotations/bindings-custom-annotation/
     *               Custom annotation binding
     *
     * @since        7.0.0
     * @requires     modules/annotations
     * @product      highcharts highstock
     */
    bindings: {
        /**
         * A circle annotation bindings. Includes `start` and one event in
         * `steps` array.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-circle-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        circleAnnotation: {
            /** @ignore-option */
            className: 'highcharts-circle-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.circleAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation(merge({
                    langKey: 'circle',
                    type: 'basicAnnotation',
                    shapes: [{
                            type: 'circle',
                            point: {
                                x: coordsX.value,
                                y: coordsY.value,
                                xAxis: coordsX.axis.index,
                                yAxis: coordsY.axis.index
                            },
                            r: 5
                        }]
                }, navigation.annotationsOptions, navigation.bindings.circleAnnotation
                    .annotationsOptions));
            },
            /** @ignore-option */
            steps: [
                function (e, annotation) {
                    const shapes = annotation.options.shapes, mockPointOpts = ((shapes && shapes[0] && shapes[0].point) ||
                        {});
                    let distance;
                    if (NavigationBindingsDefaults_isNumber(mockPointOpts.xAxis) &&
                        NavigationBindingsDefaults_isNumber(mockPointOpts.yAxis)) {
                        const inverted = this.chart.inverted, x = this.chart.xAxis[mockPointOpts.xAxis]
                            .toPixels(mockPointOpts.x), y = this.chart.yAxis[mockPointOpts.yAxis]
                            .toPixels(mockPointOpts.y);
                        distance = Math.max(Math.sqrt(Math.pow(inverted ? y - e.chartX : x - e.chartX, 2) +
                            Math.pow(inverted ? x - e.chartY : y - e.chartY, 2)), 5);
                    }
                    annotation.update({
                        shapes: [{
                                r: distance
                            }]
                    });
                }
            ]
        },
        /**
         * An ellipse annotation bindings. Includes `start` and two events in
         * `steps` array. First updates the second point, responsible for a
         * rx width, and second updates the ry width.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-ellipse-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        ellipseAnnotation: {
            className: 'highcharts-ellipse-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.ellipseAnnotation.annotationsOptions
             */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation(merge({
                    langKey: 'ellipse',
                    type: 'basicAnnotation',
                    shapes: [
                        {
                            type: 'ellipse',
                            xAxis: coordsX.axis.index,
                            yAxis: coordsY.axis.index,
                            points: [{
                                    x: coordsX.value,
                                    y: coordsY.value
                                }, {
                                    x: coordsX.value,
                                    y: coordsY.value
                                }],
                            ry: 1
                        }
                    ]
                }, navigation.annotationsOptions, navigation.bindings.ellipseAnnotation
                    .annotationsOptions));
            },
            steps: [
                function (e, annotation) {
                    const target = annotation.shapes[0], position = target.getAbsolutePosition(target.points[1]);
                    target.translatePoint(e.chartX - position.x, e.chartY - position.y, 1);
                    target.redraw(false);
                },
                function (e, annotation) {
                    const target = annotation.shapes[0], position = target.getAbsolutePosition(target.points[0]), position2 = target.getAbsolutePosition(target.points[1]), newR = target.getDistanceFromLine(position, position2, e.chartX, e.chartY), yAxis = target.getYAxis(), newRY = Math.abs(yAxis.toValue(0) - yAxis.toValue(newR));
                    target.setYRadius(newRY);
                    target.redraw(false);
                }
            ]
        },
        /**
         * A rectangle annotation bindings. Includes `start` and one event
         * in `steps` array.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-rectangle-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        rectangleAnnotation: {
            /** @ignore-option */
            className: 'highcharts-rectangle-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.rectangleAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis);
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                const x = coordsX.value, y = coordsY.value, xAxis = coordsX.axis.index, yAxis = coordsY.axis.index, navigation = this.chart.options.navigation;
                return this.chart.addAnnotation(merge({
                    langKey: 'rectangle',
                    type: 'basicAnnotation',
                    shapes: [{
                            type: 'path',
                            points: [
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { xAxis, yAxis, x, y },
                                { command: 'Z' }
                            ]
                        }]
                }, navigation
                    .annotationsOptions, navigation
                    .bindings
                    .rectangleAnnotation
                    .annotationsOptions));
            },
            /** @ignore-option */
            steps: [
                function (e, annotation) {
                    const shapes = annotation.options.shapes, points = ((shapes && shapes[0] && shapes[0].points) ||
                        []), coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis);
                    if (coordsX && coordsY) {
                        const x = coordsX.value, y = coordsY.value;
                        // Top right point
                        points[1].x = x;
                        // Bottom right point (cursor position)
                        points[2].x = x;
                        points[2].y = y;
                        // Bottom left
                        points[3].y = y;
                        annotation.update({
                            shapes: [{
                                    points: points
                                }]
                        });
                    }
                }
            ]
        },
        /**
         * A label annotation bindings. Includes `start` event only.
         *
         * @type    {Highcharts.NavigationBindingsOptionsObject}
         * @default {"className": "highcharts-label-annotation", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
         */
        labelAnnotation: {
            /** @ignore-option */
            className: 'highcharts-label-annotation',
            /**
             * Options to customize the bindings' annotation shapes and labels.
             * @type      {Highcharts.AnnotationsOptions}
             * @extends   navigation.annotationsOptions
             * @apioption navigation.bindings.labelAnnotation.annotationsOptions
             */
            /** @ignore-option */
            start: function (e) {
                const coords = this.chart.pointer?.getCoordinates(e), coordsX = coords && NavigationBindingsDefaults_getAssignedAxis(coords.xAxis), coordsY = coords && NavigationBindingsDefaults_getAssignedAxis(coords.yAxis), navigation = this.chart.options.navigation;
                // Exit if clicked out of axes area
                if (!coordsX || !coordsY) {
                    return;
                }
                return this.chart.addAnnotation(merge({
                    langKey: 'label',
                    type: 'basicAnnotation',
                    labelOptions: {
                        format: '{y:.2f}',
                        overflow: 'none',
                        crop: true
                    },
                    labels: [{
                            point: {
                                xAxis: coordsX.axis.index,
                                yAxis: coordsY.axis.index,
                                x: coordsX.value,
                                y: coordsY.value
                            }
                        }]
                }, navigation
                    .annotationsOptions, navigation
                    .bindings
                    .labelAnnotation
                    .annotationsOptions));
            }
        }
    },
    /**
     * Path where Highcharts will look for icons. Change this to use icons
     * from a different server.
     *
     * @type      {string}
     * @default   https://code.highcharts.com/12.4.0-modified/gfx/stock-icons/
     * @since     7.1.3
     * @apioption navigation.iconsURL
     */
    /**
     * A `showPopup` event. Fired when selecting for example an annotation.
     *
     * @type      {Function}
     * @apioption navigation.events.showPopup
     */
    /**
     * A `closePopup` event. Fired when Popup should be hidden, for example
     * when clicking on an annotation again.
     *
     * @type      {Function}
     * @apioption navigation.events.closePopup
     */
    /**
     * Event fired on a button click.
     *
     * @type      {Function}
     * @sample    highcharts/annotations/gui/
     *            Change icon in a dropddown on event
     * @sample    highcharts/annotations/gui-buttons/
     *            Change button class on event
     * @apioption navigation.events.selectButton
     */
    /**
     * Event fired when button state should change, for example after
     * adding an annotation.
     *
     * @type      {Function}
     * @sample    highcharts/annotations/gui/
     *            Change icon in a dropddown on event
     * @sample    highcharts/annotations/gui-buttons/
     *            Change button class on event
     * @apioption navigation.events.deselectButton
     */
    /**
     * Events to communicate between Stock Tools and custom GUI.
     *
     * @since        7.0.0
     * @product      highcharts highstock
     * @optionparent navigation.events
     */
    events: {},
    /**
     * Additional options to be merged into all annotations.
     *
     * @sample stock/stocktools/navigation-annotation-options
     *         Set red color of all line annotations
     *
     * @type      {Highcharts.AnnotationsOptions}
     * @extends   annotations
     * @exclude   crookedLine, elliottWave, fibonacci, infinityLine,
     *            measure, pitchfork, tunnel, verticalLine, basicAnnotation
     * @requires     modules/annotations
     * @apioption navigation.annotationsOptions
     */
    annotationsOptions: {
        animation: {
            defer: 0
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
const NavigationBindingDefaults = {
    lang,
    navigation
};
/* harmony default export */ const NavigationBindingsDefaults = (NavigationBindingDefaults);

;// ./code/es-modules/Extensions/Annotations/NavigationBindings.js
/* *
 *
 *  (c) 2009-2025 Highsoft, Black Label
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { setOptions } = (external_highcharts_src_js_default_default());

const { format } = (external_highcharts_src_js_default_Templating_default());

const { composed, doc, win } = (external_highcharts_src_js_default_default());


const { getAssignedAxis: NavigationBindings_getAssignedAxis, getFieldType: NavigationBindings_getFieldType } = NavigationBindingsUtilities;

const { addEvent, attr, defined: NavigationBindings_defined, fireEvent, isArray, isFunction, isNumber: NavigationBindings_isNumber, isObject, merge: NavigationBindings_merge, objectEach, pick: NavigationBindings_pick, pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * IE 9-11 polyfill for Element.closest():
 * @private
 */
function closestPolyfill(el, s) {
    const ElementProto = win.Element.prototype, elementMatches = ElementProto.matches ||
        ElementProto.msMatchesSelector ||
        ElementProto.webkitMatchesSelector;
    let ret = null;
    if (ElementProto.closest) {
        ret = ElementProto.closest.call(el, s);
    }
    else {
        do {
            if (elementMatches.call(el, s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
    }
    return ret;
}
/**
 * @private
 */
function onAnnotationRemove() {
    if (this.chart.navigationBindings) {
        this.chart.navigationBindings.deselectAnnotation();
    }
}
/**
 * @private
 */
function onChartDestroy() {
    if (this.navigationBindings) {
        this.navigationBindings.destroy();
    }
}
/**
 * @private
 */
function onChartLoad() {
    const options = this.options;
    if (options && options.navigation && options.navigation.bindings) {
        this.navigationBindings = new NavigationBindings(this, options.navigation);
        this.navigationBindings.initEvents();
        this.navigationBindings.initUpdate();
    }
}
/**
 * @private
 */
function onChartRender() {
    const navigationBindings = this.navigationBindings, disabledClassName = 'highcharts-disabled-btn';
    if (this && navigationBindings) {
        // Check if the buttons should be enabled/disabled based on
        // visible series.
        let buttonsEnabled = false;
        this.series.forEach((series) => {
            if (!series.options.isInternal && series.visible) {
                buttonsEnabled = true;
            }
        });
        if (this.navigationBindings &&
            this.navigationBindings.container &&
            this.navigationBindings.container[0]) {
            const container = this.navigationBindings.container[0];
            objectEach(navigationBindings.boundClassNames, (value, key) => {
                // Get the HTML element corresponding to the className taken
                // from StockToolsBindings.
                const buttonNode = container.querySelectorAll('.' + key);
                if (buttonNode) {
                    for (let i = 0; i < buttonNode.length; i++) {
                        const button = buttonNode[i], cls = button.className;
                        if (value.noDataState === 'normal') {
                            // If button has noDataState: 'normal', and has
                            // disabledClassName, remove this className.
                            if (cls.indexOf(disabledClassName) !== -1) {
                                button.classList.remove(disabledClassName);
                            }
                        }
                        else if (!buttonsEnabled) {
                            if (cls.indexOf(disabledClassName) === -1) {
                                button.className += ' ' + disabledClassName;
                            }
                        }
                        else {
                            // Enable all buttons by deleting the className.
                            if (cls.indexOf(disabledClassName) !== -1) {
                                button.classList.remove(disabledClassName);
                            }
                        }
                    }
                }
            });
        }
    }
}
/**
 * @private
 */
function onNavigationBindingsClosePopup() {
    this.deselectAnnotation();
}
/**
 * @private
 */
function onNavigationBindingsDeselectButton() {
    this.selectedButtonElement = null;
}
/**
 * Show edit-annotation form:
 * @private
 */
function selectableAnnotation(annotationType) {
    const originalClick = annotationType.prototype.defaultOptions.events &&
        annotationType.prototype.defaultOptions.events.click;
    /**
     * Select and show popup
     * @private
     */
    function selectAndShowPopup(eventArguments) {
        const annotation = this, navigation = annotation.chart.navigationBindings, prevAnnotation = navigation.activeAnnotation;
        if (originalClick) {
            originalClick.call(annotation, eventArguments);
        }
        if (prevAnnotation !== annotation) {
            // Select current:
            navigation.deselectAnnotation();
            navigation.activeAnnotation = annotation;
            annotation.setControlPointsVisibility(true);
            fireEvent(navigation, 'showPopup', {
                annotation: annotation,
                formType: 'annotation-toolbar',
                options: navigation.annotationToFields(annotation),
                onSubmit: function (data) {
                    if (data.actionType === 'remove') {
                        navigation.activeAnnotation = false;
                        navigation.chart.removeAnnotation(annotation);
                    }
                    else {
                        const config = {};
                        navigation.fieldsToOptions(data.fields, config);
                        navigation.deselectAnnotation();
                        const typeOptions = config.typeOptions;
                        if (annotation.options.type === 'measure') {
                            // Manually disable crooshars according to
                            // stroke width of the shape:
                            typeOptions.crosshairY.enabled = (typeOptions.crosshairY
                                .strokeWidth !== 0);
                            typeOptions.crosshairX.enabled = (typeOptions.crosshairX
                                .strokeWidth !== 0);
                        }
                        annotation.update(config);
                    }
                }
            });
        }
        else {
            // Deselect current:
            fireEvent(navigation, 'closePopup');
        }
        // Let bubble event to chart.click:
        eventArguments.activeAnnotation = true;
    }
    // #18276, show popup on touchend, but not on touchmove
    let touchStartX, touchStartY;
    /**
     *
     */
    function saveCoords(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }
    /**
     *
     */
    function checkForTouchmove(e) {
        const hasMoved = touchStartX ? Math.sqrt(Math.pow(touchStartX - e.changedTouches[0].clientX, 2) +
            Math.pow(touchStartY - e.changedTouches[0].clientY, 2)) >= 4 : false;
        if (!hasMoved) {
            selectAndShowPopup.call(this, e);
        }
    }
    NavigationBindings_merge(true, annotationType.prototype.defaultOptions.events, {
        click: selectAndShowPopup,
        touchstart: saveCoords,
        touchend: checkForTouchmove
    });
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 */
class NavigationBindings {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(AnnotationClass, ChartClass) {
        if (pushUnique(composed, 'NavigationBindings')) {
            addEvent(AnnotationClass, 'remove', onAnnotationRemove);
            // Basic shapes:
            selectableAnnotation(AnnotationClass);
            // Advanced annotations:
            objectEach(AnnotationClass.types, (annotationType) => {
                selectableAnnotation(annotationType);
            });
            addEvent(ChartClass, 'destroy', onChartDestroy);
            addEvent(ChartClass, 'load', onChartLoad);
            addEvent(ChartClass, 'render', onChartRender);
            addEvent(NavigationBindings, 'closePopup', onNavigationBindingsClosePopup);
            addEvent(NavigationBindings, 'deselectButton', onNavigationBindingsDeselectButton);
            setOptions(NavigationBindingsDefaults);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, options) {
        this.boundClassNames = void 0;
        this.chart = chart;
        this.options = options;
        this.eventsToUnbind = [];
        this.container =
            this.chart.container.getElementsByClassName(this.options.bindingsClassName || '');
        if (!this.container.length) {
            this.container = doc.getElementsByClassName(this.options.bindingsClassName || '');
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    getCoords(e) {
        const coords = this.chart.pointer?.getCoordinates(e);
        return [
            coords && NavigationBindings_getAssignedAxis(coords.xAxis),
            coords && NavigationBindings_getAssignedAxis(coords.yAxis)
        ];
    }
    /**
     * Init all events connected to NavigationBindings.
     *
     * @private
     * @function Highcharts.NavigationBindings#initEvents
     */
    initEvents() {
        const navigation = this, chart = navigation.chart, bindingsContainer = navigation.container, options = navigation.options;
        // Shorthand object for getting events for buttons:
        navigation.boundClassNames = {};
        objectEach((options.bindings || {}), (value) => {
            navigation.boundClassNames[value.className] = value;
        });
        // Handle multiple containers with the same class names:
        [].forEach.call(bindingsContainer, (subContainer) => {
            navigation.eventsToUnbind.push(addEvent(subContainer, 'click', (event) => {
                const bindings = navigation.getButtonEvents(subContainer, event);
                if (bindings &&
                    (!bindings.button.classList
                        .contains('highcharts-disabled-btn'))) {
                    navigation.bindingsButtonClick(bindings.button, bindings.events, event);
                }
            }));
        });
        objectEach((options.events || {}), (callback, eventName) => {
            if (isFunction(callback)) {
                navigation.eventsToUnbind.push(addEvent(navigation, eventName, callback, { passive: false }));
            }
        });
        navigation.eventsToUnbind.push(addEvent(chart.container, 'click', function (e) {
            if (!chart.cancelClick &&
                chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop, {
                    visiblePlotOnly: true
                })) {
                navigation.bindingsChartClick(this, e);
            }
        }));
        navigation.eventsToUnbind.push(addEvent(chart.container, (external_highcharts_src_js_default_default()).isTouchDevice ? 'touchmove' : 'mousemove', function (e) {
            navigation.bindingsContainerMouseMove(this, e);
        }, (external_highcharts_src_js_default_default()).isTouchDevice ? { passive: false } : void 0));
    }
    /**
     * Common chart.update() delegation, shared between bindings and exporting.
     *
     * @private
     * @function Highcharts.NavigationBindings#initUpdate
     */
    initUpdate() {
        const navigation = this;
        Chart_ChartNavigationComposition
            .compose(this.chart).navigation
            .addUpdate((options) => {
            navigation.update(options);
        });
    }
    /**
     * Hook for click on a button, method selects/unselects buttons,
     * then calls `bindings.init` callback.
     *
     * @private
     * @function Highcharts.NavigationBindings#bindingsButtonClick
     *
     * @param {Highcharts.HTMLDOMElement} [button]
     *        Clicked button
     *
     * @param {Object} events
     *        Events passed down from bindings (`init`, `start`, `step`, `end`)
     *
     * @param {Highcharts.PointerEventObject} clickEvent
     *        Browser's click event
     */
    bindingsButtonClick(button, events, clickEvent) {
        const navigation = this, chart = navigation.chart, svgContainer = chart.renderer.boxWrapper;
        let shouldEventBeFired = true;
        if (navigation.selectedButtonElement) {
            if (navigation.selectedButtonElement.classList === button.classList) {
                shouldEventBeFired = false;
            }
            fireEvent(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
            if (navigation.nextEvent) {
                // Remove in-progress annotations adders:
                if (navigation.currentUserDetails &&
                    navigation.currentUserDetails.coll === 'annotations') {
                    chart.removeAnnotation(navigation.currentUserDetails);
                }
                navigation.mouseMoveEvent = navigation.nextEvent = false;
            }
        }
        if (shouldEventBeFired) {
            navigation.selectedButton = events;
            navigation.selectedButtonElement = button;
            fireEvent(navigation, 'selectButton', { button: button });
            // Call "init" event, for example to open modal window
            if (events.init) {
                events.init.call(navigation, button, clickEvent);
            }
            if (events.start || events.steps) {
                chart.renderer.boxWrapper.addClass('highcharts-draw-mode');
            }
        }
        else {
            chart.stockTools && button.classList.remove('highcharts-active');
            svgContainer.removeClass('highcharts-draw-mode');
            navigation.nextEvent = false;
            navigation.mouseMoveEvent = false;
            navigation.selectedButton = null;
        }
    }
    /**
     * Hook for click on a chart, first click on a chart calls `start` event,
     * then on all subsequent clicks iterate over `steps` array.
     * When finished, calls `end` event.
     *
     * @private
     * @function Highcharts.NavigationBindings#bindingsChartClick
     *
     * @param {Highcharts.Chart} chart
     *        Chart that click was performed on.
     *
     * @param {Highcharts.PointerEventObject} clickEvent
     *        Browser's click event.
     */
    bindingsChartClick(chart, clickEvent) {
        chart = this.chart;
        const navigation = this, activeAnnotation = navigation.activeAnnotation, selectedButton = navigation.selectedButton, svgContainer = chart.renderer.boxWrapper;
        if (activeAnnotation) {
            // Click outside popups, should close them and deselect the
            // annotation
            if (!activeAnnotation.cancelClick && // #15729
                !clickEvent.activeAnnotation &&
                // Element could be removed in the child action, e.g. button
                clickEvent.target.parentNode &&
                // TO DO: Polyfill for IE11?
                !closestPolyfill(clickEvent.target, '.highcharts-popup')) {
                fireEvent(navigation, 'closePopup');
            }
            else if (activeAnnotation.cancelClick) {
                // Reset cancelClick after the other event handlers have run
                setTimeout(() => {
                    activeAnnotation.cancelClick = false;
                }, 0);
            }
        }
        if (!selectedButton || !selectedButton.start) {
            return;
        }
        if (!navigation.nextEvent) {
            // Call init method:
            navigation.currentUserDetails = selectedButton.start.call(navigation, clickEvent);
            // If steps exists (e.g. Annotations), bind them:
            if (navigation.currentUserDetails && selectedButton.steps) {
                navigation.stepIndex = 0;
                navigation.steps = true;
                navigation.mouseMoveEvent = navigation.nextEvent =
                    selectedButton.steps[navigation.stepIndex];
            }
            else {
                fireEvent(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
                svgContainer.removeClass('highcharts-draw-mode');
                navigation.steps = false;
                navigation.selectedButton = null;
                // First click is also the last one:
                if (selectedButton.end) {
                    selectedButton.end.call(navigation, clickEvent, navigation.currentUserDetails);
                }
            }
        }
        else {
            navigation.nextEvent(clickEvent, navigation.currentUserDetails);
            if (navigation.steps) {
                navigation.stepIndex++;
                if (selectedButton.steps[navigation.stepIndex]) {
                    // If we have more steps, bind them one by one:
                    navigation.mouseMoveEvent = navigation.nextEvent = selectedButton.steps[navigation.stepIndex];
                }
                else {
                    fireEvent(navigation, 'deselectButton', { button: navigation.selectedButtonElement });
                    svgContainer.removeClass('highcharts-draw-mode');
                    // That was the last step, call end():
                    if (selectedButton.end) {
                        selectedButton.end.call(navigation, clickEvent, navigation.currentUserDetails);
                    }
                    navigation.nextEvent = false;
                    navigation.mouseMoveEvent = false;
                    navigation.selectedButton = null;
                }
            }
        }
    }
    /**
     * Hook for mouse move on a chart's container. It calls current step.
     *
     * @private
     * @function Highcharts.NavigationBindings#bindingsContainerMouseMove
     *
     * @param {Highcharts.HTMLDOMElement} container
     *        Chart's container.
     *
     * @param {global.Event} moveEvent
     *        Browser's move event.
     */
    bindingsContainerMouseMove(_container, moveEvent) {
        if (this.mouseMoveEvent) {
            this.mouseMoveEvent(moveEvent, this.currentUserDetails);
        }
    }
    /**
     * Translate fields (e.g. `params.period` or `marker.styles.color`) to
     * Highcharts options object (e.g. `{ params: { period } }`).
     *
     * @private
     * @function Highcharts.NavigationBindings#fieldsToOptions<T>
     *
     * @param {Highcharts.Dictionary<string>} fields
     *        Fields from popup form.
     *
     * @param {T} config
     *        Default config to be modified.
     *
     * @return {T}
     *         Modified config
     */
    fieldsToOptions(fields, config) {
        objectEach(fields, (value, field) => {
            const parsedValue = parseFloat(value), path = field.split('.'), pathLength = path.length - 1;
            // If it's a number (not "format" options), parse it:
            if (NavigationBindings_isNumber(parsedValue) &&
                !value.match(/px|em/g) &&
                !field.match(/format/g)) {
                value = parsedValue;
            }
            // Remove values like 0
            if (value !== 'undefined') {
                let parent = config;
                path.forEach((name, index) => {
                    if (name !== '__proto__' && name !== 'constructor') {
                        const nextName = NavigationBindings_pick(path[index + 1], '');
                        if (pathLength === index) {
                            // Last index, put value:
                            parent[name] = value;
                        }
                        else if (!parent[name]) {
                            // Create middle property:
                            parent[name] = nextName.match(/\d/g) ?
                                [] :
                                {};
                            parent = parent[name];
                        }
                        else {
                            // Jump into next property
                            parent = parent[name];
                        }
                    }
                });
            }
        });
        return config;
    }
    /**
     * Shorthand method to deselect an annotation.
     *
     * @function Highcharts.NavigationBindings#deselectAnnotation
     */
    deselectAnnotation() {
        if (this.activeAnnotation) {
            this.activeAnnotation.setControlPointsVisibility(false);
            this.activeAnnotation = false;
        }
    }
    /**
     * Generates API config for popup in the same format as options for
     * Annotation object.
     *
     * @function Highcharts.NavigationBindings#annotationToFields
     *
     * @param {Highcharts.Annotation} annotation
     *        Annotations object
     *
     * @return {Highcharts.Dictionary<string>}
     *         Annotation options to be displayed in popup box
     */
    annotationToFields(annotation) {
        const options = annotation.options, editables = NavigationBindings.annotationsEditable, nestedEditables = editables.nestedOptions, type = NavigationBindings_pick(options.type, options.shapes && options.shapes[0] &&
            options.shapes[0].type, options.labels && options.labels[0] &&
            options.labels[0].type, 'label'), nonEditables = NavigationBindings.annotationsNonEditable[options.langKey] || [], visualOptions = {
            langKey: options.langKey,
            type: type
        };
        /**
         * Nested options traversing. Method goes down to the options and copies
         * allowed options (with values) to new object, which is last parameter:
         * "parent".
         *
         * @private
         *
         * @param {*} option
         *        Atomic type or object/array
         *
         * @param {string} key
         *        Option name, for example "visible" or "x", "y"
         *
         * @param {Object} parentEditables
         *        Editables from NavigationBindings.annotationsEditable
         *
         * @param {Object} parent
         *        Where new options will be assigned
         */
        function traverse(option, key, parentEditables, parent, parentKey) {
            let nextParent;
            if (parentEditables &&
                NavigationBindings_defined(option) &&
                nonEditables.indexOf(key) === -1 &&
                ((parentEditables.indexOf &&
                    parentEditables.indexOf(key)) >= 0 ||
                    parentEditables[key] || // Nested array
                    parentEditables === true // Simple array
                )) {
                // Roots:
                if (isArray(option)) {
                    parent[key] = [];
                    option.forEach((arrayOption, i) => {
                        if (!isObject(arrayOption)) {
                            // Simple arrays, e.g. [String, Number, Boolean]
                            traverse(arrayOption, 0, nestedEditables[key], parent[key], key);
                        }
                        else {
                            // Advanced arrays, e.g. [Object, Object]
                            parent[key][i] = {};
                            objectEach(arrayOption, (nestedOption, nestedKey) => {
                                traverse(nestedOption, nestedKey, nestedEditables[key], parent[key][i], key);
                            });
                        }
                    });
                }
                else if (isObject(option)) {
                    nextParent = {};
                    if (isArray(parent)) {
                        parent.push(nextParent);
                        nextParent[key] = {};
                        nextParent = nextParent[key];
                    }
                    else {
                        parent[key] = nextParent;
                    }
                    objectEach(option, (nestedOption, nestedKey) => {
                        traverse(nestedOption, nestedKey, key === 0 ?
                            parentEditables :
                            nestedEditables[key], nextParent, key);
                    });
                }
                else {
                    // Leaf:
                    if (key === 'format') {
                        parent[key] = [
                            format(option, annotation.labels[0].points[0]).toString(),
                            'text'
                        ];
                    }
                    else if (isArray(parent)) {
                        parent.push([option, NavigationBindings_getFieldType(parentKey, option)]);
                    }
                    else {
                        parent[key] = [option, NavigationBindings_getFieldType(key, option)];
                    }
                }
            }
        }
        objectEach(options, (option, key) => {
            if (key === 'typeOptions' &&
                visualOptions['type'] !== 'basicAnnotation' // #23575
            ) {
                visualOptions[key] = {};
                objectEach(options[key], (typeOption, typeKey) => {
                    traverse(typeOption, typeKey, nestedEditables, visualOptions[key], typeKey);
                });
            }
            else {
                traverse(option, key, editables[type], visualOptions, key);
            }
        });
        return visualOptions;
    }
    /**
     * Get all class names for all parents in the element. Iterates until finds
     * main container.
     *
     * @private
     * @function Highcharts.NavigationBindings#getClickedClassNames
     *
     * @param {Highcharts.HTMLDOMElement} container
     * Container that event is bound to.
     *
     * @param {global.Event} event
     * Browser's event.
     *
     * @return {Array<Array<string, Highcharts.HTMLDOMElement>>}
     * Array of class names with corresponding elements
     */
    getClickedClassNames(container, event) {
        let element = event.target, classNames = [], elemClassName;
        while (element && element.tagName) {
            elemClassName = attr(element, 'class');
            if (elemClassName) {
                classNames = classNames.concat(elemClassName
                    .split(' ')
                    // eslint-disable-next-line no-loop-func
                    .map((name) => ([name, element])));
            }
            element = element.parentNode;
            if (element === container) {
                return classNames;
            }
        }
        return classNames;
    }
    /**
     * Get events bound to a button. It's a custom event delegation to find all
     * events connected to the element.
     *
     * @private
     * @function Highcharts.NavigationBindings#getButtonEvents
     *
     * @param {Highcharts.HTMLDOMElement} container
     *        Container that event is bound to.
     *
     * @param {global.Event} event
     *        Browser's event.
     *
     * @return {Object}
     *         Object with events (init, start, steps, and end)
     */
    getButtonEvents(container, event) {
        const navigation = this, classNames = this.getClickedClassNames(container, event);
        let bindings;
        classNames.forEach((className) => {
            if (navigation.boundClassNames[className[0]] && !bindings) {
                bindings = {
                    events: navigation.boundClassNames[className[0]],
                    button: className[1]
                };
            }
        });
        return bindings;
    }
    /**
     * Bindings are just events, so the whole update process is simply
     * removing old events and adding new ones.
     *
     * @private
     * @function Highcharts.NavigationBindings#update
     */
    update(options) {
        this.options = NavigationBindings_merge(true, this.options, options);
        this.removeEvents();
        this.initEvents();
    }
    /**
     * Remove all events created in the navigation.
     *
     * @private
     * @function Highcharts.NavigationBindings#removeEvents
     */
    removeEvents() {
        this.eventsToUnbind.forEach((unbinder) => unbinder());
    }
    /**
     * @private
     * @function Highcharts.NavigationBindings#destroy
     */
    destroy() {
        this.removeEvents();
    }
}
/* *
 *
 *  Static Properties
 *
 * */
// Define which options from annotations should show up in edit box:
NavigationBindings.annotationsEditable = {
    // `typeOptions` are always available
    // Nested and shared options:
    nestedOptions: {
        labelOptions: ['style', 'format', 'backgroundColor'],
        labels: ['style'],
        label: ['style'],
        style: ['fontSize', 'color'],
        background: ['fill', 'strokeWidth', 'stroke'],
        innerBackground: ['fill', 'strokeWidth', 'stroke'],
        outerBackground: ['fill', 'strokeWidth', 'stroke'],
        shapeOptions: ['fill', 'strokeWidth', 'stroke'],
        shapes: ['fill', 'strokeWidth', 'stroke'],
        line: ['strokeWidth', 'stroke'],
        backgroundColors: [true],
        connector: ['fill', 'strokeWidth', 'stroke'],
        crosshairX: ['strokeWidth', 'stroke'],
        crosshairY: ['strokeWidth', 'stroke']
    },
    // Simple shapes:
    circle: ['shapes'],
    ellipse: ['shapes'],
    verticalLine: [],
    label: ['labelOptions'],
    // Measure
    measure: ['background', 'crosshairY', 'crosshairX'],
    // Others:
    fibonacci: [],
    tunnel: ['background', 'line', 'height'],
    pitchfork: ['innerBackground', 'outerBackground'],
    rect: ['shapes'],
    // Crooked lines, elliots, arrows etc:
    crookedLine: [],
    basicAnnotation: ['shapes', 'labelOptions']
};
// Define non editable fields per annotation, for example Rectangle inherits
// options from Measure, but crosshairs are not available
NavigationBindings.annotationsNonEditable = {
    rectangle: ['crosshairX', 'crosshairY', 'labelOptions'],
    ellipse: ['labelOptions'],
    circle: ['labelOptions']
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Annotations_NavigationBindings = (NavigationBindings);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A config object for navigation bindings in annotations.
 *
 * @interface Highcharts.NavigationBindingsOptionsObject
 */ /**
* ClassName of the element for a binding.
* @name Highcharts.NavigationBindingsOptionsObject#className
* @type {string|undefined}
*/ /**
* Last event to be fired after last step event.
* @name Highcharts.NavigationBindingsOptionsObject#end
* @type {Function|undefined}
*/ /**
* Initial event, fired on a button click.
* @name Highcharts.NavigationBindingsOptionsObject#init
* @type {Function|undefined}
*/ /**
* Event fired on first click on a chart.
* @name Highcharts.NavigationBindingsOptionsObject#start
* @type {Function|undefined}
*/ /**
* Last event to be fired after last step event. Array of step events to be
* called sequentially after each user click.
* @name Highcharts.NavigationBindingsOptionsObject#steps
* @type {Array<Function>|undefined}
*/
(''); // Keeps doclets above in JS file

;// external ["../highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// ./code/es-modules/Stock/StockTools/StockToolsUtilities.js
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


const { getOptions } = (external_highcharts_src_js_default_default());

const { getAssignedAxis: StockToolsUtilities_getAssignedAxis, getFieldType: StockToolsUtilities_getFieldType } = NavigationBindingsUtilities;


const { defined: StockToolsUtilities_defined, fireEvent: StockToolsUtilities_fireEvent, isNumber: StockToolsUtilities_isNumber, uniqueKey } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * @private
 */
const indicatorsWithAxes = [
    'apo',
    'ad',
    'aroon',
    'aroonoscillator',
    'atr',
    'ao',
    'cci',
    'chaikin',
    'cmf',
    'cmo',
    'disparityindex',
    'dmi',
    'dpo',
    'linearRegressionAngle',
    'linearRegressionIntercept',
    'linearRegressionSlope',
    'klinger',
    'macd',
    'mfi',
    'momentum',
    'natr',
    'obv',
    'ppo',
    'roc',
    'rsi',
    'slowstochastic',
    'stochastic',
    'trix',
    'williamsr'
];
/**
 * @private
 */
const indicatorsWithVolume = [
    'ad',
    'cmf',
    'klinger',
    'mfi',
    'obv',
    'vbp',
    'vwap'
];
/* *
 *
 *  Functions
 *
 * */
/**
 * Generates function which will add a flag series using modal in GUI.
 * Method fires an event "showPopup" with config:
 * `{type, options, callback}`.
 *
 * Example: NavigationBindings.utils.addFlagFromForm('url(...)') - will
 * generate function that shows modal in GUI.
 *
 * @private
 * @function bindingsUtils.addFlagFromForm
 *
 * @param {Highcharts.FlagsShapeValue} type
 *        Type of flag series, e.g. "squarepin"
 *
 * @return {Function}
 *         Callback to be used in `start` callback
 */
function addFlagFromForm(type) {
    return function (e) {
        const navigation = this, chart = navigation.chart, toolbar = chart.stockTools, point = attractToPoint(e, chart);
        if (!point) {
            return;
        }
        const pointConfig = {
            x: point.x,
            y: point.y
        };
        const seriesOptions = {
            type: 'flags',
            onSeries: point.series.id,
            shape: type,
            data: [pointConfig],
            xAxis: point.xAxis,
            yAxis: point.yAxis,
            point: {
                events: {
                    click: function () {
                        const point = this, options = point.options;
                        StockToolsUtilities_fireEvent(navigation, 'showPopup', {
                            point: point,
                            formType: 'annotation-toolbar',
                            options: {
                                langKey: 'flags',
                                type: 'flags',
                                title: [
                                    options.title,
                                    StockToolsUtilities_getFieldType('title', options.title)
                                ],
                                name: [
                                    options.name,
                                    StockToolsUtilities_getFieldType('name', options.name)
                                ]
                            },
                            onSubmit: function (updated) {
                                if (updated.actionType === 'remove') {
                                    point.remove();
                                }
                                else {
                                    point.update(navigation.fieldsToOptions(updated.fields, {}));
                                }
                            }
                        });
                    }
                }
            }
        };
        if (!toolbar || !toolbar.guiEnabled) {
            chart.addSeries(seriesOptions);
        }
        StockToolsUtilities_fireEvent(navigation, 'showPopup', {
            formType: 'flag',
            // Enabled options:
            options: {
                langKey: 'flags',
                type: 'flags',
                title: ['A', StockToolsUtilities_getFieldType('label', 'A')],
                name: ['Flag A', StockToolsUtilities_getFieldType('label', 'Flag A')]
            },
            // Callback on submit:
            onSubmit: function (data) {
                navigation.fieldsToOptions(data.fields, seriesOptions.data[0]);
                chart.addSeries(seriesOptions);
            }
        });
    };
}
/**
 * @private
 * @todo
 * Consider using getHoverData(), but always kdTree (columns?)
 */
function attractToPoint(e, chart) {
    const coords = chart.pointer?.getCoordinates(e);
    let coordsX, coordsY, distX = Number.MAX_VALUE, closestPoint;
    if (chart.navigationBindings && coords) {
        coordsX = StockToolsUtilities_getAssignedAxis(coords.xAxis);
        coordsY = StockToolsUtilities_getAssignedAxis(coords.yAxis);
    }
    // Exit if clicked out of axes area.
    if (!coordsX || !coordsY) {
        return;
    }
    const x = coordsX.value;
    const y = coordsY.value;
    // Search by 'x' but only in yAxis' series.
    coordsY.axis.series.forEach((series) => {
        if (series.points) {
            const point = series.searchPoint(e, true);
            if (point && distX > Math.abs(point.x - x)) {
                distX = Math.abs(point.x - x);
                closestPoint = point;
            }
        }
    });
    if (closestPoint && closestPoint.x && closestPoint.y) {
        return {
            x: closestPoint.x,
            y: closestPoint.y,
            below: y < closestPoint.y,
            series: closestPoint.series,
            xAxis: closestPoint.series.xAxis.index || 0,
            yAxis: closestPoint.series.yAxis.index || 0
        };
    }
}
/**
 * Shorthand to check if given yAxis comes from navigator.
 *
 * @private
 * @function bindingsUtils.isNotNavigatorYAxis
 *
 * @param {Highcharts.Axis} axis
 * Axis to check.
 *
 * @return {boolean}
 * True, if axis comes from navigator.
 */
function isNotNavigatorYAxis(axis) {
    return axis.userOptions.className !== 'highcharts-navigator-yaxis';
}
/**
 * Check if any of the price indicators are enabled.
 * @private
 * @function bindingsUtils.isLastPriceEnabled
 *
 * @param {Array} series
 *        Array of series.
 *
 * @return {boolean}
 *         Tells which indicator is enabled.
 */
function isPriceIndicatorEnabled(series) {
    return series.some((s) => s.lastVisiblePrice || s.lastPrice);
}
/**
 * @private
 */
function manageIndicators(data) {
    const chart = this.chart, seriesConfig = {
        linkedTo: data.linkedTo,
        type: data.type
    };
    let yAxis, parentSeries, defaultOptions, series;
    if (data.actionType === 'edit') {
        this.fieldsToOptions(data.fields, seriesConfig);
        series = chart.get(data.seriesId);
        if (series) {
            series.update(seriesConfig, false);
        }
    }
    else if (data.actionType === 'remove') {
        series = chart.get(data.seriesId);
        if (series) {
            yAxis = series.yAxis;
            if (series.linkedSeries) {
                series.linkedSeries.forEach((linkedSeries) => {
                    linkedSeries.remove(false);
                });
            }
            series.remove(false);
            if (indicatorsWithAxes.indexOf(series.type) >= 0) {
                const removedYAxisProps = {
                    height: yAxis.options.height,
                    top: yAxis.options.top
                };
                yAxis.remove(false);
                this.resizeYAxes(removedYAxisProps);
            }
        }
    }
    else {
        seriesConfig.id = uniqueKey();
        this.fieldsToOptions(data.fields, seriesConfig);
        parentSeries = chart.get(seriesConfig.linkedTo);
        defaultOptions = getOptions().plotOptions;
        // Make sure that indicator uses the SUM approx if SUM approx is used
        // by parent series (#13950).
        if (typeof parentSeries !== 'undefined' &&
            parentSeries instanceof (external_highcharts_src_js_default_Series_default()) &&
            parentSeries.getDGApproximation() === 'sum' &&
            // If indicator has defined approx type, use it (e.g. "ranges")
            !StockToolsUtilities_defined(defaultOptions && defaultOptions[seriesConfig.type] &&
                defaultOptions.dataGrouping &&
                defaultOptions.dataGrouping.approximation)) {
            seriesConfig.dataGrouping = {
                approximation: 'sum'
            };
        }
        if (indicatorsWithAxes.indexOf(data.type) >= 0) {
            yAxis = chart.addAxis({
                id: uniqueKey(),
                offset: 0,
                opposite: true,
                title: {
                    text: ''
                },
                tickPixelInterval: 40,
                showLastLabel: false,
                labels: {
                    align: 'left',
                    y: -2
                }
            }, false, false);
            seriesConfig.yAxis = yAxis.options.id;
            this.resizeYAxes();
        }
        else {
            seriesConfig.yAxis = chart.get(data.linkedTo).options.yAxis;
        }
        if (indicatorsWithVolume.indexOf(data.type) >= 0) {
            seriesConfig.params.volumeSeriesID = chart.series.filter(function (series) {
                return series.options.type === 'column';
            })[0].options.id;
        }
        chart.addSeries(seriesConfig, false);
    }
    StockToolsUtilities_fireEvent(this, 'deselectButton', {
        button: this.selectedButtonElement
    });
    chart.redraw();
}
/**
 * Update height for an annotation. Height is calculated as a difference
 * between last point in `typeOptions` and current position. It's a value,
 * not pixels height.
 *
 * @private
 * @function bindingsUtils.updateHeight
 *
 * @param {Highcharts.PointerEventObject} e
 *        normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 *        Annotation to be updated
 */
function updateHeight(e, annotation) {
    const options = annotation.options.typeOptions, yAxis = StockToolsUtilities_isNumber(options.yAxis) && this.chart.yAxis[options.yAxis];
    if (yAxis && options.points) {
        annotation.update({
            typeOptions: {
                height: yAxis.toValue(e[yAxis.horiz ? 'chartX' : 'chartY']) -
                    (options.points[1].y || 0)
            }
        });
    }
}
/**
 * Update each point after specified index, most of the annotations use
 * this. For example crooked line: logic behind updating each point is the
 * same, only index changes when adding an annotation.
 *
 * Example: NavigationBindings.utils.updateNthPoint(1) - will generate
 * function that updates all consecutive points except point with index=0.
 *
 * @private
 * @function bindingsUtils.updateNthPoint
 *
 * @param {number} startIndex
 *        Index from which point should update
 *
 * @return {Function}
 *         Callback to be used in steps array
 */
function updateNthPoint(startIndex) {
    return function (e, annotation) {
        const options = annotation.options.typeOptions, xAxis = StockToolsUtilities_isNumber(options.xAxis) && this.chart.xAxis[options.xAxis], yAxis = StockToolsUtilities_isNumber(options.yAxis) && this.chart.yAxis[options.yAxis];
        if (xAxis && yAxis) {
            options.points.forEach((point, index) => {
                if (index >= startIndex) {
                    point.x = xAxis.toValue(e[xAxis.horiz ? 'chartX' : 'chartY']);
                    point.y = yAxis.toValue(e[yAxis.horiz ? 'chartX' : 'chartY']);
                }
            });
            annotation.update({
                typeOptions: {
                    points: options.points
                }
            });
        }
    };
}
/**
 * Update size of background (rect) in some annotations: Measure, Simple
 * Rect.
 *
 * @private
 * @function Highcharts.NavigationBindingsUtilsObject.updateRectSize
 *
 * @param {Highcharts.PointerEventObject} event
 * Normalized browser event
 *
 * @param {Highcharts.Annotation} annotation
 * Annotation to be updated
 */
function updateRectSize(event, annotation) {
    const chart = annotation.chart, options = annotation.options.typeOptions, xAxis = StockToolsUtilities_isNumber(options.xAxis) && chart.xAxis[options.xAxis], yAxis = StockToolsUtilities_isNumber(options.yAxis) && chart.yAxis[options.yAxis];
    if (xAxis && yAxis) {
        const x = xAxis.toValue(event[xAxis.horiz ? 'chartX' : 'chartY']), y = yAxis.toValue(event[yAxis.horiz ? 'chartX' : 'chartY']), width = x - options.point.x, height = options.point.y - y;
        annotation.update({
            typeOptions: {
                background: {
                    width: chart.inverted ? height : width,
                    height: chart.inverted ? width : height
                }
            }
        });
    }
}
/**
 * Compares two arrays of strings, checking their length and if corresponding
 * elements are equal.
 *
 * @param {string[]} a
 *        The first array to compare.
 * @param {string[]} b
 *        The second array to compare.
 * @return {boolean}
 *          Return `true` if the arrays are equal, otherwise `false`.
 */
function shallowArraysEqual(a, b) {
    if (!StockToolsUtilities_defined(a) || !StockToolsUtilities_defined(b)) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Default Export
 *
 * */
const StockToolsUtilities = {
    indicatorsWithAxes,
    indicatorsWithVolume,
    addFlagFromForm,
    attractToPoint,
    getAssignedAxis: StockToolsUtilities_getAssignedAxis,
    isNotNavigatorYAxis,
    isPriceIndicatorEnabled,
    manageIndicators,
    shallowArraysEqual,
    updateHeight,
    updateNthPoint,
    updateRectSize
};
/* harmony default export */ const StockTools_StockToolsUtilities = (StockToolsUtilities);

;// ./code/es-modules/Stock/StockTools/StockToolsBindings.js
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



const { addFlagFromForm: StockToolsBindings_addFlagFromForm, attractToPoint: StockToolsBindings_attractToPoint, isNotNavigatorYAxis: StockToolsBindings_isNotNavigatorYAxis, isPriceIndicatorEnabled: StockToolsBindings_isPriceIndicatorEnabled, manageIndicators: StockToolsBindings_manageIndicators, updateHeight: StockToolsBindings_updateHeight, updateNthPoint: StockToolsBindings_updateNthPoint, updateRectSize: StockToolsBindings_updateRectSize } = StockTools_StockToolsUtilities;

const { fireEvent: StockToolsBindings_fireEvent, merge: StockToolsBindings_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * @sample {highstock} stock/stocktools/custom-stock-tools-bindings
 *         Custom stock tools bindings
 *
 * @type         {Highcharts.Dictionary<Highcharts.NavigationBindingsOptionsObject>}
 * @since        7.0.0
 * @optionparent navigation.bindings
 */
const StockToolsBindings = {
    // Line type annotations:
    /**
     * A segment annotation bindings. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-segment", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    segment: {
        /** @ignore-option */
        className: 'highcharts-segment',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.segment.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'segment',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.segment.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A segment with an arrow annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-segment", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowSegment: {
        /** @ignore-option */
        className: 'highcharts-arrow-segment',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowSegment.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'arrowSegment',
                type: 'crookedLine',
                typeOptions: {
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowSegment.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A ray annotation bindings. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-ray", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    ray: {
        /** @ignore-option */
        className: 'highcharts-ray',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.ray.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'ray',
                type: 'infinityLine',
                typeOptions: {
                    type: 'ray',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.ray.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A ray with an arrow annotation bindings. Includes `start` and one event
     * in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-ray", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowRay: {
        /** @ignore-option */
        className: 'highcharts-arrow-ray',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowRay.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'arrowRay',
                type: 'infinityLine',
                typeOptions: {
                    type: 'ray',
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowRay.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A line annotation. Includes `start` and one event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-infinity-line", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    infinityLine: {
        /** @ignore-option */
        className: 'highcharts-infinity-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.infinityLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'infinityLine',
                type: 'infinityLine',
                typeOptions: {
                    type: 'line',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.infinityLine.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A line with arrow annotation. Includes `start` and one event in `steps`
     * array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-arrow-infinity-line", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    arrowInfinityLine: {
        /** @ignore-option */
        className: 'highcharts-arrow-infinity-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.arrowInfinityLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'arrowInfinityLine',
                type: 'infinityLine',
                typeOptions: {
                    type: 'line',
                    line: {
                        markerEnd: 'arrow'
                    },
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }, {
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.arrowInfinityLine
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    /**
     * A horizontal line annotation. Includes `start` event.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-horizontal-line", "start": function() {}, "annotationsOptions": {}}
     */
    horizontalLine: {
        /** @ignore-option */
        className: 'highcharts-horizontal-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.horizontalLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'horizontalLine',
                type: 'infinityLine',
                draggable: 'y',
                typeOptions: {
                    type: 'horizontalLine',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.horizontalLine.annotationsOptions);
            this.chart.addAnnotation(options);
        }
    },
    /**
     * A vertical line annotation. Includes `start` event.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-line", "start": function() {}, "annotationsOptions": {}}
     */
    verticalLine: {
        /** @ignore-option */
        className: 'highcharts-vertical-line',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalLine.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'verticalLine',
                type: 'infinityLine',
                draggable: 'x',
                typeOptions: {
                    type: 'verticalLine',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalLine.annotationsOptions);
            this.chart.addAnnotation(options);
        }
    },
    /**
     * Crooked line (three points) annotation bindings. Includes `start` and two
     * events in `steps` (for second and third points in crooked line) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-crooked3", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    // Crooked Line type annotations:
    crooked3: {
        /** @ignore-option */
        className: 'highcharts-crooked3',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.crooked3.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'crooked3',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.crooked3.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2)
        ]
    },
    /**
     * Crooked line (five points) annotation bindings. Includes `start` and four
     * events in `steps` (for all consequent points in crooked line) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-crooked5", "start": function() {}, "steps": [function() {}, function() {}, function() {}, function() {}], "annotationsOptions": {}}
     */
    crooked5: {
        /** @ignore-option */
        className: 'highcharts-crooked5',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.crooked5.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'crooked5',
                type: 'crookedLine',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.crooked5.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3),
            StockToolsBindings_updateNthPoint(4)
        ]
    },
    /**
     * Elliott wave (three points) annotation bindings. Includes `start` and two
     * events in `steps` (for second and third points) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-elliott3", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    elliott3: {
        /** @ignore-option */
        className: 'highcharts-elliott3',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.elliott3.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'elliott3',
                type: 'elliottWave',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.elliott3.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3)
        ]
    },
    /**
     * Elliott wave (five points) annotation bindings. Includes `start` and four
     * event in `steps` (for all consequent points in Elliott wave) array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-elliott3", "start": function() {}, "steps": [function() {}, function() {}, function() {}, function() {}], "annotationsOptions": {}}
     */
    elliott5: {
        /** @ignore-option */
        className: 'highcharts-elliott5',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.elliott5.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'elliott5',
                type: 'elliottWave',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.elliott5.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2),
            StockToolsBindings_updateNthPoint(3),
            StockToolsBindings_updateNthPoint(4),
            StockToolsBindings_updateNthPoint(5)
        ]
    },
    /**
     * A measure (x-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-x", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureX: {
        /** @ignore-option */
        className: 'highcharts-measure-x',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureX.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'x',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    crosshairX: {
                        strokeWidth: 1
                    },
                    crosshairY: {
                        enabled: false,
                        strokeWidth: 0
                    },
                    background: {
                        width: 0,
                        height: 0
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureX.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    /**
     * A measure (y-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-y", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureY: {
        /** @ignore-option */
        className: 'highcharts-measure-y',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureY.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'y',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    crosshairX: {
                        enabled: false,
                        strokeWidth: 0
                    },
                    crosshairY: {
                        strokeWidth: 1
                    },
                    background: {
                        width: 0,
                        height: 0,
                        strokeWidth: 0
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureY.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    /**
     * A measure (xy-dimension) annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-measure-xy", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    measureXY: {
        /** @ignore-option */
        className: 'highcharts-measure-xy',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.measureXY.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'measure',
                type: 'measure',
                typeOptions: {
                    selectType: 'xy',
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    point: { x, y },
                    background: {
                        width: 0,
                        height: 0,
                        strokeWidth: 0
                    },
                    crosshairX: {
                        strokeWidth: 1
                    },
                    crosshairY: {
                        strokeWidth: 1
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.measureXY.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateRectSize
        ]
    },
    // Advanced type annotations:
    /**
     * A fibonacci annotation bindings. Includes `start` and two events in
     * `steps` array (updates second point, then height).
     *
     *   @sample {highstock} stock/stocktools/custom-stock-tools-bindings
     *     Custom stock tools bindings
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-fibonacci", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": { "typeOptions": { "reversed": false }}}
     */
    fibonacci: {
        className: 'highcharts-fibonacci',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.fibonacci.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'fibonacci',
                type: 'fibonacci',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.fibonacci.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateHeight
        ]
    },
    /**
     * A parallel channel (tunnel) annotation bindings. Includes `start` and
     * two events in `steps` array (updates second point, then height).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-parallel-channel", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    parallelChannel: {
        /** @ignore-option */
        className: 'highcharts-parallel-channel',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.parallelChannel.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'parallelChannel',
                type: 'tunnel',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.parallelChannel
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateHeight
        ]
    },
    /**
     * An Andrew's pitchfork annotation bindings. Includes `start` and two
     * events in `steps` array (sets second and third control points).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-pitchfork", "start": function() {}, "steps": [function() {}, function() {}], "annotationsOptions": {}}
     */
    pitchfork: {
        /** @ignore-option */
        className: 'highcharts-pitchfork',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.pitchfork.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const x = coordsX.value, y = coordsY.value, navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'pitchfork',
                type: 'pitchfork',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value,
                            y: coordsY.value,
                            controlPoint: {
                                style: {
                                    fill: "#f21313" /* Palette.negativeColor */
                                }
                            }
                        },
                        { x, y },
                        { x, y }
                    ]
                }
            }, navigation.annotationsOptions, navigation.bindings?.pitchfork.annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        steps: [
            StockToolsBindings_updateNthPoint(1),
            StockToolsBindings_updateNthPoint(2)
        ]
    },
    // Labels with arrow and auto increments
    /**
     * A vertical counter annotation bindings. Includes `start` event. On click,
     * finds the closest point and marks it with a numeric annotation -
     * incrementing counter on each add.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-counter", "start": function() {}, "annotationsOptions": {}}
     */
    verticalCounter: {
        /** @ignore-option */
        className: 'highcharts-vertical-counter',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalCounter.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            this.verticalCounter = this.verticalCounter || 0;
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'verticalCounter',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40,
                        text: this.verticalCounter.toString()
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalCounter.annotationsOptions), annotation = this.chart.addAnnotation(options);
            this.verticalCounter++;
            annotation.options.events.click.call(annotation, {});
        }
    },
    /**
     * A time cycles annotation bindings. Includes `start` event and 1 `step`
     * event. first click marks the beginning of the circle, and the second one
     * sets its diameter.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-time-cycles", "start": function() {}, "steps": [function (){}] "annotationsOptions": {}}
     */
    timeCycles: {
        className: 'highcharts-time-cycles',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.timeCycles.annotationsOptions
         */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'timeCycles',
                type: 'timeCycles',
                typeOptions: {
                    xAxis: closestPoint.xAxis,
                    yAxis: closestPoint.yAxis,
                    points: [{
                            x: closestPoint.x
                        }, {
                            x: closestPoint.x
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.timeCycles.annotationsOptions), annotation = this.chart.addAnnotation(options);
            annotation.options.events.click.call(annotation, {});
            return annotation;
        },
        steps: [
            StockToolsBindings_updateNthPoint(1)
        ]
    },
    verticalLabel: {
        /** @ignore-option */
        className: 'highcharts-vertical-label',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalLabel.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'verticalLabel',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalLabel.annotationsOptions), annotation = this.chart.addAnnotation(options);
            annotation.options.events.click.call(annotation, {});
        }
    },
    /**
     * A vertical arrow annotation bindings. Includes `start` event. On click,
     * finds the closest point and marks it with an arrow.
     * `${palette.positiveColor}` is the color of the arrow when
     * pointing from above and `${palette.negativeColor}`
     * when pointing from below the point.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-vertical-arrow", "start": function() {}, "annotationsOptions": {}}
     */
    verticalArrow: {
        /** @ignore-option */
        className: 'highcharts-vertical-arrow',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.verticalArrow.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const closestPoint = StockToolsBindings_attractToPoint(e, this.chart);
            // Exit if clicked out of axes area
            if (!closestPoint) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                langKey: 'verticalArrow',
                type: 'verticalLine',
                typeOptions: {
                    point: {
                        x: closestPoint.x,
                        y: closestPoint.y,
                        xAxis: closestPoint.xAxis,
                        yAxis: closestPoint.yAxis
                    },
                    label: {
                        offset: closestPoint.below ? 40 : -40,
                        format: ' '
                    },
                    connector: {
                        fill: 'none',
                        stroke: closestPoint.below ?
                            "#f21313" /* Palette.negativeColor */ :
                            "#06b535" /* Palette.positiveColor */
                    }
                }
            }, navigation.annotationsOptions, navigation.bindings?.verticalArrow.annotationsOptions), annotation = this.chart.addAnnotation(options);
            annotation.options.events.click.call(annotation, {});
        }
    },
    /**
     * The Fibonacci Time Zones annotation bindings. Includes `start` and one
     * event in `steps` array.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-fibonacci-time-zones", "start": function() {}, "steps": [function() {}], "annotationsOptions": {}}
     */
    fibonacciTimeZones: {
        /** @ignore-option */
        className: 'highcharts-fibonacci-time-zones',
        /**
         * Options to customize the bindings' annotation shapes and labels.
         * @type      {Highcharts.AnnotationsOptions}
         * @extends   navigation.annotationsOptions
         * @apioption navigation.bindings.fibonacciTimeZones.annotationsOptions
         */
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        start: function (e) {
            const [coordsX, coordsY] = this.getCoords(e);
            // Exit if clicked out of axes area
            if (!coordsX || !coordsY) {
                return;
            }
            const navigation = this.chart.options.navigation, options = StockToolsBindings_merge({
                type: 'fibonacciTimeZones',
                langKey: 'fibonacciTimeZones',
                typeOptions: {
                    xAxis: coordsX.axis.index,
                    yAxis: coordsY.axis.index,
                    points: [{
                            x: coordsX.value
                        }]
                }
            }, navigation.annotationsOptions, navigation.bindings?.fibonacciTimeZones
                .annotationsOptions);
            return this.chart.addAnnotation(options);
        },
        /** @ignore-option */
        // eslint-disable-next-line valid-jsdoc
        steps: [
            function (e, annotation) {
                const mockPointOpts = annotation.options.typeOptions.points, x = mockPointOpts && mockPointOpts[0].x, [coordsX, coordsY] = this.getCoords(e);
                if (coordsX && coordsY) {
                    annotation.update({
                        typeOptions: {
                            xAxis: coordsX.axis.index,
                            yAxis: coordsY.axis.index,
                            points: [{
                                    x: x
                                }, {
                                    x: coordsX.value
                                }]
                        }
                    });
                }
            }
        ]
    },
    // Flag types:
    /**
     * A flag series bindings. Includes `start` event. On click, finds the
     * closest point and marks it with a flag with `'circlepin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-circlepin", "start": function() {}}
     */
    flagCirclepin: {
        /** @ignore-option */
        className: 'highcharts-flag-circlepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('circlepin')
    },
    /**
     * A flag series bindings. Includes `start` event. On click, finds the
     * closest point and marks it with a flag with `'diamondpin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-diamondpin", "start": function() {}}
     */
    flagDiamondpin: {
        /** @ignore-option */
        className: 'highcharts-flag-diamondpin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('flag')
    },
    /**
     * A flag series bindings. Includes `start` event.
     * On click, finds the closest point and marks it with a flag with
     * `'squarepin'` shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-squarepin", "start": function() {}}
     */
    flagSquarepin: {
        /** @ignore-option */
        className: 'highcharts-flag-squarepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('squarepin')
    },
    /**
     * A flag series bindings. Includes `start` event.
     * On click, finds the closest point and marks it with a flag without pin
     * shape.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-flag-simplepin", "start": function() {}}
     */
    flagSimplepin: {
        /** @ignore-option */
        className: 'highcharts-flag-simplepin',
        /** @ignore-option */
        start: StockToolsBindings_addFlagFromForm('nopin')
    },
    // Other tools:
    /**
     * Enables zooming in xAxis on a chart. Includes `start` event which
     * changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-x", "init": function() {}}
     */
    zoomX: {
        /** @ignore-option */
        className: 'highcharts-zoom-x',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'x'
                    }
                }
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Enables zooming in yAxis on a chart. Includes `start` event which
     * changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-y", "init": function() {}}
     */
    zoomY: {
        /** @ignore-option */
        className: 'highcharts-zoom-y',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'y'
                    }
                }
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Enables zooming in xAxis and yAxis on a chart. Includes `start` event
     * which changes [chart.zoomType](#chart.zoomType).
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-zoom-xy", "init": function() {}}
     */
    zoomXY: {
        /** @ignore-option */
        className: 'highcharts-zoom-xy',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.update({
                chart: {
                    zooming: {
                        type: 'xy'
                    }
                }
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'line'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-line", "init": function() {}}
     */
    seriesTypeLine: {
        /** @ignore-option */
        className: 'highcharts-series-type-line',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'line',
                useOhlcData: true
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'ohlc'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-ohlc", "init": function() {}}
     */
    seriesTypeOhlc: {
        /** @ignore-option */
        className: 'highcharts-series-type-ohlc',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'ohlc'
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'candlestick'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-candlestick", "init": function() {}}
     */
    seriesTypeCandlestick: {
        /** @ignore-option */
        className: 'highcharts-series-type-candlestick',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'candlestick'
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Changes main series to `'heikinashi'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-heikinashi", "init": function() {}}
     */
    seriesTypeHeikinAshi: {
        /** @ignore-option */
        className: 'highcharts-series-type-heikinashi',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'heikinashi'
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Change main series to `'hlc'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-hlc", "init": function () {}}
     */
    seriesTypeHLC: {
        className: 'highcharts-series-type-hlc',
        init: function (button) {
            this.chart.series[0].update({
                type: 'hlc',
                useOhlcData: true
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button });
        }
    },
    /**
     * Changes main series to `'hollowcandlestick'` type.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-series-type-hollowcandlestick", "init": function() {}}
     */
    seriesTypeHollowCandlestick: {
        /** @ignore-option */
        className: 'highcharts-series-type-hollowcandlestick',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            this.chart.series[0].update({
                type: 'hollowcandlestick'
            });
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Displays chart in fullscreen.
     *
     * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "noDataState": "normal", "highcharts-full-screen", "init": function() {}}
     */
    fullScreen: {
        /** @ignore-option */
        className: 'highcharts-full-screen',
        noDataState: 'normal',
        /** @ignore-option */
        init: function (button) {
            if (this.chart.fullscreen) {
                this.chart.fullscreen.toggle();
            }
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Hides/shows two price indicators:
     * - last price in the dataset
     * - last price in the selected range
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-current-price-indicator", "init": function() {}}
     */
    currentPriceIndicator: {
        /** @ignore-option */
        className: 'highcharts-current-price-indicator',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const chart = this.chart, series = chart.series, gui = chart.stockTools, priceIndicatorEnabled = StockToolsBindings_isPriceIndicatorEnabled(chart.series);
            if (gui && gui.guiEnabled) {
                series.forEach(function (series) {
                    series.update({
                        lastPrice: { enabled: !priceIndicatorEnabled },
                        lastVisiblePrice: {
                            enabled: !priceIndicatorEnabled,
                            label: { enabled: true }
                        }
                    }, false);
                });
                chart.redraw();
            }
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Indicators bindings. Includes `init` event to show a popup.
     *
     * Note: In order to show base series from the chart in the popup's
     * dropdown each series requires
     * [series.id](https://api.highcharts.com/highstock/series.line.id) to be
     * defined.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-indicators", "init": function() {}}
     */
    indicators: {
        /** @ignore-option */
        className: 'highcharts-indicators',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function () {
            const navigation = this;
            StockToolsBindings_fireEvent(navigation, 'showPopup', {
                formType: 'indicators',
                options: {},
                // Callback on submit:
                onSubmit: function (data) {
                    StockToolsBindings_manageIndicators.call(navigation, data);
                }
            });
        }
    },
    /**
     * Hides/shows all annotations on a chart.
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-toggle-annotations", "init": function() {}}
     */
    toggleAnnotations: {
        /** @ignore-option */
        className: 'highcharts-toggle-annotations',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const chart = this.chart, gui = chart.stockTools, iconsURL = gui.getIconsURL();
            this.toggledAnnotations = !this.toggledAnnotations;
            (chart.annotations || []).forEach(function (annotation) {
                annotation.setVisibility(!this.toggledAnnotations);
            }, this);
            if (gui && gui.guiEnabled) {
                if (this.toggledAnnotations) {
                    button.firstChild.style['background-image'] =
                        'url("' + iconsURL +
                            'annotations-hidden.svg")';
                }
                else {
                    button.firstChild.style['background-image'] =
                        'url("' + iconsURL +
                            'annotations-visible.svg")';
                }
            }
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    },
    /**
     * Save a chart in localStorage under `highcharts-chart` key.
     * Stored items:
     * - annotations
     * - indicators (with yAxes)
     * - flags
     *
     * @type    {Highcharts.NavigationBindingsOptionsObject}
     * @product highstock
     * @default {"className": "highcharts-save-chart", "noDataState": "normal", "init": function() {}}
     */
    saveChart: {
        /** @ignore-option */
        className: 'highcharts-save-chart',
        noDataState: 'normal',
        // eslint-disable-next-line valid-jsdoc
        /** @ignore-option */
        init: function (button) {
            const navigation = this, chart = navigation.chart, annotations = [], indicators = [], flags = [], yAxes = [];
            chart.annotations.forEach(function (annotation, index) {
                annotations[index] = annotation.userOptions;
            });
            chart.series.forEach(function (series) {
                if (series.is('sma')) {
                    indicators.push(series.userOptions);
                }
                else if (series.type === 'flags') {
                    flags.push(series.userOptions);
                }
            });
            chart.yAxis.forEach(function (yAxis) {
                if (StockToolsBindings_isNotNavigatorYAxis(yAxis)) {
                    yAxes.push(yAxis.options);
                }
            });
            external_highcharts_src_js_default_default().win.localStorage.setItem('highcharts-chart', JSON.stringify({
                annotations: annotations,
                indicators: indicators,
                flags: flags,
                yAxes: yAxes
            }));
            StockToolsBindings_fireEvent(this, 'deselectButton', { button: button });
        }
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const StockTools_StockToolsBindings = (StockToolsBindings);

;// ./code/es-modules/Stock/StockTools/StockToolsDefaults.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2025 Sebastian Bochan
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Constants
 *
 * */
/**
 * @optionparent lang
 */
const StockToolsDefaults_lang = {
    /**
     * Configure the stockTools GUI titles(hints) in the chart. Requires
     * the `stock-tools.js` module to be loaded.
     *
     * @product highstock
     * @since   7.0.0
     */
    stockTools: {
        gui: {
            // Main buttons:
            simpleShapes: 'Simple shapes',
            lines: 'Lines',
            crookedLines: 'Crooked lines',
            measure: 'Measure',
            advanced: 'Advanced',
            toggleAnnotations: 'Toggle annotations',
            verticalLabels: 'Vertical labels',
            flags: 'Flags',
            zoomChange: 'Zoom change',
            typeChange: 'Type change',
            saveChart: 'Save chart',
            indicators: 'Indicators',
            currentPriceIndicator: 'Current Price Indicators',
            // Other features:
            zoomX: 'Zoom X',
            zoomY: 'Zoom Y',
            zoomXY: 'Zooom XY',
            fullScreen: 'Fullscreen',
            typeOHLC: 'OHLC',
            typeLine: 'Line',
            typeCandlestick: 'Candlestick',
            typeHLC: 'HLC',
            typeHollowCandlestick: 'Hollow Candlestick',
            typeHeikinAshi: 'Heikin Ashi',
            // Basic shapes:
            circle: 'Circle',
            ellipse: 'Ellipse',
            label: 'Label',
            rectangle: 'Rectangle',
            // Flags:
            flagCirclepin: 'Flag circle',
            flagDiamondpin: 'Flag diamond',
            flagSquarepin: 'Flag square',
            flagSimplepin: 'Flag simple',
            // Measures:
            measureXY: 'Measure XY',
            measureX: 'Measure X',
            measureY: 'Measure Y',
            // Segment, ray and line:
            segment: 'Segment',
            arrowSegment: 'Arrow segment',
            ray: 'Ray',
            arrowRay: 'Arrow ray',
            line: 'Line',
            arrowInfinityLine: 'Arrow line',
            horizontalLine: 'Horizontal line',
            verticalLine: 'Vertical line',
            infinityLine: 'Infinity line',
            // Crooked lines:
            crooked3: 'Crooked 3 line',
            crooked5: 'Crooked 5 line',
            elliott3: 'Elliott 3 line',
            elliott5: 'Elliott 5 line',
            // Counters:
            verticalCounter: 'Vertical counter',
            verticalLabel: 'Vertical label',
            verticalArrow: 'Vertical arrow',
            // Advanced:
            fibonacci: 'Fibonacci',
            fibonacciTimeZones: 'Fibonacci Time Zones',
            pitchfork: 'Pitchfork',
            parallelChannel: 'Parallel channel',
            timeCycles: 'Time Cycles'
        }
    },
    navigation: {
        popup: {
            // Annotations:
            circle: 'Circle',
            ellipse: 'Ellipse',
            rectangle: 'Rectangle',
            label: 'Label',
            segment: 'Segment',
            arrowSegment: 'Arrow segment',
            ray: 'Ray',
            arrowRay: 'Arrow ray',
            line: 'Line',
            arrowInfinityLine: 'Arrow line',
            horizontalLine: 'Horizontal line',
            verticalLine: 'Vertical line',
            crooked3: 'Crooked 3 line',
            crooked5: 'Crooked 5 line',
            elliott3: 'Elliott 3 line',
            elliott5: 'Elliott 5 line',
            verticalCounter: 'Vertical counter',
            verticalLabel: 'Vertical label',
            verticalArrow: 'Vertical arrow',
            fibonacci: 'Fibonacci',
            fibonacciTimeZones: 'Fibonacci Time Zones',
            pitchfork: 'Pitchfork',
            parallelChannel: 'Parallel channel',
            infinityLine: 'Infinity line',
            measure: 'Measure',
            measureXY: 'Measure XY',
            measureX: 'Measure X',
            measureY: 'Measure Y',
            timeCycles: 'Time Cycles',
            // Flags:
            flags: 'Flags',
            // GUI elements:
            addButton: 'Add',
            saveButton: 'Save',
            editButton: 'Edit',
            removeButton: 'Remove',
            series: 'Series',
            volume: 'Volume',
            connector: 'Connector',
            // Field names:
            innerBackground: 'Inner background',
            outerBackground: 'Outer background',
            crosshairX: 'Crosshair X',
            crosshairY: 'Crosshair Y',
            tunnel: 'Tunnel',
            background: 'Background',
            // Indicators' searchbox (#16019):
            noFilterMatch: 'No match',
            // Indicators' params (#15170):
            searchIndicators: 'Search Indicators',
            clearFilter: '\u2715 clear filter',
            index: 'Index',
            period: 'Period',
            periods: 'Periods',
            standardDeviation: 'Standard deviation',
            periodTenkan: 'Tenkan period',
            periodSenkouSpanB: 'Senkou Span B period',
            periodATR: 'ATR period',
            multiplierATR: 'ATR multiplier',
            shortPeriod: 'Short period',
            longPeriod: 'Long period',
            signalPeriod: 'Signal period',
            decimals: 'Decimals',
            algorithm: 'Algorithm',
            topBand: 'Top band',
            bottomBand: 'Bottom band',
            initialAccelerationFactor: 'Initial acceleration factor',
            maxAccelerationFactor: 'Max acceleration factor',
            increment: 'Increment',
            multiplier: 'Multiplier',
            ranges: 'Ranges',
            highIndex: 'High index',
            lowIndex: 'Low index',
            deviation: 'Deviation',
            xAxisUnit: 'x-axis unit',
            factor: 'Factor',
            fastAvgPeriod: 'Fast average period',
            slowAvgPeriod: 'Slow average period',
            average: 'Average',
            /**
             * Configure the aliases for indicator names.
             *
             * @product highstock
             * @since 9.3.0
             */
            indicatorAliases: {
                // Overlays
                /**
                 * Acceleration Bands alias.
                 *
                 * @default ['Acceleration Bands']
                 * @type    {Array<string>}
                 */
                abands: ['Acceleration Bands'],
                /**
                 * Bollinger Bands alias.
                 *
                 * @default ['Bollinger Bands']
                 * @type    {Array<string>}
                 */
                bb: ['Bollinger Bands'],
                /**
                 * Double Exponential Moving Average alias.
                 *
                 * @default ['Double Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                dema: ['Double Exponential Moving Average'],
                /**
                 *  Exponential Moving Average alias.
                 *
                 * @default ['Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                ema: ['Exponential Moving Average'],
                /**
                 *  Ichimoku Kinko Hyo alias.
                 *
                 * @default ['Ichimoku Kinko Hyo']
                 * @type    {Array<string>}
                 */
                ikh: ['Ichimoku Kinko Hyo'],
                /**
                 *  Keltner Channels alias.
                 *
                 * @default ['Keltner Channels']
                 * @type    {Array<string>}
                 */
                keltnerchannels: ['Keltner Channels'],
                /**
                 *  Linear Regression alias.
                 *
                 * @default ['Linear Regression']
                 * @type    {Array<string>}
                 */
                linearRegression: ['Linear Regression'],
                /**
                 *  Pivot Points alias.
                 *
                 * @default ['Pivot Points']
                 * @type    {Array<string>}
                 */
                pivotpoints: ['Pivot Points'],
                /**
                 *  Price Channel alias.
                 *
                 * @default ['Price Channel']
                 * @type    {Array<string>}
                 */
                pc: ['Price Channel'],
                /**
                 *  Price Envelopes alias.
                 *
                 * @default ['Price Envelopes']
                 * @type    {Array<string>}
                 */
                priceenvelopes: ['Price Envelopes'],
                /**
                 *  Parabolic SAR alias.
                 *
                 * @default ['Parabolic SAR']
                 * @type    {Array<string>}
                 */
                psar: ['Parabolic SAR'],
                /**
                 *  Simple Moving Average alias.
                 *
                 * @default ['Simple Moving Average']
                 * @type    {Array<string>}
                 */
                sma: ['Simple Moving Average'],
                /**
                 *  Super Trend alias.
                 *
                 * @default ['Super Trend']
                 * @type    {Array<string>}
                 */
                supertrend: ['Super Trend'],
                /**
                 *  Triple Exponential Moving Average alias.
                 *
                 * @default ['Triple Exponential Moving Average']
                 * @type    {Array<string>}
                 */
                tema: ['Triple Exponential Moving Average'],
                /**
                 *  Volume by Price alias.
                 *
                 * @default ['Volume by Price']
                 * @type    {Array<string>}
                 */
                vbp: ['Volume by Price'],
                /**
                 *  Volume Weighted Moving Average alias.
                 *
                 * @default ['Volume Weighted Moving Average']
                 * @type    {Array<string>}
                 */
                vwap: ['Volume Weighted Moving Average'],
                /**
                 *  Weighted Moving Average alias.
                 *
                 * @default ['Weighted Moving Average']
                 * @type    {Array<string>}
                 */
                wma: ['Weighted Moving Average'],
                /**
                 *  Zig Zagalias.
                 *
                 * @default ['Zig Zag']
                 * @type    {Array<string>}
                 */
                zigzag: ['Zig Zag'],
                // Oscilators
                /**
                 *  Absolute price indicator alias.
                 *
                 * @default ['Absolute price indicator']
                 * @type    {Array<string>}
                 */
                apo: ['Absolute price indicator'],
                /**
                 * Accumulation/Distribution alias.
                 *
                 * @default ['Accumulation/Distribution’]
                 * @type    {Array<string>}
                 */
                ad: ['Accumulation/Distribution'],
                /**
                 *  Aroon alias.
                 *
                 * @default ['Aroon']
                 * @type    {Array<string>}
                 */
                aroon: ['Aroon'],
                /**
                 *  Aroon oscillator alias.
                 *
                 * @default ['Aroon oscillator']
                 * @type    {Array<string>}
                 */
                aroonoscillator: ['Aroon oscillator'],
                /**
                 *  Average True Range alias.
                 *
                 * @default ['Average True Range’]
                 * @type    {Array<string>}
                 */
                atr: ['Average True Range'],
                /**
                 *  Awesome oscillator alias.
                 *
                 * @default ['Awesome oscillator’]
                 * @type    {Array<string>}
                 */
                ao: ['Awesome oscillator'],
                /**
                 *  Commodity Channel Index alias.
                 *
                 * @default ['Commodity Channel Index’]
                 * @type    {Array<string>}
                 */
                cci: ['Commodity Channel Index'],
                /**
                 *  Chaikin alias.
                 *
                 * @default ['Chaikin’]
                 * @type    {Array<string>}
                 */
                chaikin: ['Chaikin'],
                /**
                 *  Chaikin Money Flow alias.
                 *
                 * @default ['Chaikin Money Flow’]
                 * @type    {Array<string>}
                 */
                cmf: ['Chaikin Money Flow'],
                /**
                 *  Chande Momentum Oscillator alias.
                 *
                 * @default ['Chande Momentum Oscillator’]
                 * @type    {Array<string>}
                 */
                cmo: ['Chande Momentum Oscillator'],
                /**
                 *  Disparity Index alias.
                 *
                 * @default ['Disparity Index’]
                 * @type    {Array<string>}
                 */
                disparityindex: ['Disparity Index'],
                /**
                 *  Directional Movement Index alias.
                 *
                 * @default ['Directional Movement Index’]
                 * @type    {Array<string>}
                 */
                dmi: ['Directional Movement Index'],
                /**
                 *  Detrended price oscillator alias.
                 *
                 * @default ['Detrended price oscillator’]
                 * @type    {Array<string>}
                 */
                dpo: ['Detrended price oscillator'],
                /**
                 *  Klinger Oscillator alias.
                 *
                 * @default [‘Klinger Oscillator’]
                 * @type    {Array<string>}
                 */
                klinger: ['Klinger Oscillator'],
                /**
                 *  Linear Regression Angle alias.
                 *
                 * @default [‘Linear Regression Angle’]
                 * @type    {Array<string>}
                 */
                linearRegressionAngle: ['Linear Regression Angle'],
                /**
                 *  Linear Regression Intercept alias.
                 *
                 * @default [‘Linear Regression Intercept’]
                 * @type    {Array<string>}
                 */
                linearRegressionIntercept: ['Linear Regression Intercept'],
                /**
                 *  Linear Regression Slope alias.
                 *
                 * @default [‘Linear Regression Slope’]
                 * @type    {Array<string>}
                 */
                linearRegressionSlope: ['Linear Regression Slope'],
                /**
                 *  Moving Average Convergence Divergence alias.
                 *
                 * @default ['Moving Average Convergence Divergence’]
                 * @type    {Array<string>}
                 */
                macd: ['Moving Average Convergence Divergence'],
                /**
                 *  Money Flow Index alias.
                 *
                 * @default ['Money Flow Index’]
                 * @type    {Array<string>}
                 */
                mfi: ['Money Flow Index'],
                /**
                 *  Momentum alias.
                 *
                 * @default [‘Momentum’]
                 * @type    {Array<string>}
                 */
                momentum: ['Momentum'],
                /**
                 *  Normalized Average True Range alias.
                 *
                 * @default ['Normalized Average True Range’]
                 * @type    {Array<string>}
                 */
                natr: ['Normalized Average True Range'],
                /**
                 *  On-Balance Volume alias.
                 *
                 * @default ['On-Balance Volume’]
                 * @type    {Array<string>}
                 */
                obv: ['On-Balance Volume'],
                /**
                 * Percentage Price oscillator alias.
                 *
                 * @default ['Percentage Price oscillator’]
                 * @type    {Array<string>}
                 */
                ppo: ['Percentage Price oscillator'],
                /**
                 *  Rate of Change alias.
                 *
                 * @default ['Rate of Change’]
                 * @type    {Array<string>}
                 */
                roc: ['Rate of Change'],
                /**
                 *  Relative Strength Index alias.
                 *
                 * @default ['Relative Strength Index’]
                 * @type    {Array<string>}
                 */
                rsi: ['Relative Strength Index'],
                /**
                 *  Slow Stochastic alias.
                 *
                 * @default [‘Slow Stochastic’]
                 * @type    {Array<string>}
                 */
                slowstochastic: ['Slow Stochastic'],
                /**
                 *  Stochastic alias.
                 *
                 * @default [‘Stochastic’]
                 * @type    {Array<string>}
                 */
                stochastic: ['Stochastic'],
                /**
                 *  TRIX alias.
                 *
                 * @default [‘TRIX’]
                 * @type    {Array<string>}
                 */
                trix: ['TRIX'],
                /**
                 *  Williams %R alias.
                 *
                 * @default [‘Williams %R’]
                 * @type    {Array<string>}
                 */
                williamsr: ['Williams %R']
            }
        }
    }
};
/**
 * Configure the stockTools gui strings in the chart. Requires the
 * [stockTools module]() to be loaded. For a description of the module
 * and information on its features, see [Highcharts StockTools]().
 *
 * @product highstock
 *
 * @sample stock/demo/stock-tools-gui Stock Tools GUI
 *
 * @sample stock/demo/stock-tools-custom-gui Stock Tools customized GUI
 *
 * @since        7.0.0
 * @optionparent stockTools
 */
const stockTools = {
    /**
     * Definitions of buttons in Stock Tools GUI.
     */
    gui: {
        /**
         * Path where Highcharts will look for icons. Change this to use
         * icons from a different server.
         *
         * Since 7.1.3 use [iconsURL](#navigation.iconsURL) for popup and
         * stock tools.
         *
         * @deprecated
         * @apioption stockTools.gui.iconsURL
         *
         */
        /**
         * Enable or disable the stockTools gui.
         */
        enabled: true,
        /**
         * A CSS class name to apply to the stocktools' div,
         * allowing unique CSS styling for each chart.
         */
        className: 'highcharts-bindings-wrapper',
        /**
         * A CSS class name to apply to the container of buttons,
         * allowing unique CSS styling for each chart.
         */
        toolbarClassName: 'stocktools-toolbar',
        /**
         * A collection of strings pointing to config options for the
         * toolbar items. Each name refers to a unique key from the
         * definitions object.
         *
         * @type    {Array<string>}
         * @default [
         *   'indicators',
         *   'separator',
         *   'simpleShapes',
         *   'lines',
         *   'crookedLines',
         *   'measure',
         *   'advanced',
         *   'toggleAnnotations',
         *   'separator',
         *   'verticalLabels',
         *   'flags',
         *   'separator',
         *   'zoomChange',
         *   'fullScreen',
         *   'typeChange',
         *   'separator',
         *   'currentPriceIndicator',
         *   'saveChart'
         * ]
         */
        buttons: [
            'indicators',
            'separator',
            'simpleShapes',
            'lines',
            'crookedLines',
            'measure',
            'advanced',
            'toggleAnnotations',
            'separator',
            'verticalLabels',
            'flags',
            'separator',
            'zoomChange',
            'fullScreen',
            'typeChange',
            'separator',
            'currentPriceIndicator',
            'saveChart'
        ],
        /**
         * An options object of the buttons definitions. Each name refers to
         * unique key from buttons array.
         */
        definitions: {
            separator: {
                elementType: 'span',
                /**
                 * A predefined background symbol for the button.
                 */
                symbol: 'separator.svg'
            },
            simpleShapes: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'label',
                 *   'circle',
                 *   'ellipse',
                 *   'rectangle'
                 * ]
                 *
                 */
                items: [
                    'label',
                    'circle',
                    'ellipse',
                    'rectangle'
                ],
                circle: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'circle.svg'
                },
                ellipse: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'ellipse.svg'
                },
                rectangle: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'rectangle.svg'
                },
                label: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'label.svg'
                }
            },
            flags: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'flagCirclepin',
                 *   'flagDiamondpin',
                 *   'flagSquarepin',
                 *   'flagSimplepin'
                 * ]
                 *
                 */
                items: [
                    'flagCirclepin',
                    'flagDiamondpin',
                    'flagSquarepin',
                    'flagSimplepin'
                ],
                flagSimplepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'flag-basic.svg'
                },
                flagDiamondpin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     *
                     */
                    symbol: 'flag-diamond.svg'
                },
                flagSquarepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'flag-trapeze.svg'
                },
                flagCirclepin: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'flag-elipse.svg'
                }
            },
            lines: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'segment',
                 *   'arrowSegment',
                 *   'ray',
                 *   'arrowRay',
                 *   'line',
                 *   'arrowInfinityLine',
                 *   'horizontalLine',
                 *   'verticalLine'
                 * ]
                 */
                items: [
                    'segment',
                    'arrowSegment',
                    'ray',
                    'arrowRay',
                    'line',
                    'arrowInfinityLine',
                    'horizontalLine',
                    'verticalLine'
                ],
                segment: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'segment.svg'
                },
                arrowSegment: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-segment.svg'
                },
                ray: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'ray.svg'
                },
                arrowRay: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-ray.svg'
                },
                line: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'line.svg'
                },
                arrowInfinityLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'arrow-line.svg'
                },
                verticalLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-line.svg'
                },
                horizontalLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'horizontal-line.svg'
                }
            },
            crookedLines: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'elliott3',
                 *   'elliott5',
                 *   'crooked3',
                 *   'crooked5'
                 * ]
                 *
                 */
                items: [
                    'elliott3',
                    'elliott5',
                    'crooked3',
                    'crooked5'
                ],
                crooked3: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'crooked-3.svg'
                },
                crooked5: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'crooked-5.svg'
                },
                elliott3: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'elliott-3.svg'
                },
                elliott5: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'elliott-5.svg'
                }
            },
            verticalLabels: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'verticalCounter',
                 *   'verticalLabel',
                 *   'verticalArrow'
                 * ]
                 */
                items: [
                    'verticalCounter',
                    'verticalLabel',
                    'verticalArrow'
                ],
                verticalCounter: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-counter.svg'
                },
                verticalLabel: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-label.svg'
                },
                verticalArrow: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'vertical-arrow.svg'
                }
            },
            advanced: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'fibonacci',
                 *   'fibonacciTimeZones',
                 *   'pitchfork',
                 *   'parallelChannel',
                 *   'timeCycles'
                 * ]
                 */
                items: [
                    'fibonacci',
                    'fibonacciTimeZones',
                    'pitchfork',
                    'parallelChannel',
                    'timeCycles'
                ],
                pitchfork: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'pitchfork.svg'
                },
                fibonacci: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'fibonacci.svg'
                },
                fibonacciTimeZones: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'fibonacci-timezone.svg'
                },
                parallelChannel: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'parallel-channel.svg'
                },
                timeCycles: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type {string}
                     */
                    symbol: 'time-cycles.svg'
                }
            },
            measure: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'measureXY',
                 *   'measureX',
                 *   'measureY'
                 * ]
                 */
                items: [
                    'measureXY',
                    'measureX',
                    'measureY'
                ],
                measureX: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-x.svg'
                },
                measureY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-y.svg'
                },
                measureXY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'measure-xy.svg'
                }
            },
            toggleAnnotations: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'annotations-visible.svg'
            },
            currentPriceIndicator: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'current-price-show.svg'
            },
            indicators: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'indicators.svg'
            },
            zoomChange: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'zoomX',
                 *   'zoomY',
                 *   'zoomXY'
                 * ]
                 */
                items: [
                    'zoomX',
                    'zoomY',
                    'zoomXY'
                ],
                zoomX: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-x.svg'
                },
                zoomY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-y.svg'
                },
                zoomXY: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'zoom-xy.svg'
                }
            },
            typeChange: {
                /**
                 * A collection of strings pointing to config options for
                 * the items.
                 *
                 * @type {Array}
                 * @default [
                 *   'typeOHLC',
                 *   'typeLine',
                 *   'typeCandlestick'
                 *   'typeHollowCandlestick'
                 * ]
                 */
                items: [
                    'typeOHLC',
                    'typeLine',
                    'typeCandlestick',
                    'typeHollowCandlestick',
                    'typeHLC',
                    'typeHeikinAshi'
                ],
                typeOHLC: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-ohlc.svg'
                },
                typeLine: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-line.svg'
                },
                typeCandlestick: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-candlestick.svg'
                },
                typeHLC: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-hlc.svg'
                },
                typeHeikinAshi: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-heikin-ashi.svg'
                },
                typeHollowCandlestick: {
                    /**
                     * A predefined background symbol for the button.
                     *
                     * @type   {string}
                     */
                    symbol: 'series-hollow-candlestick.svg'
                }
            },
            fullScreen: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'fullscreen.svg'
            },
            saveChart: {
                /**
                 * A predefined background symbol for the button.
                 *
                 * @type   {string}
                 */
                symbol: 'save-chart.svg'
            }
        },
        /**
         * Whether the stock tools toolbar is visible.
         *
         * @since 11.4.4
         */
        visible: true
    }
};
/* *
 *
 *  Default Exports
 *
 * */
const StockToolsDefaults = {
    lang: StockToolsDefaults_lang,
    stockTools
};
/* harmony default export */ const StockTools_StockToolsDefaults = (StockToolsDefaults);

;// ./code/es-modules/Stock/StockTools/StockTools.js
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


const { setOptions: StockTools_setOptions } = (external_highcharts_src_js_default_default());

const { getAssignedAxis: StockTools_getAssignedAxis } = NavigationBindingsUtilities;



const { isNotNavigatorYAxis: StockTools_isNotNavigatorYAxis, isPriceIndicatorEnabled: StockTools_isPriceIndicatorEnabled } = StockTools_StockToolsUtilities;

const { correctFloat, defined: StockTools_defined, isNumber: StockTools_isNumber, pick: StockTools_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function compose(NavigationBindingsClass) {
    const navigationProto = NavigationBindingsClass.prototype;
    if (!navigationProto.utils?.manageIndicators) {
        // Extends NavigationBindings to support indicators and resizers:
        navigationProto.getYAxisPositions = navigationGetYAxisPositions;
        navigationProto.getYAxisResizers = navigationGetYAxisResizers;
        navigationProto.recalculateYAxisPositions =
            navigationRecalculateYAxisPositions;
        navigationProto.resizeYAxes = navigationResizeYAxes;
        navigationProto.utils = navigationProto.utils || {};
        navigationProto.utils.indicatorsWithAxes = StockTools_StockToolsUtilities.indicatorsWithAxes;
        navigationProto.utils.indicatorsWithVolume = StockTools_StockToolsUtilities.indicatorsWithVolume;
        navigationProto.utils.getAssignedAxis = StockTools_getAssignedAxis;
        navigationProto.utils.isPriceIndicatorEnabled = StockTools_isPriceIndicatorEnabled;
        navigationProto.utils.manageIndicators = StockTools_StockToolsUtilities.manageIndicators;
        StockTools_setOptions(StockTools_StockToolsDefaults);
        StockTools_setOptions({
            navigation: {
                bindings: StockTools_StockToolsBindings
            }
        });
    }
}
/**
 * Get current positions for all yAxes. If new axis does not have position,
 * returned is default height and last available top place.
 *
 * @private
 * @function Highcharts.NavigationBindings#getYAxisPositions
 *
 * @param {Array<Highcharts.Axis>} yAxes
 *        Array of yAxes available in the chart.
 *
 * @param {number} plotHeight
 *        Available height in the chart.
 *
 * @param {number} defaultHeight
 *        Default height in percents.
 *
 * @param {Highcharts.AxisPositions} removedYAxisProps
 *        Height and top value of the removed yAxis in percents.
 *
 * @return {Highcharts.YAxisPositions}
 *         An object containing an array of calculated positions
 *         in percentages. Format: `{top: Number, height: Number}`
 *         and maximum value of top + height of axes.
 */
function navigationGetYAxisPositions(yAxes, plotHeight, defaultHeight, removedYAxisProps) {
    let allAxesHeight = 0, previousAxisHeight, removedHeight, removedTop;
    /** @private */
    function isPercentage(prop) {
        return StockTools_defined(prop) && !StockTools_isNumber(prop) && prop.match('%');
    }
    if (removedYAxisProps) {
        removedTop = correctFloat((parseFloat(removedYAxisProps.top) / 100));
        removedHeight = correctFloat((parseFloat(removedYAxisProps.height) / 100));
    }
    const positions = yAxes.map((yAxis, index) => {
        let height = correctFloat(isPercentage(yAxis.options.height) ?
            parseFloat(yAxis.options.height) / 100 :
            yAxis.height / plotHeight), top = correctFloat(isPercentage(yAxis.options.top) ?
            parseFloat(yAxis.options.top) / 100 :
            (yAxis.top - yAxis.chart.plotTop) / plotHeight);
        if (!removedHeight) {
            // New axis' height is NaN so we can check if
            // the axis is newly created this way
            if (!StockTools_isNumber(height)) {
                // Check if the previous axis is the
                // indicator axis (every indicator inherits from sma)
                height = yAxes[index - 1].series
                    .every((s) => s.is('sma')) ?
                    previousAxisHeight : defaultHeight / 100;
            }
            if (!StockTools_isNumber(top)) {
                top = allAxesHeight;
            }
            previousAxisHeight = height;
            allAxesHeight = correctFloat(Math.max(allAxesHeight, (top || 0) + (height || 0)));
        }
        else {
            // Move all axes which were below the removed axis up.
            if (top > removedTop) {
                top -= removedHeight;
            }
            allAxesHeight = Math.max(allAxesHeight, (top || 0) + (height || 0));
        }
        return {
            height: height * 100,
            top: top * 100
        };
    });
    return { positions, allAxesHeight };
}
/**
 * Get current resize options for each yAxis. Note that each resize is
 * linked to the next axis, except the last one which shouldn't affect
 * axes in the navigator. Because indicator can be removed with it's yAxis
 * in the middle of yAxis array, we need to bind closest yAxes back.
 *
 * @private
 * @function Highcharts.NavigationBindings#getYAxisResizers
 *
 * @param {Array<Highcharts.Axis>} yAxes
 *        Array of yAxes available in the chart
 *
 * @return {Array<object>}
 *         An array of resizer options.
 *         Format: `{enabled: Boolean, controlledAxis: { next: [String]}}`
 */
function navigationGetYAxisResizers(yAxes) {
    const resizers = [];
    yAxes.forEach(function (_yAxis, index) {
        const nextYAxis = yAxes[index + 1];
        // We have next axis, bind them:
        if (nextYAxis) {
            resizers[index] = {
                enabled: true,
                controlledAxis: {
                    next: [
                        StockTools_pick(nextYAxis.options.id, nextYAxis.index)
                    ]
                }
            };
        }
        else {
            // Remove binding:
            resizers[index] = {
                enabled: false
            };
        }
    });
    return resizers;
}
/**
 * Utility to modify calculated positions according to the remaining/needed
 * space. Later, these positions are used in `yAxis.update({ top, height })`
 *
 * @private
 * @function Highcharts.NavigationBindings#recalculateYAxisPositions
 * @param {Array<Highcharts.Dictionary<number>>} positions
 * Default positions of all yAxes.
 * @param {number} changedSpace
 * How much space should be added or removed.
 * @param {boolean} modifyHeight
 * Update only `top` or both `top` and `height`.
 * @param {number} adder
 * `-1` or `1`, to determine whether we should add or remove space.
 *
 * @return {Array<object>}
 *         Modified positions,
 */
function navigationRecalculateYAxisPositions(positions, changedSpace, modifyHeight, adder) {
    positions.forEach(function (position, index) {
        const prevPosition = positions[index - 1];
        position.top = !prevPosition ? 0 :
            correctFloat(prevPosition.height + prevPosition.top);
        if (modifyHeight) {
            position.height = correctFloat(position.height + adder * changedSpace);
        }
    });
    return positions;
}
/**
 * Resize all yAxes (except navigator) to fit the plotting height. Method
 * checks if new axis is added, if the new axis will fit under previous
 * axes it is placed there. If not, current plot area is scaled
 * to make room for new axis.
 *
 * If axis is removed, the current plot area stretches to fit into 100%
 * of the plot area.
 *
 * @private
 */
function navigationResizeYAxes(removedYAxisProps) {
    // The height of the new axis before rescalling. In %, but as a number.
    const defaultHeight = 20;
    const chart = this.chart, 
    // Only non-navigator axes
    yAxes = chart.yAxis.filter(StockTools_isNotNavigatorYAxis), plotHeight = chart.plotHeight, 
    // Gather current heights (in %)
    { positions, allAxesHeight } = this.getYAxisPositions(yAxes, plotHeight, defaultHeight, removedYAxisProps), resizers = this.getYAxisResizers(yAxes);
    // Check if the axis is being either added or removed and
    // if the new indicator axis will fit under existing axes.
    // if so, there is no need to scale them.
    if (!removedYAxisProps &&
        allAxesHeight <= correctFloat(0.8 + defaultHeight / 100)) {
        positions[positions.length - 1] = {
            height: defaultHeight,
            top: correctFloat(allAxesHeight * 100 - defaultHeight)
        };
    }
    else {
        positions.forEach(function (position) {
            position.height = (position.height / (allAxesHeight * 100)) * 100;
            position.top = (position.top / (allAxesHeight * 100)) * 100;
        });
    }
    positions.forEach(function (position, index) {
        yAxes[index].update({
            height: position.height + '%',
            top: position.top + '%',
            resize: resizers[index],
            offset: 0
        }, false);
    });
}
/* *
 *
 *  Default Export
 *
 * */
const StockTools = {
    compose
};
/* harmony default export */ const StockTools_StockTools = (StockTools);

;// external ["../highcharts.src.js","default","AST"]
const external_highcharts_src_js_default_AST_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].AST;
var external_highcharts_src_js_default_AST_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_AST_namespaceObject);
;// ./code/es-modules/Stock/StockTools/StockToolbar.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2025 Sebastian Bochan
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




const { addEvent: StockToolbar_addEvent, createElement, css, defined: StockToolbar_defined, fireEvent: StockToolbar_fireEvent, getStyle, isArray: StockToolbar_isArray, merge: StockToolbar_merge, pick: StockToolbar_pick } = (external_highcharts_src_js_default_default());
const { shallowArraysEqual: StockToolbar_shallowArraysEqual } = StockTools_StockToolsUtilities;
/* *
 *
 *  Classes
 *
 * */
/**
 * Toolbar Class
 *
 * @private
 * @class
 *
 * @param {object} options
 *        Options of toolbar
 *
 * @param {Highcharts.Dictionary<string>|undefined} langOptions
 *        Language options
 *
 * @param {Highcharts.Chart} chart
 *        Reference to chart
 */
class Toolbar {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options, langOptions, chart) {
        this.width = 0;
        this.isDirty = false;
        this.chart = chart;
        this.options = options;
        this.lang = langOptions;
        // Set url for icons.
        this.iconsURL = this.getIconsURL();
        this.guiEnabled = options.enabled;
        this.visible = StockToolbar_pick(options.visible, true);
        this.guiClassName = options.className;
        this.toolbarClassName = options.toolbarClassName;
        // General events collection which should be removed upon
        // destroy/update:
        this.eventsToUnbind = [];
        if (this.guiEnabled) {
            this.createContainer();
            this.createButtons();
            this.showHideNavigation();
        }
        StockToolbar_fireEvent(this, 'afterInit');
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create and set up stockTools buttons with their events and submenus.
     * @private
     */
    createButtons() {
        const lang = this.lang, guiOptions = this.options, toolbar = this.toolbar, buttons = guiOptions.buttons, defs = guiOptions.definitions, allButtons = toolbar.childNodes;
        this.buttonList = buttons;
        // Create buttons
        buttons.forEach((btnName) => {
            const button = this.addButton(toolbar, defs, btnName, lang);
            this.eventsToUnbind.push(StockToolbar_addEvent(button.buttonWrapper, 'click', () => this.eraseActiveButtons(allButtons, button.buttonWrapper)));
            if (StockToolbar_isArray(defs[btnName].items)) {
                // Create submenu buttons
                this.addSubmenu(button, defs[btnName]);
            }
        });
    }
    /**
     * Create submenu (list of buttons) for the option. In example main button
     * is Line, in submenu will be buttons with types of lines.
     *
     * @private
     *
     * @param {Highcharts.Dictionary<Highcharts.HTMLDOMElement>} parentBtn
     *        Button which has submenu
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons
     */
    addSubmenu(parentBtn, button) {
        const submenuArrow = parentBtn.submenuArrow, buttonWrapper = parentBtn.buttonWrapper, buttonWidth = getStyle(buttonWrapper, 'width'), wrapper = this.wrapper, menuWrapper = this.listWrapper, allButtons = this.toolbar.childNodes, 
        // Create submenu container
        submenuWrapper = this.submenu = createElement('ul', {
            className: 'highcharts-submenu-wrapper'
        }, void 0, buttonWrapper);
        // Create submenu buttons and select the first one
        this.addSubmenuItems(buttonWrapper, button);
        // Show / hide submenu
        this.eventsToUnbind.push(StockToolbar_addEvent(submenuArrow, 'click', (e) => {
            e.stopPropagation();
            // Erase active class on all other buttons
            this.eraseActiveButtons(allButtons, buttonWrapper);
            // Hide menu
            if (buttonWrapper.className
                .indexOf('highcharts-current') >= 0) {
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                buttonWrapper.classList.remove('highcharts-current');
                submenuWrapper.style.display = 'none';
            }
            else {
                // Show menu
                // to calculate height of element
                submenuWrapper.style.display = 'block';
                let topMargin = submenuWrapper.offsetHeight -
                    buttonWrapper.offsetHeight - 3;
                // Calculate position of submenu in the box
                // if submenu is inside, reset top margin
                if (
                // Cut on the bottom
                !(submenuWrapper.offsetHeight +
                    buttonWrapper.offsetTop >
                    wrapper.offsetHeight &&
                    // Cut on the top
                    buttonWrapper.offsetTop > topMargin)) {
                    topMargin = 0;
                }
                // Apply calculated styles
                css(submenuWrapper, {
                    top: -topMargin + 'px',
                    left: buttonWidth + 3 + 'px'
                });
                buttonWrapper.className += ' highcharts-current';
                menuWrapper.startWidth = wrapper.offsetWidth;
                menuWrapper.style.width = menuWrapper.startWidth +
                    getStyle(menuWrapper, 'padding-left') +
                    submenuWrapper.offsetWidth + 3 + 'px';
            }
        }));
    }
    /**
     * Create buttons in submenu
     *
     * @private
     *
     * @param {Highcharts.HTMLDOMElement} buttonWrapper
     *        Button where submenu is placed
     *
     * @param {Highcharts.StockToolsGuiDefinitionsButtonsOptions} button
     *        List of all buttons options
     */
    addSubmenuItems(buttonWrapper, button) {
        const _self = this, submenuWrapper = this.submenu, lang = this.lang, menuWrapper = this.listWrapper, items = button.items;
        let submenuBtn;
        // Add items to submenu
        items.forEach((btnName) => {
            // Add buttons to submenu
            submenuBtn = this.addButton(submenuWrapper, button, btnName, lang);
            this.eventsToUnbind.push(StockToolbar_addEvent(submenuBtn.mainButton, 'click', function () {
                _self.switchSymbol(this, buttonWrapper, true);
                menuWrapper.style.width =
                    menuWrapper.startWidth + 'px';
                submenuWrapper.style.display = 'none';
            }));
        });
        // Select first submenu item
        const firstSubmenuItem = submenuWrapper.querySelectorAll('li > .highcharts-menu-item-btn')[0];
        // Replace current symbol, in main button, with submenu's button style
        this.switchSymbol(firstSubmenuItem, false);
    }
    /**
     * Erase active class on all other buttons.
     * @private
     */
    eraseActiveButtons(buttons, currentButton, submenuItems) {
        [].forEach.call(buttons, (btn) => {
            if (btn !== currentButton) {
                btn.classList.remove('highcharts-current');
                btn.classList.remove('highcharts-active');
                submenuItems =
                    btn.querySelectorAll('.highcharts-submenu-wrapper');
                // Hide submenu
                if (submenuItems.length > 0) {
                    submenuItems[0].style.display = 'none';
                }
            }
        });
    }
    /**
     * Create single button. Consist of HTML elements `li`, `button`, and (if
     * exists) submenu container.
     *
     * @private
     *
     * @param {Highcharts.HTMLDOMElement} target
     *        HTML reference, where button should be added
     *
     * @param {object} options
     *        All options, by btnName refer to particular button
     *
     * @param {string} btnName
     *        Button name of functionality mapped for specific class
     *
     * @param {Highcharts.Dictionary<string>} lang
     *        All titles, by btnName refer to particular button
     *
     * @return {object}
     *         References to all created HTML elements
     */
    addButton(target, options, btnName, lang = {}) {
        const btnOptions = options[btnName], items = btnOptions.items, classMapping = Toolbar.prototype.classMapping, userClassName = btnOptions.className || '';
        // Main button wrapper
        const buttonWrapper = createElement('li', {
            className: StockToolbar_pick(classMapping[btnName], '') + ' ' + userClassName,
            title: lang[btnName] || btnName
        }, void 0, target);
        // Single button
        const elementType = (btnOptions.elementType || 'button');
        const mainButton = createElement(elementType, {
            className: 'highcharts-menu-item-btn'
        }, void 0, buttonWrapper);
        // Submenu
        if (items && items.length) {
            // Arrow is a hook to show / hide submenu
            const submenuArrow = createElement('button', {
                className: 'highcharts-submenu-item-arrow ' +
                    'highcharts-arrow-right'
            }, void 0, buttonWrapper);
            submenuArrow.style.backgroundImage = 'url(' +
                this.iconsURL + 'arrow-bottom.svg)';
            return {
                buttonWrapper,
                mainButton,
                submenuArrow
            };
        }
        mainButton.style.backgroundImage = 'url(' +
            this.iconsURL + btnOptions.symbol + ')';
        return {
            buttonWrapper,
            mainButton
        };
    }
    /**
     * Create navigation's HTML elements: container and arrows.
     * @private
     */
    addNavigation() {
        const wrapper = this.wrapper;
        // Arrow wrapper
        this.arrowWrapper = createElement('div', {
            className: 'highcharts-arrow-wrapper'
        });
        this.arrowUp = createElement('div', {
            className: 'highcharts-arrow-up'
        }, void 0, this.arrowWrapper);
        this.arrowUp.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        this.arrowDown = createElement('div', {
            className: 'highcharts-arrow-down'
        }, void 0, this.arrowWrapper);
        this.arrowDown.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        wrapper.insertBefore(this.arrowWrapper, wrapper.childNodes[0]);
        // Attach scroll events
        this.scrollButtons();
    }
    /**
     * Add events to navigation (two arrows) which allows user to scroll
     * top/down GUI buttons, if container's height is not enough.
     * @private
     */
    scrollButtons() {
        const wrapper = this.wrapper, toolbar = this.toolbar, step = 0.1 * wrapper.offsetHeight; // 0.1 = 10%
        let targetY = 0;
        this.eventsToUnbind.push(StockToolbar_addEvent(this.arrowUp, 'click', () => {
            if (targetY > 0) {
                targetY -= step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
        this.eventsToUnbind.push(StockToolbar_addEvent(this.arrowDown, 'click', () => {
            if (wrapper.offsetHeight + targetY <=
                toolbar.offsetHeight + step) {
                targetY += step;
                toolbar.style.marginTop = -targetY + 'px';
            }
        }));
    }
    /*
     * Create the stockTools container and sets up event bindings.
     *
     */
    createContainer() {
        const chart = this.chart, guiOptions = this.options, container = chart.container, navigation = chart.options.navigation, bindingsClassName = navigation?.bindingsClassName, self = this;
        let listWrapper, toolbar;
        // Create main container
        const wrapper = this.wrapper = createElement('div', {
            className: 'highcharts-stocktools-wrapper ' +
                guiOptions.className + ' ' + bindingsClassName
        });
        container.appendChild(wrapper);
        this.showHideBtn = createElement('div', {
            className: 'highcharts-toggle-toolbar highcharts-arrow-left'
        }, void 0, wrapper);
        // Toggle menu
        this.eventsToUnbind.push(StockToolbar_addEvent(this.showHideBtn, 'click', () => {
            this.update({
                gui: {
                    visible: !self.visible
                }
            });
        }));
        // Mimic event behaviour of being outside chart.container
        [
            'mousedown',
            'mousemove',
            'click',
            'touchstart'
        ].forEach((eventType) => {
            StockToolbar_addEvent(wrapper, eventType, (e) => e.stopPropagation());
        });
        StockToolbar_addEvent(wrapper, 'mouseover', (e) => chart.pointer?.onContainerMouseLeave(e));
        // Toolbar
        this.toolbar = toolbar = createElement('ul', {
            className: 'highcharts-stocktools-toolbar ' +
                guiOptions.toolbarClassName
        });
        // Add container for list of buttons
        this.listWrapper = listWrapper = createElement('div', {
            className: 'highcharts-menu-wrapper'
        });
        wrapper.insertBefore(listWrapper, wrapper.childNodes[0]);
        listWrapper.insertBefore(toolbar, listWrapper.childNodes[0]);
        this.showHideToolbar();
        // Add navigation which allows user to scroll down / top GUI buttons
        this.addNavigation();
    }
    /**
     * Function called in redraw verifies if the navigation should be visible.
     * @private
     */
    showHideNavigation() {
        // Arrows
        // 50px space for arrows
        if (this.visible &&
            this.toolbar.offsetHeight > (this.wrapper.offsetHeight - 50)) {
            this.arrowWrapper.style.display = 'block';
        }
        else {
            // Reset margin if whole toolbar is visible
            this.toolbar.style.marginTop = '0px';
            // Hide arrows
            this.arrowWrapper.style.display = 'none';
        }
    }
    /**
     * Create button which shows or hides GUI toolbar.
     * @private
     */
    showHideToolbar() {
        const wrapper = this.wrapper, toolbar = this.listWrapper, submenu = this.submenu, 
        // Show hide toolbar
        showHideBtn = this.showHideBtn;
        let visible = this.visible;
        showHideBtn.style.backgroundImage =
            'url(' + this.iconsURL + 'arrow-right.svg)';
        if (!visible) {
            // Hide
            if (submenu) {
                submenu.style.display = 'none';
            }
            showHideBtn.style.left = '0px';
            visible = this.visible = false;
            toolbar.classList.add('highcharts-hide');
            showHideBtn.classList.add('highcharts-arrow-right');
            wrapper.style.height = showHideBtn.offsetHeight + 'px';
        }
        else {
            wrapper.style.height = '100%';
            toolbar.classList.remove('highcharts-hide');
            showHideBtn.classList.remove('highcharts-arrow-right');
            showHideBtn.style.top = getStyle(toolbar, 'padding-top') + 'px';
            showHideBtn.style.left = (wrapper.offsetWidth +
                getStyle(toolbar, 'padding-left')) + 'px';
        }
    }
    /*
     * In main GUI button, replace icon and class with submenu button's
     * class / symbol.
     *
     * @param {HTMLDOMElement} - submenu button
     * @param {Boolean} - true or false
     *
     */
    switchSymbol(button, redraw) {
        const buttonWrapper = button.parentNode, buttonWrapperClass = buttonWrapper.className, 
        // Main button in first level og GUI
        mainNavButton = buttonWrapper.parentNode.parentNode;
        // If the button is disabled, don't do anything
        if (buttonWrapperClass.indexOf('highcharts-disabled-btn') > -1) {
            return;
        }
        // Set class
        mainNavButton.className = '';
        if (buttonWrapperClass) {
            mainNavButton.classList.add(buttonWrapperClass.trim());
        }
        // Set icon
        mainNavButton
            .querySelectorAll('.highcharts-menu-item-btn')[0]
            .style.backgroundImage =
            button.style.backgroundImage;
        // Set active class
        if (redraw) {
            this.toggleButtonActiveClass(mainNavButton);
        }
    }
    /**
     * Set select state (active class) on button.
     * @private
     */
    toggleButtonActiveClass(button) {
        const classList = button.classList;
        if (classList.contains('highcharts-active')) {
            classList.remove('highcharts-active');
        }
        else {
            classList.add('highcharts-active');
        }
    }
    /**
     * Remove active class from all buttons except defined.
     * @private
     */
    unselectAllButtons(button) {
        const activeBtns = button.parentNode
            .querySelectorAll('.highcharts-active');
        [].forEach.call(activeBtns, (activeBtn) => {
            if (activeBtn !== button) {
                activeBtn.classList.remove('highcharts-active');
            }
        });
    }
    /**
     * Update GUI with given options.
     * @private
     */
    update(options, redraw) {
        this.isDirty = !!options.gui.definitions;
        StockToolbar_merge(true, this.chart.options.stockTools, options);
        StockToolbar_merge(true, this.options, options.gui);
        this.visible = StockToolbar_pick(this.options.visible && this.options.enabled, true);
        // If Stock Tools are updated, then bindings should be updated too:
        if (this.chart.navigationBindings) {
            this.chart.navigationBindings.update();
        }
        this.chart.isDirtyBox = true;
        if (StockToolbar_pick(redraw, true)) {
            this.chart.redraw();
        }
    }
    /**
     * Destroy all HTML GUI elements.
     * @private
     */
    destroy() {
        const stockToolsDiv = this.wrapper, parent = stockToolsDiv && stockToolsDiv.parentNode;
        this.eventsToUnbind.forEach((unbinder) => unbinder());
        // Remove the empty element
        if (parent) {
            parent.removeChild(stockToolsDiv);
        }
    }
    /**
     * Redraws the toolbar based on the current state of the options.
     * @private
     */
    redraw() {
        if (this.options.enabled !== this.guiEnabled) {
            this.handleGuiEnabledChange();
        }
        else {
            if (!this.guiEnabled) {
                return;
            }
            this.updateClassNames();
            this.updateButtons();
            this.updateVisibility();
            this.showHideNavigation();
            this.showHideToolbar();
        }
    }
    /**
     * Hadles the change of the `enabled` option.
     * @private
     */
    handleGuiEnabledChange() {
        if (this.options.enabled === false) {
            this.destroy();
            this.visible = false;
        }
        if (this.options.enabled === true) {
            this.createContainer();
            this.createButtons();
        }
        this.guiEnabled = this.options.enabled;
    }
    /**
     * Updates the class names of the GUI and toolbar elements.
     * @private
     */
    updateClassNames() {
        if (this.options.className !== this.guiClassName) {
            if (this.guiClassName) {
                this.wrapper.classList.remove(this.guiClassName);
            }
            if (this.options.className) {
                this.wrapper.classList.add(this.options.className);
            }
            this.guiClassName = this.options.className;
        }
        if (this.options.toolbarClassName !== this.toolbarClassName) {
            if (this.toolbarClassName) {
                this.toolbar.classList.remove(this.toolbarClassName);
            }
            if (this.options.toolbarClassName) {
                this.toolbar.classList.add(this.options.toolbarClassName);
            }
            this.toolbarClassName = this.options.toolbarClassName;
        }
    }
    /**
     * Updates the buttons in the toolbar if the button options have changed.
     * @private
     */
    updateButtons() {
        if (!StockToolbar_shallowArraysEqual(this.options.buttons, this.buttonList) ||
            this.isDirty) {
            this.toolbar.innerHTML = (external_highcharts_src_js_default_AST_default()).emptyHTML;
            this.createButtons();
        }
    }
    /**
     * Updates visibility based on current options.
     * @private
     */
    updateVisibility() {
        if (StockToolbar_defined(this.options.visible)) {
            this.visible = this.options.visible;
        }
    }
    /**
     * @private
     */
    getIconsURL() {
        return this.chart.options.navigation.iconsURL ||
            this.options.iconsURL ||
            'https://code.highcharts.com/12.4.0-modified/gfx/stock-icons/';
    }
}
Toolbar.prototype.classMapping = {
    circle: 'highcharts-circle-annotation',
    ellipse: 'highcharts-ellipse-annotation',
    rectangle: 'highcharts-rectangle-annotation',
    label: 'highcharts-label-annotation',
    segment: 'highcharts-segment',
    arrowSegment: 'highcharts-arrow-segment',
    ray: 'highcharts-ray',
    arrowRay: 'highcharts-arrow-ray',
    line: 'highcharts-infinity-line',
    arrowInfinityLine: 'highcharts-arrow-infinity-line',
    verticalLine: 'highcharts-vertical-line',
    horizontalLine: 'highcharts-horizontal-line',
    crooked3: 'highcharts-crooked3',
    crooked5: 'highcharts-crooked5',
    elliott3: 'highcharts-elliott3',
    elliott5: 'highcharts-elliott5',
    pitchfork: 'highcharts-pitchfork',
    fibonacci: 'highcharts-fibonacci',
    fibonacciTimeZones: 'highcharts-fibonacci-time-zones',
    parallelChannel: 'highcharts-parallel-channel',
    measureX: 'highcharts-measure-x',
    measureY: 'highcharts-measure-y',
    measureXY: 'highcharts-measure-xy',
    timeCycles: 'highcharts-time-cycles',
    verticalCounter: 'highcharts-vertical-counter',
    verticalLabel: 'highcharts-vertical-label',
    verticalArrow: 'highcharts-vertical-arrow',
    currentPriceIndicator: 'highcharts-current-price-indicator',
    indicators: 'highcharts-indicators',
    flagCirclepin: 'highcharts-flag-circlepin',
    flagDiamondpin: 'highcharts-flag-diamondpin',
    flagSquarepin: 'highcharts-flag-squarepin',
    flagSimplepin: 'highcharts-flag-simplepin',
    zoomX: 'highcharts-zoom-x',
    zoomY: 'highcharts-zoom-y',
    zoomXY: 'highcharts-zoom-xy',
    typeLine: 'highcharts-series-type-line',
    typeOHLC: 'highcharts-series-type-ohlc',
    typeHLC: 'highcharts-series-type-hlc',
    typeCandlestick: 'highcharts-series-type-candlestick',
    typeHollowCandlestick: 'highcharts-series-type-hollowcandlestick',
    typeHeikinAshi: 'highcharts-series-type-heikinashi',
    fullScreen: 'highcharts-full-screen',
    toggleAnnotations: 'highcharts-toggle-annotations',
    saveChart: 'highcharts-save-chart',
    separator: 'highcharts-separator'
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const StockToolbar = (Toolbar);

;// ./code/es-modules/Stock/StockTools/StockToolsGui.js
/* *
 *
 *  GUI generator for Stock tools
 *
 *  (c) 2009-2025 Sebastian Bochan
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { setOptions: StockToolsGui_setOptions } = (external_highcharts_src_js_default_default());



const { addEvent: StockToolsGui_addEvent, getStyle: StockToolsGui_getStyle, merge: StockToolsGui_merge, pick: StockToolsGui_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Verify if Toolbar should be added.
 * @private
 */
function chartSetStockTools(options) {
    const chartOptions = this.options, lang = chartOptions.lang, guiOptions = StockToolsGui_merge(chartOptions.stockTools && chartOptions.stockTools.gui, options && options.gui), langOptions = lang && lang.stockTools && lang.stockTools.gui;
    this.stockTools = new StockToolbar(guiOptions, langOptions, this);
    if (this.stockTools.guiEnabled) {
        this.isDirtyBox = true;
    }
}
/**
 * @private
 */
function StockToolsGui_compose(ChartClass, NavigationBindingsClass) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.setStockTools) {
        StockToolsGui_addEvent(ChartClass, 'afterGetContainer', onChartAfterGetContainer);
        StockToolsGui_addEvent(ChartClass, 'beforeRedraw', onChartBeforeRedraw);
        StockToolsGui_addEvent(ChartClass, 'beforeRender', onChartBeforeRedraw);
        StockToolsGui_addEvent(ChartClass, 'destroy', StockToolsGui_onChartDestroy);
        StockToolsGui_addEvent(ChartClass, 'getMargins', onChartGetMargins, { order: 0 });
        StockToolsGui_addEvent(ChartClass, 'render', StockToolsGui_onChartRender);
        chartProto.setStockTools = chartSetStockTools;
        StockToolsGui_addEvent(NavigationBindingsClass, 'deselectButton', StockToolsGui_onNavigationBindingsDeselectButton);
        StockToolsGui_addEvent(NavigationBindingsClass, 'selectButton', onNavigationBindingsSelectButton);
        StockToolsGui_setOptions(StockTools_StockToolsDefaults);
    }
}
/**
 * Run HTML generator
 * @private
 */
function onChartAfterGetContainer() {
    this.setStockTools();
}
/**
 * Handle beforeRedraw and beforeRender
 * @private
 */
function onChartBeforeRedraw() {
    if (this.stockTools) {
        this.stockTools.redraw();
        setOffset(this);
    }
}
/**
 * Function to calculate and set the offset width for stock tools.
 * @private
 */
function setOffset(chart) {
    if (chart.stockTools?.guiEnabled) {
        const optionsChart = chart.options.chart;
        const listWrapper = chart.stockTools.listWrapper;
        const offsetWidth = listWrapper && ((listWrapper.startWidth +
            StockToolsGui_getStyle(listWrapper, 'padding-left') +
            StockToolsGui_getStyle(listWrapper, 'padding-right')) || listWrapper.offsetWidth);
        chart.stockTools.width = offsetWidth;
        let dirty = false;
        if (offsetWidth < chart.plotWidth) {
            const nextX = StockToolsGui_pick(optionsChart.spacingLeft, optionsChart.spacing && optionsChart.spacing[3], 0) + offsetWidth;
            const diff = nextX - chart.spacingBox.x;
            chart.spacingBox.x = nextX;
            chart.spacingBox.width -= diff;
            dirty = true;
        }
        else if (offsetWidth === 0) {
            dirty = true;
        }
        if (offsetWidth !== chart.stockTools.prevOffsetWidth) {
            chart.stockTools.prevOffsetWidth = offsetWidth;
            if (dirty) {
                chart.isDirtyLegend = true;
            }
        }
    }
}
/**
 * @private
 */
function StockToolsGui_onChartDestroy() {
    if (this.stockTools) {
        this.stockTools.destroy();
    }
}
/**
 * @private
 */
function onChartGetMargins() {
    const offsetWidth = this.stockTools?.visible && this.stockTools.guiEnabled ?
        this.stockTools.width : 0;
    if (offsetWidth && offsetWidth < this.plotWidth) {
        this.plotLeft += offsetWidth;
        this.spacing[3] += offsetWidth;
    }
}
/**
 * Check if the correct price indicator button is displayed, #15029.
 * @private
 */
function StockToolsGui_onChartRender() {
    const stockTools = this.stockTools, button = stockTools &&
        stockTools.toolbar &&
        stockTools.toolbar.querySelector('.highcharts-current-price-indicator');
    // Change the initial button background.
    if (stockTools &&
        this.navigationBindings &&
        this.options.series &&
        button) {
        if (this.navigationBindings.utils
            ?.isPriceIndicatorEnabled?.(this.series)) {
            button.firstChild.style['background-image'] =
                'url("' + stockTools.getIconsURL() + 'current-price-hide.svg")';
        }
        else {
            button.firstChild.style['background-image'] =
                'url("' + stockTools.getIconsURL() + 'current-price-show.svg")';
        }
    }
}
/**
 * @private
 */
function StockToolsGui_onNavigationBindingsDeselectButton(event) {
    const className = 'highcharts-submenu-wrapper', gui = this.chart.stockTools;
    if (gui && gui.guiEnabled) {
        let button = event.button;
        // If deselecting a button from a submenu, select state for it's parent
        if (button.parentNode.className.indexOf(className) >= 0) {
            button = button.parentNode.parentNode;
        }
        button.classList.remove('highcharts-active');
    }
}
/**
 * Communication with bindings
 * @private
 */
function onNavigationBindingsSelectButton(event) {
    const className = 'highcharts-submenu-wrapper', gui = this.chart.stockTools;
    if (gui && gui.guiEnabled) {
        let button = event.button;
        // Unselect other active buttons
        gui.unselectAllButtons(event.button);
        // If clicked on a submenu, select state for it's parent
        if (button.parentNode.className.indexOf(className) >= 0) {
            button = button.parentNode.parentNode;
        }
        // Set active class on the current button
        gui.toggleButtonActiveClass(button);
    }
}
/* *
 *
 *  Default Export
 *
 * */
const StockToolsGui = {
    compose: StockToolsGui_compose
};
/* harmony default export */ const StockTools_StockToolsGui = (StockToolsGui);

;// external ["../highcharts.src.js","default","Point"]
const external_highcharts_src_js_default_Point_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Point;
var external_highcharts_src_js_default_Point_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Point_namespaceObject);
;// ./code/es-modules/Series/DataModifyComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { tooltipFormatter: pointTooltipFormatter } = (external_highcharts_src_js_default_Point_default()).prototype;


const { addEvent: DataModifyComposition_addEvent, arrayMax, arrayMin, correctFloat: DataModifyComposition_correctFloat, defined: DataModifyComposition_defined, isArray: DataModifyComposition_isArray, isNumber: DataModifyComposition_isNumber, isString, pick: DataModifyComposition_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var DataModifyComposition;
(function (DataModifyComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends the series, axis and point classes with
     * compare and cumulative support.
     *
     * @private
     *
     * @param SeriesClass
     * Series class to use.
     *
     * @param AxisClass
     * Axis class to extend.
     *
     * @param PointClass
     * Point class to use.
     */
    function compose(SeriesClass, AxisClass, PointClass) {
        const axisProto = AxisClass.prototype, pointProto = PointClass.prototype, seriesProto = SeriesClass.prototype;
        if (!seriesProto.setCompare) {
            seriesProto.setCompare = seriesSetCompare;
            seriesProto.setCumulative = seriesSetCumulative;
            DataModifyComposition_addEvent(SeriesClass, 'afterInit', afterInit);
            DataModifyComposition_addEvent(SeriesClass, 'afterGetExtremes', afterGetExtremes);
            DataModifyComposition_addEvent(SeriesClass, 'afterProcessData', afterProcessData);
        }
        if (!axisProto.setCompare) {
            axisProto.setCompare = axisSetCompare;
            axisProto.setModifier = setModifier;
            axisProto.setCumulative = axisSetCumulative;
            pointProto.tooltipFormatter = tooltipFormatter;
        }
        return SeriesClass;
    }
    DataModifyComposition.compose = compose;
    /* ********************************************************************** *
     *  Start shared compare and cumulative logic                             *
     * ********************************************************************** */
    /**
     * Shared code for the axis.setCompare() and the axis.setCumulative()
     * methods. Inits the 'compare' or the 'cumulative' mode.
     * @private
     */
    function setModifier(mode, modeState, redraw) {
        if (!this.isXAxis) {
            this.series.forEach(function (series) {
                if (mode === 'compare' &&
                    typeof modeState !== 'boolean') {
                    series.setCompare(modeState, false);
                }
                else if (mode === 'cumulative' &&
                    !isString(modeState)) {
                    series.setCumulative(modeState, false);
                }
            });
            if (DataModifyComposition_pick(redraw, true)) {
                this.chart.redraw();
            }
        }
    }
    /**
     * Extend the tooltip formatter by adding support for the point.change
     * variable as well as the changeDecimals option.
     *
     * @ignore
     * @function Highcharts.Point#tooltipFormatter
     *
     * @param {string} pointFormat
     */
    function tooltipFormatter(pointFormat) {
        const point = this, { numberFormatter } = point.series.chart, replace = function (value) {
            pointFormat = pointFormat.replace('{point.' + value + '}', (point[value] > 0 && value === 'change' ? '+' : '') +
                numberFormatter(point[value], DataModifyComposition_pick(point.series.tooltipOptions.changeDecimals, 2)));
        };
        if (DataModifyComposition_defined(point.change)) {
            replace('change');
        }
        if (DataModifyComposition_defined(point.cumulativeSum)) {
            replace('cumulativeSum');
        }
        return pointTooltipFormatter.apply(this, [pointFormat]);
    }
    /**
     * Extend series.init by adding a methods to modify the y values used
     * for plotting on the y axis. For compare mode, this method is called both
     * from the axis when finding dataMin and dataMax,
     * and from the series.translate method.
     *
     * @ignore
     * @function Highcharts.Series#init
     */
    function afterInit() {
        // If linked series does not have compare option set, use the parent
        // series' compare option, #21119.
        const linkedTo = this.options.linkedTo, chart = this.chart;
        if (linkedTo) {
            const linkedSeries = linkedTo === ':previous' ?
                chart.series[this.index - 1] :
                chart.get(linkedTo);
            if (linkedSeries instanceof (external_highcharts_src_js_default_Series_default())) {
                this.options.compare = DataModifyComposition_pick(this.userOptions.compare, linkedSeries.options.compare);
            }
        }
        const compare = this.options.compare;
        let dataModify;
        if (compare === 'percent' ||
            compare === 'value' ||
            this.options.cumulative) {
            dataModify = new Additions(this);
            if (compare === 'percent' || compare === 'value') {
                // Set comparison mode
                dataModify.initCompare(compare);
            }
            else {
                // Set Cumulative Sum mode
                dataModify.initCumulative();
            }
        }
        this.dataModify = dataModify;
    }
    /**
     * Adjust the extremes (compare and cumulative modify the data).
     * @private
     */
    function afterGetExtremes(e) {
        const dataExtremes = e.dataExtremes, activeYData = dataExtremes.activeYData;
        if (this.dataModify && dataExtremes) {
            let extremes;
            if (this.options.compare) {
                extremes = [
                    this.dataModify.modifyValue(dataExtremes.dataMin),
                    this.dataModify.modifyValue(dataExtremes.dataMax)
                ];
            }
            else if (this.options.cumulative &&
                DataModifyComposition_isArray(activeYData) &&
                // If only one y visible, sum doesn't change
                // so no need to change extremes
                activeYData.length >= 2) {
                extremes = Additions.getCumulativeExtremes(activeYData);
            }
            if (extremes) {
                dataExtremes.dataMin = arrayMin(extremes);
                dataExtremes.dataMax = arrayMax(extremes);
            }
        }
    }
    /* ********************************************************************** *
     *  End shared compare and cumulative logic                               *
     * ********************************************************************** */
    /* ********************************************************************** *
     *  Start value compare logic                                             *
     * ********************************************************************** */
    /**
     * Highcharts Stock only. Set the
     * [compare](https://api.highcharts.com/highstock/plotOptions.series.compare)
     * mode of the series after render time.
     * In most cases it is more useful running
     * {@link Axis#setCompare} on the X axis to update all its series.
     *
     * @function Highcharts.Series#setCompare
     *
     * @param {string|null} [compare]
     *        Can be one of `undefined` (default), `null`, `"percent"`
     *        or `"value"`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function seriesSetCompare(compare, redraw) {
        // Survive to export, #5485 (and for options generally)
        this.options.compare = this.userOptions.compare = compare;
        // Fire series.init() that will set or delete series.dataModify
        this.update({}, DataModifyComposition_pick(redraw, true));
        if (this.dataModify && (compare === 'value' || compare === 'percent')) {
            this.dataModify.initCompare(compare);
        }
        else {
            // When disabling, clear the points
            this.points.forEach((point) => {
                delete point.change;
            });
        }
    }
    /**
     * Extend series.processData by finding the first y value in the plot area,
     * used for comparing the following values
     *
     * @ignore
     * @function Highcharts.Series#processData
     */
    function afterProcessData() {
        const series = this, 
        // For series with more than one value (range, OHLC etc), compare
        // against close or the pointValKey (#4922, #3112, #9854)
        compareColumn = this.getColumn((series.pointArrayMap &&
            (series.options.pointValKey || series.pointValKey)) || 'y', true);
        if (series.xAxis && // Not pies
            compareColumn.length &&
            series.dataModify) {
            const processedXData = series.getColumn('x', true), length = series.dataTable.rowCount, compareStart = series.options.compareStart === true ? 0 : 1;
            // Find the first value for comparison
            for (let i = 0; i < length - compareStart; i++) {
                const compareValue = compareColumn[i];
                if (DataModifyComposition_isNumber(compareValue) &&
                    compareValue !== 0 &&
                    processedXData[i + compareStart] >= (series.xAxis.min || 0)) {
                    series.dataModify.compareValue = compareValue;
                    break;
                }
            }
        }
    }
    /**
     * Highcharts Stock only. Set the compare mode on all series
     * belonging to a Y axis.
     *
     * @see [plotOptions.series.compare](https://api.highcharts.com/highstock/plotOptions.series.compare)
     *
     * @sample stock/members/axis-setcompare/
     *         Set compare
     *
     * @function Highcharts.Axis#setCompare
     *
     * @param {string|null} [compare]
     *        The compare mode. Can be one of `undefined` (default), `null`,
     *        `"value"` or `"percent"`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function axisSetCompare(compare, redraw) {
        this.setModifier('compare', compare, redraw);
    }
    /* ********************************************************************** *
     *  End value compare logic                                               *
     * ********************************************************************** */
    /* ********************************************************************** *
     *  Start Cumulative Sum logic, author: Rafal Sebestjanski                *
     * ********************************************************************** */
    /**
     * Highcharts Stock only. Set the
     * [cumulative](https://api.highcharts.com/highstock/plotOptions.series.cumulative)
     * mode of the series after render time.
     * In most cases it is more useful running
     * {@link Axis#setCumulative} on the Y axis to update all its series.
     *
     * @function Highcharts.Series#setCumulative
     *
     * @param {boolean} [cumulative=false]
     *        Either enable or disable Cumulative Sum mode.
     *        Can be one of `false` (default) or `true`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function seriesSetCumulative(cumulative, redraw) {
        // Set default value to false
        cumulative = DataModifyComposition_pick(cumulative, false);
        // Survive to export, #5485 (and for options generally)
        this.options.cumulative = this.userOptions.cumulative = cumulative;
        // Fire series.init() that will set or delete series.dataModify
        this.update({}, DataModifyComposition_pick(redraw, true));
        // If should, turn on the Cumulative Sum mode
        if (this.dataModify) {
            this.dataModify.initCumulative();
        }
        else {
            // When disabling, clear the points
            this.points.forEach((point) => {
                delete point.cumulativeSum;
            });
        }
    }
    /**
     * Highcharts Stock only. Set the cumulative mode on all series
     * belonging to a Y axis.
     *
     * @see [plotOptions.series.cumulative](https://api.highcharts.com/highstock/plotOptions.series.cumulative)
     *
     * @sample stock/members/axis-setcumulative/
     *         Set cumulative
     *
     * @function Highcharts.Axis#setCumulative
     *
     * @param {boolean} [cumulative]
     *        Whether to disable or enable the cumulative mode.
     *        Can be one of `undefined` (default, treated as `false`),
     *        `false` or `true`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function axisSetCumulative(cumulative, redraw) {
        this.setModifier('cumulative', cumulative, redraw);
    }
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /**
         * @private
         */
        constructor(series) {
            this.series = series;
        }
        /* *
        *
        *  Functions
        *
        * */
        /**
         * @private
         */
        modifyValue() {
            return 0;
        }
        /**
         * @ignore
         * @function Highcharts.Series#getCumulativeExtremes
         *
         * @param {Array} [activeYData]
         *        An array cointaining all the points' y values
         *        in a visible range.
         */
        static getCumulativeExtremes(activeYData) {
            let cumulativeDataMin = Infinity, cumulativeDataMax = -Infinity;
            activeYData.reduce((prev, cur) => {
                const sum = prev + cur;
                cumulativeDataMin = Math.min(cumulativeDataMin, sum, prev);
                cumulativeDataMax = Math.max(cumulativeDataMax, sum, prev);
                return sum;
            });
            return [cumulativeDataMin, cumulativeDataMax];
        }
        /**
         * @ignore
         * @function Highcharts.Series#initCompare
         *
         * @param {string} [compare]
         *        Can be one of `"percent"` or `"value"`.
         */
        initCompare(compare) {
            // Set the modifyValue method
            this.modifyValue = function (value, index) {
                if (value === null) {
                    value = 0;
                }
                const compareValue = this.compareValue;
                if (typeof value !== 'undefined' &&
                    typeof compareValue !== 'undefined') { // #2601, #5814
                    // Get the modified value
                    if (compare === 'value') {
                        value -= compareValue;
                        // Compare percent
                    }
                    else {
                        const compareBase = this.series.options.compareBase;
                        value = 100 * (value / compareValue) -
                            (compareBase === 100 ? 0 : 100);
                    }
                    // Record for tooltip etc.
                    if (typeof index !== 'undefined') {
                        const point = this.series.points[index];
                        if (point) {
                            point.change = value;
                        }
                    }
                    return value;
                }
                return 0;
            };
        }
        /**
         * @ignore
         * @function Highcharts.Series#initCumulative
         */
        initCumulative() {
            // Set the modifyValue method
            this.modifyValue = function (value, index) {
                if (value === null) {
                    value = 0;
                }
                if (value !== void 0 && index !== void 0) {
                    const prevPoint = index > 0 ?
                        this.series.points[index - 1] : null;
                    // Get the modified value
                    if (prevPoint && prevPoint.cumulativeSum) {
                        value = DataModifyComposition_correctFloat(prevPoint.cumulativeSum + value);
                    }
                    // Record for tooltip etc.
                    const point = this.series.points[index];
                    const cumulativeStart = point.series.options.cumulativeStart, withinRange = point.x <= this.series.xAxis.max &&
                        point.x >= this.series.xAxis.min;
                    if (point) {
                        if (!cumulativeStart || withinRange) {
                            point.cumulativeSum = value;
                        }
                        else {
                            point.cumulativeSum = void 0;
                        }
                    }
                    return value;
                }
                return 0;
            };
        }
    }
    DataModifyComposition.Additions = Additions;
})(DataModifyComposition || (DataModifyComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Series_DataModifyComposition = (DataModifyComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * Compare the values of the series against the first non-null, non-
 * zero value in the visible range. The y axis will show percentage
 * or absolute change depending on whether `compare` is set to `"percent"`
 * or `"value"`. When this is applied to multiple series, it allows
 * comparing the development of the series against each other. Adds
 * a `change` field to every point object. If a `compare` value is not set on a
 * linked series, it will be inherited from the parent series.
 *
 * @see [compareBase](#plotOptions.series.compareBase)
 * @see [Axis.setCompare()](/class-reference/Highcharts.Axis#setCompare)
 * @see [Series.setCompare()](/class-reference/Highcharts.Series#setCompare)
 *
 * @sample {highstock} stock/plotoptions/series-compare-percent/
 *         Percent
 * @sample {highstock} stock/plotoptions/series-compare-value/
 *         Value
 *
 * @type      {string}
 * @since     1.0.1
 * @product   highstock
 * @validvalue ["percent", "value"]
 * @apioption plotOptions.series.compare
 */
/**
 * Defines if comparison should start from the first point within the visible
 * range or should start from the last point **before** the range.
 *
 * In other words, this flag determines if first point within the visible range
 * will have 0% (`compareStart=true`) or should have been already calculated
 * according to the previous point (`compareStart=false`).
 *
 * @sample {highstock} stock/plotoptions/series-comparestart/
 *         Calculate compare within visible range
 *
 * @type      {boolean}
 * @default   false
 * @since     6.0.0
 * @product   highstock
 * @apioption plotOptions.series.compareStart
 */
/**
 * When [compare](#plotOptions.series.compare) is `percent`, this option
 * dictates whether to use 0 or 100 as the base of comparison.
 *
 * @sample {highstock} stock/plotoptions/series-comparebase/
 *         Compare base is 100
 *
 * @type       {number}
 * @default    0
 * @since      5.0.6
 * @product    highstock
 * @validvalue [0, 100]
 * @apioption  plotOptions.series.compareBase
 */
/**
 * Cumulative Sum feature replaces points' values with the following formula:
 * `sum of all previous points' values + current point's value`.
 * Works only for points in a visible range.
 * Adds the `cumulativeSum` field to each point object that can be accessed
 * e.g. in the [tooltip.pointFormat](https://api.highcharts.com/highstock/tooltip.pointFormat).
 *
 * With `dataGrouping` enabled, default grouping approximation is set to `sum`.
 *
 * @see [Axis.setCumulative()](/class-reference/Highcharts.Axis#setCumulative)
 * @see [Series.setCumulative()](/class-reference/Highcharts.Series#setCumulative)
 *
 * @sample {highstock} stock/plotoptions/series-cumulative-sum/
 *         Cumulative Sum
 *
 * @type      {boolean}
 * @default   false
 * @since 9.3.0
 * @product   highstock
 * @apioption plotOptions.series.cumulative
 */
/**
 * Defines if cumulation should start from the first point within the visible
 * range or should start from the last point **before** the range.
 *
 * In other words, this flag determines if first point within the visible range
 * will start at 0 (`cumulativeStart=true`) or should have been already calculated
 * according to the previous point (`cumulativeStart=false`).
 *
 * @sample {highstock} stock/plotoptions/series-cumulativestart/
 *         Cumulative Start
 *
 * @type      {boolean}
 * @default   false
 * @since 11.4.2
 * @product   highstock
 * @apioption plotOptions.series.cumulativeStart
 */
''; // Keeps doclets above in transpiled file

;// external ["./accessibility.src.js","default","Navigator"]
const external_accessibility_src_js_default_Navigator_namespaceObject = __WEBPACK_EXTERNAL_MODULE__accessibility_src_js_18c0d6a2__["default"].Navigator;
var external_accessibility_src_js_default_Navigator_default = /*#__PURE__*/__webpack_require__.n(external_accessibility_src_js_default_Navigator_namespaceObject);
;// ./code/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */
/**
 * Utility functions for columns that can be either arrays or typed arrays.
 * @private
 */
var ColumnUtils;
(function (ColumnUtils) {
    /* *
    *
    *  Declarations
    *
    * */
    /* *
    *
    * Functions
    *
    * */
    /**
     * Sets the length of the column array.
     *
     * @param {DataTable.Column} column
     * Column to be modified.
     *
     * @param {number} length
     * New length of the column.
     *
     * @param {boolean} asSubarray
     * If column is a typed array, return a subarray instead of a new array. It
     * is faster `O(1)`, but the entire buffer will be kept in memory until all
     * views of it are destroyed. Default is `false`.
     *
     * @return {DataTable.Column}
     * Modified column.
     *
     * @private
     */
    function setLength(column, length, asSubarray) {
        if (Array.isArray(column)) {
            column.length = length;
            return column;
        }
        return column[asSubarray ? 'subarray' : 'slice'](0, length);
    }
    ColumnUtils.setLength = setLength;
    /**
     * Splices a column array.
     *
     * @param {DataTable.Column} column
     * Column to be modified.
     *
     * @param {number} start
     * Index at which to start changing the array.
     *
     * @param {number} deleteCount
     * An integer indicating the number of old array elements to remove.
     *
     * @param {boolean} removedAsSubarray
     * If column is a typed array, return a subarray instead of a new array. It
     * is faster `O(1)`, but the entire buffer will be kept in memory until all
     * views to it are destroyed. Default is `true`.
     *
     * @param {Array<number>|TypedArray} items
     * The elements to add to the array, beginning at the start index. If you
     * don't specify any elements, `splice()` will only remove elements from the
     * array.
     *
     * @return {SpliceResult}
     * Object containing removed elements and the modified column.
     *
     * @private
     */
    function splice(column, start, deleteCount, removedAsSubarray, items = []) {
        if (Array.isArray(column)) {
            if (!Array.isArray(items)) {
                items = Array.from(items);
            }
            return {
                removed: column.splice(start, deleteCount, ...items),
                array: column
            };
        }
        const Constructor = Object.getPrototypeOf(column)
            .constructor;
        const removed = column[removedAsSubarray ? 'subarray' : 'slice'](start, start + deleteCount);
        const newLength = column.length - deleteCount + items.length;
        const result = new Constructor(newLength);
        result.set(column.subarray(0, start), 0);
        result.set(items, start);
        result.set(column.subarray(start + deleteCount), start + items.length);
        return {
            removed: removed,
            array: result
        };
    }
    ColumnUtils.splice = splice;
    /**
     * Converts a cell value to a number.
     *
     * @param {DataTable.CellType} value
     * Cell value to convert to a number.
     *
     * @param {boolean} useNaN
     * If `true`, returns `NaN` for non-numeric values; if `false`,
     * returns `null` instead.
     *
     * @return {number | null}
     * Number or `null` if the value is not a number.
     *
     * @private
     */
    function convertToNumber(value, useNaN) {
        switch (typeof value) {
            case 'boolean':
                return (value ? 1 : 0);
            case 'number':
                return (isNaN(value) && !useNaN ? null : value);
            default:
                value = parseFloat(`${value ?? ''}`);
                return (isNaN(value) && !useNaN ? null : value);
        }
    }
    ColumnUtils.convertToNumber = convertToNumber;
})(ColumnUtils || (ColumnUtils = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_ColumnUtils = (ColumnUtils);

;// ./code/es-modules/Data/DataTableCore.js
/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


const { setLength, splice } = Data_ColumnUtils;

const { fireEvent: DataTableCore_fireEvent, objectEach: DataTableCore_objectEach, uniqueKey: DataTableCore_uniqueKey } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTableCore {
    /**
     * Constructs an instance of the DataTable class.
     *
     * @example
     * const dataTable = new Highcharts.DataTableCore({
     *   columns: {
     *     year: [2020, 2021, 2022, 2023],
     *     cost: [11, 13, 12, 14],
     *     revenue: [12, 15, 14, 18]
     *   }
     * });

     *
     * @param {Highcharts.DataTableOptions} [options]
     * Options to initialize the new DataTable instance.
     */
    constructor(options = {}) {
        /**
         * Whether the ID was automatic generated or given in the constructor.
         *
         * @name Highcharts.DataTable#autoId
         * @type {boolean}
         */
        this.autoId = !options.id;
        this.columns = {};
        /**
         * ID of the table for identification purposes.
         *
         * @name Highcharts.DataTable#id
         * @type {string}
         */
        this.id = (options.id || DataTableCore_uniqueKey());
        this.rowCount = 0;
        this.versionTag = DataTableCore_uniqueKey();
        let rowCount = 0;
        DataTableCore_objectEach(options.columns || {}, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = Math.max(rowCount, column.length);
        });
        this.applyRowCount(rowCount);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies a row count to the table by setting the `rowCount` property and
     * adjusting the length of all columns.
     *
     * @private
     * @param {number} rowCount The new row count.
     */
    applyRowCount(rowCount) {
        this.rowCount = rowCount;
        DataTableCore_objectEach(this.columns, (column, columnId) => {
            if (column.length !== rowCount) {
                this.columns[columnId] = setLength(column, rowCount);
            }
        });
    }
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
     *
     * @param {number} rowIndex
     * The start row index
     *
     * @param {number} [rowCount=1]
     * The number of rows to delete
     *
     * @return {void}
     *
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex, rowCount = 1) {
        if (rowCount > 0 && rowIndex < this.rowCount) {
            let length = 0;
            DataTableCore_objectEach(this.columns, (column, columnId) => {
                this.columns[columnId] =
                    splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        DataTableCore_fireEvent(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = DataTableCore_uniqueKey();
    }
    /**
     * Fetches the given column by the canonical column name. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @param {string} columnId
     * Name of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    }
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnIds, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return (columnIds || Object.keys(this.columns)).reduce((columns, columnId) => {
            columns[columnId] = this.columns[columnId];
            return columns;
        }, {});
    }
    /**
     * Retrieves the row at a given index.
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnIds]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnIds) {
        return (columnIds || Object.keys(this.columns)).map((key) => this.columns[key]?.[rowIndex]);
    }
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumn(columnId, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnId]: column }, rowIndex, eventDetail);
    }
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTableCore.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the `DataTableCore`, as it
     * always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail) {
        let rowCount = this.rowCount;
        DataTableCore_objectEach(columns, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetColumns');
            this.versionTag = DataTableCore_uniqueKey();
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
     *
     * @param {Record<string, number|string|undefined>} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #afterSetRows
     */
    setRow(row, rowIndex = this.rowCount, insert, eventDetail) {
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1;
        DataTableCore_objectEach(row, (cellValue, columnId) => {
            let column = columns[columnId] ||
                eventDetail?.addColumns !== false && new Array(indexRowCount);
            if (column) {
                if (insert) {
                    column = splice(column, rowIndex, 0, true, [cellValue]).array;
                }
                else {
                    column[rowIndex] = cellValue;
                }
                columns[columnId] = column;
            }
        });
        if (indexRowCount > this.rowCount) {
            this.applyRowCount(indexRowCount);
        }
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetRows');
            this.versionTag = DataTableCore_uniqueKey();
        }
    }
    /**
     * Returns the medified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTableCore}
     * The medified (clone) or the original data table.
     */
    getModified() {
        return this.modified || this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTableCore = (DataTableCore);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 * //**
 * A column of values in a data table.
 * @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
 */ /**
* A collection of data table columns defined by a object where the key is the
* column name and the value is an array of the column values.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptions
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptions.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptions.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Core/Axis/OrdinalAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




const { addEvent: OrdinalAxis_addEvent, correctFloat: OrdinalAxis_correctFloat, css: OrdinalAxis_css, defined: OrdinalAxis_defined, error, isNumber: OrdinalAxis_isNumber, pick: OrdinalAxis_pick, timeUnits, isString: OrdinalAxis_isString } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/**
 * Extends the axis with ordinal support.
 * @private
 */
var OrdinalAxis;
(function (OrdinalAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends the axis with ordinal support.
     *
     * @private
     *
     * @param AxisClass
     * Axis class to extend.
     *
     * @param ChartClass
     * Chart class to use.
     *
     * @param SeriesClass
     * Series class to use.
     */
    function compose(AxisClass, SeriesClass, ChartClass) {
        const axisProto = AxisClass.prototype;
        if (!axisProto.ordinal2lin) {
            axisProto.getTimeTicks = getTimeTicks;
            axisProto.index2val = index2val;
            axisProto.lin2val = lin2val;
            axisProto.val2lin = val2lin;
            // Record this to prevent overwriting by broken-axis module (#5979)
            axisProto.ordinal2lin = axisProto.val2lin;
            OrdinalAxis_addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            OrdinalAxis_addEvent(AxisClass, 'foundExtremes', onAxisFoundExtremes);
            OrdinalAxis_addEvent(AxisClass, 'afterSetScale', onAxisAfterSetScale);
            OrdinalAxis_addEvent(AxisClass, 'initialAxisTranslation', onAxisInitialAxisTranslation);
            OrdinalAxis_addEvent(ChartClass, 'pan', onChartPan);
            OrdinalAxis_addEvent(ChartClass, 'touchpan', onChartPan);
            OrdinalAxis_addEvent(SeriesClass, 'updatedData', onSeriesUpdatedData);
        }
        return AxisClass;
    }
    OrdinalAxis.compose = compose;
    /**
     * In an ordinal axis, there might be areas with dense concentrations of
     * points, then large gaps between some. Creating equally distributed
     * ticks over this entire range may lead to a huge number of ticks that
     * will later be removed. So instead, break the positions up in
     * segments, find the tick positions for each segment then concatenize
     * them. This method is used from both data grouping logic and X axis
     * tick position logic.
     * @private
     */
    function getTimeTicks(normalizedInterval, min, max, startOfWeek, positions = [], closestDistance = 0, findHigherRanks) {
        const higherRanks = {}, tickPixelIntervalOption = this.options.tickPixelInterval, time = this.chart.time, 
        // Record all the start positions of a segment, to use when
        // deciding what's a gap in the data.
        segmentStarts = [];
        let end, segmentPositions, hasCrossedHigherRank, info, outsideMax, start = 0, groupPositions = [], lastGroupPosition = -Number.MAX_VALUE;
        // The positions are not always defined, for example for ordinal
        // positions when data has regular interval (#1557, #2090)
        if ((!this.options.ordinal && !this.options.breaks) ||
            !positions ||
            positions.length < 3 ||
            typeof min === 'undefined') {
            return time.getTimeTicks.apply(time, arguments);
        }
        // Analyze the positions array to split it into segments on gaps
        // larger than 5 times the closest distance. The closest distance is
        // already found at this point, so we reuse that instead of
        // computing it again.
        const posLength = positions.length;
        for (end = 0; end < posLength; end++) {
            outsideMax = end && positions[end - 1] > max;
            if (positions[end] < min) { // Set the last position before min
                start = end;
            }
            if (end === posLength - 1 ||
                positions[end + 1] - positions[end] > closestDistance * 5 ||
                outsideMax) {
                // For each segment, calculate the tick positions from the
                // getTimeTicks utility function. The interval will be the
                // same regardless of how long the segment is.
                if (positions[end] > lastGroupPosition) { // #1475
                    segmentPositions = time.getTimeTicks(normalizedInterval, positions[start], positions[end], startOfWeek);
                    // Prevent duplicate groups, for example for multiple
                    // segments within one larger time frame (#1475)
                    while (segmentPositions.length &&
                        segmentPositions[0] <= lastGroupPosition) {
                        segmentPositions.shift();
                    }
                    if (segmentPositions.length) {
                        lastGroupPosition =
                            segmentPositions[segmentPositions.length - 1];
                    }
                    segmentStarts.push(groupPositions.length);
                    groupPositions = groupPositions.concat(segmentPositions);
                }
                // Set start of next segment
                start = end + 1;
            }
            if (outsideMax) {
                break;
            }
        }
        // Get the grouping info from the last of the segments. The info is
        // the same for all segments.
        if (segmentPositions) {
            info = segmentPositions.info;
            // Optionally identify ticks with higher rank, for example
            // when the ticks have crossed midnight.
            if (findHigherRanks && info.unitRange <= timeUnits.hour) {
                end = groupPositions.length - 1;
                // Compare points two by two
                for (start = 1; start < end; start++) {
                    if (time.dateFormat('%d', groupPositions[start]) !==
                        time.dateFormat('%d', groupPositions[start - 1])) {
                        higherRanks[groupPositions[start]] = 'day';
                        hasCrossedHigherRank = true;
                    }
                }
                // If the complete array has crossed midnight, we want
                // to mark the first positions also as higher rank
                if (hasCrossedHigherRank) {
                    higherRanks[groupPositions[0]] = 'day';
                }
                info.higherRanks = higherRanks;
            }
            // Save the info
            info.segmentStarts = segmentStarts;
            groupPositions.info = info;
        }
        else {
            error(12, false, this.chart);
        }
        // Don't show ticks within a gap in the ordinal axis, where the
        // space between two points is greater than a portion of the tick
        // pixel interval
        if (findHigherRanks && OrdinalAxis_defined(tickPixelIntervalOption)) {
            const length = groupPositions.length, translatedArr = [], distances = [];
            let itemToRemove, translated, lastTranslated, medianDistance, distance, i = length;
            // Find median pixel distance in order to keep a reasonably even
            // distance between ticks (#748)
            while (i--) {
                translated = this.translate(groupPositions[i]);
                if (lastTranslated) {
                    distances[i] = lastTranslated - translated;
                }
                translatedArr[i] = lastTranslated = translated;
            }
            distances.sort((a, b) => a - b);
            medianDistance = distances[Math.floor(distances.length / 2)];
            if (medianDistance < tickPixelIntervalOption * 0.6) {
                medianDistance = null;
            }
            // Now loop over again and remove ticks where needed
            i = groupPositions[length - 1] > max ? length - 1 : length; // #817
            lastTranslated = void 0;
            while (i--) {
                translated = translatedArr[i];
                distance = Math.abs(lastTranslated - translated);
                // #4175 - when axis is reversed, the distance, is negative but
                // tickPixelIntervalOption positive, so we need to compare the
                // same values
                // Remove ticks that are closer than 0.6 times the pixel
                // interval from the one to the right, but not if it is close to
                // the median distance (#748).
                if (lastTranslated &&
                    distance < tickPixelIntervalOption * 0.8 &&
                    (medianDistance === null || distance < medianDistance * 0.8)) {
                    // Is this a higher ranked position with a normal
                    // position to the right?
                    if (higherRanks[groupPositions[i]] &&
                        !higherRanks[groupPositions[i + 1]]) {
                        // Yes: remove the lower ranked neighbour to the
                        // right
                        itemToRemove = i + 1;
                        lastTranslated = translated; // #709
                    }
                    else {
                        // No: remove this one
                        itemToRemove = i;
                    }
                    groupPositions.splice(itemToRemove, 1);
                }
                else {
                    lastTranslated = translated;
                }
            }
        }
        return groupPositions;
    }
    /**
     * Get axis position of given index of the extended ordinal positions.
     * Used only when panning an ordinal axis.
     *
     * @private
     * @function Highcharts.Axis#index2val
     * @param {number} index
     * The index value of searched point
     */
    function index2val(index) {
        const axis = this, ordinal = axis.ordinal, 
        // Context could be changed to extendedOrdinalPositions.
        ordinalPositions = ordinal.positions;
        // The visible range contains only equally spaced values.
        if (!ordinalPositions) {
            return index;
        }
        let i = ordinalPositions.length - 1, distance;
        if (index < 0) { // Out of range, in effect panning to the left
            index = ordinalPositions[0];
        }
        else if (index > i) { // Out of range, panning to the right
            index = ordinalPositions[i];
        }
        else { // Split it up
            i = Math.floor(index);
            distance = index - i; // The decimal
        }
        if (typeof distance !== 'undefined' &&
            typeof ordinalPositions[i] !== 'undefined') {
            return ordinalPositions[i] + (distance ?
                distance *
                    (ordinalPositions[i + 1] - ordinalPositions[i]) :
                0);
        }
        return index;
    }
    /**
     * Translate from linear (internal) to axis value.
     *
     * @private
     * @function Highcharts.Axis#lin2val
     * @param {number} val
     * The linear abstracted value.
     */
    function lin2val(val) {
        const axis = this, ordinal = axis.ordinal, localMin = axis.old ? axis.old.min : axis.min, localA = axis.old ? axis.old.transA : axis.transA;
        // Always use extendedPositions (#19816)
        const positions = ordinal.getExtendedPositions();
        // In some cases (especially in early stages of the chart creation) the
        // getExtendedPositions might return undefined.
        if (positions?.length) {
            // Convert back from modivied value to pixels. // #15970
            const pixelVal = OrdinalAxis_correctFloat((val - localMin) * localA +
                axis.minPixelPadding), index = OrdinalAxis_correctFloat(ordinal.getIndexOfPoint(pixelVal, positions)), mantissa = OrdinalAxis_correctFloat(index % 1);
            // Check if the index is inside position array. If true,
            // read/approximate value for that exact index.
            if (index >= 0 && index <= positions.length - 1) {
                const leftNeighbour = positions[Math.floor(index)], rightNeighbour = positions[Math.ceil(index)], distance = rightNeighbour - leftNeighbour;
                return positions[Math.floor(index)] + mantissa * distance;
            }
        }
        // If the value is outside positions array, return initial value
        return val; // #16784
    }
    /**
     * Internal function to calculate the precise index in ordinalPositions
     * array.
     * @private
     */
    function getIndexInArray(ordinalPositions, val) {
        const index = OrdinalAxis.Additions.findIndexOf(ordinalPositions, val, true);
        if (ordinalPositions[index] === val) {
            return index;
        }
        const percent = (val - ordinalPositions[index]) /
            (ordinalPositions[index + 1] - ordinalPositions[index]);
        return index + percent;
    }
    /**
    * @private
    */
    function onAxisAfterInit() {
        const axis = this;
        if (!axis.ordinal) {
            axis.ordinal = new OrdinalAxis.Additions(axis);
        }
    }
    /**
     * @private
     */
    function onAxisFoundExtremes() {
        const axis = this, { eventArgs, options } = axis;
        if (axis.isXAxis &&
            OrdinalAxis_defined(options.overscroll) &&
            options.overscroll !== 0 &&
            OrdinalAxis_isNumber(axis.max) &&
            OrdinalAxis_isNumber(axis.min)) {
            if (axis.options.ordinal && !axis.ordinal.originalOrdinalRange) {
                // Calculate the original ordinal range
                axis.ordinal.getExtendedPositions(false);
            }
            if (axis.max === axis.dataMax &&
                (
                // Panning is an exception. We don't want to apply
                // overscroll when panning over the dataMax
                eventArgs?.trigger !== 'pan' ||
                    axis.isInternal) &&
                // Scrollbar buttons are the other execption
                eventArgs?.trigger !== 'navigator') {
                const overscroll = axis.ordinal.convertOverscroll(options.overscroll);
                axis.max += overscroll;
                // Live data and buttons require translation for the min:
                if (!axis.isInternal &&
                    OrdinalAxis_defined(axis.userMin) &&
                    eventArgs?.trigger !== 'mousewheel') {
                    axis.min += overscroll;
                }
            }
        }
    }
    /**
     * For ordinal axis, that loads data async, redraw axis after data is
     * loaded. If we don't do that, axis will have the same extremes as
     * previously, but ordinal positions won't be calculated. See #10290
     * @private
     */
    function onAxisAfterSetScale() {
        const axis = this;
        if (axis.horiz && !axis.isDirty) {
            axis.isDirty = axis.isOrdinal &&
                axis.chart.navigator &&
                !axis.chart.navigator.adaptToUpdatedData;
        }
    }
    /**
     * @private
     */
    function onAxisInitialAxisTranslation() {
        const axis = this;
        if (axis.ordinal) {
            axis.ordinal.beforeSetTickPositions();
            axis.tickInterval = axis.ordinal.postProcessTickInterval(axis.tickInterval);
        }
    }
    /**
     * Extending the Chart.pan method for ordinal axes
     * @private
     */
    function onChartPan(e) {
        const chart = this, xAxis = chart.xAxis[0], overscroll = xAxis.ordinal.convertOverscroll(xAxis.options.overscroll), chartX = e.originalEvent.chartX, panning = chart.options.chart.panning;
        let runBase = false;
        if (panning?.type !== 'y' &&
            xAxis.options.ordinal &&
            xAxis.series.length &&
            // On touch devices, let default function handle the pinching
            (!e.touches || e.touches.length <= 1)) {
            const mouseDownX = chart.mouseDownX, extremes = xAxis.getExtremes(), dataMin = extremes.dataMin, dataMax = extremes.dataMax, min = extremes.min, max = extremes.max, hoverPoints = chart.hoverPoints, closestPointRange = (xAxis.closestPointRange ||
                xAxis.ordinal?.overscrollPointsRange), pointPixelWidth = (xAxis.translationSlope *
                (xAxis.ordinal.slope || closestPointRange)), 
            // How many ordinal units did we move?
            movedUnits = Math.round((mouseDownX - chartX) / pointPixelWidth), 
            // Get index of all the chart's points
            extendedOrdinalPositions = xAxis.ordinal.getExtendedPositions(), extendedAxis = {
                ordinal: {
                    positions: extendedOrdinalPositions,
                    extendedOrdinalPositions: extendedOrdinalPositions
                }
            }, index2val = xAxis.index2val, val2lin = xAxis.val2lin;
            let trimmedRange, ordinalPositions;
            // Make sure panning to the edges does not decrease the zoomed range
            if ((min <= dataMin && movedUnits <= 0) ||
                (max >= dataMax + overscroll && movedUnits >= 0)) {
                e.preventDefault();
                return;
            }
            // We have an ordinal axis, but the data is equally spaced
            if (!extendedAxis.ordinal.positions) {
                runBase = true;
            }
            else if (Math.abs(movedUnits) > 1) {
                // Remove active points for shared tooltip
                if (hoverPoints) {
                    hoverPoints.forEach(function (point) {
                        point.setState();
                    });
                }
                // In grouped data series, the last ordinal position represents
                // the grouped data, which is to the left of the real data max.
                // If we don't compensate for this, we will be allowed to pan
                // grouped data series passed the right of the plot area.
                ordinalPositions = extendedAxis.ordinal.positions;
                if (overscroll) { // #21606
                    ordinalPositions = extendedAxis.ordinal.positions =
                        ordinalPositions.concat(xAxis.ordinal.getOverscrollPositions());
                }
                if (dataMax > ordinalPositions[ordinalPositions.length - 1]) {
                    ordinalPositions.push(dataMax);
                }
                // Get the new min and max values by getting the ordinal index
                // for the current extreme, then add the moved units and
                // translate back to values. This happens on the extended
                // ordinal positions if the new position is out of range, else
                // it happens on the current x axis which is smaller and faster.
                chart.setFixedRange(max - min);
                trimmedRange = xAxis.navigatorAxis
                    .toFixedRange(void 0, void 0, index2val.apply(extendedAxis, [
                    val2lin.apply(extendedAxis, [min, true]) +
                        movedUnits
                ]), index2val.apply(extendedAxis, [
                    val2lin.apply(extendedAxis, [max, true]) +
                        movedUnits
                ]));
                // Apply it if it is within the available data range
                if (trimmedRange.min >= Math.min(ordinalPositions[0], min) &&
                    trimmedRange.max <= Math.max(ordinalPositions[ordinalPositions.length - 1], max) + overscroll) {
                    xAxis.setExtremes(trimmedRange.min, trimmedRange.max, true, false, { trigger: 'pan' });
                }
                chart.mouseDownX = chartX; // Set new reference for next run
                OrdinalAxis_css(chart.container, { cursor: 'move' });
            }
        }
        else {
            runBase = true;
        }
        // Revert to the linear chart.pan version
        if (runBase || (panning && /y/.test(panning.type))) {
            if (overscroll && OrdinalAxis_isNumber(xAxis.dataMax)) {
                xAxis.max = xAxis.dataMax + overscroll;
            }
        }
        else {
            e.preventDefault();
        }
    }
    /**
     * @private
     */
    function onSeriesUpdatedData() {
        const xAxis = this.xAxis;
        // Destroy the extended ordinal index on updated data
        // and destroy extendedOrdinalPositions, #16055.
        if (xAxis?.options.ordinal) {
            delete xAxis.ordinal.index;
            delete xAxis.ordinal.originalOrdinalRange;
        }
    }
    /**
     * Translate from a linear axis value to the corresponding ordinal axis
     * position. If there are no gaps in the ordinal axis this will be the
     * same. The translated value is the value that the point would have if
     * the axis was linear, using the same min and max.
     *
     * @private
     * @function Highcharts.Axis#val2lin
     * @param {number} val
     * The axis value.
     * @param {boolean} [toIndex]
     * Whether to return the index in the ordinalPositions or the new value.
     */
    function val2lin(val, toIndex) {
        const axis = this, ordinal = axis.ordinal, ordinalPositions = ordinal.positions;
        let slope = ordinal.slope, extendedOrdinalPositions;
        if (!ordinalPositions) {
            return val;
        }
        const ordinalLength = ordinalPositions.length;
        let ordinalIndex;
        // If the searched value is inside visible plotArea, ivastigate the
        // value basing on ordinalPositions.
        if (ordinalPositions[0] <= val &&
            ordinalPositions[ordinalLength - 1] >= val) {
            ordinalIndex = getIndexInArray(ordinalPositions, val);
            // Final return value is based on ordinalIndex
        }
        else {
            extendedOrdinalPositions = ordinal.getExtendedPositions?.();
            if (!extendedOrdinalPositions?.length) {
                return val;
            }
            const length = extendedOrdinalPositions.length;
            if (!slope) {
                slope =
                    (extendedOrdinalPositions[length - 1] -
                        extendedOrdinalPositions[0]) /
                        length;
            }
            // `originalPointReference` is equal to the index of first point of
            // ordinalPositions in extendedOrdinalPositions.
            const originalPositionsReference = getIndexInArray(extendedOrdinalPositions, ordinalPositions[0]);
            // If the searched value is outside the visiblePlotArea,
            // check if it is inside extendedOrdinalPositions.
            if (val >= extendedOrdinalPositions[0] &&
                val <=
                    extendedOrdinalPositions[length - 1]) {
                // Return Value
                ordinalIndex = getIndexInArray(extendedOrdinalPositions, val) -
                    originalPositionsReference;
            }
            else {
                if (!toIndex) {
                    // If the value is outside positions array,
                    // return initial value, #16784
                    return val;
                }
                // Since ordinal.slope is the average distance between 2
                // points on visible plotArea, this can be used to calculate
                // the approximate position of the point, which is outside
                // the extendedOrdinalPositions.
                if (val < extendedOrdinalPositions[0]) {
                    const diff = extendedOrdinalPositions[0] - val, approximateIndexOffset = diff / slope;
                    ordinalIndex =
                        -originalPositionsReference -
                            approximateIndexOffset;
                }
                else {
                    const diff = val -
                        extendedOrdinalPositions[length - 1], approximateIndexOffset = diff / slope;
                    ordinalIndex =
                        approximateIndexOffset +
                            length -
                            originalPositionsReference;
                }
            }
        }
        return toIndex ? ordinalIndex : slope * (ordinalIndex || 0) +
            ordinal.offset;
    }
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /**
         * @private
         */
        constructor(axis) {
            this.index = {};
            this.axis = axis;
        }
        /* *
        *
        *  Functions
        *
        * */
        /**
         * Calculate the ordinal positions before tick positions are calculated.
         * @private
         */
        beforeSetTickPositions() {
            const axis = this.axis, ordinal = axis.ordinal, extremes = axis.getExtremes(), min = extremes.min, max = extremes.max, hasBreaks = axis.brokenAxis?.hasBreaks, isOrdinal = axis.options.ordinal, overscroll = axis.options.overscroll &&
                axis.ordinal.convertOverscroll(axis.options.overscroll) ||
                0;
            let len, uniqueOrdinalPositions, dist, minIndex, maxIndex, slope, i, ordinalPositions = [], overscrollPointsRange = Number.MAX_VALUE, useOrdinal = false, adjustOrdinalExtremesPoints = false, isBoosted = false;
            // Apply the ordinal logic
            if (isOrdinal || hasBreaks) { // #4167 YAxis is never ordinal ?
                let distanceBetweenPoint = 0;
                axis.series.forEach(function (series, i) {
                    const xData = series.getColumn('x', true);
                    uniqueOrdinalPositions = [];
                    // For an axis with multiple series, check if the distance
                    // between points is identical throughout all series.
                    if (i > 0 &&
                        series.options.id !== 'highcharts-navigator-series' &&
                        xData.length > 1) {
                        adjustOrdinalExtremesPoints = (distanceBetweenPoint !== xData[1] - xData[0]);
                    }
                    distanceBetweenPoint = xData[1] - xData[0];
                    if (series.boosted) {
                        isBoosted = series.boosted;
                    }
                    if (series.reserveSpace() &&
                        (series
                            .takeOrdinalPosition !== false || hasBreaks)) {
                        // Concatenate the processed X data into the existing
                        // positions, or the empty array
                        ordinalPositions = ordinalPositions.concat(xData);
                        len = ordinalPositions.length;
                        // Remove duplicates (#1588)
                        ordinalPositions.sort(function (a, b) {
                            // Without a custom function it is sorted as strings
                            return a - b;
                        });
                        overscrollPointsRange = Math.min(overscrollPointsRange, OrdinalAxis_pick(
                        // Check for a single-point series:
                        series.closestPointRange, overscrollPointsRange));
                        if (len) {
                            i = 0;
                            while (i < len - 1) {
                                if (ordinalPositions[i] !==
                                    ordinalPositions[i + 1]) {
                                    uniqueOrdinalPositions.push(ordinalPositions[i + 1]);
                                }
                                i++;
                            }
                            // Check first item:
                            if (uniqueOrdinalPositions[0] !==
                                ordinalPositions[0]) {
                                uniqueOrdinalPositions.unshift(ordinalPositions[0]);
                            }
                            ordinalPositions = uniqueOrdinalPositions;
                        }
                    }
                });
                if (!axis.ordinal.originalOrdinalRange) {
                    // Calculate current originalOrdinalRange
                    axis.ordinal.originalOrdinalRange =
                        (ordinalPositions.length - 1) * overscrollPointsRange;
                }
                // If the distance between points is not identical throughout
                // all series, remove the first and last ordinal position to
                // avoid enabling ordinal logic when it is not needed, #17405.
                // Only for boosted series because changes are negligible.
                if (adjustOrdinalExtremesPoints && isBoosted) {
                    ordinalPositions.pop();
                    ordinalPositions.shift();
                }
                // Cache the length
                len = ordinalPositions.length;
                // Check if we really need the overhead of mapping axis data
                // against the ordinal positions. If the series consist of
                // evenly spaced data any way, we don't need any ordinal logic.
                if (len > 2) { // Two points have equal distance by default
                    dist = ordinalPositions[1] - ordinalPositions[0];
                    i = len - 1;
                    while (i-- && !useOrdinal) {
                        if (ordinalPositions[i + 1] - ordinalPositions[i] !==
                            dist) {
                            useOrdinal = true;
                        }
                    }
                    // When zooming in on a week, prevent axis padding for
                    // weekends even though the data within the week is evenly
                    // spaced.
                    if (!axis.options.keepOrdinalPadding &&
                        (ordinalPositions[0] - min > dist ||
                            max - overscroll - ordinalPositions[len - 1] >
                                dist)) {
                        useOrdinal = true;
                    }
                }
                else if (axis.options.overscroll) {
                    if (len === 2) {
                        // Exactly two points, distance for overscroll is fixed:
                        overscrollPointsRange =
                            ordinalPositions[1] - ordinalPositions[0];
                    }
                    else if (len === 1) {
                        // We have just one point, closest distance is unknown.
                        // Assume then it is last point and overscrolled range:
                        overscrollPointsRange = overscroll;
                        ordinalPositions = [
                            ordinalPositions[0],
                            ordinalPositions[0] + overscrollPointsRange
                        ];
                    }
                    else {
                        // In case of zooming in on overscrolled range, stick to
                        // the old range:
                        overscrollPointsRange = ordinal.overscrollPointsRange;
                    }
                }
                // Record the slope and offset to compute the linear values from
                // the array index. Since the ordinal positions may exceed the
                // current range, get the start and end positions within it
                // (#719, #665b)
                if (useOrdinal || axis.forceOrdinal) {
                    if (axis.options.overscroll) {
                        ordinal.overscrollPointsRange = overscrollPointsRange;
                        ordinalPositions = ordinalPositions.concat(ordinal.getOverscrollPositions());
                    }
                    // Register
                    ordinal.positions = ordinalPositions;
                    // This relies on the ordinalPositions being set. Use
                    // Math.max and Math.min to prevent padding on either sides
                    // of the data.
                    minIndex = axis.ordinal2lin(// #5979
                    Math.max(min, ordinalPositions[0]), true);
                    maxIndex = Math.max(axis.ordinal2lin(Math.min(max, ordinalPositions[ordinalPositions.length - 1]), true), 1); // #3339
                    // Set the slope and offset of the values compared to the
                    // indices in the ordinal positions.
                    ordinal.slope = slope =
                        (max - min) / (maxIndex - minIndex);
                    ordinal.offset = min - (minIndex * slope);
                }
                else {
                    ordinal.overscrollPointsRange = OrdinalAxis_pick(axis.closestPointRange, ordinal.overscrollPointsRange);
                    ordinal.positions = axis.ordinal.slope = ordinal.offset =
                        void 0;
                }
            }
            axis.isOrdinal = isOrdinal && useOrdinal; // #3818, #4196, #4926
            ordinal.groupIntervalFactor = null; // Reset for next run
        }
        /**
         * Faster way of using the Array.indexOf method.
         * Works for sorted arrays only with unique values.
         *
         * @param {Array} sortedArray
         *        The sorted array inside which we are looking for.
         * @param {number} key
         *        The key to being found.
         * @param {boolean} indirectSearch
         *        In case of lack of the point in the array, should return
         *        value be equal to -1 or the closest smaller index.
         *  @private
         */
        static findIndexOf(sortedArray, key, indirectSearch) {
            let start = 0, end = sortedArray.length - 1, middle;
            while (start < end) {
                middle = Math.ceil((start + end) / 2);
                // Key found as the middle element.
                if (sortedArray[middle] <= key) {
                    // Continue searching to the right.
                    start = middle;
                }
                else {
                    // Continue searching to the left.
                    end = middle - 1;
                }
            }
            if (sortedArray[start] === key) {
                return start;
            }
            // Key could not be found.
            return !indirectSearch ? -1 : start;
        }
        /**
         * Get the ordinal positions for the entire data set. This is necessary
         * in chart panning because we need to find out what points or data
         * groups are available outside the visible range. When a panning
         * operation starts, if an index for the given grouping does not exists,
         * it is created and cached. This index is deleted on updated data, so
         * it will be regenerated the next time a panning operation starts.
         * @private
         */
        getExtendedPositions(withOverscroll = true) {
            const ordinal = this, axis = ordinal.axis, axisProto = axis.constructor.prototype, chart = axis.chart, key = axis.series.reduce((k, series) => {
                const grouping = series.currentDataGrouping;
                return (k +
                    (grouping ? grouping.count + grouping.unitName : 'raw'));
            }, ''), overscroll = withOverscroll ?
                axis.ordinal.convertOverscroll(axis.options.overscroll) : 0, extremes = axis.getExtremes();
            let fakeAxis, fakeSeries = void 0, ordinalIndex = ordinal.index;
            // If this is the first time, or the ordinal index is deleted by
            // updatedData,
            // create it.
            if (!ordinalIndex) {
                ordinalIndex = ordinal.index = {};
            }
            if (!ordinalIndex[key]) {
                // Create a fake axis object where the extended ordinal
                // positions are emulated
                fakeAxis = {
                    series: [],
                    chart: chart,
                    forceOrdinal: false,
                    getExtremes: function () {
                        return {
                            min: extremes.dataMin,
                            max: extremes.dataMax + overscroll
                        };
                    },
                    applyGrouping: axisProto.applyGrouping,
                    getGroupPixelWidth: axisProto.getGroupPixelWidth,
                    getTimeTicks: axisProto.getTimeTicks,
                    options: {
                        ordinal: true
                    },
                    ordinal: {
                        getGroupIntervalFactor: this.getGroupIntervalFactor
                    },
                    ordinal2lin: axisProto.ordinal2lin, // #6276
                    getIndexOfPoint: axisProto.getIndexOfPoint,
                    val2lin: axisProto.val2lin // #2590
                };
                fakeAxis.ordinal.axis = fakeAxis;
                // Add the fake series to hold the full data, then apply
                // processData to it
                axis.series.forEach((series) => {
                    if (series.takeOrdinalPosition === false) {
                        return; // #22657
                    }
                    fakeSeries = {
                        xAxis: fakeAxis,
                        chart: chart,
                        groupPixelWidth: series.groupPixelWidth,
                        destroyGroupedData: (external_highcharts_src_js_default_default()).noop,
                        getColumn: series.getColumn,
                        applyGrouping: series.applyGrouping,
                        getProcessedData: series.getProcessedData,
                        reserveSpace: series.reserveSpace,
                        visible: series.visible
                    };
                    const xData = series.getColumn('x').concat(withOverscroll ?
                        ordinal.getOverscrollPositions() :
                        []);
                    fakeSeries.dataTable = new Data_DataTableCore({
                        columns: {
                            x: xData
                        }
                    });
                    fakeSeries.options = {
                        ...series.options,
                        dataGrouping: series.currentDataGrouping ? {
                            firstAnchor: series.options.dataGrouping?.firstAnchor,
                            anchor: series.options.dataGrouping?.anchor,
                            lastAnchor: series.options.dataGrouping?.firstAnchor,
                            enabled: true,
                            forced: true,
                            approximation: 'open',
                            units: [[
                                    series.currentDataGrouping.unitName,
                                    [series.currentDataGrouping.count]
                                ]]
                        } : {
                            enabled: false
                        }
                    };
                    fakeAxis.series.push(fakeSeries);
                    series.processData.apply(fakeSeries);
                });
                fakeAxis.applyGrouping({ hasExtremesChanged: true });
                // Force to use the ordinal when points are evenly spaced (e.g.
                // weeks), #3825.
                if ((fakeSeries?.closestPointRange !==
                    fakeSeries?.basePointRange) &&
                    fakeSeries.currentDataGrouping) {
                    fakeAxis.forceOrdinal = true;
                }
                // Run beforeSetTickPositions to compute the ordinalPositions
                axis.ordinal.beforeSetTickPositions.apply({ axis: fakeAxis });
                if (!axis.ordinal.originalOrdinalRange &&
                    fakeAxis.ordinal.originalOrdinalRange) {
                    axis.ordinal.originalOrdinalRange =
                        fakeAxis.ordinal.originalOrdinalRange;
                }
                // Cache it
                if (fakeAxis.ordinal.positions) {
                    ordinalIndex[key] = fakeAxis.ordinal.positions;
                }
            }
            return ordinalIndex[key];
        }
        /**
         * Find the factor to estimate how wide the plot area would have been if
         * ordinal gaps were included. This value is used to compute an imagined
         * plot width in order to establish the data grouping interval.
         *
         * A real world case is the intraday-candlestick example. Without this
         * logic, it would show the correct data grouping when viewing a range
         * within each day, but once moving the range to include the gap between
         * two days, the interval would include the cut-away night hours and the
         * data grouping would be wrong. So the below method tries to compensate
         * by identifying the most common point interval, in this case days.
         *
         * An opposite case is presented in issue #718. We have a long array of
         * daily data, then one point is appended one hour after the last point.
         * We expect the data grouping not to change.
         *
         * In the future, if we find cases where this estimation doesn't work
         * optimally, we might need to add a second pass to the data grouping
         * logic, where we do another run with a greater interval if the number
         * of data groups is more than a certain fraction of the desired group
         * count.
         * @private
         */
        getGroupIntervalFactor(xMin, xMax, series) {
            const ordinal = this, processedXData = series.getColumn('x', true), len = processedXData.length, distances = [];
            let median, i, groupIntervalFactor = ordinal.groupIntervalFactor;
            // Only do this computation for the first series, let the other
            // inherit it (#2416)
            if (!groupIntervalFactor) {
                // Register all the distances in an array
                for (i = 0; i < len - 1; i++) {
                    distances[i] = (processedXData[i + 1] -
                        processedXData[i]);
                }
                // Sort them and find the median
                distances.sort(function (a, b) {
                    return a - b;
                });
                median = distances[Math.floor(len / 2)];
                // Compensate for series that don't extend through the entire
                // axis extent. #1675.
                xMin = Math.max(xMin, processedXData[0]);
                xMax = Math.min(xMax, processedXData[len - 1]);
                ordinal.groupIntervalFactor = groupIntervalFactor =
                    (len * median) / (xMax - xMin);
            }
            // Return the factor needed for data grouping
            return groupIntervalFactor;
        }
        /**
         * Get index of point inside the ordinal positions array.
         *
         * @private
         * @param {number} pixelVal
         * The pixel value of a point.
         *
         * @param {Array<number>} [ordinalArray]
         * An array of all points available on the axis for the given data set.
         * Either ordinalPositions if the value is inside the plotArea or
         * extendedOrdinalPositions if not.
         */
        getIndexOfPoint(pixelVal, ordinalArray) {
            const ordinal = this, axis = ordinal.axis, min = axis.min, minX = axis.minPixelPadding, indexOfMin = getIndexInArray(ordinalArray, min);
            const ordinalPointPixelInterval = axis.translationSlope *
                (ordinal.slope ||
                    axis.closestPointRange ||
                    ordinal.overscrollPointsRange);
            const shiftIndex = OrdinalAxis_correctFloat((pixelVal - minX) / ordinalPointPixelInterval);
            return indexOfMin + shiftIndex;
        }
        /**
         * Get ticks for an ordinal axis within a range where points don't
         * exist. It is required when overscroll is enabled. We can't base on
         * points, because we may not have any, so we use approximated
         * pointRange and generate these ticks between Axis.dataMax,
         * Axis.dataMax + Axis.overscroll evenly spaced. Used in panning and
         * navigator scrolling.
         * @private
         */
        getOverscrollPositions() {
            const ordinal = this, axis = ordinal.axis, extraRange = ordinal.convertOverscroll(axis.options.overscroll), distance = ordinal.overscrollPointsRange, positions = [];
            let max = axis.dataMax;
            if (OrdinalAxis_defined(distance)) {
                // Max + pointRange because we need to scroll to the last
                while (max < axis.dataMax + extraRange) {
                    max += distance;
                    positions.push(max);
                }
            }
            return positions;
        }
        /**
         * Make the tick intervals closer because the ordinal gaps make the
         * ticks spread out or cluster.
         * @private
         */
        postProcessTickInterval(tickInterval) {
            // Problem: https://jsfiddle.net/highcharts/FQm4E/1/. This is a case
            // where this algorithm doesn't work optimally. In this case, the
            // tick labels are spread out per week, but all the gaps reside
            // within weeks. So we have a situation where the labels are courser
            // than the ordinal gaps, and thus the tick interval should not be
            // altered.
            const ordinal = this, axis = ordinal.axis, ordinalSlope = ordinal.slope, closestPointRange = axis.closestPointRange;
            let ret;
            if (ordinalSlope && closestPointRange) {
                if (!axis.options.breaks) {
                    ret = (tickInterval /
                        (ordinalSlope / closestPointRange));
                }
                else {
                    ret = closestPointRange || tickInterval; // #7275
                }
            }
            else {
                ret = tickInterval;
            }
            return ret;
        }
        /**
         * If overscroll is pixel or percentage value, convert it to axis range.
         *
         * @private
         * @param {number | string} overscroll
         * Overscroll value in axis range, pixels or percentage value.
         * @return {number}
         * Overscroll value in axis range.
         */
        convertOverscroll(overscroll = 0) {
            const ordinal = this, axis = ordinal.axis, calculateOverscroll = function (overscrollPercentage) {
                return OrdinalAxis_pick(ordinal.originalOrdinalRange, OrdinalAxis_defined(axis.dataMax) && OrdinalAxis_defined(axis.dataMin) ?
                    axis.dataMax - axis.dataMin : 0) * overscrollPercentage;
            };
            if (OrdinalAxis_isString(overscroll)) {
                const overscrollValue = parseInt(overscroll, 10);
                let isFullRange;
                // #22334
                if (OrdinalAxis_defined(axis.min) && OrdinalAxis_defined(axis.max) &&
                    OrdinalAxis_defined(axis.dataMin) && OrdinalAxis_defined(axis.dataMax)) {
                    isFullRange =
                        axis.max - axis.min === axis.dataMax - axis.dataMin;
                    if (!isFullRange) {
                        this.originalOrdinalRange = axis.max - axis.min;
                    }
                }
                if (/%$/.test(overscroll)) {
                    // If overscroll is percentage
                    return calculateOverscroll(overscrollValue / 100);
                }
                if (/px/.test(overscroll)) {
                    // If overscroll is pixels, it is limited to 90% of the axis
                    // length to prevent division by zero
                    const limitedOverscrollValue = Math.min(overscrollValue, axis.len * 0.9), pixelToPercent = limitedOverscrollValue / axis.len;
                    return calculateOverscroll(pixelToPercent /
                        (isFullRange ? (1 - pixelToPercent) : 1));
                }
                // If overscroll is a string but not pixels or percentage,
                // return 0 as no overscroll
                return 0;
            }
            return overscroll;
        }
    }
    OrdinalAxis.Additions = Additions;
})(OrdinalAxis || (OrdinalAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_OrdinalAxis = (OrdinalAxis);

;// external ["./accessibility.src.js","default","RangeSelector"]
const external_accessibility_src_js_default_RangeSelector_namespaceObject = __WEBPACK_EXTERNAL_MODULE__accessibility_src_js_18c0d6a2__["default"].RangeSelector;
var external_accessibility_src_js_default_RangeSelector_default = /*#__PURE__*/__webpack_require__.n(external_accessibility_src_js_default_RangeSelector_namespaceObject);
;// external ["./accessibility.src.js","default","Scrollbar"]
const external_accessibility_src_js_default_Scrollbar_namespaceObject = __WEBPACK_EXTERNAL_MODULE__accessibility_src_js_18c0d6a2__["default"].Scrollbar;
var external_accessibility_src_js_default_Scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_accessibility_src_js_default_Scrollbar_namespaceObject);
;// external ["../highcharts.src.js","default","Chart"]
const external_highcharts_src_js_default_Chart_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Chart;
var external_highcharts_src_js_default_Chart_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Chart_namespaceObject);
;// external ["../highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Navigator/NavigatorDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { parse: color } = (external_highcharts_src_js_default_Color_default());

const { seriesTypes } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * The navigator is a small series below the main series, displaying
 * a view of the entire data set. It provides tools to zoom in and
 * out on parts of the data as well as panning across the dataset.
 *
 * @product      highstock gantt
 * @optionparent navigator
 */
const NavigatorDefaults = {
    /**
     * Whether the navigator and scrollbar should adapt to updated data
     * in the base X axis. When loading data async, as in the demo below,
     * this should be `false`. Otherwise new data will trigger navigator
     * redraw, which will cause unwanted looping. In the demo below, the
     * data in the navigator is set only once. On navigating, only the main
     * chart content is updated.
     *
     * @sample {highstock} stock/demo/lazy-loading/
     *         Set to false with async data loading
     *
     * @type      {boolean}
     * @default   true
     * @apioption navigator.adaptToUpdatedData
     */
    /**
     * An integer identifying the index to use for the base series, or a
     * string representing the id of the series.
     *
     * **Note**: As of Highcharts 5.0, this is now a deprecated option.
     * Prefer [series.showInNavigator](#plotOptions.series.showInNavigator).
     *
     * @see [series.showInNavigator](#plotOptions.series.showInNavigator)
     *
     * @deprecated
     * @type      {number|string}
     * @default   0
     * @apioption navigator.baseSeries
     */
    /**
     * Enable or disable the navigator.
     *
     * @sample {highstock} stock/navigator/enabled/
     *         Disable the navigator
     *
     * @type      {boolean}
     * @default   true
     * @apioption navigator.enabled
     */
    /**
     * When the chart is inverted, whether to draw the navigator on the
     * opposite side.
     *
     * @type      {boolean}
     * @default   false
     * @since     5.0.8
     * @apioption navigator.opposite
     */
    /**
     * The height of the navigator.
     *
     * @sample {highstock} stock/navigator/height/
     *         A higher navigator
     */
    height: 40,
    /**
     * The distance from the nearest element, the X axis or X axis labels.
     *
     * @sample {highstock} stock/navigator/margin/
     *         A margin of 2 draws the navigator closer to the X axis labels
     */
    margin: 22,
    /**
     * Whether the mask should be inside the range marking the zoomed
     * range, or outside. In Highcharts Stock 1.x it was always `false`.
     *
     * @sample {highstock} stock/demo/maskinside-false/
     *         False, mask outside
     *
     * @since   2.0
     */
    maskInside: true,
    /**
     * Options for the handles for dragging the zoomed area.
     *
     * @sample {highstock} stock/navigator/handles/
     *         Colored handles
     */
    handles: {
        /**
         * Width for handles.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since   6.0.0
         */
        width: 7,
        /**
         * Border radius of the handles.
         *
         * @sample {highstock} stock/navigator/handles-border-radius/
         *      Border radius on the navigator handles.
         *
         * @since 11.4.2
         */
        borderRadius: 0,
        /**
         * Height for handles.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since   6.0.0
         */
        height: 15,
        /**
         * Array to define shapes of handles. 0-index for left, 1-index for
         * right.
         *
         * Additionally, the URL to a graphic can be given on this form:
         * `url(graphic.png)`. Note that for the image to be applied to
         * exported charts, its URL needs to be accessible by the export
         * server.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
         * used by its method name, as shown in the demo.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @type    {Array<string>}
         * @default ["navigator-handle", "navigator-handle"]
         * @since   6.0.0
         */
        symbols: ['navigator-handle', 'navigator-handle'],
        /**
         * Allows to enable/disable handles.
         *
         * @since   6.0.0
         */
        enabled: true,
        /**
         * The width for the handle border and the stripes inside.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since     6.0.0
         * @apioption navigator.handles.lineWidth
         */
        lineWidth: 1,
        /**
         * The fill for the handle.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        backgroundColor: "#f2f2f2" /* Palette.neutralColor5 */,
        /**
         * The stroke for the handle border and the stripes inside.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        borderColor: "#999999" /* Palette.neutralColor40 */
    },
    /**
     * The color of the mask covering the areas of the navigator series
     * that are currently not visible in the main series. The default
     * color is bluish with an opacity of 0.3 to see the series below.
     *
     * @see In styled mode, the mask is styled with the
     *      `.highcharts-navigator-mask` and
     *      `.highcharts-navigator-mask-inside` classes.
     *
     * @sample {highstock} stock/navigator/maskfill/
     *         Blue, semi transparent mask
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default rgba(102,133,194,0.3)
     */
    maskFill: color("#667aff" /* Palette.highlightColor60 */).setOpacity(0.3).get(),
    /**
     * The color of the line marking the currently zoomed area in the
     * navigator.
     *
     * @sample {highstock} stock/navigator/outline/
     *         2px blue outline
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default #cccccc
     */
    outlineColor: "#999999" /* Palette.neutralColor40 */,
    /**
     * The width of the line marking the currently zoomed area in the
     * navigator.
     *
     * @see In styled mode, the outline stroke width is set with the
     *      `.highcharts-navigator-outline` class.
     *
     * @sample {highstock} stock/navigator/outline/
     *         2px blue outline
     *
     * @type    {number}
     */
    outlineWidth: 1,
    /**
     * Options for the navigator series. Available options are the same
     * as any series, documented at [plotOptions](#plotOptions.series)
     * and [series](#series).
     *
     * Unless data is explicitly defined on navigator.series, the data
     * is borrowed from the first series in the chart.
     *
     * Default series options for the navigator series are:
     * ```js
     * series: {
     *     type: 'areaspline',
     *     fillOpacity: 0.05,
     *     dataGrouping: {
     *         smoothed: true
     *     },
     *     lineWidth: 1,
     *     marker: {
     *         enabled: false
     *     }
     * }
     * ```
     *
     * @see In styled mode, the navigator series is styled with the
     *      `.highcharts-navigator-series` class.
     *
     * @sample {highstock} stock/navigator/series-data/
     *         Using a separate data set for the navigator
     * @sample {highstock} stock/navigator/series/
     *         A green navigator series
     *
     * @type {*|Array<*>|Highcharts.SeriesOptionsType|Array<Highcharts.SeriesOptionsType>}
     */
    series: {
        /**
         * The type of the navigator series.
         *
         * Heads up:
         * In column-type navigator, zooming is limited to at least one
         * point with its `pointRange`.
         *
         * @sample {highstock} stock/navigator/column/
         *         Column type navigator
         *
         * @type    {string}
         * @default {highstock} `areaspline` if defined, otherwise `line`
         * @default {gantt} gantt
         */
        type: (typeof seriesTypes.areaspline === 'undefined' ?
            'line' :
            'areaspline'),
        /**
         * The fill opacity of the navigator series.
         */
        fillOpacity: 0.05,
        /**
         * The pixel line width of the navigator series.
         */
        lineWidth: 1,
        /**
         * @ignore-option
         */
        compare: null,
        /**
         * @ignore-option
         */
        sonification: {
            enabled: false
        },
        /**
         * Unless data is explicitly defined, the data is borrowed from the
         * first series in the chart.
         *
         * @type      {Array<number|Array<number|string|null>|object|null>}
         * @product   highstock
         * @apioption navigator.series.data
         */
        /**
         * Data grouping options for the navigator series.
         *
         * @extends plotOptions.series.dataGrouping
         */
        dataGrouping: {
            approximation: 'average',
            enabled: true,
            groupPixelWidth: 2,
            // Replace smoothed property by anchors, #12455.
            firstAnchor: 'firstPoint',
            anchor: 'middle',
            lastAnchor: 'lastPoint',
            // Day and week differs from plotOptions.series.dataGrouping
            units: [
                ['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ['second', [1, 2, 5, 10, 15, 30]],
                ['minute', [1, 2, 5, 10, 15, 30]],
                ['hour', [1, 2, 3, 4, 6, 8, 12]],
                ['day', [1, 2, 3, 4]],
                ['week', [1, 2, 3]],
                ['month', [1, 3, 6]],
                ['year', null]
            ]
        },
        /**
         * Data label options for the navigator series. Data labels are
         * disabled by default on the navigator series.
         *
         * @extends plotOptions.series.dataLabels
         */
        dataLabels: {
            enabled: false,
            zIndex: 2 // #1839
        },
        id: 'highcharts-navigator-series',
        className: 'highcharts-navigator-series',
        /**
         * Sets the fill color of the navigator series.
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption navigator.series.color
         */
        /**
         * Line color for the navigator series. Allows setting the color
         * while disallowing the default candlestick setting.
         *
         * @type {Highcharts.ColorString|null}
         */
        lineColor: null, // #4602
        marker: {
            enabled: false
        },
        /**
         * Since Highcharts Stock v8, default value is the same as default
         * `pointRange` defined for a specific type (e.g. `null` for
         * column type).
         *
         * In Highcharts Stock version < 8, defaults to 0.
         *
         * @extends plotOptions.series.pointRange
         * @type {number|null}
         * @apioption navigator.series.pointRange
         */
        /**
         * The threshold option. Setting it to 0 will make the default
         * navigator area series draw its area from the 0 value and up.
         *
         * @type {number|null}
         */
        threshold: null
    },
    /**
     * Enable or disable navigator sticking to right, while adding new
     * points. If `undefined`, the navigator sticks to the axis maximum only
     * if it was already at the maximum prior to adding points.
     *
     * @type      {boolean}
     * @default   undefined
     * @since 10.2.1
     * @sample {highstock} stock/navigator/sticktomax-false/
     * stickToMax set to false
     * @apioption navigator.stickToMax
     */
    /**
     * Options for the navigator X axis. Default series options for the
     * navigator xAxis are:
     * ```js
     * xAxis: {
     *     tickWidth: 0,
     *     lineWidth: 0,
     *     gridLineWidth: 1,
     *     tickPixelInterval: 200,
     *     labels: {
     *            align: 'left',
     *         style: {
     *             color: '#888'
     *         },
     *         x: 3,
     *         y: -4
     *     }
     * }
     * ```
     *
     * @extends   xAxis
     * @excluding linkedTo, maxZoom, minRange, opposite, range, scrollbar,
     *            showEmpty, maxRange
     */
    xAxis: {
        /**
         * Additional range on the right side of the xAxis. Works similar to
         * `xAxis.maxPadding`, but the value is set in terms of axis values,
         * percentage or pixels.
         *
         * If it's a number, it is interpreted as axis values, which in a
         * datetime axis equals milliseconds.
         *
         * If it's a percentage string, is interpreted as percentages of the
         * axis length. An overscroll of 50% will make a 100px axis 50px longer.
         *
         * If it's a pixel string, it is interpreted as a fixed pixel value, but
         * limited to 90% of the axis length.
         *
         * If it's undefined, the value is inherited from `xAxis.overscroll`.
         *
         * Can be set for both, main xAxis and navigator's xAxis.
         *
         * @type    {number | string | undefined}
         * @since   6.0.0
         * @apioption navigator.xAxis.overscroll
         */
        className: 'highcharts-navigator-xaxis',
        tickLength: 0,
        lineWidth: 0,
        gridLineColor: "#e6e6e6" /* Palette.neutralColor10 */,
        id: 'navigator-x-axis',
        gridLineWidth: 1,
        tickPixelInterval: 200,
        labels: {
            align: 'left',
            /**
             * @type {Highcharts.CSSObject}
             */
            style: {
                /** @ignore */
                color: "#000000" /* Palette.neutralColor100 */,
                /** @ignore */
                fontSize: '0.7em',
                /** @ignore */
                opacity: 0.6,
                /** @ignore */
                textOutline: '2px contrast'
            },
            x: 3,
            y: -4
        },
        crosshair: false
    },
    /**
     * Options for the navigator Y axis. Default series options for the
     * navigator yAxis are:
     * ```js
     * yAxis: {
     *     gridLineWidth: 0,
     *     startOnTick: false,
     *     endOnTick: false,
     *     minPadding: 0.1,
     *     maxPadding: 0.1,
     *     labels: {
     *         enabled: false
     *     },
     *     title: {
     *         text: null
     *     },
     *     tickWidth: 0
     * }
     * ```
     *
     * @extends   yAxis
     * @excluding height, linkedTo, maxZoom, minRange, ordinal, range,
     *            showEmpty, scrollbar, top, units, maxRange, minLength,
     *            maxLength, resize
     */
    yAxis: {
        className: 'highcharts-navigator-yaxis',
        gridLineWidth: 0,
        startOnTick: false,
        endOnTick: false,
        minPadding: 0.1,
        id: 'navigator-y-axis',
        maxPadding: 0.1,
        labels: {
            enabled: false
        },
        crosshair: false,
        title: {
            text: void 0
        },
        tickLength: 0,
        tickWidth: 0
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Navigator_NavigatorDefaults = (NavigatorDefaults);
/* *
 *
 *  API Options
 *
 * */
/**
 * Maximum range which can be set using the navigator's handles.
 * Opposite of [xAxis.minRange](#xAxis.minRange).
 *
 * @sample {highstock} stock/navigator/maxrange/
 *         Defined max and min range
 *
 * @type      {number}
 * @since     6.0.0
 * @product   highstock gantt
 * @apioption xAxis.maxRange
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Stock/RangeSelector/RangeSelectorDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Declarations
 *
 * */
/**
 * An object containing language-related strings and settings. A typical setup
 * uses `Highcharts.setOptions` to make the options apply to all charts in the
 * same page.
 *
 * ```js
 * Highcharts.setOptions({
 *     lang: {
 *         locale: 'fr'
 *     }
 * });
 * ```
 *
 * @optionparent lang
 */
const RangeSelectorDefaults_lang = {
    /**
     * The text for the label for the range selector buttons.
     *
     * @product highstock gantt
     */
    rangeSelectorZoom: 'Zoom',
    /**
     * The text for the label for the "from" input box in the range
     * selector. Since v9.0, this string is empty as the label is not
     * rendered by default.
     *
     * @product highstock gantt
     */
    rangeSelectorFrom: '',
    /**
     * The text for the label for the "to" input box in the range selector.
     *
     * @product highstock gantt
     */
    rangeSelectorTo: '→',
    /**
     * The default text for the rangeselector buttons.
     *
     * @since 12.2.0
     */
    rangeSelector: {
        allText: 'All',
        allTitle: 'View all',
        monthText: '{count}m',
        monthTitle: 'View {count} {#eq count 1}month{else}months{/eq}',
        yearText: '{count}y',
        yearTitle: 'View {count} {#eq count 1}year{else}years{/eq}',
        ytdText: 'YTD',
        ytdTitle: 'View year to date'
    }
};
/**
 * The range selector is a tool for selecting ranges to display within
 * the chart. It provides buttons to select preconfigured ranges in
 * the chart, like 1 day, 1 week, 1 month etc. It also provides input
 * boxes where min and max dates can be manually input.
 *
 * @product      highstock gantt
 * @optionparent rangeSelector
 */
const rangeSelector = {
    /**
     * Whether to enable all buttons from the start. By default buttons are
     * only enabled if the corresponding time range exists on the X axis,
     * but enabling all buttons allows for dynamically loading different
     * time ranges.
     *
     * @sample {highstock} stock/rangeselector/allbuttonsenabled-true/
     *         All buttons enabled
     *
     * @since     2.0.3
     */
    allButtonsEnabled: false,
    /**
     * An array of configuration objects for the buttons.
     *
     * Defaults to:
     * ```js
     * buttons: [{
     *     type: 'month',
     *     count: 1,
     *     text: '1m',
     *     title: 'View 1 month'
     * }, {
     *     type: 'month',
     *     count: 3,
     *     text: '3m',
     *     title: 'View 3 months'
     * }, {
     *     type: 'month',
     *     count: 6,
     *     text: '6m',
     *     title: 'View 6 months'
     * }, {
     *     type: 'ytd',
     *     text: 'YTD',
     *     title: 'View year to date'
     * }, {
     *     type: 'year',
     *     count: 1,
     *     text: '1y',
     *     title: 'View 1 year'
     * }, {
     *     type: 'all',
     *     text: 'All',
     *     title: 'View all'
     * }]
     * ```
     *
     * @sample {highstock} stock/demo/rangeselector-datagrouping/
     *         Data grouping by buttons
     *
     * @type      {Array<*>}
     */
    buttons: [{
            type: 'month',
            count: 1
        }, {
            type: 'month',
            count: 3
        }, {
            type: 'month',
            count: 6
        }, {
            type: 'ytd'
        }, {
            type: 'year',
            count: 1
        }, {
            type: 'all'
        }],
    /**
     * How many units of the defined type the button should span. If `type`
     * is "month" and `count` is 3, the button spans three months.
     *
     * @type      {number}
     * @default   1
     * @apioption rangeSelector.buttons.count
     */
    /**
     * Fires when clicking on the rangeSelector button. One parameter,
     * event, is passed to the function, containing common event
     * information.
     *
     * ```js
     * click: function(e) {
     *   console.log(this);
     * }
     * ```
     *
     * Return false to stop default button's click action.
     *
     * @sample {highstock} stock/rangeselector/button-click/
     *         Click event on the button
     *
     * @type      {Highcharts.RangeSelectorClickCallbackFunction}
     * @apioption rangeSelector.buttons.events.click
     */
    /**
     * Additional range (in milliseconds) added to the end of the calculated
     * time span.
     *
     * @sample {highstock} stock/rangeselector/min-max-offsets/
     *         Button offsets
     *
     * @type      {number}
     * @default   0
     * @since     6.0.0
     * @apioption rangeSelector.buttons.offsetMax
     */
    /**
     * Additional range (in milliseconds) added to the start of the
     * calculated time span.
     *
     * @sample {highstock} stock/rangeselector/min-max-offsets/
     *         Button offsets
     *
     * @type      {number}
     * @default   0
     * @since     6.0.0
     * @apioption rangeSelector.buttons.offsetMin
     */
    /**
     * When buttons apply dataGrouping on a series, by default zooming
     * in/out will deselect buttons and unset dataGrouping. Enable this
     * option to keep buttons selected when extremes change.
     *
     * @sample {highstock} stock/rangeselector/preserve-datagrouping/
     *         Different preserveDataGrouping settings
     *
     * @type      {boolean}
     * @default   false
     * @since     6.1.2
     * @apioption rangeSelector.buttons.preserveDataGrouping
     */
    /**
     * A custom data grouping object for each button.
     *
     * @see [series.dataGrouping](#plotOptions.series.dataGrouping)
     *
     * @sample {highstock} stock/demo/rangeselector-datagrouping/
     *         Data grouping by range selector buttons
     *
     * @type      {*}
     * @extends   plotOptions.series.dataGrouping
     * @apioption rangeSelector.buttons.dataGrouping
     */
    /**
     * The text for the button itself.
     *
     * @type      {string}
     * @apioption rangeSelector.buttons.text
     */
    /**
     * Explanation for the button, shown as a tooltip on hover, and used by
     * assistive technology.
     *
     * @type      {string}
     * @apioption rangeSelector.buttons.title
     */
    /**
     * Defined the time span for the button. Can be one of `millisecond`,
     * `second`, `minute`, `hour`, `day`, `week`, `month`, `year`, `ytd`,
     * and `all`.
     *
     * @type       {Highcharts.RangeSelectorButtonTypeValue}
     * @apioption  rangeSelector.buttons.type
     */
    /**
     * The space in pixels between the buttons in the range selector.
     */
    buttonSpacing: 5,
    /**
     * Whether to collapse the range selector buttons into a dropdown when
     * there is not enough room to show everything in a single row, instead
     * of dividing the range selector into multiple rows.
     * Can be one of the following:
     *  - `always`: Always collapse
     *  - `responsive`: Only collapse when there is not enough room
     *  - `never`: Never collapse
     *
     * @sample {highstock} stock/rangeselector/dropdown/
     *         Dropdown option
     *
     * @validvalue ["always", "responsive", "never"]
     * @since 9.0.0
     */
    dropdown: 'responsive',
    /**
     * Enable or disable the range selector. Default to `true` for stock
     * charts, using the `stockChart` factory.
     *
     * @sample {highstock} stock/rangeselector/enabled/
     *         Disable the range selector
     *
     * @type {boolean|undefined}
     * @default {highstock} true
     */
    enabled: void 0,
    /**
     * The vertical alignment of the rangeselector box. Allowed properties
     * are `top`, `middle`, `bottom`.
     *
     * @sample {highstock} stock/rangeselector/vertical-align-middle/
     *         Middle
     * @sample {highstock} stock/rangeselector/vertical-align-bottom/
     *         Bottom
     *
     * @type  {Highcharts.VerticalAlignValue}
     * @since 6.0.0
     */
    verticalAlign: 'top',
    /**
     * A collection of attributes for the buttons. The object takes SVG
     * attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button
     * states.
     *
     * CSS styles for the text label.
     *
     * In styled mode, the buttons are styled by the
     * `.highcharts-range-selector-buttons .highcharts-button` rule with its
     * different states.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type {Highcharts.SVGAttributes}
     */
    buttonTheme: {
        /** @ignore */
        width: 28,
        /** @ignore */
        height: 18,
        /** @ignore */
        padding: 2,
        /** @ignore */
        zIndex: 7 // #484, #852
    },
    /**
     * When the rangeselector is floating, the plot area does not reserve
     * space for it. This opens for positioning anywhere on the chart.
     *
     * @sample {highstock} stock/rangeselector/floating/
     *         Placing the range selector between the plot area and the
     *         navigator
     *
     * @since 6.0.0
     */
    floating: false,
    /**
     * The x offset of the range selector relative to its horizontal
     * alignment within `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @since 6.0.0
     */
    x: 0,
    /**
     * The y offset of the range selector relative to its horizontal
     * alignment within `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @since 6.0.0
     */
    y: 0,
    /**
     * Deprecated. The height of the range selector. Currently it is
     * calculated dynamically.
     *
     * @deprecated
     * @type  {number|undefined}
     * @since 2.1.9
     */
    height: void 0, // Reserved space for buttons and input
    /**
     * The border color of the date input boxes.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type      {Highcharts.ColorString}
     * @since     1.3.7
     */
    inputBoxBorderColor: 'none',
    /**
     * The pixel height of the date input boxes.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @since     1.3.7
     */
    inputBoxHeight: 17,
    /**
     * The pixel width of the date input boxes. When `undefined`, the width
     * is fitted to the rendered content.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type   {number|undefined}
     * @since  1.3.7
     */
    inputBoxWidth: void 0,
    /**
     * The date format in the input boxes when not selected for editing.
     * Defaults to `%e %b %Y`.
     *
     * This is used to determine which type of input to show,
     * `datetime-local`, `date` or `time` and falling back to `text` when
     * the browser does not support the input type or the format contains
     * milliseconds.
     *
     * @sample {highstock} stock/rangeselector/input-type/
     *         Input types
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     */
    inputDateFormat: '%[ebY]',
    /**
     * A custom callback function to parse values entered in the input boxes and
     * return a valid JavaScript time as milliseconds since 1970. The first
     * argument passed is the value to parse, second is a boolean indicating use
     * of UTC time. The third is a reference to the `time` object. Time zone can
     * be read from `time.timezone`.
     *
     * This will only get called for inputs of type `text`. Since v8.2.3, the
     * input type is dynamically determined based on the granularity of the
     * `inputDateFormat` and the browser support.
     *
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     * @type      {Highcharts.RangeSelectorParseCallbackFunction}
     * @since     1.3.3
     */
    inputDateParser: void 0,
    /**
     * The date format in the input boxes when they are selected for
     * editing. This must be a format that is recognized by JavaScript
     * Date.parse.
     *
     * This will only be used for inputs of type `text`. Since v8.2.3,
     * the input type is dynamically determined based on the granularity
     * of the `inputDateFormat` and the browser support.
     *
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     */
    inputEditDateFormat: '%Y-%m-%d',
    /**
     * Enable or disable the date input boxes.
     */
    inputEnabled: true,
    /**
     * Positioning for the input boxes. Allowed properties are `align`,
     *  `x` and `y`.
     *
     * @since 1.2.4
     */
    inputPosition: {
        /**
         * The alignment of the input box. Allowed properties are `left`,
         * `center`, `right`.
         *
         * @sample {highstock} stock/rangeselector/input-button-opposite-alignment/
         *         Opposite alignment
         *
         * @sample {highstock} stock/rangeselector/input-button-same-alignment/
         *         Same alignment for buttons and input
         *
         * @type  {Highcharts.AlignValue}
         * @since 6.0.0
         */
        align: 'right',
        /**
         * X offset of the input row.
         */
        x: 0,
        /**
         * Y offset of the input row.
         */
        y: 0
    },
    /**
     * The space in pixels between the labels and the date input boxes in
     * the range selector.
     *
     * @since 9.0.0
     */
    inputSpacing: 5,
    /**
     * The index of the button to appear pre-selected. If the selected range
     * exceeds the total data range and the 'all' option is available,
     * the 'all' option, showing the full range, is automatically selected.
     *
     * @type      {number}
     */
    selected: void 0,
    /**
     * Positioning for the button row.
     *
     * @since 1.2.4
     */
    buttonPosition: {
        /**
         * The alignment of the input box. Allowed properties are `left`,
         * `center`, `right`.
         *
         * @sample {highstock} stock/rangeselector/input-button-opposite-alignment/
         *         Opposite alignment
         *
         * @sample {highstock} stock/rangeselector/input-button-same-alignment/
         *         Same alignment for buttons and input
         *
         * @type  {Highcharts.AlignValue}
         * @since 6.0.0
         */
        align: 'left',
        /**
         * X offset of the button row.
         */
        x: 0,
        /**
         * Y offset of the button row.
         */
        y: 0
    },
    /**
     * CSS for the HTML inputs in the range selector.
     *
     * In styled mode, the inputs are styled by the
     * `.highcharts-range-input text` rule in SVG mode, and
     * `input.highcharts-range-selector` when active.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type      {Highcharts.CSSObject}
     * @apioption rangeSelector.inputStyle
     */
    inputStyle: {
        /** @ignore */
        color: "#334eff" /* Palette.highlightColor80 */,
        /** @ignore */
        cursor: 'pointer',
        /** @ignore */
        fontSize: '0.8em'
    },
    /**
     * CSS styles for the labels - the Zoom, From and To texts.
     *
     * In styled mode, the labels are styled by the
     * `.highcharts-range-label` class.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type {Highcharts.CSSObject}
     */
    labelStyle: {
        /** @ignore */
        color: "#666666" /* Palette.neutralColor60 */,
        /** @ignore */
        fontSize: '0.8em'
    }
};
/* *
 *
 *  Default Export
 *
 * */
const RangeSelectorDefaults = {
    lang: RangeSelectorDefaults_lang,
    rangeSelector
};
/* harmony default export */ const RangeSelector_RangeSelectorDefaults = (RangeSelectorDefaults);

;// ./code/es-modules/Stock/Scrollbar/ScrollbarDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Constant
 *
 * */
/**
 *
 * The scrollbar is a means of panning over the X axis of a stock chart.
 * Scrollbars can also be applied to other types of axes.
 *
 * Another approach to scrollable charts is the [chart.scrollablePlotArea](
 * https://api.highcharts.com/highcharts/chart.scrollablePlotArea) option that
 * is especially suitable for simpler cartesian charts on mobile.
 *
 * In styled mode, all the presentational options for the
 * scrollbar are replaced by the classes `.highcharts-scrollbar-thumb`,
 * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
 * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
 *
 * @sample stock/yaxis/inverted-bar-scrollbar/
 *         A scrollbar on a simple bar chart
 *
 * @product highstock gantt
 * @optionparent scrollbar
 *
 * @private
 */
const ScrollbarDefaults = {
    /**
     * The height of the scrollbar. If `buttonsEnabled` is true , the height
     * also applies to the width of the scroll arrows so that they are always
     * squares.
     *
     * @sample stock/scrollbar/style/
     *         Non-default height
     *
     * @type    {number}
     */
    height: 10,
    /**
     * The border rounding radius of the bar.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    barBorderRadius: 5,
    /**
     * The corner radius of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    buttonBorderRadius: 0,
    /**
     * Enable or disable the buttons at the end of the scrollbar.
     *
     * @since 11.0.0
     */
    buttonsEnabled: false,
    /**
     * Enable or disable the scrollbar.
     *
     * @sample stock/scrollbar/enabled/
     *         Disable the scrollbar, only use navigator
     *
     * @type      {boolean}
     * @default   true
     * @apioption scrollbar.enabled
     */
    /**
     * Whether to redraw the main chart as the scrollbar or the navigator
     * zoomed window is moved. Defaults to `true` for modern browsers and
     * `false` for legacy IE browsers as well as mobile devices.
     *
     * @sample stock/scrollbar/liveredraw
     *         Setting live redraw to false
     *
     * @type  {boolean}
     * @since 1.3
     */
    liveRedraw: void 0,
    /**
     * The margin between the scrollbar and its axis when the scrollbar is
     * applied directly to an axis, or the navigator in case that is enabled.
     * Defaults to 10 for axis, 3 for navigator.
     *
     * @type {number|undefined}
     */
    margin: void 0,
    /**
     * The minimum width of the scrollbar.
     *
     * @since 1.2.5
     */
    minWidth: 6,
    /** @ignore-option */
    opposite: true,
    /**
     * Whether to show or hide the scrollbar when the scrolled content is
     * zoomed out to it full extent.
     *
     * @type      {boolean}
     * @default   true
     * @apioption scrollbar.showFull
     */
    step: 0.2,
    /**
     * The z index of the scrollbar group.
     */
    zIndex: 3,
    /**
     * The background color of the scrollbar itself.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    barBackgroundColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The width of the bar's border.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    barBorderWidth: 0,
    /**
     * The color of the scrollbar's border.
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    barBorderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The color of the small arrow inside the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    buttonArrowColor: "#333333" /* Palette.neutralColor80 */,
    /**
     * The color of scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    buttonBackgroundColor: "#e6e6e6" /* Palette.neutralColor10 */,
    /**
     * The color of the border of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    buttonBorderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The border width of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    buttonBorderWidth: 1,
    /**
     * The color of the small rifles in the middle of the scrollbar.
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    rifleColor: 'none',
    /**
     * The color of the track background.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    trackBackgroundColor: 'rgba(255, 255, 255, 0.001)', // #18922
    /**
     * The color of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    trackBorderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The corner radius of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    trackBorderRadius: 5,
    /**
     * The width of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    trackBorderWidth: 1
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Scrollbar_ScrollbarDefaults = (ScrollbarDefaults);

;// ./code/es-modules/Stock/Utilities/StockUtilities.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defined: StockUtilities_defined } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Sets the chart.fixedRange to the specified value. If the value is larger
 * than actual range, sets it to the maximum possible range. (#20327)
 *
 * @private
 * @function Highcharts.StockChart#setFixedRange
 * @param {number|undefined} range
 *        Range to set in axis units.
 */
function setFixedRange(range) {
    const xAxis = this.xAxis[0];
    if (StockUtilities_defined(xAxis.dataMax) &&
        StockUtilities_defined(xAxis.dataMin) &&
        range) {
        this.fixedRange = Math.min(range, xAxis.dataMax - xAxis.dataMin);
    }
    else {
        this.fixedRange = range;
    }
}
const StockUtilities = {
    setFixedRange
};
/* harmony default export */ const Utilities_StockUtilities = (StockUtilities);

;// ./code/es-modules/Core/Chart/StockChart.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { format: StockChart_format } = (external_highcharts_src_js_default_Templating_default());

const { getOptions: StockChart_getOptions } = (external_highcharts_src_js_default_default());




const { setFixedRange: StockChart_setFixedRange } = Utilities_StockUtilities;

const { addEvent: StockChart_addEvent, clamp, crisp, defined: StockChart_defined, extend, find, isNumber: StockChart_isNumber, isString: StockChart_isString, merge: StockChart_merge, pick: StockChart_pick, splat } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Get stock-specific default axis options.
 *
 * @private
 * @function getDefaultAxisOptions
 */
function getDefaultAxisOptions(coll, options, defaultOptions) {
    if (coll === 'xAxis') {
        return {
            minPadding: 0,
            maxPadding: 0,
            overscroll: 0,
            ordinal: true
        };
    }
    if (coll === 'yAxis') {
        return {
            labels: {
                y: -2
            },
            opposite: defaultOptions.opposite ?? options.opposite ?? true,
            showLastLabel: !!(
            // #6104, show last label by default for category axes
            options.categories ||
                options.type === 'category'),
            title: {
                text: void 0
            }
        };
    }
    return {};
}
/**
 * Get stock-specific forced axis options.
 *
 * @private
 * @function getForcedAxisOptions
 */
function getForcedAxisOptions(type, chartOptions) {
    if (type === 'xAxis') {
        // Always disable startOnTick:true on the main axis when the navigator
        // is enabled (#1090)
        const navigatorEnabled = StockChart_pick(chartOptions.navigator?.enabled, Navigator_NavigatorDefaults.enabled, true);
        const axisOptions = {
            type: 'datetime',
            categories: void 0
        };
        if (navigatorEnabled) {
            axisOptions.startOnTick = false;
            axisOptions.endOnTick = false;
        }
        return axisOptions;
    }
    return {};
}
/* *
 *
 *  Class
 *
 * */
/**
 * Stock-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/stock
 *
 * @class
 * @name Highcharts.StockChart
 * @extends Highcharts.Chart
 */
class StockChart extends (external_highcharts_src_js_default_Chart_default()) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.StockChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded.
     *
     *
     * @emits Highcharts.StockChart#event:init
     * @emits Highcharts.StockChart#event:afterInit
     */
    init(userOptions, callback) {
        const defaultOptions = StockChart_getOptions(), xAxisOptions = userOptions.xAxis, yAxisOptions = userOptions.yAxis, 
        // Always disable startOnTick:true on the main axis when the
        // navigator is enabled (#1090)
        navigatorEnabled = StockChart_pick(userOptions.navigator?.enabled, Navigator_NavigatorDefaults.enabled, true);
        // Avoid doing these twice
        userOptions.xAxis = userOptions.yAxis = void 0;
        const options = StockChart_merge({
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                zooming: {
                    pinchType: 'x',
                    mouseWheel: {
                        type: 'x'
                    }
                }
            },
            navigator: {
                enabled: navigatorEnabled
            },
            scrollbar: {
                // #4988 - check if setOptions was called
                enabled: StockChart_pick(Scrollbar_ScrollbarDefaults.enabled, true)
            },
            rangeSelector: {
                // #4988 - check if setOptions was called
                enabled: StockChart_pick(RangeSelector_RangeSelectorDefaults.rangeSelector.enabled, true)
            },
            title: {
                text: null
            },
            tooltip: {
                split: StockChart_pick(defaultOptions.tooltip?.split, true),
                crosshairs: true
            },
            legend: {
                enabled: false
            }
        }, userOptions, // User's options
        {
            isStock: true // Internal flag
        });
        userOptions.xAxis = xAxisOptions;
        userOptions.yAxis = yAxisOptions;
        // Apply X axis options to both single and multi y axes
        options.xAxis = splat(userOptions.xAxis || {}).map((xAxisOptions) => StockChart_merge(getDefaultAxisOptions('xAxis', xAxisOptions, defaultOptions.xAxis), 
        // #7690
        xAxisOptions, // User options
        getForcedAxisOptions('xAxis', userOptions)));
        // Apply Y axis options to both single and multi y axes
        options.yAxis = splat(userOptions.yAxis || {}).map((yAxisOptions) => StockChart_merge(getDefaultAxisOptions('yAxis', yAxisOptions, defaultOptions.yAxis), 
        // #7690
        yAxisOptions // User options
        ));
        super.init(options, callback);
    }
    /**
     * Factory for creating different axis types.
     * Extended to add stock defaults.
     *
     * @private
     * @function Highcharts.StockChart#createAxis
     * @param {string} coll
     * An axis type.
     * @param {Chart.CreateAxisOptionsObject} options
     * The axis creation options.
     */
    createAxis(coll, options) {
        options.axis = StockChart_merge(getDefaultAxisOptions(coll, options.axis, StockChart_getOptions()[coll]), options.axis, getForcedAxisOptions(coll, this.userOptions));
        return super.createAxis(coll, options);
    }
}
StockChart_addEvent((external_highcharts_src_js_default_Chart_default()), 'update', function (e) {
    const chart = this, options = e.options;
    // Use case: enabling scrollbar from a disabled state.
    // Scrollbar needs to be initialized from a controller, Navigator in this
    // case (#6615)
    if ('scrollbar' in options && chart.navigator) {
        StockChart_merge(true, chart.options.scrollbar, options.scrollbar);
        chart.navigator.update({ enabled: !!chart.navigator.navigatorEnabled });
        delete options.scrollbar;
    }
});
/* *
 *
 *  Composition
 *
 * */
(function (StockChart) {
    /* *
     *
     *  Functions
     *
     * */
    /** @private */
    function compose(ChartClass, AxisClass, SeriesClass, SVGRendererClass) {
        const seriesProto = SeriesClass.prototype;
        if (!seriesProto.forceCropping) {
            StockChart_addEvent(AxisClass, 'afterDrawCrosshair', onAxisAfterDrawCrosshair);
            StockChart_addEvent(AxisClass, 'afterHideCrosshair', onAxisAfterHideCrosshair);
            StockChart_addEvent(AxisClass, 'autoLabelAlign', onAxisAutoLabelAlign);
            StockChart_addEvent(AxisClass, 'destroy', onAxisDestroy);
            StockChart_addEvent(AxisClass, 'getPlotLinePath', onAxisGetPlotLinePath);
            ChartClass.prototype.setFixedRange = StockChart_setFixedRange;
            seriesProto.forceCropping = seriesForceCropping;
            StockChart_addEvent(SeriesClass, 'setOptions', onSeriesSetOptions);
            SVGRendererClass.prototype.crispPolyLine = svgRendererCrispPolyLine;
        }
    }
    StockChart.compose = compose;
    /**
     * Extend crosshairs to also draw the label.
     * @private
     */
    function onAxisAfterDrawCrosshair(event) {
        const axis = this;
        // Check if the label has to be drawn
        if (!(axis.crosshair?.label?.enabled &&
            axis.cross &&
            StockChart_isNumber(axis.min) &&
            StockChart_isNumber(axis.max))) {
            return;
        }
        const chart = axis.chart, log = axis.logarithmic, options = axis.crosshair.label, // The label's options
        horiz = axis.horiz, // Axis orientation
        opposite = axis.opposite, // Axis position
        left = axis.left, // Left position
        top = axis.top, // Top position
        width = axis.width, tickInside = axis.options.tickPosition === 'inside', snap = axis.crosshair.snap !== false, e = event.e || (axis.cross?.e), point = event.point;
        let crossLabel = axis.crossLabel, // The svgElement
        posx, posy, formatOption = options.format, formatFormat = '', limit, offset = 0, 
        // Use last available event (#5287)
        min = axis.min, max = axis.max;
        if (log) {
            min = log.lin2log(axis.min);
            max = log.lin2log(axis.max);
        }
        const align = (horiz ? 'center' : opposite ?
            (axis.labelAlign === 'right' ? 'right' : 'left') :
            (axis.labelAlign === 'left' ? 'left' : 'center'));
        // If the label does not exist yet, create it.
        if (!crossLabel) {
            crossLabel = axis.crossLabel = chart.renderer
                .label('', 0, void 0, options.shape || 'callout')
                .addClass('highcharts-crosshair-label highcharts-color-' + (point?.series ?
                point.series.colorIndex :
                axis.series[0] && this.series[0].colorIndex))
                .attr({
                align: options.align || align,
                padding: StockChart_pick(options.padding, 8),
                r: StockChart_pick(options.borderRadius, 3),
                zIndex: 2
            })
                .add(axis.labelGroup);
            // Presentational
            if (!chart.styledMode) {
                crossLabel
                    .attr({
                    fill: options.backgroundColor ||
                        point?.series?.color || // #14888
                        "#666666" /* Palette.neutralColor60 */,
                    stroke: options.borderColor || '',
                    'stroke-width': options.borderWidth || 0
                })
                    .css(extend({
                    color: "#ffffff" /* Palette.backgroundColor */,
                    fontWeight: 'normal',
                    fontSize: '0.7em',
                    textAlign: 'center'
                }, options.style || {}));
            }
        }
        if (horiz) {
            posx = snap ? (point.plotX || 0) + left : e.chartX;
            posy = top + (opposite ? 0 : axis.height);
        }
        else {
            posx = left + axis.offset + (opposite ? width : 0);
            posy = snap ? (point.plotY || 0) + top : e.chartY;
        }
        if (!formatOption && !options.formatter) {
            if (axis.dateTime) {
                formatFormat = '%b %d, %Y';
            }
            formatOption =
                '{value' + (formatFormat ? ':' + formatFormat : '') + '}';
        }
        // Show the label
        const value = snap ?
            (axis.isXAxis ? point.x : point.y) :
            axis.toValue(horiz ? e.chartX : e.chartY);
        // Crosshair should be rendered within Axis range (#7219) and the point
        // of currentPriceIndicator should be inside the plot area (#14879).
        const isInside = point?.series ?
            point.series.isPointInside(point) :
            (StockChart_isNumber(value) && value > min && value < max);
        let text = '';
        if (formatOption) {
            text = StockChart_format(formatOption, { value }, chart);
        }
        else if (options.formatter && StockChart_isNumber(value)) {
            text = options.formatter.call(axis, value);
        }
        crossLabel.attr({
            text,
            x: posx,
            y: posy,
            visibility: isInside ? 'inherit' : 'hidden'
        });
        const crossBox = crossLabel.getBBox();
        // Now it is placed we can correct its position
        if (StockChart_isNumber(crossLabel.x) && !horiz && !opposite) {
            posx = crossLabel.x - (crossBox.width / 2);
        }
        if (StockChart_isNumber(crossLabel.y)) {
            if (horiz) {
                if ((tickInside && !opposite) || (!tickInside && opposite)) {
                    posy = crossLabel.y - crossBox.height;
                }
            }
            else {
                posy = crossLabel.y - (crossBox.height / 2);
            }
        }
        // Check the edges
        if (horiz) {
            limit = {
                left,
                right: left + axis.width
            };
        }
        else {
            limit = {
                left: axis.labelAlign === 'left' ? left : 0,
                right: axis.labelAlign === 'right' ?
                    left + axis.width :
                    chart.chartWidth
            };
        }
        const translateX = crossLabel.translateX || 0;
        // Left edge
        if (translateX < limit.left) {
            offset = limit.left - translateX;
        }
        // Right edge
        if (translateX + crossBox.width >= limit.right) {
            offset = -(translateX + crossBox.width - limit.right);
        }
        // Show the crosslabel
        crossLabel.attr({
            x: Math.max(0, posx + offset),
            y: Math.max(0, posy),
            // First set x and y, then anchorX and anchorY, when box is actually
            // calculated, #5702
            anchorX: horiz ?
                posx :
                (axis.opposite ? 0 : chart.chartWidth),
            anchorY: horiz ?
                (axis.opposite ? chart.chartHeight : 0) :
                posy + crossBox.height / 2
        });
    }
    /**
     * Wrapper to hide the label.
     * @private
     */
    function onAxisAfterHideCrosshair() {
        const axis = this;
        if (axis.crossLabel) {
            axis.crossLabel = axis.crossLabel.hide();
        }
    }
    /**
     * Override the automatic label alignment so that the first Y axis' labels
     * are drawn on top of the grid line, and subsequent axes are drawn outside.
     * @private
     */
    function onAxisAutoLabelAlign(e) {
        const axis = this, chart = axis.chart, options = axis.options, panes = chart._labelPanes = chart._labelPanes || {}, labelOptions = options.labels;
        if (chart.options.isStock && axis.coll === 'yAxis') {
            const key = options.top + ',' + options.height;
            // Do it only for the first Y axis of each pane
            if (!panes[key] && labelOptions.enabled) {
                if (labelOptions.distance === 15 && // Default
                    axis.side === 1) {
                    labelOptions.distance = 0;
                }
                if (typeof labelOptions.align === 'undefined') {
                    labelOptions.align = 'right';
                }
                panes[key] = axis;
                e.align = 'right';
                e.preventDefault();
            }
        }
    }
    /**
     * Clear axis from label panes. (#6071)
     * @private
     */
    function onAxisDestroy() {
        const axis = this, chart = axis.chart, key = (axis.options &&
            (axis.options.top + ',' + axis.options.height));
        if (key && chart._labelPanes && chart._labelPanes[key] === axis) {
            delete chart._labelPanes[key];
        }
    }
    /**
     * Override getPlotLinePath to allow for multipane charts.
     * @private
     */
    function onAxisGetPlotLinePath(e) {
        const axis = this, series = (axis.isLinked && !axis.series && axis.linkedParent ?
            axis.linkedParent.series :
            axis.series), { chart, horiz } = axis, renderer = chart.renderer, result = [], { acrossPanes = true, force, translatedValue, value } = e, allPerpendicularAxes = (axis.isXAxis ? chart.yAxis : chart.xAxis) || [], 
        /**
         * Return the other axis based on either the axis option or on
         * related series.
         * @private
         */
        getAxis = (coll) => {
            const otherColl = coll === 'xAxis' ? 'yAxis' : 'xAxis', opt = axis.options[otherColl];
            if (acrossPanes && !axis.options.isInternal) {
                return allPerpendicularAxes.filter((a) => !a.options.isInternal);
            }
            // Other axis indexed by number
            if (StockChart_isNumber(opt)) {
                return [chart[otherColl][opt]];
            }
            // Other axis indexed by id (like navigator)
            if (StockChart_isString(opt)) {
                return [chart.get(opt)];
            }
            // Auto detect based on existing series
            return series.map((s) => s[otherColl]);
        };
        /**
         * Push a segment to the result SVGPath array
         */
        function pushSegment(pos, crossingPos1, crossingPos2) {
            result.push(['M', horiz ? pos : crossingPos1, horiz ? crossingPos1 : pos], ['L', horiz ? pos : crossingPos2, horiz ? crossingPos2 : pos]);
        }
        let axes = [], // #3416 need a default array
        uniqueAxes, transVal;
        if (chart.options.isStock &&
            // Ignore in case of colorAxis or zAxis. #3360, #3524, #6720
            (axis.coll === 'xAxis' || axis.coll === 'yAxis')) {
            e.preventDefault();
            // Get the related axes based on series
            axes = getAxis(axis.coll);
            // Get the related axes based options.*Axis setting #2810
            for (const A of allPerpendicularAxes) {
                if (!A.options.isInternal) {
                    const a = (A.isXAxis ? 'yAxis' : 'xAxis'), relatedAxis = (StockChart_defined(A.options[a]) &&
                        chart[a][A.options[a]]);
                    if (axis === relatedAxis) {
                        axes.push(A);
                    }
                }
            }
            // Remove duplicates in the axes array. If there are no axes in the
            // axes array, we are adding an axis without data, so we need to
            // populate this with grid lines (#2796).
            uniqueAxes = axes.length ?
                [] :
                [axis.isXAxis ? chart.yAxis[0] : chart.xAxis[0]]; // #3742
            for (const axis2 of axes) {
                if (uniqueAxes.indexOf(axis2) === -1 &&
                    // Do not draw on axis which overlap completely. #5424
                    !find(uniqueAxes, (unique) => (unique.pos === axis2.pos &&
                        unique.len === axis2.len))) {
                    uniqueAxes.push(axis2);
                }
            }
            transVal = StockChart_pick(translatedValue, axis.translate(value || 0, void 0, void 0, e.old));
            if (StockChart_isNumber(transVal)) {
                let skip, pos = horiz ?
                    transVal + axis.pos :
                    axis.pos + axis.len - transVal;
                // Outside plot area
                if (force !== 'pass' &&
                    (pos < axis.pos || pos > axis.pos + axis.len)) {
                    if (force) {
                        pos = clamp(pos, axis.pos, axis.pos + axis.len);
                    }
                    else {
                        skip = true;
                    }
                }
                if (!skip) {
                    const crossingPosName = horiz ? 'top' : 'left', crossingLenName = horiz ? 'height' : 'width';
                    if (!acrossPanes &&
                        // If the perpendicular position is set explicitly on
                        // the axis, use it. For example, if `top` and `height`
                        // options are set on a horizontal x-axis, the grid
                        // lines should conform to that position.
                        (axis.options[crossingPosName] ||
                            axis.options[crossingLenName])) {
                        pushSegment(pos, axis[crossingPosName], axis[crossingPosName] + axis[crossingLenName]);
                    }
                    else {
                        for (const perpendicularAxis of uniqueAxes) {
                            pushSegment(pos, perpendicularAxis.pos, perpendicularAxis.pos + perpendicularAxis.len);
                        }
                    }
                }
            }
            e.path = result.length > 0 ?
                renderer.crispPolyLine(result, e.lineWidth || 1) :
                // #3557 getPlotLinePath in regular Highcharts also returns null
                void 0;
        }
    }
    /**
     * Handle som Stock-specific series defaults, override the plotOptions
     * before series options are handled.
     * @private
     */
    function onSeriesSetOptions(e) {
        const series = this;
        if (series.chart.options.isStock) {
            let overrides;
            if (series.is('column') || series.is('columnrange')) {
                overrides = {
                    borderWidth: 0,
                    shadow: false
                };
            }
            else if (!series.is('scatter') && !series.is('sma')) {
                overrides = {
                    marker: {
                        enabled: false,
                        radius: 2
                    }
                };
            }
            if (overrides) {
                e.plotOptions[series.type] = StockChart_merge(e.plotOptions[series.type], overrides);
            }
        }
    }
    /**
     * Based on the data grouping options decides whether
     * the data should be cropped while processing.
     *
     * @ignore
     * @function Highcharts.Series#forceCropping
     */
    function seriesForceCropping() {
        const series = this, chart = series.chart, options = series.options, dataGroupingOptions = options.dataGrouping, groupingEnabled = (series.allowDG !== false &&
            dataGroupingOptions &&
            StockChart_pick(dataGroupingOptions.enabled, chart.options.isStock));
        return groupingEnabled;
    }
    /* eslint-disable jsdoc/check-param-names */
    /**
     * Factory function for creating new stock charts. Creates a new
     * {@link Highcharts.StockChart|StockChart} object with different default
     * options than the basic Chart.
     *
     * @example
     * let chart = Highcharts.stockChart('container', {
     *     series: [{
     *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     *         pointInterval: 24 * 60 * 60 * 1000
     *     }]
     * });
     *
     * @function Highcharts.stockChart
     *
     * @param {string|Highcharts.HTMLDOMElement} [renderTo]
     *        The DOM element to render to, or its id.
     *
     * @param {Highcharts.Options} options
     *        The chart options structure as described in the
     *        [options reference](https://api.highcharts.com/highstock).
     *
     * @param {Highcharts.ChartCallbackFunction} [callback]
     *        A function to execute when the chart object is finished
     *        rendering and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        [chart.events.load](https://api.highcharts.com/highstock/chart.events.load)
     *        handler is equivalent.
     *
     * @return {Highcharts.StockChart}
     *         The chart object.
     */
    function stockChart(a, b, c) {
        return new StockChart(a, b, c);
    }
    StockChart.stockChart = stockChart;
    /* eslint-enable jsdoc/check-param-names */
    /**
     * Function to crisp a line with multiple segments
     *
     * @private
     * @function Highcharts.SVGRenderer#crispPolyLine
     */
    function svgRendererCrispPolyLine(points, width) {
        // Points format: [['M', 0, 0], ['L', 100, 0]]
        // normalize to a crisp line
        for (let i = 0; i < points.length; i = i + 2) {
            const start = points[i], end = points[i + 1];
            if (StockChart_defined(start[1]) && start[1] === end[1]) {
                start[1] = end[1] = crisp(start[1], width);
            }
            if (StockChart_defined(start[2]) && start[2] === end[2]) {
                start[2] = end[2] = crisp(start[2], width);
            }
        }
        return points;
    }
})(StockChart || (StockChart = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chart_StockChart = (StockChart);

;// ./code/es-modules/Series/HLC/HLCPoint.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { column: { prototype: { pointClass: ColumnPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class HLCPoint extends ColumnPoint {
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HLC_HLCPoint = (HLCPoint);

;// ./code/es-modules/Series/HLC/HLCSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * An HLC chart is a style of financial chart used to describe price
 * movements over time. It displays high, low and close values per
 * data point.
 *
 * @sample stock/demo/hlc/
 *         HLC chart
 *
 * @extends      plotOptions.column
 * @excluding    borderColor, borderRadius, borderWidth, crisp, stacking,
 *               stack
 * @product      highstock
 * @optionparent plotOptions.hlc
 */
const HLCSeriesDefaults = {
    /**
     * The approximate pixel width of each group. If for example a series
     * with 30 points is displayed over a 600 pixel wide plot area, no
     * grouping is performed. If however the series contains so many points
     * that the spacing is less than the groupPixelWidth, Highcharts will
     * try to group it into appropriate groups so that each is more or less
     * two pixels wide. Defaults to `5`.
     *
     * @type      {number}
     * @default   5
     * @product   highstock
     * @apioption plotOptions.hlc.dataGrouping.groupPixelWidth
     */
    /**
     * @type      {Highcharts.DataGroupingApproximationValue|Function}
     * @default   hlc
     * @product   highstock
     * @apioption plotOptions.hlc.dataGrouping.approximation
     */
    /**
     * @default   close
     * @apioption plotOptions.hlc.colorKey
     */
    /**
     * The pixel width of the line/border. Defaults to `1`.
     *
     * @sample {highstock} stock/plotoptions/hlc-linewidth/
     *         A greater line width
     *
     * @type    {number}
     * @default 1
     * @product highstock
     *
     * @public
     */
    lineWidth: 1,
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
            '<b> {series.name}</b><br/>' +
            '{series.chart.options.lang.stockHigh}: {point.high}<br/>' +
            '{series.chart.options.lang.stockLow}: {point.low}<br/>' +
            '{series.chart.options.lang.stockClose}: {point.close}<br/>'
    },
    /**
     * @type {number|null}
     */
    threshold: null,
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The pixel width of the line representing the HLC point.
             *
             * @type    {number}
             * @default 3
             * @product highstock
             */
            lineWidth: 3
        }
    },
    /**
     * Determines which one of  `high`, `low`, `close` values should
     * be represented as `point.y`, which is later used to set dataLabel
     * position and [compare](#plotOptions.series.compare).
     *
     * @sample {highstock} stock/plotoptions/hlc-pointvalkey/
     *         Possible values
     *
     * @declare    Highcharts.OptionsHLCPointValKeyValue
     * @type       {string}
     * @default    close
     * @validvalue ["high", "low", "close"]
     * @product    highstock
     * @apioption  plotOptions.hlc.pointValKey
     */
    /**
     * @default   close
     * @apioption plotOptions.hlc.colorKey
     */
    stickyTracking: true
};
/**
 * A `hlc` series. If the [type](#series.hlc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.hlc
 * @excluding dataParser, dataURL
 * @product   highstock
 * @apioption series.hlc
 */
/**
 * An array of data points for the series. For the `hlc` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 4 or 3 values. In this case, the values correspond
 *    to `x,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length of 3\.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 5, 6, 7],
 *        [1, 4, 8, 2],
 *        [2, 3, 4, 10]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.hlc.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        high: 4,
 *        low: 5,
 *        close: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        high: 3,
 *        low: 6,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number,number>|Array<(number|string),number,number,number>|*>}
 * @extends   series.arearange.data
 * @excluding y, marker
 * @product   highstock
 * @apioption series.hlc.data
 */
/**
 * The closing value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.hlc.data.close
 */
(''); // Keeps doclets above in JS file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HLC_HLCSeriesDefaults = (HLCSeriesDefaults);

;// ./code/es-modules/Series/HLC/HLCSeries.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




const { column: ColumnSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { crisp: HLCSeries_crisp, extend: HLCSeries_extend, merge: HLCSeries_merge } = (external_highcharts_src_js_default_default());

const { defaultOptions } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The hlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.hlc
 *
 * @augments Highcharts.Series
 */
class HLCSeries extends ColumnSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the path if close is not between high and low.
     *
     * @param {SVGPath} path the path array of the point
     * @param {number} halfStrokeWidth
     * @param {number} value value of the point to which the stem should be extended
     */
    extendStem(path, halfStrokeWidth, value) {
        const start = path[0];
        const end = path[1];
        // We don't need to worry about crisp - close value
        // is already crisped and halfStrokeWidth should remove it.
        if (typeof start[2] === 'number') {
            start[2] = Math.max(value + halfStrokeWidth, start[2]);
        }
        if (typeof end[2] === 'number') {
            end[2] = Math.min(value - halfStrokeWidth, end[2]);
        }
    }
    /**
     * Function to create SVGPath of the point based on the
     * plot positions of this point.
     * @private
     */
    getPointPath(point, graphic) {
        // Crisp vector coordinates
        const strokeWidth = graphic.strokeWidth(), series = point.series, 
        // #2596:
        crispX = HLCSeries_crisp(point.plotX || 0, strokeWidth), halfWidth = Math.round(point.shapeArgs.width / 2);
        // The vertical stem
        const path = [
            ['M', crispX, Math.round(point.yBottom)],
            ['L', crispX, Math.round(point.plotHigh)]
        ];
        // Close
        if (point.close !== null) {
            const plotClose = HLCSeries_crisp(point.plotClose, strokeWidth);
            path.push(['M', crispX, plotClose], ['L', crispX + halfWidth, plotClose]);
            series.extendStem(path, strokeWidth / 2, plotClose);
        }
        return path;
    }
    /**
     * Draw single point
     * @private
     */
    drawSinglePoint(point) {
        const series = point.series, chart = series.chart;
        let path, graphic = point.graphic;
        if (typeof point.plotY !== 'undefined') {
            // Create and/or update the graphic
            if (!graphic) {
                point.graphic = graphic = chart.renderer.path()
                    .add(series.group);
            }
            if (!chart.styledMode) {
                graphic.attr(series.pointAttribs(point, (point.selected && 'select'))); // #3897
            }
            // Crisp vector coordinates
            path = series.getPointPath(point, graphic);
            graphic[!graphic ? 'attr' : 'animate']({ d: path })
                .addClass(point.getClassName(), true);
        }
    }
    /**
     * Draw the data points
     * @private
     */
    drawPoints() {
        this.points.forEach(this.drawSinglePoint);
    }
    /**
     * @private
     * @function Highcharts.seriesTypes.hlc#init
     */
    init() {
        super.init.apply(this, arguments);
        this.options.stacking = void 0; // #8817
    }
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point, state) {
        const attribs = super.pointAttribs.call(this, point, state);
        delete attribs.fill;
        return attribs;
    }
    toYData(point) {
        // Return a plain array for speedy calculation
        return [point.high, point.low, point.close];
    }
    /**
     * Translate data points from raw values x and y to plotX and plotY
     *
     * @private
     * @function Highcharts.seriesTypes.hlc#translate
     */
    translate() {
        const series = this, yAxis = series.yAxis, names = (this.pointArrayMap && this.pointArrayMap.slice()) || [], translated = names.map((name) => `plot${name.charAt(0).toUpperCase() + name.slice(1)}`);
        translated.push('yBottom');
        names.push('low');
        super.translate.apply(series);
        // Do the translation
        series.points.forEach(function (point) {
            names.forEach(function (name, i) {
                let value = point[name];
                if (value !== null) {
                    if (series.dataModify) {
                        value = series.dataModify.modifyValue(value);
                    }
                    point[translated[i]] =
                        yAxis.toPixels(value, true);
                }
            });
            // Align the tooltip to the high value to avoid covering the
            // point
            point.tooltipPos[1] =
                point.plotHigh + yAxis.pos - series.chart.plotTop;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
HLCSeries.defaultOptions = HLCSeries_merge(ColumnSeries.defaultOptions, HLC_HLCSeriesDefaults);
HLCSeries_extend(HLCSeries.prototype, {
    pointClass: HLC_HLCPoint,
    animate: null, // Disable animation
    directTouch: false,
    keysAffectYAxis: ['low', 'high'],
    pointArrayMap: ['high', 'low', 'close'],
    pointAttrToOptions: {
        stroke: 'color',
        'stroke-width': 'lineWidth'
    },
    pointValKey: 'close'
});
// Extend default lang options with OHLC terms
const HLCDefaultLangOptions = {
    stockOpen: 'Open',
    stockHigh: 'High',
    stockLow: 'Low',
    stockClose: 'Close'
};
HLCSeries_extend(defaultOptions.lang, HLCDefaultLangOptions);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('hlc', HLCSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HLC_HLCSeries = ((/* unused pure expression or super */ null && (HLCSeries)));

;// ./code/es-modules/Series/OHLC/OHLCPoint.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { seriesTypes: { hlc: OHLCPoint_HLCSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Class
 *
 * */
class OHLCPoint extends OHLCPoint_HLCSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the parent method by adding up or down to the class name.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getClassName
     */
    getClassName() {
        return super.getClassName.call(this) +
            (this.open < this.close ?
                ' highcharts-point-up' :
                ' highcharts-point-down');
    }
    /**
     * Save upColor as point color (#14826).
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveUpColor
     */
    resolveUpColor() {
        if (this.open < this.close &&
            !this.options.color &&
            this.series.options.upColor) {
            this.color = this.series.options.upColor;
        }
    }
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveColor
     */
    resolveColor() {
        super.resolveColor();
        if (!this.series.is('heikinashi')) {
            this.resolveUpColor();
        }
    }
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getZone
     *
     * @return {Highcharts.SeriesZonesOptionsObject}
     *         The zone item.
     */
    getZone() {
        const zone = super.getZone();
        this.resolveUpColor();
        return zone;
    }
    /**
     * Extend the parent method by resolving up/down colors (#15849)
     * @private
     **/
    applyOptions() {
        super.applyOptions.apply(this, arguments);
        if (this.resolveColor) {
            this.resolveColor();
        }
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OHLC_OHLCPoint = (OHLCPoint);

;// ./code/es-modules/Series/OHLC/OHLCSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * An OHLC chart is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per
 * data point.
 *
 * @sample stock/demo/ohlc
 *         OHLC chart
 *
 * @extends      plotOptions.hlc
 * @product      highstock
 * @optionparent plotOptions.ohlc
 */
const OHLCSeriesDefaults = {
    /**
     * @type      {Highcharts.DataGroupingApproximationValue|Function}
     * @default   ohlc
     * @product   highstock
     * @apioption plotOptions.ohlc.dataGrouping.approximation
     */
    /**
     * Determines which one of  `open`, `high`, `low`, `close` values should
     * be represented as `point.y`, which is later used to set dataLabel
     * position and [compare](#plotOptions.series.compare).
     *
     * @declare    Highcharts.OptionsPointValKeyValue
     * @default    close
     * @validvalue ["open", "high", "low", "close"]
     * @product    highstock
     * @apioption  plotOptions.ohlc.pointValKey
     */
    /**
     * Line color for up points.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product   highstock
     * @apioption plotOptions.ohlc.upColor
     */
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
            '<b> {series.name}</b><br/>' +
            '{series.chart.options.lang.stockOpen}: {point.open}<br/>' +
            '{series.chart.options.lang.stockHigh}: {point.high}<br/>' +
            '{series.chart.options.lang.stockLow}: {point.low}<br/>' +
            '{series.chart.options.lang.stockClose}: {point.close}<br/>'
    }
};
/**
 * The parameter allows setting line series type and use OHLC indicators.
 * Data in OHLC format is required.
 *
 * @sample {highstock} stock/indicators/use-ohlc-data
 *         Use OHLC data format to plot line chart
 *
 * @type      {boolean}
 * @product   highstock
 * @apioption plotOptions.line.useOhlcData
 */
/**
 * A `ohlc` series. If the [type](#series.ohlc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ohlc
 * @excluding dataParser, dataURL
 * @product   highstock
 * @apioption series.ohlc
 */
/**
 * An array of data points for the series. For the `ohlc` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4\.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 6, 5, 6, 7],
 *        [1, 9, 4, 8, 2],
 *        [2, 6, 3, 4, 10]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.ohlc.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 3,
 *        high: 4,
 *        low: 5,
 *        close: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 4,
 *        high: 3,
 *        low: 6,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.arearange.data
 * @excluding y, marker
 * @product   highstock
 * @apioption series.ohlc.data
 */
/**
 * The closing value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.ohlc.data.close
 */
/**
 * The opening value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.ohlc.data.open
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OHLC_OHLCSeriesDefaults = (OHLCSeriesDefaults);

;// ./code/es-modules/Series/OHLC/OHLCSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { composed: OHLCSeries_composed } = (external_highcharts_src_js_default_default());



const { hlc: OHLCSeries_HLCSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { addEvent: OHLCSeries_addEvent, crisp: OHLCSeries_crisp, extend: OHLCSeries_extend, merge: OHLCSeries_merge, pushUnique: OHLCSeries_pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function onSeriesAfterSetOptions(e) {
    const options = e.options, dataGrouping = options.dataGrouping;
    if (dataGrouping &&
        options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        dataGrouping.approximation = 'ohlc';
    }
}
/**
 * Add useOhlcData option
 * @private
 */
function onSeriesInit(eventOptions) {
    // eslint-disable-next-line no-invalid-this
    const series = this, options = eventOptions.options;
    if (options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        OHLCSeries_extend(series, {
            pointValKey: OHLCSeries.prototype.pointValKey,
            // Keys: ohlcProto.keys, // @todo potentially nonsense
            pointArrayMap: OHLCSeries.prototype.pointArrayMap,
            toYData: OHLCSeries.prototype.toYData
        });
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ohlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ohlc
 *
 * @augments Highcharts.Series
 */
class OHLCSeries extends OHLCSeries_HLCSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass, ..._args) {
        if (OHLCSeries_pushUnique(OHLCSeries_composed, 'OHLCSeries')) {
            OHLCSeries_addEvent(SeriesClass, 'afterSetOptions', onSeriesAfterSetOptions);
            OHLCSeries_addEvent(SeriesClass, 'init', onSeriesInit);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    getPointPath(point, graphic) {
        const path = super.getPointPath(point, graphic), strokeWidth = graphic.strokeWidth(), crispX = OHLCSeries_crisp(point.plotX || 0, strokeWidth), halfWidth = Math.round(point.shapeArgs.width / 2);
        if (point.open !== null) {
            const plotOpen = OHLCSeries_crisp(point.plotOpen, strokeWidth);
            path.push(['M', crispX, plotOpen], ['L', crispX - halfWidth, plotOpen]);
            super.extendStem(path, strokeWidth / 2, plotOpen);
        }
        return path;
    }
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point, state) {
        const attribs = super.pointAttribs.call(this, point, state), options = this.options;
        delete attribs.fill;
        if (!point.options.color &&
            options.upColor &&
            point.open < point.close) {
            attribs.stroke = options.upColor;
        }
        return attribs;
    }
    toYData(point) {
        // Return a plain array for speedy calculation
        return [point.open, point.high, point.low, point.close];
    }
}
/* *
 *
 *  Static Properties
 *
 * */
OHLCSeries.defaultOptions = OHLCSeries_merge(OHLCSeries_HLCSeries.defaultOptions, OHLC_OHLCSeriesDefaults);
OHLCSeries_extend(OHLCSeries.prototype, {
    pointClass: OHLC_OHLCPoint,
    pointArrayMap: ['open', 'high', 'low', 'close']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ohlc', OHLCSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OHLC_OHLCSeries = (OHLCSeries);

;// ./code/es-modules/Series/Candlestick/CandlestickSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * A candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * @sample stock/demo/candlestick/
 *         Candlestick chart
 *
 * @extends      plotOptions.ohlc
 * @excluding    borderColor,borderRadius,borderWidth
 * @product      highstock
 * @optionparent plotOptions.candlestick
 */
const CandlestickSeriesDefaults = {
    /**
     * The specific line color for up candle sticks. The default is to
     * inherit the general `lineColor` setting.
     *
     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
     *         Candlestick line colors
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since     1.3.6
     * @product   highstock
     * @apioption plotOptions.candlestick.upLineColor
     */
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The pixel width of the line/border around the
             * candlestick.
             *
             * @product highstock
             */
            lineWidth: 2
        }
    },
    /**
     * @type    {number|null}
     * @product highstock
     */
    threshold: null,
    /**
     * The color of the line/border of the candlestick.
     *
     * In styled mode, the line stroke can be set with the
     * `.highcharts-candlestick-series .highcahrts-point` rule.
     *
     * @see [upLineColor](#plotOptions.candlestick.upLineColor)
     *
     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
     *         Candlestick line colors
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default #000000
     * @product highstock
     */
    lineColor: "#000000" /* Palette.neutralColor100 */,
    /**
     * The pixel width of the candlestick line/border. Defaults to `1`.
     *
     *
     * In styled mode, the line stroke width can be set with the
     * `.highcharts-candlestick-series .highcahrts-point` rule.
     *
     * @product highstock
     */
    lineWidth: 1,
    /**
     * The fill color of the candlestick when values are rising.
     *
     * In styled mode, the up color can be set with the
     * `.highcharts-candlestick-series .highcharts-point-up` rule.
     *
     * @sample {highstock} stock/plotoptions/candlestick-color/
     *         Custom colors
     * @sample {highstock} highcharts/css/candlestick/
     *         Colors in styled mode
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default #ffffff
     * @product highstock
    */
    upColor: "#ffffff" /* Palette.backgroundColor */,
    /**
     * @product highstock
     */
    stickyTracking: true
};
/**
 * A `candlestick` series. If the [type](#series.candlestick.type)
 * option is not specified, it is inherited from [chart.type](
 * #chart.type).
 *
 * @type      {*}
 * @extends   series,plotOptions.candlestick
 * @excluding dataParser, dataURL, marker
 * @product   highstock
 * @apioption series.candlestick
 */
/**
 * An array of data points for the series. For the `candlestick` series
 * type, points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 7, 2, 0, 4],
 *        [1, 1, 4, 2, 8],
 *        [2, 3, 3, 9, 3]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.candlestick.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 9,
 *        high: 2,
 *        low: 4,
 *        close: 6,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 1,
 *        high: 4,
 *        low: 7,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.ohlc.data
 * @excluding y
 * @product   highstock
 * @apioption series.candlestick.data
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Candlestick_CandlestickSeriesDefaults = (CandlestickSeriesDefaults);

;// ./code/es-modules/Series/Candlestick/CandlestickSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { column: CandlestickSeries_ColumnSeries, ohlc: CandlestickSeries_OHLCSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { crisp: CandlestickSeries_crisp, merge: CandlestickSeries_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The candlestick series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.candlestick
 *
 * @augments Highcharts.seriesTypes.ohlc
 */
class CandlestickSeries extends CandlestickSeries_OHLCSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Postprocess mapping between options and SVG attributes
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#pointAttribs
     */
    pointAttribs(point, state) {
        const attribs = CandlestickSeries_ColumnSeries.prototype.pointAttribs.call(this, point, state), options = this.options, isUp = point.open < point.close, stroke = options.lineColor || this.color, color = point.color || this.color; // (#14826)
        attribs['stroke-width'] = options.lineWidth;
        attribs.fill = point.options.color ||
            (isUp ? (options.upColor || color) : color);
        attribs.stroke = point.options.lineColor ||
            (isUp ? (options.upLineColor || stroke) : stroke);
        // Select or hover states
        if (state) {
            const stateOptions = options.states[state];
            attribs.fill = stateOptions.color || attribs.fill;
            attribs.stroke = stateOptions.lineColor || attribs.stroke;
            attribs['stroke-width'] =
                stateOptions.lineWidth || attribs['stroke-width'];
        }
        return attribs;
    }
    /**
     * Draw the data points.
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#drawPoints
     */
    drawPoints() {
        const series = this, points = series.points, chart = series.chart, reversedYAxis = series.yAxis.reversed;
        for (const point of points) {
            let graphic = point.graphic, plotOpen, plotClose, topBox, bottomBox, hasTopWhisker, hasBottomWhisker, crispX, path, halfWidth;
            const isNew = !graphic;
            if (typeof point.plotY !== 'undefined') {
                if (!graphic) {
                    point.graphic = graphic = chart.renderer.path()
                        .add(series.group);
                }
                if (!series.chart.styledMode) {
                    graphic
                        .attr(series.pointAttribs(point, (point.selected && 'select'))) // #3897
                        .shadow(series.options.shadow);
                }
                // Crisp vector coordinates
                const strokeWidth = graphic.strokeWidth();
                // #2596:
                crispX = CandlestickSeries_crisp(point.plotX || 0, strokeWidth);
                plotOpen = point.plotOpen;
                plotClose = point.plotClose;
                topBox = Math.min(plotOpen, plotClose);
                bottomBox = Math.max(plotOpen, plotClose);
                halfWidth = Math.round(point.shapeArgs.width / 2);
                hasTopWhisker = reversedYAxis ?
                    bottomBox !== point.yBottom :
                    Math.round(topBox) !==
                        Math.round(point.plotHigh || 0);
                hasBottomWhisker = reversedYAxis ?
                    Math.round(topBox) !==
                        Math.round(point.plotHigh || 0) :
                    bottomBox !== point.yBottom;
                topBox = CandlestickSeries_crisp(topBox, strokeWidth);
                bottomBox = CandlestickSeries_crisp(bottomBox, strokeWidth);
                // Create the path. Due to a bug in Chrome 49, the path is
                // first instantiated with no values, then the values
                // pushed. For unknown reasons, instantiating the path array
                // with all the values would lead to a crash when updating
                // frequently (#5193).
                path = [];
                path.push(['M', crispX - halfWidth, bottomBox], ['L', crispX - halfWidth, topBox], ['L', crispX + halfWidth, topBox], ['L', crispX + halfWidth, bottomBox], ['Z'], // Ensure a nice rectangle #2602
                ['M', crispX, topBox], [
                    'L',
                    // #460, #2094
                    crispX,
                    hasTopWhisker ?
                        Math.round(reversedYAxis ?
                            point.yBottom :
                            point.plotHigh) :
                        topBox
                ], ['M', crispX, bottomBox], [
                    'L',
                    // #460, #2094
                    crispX,
                    hasBottomWhisker ?
                        Math.round(reversedYAxis ?
                            point.plotHigh :
                            point.yBottom) :
                        bottomBox
                ]);
                graphic[isNew ? 'attr' : 'animate']({ d: path })
                    .addClass(point.getClassName(), true);
            }
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
CandlestickSeries.defaultOptions = CandlestickSeries_merge(CandlestickSeries_OHLCSeries.defaultOptions, { tooltip: CandlestickSeries_OHLCSeries.defaultOptions.tooltip }, Candlestick_CandlestickSeriesDefaults);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('candlestick', CandlestickSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Candlestick_CandlestickSeries = ((/* unused pure expression or super */ null && (CandlestickSeries)));

;// ./code/es-modules/Series/Flags/FlagsPoint.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { column: { prototype: { pointClass: FlagsPoint_ColumnPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isNumber: FlagsPoint_isNumber } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
class FlagsPoint extends FlagsPoint_ColumnPoint {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.ttBelow = false;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    isValid() {
        // #9233 - Prevent from treating flags as null points (even if
        // they have no y values defined).
        return FlagsPoint_isNumber(this.y) || typeof this.y === 'undefined';
    }
    /**
     * @private
     */
    hasNewShapeType() {
        const shape = this.options.shape || this.series.options.shape;
        return this.graphic && shape && shape !== this.graphic.symbolKey;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsPoint = (FlagsPoint);

;// ./code/es-modules/Series/Flags/FlagsSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * Flags are used to mark events in stock charts. They can be added on the
 * timeline, or attached to a specific series.
 *
 * @sample stock/demo/flags-general/
 *         Flags on a line series
 *
 * @extends      plotOptions.column
 * @excluding    animation, borderColor, borderWidth,
 *               colorByPoint, cropThreshold, dataGrouping, pointPadding,
 *               pointWidth, turboThreshold
 * @product      highstock
 * @optionparent plotOptions.flags
 */
const FlagsSeriesDefaults = {
    /**
     * The corner radius of the border surrounding each flag. For `squarepin`
     * shaped flags only. A number signifies pixels. A percentage string, like
     * for example 50%, signifies a relative size.
     */
    borderRadius: 0,
    /**
     * In case the flag is placed on a series, on what point key to place
     * it. Line and columns have one key, `y`. In range or OHLC-type series,
     * however, the flag can optionally be placed on the `open`, `high`,
     * `low` or `close` key.
     *
     * @sample {highstock} stock/plotoptions/flags-onkey/
     *         Range series, flag on high
     *
     * @type       {string}
     * @default    y
     * @since      4.2.2
     * @product    highstock
     * @validvalue ["y", "open", "high", "low", "close"]
     * @apioption  plotOptions.flags.onKey
     */
    /**
     * The id of the series that the flags should be drawn on. If no id
     * is given, the flags are drawn on the x axis.
     *
     * @sample {highstock} stock/plotoptions/flags/
     *         Flags on series and on x axis
     *
     * @type      {string}
     * @product   highstock
     * @apioption plotOptions.flags.onSeries
     */
    pointRange: 0, // #673
    /**
     * Whether the flags are allowed to overlap sideways. If `false`, the
     * flags are moved sideways using an algorithm that seeks to place every
     * flag as close as possible to its original position.
     *
     * @sample {highstock} stock/plotoptions/flags-allowoverlapx
     *         Allow sideways overlap
     *
     * @since 6.0.4
     */
    allowOverlapX: false,
    /**
     * The shape of the marker. Can be one of "flag", "circlepin",
     * "squarepin", or an image of the format `url(/path-to-image.jpg)`.
     * Individual shapes can also be set for each point.
     *
     * @sample {highstock} stock/plotoptions/flags/
     *         Different shapes
     *
     * @type    {Highcharts.FlagsShapeValue}
     * @product highstock
     */
    shape: 'flag',
    /**
     * When multiple flags in the same series fall on the same value, this
     * number determines the vertical offset between them.
     *
     * @sample {highstock} stock/plotoptions/flags-stackdistance/
     *         A greater stack distance
     *
     * @product highstock
     */
    stackDistance: 12,
    /**
     * Text alignment for the text inside the flag.
     *
     * @since      5.0.0
     * @product    highstock
     * @validvalue ["left", "center", "right"]
     */
    textAlign: 'center',
    /**
     * Specific tooltip options for flag series. Flag series tooltips are
     * different from most other types in that a flag doesn't have a data
     * value, so the tooltip rather displays the `text` option for each
     * point.
     *
     * @extends   plotOptions.series.tooltip
     * @excluding changeDecimals, valueDecimals, valuePrefix, valueSuffix
     * @product   highstock
     */
    tooltip: {
        pointFormat: '{point.text}'
    },
    /**
     * @type {number|null}
     */
    threshold: null,
    /**
     * The text to display on each flag. This can be defined on series
     * level, or individually for each point. Defaults to `"A"`.
     *
     * @type      {string}
     * @default   A
     * @product   highstock
     * @apioption plotOptions.flags.title
     */
    /**
     * The y position of the top left corner of the flag relative to either
     * the series (if onSeries is defined), or the x axis. Defaults to
     * `-30`.
     *
     * @product highstock
     */
    y: -30,
    /**
     * Whether to use HTML to render the flag texts. Using HTML allows for
     * advanced formatting, images and reliable bi-directional text
     * rendering. Note that exported images won't respect the HTML, and that
     * HTML won't respect Z-index settings.
     *
     * @type      {boolean}
     * @default   false
     * @since     1.3
     * @product   highstock
     * @apioption plotOptions.flags.useHTML
     */
    /**
     * Fixed width of the flag's shape. By default, width is autocalculated
     * according to the flag's title.
     *
     * @sample {highstock} stock/demo/flags-shapes/
     *         Flags with fixed width
     *
     * @type      {number}
     * @product   highstock
     * @apioption plotOptions.flags.width
     */
    /**
     * Fixed height of the flag's shape. By default, height is
     * autocalculated according to the flag's title.
     *
     * @type      {number}
     * @product   highstock
     * @apioption plotOptions.flags.height
     */
    /**
     * The fill color for the flags.
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product highstock
     */
    fillColor: "#ffffff" /* Palette.backgroundColor */,
    /**
     * The color of the line/border of the flag.
     *
     * In styled mode, the stroke is set in the
     * `.highcharts-flag-series.highcharts-point` rule.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default   #000000
     * @product   highstock
     * @apioption plotOptions.flags.lineColor
     */
    /**
     * The pixel width of the flag's line/border.
     *
     * @product highstock
     */
    lineWidth: 1,
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The color of the line/border of the flag.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @product highstock
             */
            lineColor: "#000000" /* Palette.neutralColor100 */,
            /**
             * The fill or background color of the flag.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @product highstock
             */
            fillColor: "#ccd3ff" /* Palette.highlightColor20 */
        }
    },
    /**
     * The text styles of the flag.
     *
     * In styled mode, the styles are set in the
     * `.highcharts-flag-series .highcharts-point` rule.
     *
     * @type    {Highcharts.CSSObject}
     * @default {"fontSize": "11px", "fontWeight": "bold"}
     * @product highstock
     */
    style: {
        /** @ignore-option */
        color: "#000000" /* Palette.neutralColor100 */,
        /** @ignore-option */
        fontSize: '0.7em',
        /** @ignore-option */
        fontWeight: 'bold'
    }
};
/**
 * A `flags` series. If the [type](#series.flags.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.flags
 * @excluding animation, borderColor, borderRadius, borderWidth, colorByPoint,
 *            connectNulls, cropThreshold, dashStyle, dataGrouping, dataParser,
 *            dataURL, gapSize, gapUnit, linecap, lineWidth, marker,
 *            pointPadding, pointWidth, step, turboThreshold, useOhlcData
 * @product   highstock
 * @apioption series.flags
 */
/**
 * An array of data points for the series. For the `flags` series type,
 * points can be given in the following ways:
 *
 * 1. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.flags.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        title: "A",
 *        text: "First event"
 *    }, {
 *        x: 1,
 *        title: "B",
 *        text: "Second event"
 *    }]
 *    ```
 *
 * @type      {Array<*>}
 * @extends   series.line.data
 * @excluding dataLabels, marker, name, y
 * @product   highstock
 * @apioption series.flags.data
 */
/**
 * The fill color of an individual flag. By default it inherits from
 * the series color.
 *
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @product   highstock
 * @apioption series.flags.data.fillColor
 */
/**
 * The longer text to be shown in the flag's tooltip.
 *
 * @type      {string}
 * @product   highstock
 * @apioption series.flags.data.text
 */
/**
 * The short text to be shown on the flag.
 *
 * @type      {string}
 * @product   highstock
 * @apioption series.flags.data.title
 */
''; // Keeps doclets above in transpiled file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsSeriesDefaults = (FlagsSeriesDefaults);

;// external ["../highcharts.src.js","default","RendererRegistry"]
const external_highcharts_src_js_default_RendererRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].RendererRegistry;
var external_highcharts_src_js_default_RendererRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_RendererRegistry_namespaceObject);
;// ./code/es-modules/Series/Flags/FlagsSymbols.js
/* *
 *
 *  Imports
 *
 * */

/* *
 *
 *  Composition
 *
 * */
var FlagsSymbols;
(function (FlagsSymbols) {
    /* *
     *
     *  Constants
     *
     * */
    const modifiedMembers = [];
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * @private
     */
    function compose(SVGRendererClass) {
        if (modifiedMembers.indexOf(SVGRendererClass) === -1) {
            modifiedMembers.push(SVGRendererClass);
            const symbols = SVGRendererClass.prototype.symbols;
            symbols.flag = flag;
            createPinSymbol(symbols, 'circle');
            createPinSymbol(symbols, 'square');
        }
        const RendererClass = external_highcharts_src_js_default_RendererRegistry_default().getRendererType();
        // The symbol callbacks are generated on the SVGRenderer object in all
        // browsers.
        if (modifiedMembers.indexOf(RendererClass)) {
            modifiedMembers.push(RendererClass);
        }
    }
    FlagsSymbols.compose = compose;
    /**
     * Create the flag icon with anchor.
     * @private
     */
    function flag(x, y, w, h, options) {
        const anchorX = (options && options.anchorX) || x, anchorY = (options && options.anchorY) || y;
        // To do: unwanted any cast because symbols.circle has wrong type, it
        // actually returns an SVGPathArray
        const path = this.circle(anchorX - 1, anchorY - 1, 2, 2);
        path.push(['M', anchorX, anchorY], ['L', x, y + h], ['L', x, y], ['L', x + w, y], ['L', x + w, y + h], ['L', x, y + h], ['Z']);
        return path;
    }
    /**
     * Create the circlepin and squarepin icons with anchor.
     * @private
     */
    function createPinSymbol(symbols, shape) {
        symbols[(shape + 'pin')] = function (x, y, w, h, options) {
            const anchorX = options && options.anchorX, anchorY = options && options.anchorY;
            let path;
            // For single-letter flags, make sure circular flags are not taller
            // than their width
            if (shape === 'circle' && h > w) {
                x -= Math.round((h - w) / 2);
                w = h;
            }
            path = (symbols[shape])(x, y, w, h, options);
            if (anchorX && anchorY) {
                /**
                 * If the label is below the anchor, draw the connecting line
                 * from the top edge of the label, otherwise start drawing from
                 * the bottom edge
                 */
                let labelX = anchorX;
                if (shape === 'circle') {
                    labelX = x + w / 2;
                }
                else {
                    const startSeg = path[0];
                    const endSeg = path[1];
                    if (startSeg[0] === 'M' && endSeg[0] === 'L') {
                        labelX = (startSeg[1] + endSeg[1]) / 2;
                    }
                }
                const labelY = (y > anchorY) ? y : y + h;
                path.push([
                    'M',
                    labelX,
                    labelY
                ], [
                    'L',
                    anchorX,
                    anchorY
                ]);
                path = path.concat(symbols.circle(anchorX - 1, anchorY - 1, 2, 2));
            }
            return path;
        };
    }
})(FlagsSymbols || (FlagsSymbols = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsSymbols = (FlagsSymbols);

;// external ["../highcharts.src.js","default","Series","types","column"]
const external_highcharts_src_js_default_Series_types_column_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series.types.column;
var external_highcharts_src_js_default_Series_types_column_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_types_column_namespaceObject);
;// ./code/es-modules/Series/OnSeriesComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { composed: OnSeriesComposition_composed } = (external_highcharts_src_js_default_default());
const { prototype: columnProto } = (external_highcharts_src_js_default_Series_types_column_default());

const { prototype: seriesProto } = (external_highcharts_src_js_default_Series_default());

const { defined: OnSeriesComposition_defined, pushUnique: OnSeriesComposition_pushUnique, stableSort } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var OnSeriesComposition;
(function (OnSeriesComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    function compose(SeriesClass) {
        if (OnSeriesComposition_pushUnique(OnSeriesComposition_composed, 'OnSeries')) {
            const seriesProto = SeriesClass.prototype;
            seriesProto.getPlotBox = getPlotBox;
            seriesProto.translate = translate;
        }
        return SeriesClass;
    }
    OnSeriesComposition.compose = compose;
    /**
     * Override getPlotBox. If the onSeries option is valid, return the plot box
     * of the onSeries, otherwise proceed as usual.
     *
     * @private
     */
    function getPlotBox(name) {
        return seriesProto.getPlotBox.call((this.options.onSeries &&
            this.chart.get(this.options.onSeries)) || this, name);
    }
    OnSeriesComposition.getPlotBox = getPlotBox;
    /**
     * Extend the translate method by placing the point on the related series
     *
     * @private
     */
    function translate() {
        columnProto.translate.apply(this);
        const series = this, options = series.options, chart = series.chart, points = series.points, optionsOnSeries = options.onSeries, onSeries = (optionsOnSeries &&
            chart.get(optionsOnSeries)), step = onSeries && onSeries.options.step, onData = (onSeries && onSeries.points), inverted = chart.inverted, xAxis = series.xAxis, yAxis = series.yAxis;
        let cursor = points.length - 1, point, lastPoint, onKey = options.onKey || 'y', i = onData && onData.length, xOffset = 0, leftPoint, lastX, rightPoint, currentDataGrouping, distanceRatio;
        // Relate to a master series
        if (onSeries && onSeries.visible && i) {
            xOffset = (onSeries.pointXOffset || 0) + (onSeries.barW || 0) / 2;
            currentDataGrouping = onSeries.currentDataGrouping;
            lastX = (onData[i - 1].x +
                (currentDataGrouping ? currentDataGrouping.totalRange : 0)); // #2374
            // sort the data points
            stableSort(points, (a, b) => (a.x - b.x));
            onKey = 'plot' + onKey[0].toUpperCase() + onKey.substr(1);
            while (i-- && points[cursor]) {
                leftPoint = onData[i];
                point = points[cursor];
                point.y = leftPoint.y;
                if (leftPoint.x <= point.x &&
                    typeof leftPoint[onKey] !== 'undefined') {
                    if (point.x <= lastX) { // #803
                        point.plotY = leftPoint[onKey];
                        // Interpolate between points, #666
                        if (leftPoint.x < point.x &&
                            !step) {
                            rightPoint = onData[i + 1];
                            if (rightPoint &&
                                typeof rightPoint[onKey] !== 'undefined') {
                                // If the series is spline, calculate Y of the
                                // point on the bezier line. #19264
                                if (OnSeriesComposition_defined(point.plotX) &&
                                    onSeries.is('spline')) {
                                    leftPoint = leftPoint;
                                    rightPoint = rightPoint;
                                    const p0 = [
                                        leftPoint.plotX || 0,
                                        leftPoint.plotY || 0
                                    ], p3 = [
                                        rightPoint.plotX || 0,
                                        rightPoint.plotY || 0
                                    ], p1 = (leftPoint.controlPoints?.high ||
                                        p0), p2 = (rightPoint.controlPoints?.low ||
                                        p3), pixelThreshold = 0.25, maxIterations = 100, calculateCoord = (t, key) => (
                                    // The parametric formula for the
                                    // cubic Bezier curve.
                                    Math.pow(1 - t, 3) * p0[key] +
                                        3 * (1 - t) * (1 - t) * t *
                                            p1[key] + 3 * (1 - t) * t * t *
                                        p2[key] + t * t * t * p3[key]);
                                    let tMin = 0, tMax = 1, t;
                                    // Find `t` of the parametric function of
                                    // the bezier curve for the given `plotX`.
                                    for (let i = 0; i < maxIterations; i++) {
                                        const tMid = (tMin + tMax) / 2;
                                        const xMid = calculateCoord(tMid, 0);
                                        if (xMid === null) {
                                            break;
                                        }
                                        if (Math.abs(xMid - point.plotX) < pixelThreshold) {
                                            t = tMid;
                                            break;
                                        }
                                        if (xMid < point.plotX) {
                                            tMin = tMid;
                                        }
                                        else {
                                            tMax = tMid;
                                        }
                                    }
                                    if (OnSeriesComposition_defined(t)) {
                                        point.plotY =
                                            calculateCoord(t, 1);
                                        point.y =
                                            yAxis.toValue(point.plotY, true);
                                    }
                                }
                                else {
                                    // The distance ratio, between 0 and 1
                                    distanceRatio =
                                        (point.x - leftPoint.x) /
                                            (rightPoint.x - leftPoint.x);
                                    point.plotY +=
                                        distanceRatio *
                                            // The plotY distance
                                            (rightPoint[onKey] - leftPoint[onKey]);
                                    point.y +=
                                        distanceRatio *
                                            (rightPoint.y - leftPoint.y);
                                }
                            }
                        }
                    }
                    cursor--;
                    i++; // Check again for points in the same x position
                    if (cursor < 0) {
                        break;
                    }
                }
            }
        }
        // Add plotY position and handle stacking
        points.forEach((point, i) => {
            let stackIndex;
            point.plotX += xOffset; // #2049
            // Undefined plotY means the point is either on axis, outside series
            // range or hidden series. If the series is outside the range of the
            // x axis it should fall through with an undefined plotY, but then
            // we must remove the shapeArgs (#847). For inverted charts, we need
            // to calculate position anyway, because series.invertGroups is not
            // defined
            if (typeof point.plotY === 'undefined' || inverted) {
                if (point.plotX >= 0 &&
                    point.plotX <= xAxis.len) {
                    // We're inside xAxis range
                    if (inverted) {
                        point.plotY = xAxis.translate(point.x, 0, 1, 0, 1);
                        point.plotX = OnSeriesComposition_defined(point.y) ?
                            yAxis.translate(point.y, 0, 0, 0, 1) :
                            0;
                    }
                    else {
                        point.plotY = (xAxis.opposite ? 0 : series.yAxis.len) +
                            xAxis.offset; // For the windbarb demo
                    }
                }
                else {
                    point.shapeArgs = {}; // 847
                }
            }
            // If multiple flags appear at the same x, order them into a stack
            lastPoint = points[i - 1];
            if (lastPoint && lastPoint.plotX === point.plotX) {
                if (typeof lastPoint.stackIndex === 'undefined') {
                    lastPoint.stackIndex = 0;
                }
                stackIndex = lastPoint.stackIndex + 1;
            }
            point.stackIndex = stackIndex; // #3639
        });
        this.onSeries = onSeries;
    }
    OnSeriesComposition.translate = translate;
})(OnSeriesComposition || (OnSeriesComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Series_OnSeriesComposition = (OnSeriesComposition);

;// external ["../highcharts.src.js","default","SVGElement"]
const external_highcharts_src_js_default_SVGElement_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SVGElement;
var external_highcharts_src_js_default_SVGElement_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGElement_namespaceObject);
;// ./code/es-modules/Series/Flags/FlagsSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { noop } = (external_highcharts_src_js_default_default());


const { distribute } = (external_highcharts_src_js_default_default());

const { series: Series, seriesTypes: { column: FlagsSeries_ColumnSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());


const { addEvent: FlagsSeries_addEvent, defined: FlagsSeries_defined, extend: FlagsSeries_extend, isNumber: FlagsSeries_isNumber, merge: FlagsSeries_merge, objectEach: FlagsSeries_objectEach, wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Classes
 *
 * */
/**
 * The Flags series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.flags
 *
 * @augments Highcharts.Series
 */
class FlagsSeries extends FlagsSeries_ColumnSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Disable animation, but keep clipping (#8546).
     * @private
     */
    animate(init) {
        if (init) {
            this.setClip();
        }
    }
    /**
     * Draw the markers.
     * @private
     */
    drawPoints() {
        const series = this, points = series.points, chart = series.chart, renderer = chart.renderer, inverted = chart.inverted, options = series.options, optionsY = options.y, yAxis = series.yAxis, boxesMap = {}, boxes = [], borderRadius = FlagsSeries_isNumber(options.borderRadius) ?
            options.borderRadius : 0;
        let plotX, plotY, shape, i, point, graphic, stackIndex, anchorY, attribs, outsideRight, centered;
        i = points.length;
        while (i--) {
            point = points[i];
            outsideRight =
                (inverted ? point.plotY : point.plotX) >
                    series.xAxis.len;
            plotX = point.plotX;
            stackIndex = point.stackIndex;
            shape = point.options.shape || options.shape;
            plotY = point.plotY;
            if (typeof plotY !== 'undefined') {
                plotY = point.plotY + optionsY -
                    (typeof stackIndex !== 'undefined' &&
                        (stackIndex * options.stackDistance));
            }
            // Skip connectors for higher level stacked points
            point.anchorX = stackIndex ? void 0 : point.plotX;
            anchorY = stackIndex ? void 0 : point.plotY;
            centered = shape !== 'flag';
            graphic = point.graphic;
            // Only draw the point if y is defined and the flag is within
            // the visible area
            if (typeof plotY !== 'undefined' &&
                plotX >= 0 &&
                !outsideRight) {
                // #15384
                if (graphic && point.hasNewShapeType()) {
                    graphic = graphic.destroy();
                }
                // Create the flag
                if (!graphic) {
                    graphic = point.graphic = renderer.label('', 0, void 0, shape, void 0, void 0, options.useHTML)
                        .addClass(point.getClassName())
                        .add(series.markerGroup);
                    // Add reference to the point for tracker (#6303)
                    if (point.graphic.div) {
                        point.graphic.div.point = point;
                    }
                    graphic.isNew = true;
                }
                graphic.attr({
                    align: centered ? 'center' : 'left',
                    width: options.width,
                    height: options.height,
                    'text-align': options.textAlign,
                    r: borderRadius
                });
                if (!chart.styledMode) {
                    graphic
                        .attr(series.pointAttribs(point))
                        .css(FlagsSeries_merge(options.style, point.style))
                        .shadow(options.shadow);
                }
                if (plotX > 0) { // #3119
                    plotX -= graphic.strokeWidth() % 2; // #4285
                }
                // Plant the flag
                attribs = {
                    y: plotY,
                    anchorY: anchorY
                };
                if (options.allowOverlapX) {
                    attribs.x = plotX;
                    attribs.anchorX = point.anchorX;
                }
                graphic.attr({
                    // Allow empty string as a flag title (#20549)
                    text: point.options.title ?? options.title ?? 'A'
                })[graphic.isNew ? 'attr' : 'animate'](attribs);
                // Rig for the distribute function
                if (!options.allowOverlapX) {
                    if (!boxesMap[point.plotX]) {
                        boxesMap[point.plotX] = {
                            align: centered ? 0.5 : 0,
                            size: graphic.width || 0,
                            target: plotX,
                            anchorX: plotX
                        };
                    }
                    else {
                        boxesMap[point.plotX].size = Math.max(boxesMap[point.plotX].size, graphic.width || 0);
                    }
                }
                // Set the tooltip anchor position
                point.tooltipPos = [
                    plotX,
                    plotY + yAxis.pos - chart.plotTop
                ]; // #6327
            }
            else if (graphic) {
                point.graphic = graphic.destroy();
            }
        }
        // Handle X-dimension overlapping
        if (!options.allowOverlapX) {
            let maxDistance = 100;
            FlagsSeries_objectEach(boxesMap, function (box) {
                box.plotX = box.anchorX;
                boxes.push(box);
                maxDistance = Math.max(box.size, maxDistance);
            });
            // If necessary (for overlapping or long labels)  distribute it
            // depending on the label width or a hardcoded value, #16041.
            distribute(boxes, inverted ? yAxis.len : this.xAxis.len, maxDistance);
            for (const point of points) {
                const plotX = point.plotX, graphic = point.graphic, box = graphic && boxesMap[plotX];
                if (box && graphic) {
                    // Hide flag when its box position is not specified
                    // (#8573, #9299)
                    if (!FlagsSeries_defined(box.pos)) {
                        graphic.hide().isNew = true;
                    }
                    else {
                        graphic[graphic.isNew ? 'attr' : 'animate']({
                            x: box.pos + (box.align || 0) * box.size,
                            anchorX: point.anchorX
                        }).show().isNew = false;
                    }
                }
            }
        }
        // Can be a mix of SVG and HTML and we need events for both (#6303)
        if (options.useHTML && series.markerGroup) {
            wrap(series.markerGroup, 'on', function (proceed) {
                return external_highcharts_src_js_default_SVGElement_default().prototype.on.apply(
                // For HTML
                // eslint-disable-next-line no-invalid-this
                proceed.apply(this, [].slice.call(arguments, 1)), 
                // And for SVG
                [].slice.call(arguments, 1));
            });
        }
    }
    /**
     * Extend the column trackers with listeners to expand and contract
     * stacks.
     * @private
     */
    drawTracker() {
        const series = this, points = series.points;
        super.drawTracker();
        /* *
        * Bring each stacked flag up on mouse over, this allows readability
        * of vertically stacked elements as well as tight points on the x
        * axis. #1924.
        */
        for (const point of points) {
            const graphic = point.graphic;
            if (graphic) {
                if (point.unbindMouseOver) {
                    point.unbindMouseOver();
                }
                point.unbindMouseOver = FlagsSeries_addEvent(graphic.element, 'mouseover', function () {
                    // Raise this point
                    if (point.stackIndex > 0 &&
                        !point.raised) {
                        point._y = graphic.y;
                        graphic.attr({
                            y: point._y - 8
                        });
                        point.raised = true;
                    }
                    // Revert other raised points
                    for (const otherPoint of points) {
                        if (otherPoint !== point &&
                            otherPoint.raised &&
                            otherPoint.graphic) {
                            otherPoint.graphic.attr({
                                y: otherPoint._y
                            });
                            otherPoint.raised = false;
                        }
                    }
                });
            }
        }
    }
    /**
     * Get presentational attributes
     * @private
     */
    pointAttribs(point, state) {
        const options = this.options, color = (point && point.color) || this.color;
        let lineColor = options.lineColor, lineWidth = (point && point.lineWidth), fill = (point && point.fillColor) || options.fillColor;
        if (state) {
            fill = options.states[state].fillColor;
            lineColor = options.states[state].lineColor;
            lineWidth = options.states[state].lineWidth;
        }
        return {
            fill: fill || color,
            stroke: lineColor || color,
            'stroke-width': lineWidth || options.lineWidth || 0
        };
    }
    /**
     * @private
     */
    setClip() {
        Series.prototype.setClip.apply(this, arguments);
        if (this.options.clip !== false &&
            this.sharedClipKey &&
            this.markerGroup) {
            this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey]);
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
FlagsSeries.compose = Flags_FlagsSymbols.compose;
FlagsSeries.defaultOptions = FlagsSeries_merge(FlagsSeries_ColumnSeries.defaultOptions, Flags_FlagsSeriesDefaults);
Series_OnSeriesComposition.compose(FlagsSeries);
FlagsSeries_extend(FlagsSeries.prototype, {
    allowDG: false,
    forceCrop: true,
    invertible: false, // Flags series group should not be invertible (#14063).
    noSharedTooltip: true,
    pointClass: Flags_FlagsPoint,
    sorted: false,
    takeOrdinalPosition: false, // #1074
    trackerGroups: ['markerGroup'],
    buildKDTree: noop,
    /**
     * Inherit the initialization from base Series.
     * @private
     */
    init: Series.prototype.init
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('flags', FlagsSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsSeries = (FlagsSeries);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"circlepin"|"flag"|"squarepin"} Highcharts.FlagsShapeValue
 */
''; // Detach doclets above

;// external ["../highcharts.src.js","default","StackItem"]
const external_highcharts_src_js_default_StackItem_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].StackItem;
var external_highcharts_src_js_default_StackItem_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_StackItem_namespaceObject);
;// ./code/es-modules/Core/Axis/BrokenAxis.js
/* *
 *
 *  (c) 2009-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { addEvent: BrokenAxis_addEvent, find: BrokenAxis_find, fireEvent: BrokenAxis_fireEvent, isArray: BrokenAxis_isArray, isNumber: BrokenAxis_isNumber, pick: BrokenAxis_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/**
 * Axis with support of broken data rows.
 * @private
 */
var BrokenAxis;
(function (BrokenAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds support for broken axes.
     * @private
     */
    function compose(AxisClass, SeriesClass) {
        if (!AxisClass.keepProps.includes('brokenAxis')) {
            AxisClass.keepProps.push('brokenAxis');
            BrokenAxis_addEvent(AxisClass, 'init', onAxisInit);
            BrokenAxis_addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            BrokenAxis_addEvent(AxisClass, 'afterSetTickPositions', onAxisAfterSetTickPositions);
            BrokenAxis_addEvent(AxisClass, 'afterSetOptions', onAxisAfterSetOptions);
            const seriesProto = SeriesClass.prototype;
            seriesProto.drawBreaks = seriesDrawBreaks;
            seriesProto.gappedPath = seriesGappedPath;
            BrokenAxis_addEvent(SeriesClass, 'afterGeneratePoints', onSeriesAfterGeneratePoints);
            BrokenAxis_addEvent(SeriesClass, 'afterRender', onSeriesAfterRender);
        }
        return AxisClass;
    }
    BrokenAxis.compose = compose;
    /**
     * @private
     */
    function onAxisAfterInit() {
        if (typeof this.brokenAxis !== 'undefined') {
            this.brokenAxis.setBreaks(this.options.breaks, false);
        }
    }
    /**
     * Force Axis to be not-ordinal when breaks are defined.
     * @private
     */
    function onAxisAfterSetOptions() {
        const axis = this;
        // Too early for axis.brokenAxis?.hasBreaks.
        if (Object.keys(axis.options.breaks?.[0] || {}).length) {
            axis.options.ordinal = false;
        }
    }
    /**
     * @private
     */
    function onAxisAfterSetTickPositions() {
        const axis = this, brokenAxis = axis.brokenAxis;
        if (brokenAxis?.hasBreaks) {
            const tickPositions = axis.tickPositions, info = axis.tickPositions.info, newPositions = [];
            for (let i = 0; i < tickPositions.length; i++) {
                if (!brokenAxis.isInAnyBreak(tickPositions[i])) {
                    newPositions.push(tickPositions[i]);
                }
            }
            axis.tickPositions = newPositions;
            axis.tickPositions.info = info;
        }
    }
    /**
     * @private
     */
    function onAxisInit() {
        const axis = this;
        if (!axis.brokenAxis) {
            axis.brokenAxis = new Additions(axis);
        }
    }
    /**
     * @private
     */
    function onSeriesAfterGeneratePoints() {
        const { isDirty, options: { connectNulls }, points, xAxis, yAxis } = this;
        // Set, or reset visibility of the points. Axis.setBreaks marks
        // the series as isDirty
        if (isDirty) {
            let i = points.length;
            while (i--) {
                const point = points[i];
                // Respect nulls inside the break (#4275)
                const nullGap = point.y === null && connectNulls === false;
                const isPointInBreak = (!nullGap && (xAxis?.brokenAxis?.isInAnyBreak(point.x, true) ||
                    yAxis?.brokenAxis?.isInAnyBreak(point.y, true)));
                // Set point.visible if in any break.
                // If not in break, reset visible to original value.
                point.visible = isPointInBreak ?
                    false :
                    point.options.visible !== false;
            }
        }
    }
    /**
     * @private
     */
    function onSeriesAfterRender() {
        this.drawBreaks(this.xAxis, ['x']);
        this.drawBreaks(this.yAxis, BrokenAxis_pick(this.pointArrayMap, ['y']));
    }
    /**
     * @private
     */
    function seriesDrawBreaks(axis, keys) {
        const series = this, points = series.points;
        let breaks, threshold, y;
        if (axis?.brokenAxis?.hasBreaks) {
            const brokenAxis = axis.brokenAxis;
            keys.forEach(function (key) {
                breaks = brokenAxis?.breakArray || [];
                threshold = axis.isXAxis ?
                    axis.min :
                    BrokenAxis_pick(series.options.threshold, axis.min);
                points.forEach(function (point) {
                    y = point['stack' + key.toUpperCase()] ??
                        point[key];
                    breaks.forEach(function (brk) {
                        if (BrokenAxis_isNumber(threshold) && BrokenAxis_isNumber(y)) {
                            let eventName = '';
                            if ((threshold < brk.from && y > brk.to) ||
                                (threshold > brk.from && y < brk.from)) {
                                eventName = 'pointBreak';
                            }
                            else if ((threshold < brk.from &&
                                y > brk.from &&
                                y < brk.to) || (threshold > brk.from &&
                                y > brk.to &&
                                y < brk.from)) {
                                eventName = 'pointInBreak';
                            }
                            if (eventName) {
                                BrokenAxis_fireEvent(axis, eventName, { point, brk });
                            }
                        }
                    });
                });
            });
        }
    }
    /**
     * Extend getGraphPath by identifying gaps in the data so that we
     * can draw a gap in the line or area. This was moved from ordinal
     * axis module to broken axis module as of #5045.
     *
     * @private
     * @function Highcharts.Series#gappedPath
     *
     * @return {Highcharts.SVGPathArray}
     * Gapped path
     */
    function seriesGappedPath() {
        const currentDataGrouping = this.currentDataGrouping, groupingSize = currentDataGrouping?.gapSize, points = this.points.slice(), yAxis = this.yAxis;
        let gapSize = this.options.gapSize, i = points.length - 1, stack;
        /**
         * Defines when to display a gap in the graph, together with the
         * [gapUnit](plotOptions.series.gapUnit) option.
         *
         * In case when `dataGrouping` is enabled, points can be grouped
         * into a larger time span. This can make the grouped points to
         * have a greater distance than the absolute value of `gapSize`
         * property, which will result in disappearing graph completely.
         * To prevent this situation the mentioned distance between
         * grouped points is used instead of previously defined
         * `gapSize`.
         *
         * In practice, this option is most often used to visualize gaps
         * in time series. In a stock chart, intraday data is available
         * for daytime hours, while gaps will appear in nights and
         * weekends.
         *
         * @see [gapUnit](plotOptions.series.gapUnit)
         * @see [xAxis.breaks](#xAxis.breaks)
         *
         * @sample {highstock} stock/plotoptions/series-gapsize/
         * Setting the gap size to 2 introduces gaps for weekends in
         * daily datasets.
         *
         * @type      {number}
         * @default   0
         * @product   highstock
         * @requires  modules/broken-axis
         * @apioption plotOptions.series.gapSize
         */
        /**
         * Together with [gapSize](plotOptions.series.gapSize), this
         * option defines where to draw gaps in the graph.
         *
         * When the `gapUnit` is `"relative"` (default), a gap size of 5
         * means that if the distance between two points is greater than
         * 5 times that of the two closest points, the graph will be
         * broken.
         *
         * When the `gapUnit` is `"value"`, the gap is based on absolute
         * axis values, which on a datetime axis is milliseconds. This
         * also applies to the navigator series that inherits gap
         * options from the base series.
         *
         * @see [gapSize](plotOptions.series.gapSize)
         *
         * @type       {string}
         * @default    relative
         * @since      5.0.13
         * @product    highstock
         * @validvalue ["relative", "value"]
         * @requires   modules/broken-axis
         * @apioption  plotOptions.series.gapUnit
         */
        if (gapSize && i > 0) { // #5008
            // Gap unit is relative
            if (this.options.gapUnit !== 'value') {
                gapSize *= this.basePointRange;
            }
            // Setting a new gapSize in case dataGrouping is enabled
            // (#7686)
            if (groupingSize &&
                groupingSize > gapSize &&
                // Except when DG is forced (e.g. from other series)
                // and has lower granularity than actual points (#11351)
                groupingSize >= this.basePointRange) {
                gapSize = groupingSize;
            }
            // Extension for ordinal breaks
            let current, next;
            while (i--) {
                // Reassign next if it is not visible
                if (!(next && next.visible !== false)) {
                    next = points[i + 1];
                }
                current = points[i];
                // Skip iteration if one of the points is not visible
                if (next.visible === false || current.visible === false) {
                    continue;
                }
                if (next.x - current.x > gapSize) {
                    const xRange = (current.x + next.x) / 2;
                    points.splice(// Insert after this one
                    i + 1, 0, {
                        isNull: true,
                        x: xRange
                    });
                    // For stacked chart generate empty stack items, #6546
                    if (yAxis.stacking && this.options.stacking) {
                        stack = yAxis.stacking.stacks[this.stackKey][xRange] = new (external_highcharts_src_js_default_StackItem_default())(yAxis, yAxis.options.stackLabels, false, xRange, this.stack ?? '');
                        stack.total = 0;
                    }
                }
                // Assign current to next for the upcoming iteration
                next = current;
            }
        }
        // Call base method
        return this.getGraphPath(points);
    }
    /* *
     *
     *  Class
     *
     * */
    /**
     * Provides support for broken axes.
     * @private
     * @class
     */
    class Additions {
        /* *
         *
         *  Static Functions
         *
         * */
        /**
         * @private
         */
        static isInBreak(brk, val) {
            const repeat = brk.repeat || Infinity, from = brk.from, length = brk.to - brk.from, test = (val >= from ?
                (val - from) % repeat :
                repeat - ((from - val) % repeat));
            let ret;
            if (!brk.inclusive) {
                ret = test < length && test !== 0;
            }
            else {
                ret = test <= length;
            }
            return ret;
        }
        /**
         * @private
         */
        static lin2Val(val) {
            const axis = this, threshold = axis.min || 0, brokenAxis = axis.brokenAxis, breakArray = brokenAxis?.breakArray;
            if (!breakArray?.length || !BrokenAxis_isNumber(val)) {
                return val;
            }
            let nval = val;
            // Axis min is the anchor point. Above it, break gaps impact the
            // result differently than below.
            if (val > threshold) {
                for (const brk of breakArray) {
                    if (brk.from > nval) {
                        // Skip all breaks after the nval.
                        break;
                    }
                    else if (brk.to <= nval && brk.to > threshold) {
                        nval += brk.len;
                    }
                    else if (Additions.isInBreak(brk, nval)) {
                        nval += brk.len;
                    }
                }
            }
            else if (val < threshold) {
                for (const brk of breakArray) {
                    if (brk.from > threshold) {
                        // Skip all breaks above the threshold.
                        break;
                    }
                    else if (brk.from >= nval && brk.from < threshold) {
                        nval -= brk.len;
                    }
                    else if (Additions.isInBreak(brk, nval)) {
                        nval -= brk.len;
                    }
                }
            }
            return nval;
        }
        /**
         * @private
         */
        static val2Lin(val) {
            const axis = this, threshold = axis.min || 0, brokenAxis = axis.brokenAxis, breakArray = brokenAxis?.breakArray;
            if (!breakArray?.length || !BrokenAxis_isNumber(val)) {
                return val;
            }
            let nval = val;
            // Axis min is the anchor point. Above it, break gaps impact the
            // result differently than below.
            if (val > threshold) {
                for (const brk of breakArray) {
                    if (brk.to <= val && brk.to > threshold) {
                        nval -= brk.len;
                    }
                    else if (brk.from > val) {
                        // Skip all breaks after the val.
                        break;
                    }
                    else if (Additions.isInBreak(brk, val)) {
                        nval -= (val - brk.from);
                        break;
                    }
                }
            }
            else if (val < threshold) {
                for (const brk of breakArray) {
                    if (brk.from >= val && brk.from < threshold) {
                        nval += brk.len;
                    }
                    else if (brk.from > threshold) {
                        // Skip all breaks before the threshold.
                        break;
                    }
                    else if (Additions.isInBreak(brk, val)) {
                        nval += (brk.to - val);
                        break;
                    }
                }
            }
            return nval;
        }
        /* *
         *
         *  Constructors
         *
         * */
        constructor(axis) {
            this.axis = axis;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Returns the first break found where the x is larger then break.from
         * and smaller then break.to.
         *
         * @param {number} x
         * The number which should be within a break.
         *
         * @param {Array<Highcharts.XAxisBreaksOptions>} breaks
         * The array of breaks to search within.
         *
         * @return {Highcharts.XAxisBreaksOptions|undefined}
         * Returns the first break found that matches, returns false if no break
         * is found.
         */
        findBreakAt(x, breaks) {
            return BrokenAxis_find(breaks, function (b) {
                return b.from < x && x < b.to;
            });
        }
        /**
         * @private
         */
        isInAnyBreak(val, testKeep) {
            const brokenAxis = this, axis = brokenAxis.axis, breaks = axis.options.breaks || [];
            let i = breaks.length, inbrk, keep, ret;
            if (i && BrokenAxis_isNumber(val)) {
                while (i--) {
                    if (Additions.isInBreak(breaks[i], val)) {
                        inbrk = true;
                        if (!keep) {
                            keep = BrokenAxis_pick(breaks[i].showPoints, !axis.isXAxis);
                        }
                    }
                }
                if (inbrk && testKeep) {
                    ret = inbrk && !keep;
                }
                else {
                    ret = inbrk;
                }
            }
            return ret;
        }
        /**
         * Dynamically set or unset breaks in an axis. This function in lighter
         * than using Axis.update, and it also preserves animation.
         *
         * @private
         * @function Highcharts.Axis#setBreaks
         *
         * @param {Array<Highcharts.XAxisBreaksOptions>} [breaks]
         * The breaks to add. When `undefined` it removes existing breaks.
         *
         * @param {boolean} [redraw=true]
         * Whether to redraw the chart immediately.
         */
        setBreaks(breaks, redraw) {
            const brokenAxis = this, axis = brokenAxis.axis, time = axis.chart.time, hasBreaks = BrokenAxis_isArray(breaks) &&
                !!Object.keys(breaks?.[0] || {}).length;
            axis.isDirty = (brokenAxis.hasBreaks ?? false) !== hasBreaks;
            brokenAxis.hasBreaks = hasBreaks;
            // Compile string dates
            breaks?.forEach((brk) => {
                brk.from = time.parse(brk.from) || 0;
                brk.to = time.parse(brk.to) || 0;
            });
            if (breaks !== axis.options.breaks) {
                axis.options.breaks = axis.userOptions.breaks = breaks;
            }
            axis.forceRedraw = true; // Force recalculation in setScale
            // Recalculate series related to the axis.
            axis.series.forEach(function (series) {
                series.isDirty = true;
            });
            if (!hasBreaks && axis.val2lin === Additions.val2Lin) {
                // Revert to prototype functions
                delete axis.val2lin;
                delete axis.lin2val;
            }
            if (hasBreaks) {
                axis.userOptions.ordinal = false;
                axis.lin2val = Additions.lin2Val;
                axis.val2lin = Additions.val2Lin;
                axis.setExtremes = function (newMin, newMax, redraw, animation, eventArguments) {
                    // If trying to set extremes inside a break, extend min to
                    // after, and max to before the break ( #3857 )
                    // but not for gantt (#13898);
                    if (brokenAxis.hasBreaks && !axis.treeGrid?.tree) {
                        const breaks = (this.brokenAxis.breakArray || []);
                        let axisBreak;
                        while ((axisBreak = brokenAxis.findBreakAt(newMin, breaks))) {
                            newMin = axisBreak.to;
                        }
                        while ((axisBreak = brokenAxis.findBreakAt(newMax, breaks))) {
                            newMax = axisBreak.from;
                        }
                        // If both min and max is within the same break.
                        if (newMax < newMin) {
                            newMax = newMin;
                        }
                    }
                    axis.constructor.prototype.setExtremes.call(this, newMin, newMax, redraw, animation, eventArguments);
                };
                axis.setAxisTranslation = function () {
                    axis.constructor.prototype.setAxisTranslation.call(this);
                    brokenAxis.unitLength = void 0;
                    if (brokenAxis.hasBreaks) {
                        const breaks = axis.options.breaks || [], breakArrayTemp = [], breakArray = [], pointRangePadding = axis.pointRangePadding ?? 0;
                        let length = 0, inBrk, repeat, min = axis.userMin ?? axis.min, max = axis.userMax ?? axis.max, dataMin = axis.dataMin ?? min, dataMax = axis.dataMax ?? max, start, i;
                        if (BrokenAxis_isNumber(axis.threshold)) {
                            dataMin = Math.min(dataMin ?? axis.threshold, axis.threshold);
                            dataMax = Math.max(dataMax ?? axis.threshold, axis.threshold);
                        }
                        // Min & max check (#4247) but not for gantt (#13898)
                        if (!axis.treeGrid?.tree) {
                            breaks.forEach(function (brk) {
                                repeat = brk.repeat || Infinity;
                                if (BrokenAxis_isNumber(min) && BrokenAxis_isNumber(max)) {
                                    if (Additions.isInBreak(brk, min)) {
                                        min += ((brk.to % repeat) -
                                            (min % repeat));
                                    }
                                    if (Additions.isInBreak(brk, max)) {
                                        max -= ((max % repeat) -
                                            (brk.from % repeat));
                                    }
                                }
                            });
                        }
                        // Construct an array holding all breaks in the axis
                        // for the current data range.
                        if (BrokenAxis_isNumber(dataMin) && BrokenAxis_isNumber(dataMax)) {
                            breaks.forEach(function (brk) {
                                start = brk.from;
                                repeat = brk.repeat || Infinity;
                                while (start - repeat > dataMin) {
                                    start -= repeat;
                                }
                                while (start < dataMin) {
                                    start += repeat;
                                }
                                for (i = start; i < dataMax; i += repeat) {
                                    breakArrayTemp.push({
                                        value: i,
                                        move: 'in'
                                    });
                                    breakArrayTemp.push({
                                        value: i + brk.to - brk.from,
                                        move: 'out',
                                        size: brk.breakSize
                                    });
                                }
                            });
                        }
                        breakArrayTemp.sort(function (a, b) {
                            return ((a.value === b.value) ?
                                ((a.move === 'in' ? 0 : 1) -
                                    (b.move === 'in' ? 0 : 1)) :
                                a.value - b.value);
                        });
                        // Simplify the breaks
                        inBrk = 0;
                        start = dataMin;
                        breakArrayTemp.forEach((brk) => {
                            inBrk += (brk.move === 'in' ? 1 : -1);
                            if (inBrk === 1 && brk.move === 'in') {
                                start = brk.value;
                            }
                            if (inBrk === 0 && BrokenAxis_isNumber(start)) {
                                breakArray.push({
                                    from: start,
                                    to: brk.value,
                                    len: brk.value - start - (brk.size || 0)
                                });
                                if (BrokenAxis_isNumber(min) && BrokenAxis_isNumber(max) &&
                                    start < max && brk.value > min) {
                                    // Sum break gaps in the visible range
                                    length += (brk.value -
                                        start -
                                        (brk.size || 0));
                                }
                            }
                        });
                        brokenAxis.breakArray = breakArray;
                        // Used with staticScale, and below the actual axis
                        // length, when breaks are subtracted.
                        if (BrokenAxis_isNumber(min) &&
                            BrokenAxis_isNumber(max) &&
                            BrokenAxis_isNumber(axis.min)) {
                            brokenAxis.unitLength = max - min - length +
                                pointRangePadding;
                            BrokenAxis_fireEvent(axis, 'afterBreaks');
                            if (axis.staticScale) {
                                axis.transA = axis.staticScale;
                            }
                            else if (brokenAxis.unitLength) {
                                axis.transA *=
                                    (max - axis.min + pointRangePadding) /
                                        brokenAxis.unitLength;
                            }
                            if (pointRangePadding) {
                                axis.minPixelPadding =
                                    axis.transA * (axis.minPointOffset || 0);
                            }
                            axis.min = min;
                            axis.max = max;
                        }
                    }
                };
            }
            if (BrokenAxis_pick(redraw, true)) {
                axis.chart.redraw();
            }
        }
    }
    BrokenAxis.Additions = Additions;
})(BrokenAxis || (BrokenAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_BrokenAxis = (BrokenAxis);

;// ./code/es-modules/masters/modules/broken-axis.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-07)
 * @module highcharts/modules/broken-axis
 * @requires highcharts
 *
 * (c) 2009-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */



const G = (external_highcharts_src_js_default_default());
G.BrokenAxis = G.BrokenAxis || Axis_BrokenAxis;
G.BrokenAxis.compose(G.Axis, G.Series);
/* harmony default export */ const broken_axis_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// external ["./datagrouping.src.js","default","dataGrouping","approximationDefaults"]
const external_datagrouping_src_js_default_dataGrouping_approximationDefaults_namespaceObject = __WEBPACK_EXTERNAL_MODULE__datagrouping_src_js_902e97be__["default"].dataGrouping.approximationDefaults;
var external_datagrouping_src_js_default_dataGrouping_approximationDefaults_default = /*#__PURE__*/__webpack_require__.n(external_datagrouping_src_js_default_dataGrouping_approximationDefaults_namespaceObject);
;// external ["./datagrouping.src.js","default","dataGrouping","approximations"]
const external_datagrouping_src_js_default_dataGrouping_approximations_namespaceObject = __WEBPACK_EXTERNAL_MODULE__datagrouping_src_js_902e97be__["default"].dataGrouping.approximations;
var external_datagrouping_src_js_default_dataGrouping_approximations_default = /*#__PURE__*/__webpack_require__.n(external_datagrouping_src_js_default_dataGrouping_approximations_namespaceObject);
;// ./code/es-modules/Extensions/DataGrouping/DataGroupingDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Constants
 *
 * */
/**
 * Common options
 * @private
 */
const common = {
    /// enabled: null, // (true for stock charts, false for basic),
    // forced: undefined,
    groupPixelWidth: 2,
    // The first one is the point or start value, the second is the start
    // value if we're dealing with range, the third one is the end value if
    // dealing with a range
    dateTimeLabelFormats: {
        millisecond: [
            '%[AebHMSL]',
            '%[AebHMSL]',
            '-%[HMSL]'
        ],
        second: [
            '%[AebHMS]',
            '%[AebHMS]',
            '-%[HMS]'
        ],
        minute: [
            '%[AebHM]',
            '%[AebHM]',
            '-%[HM]'
        ],
        hour: [
            '%[AebHM]',
            '%[AebHM]',
            '-%[HM]'
        ],
        day: [
            '%[AebY]',
            '%[Aeb]',
            '-%[AebY]'
        ],
        week: [
            '%v %[AebY]',
            '%[Aeb]',
            '-%[AebY]'
        ],
        month: [
            '%[BY]',
            '%[B]',
            '-%[BY]'
        ],
        year: [
            '%Y',
            '%Y',
            '-%Y'
        ]
    }
    /// smoothed = false, // enable this for navigator series only
};
/**
 * Extends common options
 * @private
 */
const seriesSpecific = {
    line: {},
    spline: {},
    area: {},
    areaspline: {},
    arearange: {},
    column: {
        groupPixelWidth: 10
    },
    columnrange: {
        groupPixelWidth: 10
    },
    candlestick: {
        groupPixelWidth: 10
    },
    ohlc: {
        groupPixelWidth: 5
    },
    hlc: {
        groupPixelWidth: 5
        // Move to HeikinAshiSeries.ts after refactoring data grouping.
    },
    heikinashi: {
        groupPixelWidth: 10
    }
};
/**
 * Units are defined in a separate array to allow complete overriding in
 * case of a user option.
 * @private
 */
const units = [
    [
        'millisecond', // Unit name
        [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // Allowed multiples
    ], [
        'second',
        [1, 2, 5, 10, 15, 30]
    ], [
        'minute',
        [1, 2, 5, 10, 15, 30]
    ], [
        'hour',
        [1, 2, 3, 4, 6, 8, 12]
    ], [
        'day',
        [1]
    ], [
        'week',
        [1]
    ], [
        'month',
        [1, 3, 6]
    ], [
        'year',
        null
    ]
];
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingDefaults = {
    common,
    seriesSpecific,
    units
};
/* harmony default export */ const DataGrouping_DataGroupingDefaults = (DataGroupingDefaults);

;// ./code/es-modules/Extensions/DataGrouping/DataGroupingAxisComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { addEvent: DataGroupingAxisComposition_addEvent, extend: DataGroupingAxisComposition_extend, merge: DataGroupingAxisComposition_merge, pick: DataGroupingAxisComposition_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Variables
 *
 * */
let AxisConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Check the groupPixelWidth and apply the grouping if needed.
 * Fired only after processing the data.
 *
 * @product highstock
 *
 * @function Highcharts.Axis#applyGrouping
 */
function applyGrouping(e) {
    const axis = this, series = axis.series;
    // Reset the groupPixelWidth for all series, #17141.
    series.forEach(function (series) {
        series.groupPixelWidth = void 0; // #2110
    });
    series.forEach(function (series) {
        series.groupPixelWidth = (axis.getGroupPixelWidth &&
            axis.getGroupPixelWidth());
        if (series.groupPixelWidth) {
            series.hasProcessed = true; // #2692
        }
        // Fire independing on series.groupPixelWidth to always set a proper
        // dataGrouping state, (#16238)
        series.applyGrouping(!!e.hasExtremesChanged);
    });
}
/**
 * @private
 */
function DataGroupingAxisComposition_compose(AxisClass) {
    AxisConstructor = AxisClass;
    const axisProto = AxisClass.prototype;
    if (!axisProto.applyGrouping) {
        DataGroupingAxisComposition_addEvent(AxisClass, 'afterSetScale', onAfterSetScale);
        // When all series are processed, calculate the group pixel width and
        // then if this value is different than zero apply groupings.
        DataGroupingAxisComposition_addEvent(AxisClass, 'postProcessData', applyGrouping);
        DataGroupingAxisComposition_extend(axisProto, {
            applyGrouping,
            getGroupPixelWidth,
            setDataGrouping
        });
    }
}
/**
 * Get the data grouping pixel width based on the greatest defined individual
 * width of the axis' series, and if whether one of the axes need grouping.
 * @private
 */
function getGroupPixelWidth() {
    const series = this.series;
    let i = series.length, groupPixelWidth = 0, doGrouping = false, dataLength, dgOptions;
    // If one of the series needs grouping, apply it to all (#1634)
    while (i--) {
        dgOptions = series[i].options.dataGrouping;
        if (dgOptions) { // #2692
            // If multiple series are compared on the same x axis, give them the
            // same group pixel width (#334)
            groupPixelWidth = Math.max(groupPixelWidth, 
            // Fallback to commonOptions (#9693)
            DataGroupingAxisComposition_pick(dgOptions.groupPixelWidth, DataGrouping_DataGroupingDefaults.common.groupPixelWidth));
            dataLength = (series[i].dataTable.getModified() ||
                series[i].dataTable).rowCount;
            // Execute grouping if the amount of points is greater than the
            // limit defined in groupPixelWidth
            if (series[i].groupPixelWidth ||
                (dataLength >
                    (this.chart.plotSizeX / groupPixelWidth)) ||
                (dataLength && dgOptions.forced)) {
                doGrouping = true;
            }
        }
    }
    return doGrouping ? groupPixelWidth : 0;
}
/**
 * When resetting the scale reset the hasProcessed flag to avoid taking
 * previous data grouping of neighbour series into account when determining
 * group pixel width (#2692).
 * @private
 */
function onAfterSetScale() {
    this.series.forEach(function (series) {
        series.hasProcessed = false;
    });
}
/**
 * Highcharts Stock only. Force data grouping on all the axis' series.
 *
 * @product highstock
 *
 * @function Highcharts.Axis#setDataGrouping
 *
 * @param {boolean|Highcharts.DataGroupingOptionsObject} [dataGrouping]
 *        A `dataGrouping` configuration. Use `false` to disable data grouping
 *        dynamically.
 *
 * @param {boolean} [redraw=true]
 *        Whether to redraw the chart or wait for a later call to
 *        {@link Chart#redraw}.
 */
function setDataGrouping(dataGrouping, redraw) {
    const axis = this;
    let i;
    redraw = DataGroupingAxisComposition_pick(redraw, true);
    if (!dataGrouping) {
        dataGrouping = {
            forced: false,
            units: null
        };
    }
    // Axis is instantiated, update all series
    if (this instanceof AxisConstructor) {
        i = this.series.length;
        while (i--) {
            this.series[i].update({
                dataGrouping: dataGrouping
            }, false);
        }
        // Axis not yet instantiated, alter series options
    }
    else {
        this.chart.options.series.forEach(function (seriesOptions) {
            // Merging dataGrouping options with already defined options #16759
            seriesOptions.dataGrouping = typeof dataGrouping === 'boolean' ?
                dataGrouping :
                DataGroupingAxisComposition_merge(dataGrouping, seriesOptions.dataGrouping);
        });
    }
    // Clear ordinal slope, so we won't accidentally use the old one (#7827)
    if (axis.ordinal) {
        axis.ordinal.slope = void 0;
    }
    if (redraw) {
        this.chart.redraw();
    }
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingAxisComposition = {
    compose: DataGroupingAxisComposition_compose
};
/* harmony default export */ const DataGrouping_DataGroupingAxisComposition = (DataGroupingAxisComposition);

;// ./code/es-modules/Core/Axis/DateTimeAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: DateTimeAxis_addEvent, getMagnitude, normalizeTickInterval, timeUnits: DateTimeAxis_timeUnits } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/* eslint-disable valid-jsdoc */
var DateTimeAxis;
(function (DateTimeAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends axis class with date and time support.
     * @private
     */
    function compose(AxisClass) {
        if (!AxisClass.keepProps.includes('dateTime')) {
            AxisClass.keepProps.push('dateTime');
            const axisProto = AxisClass.prototype;
            axisProto.getTimeTicks = getTimeTicks;
            DateTimeAxis_addEvent(AxisClass, 'afterSetType', onAfterSetType);
        }
        return AxisClass;
    }
    DateTimeAxis.compose = compose;
    /**
     * Set the tick positions to a time unit that makes sense, for example
     * on the first of each month or on every Monday. Return an array with
     * the time positions. Used in datetime axes as well as for grouping
     * data on a datetime axis.
     *
     * @private
     * @function Highcharts.Axis#getTimeTicks
     * @param {Highcharts.TimeNormalizeObject} normalizedInterval
     * The interval in axis values (ms) and the count.
     * @param {number} min
     * The minimum in axis values.
     * @param {number} max
     * The maximum in axis values.
     */
    function getTimeTicks() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    }
    /**
     * @private
     */
    function onAfterSetType() {
        if (this.type !== 'datetime') {
            this.dateTime = void 0;
            return;
        }
        if (!this.dateTime) {
            this.dateTime = new Additions(this);
        }
    }
    /* *
     *
     *  Classes
     *
     * */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        constructor(axis) {
            this.axis = axis;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Get a normalized tick interval for dates. Returns a configuration
         * object with unit range (interval), count and name. Used to prepare
         * data for `getTimeTicks`. Previously this logic was part of
         * getTimeTicks, but as `getTimeTicks` now runs of segments in stock
         * charts, the normalizing logic was extracted in order to prevent it
         * for running over again for each segment having the same interval.
         * #662, #697.
         * @private
         */
        normalizeTimeTickInterval(tickInterval, unitsOption) {
            const units = (unitsOption || [[
                    // Unit name
                    'millisecond',
                    // Allowed multiples
                    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
                ], [
                    'second',
                    [1, 2, 5, 10, 15, 30]
                ], [
                    'minute',
                    [1, 2, 5, 10, 15, 30]
                ], [
                    'hour',
                    [1, 2, 3, 4, 6, 8, 12]
                ], [
                    'day',
                    [1, 2]
                ], [
                    'week',
                    [1, 2]
                ], [
                    'month',
                    [1, 2, 3, 4, 6]
                ], [
                    'year',
                    null
                ]]);
            let unit = units[units.length - 1], // Default unit is years
            interval = DateTimeAxis_timeUnits[unit[0]], multiples = unit[1], i;
            // Loop through the units to find the one that best fits the
            // tickInterval
            for (i = 0; i < units.length; i++) {
                unit = units[i];
                interval = DateTimeAxis_timeUnits[unit[0]];
                multiples = unit[1];
                if (units[i + 1]) {
                    // `lessThan` is in the middle between the highest multiple
                    // and the next unit.
                    const lessThan = (interval *
                        multiples[multiples.length - 1] +
                        DateTimeAxis_timeUnits[units[i + 1][0]]) / 2;
                    // Break and keep the current unit
                    if (tickInterval <= lessThan) {
                        break;
                    }
                }
            }
            // Prevent 2.5 years intervals, though 25, 250 etc. are allowed
            if (interval === DateTimeAxis_timeUnits.year && tickInterval < 5 * interval) {
                multiples = [1, 2, 5];
            }
            // Get the count
            const count = normalizeTickInterval(tickInterval / interval, multiples, unit[0] === 'year' ? // #1913, #2360
                Math.max(getMagnitude(tickInterval / interval), 1) :
                1);
            return {
                unitRange: interval,
                count: count,
                unitName: unit[0]
            };
        }
        /**
         * Get the best date format for a specific X value based on the closest
         * point range on the axis.
         *
         * @private
         */
        getXDateFormat(x, dateTimeLabelFormats) {
            const { axis } = this, time = axis.chart.time;
            return axis.closestPointRange ?
                time.getDateFormat(axis.closestPointRange, x, axis.options.startOfWeek, dateTimeLabelFormats) ||
                    // #2546, 2581
                    time.resolveDTLFormat(dateTimeLabelFormats.year).main :
                time.resolveDTLFormat(dateTimeLabelFormats.day).main;
        }
    }
    DateTimeAxis.Additions = Additions;
})(DateTimeAxis || (DateTimeAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_DateTimeAxis = (DateTimeAxis);

;// ./code/es-modules/Extensions/DataGrouping/DataGroupingSeriesComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */







const { series: { prototype: DataGroupingSeriesComposition_seriesProto } } = (external_highcharts_src_js_default_SeriesRegistry_default());

const { addEvent: DataGroupingSeriesComposition_addEvent, defined: DataGroupingSeriesComposition_defined, error: DataGroupingSeriesComposition_error, extend: DataGroupingSeriesComposition_extend, isNumber: DataGroupingSeriesComposition_isNumber, merge: DataGroupingSeriesComposition_merge, pick: DataGroupingSeriesComposition_pick, splat: DataGroupingSeriesComposition_splat } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
const baseGeneratePoints = DataGroupingSeriesComposition_seriesProto.generatePoints;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function adjustExtremes(xAxis, groupedXData) {
    // Make sure the X axis extends to show the first group (#2533)
    // But only for visible series (#5493, #6393)
    if (DataGroupingSeriesComposition_defined(groupedXData[0]) &&
        DataGroupingSeriesComposition_isNumber(xAxis.min) &&
        DataGroupingSeriesComposition_isNumber(xAxis.dataMin) &&
        groupedXData[0] < xAxis.min) {
        if ((!DataGroupingSeriesComposition_defined(xAxis.options.min) &&
            xAxis.min <= xAxis.dataMin) ||
            xAxis.min === xAxis.dataMin) {
            xAxis.min = Math.min(groupedXData[0], xAxis.min);
        }
        xAxis.dataMin = Math.min(groupedXData[0], xAxis.dataMin);
    }
    // When the last anchor set, change the extremes that
    // the last point is visible (#12455).
    if (DataGroupingSeriesComposition_defined(groupedXData[groupedXData.length - 1]) &&
        DataGroupingSeriesComposition_isNumber(xAxis.max) &&
        DataGroupingSeriesComposition_isNumber(xAxis.dataMax) &&
        groupedXData[groupedXData.length - 1] > xAxis.max) {
        if ((!DataGroupingSeriesComposition_defined(xAxis.options.max) &&
            DataGroupingSeriesComposition_isNumber(xAxis.dataMax) &&
            xAxis.max >= xAxis.dataMax) || xAxis.max === xAxis.dataMax) {
            xAxis.max = Math.max(groupedXData[groupedXData.length - 1], xAxis.max);
        }
        xAxis.dataMax = Math.max(groupedXData[groupedXData.length - 1], xAxis.dataMax);
    }
}
/**
 * @private
 */
function anchorPoints(series, groupedXData, xMax) {
    const options = series.options, dataGroupingOptions = options.dataGrouping, totalRange = (series.currentDataGrouping && series.currentDataGrouping.gapSize), xData = series.getColumn('x');
    if (!(dataGroupingOptions &&
        xData.length &&
        totalRange &&
        series.groupMap)) {
        return;
    }
    const groupedDataLastIndex = groupedXData.length - 1, anchor = dataGroupingOptions.anchor, firstAnchor = dataGroupingOptions.firstAnchor, lastAnchor = dataGroupingOptions.lastAnchor;
    let anchorIndexIterator = groupedXData.length - 1, anchorFirstIndex = 0;
    // Change the first point position, but only when it is
    // the first point in the data set not in the current zoom.
    if (firstAnchor && xData[0] >= groupedXData[0]) {
        anchorFirstIndex++;
        const groupStart = series.groupMap[0].start, groupLength = series.groupMap[0].length;
        let firstGroupEnd;
        if (DataGroupingSeriesComposition_isNumber(groupStart) && DataGroupingSeriesComposition_isNumber(groupLength)) {
            firstGroupEnd = groupStart + (groupLength - 1);
        }
        groupedXData[0] = {
            start: groupedXData[0],
            middle: groupedXData[0] + 0.5 * totalRange,
            end: groupedXData[0] + totalRange,
            firstPoint: xData[0],
            lastPoint: firstGroupEnd && xData[firstGroupEnd]
        }[firstAnchor];
    }
    // Change the last point position but only when it is
    // the last point in the data set not in the current zoom,
    // or if it is not the 1st point simultaneously.
    if (groupedDataLastIndex > 0 &&
        lastAnchor &&
        totalRange &&
        groupedXData[groupedDataLastIndex] >= xMax - totalRange) {
        anchorIndexIterator--;
        const lastGroupStart = series.groupMap[series.groupMap.length - 1].start;
        groupedXData[groupedDataLastIndex] = {
            start: groupedXData[groupedDataLastIndex],
            middle: groupedXData[groupedDataLastIndex] + 0.5 * totalRange,
            end: groupedXData[groupedDataLastIndex] + totalRange,
            firstPoint: lastGroupStart && xData[lastGroupStart],
            lastPoint: xData[xData.length - 1]
        }[lastAnchor];
    }
    if (anchor && anchor !== 'start') {
        const shiftInterval = (totalRange *
            { middle: 0.5, end: 1 }[anchor]);
        // Anchor the rest of the points apart from the ones, that were
        // previously moved.
        while (anchorIndexIterator >= anchorFirstIndex) {
            groupedXData[anchorIndexIterator] += shiftInterval;
            anchorIndexIterator--;
        }
    }
}
/**
 * For the processed data, calculate the grouped data if needed.
 *
 * @private
 * @function Highcharts.Series#applyGrouping
 */
function DataGroupingSeriesComposition_applyGrouping(hasExtremesChanged) {
    const series = this, chart = series.chart, options = series.options, dataGroupingOptions = options.dataGrouping, groupingEnabled = series.allowDG !== false && dataGroupingOptions &&
        DataGroupingSeriesComposition_pick(dataGroupingOptions.enabled, chart.options.isStock), reserveSpace = series.reserveSpace(), lastDataGrouping = this.currentDataGrouping;
    let currentDataGrouping, croppedData, revertRequireSorting = false;
    // Data needs to be sorted for dataGrouping
    if (groupingEnabled && !series.requireSorting) {
        series.requireSorting = revertRequireSorting = true;
    }
    // Skip if skipDataGrouping method returns false or if grouping is disabled
    // (in that order).
    const skip = skipDataGrouping(series, hasExtremesChanged) === false || !groupingEnabled;
    // Revert original requireSorting value if changed
    if (revertRequireSorting) {
        series.requireSorting = false;
    }
    if (skip) {
        return;
    }
    series.destroyGroupedData();
    const table = dataGroupingOptions.groupAll ?
        series.dataTable :
        series.dataTable.getModified() || series.dataTable, processedXData = series.getColumn('x', !dataGroupingOptions.groupAll), xData = processedXData, plotSizeX = chart.plotSizeX, xAxis = series.xAxis, extremes = xAxis.getExtremes(), ordinal = xAxis.options.ordinal, groupPixelWidth = series.groupPixelWidth;
    let i, hasGroupedData;
    // Execute grouping if the amount of points is greater than the limit
    // defined in groupPixelWidth
    if (groupPixelWidth &&
        xData &&
        table.rowCount &&
        plotSizeX &&
        DataGroupingSeriesComposition_isNumber(extremes.min)) {
        hasGroupedData = true;
        // Force recreation of point instances in series.translate, #5699
        series.isDirty = true;
        series.points = null; // #6709
        const xMin = extremes.min, xMax = extremes.max, groupIntervalFactor = (ordinal &&
            xAxis.ordinal &&
            xAxis.ordinal.getGroupIntervalFactor(xMin, xMax, series)) || 1, interval = (groupPixelWidth * (xMax - xMin) / plotSizeX) *
            groupIntervalFactor, groupPositions = xAxis.getTimeTicks(Axis_DateTimeAxis.Additions.prototype.normalizeTimeTickInterval(interval, dataGroupingOptions.units ||
            DataGrouping_DataGroupingDefaults.units), 
        // Processed data may extend beyond axis (#4907)
        Math.min(xMin, xData[0]), Math.max(xMax, xData[xData.length - 1]), xAxis.options.startOfWeek, processedXData, series.closestPointRange), groupedData = DataGroupingSeriesComposition_seriesProto.groupData.apply(series, [
            table,
            groupPositions,
            dataGroupingOptions.approximation
        ]);
        let modified = groupedData.modified, groupedXData = modified.getColumn('x', true), gapSize = 0;
        // The smoothed option is deprecated, instead, there is a fallback
        // to the new anchoring mechanism. #12455.
        if (dataGroupingOptions?.smoothed &&
            modified.rowCount) {
            dataGroupingOptions.firstAnchor = 'firstPoint';
            dataGroupingOptions.anchor = 'middle';
            dataGroupingOptions.lastAnchor = 'lastPoint';
            DataGroupingSeriesComposition_error(32, false, chart, {
                'dataGrouping.smoothed': 'use dataGrouping.anchor'
            });
        }
        // Record what data grouping values were used
        for (i = 1; i < groupPositions.length; i++) {
            // The grouped gapSize needs to be the largest distance between
            // the group to capture varying group sizes like months or DST
            // crossing (#10000). Also check that the gap is not at the
            // start of a segment.
            if (!groupPositions.info.segmentStarts ||
                groupPositions.info.segmentStarts.indexOf(i) === -1) {
                gapSize = Math.max(groupPositions[i] - groupPositions[i - 1], gapSize);
            }
        }
        currentDataGrouping = groupPositions.info;
        currentDataGrouping.gapSize = gapSize;
        series.closestPointRange = groupPositions.info.totalRange;
        series.groupMap = groupedData.groupMap;
        series.currentDataGrouping = currentDataGrouping;
        anchorPoints(series, groupedXData || [], xMax);
        if (reserveSpace && groupedXData) {
            adjustExtremes(xAxis, groupedXData);
        }
        // We calculated all group positions but we should render only the ones
        // within the visible range
        if (dataGroupingOptions.groupAll) {
            // Keep the reference to all grouped points for further calculation,
            // used in Heikin-Ashi and hollow candlestick series.
            series.allGroupedTable = modified;
            croppedData = series.cropData(modified, xAxis.min || 0, xAxis.max || 0);
            modified = croppedData.modified;
            groupedXData = modified.getColumn('x');
            series.cropStart = croppedData.start; // #15005
        }
        // Set the modified table
        series.dataTable.modified = modified;
    }
    else {
        series.groupMap = void 0;
        series.currentDataGrouping = void 0;
    }
    series.hasGroupedData = hasGroupedData;
    series.preventGraphAnimation =
        (lastDataGrouping && lastDataGrouping.totalRange) !==
            (currentDataGrouping && currentDataGrouping.totalRange);
}
/**
 * @private
 */
function DataGroupingSeriesComposition_compose(SeriesClass) {
    const seriesProto = SeriesClass.prototype;
    if (!seriesProto.applyGrouping) {
        const PointClass = SeriesClass.prototype.pointClass;
        // Override point prototype to throw a warning when trying to update
        // grouped points.
        DataGroupingSeriesComposition_addEvent(PointClass, 'update', function () {
            if (this.dataGroup) {
                DataGroupingSeriesComposition_error(24, false, this.series.chart);
                return false;
            }
        });
        DataGroupingSeriesComposition_addEvent(SeriesClass, 'afterSetOptions', onAfterSetOptions);
        DataGroupingSeriesComposition_addEvent(SeriesClass, 'destroy', destroyGroupedData);
        DataGroupingSeriesComposition_extend(seriesProto, {
            applyGrouping: DataGroupingSeriesComposition_applyGrouping,
            destroyGroupedData,
            generatePoints,
            getDGApproximation,
            groupData
        });
    }
}
/**
 * Destroy the grouped data points. #622, #740
 * @private
 */
function destroyGroupedData() {
    // Clear previous groups
    if (this.groupedData) {
        this.groupedData.forEach(function (point, i) {
            if (point) {
                this.groupedData[i] = point.destroy ?
                    point.destroy() : null;
            }
        }, this);
        // Clears all:
        // - `this.groupedData`
        // - `this.points`
        // - `preserve` object in series.update()
        this.groupedData.length = 0;
        delete this.allGroupedTable;
    }
}
/**
 * Override the generatePoints method by adding a reference to grouped data
 * @private
 */
function generatePoints() {
    baseGeneratePoints.apply(this);
    // Record grouped data in order to let it be destroyed the next time
    // processData runs
    this.destroyGroupedData(); // #622
    this.groupedData = this.hasGroupedData ? this.points : null;
}
/**
 * Set default approximations to the prototypes if present. Properties are
 * inherited down. Can be overridden for individual series types.
 * @private
 */
function getDGApproximation() {
    if (this.is('arearange')) {
        return 'range';
    }
    if (this.is('ohlc')) {
        return 'ohlc';
    }
    if (this.is('hlc')) {
        return 'hlc';
    }
    if (
    // #18974, default approximation for cumulative
    // should be `sum` when `dataGrouping` is enabled
    this.is('column') ||
        this.options.cumulative) {
        return 'sum';
    }
    return 'average';
}
/**
 * Highcharts Stock only. Takes parallel arrays of x and y data and groups the
 * data into intervals defined by groupPositions, a collection of starting x
 * values for each group.
 *
 * @product highstock
 *
 * @function Highcharts.Series#groupData
 * @param {Highcharts.DataTable} table
 *        The series data table.
 * @param {Array<number>} groupPositions
 *        Group positions.
 * @param {string|Function} [approximation]
 *        Approximation to use.
 * @return {Highcharts.DataGroupingResultObject}
 *         Mapped groups.
 */
function groupData(table, groupPositions, approximation) {
    const xData = table.getColumn('x', true) || [], yData = table.getColumn('y', true), series = this, data = series.data, dataOptions = series.options && series.options.data, groupedXData = [], modified = new Data_DataTableCore(), groupMap = [], dataLength = table.rowCount, 
    // When grouping the fake extended axis for panning, we don't need to
    // consider y
    handleYData = !!yData, values = [], pointArrayMap = series.pointArrayMap, pointArrayMapLength = pointArrayMap && pointArrayMap.length, extendedPointArrayMap = ['x'].concat(pointArrayMap || ['y']), 
    // Data columns to be applied to the modified data table at the end
    valueColumns = (pointArrayMap || ['y']).map(() => []), groupAll = (this.options.dataGrouping &&
        this.options.dataGrouping.groupAll);
    let pointX, pointY, groupedY, pos = 0, start = 0;
    const approximationFn = (typeof approximation === 'function' ?
        approximation :
        approximation && (external_datagrouping_src_js_default_dataGrouping_approximations_default())[approximation] ?
            (external_datagrouping_src_js_default_dataGrouping_approximations_default())[approximation] :
            (external_datagrouping_src_js_default_dataGrouping_approximations_default())[(series.getDGApproximation && series.getDGApproximation() ||
                'average')]);
    // Calculate values array size from pointArrayMap length
    if (pointArrayMapLength) {
        let len = pointArrayMap.length;
        while (len--) {
            values.push([]);
        }
    }
    else {
        values.push([]);
    }
    const valuesLen = pointArrayMapLength || 1;
    for (let i = 0; i <= dataLength; i++) {
        // Start with the first point within the X axis range (#2696)
        if (xData[i] < groupPositions[0]) {
            continue; // With next point
        }
        // When a new group is entered, summarize and initialize
        // the previous group
        while ((typeof groupPositions[pos + 1] !== 'undefined' &&
            xData[i] >= groupPositions[pos + 1]) ||
            i === dataLength) { // Get the last group
            // get group x and y
            pointX = groupPositions[pos];
            series.dataGroupInfo = {
                start: groupAll ? start : (series.cropStart + start),
                length: values[0].length,
                groupStart: pointX
            };
            groupedY = approximationFn.apply(series, values);
            // By default, let options of the first grouped point be passed over
            // to the grouped point. This allows preserving properties like
            // `name` and `color` or custom properties. Implementers can
            // override this from the approximation function, where they can
            // write custom options to `this.dataGroupInfo.options`.
            if (series.pointClass && !DataGroupingSeriesComposition_defined(series.dataGroupInfo.options)) {
                // Convert numbers and arrays into objects
                series.dataGroupInfo.options = DataGroupingSeriesComposition_merge(series.pointClass.prototype
                    .optionsToObject.call({ series: series }, series.options.data[series.cropStart + start]));
                // Make sure the raw data (x, y, open, high etc) is not copied
                // over and overwriting approximated data.
                extendedPointArrayMap.forEach(function (key) {
                    delete series.dataGroupInfo.options[key];
                });
            }
            // Push the grouped data
            if (typeof groupedY !== 'undefined') {
                groupedXData.push(pointX);
                // Push the grouped values to the parallel columns
                const groupedValuesArr = DataGroupingSeriesComposition_splat(groupedY);
                for (let j = 0; j < groupedValuesArr.length; j++) {
                    valueColumns[j].push(groupedValuesArr[j]);
                }
                groupMap.push(series.dataGroupInfo);
            }
            // Reset the aggregate arrays
            start = i;
            for (let j = 0; j < valuesLen; j++) {
                values[j].length = 0; // Faster than values[j] = []
                values[j].hasNulls = false;
            }
            // Advance on the group positions
            pos += 1;
            // Don't loop beyond the last group
            if (i === dataLength) {
                break;
            }
        }
        // Break out
        if (i === dataLength) {
            break;
        }
        // For each raw data point, push it to an array that contains all values
        // for this specific group
        if (pointArrayMap) {
            const index = groupAll ? i : series.cropStart + i, point = (data && data[index]) ||
                series.pointClass.prototype.applyOptions.apply({
                    series: series
                }, [dataOptions[index]]);
            let val;
            for (let j = 0; j < pointArrayMapLength; j++) {
                val = point[pointArrayMap[j]];
                if (DataGroupingSeriesComposition_isNumber(val)) {
                    values[j].push(val);
                }
                else if (val === null) {
                    values[j].hasNulls = true;
                }
            }
        }
        else {
            pointY = handleYData ? yData[i] : null;
            if (DataGroupingSeriesComposition_isNumber(pointY)) {
                values[0].push(pointY);
            }
            else if (pointY === null) {
                values[0].hasNulls = true;
            }
        }
    }
    const columns = {
        x: groupedXData
    };
    (pointArrayMap || ['y']).forEach((key, i) => {
        columns[key] = valueColumns[i];
    });
    modified.setColumns(columns);
    return {
        groupMap,
        modified
    };
}
/**
 * Handle default options for data grouping. This must be set at runtime because
 * some series types are defined after this.
 * @private
 */
function onAfterSetOptions(e) {
    const options = e.options, type = this.type, plotOptions = this.chart.options.plotOptions, 
    // External series, for example technical indicators should also inherit
    // commonOptions which are not available outside this module
    baseOptions = (this.useCommonDataGrouping &&
        DataGrouping_DataGroupingDefaults.common), seriesSpecific = DataGrouping_DataGroupingDefaults.seriesSpecific;
    let defaultOptions = (external_highcharts_src_js_default_default()).defaultOptions.plotOptions[type].dataGrouping;
    if (plotOptions && (seriesSpecific[type] || baseOptions)) { // #1284
        const rangeSelector = this.chart.rangeSelector;
        if (!defaultOptions) {
            defaultOptions = DataGroupingSeriesComposition_merge(DataGrouping_DataGroupingDefaults.common, seriesSpecific[type]);
        }
        options.dataGrouping = DataGroupingSeriesComposition_merge(baseOptions, defaultOptions, plotOptions.series && plotOptions.series.dataGrouping, // #1228
        // Set by the StockChart constructor:
        plotOptions[type].dataGrouping, this.userOptions.dataGrouping, !options.isInternal &&
            rangeSelector &&
            DataGroupingSeriesComposition_isNumber(rangeSelector.selected) &&
            rangeSelector.buttonOptions[rangeSelector.selected].dataGrouping);
    }
}
/**
 * @private
 */
function skipDataGrouping(series, force) {
    return !(series.isCartesian &&
        !series.isDirty &&
        !series.xAxis.isDirty &&
        !series.yAxis.isDirty &&
        !force);
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingSeriesComposition = {
    compose: DataGroupingSeriesComposition_compose,
    groupData
};
/* harmony default export */ const DataGrouping_DataGroupingSeriesComposition = (DataGroupingSeriesComposition);

;// ./code/es-modules/Extensions/DataGrouping/DataGrouping.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { format: DataGrouping_format } = (external_highcharts_src_js_default_Templating_default());

const { composed: DataGrouping_composed } = (external_highcharts_src_js_default_default());

const { addEvent: DataGrouping_addEvent, extend: DataGrouping_extend, isNumber: DataGrouping_isNumber, pick: DataGrouping_pick, pushUnique: DataGrouping_pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function DataGrouping_compose(AxisClass, SeriesClass, TooltipClass) {
    DataGrouping_DataGroupingAxisComposition.compose(AxisClass);
    DataGrouping_DataGroupingSeriesComposition.compose(SeriesClass);
    if (TooltipClass &&
        DataGrouping_pushUnique(DataGrouping_composed, 'DataGrouping')) {
        DataGrouping_addEvent(TooltipClass, 'headerFormatter', onTooltipHeaderFormatter);
    }
}
/**
 * Extend the original method, make the tooltip's header reflect the grouped
 * range.
 * @private
 */
function onTooltipHeaderFormatter(e) {
    const chart = this.chart, time = chart.time, point = e.point, series = point.series, options = series.options, tooltipOptions = series.tooltipOptions, dataGroupingOptions = options.dataGrouping, xAxis = series.xAxis;
    let xDateFormat = tooltipOptions.xDateFormat || '', xDateFormatEnd, currentDataGrouping, dateTimeLabelFormats, labelFormats, formattedKey, formatString = tooltipOptions[e.isFooter ? 'footerFormat' : 'headerFormat'];
    // Apply only to grouped series
    if (xAxis &&
        xAxis.options.type === 'datetime' &&
        dataGroupingOptions &&
        DataGrouping_isNumber(point.key)) {
        // Set variables
        currentDataGrouping = series.currentDataGrouping;
        dateTimeLabelFormats = dataGroupingOptions.dateTimeLabelFormats ||
            // Fallback to commonOptions (#9693)
            DataGrouping_DataGroupingDefaults.common.dateTimeLabelFormats;
        // If we have grouped data, use the grouping information to get the
        // right format
        if (currentDataGrouping) {
            labelFormats = dateTimeLabelFormats[currentDataGrouping.unitName];
            if (currentDataGrouping.count === 1) {
                xDateFormat = labelFormats[0];
            }
            else {
                xDateFormat = labelFormats[1];
                xDateFormatEnd = labelFormats[2];
            }
            // If not grouped, and we don't have set the xDateFormat option, get the
            // best fit, so if the least distance between points is one minute, show
            // it, but if the least distance is one day, skip hours and minutes etc.
        }
        else if (!xDateFormat && dateTimeLabelFormats && xAxis.dateTime) {
            xDateFormat = xAxis.dateTime.getXDateFormat(point.x, tooltipOptions.dateTimeLabelFormats);
        }
        const groupStart = DataGrouping_pick(series.groupMap?.[point.index].groupStart, point.key), groupEnd = groupStart + (currentDataGrouping?.totalRange || 0) - 1;
        formattedKey = time.dateFormat(xDateFormat, groupStart);
        if (xDateFormatEnd) {
            formattedKey += time.dateFormat(xDateFormatEnd, groupEnd);
        }
        // Replace default header style with class name
        if (series.chart.styledMode) {
            formatString = this.styledModeFormat(formatString);
        }
        // Return the replaced format
        e.text = DataGrouping_format(formatString, {
            point: DataGrouping_extend(point, { key: formattedKey }),
            series
        }, chart);
        e.preventDefault();
    }
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingComposition = {
    compose: DataGrouping_compose,
    groupData: DataGrouping_DataGroupingSeriesComposition.groupData
};
/* harmony default export */ const DataGrouping = (DataGroupingComposition);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"average"|"averages"|"open"|"high"|"low"|"close"|"sum"} Highcharts.DataGroupingApproximationValue
 */
/**
 * The position of the point inside the group.
 *
 * @typedef    {"start"|"middle"|"end"} Highcharts.DataGroupingAnchor
 */
/**
 * The position of the first or last point in the series inside the group.
 *
 * @typedef    {"start"|"middle"|"end"|"firstPoint"|"lastPoint"} Highcharts.DataGroupingAnchorExtremes
 */
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingInfoObject
 */ /**
* @name Highcharts.DataGroupingInfoObject#length
* @type {number}
*/ /**
* @name Highcharts.DataGroupingInfoObject#options
* @type {Highcharts.SeriesOptionsType|undefined}
*/ /**
* @name Highcharts.DataGroupingInfoObject#start
* @type {number}
*/
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingResultObject
 */ /**
* @name Highcharts.DataGroupingResultObject#groupedXData
* @type {Array<number>}
*/ /**
* @name Highcharts.DataGroupingResultObject#groupedYData
* @type {Array<(number|null|undefined)>|Array<Array<(number|null|undefined)>>}
*/ /**
* @name Highcharts.DataGroupingResultObject#groupMap
* @type {Array<DataGroupingInfoObject>}
*/
/**
 * Highcharts Stock only. If a point object is created by data
 * grouping, it doesn't reflect actual points in the raw
 * data. In this case, the `dataGroup` property holds
 * information that points back to the raw data.
 *
 * - `dataGroup.start` is the index of the first raw data
 *   point in the group.
 *
 * - `dataGroup.length` is the amount of points in the
 *   group.
 *
 * @sample stock/members/point-datagroup
 *         Click to inspect raw data points
 *
 * @product highstock
 *
 * @name Highcharts.Point#dataGroup
 * @type {Highcharts.DataGroupingInfoObject|undefined}
 */
(''); // Detach doclets above
/* *
 *
 *  API Options
 *
 * */
/**
 * Data grouping is the concept of sampling the data values into larger
 * blocks in order to ease readability and increase performance of the
 * JavaScript charts. Highcharts Stock by default applies data grouping when
 * the points become closer than a certain pixel value, determined by
 * the `groupPixelWidth` option.
 *
 * If data grouping is applied, the grouping information of grouped
 * points can be read from the [Point.dataGroup](
 * /class-reference/Highcharts.Point#dataGroup). If point options other than
 * the data itself are set, for example `name` or `color` or custom properties,
 * the grouping logic doesn't know how to group it. In this case the options of
 * the first point instance are copied over to the group point. This can be
 * altered through a custom `approximation` callback function.
 *
 * @declare   Highcharts.DataGroupingOptionsObject
 * @product   highstock
 * @requires  modules/stock
 * @apioption plotOptions.series.dataGrouping
 */
/**
 * Specifies how the points should be located on the X axis inside the group.
 * Points that are extremes can be set separately. Available options:
 *
 * - `start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * - `middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * - `end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-anchor
 *         Changing the point x-coordinate inside the group.
 *
 * @see [dataGrouping.firstAnchor](#plotOptions.series.dataGrouping.firstAnchor)
 * @see [dataGrouping.lastAnchor](#plotOptions.series.dataGrouping.lastAnchor)
 *
 * @type       {Highcharts.DataGroupingAnchor}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.anchor
 */
/**
 * The method of approximation inside a group. When for example 30 days
 * are grouped into one month, this determines what value should represent
 * the group. Possible values are "average", "averages", "open", "high",
 * "low", "close" and "sum". For OHLC and candlestick series the approximation
 * is "ohlc" by default, which finds the open, high, low and close values
 * within all the grouped data. For ranges, the approximation is "range",
 * which finds the low and high values. For multi-dimensional data,
 * like ranges and OHLC, "averages" will compute the average for each
 * dimension.
 *
 * Custom aggregate methods can be added by assigning a callback function
 * as the approximation. This function takes a numeric array as the
 * argument and should return a single numeric value or `null`. Note
 * that the numeric array will never contain null values, only true
 * numbers. Instead, if null values are present in the raw data, the
 * numeric array will have an `.hasNulls` property set to `true`. For
 * single-value data sets the data is available in the first argument
 * of the callback function. For OHLC data sets, all the open values
 * are in the first argument, all high values in the second etc.
 *
 * Since v4.2.7, grouping meta data is available in the approximation
 * callback from `this.dataGroupInfo`. It can be used to extract information
 * from the raw data.
 *
 * Defaults to `average` for line-type series, `sum` for columns, `range`
 * for range series, `hlc` for HLC, and `ohlc` for OHLC and candlestick.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-approximation
 *         Approximation callback with custom data
 * @sample {highstock} stock/plotoptions/series-datagrouping-simple-approximation
 *         Simple approximation demo
 *
 * @type       {Highcharts.DataGroupingApproximationValue|Function}
 * @apioption  plotOptions.series.dataGrouping.approximation
 */
/**
 * Datetime formats for the header of the tooltip in a stock chart.
 * The format can vary within a chart depending on the currently selected
 * time range and the current data grouping.
 *
 * The default formats are:
 * ```js
 * {
 *     millisecond: [
 *         '%A, %e %b, %H:%M:%S.%L', '%A, %e %b, %H:%M:%S.%L', '-%H:%M:%S.%L'
 *     ],
 *     second: ['%A, %e %b, %H:%M:%S', '%A, %e %b, %H:%M:%S', '-%H:%M:%S'],
 *     minute: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
 *     hour: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
 *     day: ['%A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
 *     week: ['%v %A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
 *     month: ['%B %Y', '%B', '-%B %Y'],
 *     year: ['%Y', '%Y', '-%Y']
 * }
 * ```
 *
 * For each of these array definitions, the first item is the format
 * used when the active time span is one unit. For instance, if the
 * current data applies to one week, the first item of the week array
 * is used. The second and third items are used when the active time
 * span is more than two units. For instance, if the current data applies
 * to two weeks, the second and third item of the week array are used,
 *  and applied to the start and end date of the time span.
 *
 * @type      {Object}
 * @apioption plotOptions.series.dataGrouping.dateTimeLabelFormats
 */
/**
 * Enable or disable data grouping.
 *
 * @type      {boolean}
 * @default   true
 * @apioption plotOptions.series.dataGrouping.enabled
 */
/**
 * Specifies how the first grouped point is positioned on the xAxis.
 * If firstAnchor and/or lastAnchor are defined, then those options take
 * precedence over anchor for the first and/or last grouped points.
 * Available options:
 *
 * -`start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * -`middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * -`end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * -`firstPoint` the first point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:13)
 *
 * -`lastPoint` the last point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-first-anchor
 *         Applying first and last anchor.
 *
 * @see [dataGrouping.anchor](#plotOptions.series.dataGrouping.anchor)
 *
 * @type       {Highcharts.DataGroupingAnchorExtremes}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.firstAnchor
 */
/**
 * When data grouping is forced, it runs no matter how small the intervals
 * are. This can be handy for example when the sum should be calculated
 * for values appearing at random times within each hour.
 *
 * @type      {boolean}
 * @default   false
 * @apioption plotOptions.series.dataGrouping.forced
 */
/**
 * The approximate pixel width of each group. If for example a series
 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
 * is performed. If however the series contains so many points that
 * the spacing is less than the groupPixelWidth, Highcharts will try
 * to group it into appropriate groups so that each is more or less
 * two pixels wide. If multiple series with different group pixel widths
 * are drawn on the same x axis, all series will take the greatest width.
 * For example, line series have 2px default group width, while column
 * series have 10px. If combined, both the line and the column will
 * have 10px by default.
 *
 * @type      {number}
 * @default   2
 * @apioption plotOptions.series.dataGrouping.groupPixelWidth
 */
/**
 * By default only points within the visible range are grouped. Enabling this
 * option will force data grouping to calculate all grouped points for a given
 * dataset. That option prevents for example a column series from calculating
 * a grouped point partially. The effect is similar to
 * [Series.getExtremesFromAll](#plotOptions.series.getExtremesFromAll) but does
 * not affect yAxis extremes.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-groupall/
 *         Two series with the same data but different groupAll setting
 *
 * @type      {boolean}
 * @default   false
 * @since     6.1.0
 * @apioption plotOptions.series.dataGrouping.groupAll
 */
/**
 * Specifies how the last grouped point is positioned on the xAxis.
 * If firstAnchor and/or lastAnchor are defined, then those options take
 * precedence over anchor for the first and/or last grouped points.
 * Available options:
 *
 * -`start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * -`middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * -`end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * -`firstPoint` the first point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:13)
 *
 * -`lastPoint` the last point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-first-anchor
 *         Applying first and last anchor.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-last-anchor
 *         Applying the last anchor in the chart with live data.
 *
 * @see [dataGrouping.anchor](#plotOptions.series.dataGrouping.anchor)
 *
 * @type       {Highcharts.DataGroupingAnchorExtremes}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.lastAnchor
 */
/**
 * Normally, a group is indexed by the start of that group, so for example
 * when 30 daily values are grouped into one month, that month's x value
 * will be the 1st of the month. This apparently shifts the data to
 * the left. When the smoothed option is true, this is compensated for.
 * The data is shifted to the middle of the group, and min and max
 * values are preserved. Internally, this is used in the Navigator series.
 *
 * @type      {boolean}
 * @default   false
 * @deprecated
 * @apioption plotOptions.series.dataGrouping.smoothed
 */
/**
 * An array determining what time intervals the data is allowed to be
 * grouped to. Each array item is an array where the first value is
 * the time unit and the second value another array of allowed multiples.
 *
 * Defaults to:
 * ```js
 * units: [[
 *     'millisecond', // unit name
 *     [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
 * ], [
 *     'second',
 *     [1, 2, 5, 10, 15, 30]
 * ], [
 *     'minute',
 *     [1, 2, 5, 10, 15, 30]
 * ], [
 *     'hour',
 *     [1, 2, 3, 4, 6, 8, 12]
 * ], [
 *     'day',
 *     [1]
 * ], [
 *     'week',
 *     [1]
 * ], [
 *     'month',
 *     [1, 3, 6]
 * ], [
 *     'year',
 *     null
 * ]]
 * ```
 *
 * @type      {Array<Array<string,(Array<number>|null)>>}
 * @apioption plotOptions.series.dataGrouping.units
 */
/**
 * The approximate pixel width of each group. If for example a series
 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
 * is performed. If however the series contains so many points that
 * the spacing is less than the groupPixelWidth, Highcharts will try
 * to group it into appropriate groups so that each is more or less
 * two pixels wide. Defaults to `10`.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-grouppixelwidth/
 *         Two series with the same data density but different groupPixelWidth
 *
 * @type      {number}
 * @default   10
 * @apioption plotOptions.column.dataGrouping.groupPixelWidth
 */
''; // Required by JSDoc parsing

;// ./code/es-modules/masters/modules/datagrouping.src.js
/**
 * @license Highstock JS v12.4.0-modified (2025-11-07)
 * @module highcharts/modules/datagrouping
 * @requires highcharts
 *
 * Data grouping module
 *
 * (c) 2010-2025 Torstein Hønsi
 *
 * License: www.highcharts.com/license
 */





const datagrouping_src_G = (external_highcharts_src_js_default_default());
datagrouping_src_G.dataGrouping = datagrouping_src_G.dataGrouping || {};
datagrouping_src_G.dataGrouping.approximationDefaults = (datagrouping_src_G.dataGrouping.approximationDefaults ||
    (external_datagrouping_src_js_default_dataGrouping_approximationDefaults_default()));
datagrouping_src_G.dataGrouping.approximations = (datagrouping_src_G.dataGrouping.approximations ||
    (external_datagrouping_src_js_default_dataGrouping_approximations_default()));
DataGrouping.compose(datagrouping_src_G.Axis, datagrouping_src_G.Series, datagrouping_src_G.Tooltip);
/* harmony default export */ const datagrouping_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/Extensions/MouseWheelZoom/MouseWheelZoom.js
/* *
 *
 *  (c) 2023 Torstein Honsi, Askel Eirik Johansson
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: MouseWheelZoom_addEvent, isObject: MouseWheelZoom_isObject, pick: MouseWheelZoom_pick, defined: MouseWheelZoom_defined, merge: MouseWheelZoom_merge } = (external_highcharts_src_js_default_default());

const { getAssignedAxis: MouseWheelZoom_getAssignedAxis } = NavigationBindingsUtilities;
/* *
 *
 *  Constants
 *
 * */
const composedClasses = [], MouseWheelZoom_defaultOptions = {
    enabled: true,
    sensitivity: 1.1,
    showResetButton: false
};
let wheelTimer;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
const optionsToObject = (options) => {
    if (!MouseWheelZoom_isObject(options)) {
        options = {
            enabled: options ?? true
        };
    }
    return MouseWheelZoom_merge(MouseWheelZoom_defaultOptions, options);
};
/**
 * @private
 */
const zoomBy = function (chart, howMuch, xAxis, yAxis, mouseX, mouseY, options) {
    const type = MouseWheelZoom_pick(options.type, chart.zooming.type, '');
    let axes = [];
    if (type === 'x') {
        axes = xAxis;
    }
    else if (type === 'y') {
        axes = yAxis;
    }
    else if (type === 'xy') {
        axes = chart.axes;
    }
    const hasZoomed = chart.transform({
        axes,
        // Create imaginary reference and target rectangles around the mouse
        // point that scales up or down with `howMuch`;
        to: {
            x: mouseX - 5,
            y: mouseY - 5,
            // Must use 10 to get passed the limit for too small reference.
            // Below this, the transform will default to a pan.
            width: 10,
            height: 10
        },
        from: {
            x: mouseX - 5 * howMuch,
            y: mouseY - 5 * howMuch,
            width: 10 * howMuch,
            height: 10 * howMuch
        },
        trigger: 'mousewheel',
        allowResetButton: options.showResetButton
    });
    if (hasZoomed) {
        if (MouseWheelZoom_defined(wheelTimer)) {
            clearTimeout(wheelTimer);
        }
        // Some time after the last mousewheel event, run drop. In case any of
        // the affected axes had `startOnTick` or `endOnTick`, they will be
        // re-adjusted now.
        wheelTimer = setTimeout(() => {
            chart.pointer?.drop();
        }, 400);
    }
    return hasZoomed;
};
/**
 * @private
 */
function onAfterGetContainer() {
    const wheelZoomOptions = optionsToObject(this.zooming.mouseWheel);
    if (wheelZoomOptions.enabled) {
        MouseWheelZoom_addEvent(this.container, 'wheel', (e) => {
            e = this.pointer?.normalize(e) || e;
            const { pointer } = this, allowZoom = pointer && !pointer.inClass(e.target, 'highcharts-no-mousewheel');
            // Firefox uses e.detail, WebKit and IE uses deltaX, deltaY, deltaZ.
            if (this.isInsidePlot(e.chartX - this.plotLeft, e.chartY - this.plotTop) && allowZoom) {
                const wheelSensitivity = wheelZoomOptions.sensitivity || 1.1, delta = e.detail || ((e.deltaY || 0) / 120), xAxisCoords = MouseWheelZoom_getAssignedAxis(pointer.getCoordinates(e).xAxis), yAxisCoords = MouseWheelZoom_getAssignedAxis(pointer.getCoordinates(e).yAxis);
                const hasZoomed = zoomBy(this, Math.pow(wheelSensitivity, delta), xAxisCoords ? [xAxisCoords.axis] : this.xAxis, yAxisCoords ? [yAxisCoords.axis] : this.yAxis, e.chartX, e.chartY, wheelZoomOptions);
                // Prevent page scroll
                if (hasZoomed) {
                    e.preventDefault?.();
                }
            }
        });
    }
}
/**
 * @private
 */
function MouseWheelZoom_compose(ChartClass) {
    if (composedClasses.indexOf(ChartClass) === -1) {
        composedClasses.push(ChartClass);
        MouseWheelZoom_addEvent(ChartClass, 'afterGetContainer', onAfterGetContainer);
    }
}
/* *
 *
 *  Default Export
 *
 * */
const MouseWheelZoomComposition = {
    compose: MouseWheelZoom_compose
};
/* harmony default export */ const MouseWheelZoom = (MouseWheelZoomComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * The mouse wheel zoom is a feature included in Highcharts Stock, but is also
 * available for Highcharts Core as a module. Zooming with the mouse wheel is
 * enabled by default in Highcharts Stock. In Highcharts Core it is enabled if
 * [chart.zooming.type](chart.zooming.type) is set. It can be disabled by
 * setting this option to `false`.
 *
 * @type      {boolean|object}
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/enabled
 *            Enable or disable
 * @sample    {highstock} stock/mouse-wheel-zoom/enabled
 *            Enable or disable
 * @apioption chart.zooming.mouseWheel
 */
/**
 * Zooming with the mouse wheel can be disabled by setting this option to
 * `false`.
 *
 * @type      {boolean}
 * @default   true
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @apioption chart.zooming.mouseWheel.enabled
 */
/**
 * Adjust the sensitivity of the zoom. Sensitivity of mouse wheel or trackpad
 * scrolling. `1` is no sensitivity, while with `2`, one mouse wheel delta will
 * zoom in `50%`.
 *
 * @type      {number}
 * @default   1.1
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/sensitivity
 *            Change mouse wheel zoom sensitivity
 * @sample    {highstock} stock/mouse-wheel-zoom/sensitivity
 *            Change mouse wheel zoom sensitivity
 * @apioption chart.zooming.mouseWheel.sensitivity
 */
/**
 * Decides in what dimensions the user can zoom scrolling the wheel. Can be one
 * of `x`, `y` or `xy`. In Highcharts Core, if not specified here, it will
 * inherit the type from [chart.zooming.type](chart.zooming.type). In Highcharts
 * Stock, it defaults to `x`.
 *
 * Note that particularly with mouse wheel in the y direction, the zoom is
 * affected by the default [yAxis.startOnTick](#yAxis.startOnTick) and
 * [endOnTick]((#yAxis.endOnTick)) settings. In order to respect these settings,
 * the zoom level will adjust after the user has stopped zooming. To prevent
 * this, consider setting `startOnTick` and `endOnTick` to `false`.
 *
 * @type      {string}
 * @default   {highcharts} undefined
 * @default   {highstock} x
 * @validvalue ["x", "y", "xy"]
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @apioption chart.zooming.mouseWheel.type
 */
/**
 * Whether to enable the reset zoom button when zooming with the mouse wheel.
 *
 * @type      {boolean}
 * @default   false
 * @since {next}
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/reset-zoom-button
 *            Enable reset zoom button for mouse wheel zooming
 * @sample    {highstock} stock/mouse-wheel-zoom/reset-zoom-button
 *            Enable reset zoom button for mouse wheel zooming
 * @apioption chart.zooming.mouseWheel.showResetButton
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/mouse-wheel-zoom.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-07)
 * @module highcharts/modules/mouse-wheel-zoom
 * @requires highcharts
 *
 * Mousewheel zoom module
 *
 * (c) 2023 Askel Eirik Johansson
 *
 * License: www.highcharts.com/license
 */



const mouse_wheel_zoom_src_G = (external_highcharts_src_js_default_default());
mouse_wheel_zoom_src_G.MouseWheelZoom = mouse_wheel_zoom_src_G.MouseWheelZoom || MouseWheelZoom;
mouse_wheel_zoom_src_G.MouseWheelZoom.compose(mouse_wheel_zoom_src_G.Chart);
/* harmony default export */ const mouse_wheel_zoom_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/masters/modules/stock.src.js
/**
 * @license Highstock JS v12.4.0-modified (2025-11-07)
 * @module highcharts/modules/stock
 * @requires highcharts
 *
 * Highcharts Stock as a plugin for Highcharts
 *
 * (c) 2010-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */















const stock_src_G = (external_highcharts_src_js_default_default());
// Classes
stock_src_G.Navigator = stock_src_G.Navigator || (external_accessibility_src_js_default_Navigator_default());
stock_src_G.OrdinalAxis = stock_src_G.OrdinalAxis || Axis_OrdinalAxis;
stock_src_G.RangeSelector = stock_src_G.RangeSelector || (external_accessibility_src_js_default_RangeSelector_default());
stock_src_G.Scrollbar = stock_src_G.Scrollbar || (external_accessibility_src_js_default_Scrollbar_default());
// Functions
stock_src_G.stockChart = stock_src_G.stockChart || Chart_StockChart.stockChart;
stock_src_G.StockChart = stock_src_G.StockChart || stock_src_G.stockChart;
stock_src_G.extend(stock_src_G.StockChart, Chart_StockChart);
// Compositions
Series_DataModifyComposition.compose(stock_src_G.Series, stock_src_G.Axis, stock_src_G.Point);
Flags_FlagsSeries.compose(stock_src_G.Renderer);
OHLC_OHLCSeries.compose(stock_src_G.Series);
stock_src_G.Navigator.compose(stock_src_G.Chart, stock_src_G.Axis, stock_src_G.Series);
stock_src_G.OrdinalAxis.compose(stock_src_G.Axis, stock_src_G.Series, stock_src_G.Chart);
stock_src_G.RangeSelector.compose(stock_src_G.Axis, stock_src_G.Chart);
stock_src_G.Scrollbar.compose(stock_src_G.Axis);
stock_src_G.StockChart.compose(stock_src_G.Chart, stock_src_G.Axis, stock_src_G.Series, stock_src_G.SVGRenderer);
/* harmony default export */ const stock_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/masters/modules/stock-tools.src.js








const stock_tools_src_G = (external_highcharts_src_js_default_default());
stock_tools_src_G.NavigationBindings = stock_tools_src_G.NavigationBindings || Annotations_NavigationBindings;
stock_tools_src_G.Toolbar = StockToolbar;
StockTools_StockTools.compose(stock_tools_src_G.NavigationBindings);
StockTools_StockToolsGui.compose(stock_tools_src_G.Chart, stock_tools_src_G.NavigationBindings);
/* harmony default export */ const stock_tools_src = ((external_highcharts_src_js_default_default()));

export { stock_tools_src as default };
