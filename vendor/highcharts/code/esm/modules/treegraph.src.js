/**
 * @license Highcharts JS v12.4.0-modified (2025-11-06)
 * Treegraph chart series type
 * @module highcharts/modules/treegraph
 * @requires highcharts
 * @requires highcharts/modules/treemap
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__coloraxis_src_js_cdd22a72__ from "./coloraxis.src.js";
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
;// ./code/es-modules/Extensions/Breadcrumbs/BreadcrumbsDefaults.js
/* *
 *
 *  Highcharts Breadcrumbs module
 *
 *  Authors: Grzegorz Blachlinski, Karol Kolodziej
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
const lang = {
    /**
     * @since   10.0.0
     * @product highcharts highmaps
     *
     * @private
     */
    mainBreadcrumb: 'Main'
};
/**
 * Options for breadcrumbs. Breadcrumbs general options are defined in
 * `navigation.breadcrumbs`. Specific options for drilldown are set in
 * `drilldown.breadcrumbs` and for tree-like series traversing, in
 * `plotOptions[series].breadcrumbs`.
 *
 * @since        10.0.0
 * @product      highcharts
 * @optionparent navigation.breadcrumbs
 */
const options = {
    /**
     * A collection of attributes for the buttons. The object takes SVG
     * attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button
     * states.
     *
     * @sample {highcharts} highcharts/breadcrumbs/single-button
     *         Themed, single button
     *
     * @type    {Highcharts.SVGAttributes}
     * @since   10.0.0
     * @product highcharts
     */
    buttonTheme: {
        /** @ignore */
        fill: 'none',
        /** @ignore */
        height: 18,
        /** @ignore */
        padding: 2,
        /** @ignore */
        'stroke-width': 0,
        /** @ignore */
        zIndex: 7,
        /** @ignore */
        states: {
            select: {
                fill: 'none'
            }
        },
        style: {
            color: "#334eff" /* Palette.highlightColor80 */
        }
    },
    /**
     * The default padding for each button and separator in each direction.
     *
     * @type  {number}
     * @since 10.0.0
     */
    buttonSpacing: 5,
    /**
     * Fires when clicking on the breadcrumbs button. Two arguments are
     * passed to the function. First breadcrumb button as an SVG element.
     * Second is the breadcrumbs class, containing reference to the chart,
     * series etc.
     *
     * ```js
     * click: function(button, breadcrumbs) {
     *   console.log(button);
     * }
     * ```
     *
     * Return false to stop default buttons click action.
     *
     * @type      {Highcharts.BreadcrumbsClickCallbackFunction}
     * @since     10.0.0
     * @apioption navigation.breadcrumbs.events.click
     */
    /**
     * When the breadcrumbs are floating, the plot area will not move to
     * make space for it. By default, the chart will not make space for the
     * buttons. This property won't work when positioned in the middle.
     *
     * @sample highcharts/breadcrumbs/single-button
     *         Floating button
     *
     * @type  {boolean}
     * @since 10.0.0
     */
    floating: false,
    /**
     * A format string for the breadcrumbs button. Variables are enclosed by
     * curly brackets. Available values are passed in the declared point
     * options.
     *
     * @type      {string|undefined}
     * @since 10.0.0
     * @default   undefined
     * @sample {highcharts} highcharts/breadcrumbs/format Display custom
     *          values in breadcrumb button.
     */
    format: void 0,
    /**
     * Callback function to format the breadcrumb text from scratch.
     *
     * @type      {Highcharts.BreadcrumbsFormatterCallbackFunction}
     * @since     10.0.0
     * @default   undefined
     * @apioption navigation.breadcrumbs.formatter
     */
    /**
     * What box to align the button to. Can be either `plotBox` or
     * `spacingBox`.
     *
     * @type    {Highcharts.ButtonRelativeToValue}
     * @default plotBox
     * @since   10.0.0
     * @product highcharts highmaps
     */
    relativeTo: 'plotBox',
    /**
     * Whether to reverse the order of buttons. This is common in Arabic
     * and Hebrew.
     *
     * @sample {highcharts} highcharts/breadcrumbs/rtl
     *         Breadcrumbs in RTL
     *
     * @type  {boolean}
     * @since 10.2.0
     */
    rtl: false,
    /**
     * Positioning for the button row. The breadcrumbs buttons will be
     * aligned properly for the default chart layout (title,  subtitle,
     * legend, range selector) for the custom chart layout set the position
     * properties.
     *
     * @sample  {highcharts} highcharts/breadcrumbs/single-button
     *          Single, right aligned button
     *
     * @type    {Highcharts.BreadcrumbsAlignOptions}
     * @since   10.0.0
     * @product highcharts highmaps
     */
    position: {
        /**
         * Horizontal alignment of the breadcrumbs buttons.
         *
         * @type {Highcharts.AlignValue}
         */
        align: 'left',
        /**
         * Vertical alignment of the breadcrumbs buttons.
         *
         * @type {Highcharts.VerticalAlignValue}
         */
        verticalAlign: 'top',
        /**
         * The X offset of the breadcrumbs button group.
         *
         * @type {number}
         */
        x: 0,
        /**
         * The Y offset of the breadcrumbs button group. When `undefined`,
         * and `floating` is `false`, the `y` position is adapted so that
         * the breadcrumbs are rendered outside the target area.
         *
         * @type {number|undefined}
         */
        y: void 0
    },
    /**
     * Options object for Breadcrumbs separator.
     *
     * @since 10.0.0
     */
    separator: {
        /**
         * @type    {string}
         * @since   10.0.0
         * @product highcharts
         */
        text: '/',
        /**
         * CSS styles for the breadcrumbs separator.
         *
         * In styled mode, the breadcrumbs separators are styled by the
         * `.highcharts-separator` rule with its different states.
         *  @type  {Highcharts.CSSObject}
         *  @since 10.0.0
         */
        style: {
            color: "#666666" /* Palette.neutralColor60 */,
            fontSize: '0.8em'
        }
    },
    /**
     * Show full path or only a single button.
     *
     * @sample {highcharts} highcharts/breadcrumbs/single-button
     *         Single, styled button
     *
     * @type  {boolean}
     * @since 10.0.0
     */
    showFullPath: true,
    /**
     * CSS styles for all breadcrumbs.
     *
     * In styled mode, the breadcrumbs buttons are styled by the
     * `.highcharts-breadcrumbs-buttons .highcharts-button` rule with its
     * different states.
     *
     * @type  {Highcharts.SVGAttributes}
     * @since 10.0.0
     */
    style: {},
    /**
     * Whether to use HTML to render the breadcrumbs items texts.
     *
     * @type  {boolean}
     * @since 10.0.0
     */
    useHTML: false,
    /**
     * The z index of the breadcrumbs group.
     *
     * @type  {number}
     * @since 10.0.0
     */
    zIndex: 7
};
/* *
 *
 *  Default Export
 *
 * */
const BreadcrumbsDefaults = {
    lang,
    options
};
/* harmony default export */ const Breadcrumbs_BreadcrumbsDefaults = (BreadcrumbsDefaults);

;// external ["../highcharts.src.js","default","Templating"]
const external_highcharts_src_js_default_Templating_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Templating;
var external_highcharts_src_js_default_Templating_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Templating_namespaceObject);
;// ./code/es-modules/Extensions/Breadcrumbs/Breadcrumbs.js
/* *
 *
 *  Highcharts Breadcrumbs module
 *
 *  Authors: Grzegorz Blachlinski, Karol Kolodziej
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { format } = (external_highcharts_src_js_default_Templating_default());

const { composed } = (external_highcharts_src_js_default_default());

const { addEvent, defined, extend, fireEvent, isString, merge, objectEach, pick, pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Shift the drillUpButton to make the space for resetZoomButton, #8095.
 * @private
 */
function onChartAfterShowResetZoom() {
    const chart = this;
    if (chart.breadcrumbs) {
        const bbox = chart.resetZoomButton &&
            chart.resetZoomButton.getBBox(), breadcrumbsOptions = chart.breadcrumbs.options;
        if (bbox &&
            breadcrumbsOptions.position.align === 'right' &&
            breadcrumbsOptions.relativeTo === 'plotBox') {
            chart.breadcrumbs.alignBreadcrumbsGroup(-bbox.width - breadcrumbsOptions.buttonSpacing);
        }
    }
}
/**
 * Remove resize/afterSetExtremes at chart destroy.
 * @private
 */
function onChartDestroy() {
    if (this.breadcrumbs) {
        this.breadcrumbs.destroy();
        this.breadcrumbs = void 0;
    }
}
/**
 * Logic for making space for the buttons above the plot area
 * @private
 */
function onChartGetMargins() {
    const breadcrumbs = this.breadcrumbs;
    if (breadcrumbs &&
        !breadcrumbs.options.floating &&
        breadcrumbs.level) {
        const breadcrumbsOptions = breadcrumbs.options, buttonTheme = breadcrumbsOptions.buttonTheme, breadcrumbsHeight = ((buttonTheme.height || 0) +
            2 * (buttonTheme.padding || 0) +
            breadcrumbsOptions.buttonSpacing), verticalAlign = breadcrumbsOptions.position.verticalAlign;
        if (verticalAlign === 'bottom') {
            this.marginBottom = (this.marginBottom || 0) + breadcrumbsHeight;
            breadcrumbs.yOffset = breadcrumbsHeight;
        }
        else if (verticalAlign !== 'middle') {
            this.plotTop += breadcrumbsHeight;
            breadcrumbs.yOffset = -breadcrumbsHeight;
        }
        else {
            breadcrumbs.yOffset = void 0;
        }
    }
}
/**
 * @private
 */
function onChartRedraw() {
    this.breadcrumbs && this.breadcrumbs.redraw();
}
/**
 * After zooming out, shift the drillUpButton to the previous position, #8095.
 * @private
 */
function onChartSelection(event) {
    if (event.resetSelection === true &&
        this.breadcrumbs) {
        this.breadcrumbs.alignBreadcrumbsGroup();
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Breadcrumbs class
 *
 * @private
 * @class
 * @name Highcharts.Breadcrumbs
 *
 * @param {Highcharts.Chart} chart
 *        Chart object
 * @param {Highcharts.Options} userOptions
 *        User options
 */
class Breadcrumbs {
    /* *
     *
     *  Functions
     *
     * */
    static compose(ChartClass, highchartsDefaultOptions) {
        if (pushUnique(composed, 'Breadcrumbs')) {
            addEvent(ChartClass, 'destroy', onChartDestroy);
            addEvent(ChartClass, 'afterShowResetZoom', onChartAfterShowResetZoom);
            addEvent(ChartClass, 'getMargins', onChartGetMargins);
            addEvent(ChartClass, 'redraw', onChartRedraw);
            addEvent(ChartClass, 'selection', onChartSelection);
            // Add language support.
            extend(highchartsDefaultOptions.lang, Breadcrumbs_BreadcrumbsDefaults.lang);
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(chart, userOptions) {
        this.elementList = {};
        this.isDirty = true;
        this.level = 0;
        this.list = [];
        const chartOptions = merge(chart.options.drilldown &&
            chart.options.drilldown.drillUpButton, Breadcrumbs.defaultOptions, chart.options.navigation && chart.options.navigation.breadcrumbs, userOptions);
        this.chart = chart;
        this.options = chartOptions || {};
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Update Breadcrumbs properties, like level and list.
     *
     * @function Highcharts.Breadcrumbs#updateProperties
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    updateProperties(list) {
        this.setList(list);
        this.setLevel();
        this.isDirty = true;
    }
    /**
     * Set breadcrumbs list.
     * @function Highcharts.Breadcrumbs#setList
     *
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     * @param {Highcharts.BreadcrumbsOptions} list
     *        Breadcrumbs list.
     */
    setList(list) {
        this.list = list;
    }
    /**
     * Calculate level on which chart currently is.
     *
     * @function Highcharts.Breadcrumbs#setLevel
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    setLevel() {
        this.level = this.list.length && this.list.length - 1;
    }
    /**
     * Get Breadcrumbs level
     *
     * @function Highcharts.Breadcrumbs#getLevel
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    getLevel() {
        return this.level;
    }
    /**
     * Default button text formatter.
     *
     * @function Highcharts.Breadcrumbs#getButtonText
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     * @param {Highcharts.Breadcrumbs} breadcrumb
     *        Breadcrumb.
     * @return {string}
     *         Formatted text.
     */
    getButtonText(breadcrumb) {
        const breadcrumbs = this, chart = breadcrumbs.chart, breadcrumbsOptions = breadcrumbs.options, lang = chart.options.lang, textFormat = pick(breadcrumbsOptions.format, breadcrumbsOptions.showFullPath ?
            '{level.name}' : '← {level.name}'), defaultText = lang && pick(lang.drillUpText, lang.mainBreadcrumb);
        let returnText = breadcrumbsOptions.formatter &&
            breadcrumbsOptions.formatter(breadcrumb) ||
            format(textFormat, { level: breadcrumb.levelOptions }, chart) || '';
        if (((isString(returnText) &&
            !returnText.length) ||
            returnText === '← ') &&
            defined(defaultText)) {
            returnText = !breadcrumbsOptions.showFullPath ?
                '← ' + defaultText :
                defaultText;
        }
        return returnText;
    }
    /**
     * Redraw.
     *
     * @function Highcharts.Breadcrumbs#redraw
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    redraw() {
        if (this.isDirty) {
            this.render();
        }
        if (this.group) {
            this.group.align();
        }
        this.isDirty = false;
    }
    /**
     * Create a group, then draw breadcrumbs together with the separators.
     *
     * @function Highcharts.Breadcrumbs#render
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    render() {
        const breadcrumbs = this, chart = breadcrumbs.chart, breadcrumbsOptions = breadcrumbs.options;
        // A main group for the breadcrumbs.
        if (!breadcrumbs.group && breadcrumbsOptions) {
            breadcrumbs.group = chart.renderer
                .g('breadcrumbs-group')
                .addClass('highcharts-no-tooltip highcharts-breadcrumbs')
                .attr({
                zIndex: breadcrumbsOptions.zIndex
            })
                .add();
        }
        // Draw breadcrumbs.
        if (breadcrumbsOptions.showFullPath) {
            this.renderFullPathButtons();
        }
        else {
            this.renderSingleButton();
        }
        this.alignBreadcrumbsGroup();
    }
    /**
     * Draw breadcrumbs together with the separators.
     *
     * @function Highcharts.Breadcrumbs#renderFullPathButtons
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    renderFullPathButtons() {
        // Make sure that only one type of button is visible.
        this.destroySingleButton();
        this.resetElementListState();
        this.updateListElements();
        this.destroyListElements();
    }
    /**
     * Render Single button - when showFullPath is not used. The button is
     * similar to the old drillUpButton
     *
     * @function Highcharts.Breadcrumbs#renderSingleButton
     * @param {Highcharts.Breadcrumbs} this Breadcrumbs class.
     */
    renderSingleButton() {
        const breadcrumbs = this, chart = breadcrumbs.chart, list = breadcrumbs.list, breadcrumbsOptions = breadcrumbs.options, buttonSpacing = breadcrumbsOptions.buttonSpacing;
        // Make sure that only one type of button is visible.
        this.destroyListElements();
        // Draw breadcrumbs. Initial position for calculating the breadcrumbs
        // group.
        const posX = breadcrumbs.group ?
            breadcrumbs.group.getBBox().width :
            buttonSpacing, posY = buttonSpacing;
        const previousBreadcrumb = list[list.length - 2];
        if (!chart.drillUpButton && (this.level > 0)) {
            chart.drillUpButton = breadcrumbs.renderButton(previousBreadcrumb, posX, posY);
        }
        else if (chart.drillUpButton) {
            if (this.level > 0) {
                // Update button.
                this.updateSingleButton();
            }
            else {
                this.destroySingleButton();
            }
        }
    }
    /**
     * Update group position based on align and it's width.
     *
     * @function Highcharts.Breadcrumbs#renderSingleButton
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    alignBreadcrumbsGroup(xOffset) {
        const breadcrumbs = this;
        if (breadcrumbs.group) {
            const breadcrumbsOptions = breadcrumbs.options, buttonTheme = breadcrumbsOptions.buttonTheme, positionOptions = breadcrumbsOptions.position, alignTo = (breadcrumbsOptions.relativeTo === 'chart' ||
                breadcrumbsOptions.relativeTo === 'spacingBox' ?
                void 0 :
                'plotBox'), bBox = breadcrumbs.group.getBBox(), additionalSpace = 2 * (buttonTheme.padding || 0) +
                breadcrumbsOptions.buttonSpacing;
            // Store positionOptions
            positionOptions.width = bBox.width + additionalSpace;
            positionOptions.height = bBox.height + additionalSpace;
            const newPositions = merge(positionOptions);
            // Add x offset if specified.
            if (xOffset) {
                newPositions.x += xOffset;
            }
            if (breadcrumbs.options.rtl) {
                newPositions.x += positionOptions.width;
            }
            newPositions.y = pick(newPositions.y, this.yOffset, 0);
            breadcrumbs.group.align(newPositions, true, alignTo);
        }
    }
    /**
     * Render a button.
     *
     * @function Highcharts.Breadcrumbs#renderButton
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     * @param {Highcharts.Breadcrumbs} breadcrumb
     *        Current breadcrumb
     * @param {Highcharts.Breadcrumbs} posX
     *        Initial horizontal position
     * @param {Highcharts.Breadcrumbs} posY
     *        Initial vertical position
     * @return {SVGElement|void}
     *        Returns the SVG button
     */
    renderButton(breadcrumb, posX, posY) {
        const breadcrumbs = this, chart = this.chart, breadcrumbsOptions = breadcrumbs.options, buttonTheme = merge(breadcrumbsOptions.buttonTheme);
        const button = chart.renderer
            .button(breadcrumbs.getButtonText(breadcrumb), posX, posY, function (e /* @todo (Event|any) */) {
            // Extract events from button object and call
            const buttonEvents = breadcrumbsOptions.events &&
                breadcrumbsOptions.events.click;
            let callDefaultEvent;
            if (buttonEvents) {
                callDefaultEvent = buttonEvents.call(breadcrumbs, e, breadcrumb);
            }
            // (difference in behaviour of showFullPath and drillUp)
            if (callDefaultEvent !== false) {
                // For single button we are not going to the button
                // level, but the one level up
                if (!breadcrumbsOptions.showFullPath) {
                    e.newLevel = breadcrumbs.level - 1;
                }
                else {
                    e.newLevel = breadcrumb.level;
                }
                fireEvent(breadcrumbs, 'up', e);
            }
        }, buttonTheme)
            .addClass('highcharts-breadcrumbs-button')
            .add(breadcrumbs.group);
        if (!chart.styledMode) {
            button.attr(breadcrumbsOptions.style);
        }
        return button;
    }
    /**
     * Render a separator.
     *
     * @function Highcharts.Breadcrumbs#renderSeparator
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     * @param {Highcharts.Breadcrumbs} posX
     *        Initial horizontal position
     * @param {Highcharts.Breadcrumbs} posY
     *        Initial vertical position
     * @return {Highcharts.SVGElement}
     *        Returns the SVG button
     */
    renderSeparator(posX, posY) {
        const breadcrumbs = this, chart = this.chart, breadcrumbsOptions = breadcrumbs.options, separatorOptions = breadcrumbsOptions.separator;
        const separator = chart.renderer
            .label(separatorOptions.text, posX, posY, void 0, void 0, void 0, false)
            .addClass('highcharts-breadcrumbs-separator')
            .add(breadcrumbs.group);
        if (!chart.styledMode) {
            separator.css(separatorOptions.style);
        }
        return separator;
    }
    /**
     * Update.
     * @function Highcharts.Breadcrumbs#update
     *
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     * @param {Highcharts.BreadcrumbsOptions} options
     *        Breadcrumbs class.
     * @param {boolean} redraw
     *        Redraw flag
     */
    update(options) {
        merge(true, this.options, options);
        this.destroy();
        this.isDirty = true;
    }
    /**
     * Update button text when the showFullPath set to false.
     * @function Highcharts.Breadcrumbs#updateSingleButton
     *
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    updateSingleButton() {
        const chart = this.chart, currentBreadcrumb = this.list[this.level - 1];
        if (chart.drillUpButton) {
            chart.drillUpButton.attr({
                text: this.getButtonText(currentBreadcrumb)
            });
        }
    }
    /**
     * Destroy the chosen breadcrumbs group
     *
     * @function Highcharts.Breadcrumbs#destroy
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    destroy() {
        this.destroySingleButton();
        // Destroy elements one by one. It's necessary because
        // g().destroy() does not remove added HTML
        this.destroyListElements(true);
        // Then, destroy the group itself.
        if (this.group) {
            this.group.destroy();
        }
        this.group = void 0;
    }
    /**
     * Destroy the elements' buttons and separators.
     *
     * @function Highcharts.Breadcrumbs#destroyListElements
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    destroyListElements(force) {
        const elementList = this.elementList;
        objectEach(elementList, (element, level) => {
            if (force ||
                !elementList[level].updated) {
                element = elementList[level];
                element.button && element.button.destroy();
                element.separator && element.separator.destroy();
                delete element.button;
                delete element.separator;
                delete elementList[level];
            }
        });
        if (force) {
            this.elementList = {};
        }
    }
    /**
     * Destroy the single button if exists.
     *
     * @function Highcharts.Breadcrumbs#destroySingleButton
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    destroySingleButton() {
        if (this.chart.drillUpButton) {
            this.chart.drillUpButton.destroy();
            this.chart.drillUpButton = void 0;
        }
    }
    /**
     * Reset state for all buttons in elementList.
     *
     * @function Highcharts.Breadcrumbs#resetElementListState
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    resetElementListState() {
        objectEach(this.elementList, (element) => {
            element.updated = false;
        });
    }
    /**
     * Update rendered elements inside the elementList.
     *
     * @function Highcharts.Breadcrumbs#updateListElements
     *
     * @param {Highcharts.Breadcrumbs} this
     *        Breadcrumbs class.
     */
    updateListElements() {
        const breadcrumbs = this, elementList = breadcrumbs.elementList, buttonSpacing = breadcrumbs.options.buttonSpacing, posY = buttonSpacing, list = breadcrumbs.list, rtl = breadcrumbs.options.rtl, rtlFactor = rtl ? -1 : 1, updateXPosition = function (element, spacing) {
            return rtlFactor * element.getBBox().width +
                rtlFactor * spacing;
        }, adjustToRTL = function (element, posX, posY) {
            element.translate(posX - element.getBBox().width, posY);
        };
        // Initial position for calculating the breadcrumbs group.
        let posX = breadcrumbs.group ?
            updateXPosition(breadcrumbs.group, buttonSpacing) :
            buttonSpacing, currentBreadcrumb, breadcrumb;
        for (let i = 0, iEnd = list.length; i < iEnd; ++i) {
            const isLast = i === iEnd - 1;
            let button, separator;
            breadcrumb = list[i];
            if (elementList[breadcrumb.level]) {
                currentBreadcrumb = elementList[breadcrumb.level];
                button = currentBreadcrumb.button;
                // Render a separator if it was not created before.
                if (!currentBreadcrumb.separator &&
                    !isLast) {
                    // Add spacing for the next separator
                    posX += rtlFactor * buttonSpacing;
                    currentBreadcrumb.separator =
                        breadcrumbs.renderSeparator(posX, posY);
                    if (rtl) {
                        adjustToRTL(currentBreadcrumb.separator, posX, posY);
                    }
                    posX += updateXPosition(currentBreadcrumb.separator, buttonSpacing);
                }
                else if (currentBreadcrumb.separator &&
                    isLast) {
                    currentBreadcrumb.separator.destroy();
                    delete currentBreadcrumb.separator;
                }
                elementList[breadcrumb.level].updated = true;
            }
            else {
                // Render a button.
                button = breadcrumbs.renderButton(breadcrumb, posX, posY);
                if (rtl) {
                    adjustToRTL(button, posX, posY);
                }
                posX += updateXPosition(button, buttonSpacing);
                // Render a separator.
                if (!isLast) {
                    separator = breadcrumbs.renderSeparator(posX, posY);
                    if (rtl) {
                        adjustToRTL(separator, posX, posY);
                    }
                    posX += updateXPosition(separator, buttonSpacing);
                }
                elementList[breadcrumb.level] = {
                    button,
                    separator,
                    updated: true
                };
            }
            if (button) {
                button.setState(isLast ? 2 : 0);
            }
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
Breadcrumbs.defaultOptions = Breadcrumbs_BreadcrumbsDefaults.options;
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback function to react on button clicks.
 *
 * @callback Highcharts.BreadcrumbsClickCallbackFunction
 *
 * @param {Highcharts.Event} event
 * Event.
 *
 * @param {Highcharts.BreadcrumbOptions} options
 * Breadcrumb options.
 *
 * @param {global.Event} e
 * Event arguments.
 */
/**
 * Callback function to format the breadcrumb text from scratch.
 *
 * @callback Highcharts.BreadcrumbsFormatterCallbackFunction
 *
 * @param {Highcharts.BreadcrumbOptions} options
 * Breadcrumb options.
 *
 * @return {string}
 * Formatted text or false
 */
/**
 * Options for the one breadcrumb.
 *
 * @interface Highcharts.BreadcrumbOptions
 */
/**
 * Level connected to a specific breadcrumb.
 * @name Highcharts.BreadcrumbOptions#level
 * @type {number}
 */
/**
 * Options for series or point connected to a specific breadcrumb.
 * @name Highcharts.BreadcrumbOptions#levelOptions
 * @type {SeriesOptions|PointOptionsObject}
 */
/**
 * Options for aligning breadcrumbs group.
 *
 * @interface Highcharts.BreadcrumbsAlignOptions
 */
/**
 * Align of a Breadcrumb group.
 * @default right
 * @name Highcharts.BreadcrumbsAlignOptions#align
 * @type {AlignValue}
 */
/**
 * Vertical align of a Breadcrumb group.
 * @default top
 * @name Highcharts.BreadcrumbsAlignOptions#verticalAlign
 * @type {VerticalAlignValue}
 */
/**
 * X offset of a Breadcrumbs group.
 * @name Highcharts.BreadcrumbsAlignOptions#x
 * @type {number}
 */
/**
 * Y offset of a Breadcrumbs group.
 * @name Highcharts.BreadcrumbsAlignOptions#y
 * @type {number}
 */
/**
 * Options for all breadcrumbs.
 *
 * @interface Highcharts.BreadcrumbsOptions
 */
/**
 * Button theme.
 * @name Highcharts.BreadcrumbsOptions#buttonTheme
 * @type { SVGAttributes | undefined }
 */
(''); // Keeps doclets above in JS file

;// external ["../highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// external ["./coloraxis.src.js","default","ColorMapComposition"]
const external_coloraxis_src_js_default_ColorMapComposition_namespaceObject = __WEBPACK_EXTERNAL_MODULE__coloraxis_src_js_cdd22a72__["default"].ColorMapComposition;
var external_coloraxis_src_js_default_ColorMapComposition_default = /*#__PURE__*/__webpack_require__.n(external_coloraxis_src_js_default_ColorMapComposition_namespaceObject);
;// external ["../highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Series/Treemap/TreemapAlgorithmGroup.js
/* *
 *
 *  (c) 2014-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Class
 *
 * */
class TreemapAlgorithmGroup {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(h, w, d, p) {
        this.height = h;
        this.width = w;
        this.plot = p;
        this.direction = d;
        this.startDirection = d;
        this.total = 0;
        this.nW = 0;
        this.lW = 0;
        this.nH = 0;
        this.lH = 0;
        this.elArr = [];
        this.lP = {
            total: 0,
            lH: 0,
            nH: 0,
            lW: 0,
            nW: 0,
            nR: 0,
            lR: 0,
            aspectRatio: function (w, h) {
                return Math.max((w / h), (h / w));
            }
        };
    }
    /* *
     *
     *  Functions
     *
     * */
    addElement(el) {
        this.lP.total = this.elArr[this.elArr.length - 1];
        this.total = this.total + el;
        if (this.direction === 0) {
            // Calculate last point old aspect ratio
            this.lW = this.nW;
            this.lP.lH = this.lP.total / this.lW;
            this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH);
            // Calculate last point new aspect ratio
            this.nW = this.total / this.height;
            this.lP.nH = this.lP.total / this.nW;
            this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH);
        }
        else {
            // Calculate last point old aspect ratio
            this.lH = this.nH;
            this.lP.lW = this.lP.total / this.lH;
            this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH);
            // Calculate last point new aspect ratio
            this.nH = this.total / this.width;
            this.lP.nW = this.lP.total / this.nH;
            this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH);
        }
        this.elArr.push(el);
    }
    reset() {
        this.nW = 0;
        this.lW = 0;
        this.elArr = [];
        this.total = 0;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treemap_TreemapAlgorithmGroup = (TreemapAlgorithmGroup);

;// ./code/es-modules/Series/Treemap/TreemapNode.js
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
 *  Class
 *
 * */
class TreemapNode {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.childrenTotal = 0;
        this.visible = false;
    }
    /* *
     *
     *  Functions
     *
     * */
    init(id, i, children, height, level, series, parent) {
        this.id = id;
        this.i = i;
        this.children = children;
        this.height = height;
        this.level = level;
        this.series = series;
        this.parent = parent;
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treemap_TreemapNode = (TreemapNode);

;// ./code/es-modules/Series/DrawPointUtilities.js
/* *
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Functions
 *
 * */
/**
 * Handles the drawing of a component.
 * Can be used for any type of component that reserves the graphic property,
 * and provides a shouldDraw on its context.
 *
 * @private
 *
 * @todo add type checking.
 * @todo export this function to enable usage
 */
function draw(point, params) {
    const { animatableAttribs, onComplete, css, renderer } = params;
    const animation = (point.series && point.series.chart.hasRendered) ?
        // Chart-level animation on updates
        void 0 :
        // Series-level animation on new points
        (point.series &&
            point.series.options.animation);
    let graphic = point.graphic;
    params.attribs = {
        ...params.attribs,
        'class': point.getClassName()
    };
    if ((point.shouldDraw())) {
        if (!graphic) {
            if (params.shapeType === 'text') {
                graphic = renderer.text();
            }
            else if (params.shapeType === 'image') {
                graphic = renderer.image(params.imageUrl || '')
                    .attr(params.shapeArgs || {});
            }
            else {
                graphic = renderer[params.shapeType](params.shapeArgs || {});
            }
            point.graphic = graphic;
            graphic.add(params.group);
        }
        if (css) {
            graphic.css(css);
        }
        graphic
            .attr(params.attribs)
            .animate(animatableAttribs, params.isNew ? false : animation, onComplete);
    }
    else if (graphic) {
        const destroy = () => {
            point.graphic = graphic = (graphic && graphic.destroy());
            if (typeof onComplete === 'function') {
                onComplete();
            }
        };
        // Animate only runs complete callback if something was animated.
        if (Object.keys(animatableAttribs).length) {
            graphic.animate(animatableAttribs, void 0, () => destroy());
        }
        else {
            destroy();
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
const DrawPointUtilities = {
    draw
};
/* harmony default export */ const Series_DrawPointUtilities = (DrawPointUtilities);

;// ./code/es-modules/Series/Treemap/TreemapPoint.js
/* *
 *
 *  (c) 2014-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { pie: { prototype: { pointClass: PiePoint } }, scatter: { prototype: { pointClass: ScatterPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: TreemapPoint_extend, isNumber, pick: TreemapPoint_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
class TreemapPoint extends ScatterPoint {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.groupedPointsAmount = 0;
        this.shapeType = 'rect';
    }
    /* *
     *
     *  Functions
     *
     * */
    draw(params) {
        Series_DrawPointUtilities.draw(this, params);
    }
    getClassName() {
        const series = this.series, options = series.options;
        let className = super.getClassName();
        // Above the current level
        if (this.node.level <= series.nodeMap[series.rootNode].level &&
            this.node.children.length) {
            className += ' highcharts-above-level';
        }
        else if (!this.node.isGroup &&
            !this.node.isLeaf &&
            !series.nodeMap[series.rootNode].isGroup &&
            !TreemapPoint_pick(options.interactByLeaf, !options.allowTraversingTree)) {
            className += ' highcharts-internal-node-interactive';
        }
        else if (!this.node.isGroup &&
            !this.node.isLeaf &&
            !series.nodeMap[series.rootNode].isGroup) {
            className += ' highcharts-internal-node';
        }
        return className;
    }
    /**
     * A tree point is valid if it has han id too, assume it may be a parent
     * item.
     *
     * @private
     * @function Highcharts.Point#isValid
     */
    isValid() {
        return Boolean(this.id || isNumber(this.value));
    }
    setState(state) {
        super.setState.apply(this, arguments);
        // Graphic does not exist when point is not visible.
        if (this.graphic) {
            this.graphic.attr({
                zIndex: state === 'hover' ? 1 : 0
            });
        }
    }
    shouldDraw() {
        return isNumber(this.plotY) && this.y !== null;
    }
}
TreemapPoint_extend(TreemapPoint.prototype, {
    setVisible: PiePoint.prototype.setVisible
});
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treemap_TreemapPoint = (TreemapPoint);

;// ./code/es-modules/Series/Treemap/TreemapSeriesDefaults.js
/* *
 *
 *  (c) 2014-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { isString: TreemapSeriesDefaults_isString } = (external_highcharts_src_js_default_default());
/* *
 *
 *  API Options
 *
 * */
/**
 * A treemap displays hierarchical data using nested rectangles. The data
 * can be laid out in varying ways depending on options.
 *
 * @sample highcharts/demo/treemap-large-dataset/
 *         Treemap
 *
 * @extends      plotOptions.scatter
 * @excluding    connectEnds, connectNulls, dataSorting, dragDrop, jitter, marker
 * @product      highcharts
 * @requires     modules/treemap
 * @optionparent plotOptions.treemap
 */
const TreemapSeriesDefaults = {
    /**
     * When enabled the user can click on a point which is a parent and
     * zoom in on its children. Deprecated and replaced by
     * [allowTraversingTree](#plotOptions.treemap.allowTraversingTree).
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-allowdrilltonode/
     *         Enabled
     *
     * @deprecated
     * @type      {boolean}
     * @default   false
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.allowDrillToNode
     */
    /**
     * When enabled the user can click on a point which is a parent and
     * zoom in on its children.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-allowtraversingtree/
     *         Enabled
     * @sample {highcharts} highcharts/plotoptions/treemap-grouping-traversing/
     *         Traversing to Grouped Points node
     *
     * @since     7.0.3
     * @product   highcharts
     */
    allowTraversingTree: false,
    animationLimit: 250,
    /**
     * The border radius for each treemap item.
     */
    borderRadius: 0,
    /**
     * Options for the breadcrumbs, the navigation at the top leading the
     * way up through the traversed levels.
     *
     *
     * @since 10.0.0
     * @product   highcharts
     * @extends   navigation.breadcrumbs
     * @apioption plotOptions.treemap.breadcrumbs
     */
    /**
     * When the series contains less points than the crop threshold, all
     * points are drawn, event if the points fall outside the visible plot
     * area at the current zoom. The advantage of drawing all points
     * (including markers and columns), is that animation is performed on
     * updates. On the other hand, when the series contains more points than
     * the crop threshold, the series data is cropped to only contain points
     * that fall within the plot area. The advantage of cropping away
     * invisible points is to increase performance on large series.
     *
     * @type      {number}
     * @default   300
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.cropThreshold
     */
    /**
     * Fires on a request for change of root node for the tree, before the
     * update is made. An event object is passed to the function, containing
     * additional properties `newRootId`, `previousRootId`, `redraw` and
     * `trigger`.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-events-setrootnode/
     *         Alert update information on setRootNode event.
     *
     * @type {Function}
     * @default undefined
     * @since 7.0.3
     * @product highcharts
     * @apioption plotOptions.treemap.events.setRootNode
     */
    /**
     * This option decides if the user can interact with the parent nodes
     * or just the leaf nodes. When this option is undefined, it will be
     * true by default. However when allowTraversingTree is true, then it
     * will be false by default.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-interactbyleaf-false/
     *         False
     * @sample {highcharts} highcharts/plotoptions/treemap-interactbyleaf-true-and-allowtraversingtree/
     *         InteractByLeaf and allowTraversingTree is true
     *
     * @type      {boolean}
     * @since     4.1.2
     * @product   highcharts
     * @apioption plotOptions.treemap.interactByLeaf
     */
    /**
     * The sort index of the point inside the treemap level.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-sortindex/
     *         Sort by years
     *
     * @type      {number}
     * @since     4.1.10
     * @product   highcharts
     * @apioption plotOptions.treemap.sortIndex
     */
    /**
     * A series specific or series type specific color set to apply instead
     * of the global [colors](#colors) when
     * [colorByPoint](#plotOptions.treemap.colorByPoint) is true.
     *
     * @type      {Array<Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject>}
     * @since     3.0
     * @product   highcharts
     * @apioption plotOptions.treemap.colors
     */
    /**
     * Whether to display this series type or specific series item in the
     * legend.
     */
    showInLegend: false,
    /**
     * @ignore-option
     */
    marker: void 0,
    /**
     * When using automatic point colors pulled from the `options.colors`
     * collection, this option determines whether the chart should receive
     * one color per series or one color per point.
     *
     * @see [series colors](#plotOptions.treemap.colors)
     *
     * @since     2.0
     * @product   highcharts
     * @apioption plotOptions.treemap.colorByPoint
     */
    colorByPoint: false,
    /**
     * @since 4.1.0
     */
    dataLabels: {
        enabled: true,
        formatter: function () {
            const point = this && this.point ?
                this.point :
                {}, name = TreemapSeriesDefaults_isString(point.name) ? point.name : '';
            return name;
        },
        /**
         * Whether the data label should act as a group-level header. For leaf
         * nodes, headers are not supported and the data label will be rendered
         * inside.
         *
         * @sample {highcharts} highcharts/series-treemap/headers
         *         Headers for parent nodes
         *
         * @since 12.2.0
         */
        headers: false,
        inside: true,
        padding: 2,
        verticalAlign: 'middle',
        style: {
            textOverflow: 'ellipsis'
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>: {point.value}<br/>',
        /**
         * The HTML of the grouped point's nodes in the tooltip. Works only for
         * Treemap series grouping and analogously to
         * [pointFormat](#tooltip.pointFormat).
         *
         * The grouped nodes point tooltip can be also formatted using
         * `tooltip.formatter` callback function and `point.isGroupNode` flag.
         *
         * @type      {string}
         * @default   '+ {point.groupedPointsAmount} more...'
         * @apioption tooltip.clusterFormat
         */
        clusterFormat: '+ {point.groupedPointsAmount} more...<br/>'
    },
    /**
     * Whether to ignore hidden points when the layout algorithm runs.
     * If `false`, hidden points will leave open spaces.
     *
     * @since 5.0.8
     */
    ignoreHiddenPoint: true,
    /**
     * This option decides which algorithm is used for setting position
     * and dimensions of the points.
     *
     * @see [How to write your own algorithm](https://www.highcharts.com/docs/chart-and-series-types/treemap)
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-sliceanddice/
     *         SliceAndDice by default
     * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-stripes/
     *         Stripes
     * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-squarified/
     *         Squarified
     * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-strip/
     *         Strip
     *
     * @since      4.1.0
     * @validvalue ["sliceAndDice", "stripes", "squarified", "strip"]
     */
    layoutAlgorithm: 'sliceAndDice',
    /**
     * Defines which direction the layout algorithm will start drawing.
     *
     * @since       4.1.0
     * @validvalue ["vertical", "horizontal"]
     */
    layoutStartingDirection: 'vertical',
    /**
     * Enabling this option will make the treemap alternate the drawing
     * direction between vertical and horizontal. The next levels starting
     * direction will always be the opposite of the previous.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-alternatestartingdirection-true/
     *         Enabled
     *
     * @since 4.1.0
     */
    alternateStartingDirection: false,
    /**
     * Used together with the levels and allowTraversingTree options. When
     * set to false the first level visible to be level one, which is
     * dynamic when traversing the tree. Otherwise the level will be the
     * same as the tree structure.
     *
     * @since 4.1.0
     */
    levelIsConstant: true,
    /**
     * Options for the button appearing when traversing down in a treemap.
     *
     * Since v9.3.3 the `traverseUpButton` is replaced by `breadcrumbs`.
     *
     * @deprecated
     */
    traverseUpButton: {
        /**
         * The position of the button.
         */
        position: {
            /**
             * Vertical alignment of the button.
             *
             * @type      {Highcharts.VerticalAlignValue}
             * @default   top
             * @product   highcharts
             * @apioption plotOptions.treemap.traverseUpButton.position.verticalAlign
             */
            /**
             * Horizontal alignment of the button.
             *
             * @type {Highcharts.AlignValue}
             */
            align: 'right',
            /**
             * Horizontal offset of the button.
             */
            x: -10,
            /**
             * Vertical offset of the button.
             */
            y: 10
        }
    },
    /**
     * Group padding for parent elements in terms of pixels. See also the
     * `nodeSizeBy` option that controls how the leaf nodes' size is affected by
     * the padding.
     *
     * @sample    {highcharts} highcharts/series-treemap/grouppadding/
     *            Group padding
     * @type      {number}
     * @since 12.2.0
     * @product   highcharts
     * @apioption plotOptions.treemap.groupPadding
     */
    /**
     * Set options on specific levels. Takes precedence over series options,
     * but not point options.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-levels/
     *         Styling dataLabels and borders
     * @sample {highcharts} highcharts/demo/treemap-with-levels/
     *         Different layoutAlgorithm
     *
     * @type      {Array<*>}
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels
     */
    /**
     * Experimental. How to set the size of child nodes when a header or padding
     * is present. When `leaf`, the group is expanded to make room for headers
     * and padding in order to preserve the relative sizes between leaves. When
     * `group`, the leaves are naïvely fit into the remaining area after the
     * header and padding are subtracted.
     *
     * @sample    {highcharts} highcharts/series-treemap/nodesizeby/
     *            Node sizing
     * @since 12.2.0
     * @type      {string}
     * @validvalue ["group", "leaf"]
     * @default   group
     * @apioption plotOptions.treemap.nodeSizeBy
     */
    /**
     * Can set a `borderColor` on all points which lies on the same level.
     *
     * @type      {Highcharts.ColorString}
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.borderColor
     */
    /**
     * Set the dash style of the border of all the point which lies on the
     * level. See
     * [plotOptions.scatter.dashStyle](#plotoptions.scatter.dashstyle)
     * for possible options.
     *
     * @type      {Highcharts.DashStyleValue}
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.borderDashStyle
     */
    /**
     * Can set the borderWidth on all points which lies on the same level.
     *
     * @type      {number}
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.borderWidth
     */
    /**
     * Can set a color on all points which lies on the same level.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.color
     */
    /**
     * A configuration object to define how the color of a child varies from
     * the parent's color. The variation is distributed among the children
     * of node. For example when setting brightness, the brightness change
     * will range from the parent's original brightness on the first child,
     * to the amount set in the `to` setting on the last node. This allows a
     * gradient-like color scheme that sets children out from each other
     * while highlighting the grouping on treemaps and sectors on sunburst
     * charts.
     *
     * @sample highcharts/demo/sunburst/
     *         Sunburst with color variation
     *
     * @sample highcharts/series-treegraph/color-variation
     *         Treegraph nodes with color variation
     *
     * @since     6.0.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.colorVariation
     */
    /**
     * The key of a color variation. Currently supports `brightness` only.
     *
     * @type       {string}
     * @since      6.0.0
     * @product    highcharts
     * @validvalue ["brightness"]
     * @apioption  plotOptions.treemap.levels.colorVariation.key
     */
    /**
     * The ending value of a color variation. The last sibling will receive
     * this value.
     *
     * @type      {number}
     * @since     6.0.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.colorVariation.to
     */
    /**
     * Can set the options of dataLabels on each point which lies on the
     * level.
     * [plotOptions.treemap.dataLabels](#plotOptions.treemap.dataLabels) for
     * possible values.
     *
     * @extends   plotOptions.treemap.dataLabels
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.dataLabels
     */
    /**
     * Can set the layoutAlgorithm option on a specific level.
     *
     * @type       {string}
     * @since      4.1.0
     * @product    highcharts
     * @validvalue ["sliceAndDice", "stripes", "squarified", "strip"]
     * @apioption  plotOptions.treemap.levels.layoutAlgorithm
     */
    /**
     * Can set the layoutStartingDirection option on a specific level.
     *
     * @type       {string}
     * @since      4.1.0
     * @product    highcharts
     * @validvalue ["vertical", "horizontal"]
     * @apioption  plotOptions.treemap.levels.layoutStartingDirection
     */
    /**
     * Decides which level takes effect from the options set in the levels
     * object.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-levels/
     *         Styling of both levels
     *
     * @type      {number}
     * @since     4.1.0
     * @product   highcharts
     * @apioption plotOptions.treemap.levels.level
     */
    // Presentational options
    /**
     * The color of the border surrounding each tree map item.
     *
     * @type {Highcharts.ColorString}
     */
    borderColor: "#e6e6e6" /* Palette.neutralColor10 */,
    /**
     * The width of the border surrounding each tree map item.
     */
    borderWidth: 1,
    colorKey: 'colorValue',
    /**
     * The opacity of grouped points in treemap. When a point has children, the
     * group point is covering the children, and is given this opacity. The
     * visibility of the children is determined by the opacity.
     *
     * @since 4.2.4
     */
    opacity: 0.15,
    /**
     * A wrapper object for all the series options in specific states.
     *
     * @extends plotOptions.heatmap.states
     */
    states: {
        /**
         * Options for the hovered series
         *
         * @extends   plotOptions.heatmap.states.hover
         * @excluding halo
         */
        hover: {
            /**
             * The border color for the hovered state.
             */
            borderColor: "#999999" /* Palette.neutralColor40 */,
            /**
             * Brightness for the hovered point. Defaults to 0 if the
             * heatmap series is loaded first, otherwise 0.1.
             *
             * @type    {number}
             * @default undefined
             */
            brightness: (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.heatmap ? 0 : 0.1,
            /**
             * @extends plotOptions.heatmap.states.hover.halo
             */
            halo: false,
            /**
             * The opacity of a point in treemap. When a point has children,
             * the visibility of the children is determined by the opacity.
             *
             * @since 4.2.4
             */
            opacity: 0.75,
            /**
             * The shadow option for hovered state.
             */
            shadow: false
        }
    },
    legendSymbol: 'rectangle',
    /**
     * This option enables automatic traversing to the last child level upon
     * node interaction. This feature simplifies navigation by immediately
     * focusing on the deepest layer of the data structure without intermediate
     * steps.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-traverse-to-leaf/
     *         Traverse to leaf enabled
     *
     * @since   11.4.4
     *
     * @product highcharts
     */
    traverseToLeaf: false,
    /**
     * An option to optimize treemap series rendering by grouping smaller leaf
     * nodes below a certain square area threshold in pixels. If the square area
     * of a point becomes smaller than the specified threshold, determined by
     * the `pixelWidth` and/or `pixelHeight` options, then this point is moved
     * into one group point per series.
     *
     * @sample {highcharts} highcharts/plotoptions/treemap-grouping-simple
     *         Simple demo of Treemap grouping
     * @sample {highcharts} highcharts/plotoptions/treemap-grouping-multiple-parents
     *         Treemap grouping with multiple parents
     * @sample {highcharts} highcharts/plotoptions/treemap-grouping-advanced
     *         Advanced demo of Treemap grouping
     *
     * @since 12.1.0
     *
     * @excluding allowOverlap, animation, dataLabels, drillToCluster, events,
     * layoutAlgorithm, marker, states, zones
     *
     * @product highcharts
     */
    cluster: {
        /**
         * An additional, individual class name for the grouped point's graphic
         * representation.
         *
         * @type      string
         * @product   highcharts
         */
        className: void 0,
        /**
         * Individual color for the grouped point. By default the color is
         * pulled from the parent color.
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @product   highcharts
         */
        color: void 0,
        /**
         * Enable or disable Treemap grouping.
         *
         * @type {boolean}
         * @since 12.1.0
         * @product highcharts
         */
        enabled: false,
        /**
         * The pixel threshold width of area, which is used in Treemap grouping.
         *
         * @type {number}
         * @since 12.1.0
         * @product highcharts
         */
        pixelWidth: void 0,
        /**
         * The pixel threshold height of area, which is used in Treemap
         * grouping.
         *
         * @type {number}
         * @since 12.1.0
         * @product highcharts
         */
        pixelHeight: void 0,
        /**
         * The name of the point of grouped nodes shown in the tooltip,
         * dataLabels, etc. By default it is set to '+ n', where n is number of
         * grouped points.
         *
         * @type {string}
         * @since 12.1.0
         * @product highcharts
         */
        name: void 0,
        /**
         * A configuration property that specifies the factor by which the value
         * and size of a grouped node are reduced. This can be particularly
         * useful when a grouped node occupies a disproportionately large
         * portion of the graph, ensuring better visual balance and readability.
         *
         * @type {number}
         * @since 12.1.0
         * @product highcharts
         */
        reductionFactor: void 0,
        /**
         * Defines the minimum number of child nodes required to create a group
         * of small nodes.
         *
         * @type {number}
         * @since 12.1.0
         * @product highcharts
         */
        minimumClusterSize: 5,
        layoutAlgorithm: {
            distance: 0,
            gridSize: 0,
            kmeansThreshold: 0
        },
        marker: {
            lineWidth: 0,
            radius: 0
        }
    }
};
/**
 * A `treemap` series. If the [type](#series.treemap.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.treemap
 * @excluding dataParser, dataURL, stack, dataSorting
 * @product   highcharts
 * @requires  modules/treemap
 * @apioption series.treemap
 */
/**
 * An array of data points for the series. For the `treemap` series
 * type, points can be given in the following ways:
 *
 * 1. An array of numerical values. In this case, the numerical values will be
 *    interpreted as `value` options. Example:
 *    ```js
 *    data: [0, 5, 3, 5]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.treemap.turboThreshold),
 *    this option is not available.
 *    ```js
 *      data: [{
 *        value: 9,
 *        name: "Point2",
 *        color: "#00FF00"
 *      }, {
 *        value: 6,
 *        name: "Point1",
 *        color: "#FF00FF"
 *      }]
 *    ```
 *
 * @sample {highcharts} highcharts/chart/reflow-true/
 *         Numerical values
 * @sample {highcharts} highcharts/series/data-array-of-objects/
 *         Config objects
 *
 * @type      {Array<number|null|*>}
 * @extends   series.heatmap.data
 * @excluding x, y, pointPadding
 * @product   highcharts
 * @apioption series.treemap.data
 */
/**
 * The value of the point, resulting in a relative area of the point
 * in the treemap.
 *
 * @type      {number|null}
 * @product   highcharts
 * @apioption series.treemap.data.value
 */
/**
 * Serves a purpose only if a `colorAxis` object is defined in the chart
 * options. This value will decide which color the point gets from the
 * scale of the colorAxis.
 *
 * @type      {number}
 * @since     4.1.0
 * @product   highcharts
 * @apioption series.treemap.data.colorValue
 */
/**
 * Only for treemap. Use this option to build a tree structure. The
 * value should be the id of the point which is the parent. If no points
 * has a matching id, or this option is undefined, then the parent will
 * be set to the root.
 *
 * @sample {highcharts} highcharts/point/parent/
 *         Point parent
 * @sample {highcharts} highcharts/demo/treemap-with-levels/
 *         Example where parent id is not matching
 *
 * @type      {string}
 * @since     4.1.0
 * @product   highcharts
 * @apioption series.treemap.data.parent
 */
''; // Keeps doclets above detached
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treemap_TreemapSeriesDefaults = (TreemapSeriesDefaults);

;// ./code/es-modules/Series/Treemap/TreemapUtilities.js
/* *
 *
 *  (c) 2014-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Namespace
 *
 * */
var TreemapUtilities;
(function (TreemapUtilities) {
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
     * @todo find correct name for this function.
     * @todo Similar to reduce, this function is likely redundant
     */
    function recursive(item, func, context) {
        const next = func.call(context || this, item);
        if (next !== false) {
            recursive(next, func, context);
        }
    }
    TreemapUtilities.recursive = recursive;
})(TreemapUtilities || (TreemapUtilities = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treemap_TreemapUtilities = (TreemapUtilities);

;// ./code/es-modules/Series/TreeUtilities.js
/* *
 *
 *  (c) 2014-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { extend: TreeUtilities_extend, isArray, isNumber: TreeUtilities_isNumber, isObject, merge: TreeUtilities_merge, pick: TreeUtilities_pick, relativeLength } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/* eslint-disable valid-jsdoc */
/**
 * @private
 */
function getColor(node, options) {
    const index = options.index, mapOptionsToLevel = options.mapOptionsToLevel, parentColor = options.parentColor, parentColorIndex = options.parentColorIndex, series = options.series, colors = options.colors, siblings = options.siblings, points = series.points, chartOptionsChart = series.chart.options.chart;
    let getColorByPoint, point, level, colorByPoint, colorIndexByPoint, color, colorIndex;
    /**
     * @private
     */
    const variateColor = (color) => {
        const colorVariation = level && level.colorVariation;
        if (colorVariation &&
            colorVariation.key === 'brightness' &&
            index &&
            siblings) {
            return external_highcharts_src_js_default_Color_default().parse(color).brighten(colorVariation.to * (index / siblings)).get();
        }
        return color;
    };
    if (node) {
        point = points[node.i];
        level = mapOptionsToLevel[node.level] || {};
        getColorByPoint = point && level.colorByPoint;
        if (getColorByPoint) {
            colorIndexByPoint = point.index % (colors ?
                colors.length :
                chartOptionsChart.colorCount);
            colorByPoint = colors && colors[colorIndexByPoint];
        }
        // Select either point color, level color or inherited color.
        if (!series.chart.styledMode) {
            color = TreeUtilities_pick(point && point.options.color, level && level.color, colorByPoint, parentColor && variateColor(parentColor), series.color);
        }
        colorIndex = TreeUtilities_pick(point && point.options.colorIndex, level && level.colorIndex, colorIndexByPoint, parentColorIndex, options.colorIndex);
    }
    return {
        color: color,
        colorIndex: colorIndex
    };
}
/**
 * Creates a map from level number to its given options.
 *
 * @private
 *
 * @param {Object} params
 * Object containing parameters.
 * - `defaults` Object containing default options. The default options are
 *   merged with the userOptions to get the final options for a specific
 *   level.
 * - `from` The lowest level number.
 * - `levels` User options from series.levels.
 * - `to` The highest level number.
 *
 * @return {Highcharts.Dictionary<object>|null}
 * Returns a map from level number to its given options.
 */
function getLevelOptions(params) {
    const result = {};
    let defaults, converted, i, from, to, levels;
    if (isObject(params)) {
        from = TreeUtilities_isNumber(params.from) ? params.from : 1;
        levels = params.levels;
        converted = {};
        defaults = isObject(params.defaults) ? params.defaults : {};
        if (isArray(levels)) {
            converted = levels.reduce((obj, item) => {
                let level, levelIsConstant, options;
                if (isObject(item) && TreeUtilities_isNumber(item.level)) {
                    options = TreeUtilities_merge({}, item);
                    levelIsConstant = TreeUtilities_pick(options.levelIsConstant, defaults.levelIsConstant);
                    // Delete redundant properties.
                    delete options.levelIsConstant;
                    delete options.level;
                    // Calculate which level these options apply to.
                    level = item.level + (levelIsConstant ? 0 : from - 1);
                    if (isObject(obj[level])) {
                        TreeUtilities_merge(true, obj[level], options); // #16329
                    }
                    else {
                        obj[level] = options;
                    }
                }
                return obj;
            }, {});
        }
        to = TreeUtilities_isNumber(params.to) ? params.to : 1;
        for (i = 0; i <= to; i++) {
            result[i] = TreeUtilities_merge({}, defaults, isObject(converted[i]) ? converted[i] : {});
        }
    }
    return result;
}
/**
 * @private
 * @todo Combine buildTree and buildNode with setTreeValues
 * @todo Remove logic from Treemap and make it utilize this mixin.
 */
function setTreeValues(tree, options) {
    const before = options.before, idRoot = options.idRoot, mapIdToNode = options.mapIdToNode, nodeRoot = mapIdToNode[idRoot], levelIsConstant = (options.levelIsConstant !== false), points = options.points, point = points[tree.i], optionsPoint = point && point.options || {}, children = [];
    let childrenTotal = 0;
    tree.levelDynamic = tree.level - (levelIsConstant ? 0 : nodeRoot.level);
    tree.name = TreeUtilities_pick(point && point.name, '');
    tree.visible = (idRoot === tree.id ||
        options.visible === true);
    if (typeof before === 'function') {
        tree = before(tree, options);
    }
    // First give the children some values
    tree.children.forEach((child, i) => {
        const newOptions = TreeUtilities_extend({}, options);
        TreeUtilities_extend(newOptions, {
            index: i,
            siblings: tree.children.length,
            visible: tree.visible
        });
        child = setTreeValues(child, newOptions);
        children.push(child);
        if (child.visible) {
            childrenTotal += child.val;
        }
    });
    // Set the values
    const value = TreeUtilities_pick(optionsPoint.value, childrenTotal);
    tree.visible = value >= 0 && (childrenTotal > 0 || tree.visible);
    tree.children = children;
    tree.childrenTotal = childrenTotal;
    tree.isLeaf = tree.visible && !childrenTotal;
    tree.val = value;
    return tree;
}
/**
 * Update the rootId property on the series. Also makes sure that it is
 * accessible to exporting.
 *
 * @private
 *
 * @param {Object} series
 * The series to operate on.
 *
 * @return {string}
 * Returns the resulting rootId after update.
 */
function updateRootId(series) {
    let rootId, options;
    if (isObject(series)) {
        // Get the series options.
        options = isObject(series.options) ? series.options : {};
        // Calculate the rootId.
        rootId = TreeUtilities_pick(series.rootNode, options.rootId, '');
        // Set rootId on series.userOptions to pick it up in exporting.
        if (isObject(series.userOptions)) {
            series.userOptions.rootId = rootId;
        }
        // Set rootId on series to pick it up on next update.
        series.rootNode = rootId;
    }
    return rootId;
}
/**
 * Get the node width, which relies on the plot width and the nodeDistance
 * option.
 *
 * @private
 */
function getNodeWidth(series, columnCount) {
    const { chart, options } = series, { nodeDistance = 0, nodeWidth = 0 } = options, { plotSizeX = 1 } = chart;
    // Node width auto means they are evenly distributed along the width of
    // the plot area
    if (nodeWidth === 'auto') {
        if (typeof nodeDistance === 'string' && /%$/.test(nodeDistance)) {
            const fraction = parseFloat(nodeDistance) / 100, total = columnCount + fraction * (columnCount - 1);
            return plotSizeX / total;
        }
        const nDistance = Number(nodeDistance);
        return ((plotSizeX + nDistance) /
            (columnCount || 1)) - nDistance;
    }
    return relativeLength(nodeWidth, plotSizeX);
}
/* *
 *
 *  Default Export
 *
 * */
const TreeUtilities = {
    getColor,
    getLevelOptions,
    getNodeWidth,
    setTreeValues,
    updateRootId
};
/* harmony default export */ const Series_TreeUtilities = (TreeUtilities);

;// ./code/es-modules/Series/Treemap/TreemapSeries.js
/* *
 *
 *  (c) 2014-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard / Oystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { parse: color } = (external_highcharts_src_js_default_Color_default());


const { composed: TreemapSeries_composed, noop } = (external_highcharts_src_js_default_default());


const { column: ColumnSeries, scatter: ScatterSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;






const { getColor: TreemapSeries_getColor, getLevelOptions: TreemapSeries_getLevelOptions, updateRootId: TreemapSeries_updateRootId } = Series_TreeUtilities;

const { addEvent: TreemapSeries_addEvent, arrayMax, clamp, correctFloat, crisp, defined: TreemapSeries_defined, error, extend: TreemapSeries_extend, fireEvent: TreemapSeries_fireEvent, isArray: TreemapSeries_isArray, isNumber: TreemapSeries_isNumber, isObject: TreemapSeries_isObject, isString: TreemapSeries_isString, merge: TreemapSeries_merge, pick: TreemapSeries_pick, pushUnique: TreemapSeries_pushUnique, splat, stableSort } = (external_highcharts_src_js_default_default());
external_highcharts_src_js_default_Series_default().keepProps.push('simulation', 'hadOutsideDataLabels');
/* *
 *
 *  Constants
 *
 * */
const axisMax = 100;
/* *
 *
 *  Variables
 *
 * */
let treemapAxisDefaultValues = false;
/* *
 *
 *  Functions
 *
 * */
/** @private */
function onSeriesAfterBindAxes() {
    const series = this, xAxis = series.xAxis, yAxis = series.yAxis;
    if (xAxis && yAxis) {
        if (series.is('treemap')) {
            // Treemap and treegraph axes are used for the layout, but are
            // hidden by default.
            const treeAxisDefaults = {
                endOnTick: false,
                startOnTick: false,
                visible: false
            };
            // Treemap layout depends on specific scaling of both axes
            if (!series.is('treegraph')) {
                treeAxisDefaults.min = 0;
                treeAxisDefaults.max = axisMax;
                treeAxisDefaults.tickPositions = [];
            }
            TreemapSeries_merge(true, xAxis.options, treeAxisDefaults, xAxis.userOptions);
            TreemapSeries_merge(true, yAxis.options, treeAxisDefaults, yAxis.userOptions);
            // Set the propertys on the axis object
            xAxis.visible = xAxis.options.visible;
            yAxis.visible = yAxis.options.visible;
            // Set `isCartesian` conditionally. Because non-cartesian zoom won't
            // work if it is true, and the axis will not show if it is false.
            if (series.is('treegraph')) {
                this.isCartesian = xAxis.visible;
            }
            treemapAxisDefaultValues = true;
        }
        else if (treemapAxisDefaultValues) {
            yAxis.setOptions(yAxis.userOptions);
            xAxis.setOptions(xAxis.userOptions);
            treemapAxisDefaultValues = false;
        }
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.treemap
 *
 * @augments Highcharts.Series
 */
class TreemapSeries extends ScatterSeries {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.simulation = 0;
        /* eslint-enable valid-jsdoc */
    }
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass) {
        if (TreemapSeries_pushUnique(TreemapSeries_composed, 'TreemapSeries')) {
            TreemapSeries_addEvent(SeriesClass, 'afterBindAxes', onSeriesAfterBindAxes);
        }
    }
    /* *
     *
     *  Function
     *
     * */
    /* eslint-disable valid-jsdoc */
    algorithmCalcPoints(directionChange, last, group, childrenArea) {
        const plot = group.plot, end = group.elArr.length - 1;
        let pX, pY, pW, pH, gW = group.lW, gH = group.lH, keep, i = 0;
        if (last) {
            gW = group.nW;
            gH = group.nH;
        }
        else {
            keep = group.elArr[end];
        }
        for (const p of group.elArr) {
            if (last || (i < end)) {
                if (group.direction === 0) {
                    pX = plot.x;
                    pY = plot.y;
                    pW = gW;
                    pH = p / pW;
                }
                else {
                    pX = plot.x;
                    pY = plot.y;
                    pH = gH;
                    pW = p / pH;
                }
                childrenArea.push({
                    x: pX,
                    y: pY,
                    width: pW,
                    height: correctFloat(pH)
                });
                if (group.direction === 0) {
                    plot.y = plot.y + pH;
                }
                else {
                    plot.x = plot.x + pW;
                }
            }
            i = i + 1;
        }
        // Reset variables
        group.reset();
        if (group.direction === 0) {
            group.width = group.width - gW;
        }
        else {
            group.height = group.height - gH;
        }
        plot.y = plot.parent.y + (plot.parent.height - group.height);
        plot.x = plot.parent.x + (plot.parent.width - group.width);
        if (directionChange) {
            group.direction = 1 - group.direction;
        }
        // If not last, then add uncalculated element
        if (!last) {
            group.addElement(keep);
        }
    }
    algorithmFill(directionChange, parent, children) {
        const childrenArea = [];
        let pTot, direction = parent.direction, x = parent.x, y = parent.y, width = parent.width, height = parent.height, pX, pY, pW, pH;
        for (const child of children) {
            pTot =
                (parent.width * parent.height) * (child.val / parent.val);
            pX = x;
            pY = y;
            if (direction === 0) {
                pH = height;
                pW = pTot / pH;
                width = width - pW;
                x = x + pW;
            }
            else {
                pW = width;
                pH = pTot / pW;
                height = height - pH;
                y = y + pH;
            }
            childrenArea.push({
                x: pX,
                y: pY,
                width: pW,
                height: pH,
                direction: 0,
                val: 0
            });
            if (directionChange) {
                direction = 1 - direction;
            }
        }
        return childrenArea;
    }
    algorithmLowAspectRatio(directionChange, parent, children) {
        const series = this, childrenArea = [], plot = {
            x: parent.x,
            y: parent.y,
            parent: parent
        }, direction = parent.direction, end = children.length - 1, group = new Treemap_TreemapAlgorithmGroup(parent.height, parent.width, direction, plot);
        let pTot, i = 0;
        // Loop through and calculate all areas
        for (const child of children) {
            pTot =
                (parent.width * parent.height) * (child.val / parent.val);
            group.addElement(pTot);
            if (group.lP.nR > group.lP.lR) {
                series.algorithmCalcPoints(directionChange, false, group, childrenArea, plot // @todo no supported
                );
            }
            // If last child, then calculate all remaining areas
            if (i === end) {
                series.algorithmCalcPoints(directionChange, true, group, childrenArea, plot // @todo not supported
                );
            }
            ++i;
        }
        return childrenArea;
    }
    /**
     * Over the alignment method by setting z index.
     * @private
     */
    alignDataLabel(point, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataLabel, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    labelOptions) {
        ColumnSeries.prototype.alignDataLabel.apply(this, arguments);
        if (point.dataLabel) {
            // `point.node.zIndex` could be undefined (#6956)
            point.dataLabel.attr({ zIndex: (point.node.zIndex || 0) + 1 });
        }
    }
    applyTreeGrouping() {
        const series = this, parentList = series.parentList || {}, { cluster } = series.options, minimumClusterSize = cluster?.minimumClusterSize || 5;
        if (cluster?.enabled) {
            const parentGroups = {};
            const checkIfHide = (node) => {
                if (node?.point?.shapeArgs) {
                    const { width = 0, height = 0 } = node.point.shapeArgs, area = width * height;
                    const { pixelWidth = 0, pixelHeight = 0 } = cluster, compareHeight = TreemapSeries_defined(pixelHeight), thresholdArea = pixelHeight ?
                        pixelWidth * pixelHeight :
                        pixelWidth * pixelWidth;
                    if (width < pixelWidth ||
                        height < (compareHeight ? pixelHeight : pixelWidth) ||
                        area < thresholdArea) {
                        if (!node.isGroup && TreemapSeries_defined(node.parent)) {
                            if (!parentGroups[node.parent]) {
                                parentGroups[node.parent] = [];
                            }
                            parentGroups[node.parent].push(node);
                        }
                    }
                }
                node?.children.forEach((child) => {
                    checkIfHide(child);
                });
            };
            checkIfHide(series.tree);
            for (const parent in parentGroups) {
                if (parentGroups[parent]) {
                    if (parentGroups[parent].length > minimumClusterSize) {
                        parentGroups[parent].forEach((node) => {
                            const index = parentList[parent].indexOf(node.i);
                            if (index !== -1) {
                                parentList[parent].splice(index, 1);
                                const id = `highcharts-grouped-treemap-points-${node.parent || 'root'}`;
                                let groupPoint = series.points
                                    .find((p) => p.id === id);
                                if (!groupPoint) {
                                    const PointClass = series.pointClass, pointIndex = series.points.length;
                                    groupPoint = new PointClass(series, {
                                        className: cluster.className,
                                        color: cluster.color,
                                        id,
                                        index: pointIndex,
                                        isGroup: true,
                                        value: 0
                                    });
                                    TreemapSeries_extend(groupPoint, {
                                        formatPrefix: 'cluster'
                                    });
                                    series.points.push(groupPoint);
                                    parentList[parent].push(pointIndex);
                                    parentList[id] = [];
                                }
                                const amount = groupPoint.groupedPointsAmount + 1, val = series.points[groupPoint.index]
                                    .options.value || 0, name = cluster.name ||
                                    `+ ${amount}`;
                                // Update the point directly in points array to
                                // prevent wrong instance update
                                series.points[groupPoint.index]
                                    .groupedPointsAmount = amount;
                                series.points[groupPoint.index].options.value =
                                    val + (node.point.value || 0);
                                series.points[groupPoint.index].name = name;
                                parentList[id].push(node.point.index);
                            }
                        });
                    }
                }
            }
            series.nodeMap = {};
            series.nodeList = [];
            series.parentList = parentList;
            const tree = series.buildTree('', -1, 0, series.parentList);
            series.translate(tree);
        }
    }
    /**
     * Recursive function which calculates the area for all children of a
     * node.
     *
     * @private
     * @function Highcharts.Series#calculateChildrenAreas
     *
     * @param {Object} parent
     * The node which is parent to the children.
     *
     * @param {Object} area
     * The rectangular area of the parent.
     */
    calculateChildrenAreas(parent, area) {
        const series = this, options = series.options, mapOptionsToLevel = series.mapOptionsToLevel, level = mapOptionsToLevel[parent.level + 1], algorithm = TreemapSeries_pick((level?.layoutAlgorithm &&
            series[level?.layoutAlgorithm] &&
            level.layoutAlgorithm), options.layoutAlgorithm), alternate = options.alternateStartingDirection, 
        // Collect all children which should be included
        children = parent.children.filter((n) => parent.isGroup || !n.ignore), groupPadding = level?.groupPadding ?? options.groupPadding ?? 0, rootNode = series.nodeMap[series.rootNode];
        if (!algorithm) {
            return;
        }
        let childrenValues = [], axisWidth = rootNode.pointValues?.width || 0, axisHeight = rootNode.pointValues?.height || 0;
        if (level?.layoutStartingDirection) {
            area.direction = level.layoutStartingDirection === 'vertical' ?
                0 :
                1;
        }
        childrenValues = series[algorithm](area, children);
        let i = -1;
        for (const child of children) {
            const values = childrenValues[++i];
            if (child === rootNode) {
                axisWidth = axisWidth || values.width;
                axisHeight = values.height;
            }
            const groupPaddingXValues = groupPadding / (series.xAxis.len / axisHeight), groupPaddingYValues = groupPadding / (series.yAxis.len / axisHeight);
            child.values = TreemapSeries_merge(values, {
                val: child.childrenTotal,
                direction: (alternate ? 1 - area.direction : area.direction)
            });
            // Make room for outside data labels
            if (child.children.length &&
                child.point.dataLabels?.length) {
                const dlHeight = arrayMax(child.point.dataLabels.map((dl) => dl.options
                    ?.headers && dl.height || 0)) / (series.yAxis.len / axisHeight);
                // Make room for data label unless the group is too small
                if (dlHeight < child.values.height / 2) {
                    child.values.y += dlHeight;
                    child.values.height -= dlHeight;
                }
            }
            if (groupPadding) {
                const xPad = Math.min(groupPaddingXValues, child.values.width / 4), yPad = Math.min(groupPaddingYValues, child.values.height / 4);
                child.values.x += xPad;
                child.values.width -= 2 * xPad;
                child.values.y += yPad;
                child.values.height -= 2 * yPad;
            }
            child.pointValues = TreemapSeries_merge(values, {
                x: (values.x / series.axisRatio),
                // Flip y-values to avoid visual regression with csvCoord in
                // Axis.translate at setPointValues. #12488
                y: axisMax - values.y - values.height,
                width: (values.width / series.axisRatio)
            });
            // If node has children, then call method recursively
            if (child.children.length) {
                series.calculateChildrenAreas(child, child.values);
            }
        }
        const getChildrenRecursive = (node, result = [], getLeaves = true) => {
            node.children.forEach((child) => {
                if (getLeaves && child.isLeaf) {
                    result.push(child.point);
                }
                else if (!getLeaves && !child.isLeaf) {
                    result.push(child.point);
                }
                if (child.children.length) {
                    getChildrenRecursive(child, result, getLeaves);
                }
            });
            return result;
        };
        // Experimental block to make space for the outside data labels
        if (options.nodeSizeBy === 'leaf' &&
            parent === rootNode &&
            this.hasOutsideDataLabels &&
            // Sizing by leaf value is not possible if any of the groups have
            // explicit values
            !getChildrenRecursive(rootNode, void 0, false)
                .some((point) => TreemapSeries_isNumber(point.options.value)) &&
            !TreemapSeries_isNumber(rootNode.point?.options.value)) {
            const leaves = getChildrenRecursive(rootNode), values = leaves.map((point) => point.options.value || 0), 
            // Areas in terms of axis units squared
            areas = leaves.map(({ node: { pointValues } }) => (pointValues ?
                pointValues.width * pointValues.height :
                0)), valueSum = values.reduce((sum, value) => sum + value, 0), areaSum = areas.reduce((sum, value) => sum + value, 0), expectedAreaPerValue = areaSum / valueSum;
            let minMiss = 0, maxMiss = 0;
            leaves.forEach((point, i) => {
                const areaPerValue = values[i] ? (areas[i] / values[i]) : 1, 
                // Less than 1 => rendered too small, greater than 1 =>
                // rendered too big
                fit = clamp(areaPerValue / expectedAreaPerValue, 0.8, 1.4);
                let miss = 1 - fit;
                if (point.value) {
                    // Very small areas are more sensitive, and matter less to
                    // the visual impression. Give them less weight.
                    if (areas[i] < 20) {
                        miss *= areas[i] / 20;
                    }
                    if (miss > maxMiss) {
                        maxMiss = miss;
                    }
                    if (miss < minMiss) {
                        minMiss = miss;
                    }
                    point.simulatedValue = (point.simulatedValue || point.value) / fit;
                }
            });
            /* /
            console.log('--- simulation',
                this.simulation,
                'worstMiss',
                minMiss,
                maxMiss
            );
            // */
            if (
            // An area error less than 5% is acceptable, the human ability
            // to assess area size is not that accurate
            (minMiss < -0.05 || maxMiss > 0.05) &&
                // In case an eternal loop is brewing, pull the emergency brake
                this.simulation < 10) {
                this.simulation++;
                this.setTreeValues(parent);
                area.val = parent.val;
                this.calculateChildrenAreas(parent, area);
                // Simulation is settled, proceed to rendering. Reset the simulated
                // values and set the tree values with real data.
            }
            else {
                leaves.forEach((point) => {
                    delete point.simulatedValue;
                });
                this.setTreeValues(parent);
                this.simulation = 0;
            }
        }
    }
    /**
     * Create level list.
     * @private
     */
    createList(e) {
        const chart = this.chart, breadcrumbs = chart.breadcrumbs, list = [];
        if (breadcrumbs) {
            let currentLevelNumber = 0;
            list.push({
                level: currentLevelNumber,
                levelOptions: chart.series[0]
            });
            let node = e.target.nodeMap[e.newRootId];
            const extraNodes = [];
            // When the root node is set and has parent,
            // recreate the path from the node tree.
            while (node.parent || node.parent === '') {
                extraNodes.push(node);
                node = e.target.nodeMap[node.parent];
            }
            for (const node of extraNodes.reverse()) {
                list.push({
                    level: ++currentLevelNumber,
                    levelOptions: node
                });
            }
            // If the list has only first element, we should clear it
            if (list.length <= 1) {
                list.length = 0;
            }
        }
        return list;
    }
    /**
     * Extend drawDataLabels with logic to handle custom options related to
     * the treemap series:
     *
     * - Points which is not a leaf node, has dataLabels disabled by
     *   default.
     *
     * - Options set on series.levels is merged in.
     *
     * - Width of the dataLabel is set to match the width of the point
     *   shape.
     *
     * @private
     */
    drawDataLabels() {
        const series = this, mapOptionsToLevel = series.mapOptionsToLevel, points = series.points.filter(function (n) {
            return n.node.visible || TreemapSeries_defined(n.dataLabel);
        }), padding = splat(series.options.dataLabels || {})[0]?.padding, positionsAreSet = points.some((p) => TreemapSeries_isNumber(p.plotY));
        for (const point of points) {
            const style = {}, 
            // Set options to new object to avoid problems with scope
            options = { style }, level = mapOptionsToLevel[point.node.level];
            // If not a leaf, then label should be disabled as default
            if (!point.node.isLeaf &&
                !point.node.isGroup ||
                (point.node.isGroup &&
                    point.node.level <= series.nodeMap[series.rootNode].level)) {
                options.enabled = false;
            }
            // If options for level exists, include them as well
            if (level?.dataLabels) {
                TreemapSeries_merge(true, options, splat(level.dataLabels)[0]);
                series.hasDataLabels = () => true;
            }
            // Headers are always top-aligned. Leaf nodes no not support
            // headers.
            if (point.node.isLeaf) {
                options.inside = true;
            }
            else if (options.headers) {
                options.verticalAlign = 'top';
            }
            // Set dataLabel width to the width of the point shape minus the
            // padding
            if (point.shapeArgs && positionsAreSet) {
                const { height = 0, width = 0 } = point.shapeArgs;
                if (width > 32 && height > 16 && point.shouldDraw()) {
                    const dataLabelWidth = width -
                        2 * (options.padding || padding || 0);
                    style.width = `${dataLabelWidth}px`;
                    style.lineClamp ?? (style.lineClamp = Math.floor(height / 16));
                    style.visibility = 'inherit';
                    // Make the label box itself fill the width
                    if (options.headers) {
                        point.dataLabel?.attr({
                            width: dataLabelWidth
                        });
                    }
                    // Hide labels for shapes that are too small
                }
                else {
                    style.width = `${width}px`;
                    style.visibility = 'hidden';
                }
            }
            // Merge custom options with point options
            point.dlOptions = TreemapSeries_merge(options, point.options.dataLabels, {
                zIndex: void 0
            });
        }
        super.drawDataLabels(points);
    }
    /**
     * Override drawPoints
     * @private
     */
    drawPoints(points = this.points) {
        const series = this, chart = series.chart, renderer = chart.renderer, styledMode = chart.styledMode, options = series.options, shadow = styledMode ? {} : options.shadow, borderRadius = options.borderRadius, withinAnimationLimit = chart.pointCount < options.animationLimit, allowTraversingTree = options.allowTraversingTree;
        for (const point of points) {
            const animatableAttribs = {}, attribs = {}, css = {}, groupKey = 'level-group-' + point.node.level, hasGraphic = !!point.graphic, shouldAnimate = withinAnimationLimit && hasGraphic, shapeArgs = point.shapeArgs;
            // Don't bother with calculate styling if the point is not drawn
            if (point.shouldDraw()) {
                point.isInside = true;
                if (borderRadius) {
                    attribs.r = borderRadius;
                }
                TreemapSeries_merge(true, // Extend object
                // Which object to extend
                shouldAnimate ? animatableAttribs : attribs, 
                // Add shapeArgs to animate/attr if graphic exists
                hasGraphic ? shapeArgs : {}, 
                // Add style attribs if !styleMode
                styledMode ?
                    {} :
                    series.pointAttribs(point, point.selected ? 'select' : void 0));
                // In styled mode apply point.color. Use CSS, otherwise the
                // fill used in the style sheet will take precedence over
                // the fill attribute.
                if (series.colorAttribs && styledMode) {
                    // Heatmap is loaded
                    TreemapSeries_extend(css, series.colorAttribs(point));
                }
                if (!series[groupKey]) {
                    series[groupKey] = renderer.g(groupKey)
                        .attr({
                        // Use the static level in order to retain z-index
                        // when data is updated (#23432).
                        zIndex: -(point.node.level || 0)
                    })
                        .add(series.group);
                    series[groupKey].survive = true;
                }
            }
            // Draw the point
            point.draw({
                animatableAttribs,
                attribs,
                css,
                group: series[groupKey],
                imageUrl: point.imageUrl,
                renderer,
                shadow,
                shapeArgs,
                shapeType: point.shapeType
            });
            // If setRootNode is allowed, set a point cursor on clickables &
            // add drillId to point
            if (allowTraversingTree && point.graphic) {
                point.drillId = options.interactByLeaf ?
                    series.drillToByLeaf(point) :
                    series.drillToByGroup(point);
            }
        }
    }
    /**
     * Finds the drill id for a parent node. Returns false if point should
     * not have a click event.
     * @private
     */
    drillToByGroup(point) {
        return (!point.node.isLeaf || point.node.isGroup) ?
            point.id : false;
    }
    /**
     * Finds the drill id for a leaf node. Returns false if point should not
     * have a click event
     * @private
     */
    drillToByLeaf(point) {
        const { traverseToLeaf } = point.series.options;
        let drillId = false, nodeParent;
        if ((point.node.parent !== this.rootNode) &&
            point.node.isLeaf) {
            if (traverseToLeaf) {
                drillId = point.id;
            }
            else {
                nodeParent = point.node;
                while (!drillId) {
                    if (typeof nodeParent.parent !== 'undefined') {
                        nodeParent = this.nodeMap[nodeParent.parent];
                    }
                    if (nodeParent.parent === this.rootNode) {
                        drillId = nodeParent.id;
                    }
                }
            }
        }
        return drillId;
    }
    /**
     * @todo remove this function at a suitable version.
     * @private
     */
    drillToNode(id, redraw) {
        error(32, false, void 0, { 'treemap.drillToNode': 'use treemap.setRootNode' });
        this.setRootNode(id, redraw);
    }
    drillUp() {
        const series = this, node = series.nodeMap[series.rootNode];
        if (node && TreemapSeries_isString(node.parent)) {
            series.setRootNode(node.parent, true, { trigger: 'traverseUpButton' });
        }
    }
    getExtremes() {
        // Get the extremes from the value data
        const { dataMin, dataMax } = super.getExtremes(this.colorValueData);
        this.valueMin = dataMin;
        this.valueMax = dataMax;
        // Get the extremes from the y data
        return super.getExtremes();
    }
    /**
     * Creates an object map from parent id to childrens index.
     *
     * @private
     * @function Highcharts.Series#getListOfParents
     *
     * @param {Highcharts.SeriesTreemapDataOptions} [data]
     *        List of points set in options.
     *
     * @param {Array<string>} [existingIds]
     *        List of all point ids.
     *
     * @return {Object}
     *         Map from parent id to children index in data.
     */
    getListOfParents(data, existingIds) {
        const arr = TreemapSeries_isArray(data) ? data : [], ids = TreemapSeries_isArray(existingIds) ? existingIds : [], listOfParents = arr.reduce(function (prev, curr, i) {
            const parent = TreemapSeries_pick(curr.parent, '');
            if (typeof prev[parent] === 'undefined') {
                prev[parent] = [];
            }
            prev[parent].push(i);
            return prev;
        }, {
            '': [] // Root of tree
        });
        // If parent does not exist, hoist parent to root of tree.
        for (const parent of Object.keys(listOfParents)) {
            const children = listOfParents[parent];
            if ((parent !== '') && (ids.indexOf(parent) === -1)) {
                for (const child of children) {
                    listOfParents[''].push(child);
                }
                delete listOfParents[parent];
            }
        }
        return listOfParents;
    }
    /**
     * Creates a tree structured object from the series points.
     * @private
     */
    getTree() {
        const series = this, allIds = this.data.map(function (d) {
            return d.id;
        });
        series.parentList = series.getListOfParents(this.data, allIds);
        series.nodeMap = {};
        series.nodeList = [];
        return series.buildTree('', -1, 0, series.parentList || {});
    }
    buildTree(id, index, level, list, parent) {
        const series = this, children = [], point = series.points[index];
        let height = 0, child;
        // Actions
        for (const i of (list[id] || [])) {
            child = series.buildTree(series.points[i].id, i, level + 1, list, id);
            height = Math.max(child.height + 1, height);
            children.push(child);
            if (series.is('treegraph')) {
                child.visible = true;
            }
        }
        const node = new series.NodeClass().init(id, index, children, height, level, series, parent);
        for (const child of children) {
            child.parentNode = node;
        }
        series.nodeMap[node.id] = node;
        series.nodeList.push(node);
        if (point) {
            point.node = node;
            node.point = point;
            // Handle x-axis value for treegraph
            if (!TreemapSeries_defined(point.options.x)) {
                point.x = level;
            }
        }
        return node;
    }
    /**
     * Define hasData function for non-cartesian series. Returns true if the
     * series has points at all.
     * @private
     */
    hasData() {
        return !!this.dataTable.rowCount;
    }
    init(chart, options) {
        const series = this, breadcrumbsOptions = TreemapSeries_merge(options.drillUpButton, options.breadcrumbs), setOptionsEvent = TreemapSeries_addEvent(series, 'setOptions', (event) => {
            const options = event.userOptions;
            // Deprecated options
            if (TreemapSeries_defined(options.allowDrillToNode) &&
                !TreemapSeries_defined(options.allowTraversingTree)) {
                options.allowTraversingTree = options.allowDrillToNode;
                delete options.allowDrillToNode;
            }
            if (TreemapSeries_defined(options.drillUpButton) &&
                !TreemapSeries_defined(options.traverseUpButton)) {
                options.traverseUpButton = options.drillUpButton;
                delete options.drillUpButton;
            }
            // Check if we need to reserve space for headers
            const dataLabels = splat(options.dataLabels || {});
            options.levels?.forEach((level) => {
                dataLabels.push.apply(dataLabels, splat(level.dataLabels || {}));
            });
            this.hasOutsideDataLabels = dataLabels.some((dl) => dl.headers);
        });
        super.init(chart, options);
        // Treemap's opacity is a different option from other series
        delete series.opacity;
        // Handle deprecated options.
        series.eventsToUnbind.push(setOptionsEvent);
        if (series.options.allowTraversingTree) {
            series.eventsToUnbind.push(TreemapSeries_addEvent(series, 'click', series.onClickDrillToNode));
            series.eventsToUnbind.push(TreemapSeries_addEvent(series, 'setRootNode', function (e) {
                const chart = series.chart;
                if (chart.breadcrumbs) {
                    // Create a list using the event after drilldown.
                    chart.breadcrumbs.updateProperties(series.createList(e));
                }
            }));
            series.eventsToUnbind.push(TreemapSeries_addEvent(series, 'update', 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            function (e, redraw) {
                const breadcrumbs = this.chart.breadcrumbs;
                if (breadcrumbs && e.options.breadcrumbs) {
                    breadcrumbs.update(e.options.breadcrumbs);
                }
                this.hadOutsideDataLabels = this.hasOutsideDataLabels;
            }));
            series.eventsToUnbind.push(TreemapSeries_addEvent(series, 'destroy', function destroyEvents(e) {
                const chart = this.chart;
                if (chart.breadcrumbs && !e.keepEventsForUpdate) {
                    chart.breadcrumbs.destroy();
                    chart.breadcrumbs = void 0;
                }
            }));
        }
        if (!chart.breadcrumbs) {
            chart.breadcrumbs = new Breadcrumbs_Breadcrumbs(chart, breadcrumbsOptions);
        }
        series.eventsToUnbind.push(TreemapSeries_addEvent(chart.breadcrumbs, 'up', function (e) {
            const drillUpsNumber = this.level - e.newLevel;
            for (let i = 0; i < drillUpsNumber; i++) {
                series.drillUp();
            }
        }));
    }
    /**
     * Add drilling on the suitable points.
     * @private
     */
    onClickDrillToNode(event) {
        const series = this, point = event.point, drillId = point?.drillId;
        // If a drill id is returned, add click event and cursor.
        if (TreemapSeries_isString(drillId)) {
            point.setState(''); // Remove hover
            series.setRootNode(drillId, true, { trigger: 'click' });
        }
    }
    /**
     * Get presentational attributes
     * @private
     */
    pointAttribs(point, state) {
        const series = this, mapOptionsToLevel = (TreemapSeries_isObject(series.mapOptionsToLevel) ?
            series.mapOptionsToLevel :
            {}), level = point && mapOptionsToLevel[point.node.level] || {}, options = this.options, stateOptions = state && options.states && options.states[state] || {}, className = point?.getClassName() || '', 
        // Set attributes by precedence. Point trumps level trumps series.
        // Stroke width uses pick because it can be 0.
        attr = {
            'stroke': (point && point.borderColor) ||
                level.borderColor ||
                stateOptions.borderColor ||
                options.borderColor,
            'stroke-width': TreemapSeries_pick(point && point.borderWidth, level.borderWidth, stateOptions.borderWidth, options.borderWidth),
            'dashstyle': point?.borderDashStyle ||
                level.borderDashStyle ||
                stateOptions.borderDashStyle ||
                options.borderDashStyle,
            'fill': point?.color || this.color
        };
        // Hide levels above the current view
        if (className.indexOf('highcharts-above-level') !== -1) {
            attr.fill = 'none';
            attr['stroke-width'] = 0;
            // Nodes with children that accept interaction
        }
        else if (className.indexOf('highcharts-internal-node-interactive') !== -1) {
            attr['fill-opacity'] = stateOptions.opacity ?? options.opacity ?? 1;
            attr.cursor = 'pointer';
            // Hide nodes that have children
        }
        else if (className.indexOf('highcharts-internal-node') !== -1) {
            attr.fill = 'none';
        }
        else if (state && stateOptions.brightness) {
            // Brighten and hoist the hover nodes
            attr.fill = color(attr.fill)
                .brighten(stateOptions.brightness)
                .get();
        }
        return attr;
    }
    /**
     * Set the node's color recursively, from the parent down.
     * @private
     */
    setColorRecursive(node, parentColor, colorIndex, index, siblings) {
        const series = this, chart = series?.chart, colors = chart?.options?.colors;
        if (node) {
            const colorInfo = TreemapSeries_getColor(node, {
                colors: colors,
                index: index,
                mapOptionsToLevel: series.mapOptionsToLevel,
                parentColor: parentColor,
                parentColorIndex: colorIndex,
                series: series,
                siblings: siblings
            }), point = series.points[node.i];
            if (point) {
                point.color = colorInfo.color;
                point.colorIndex = colorInfo.colorIndex;
            }
            let i = -1;
            // Do it all again with the children
            for (const child of (node.children || [])) {
                series.setColorRecursive(child, colorInfo.color, colorInfo.colorIndex, ++i, node.children.length);
            }
        }
    }
    setPointValues() {
        const series = this;
        const { points, xAxis, yAxis } = series;
        const styledMode = series.chart.styledMode;
        // Get the crisp correction in classic mode. For this to work in
        // styled mode, we would need to first add the shape (without x,
        // y, width and height), then read the rendered stroke width
        // using point.graphic.strokeWidth(), then modify and apply the
        // shapeArgs. This applies also to column series, but the
        // downside is performance and code complexity.
        const getStrokeWidth = (point) => (styledMode ?
            0 :
            (series.pointAttribs(point)['stroke-width'] || 0));
        for (const point of points) {
            const { pointValues: values, visible } = point.node;
            // Points which is ignored, have no values.
            if (values && visible) {
                const { height, width, x, y } = values, strokeWidth = getStrokeWidth(point), xValue = xAxis.toPixels(x, true), x2Value = xAxis.toPixels(x + width, true), yValue = yAxis.toPixels(y, true), y2Value = yAxis.toPixels(y + height, true), 
                // If the edge of a rectangle is on the edge, make sure it
                // stays within the plot area by adding or substracting half
                // of the stroke width.
                x1 = xValue === 0 ?
                    strokeWidth / 2 :
                    crisp(xAxis.toPixels(x, true), strokeWidth, true), x2 = x2Value === xAxis.len ?
                    xAxis.len - strokeWidth / 2 :
                    crisp(xAxis.toPixels(x + width, true), strokeWidth, true), y1 = yValue === yAxis.len ?
                    yAxis.len - strokeWidth / 2 :
                    crisp(yAxis.toPixels(y, true), strokeWidth, true), y2 = y2Value === 0 ?
                    strokeWidth / 2 :
                    crisp(yAxis.toPixels(y + height, true), strokeWidth, true);
                // Set point values
                const shapeArgs = {
                    x: Math.min(x1, x2),
                    y: Math.min(y1, y2),
                    width: Math.abs(x2 - x1),
                    height: Math.abs(y2 - y1)
                };
                point.plotX = shapeArgs.x + (shapeArgs.width / 2);
                point.plotY = shapeArgs.y + (shapeArgs.height / 2);
                point.shapeArgs = shapeArgs;
            }
            else {
                // Reset visibility
                delete point.plotX;
                delete point.plotY;
            }
        }
    }
    /**
     * Sets a new root node for the series.
     *
     * @private
     * @function Highcharts.Series#setRootNode
     *
     * @param {string} id
     * The id of the new root node.
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart or not.
     *
     * @param {Object} [eventArguments]
     * Arguments to be accessed in event handler.
     *
     * @param {string} [eventArguments.newRootId]
     * Id of the new root.
     *
     * @param {string} [eventArguments.previousRootId]
     * Id of the previous root.
     *
     * @param {boolean} [eventArguments.redraw]
     * Whether to redraw the chart after.
     *
     * @param {Object} [eventArguments.series]
     * The series to update the root of.
     *
     * @param {string} [eventArguments.trigger]
     * The action which triggered the event. Undefined if the setRootNode is
     * called directly.
     *
     * @emits Highcharts.Series#event:setRootNode
     */
    setRootNode(id, redraw, eventArguments) {
        const series = this, eventArgs = TreemapSeries_extend({
            newRootId: id,
            previousRootId: series.rootNode,
            redraw: TreemapSeries_pick(redraw, true),
            series: series
        }, eventArguments);
        /**
         * The default functionality of the setRootNode event.
         *
         * @private
         * @param {Object} args The event arguments.
         * @param {string} args.newRootId Id of the new root.
         * @param {string} args.previousRootId Id of the previous root.
         * @param {boolean} args.redraw Whether to redraw the chart after.
         * @param {Object} args.series The series to update the root of.
         * @param {string} [args.trigger=undefined] The action which
         * triggered the event. Undefined if the setRootNode is called
         * directly.
             */
        const defaultFn = function (args) {
            const series = args.series;
            // Store previous and new root ids on the series.
            series.idPreviousRoot = args.previousRootId;
            series.rootNode = args.newRootId;
            // Redraw the chart
            series.isDirty = true; // Force redraw
            if (args.redraw) {
                series.chart.redraw();
            }
        };
        // Fire setRootNode event.
        TreemapSeries_fireEvent(series, 'setRootNode', eventArgs, defaultFn);
    }
    /**
     * Workaround for `inactive` state. Since `series.opacity` option is
     * already reserved, don't use that state at all by disabling
     * `inactiveOtherPoints` and not inheriting states by points.
     * @private
     */
    setState(state) {
        this.options.inactiveOtherPoints = true;
        super.setState(state, false);
        this.options.inactiveOtherPoints = false;
    }
    setTreeValues(tree) {
        const series = this, options = series.options, idRoot = series.rootNode, mapIdToNode = series.nodeMap, nodeRoot = mapIdToNode[idRoot], levelIsConstant = (typeof options.levelIsConstant === 'boolean' ?
            options.levelIsConstant :
            true), children = [], point = series.points[tree.i];
        // First give the children some values
        let childrenTotal = 0;
        for (let child of tree.children) {
            child = series.setTreeValues(child);
            children.push(child);
            if (!child.ignore) {
                childrenTotal += child.val;
            }
        }
        // Sort the children
        stableSort(children, (a, b) => ((a.sortIndex || 0) - (b.sortIndex || 0)));
        // Set the values
        let val = TreemapSeries_pick(point?.simulatedValue, point?.options.value, childrenTotal);
        if (point) {
            point.value = val;
        }
        if (point?.isGroup && options.cluster?.reductionFactor) {
            val /= options.cluster.reductionFactor;
        }
        if (tree.parentNode?.point?.isGroup && series.rootNode !== tree.parent) {
            tree.visible = false;
        }
        TreemapSeries_extend(tree, {
            children: children,
            childrenTotal: childrenTotal,
            // Ignore this node if point is not visible
            ignore: !(TreemapSeries_pick(point?.visible, true) && (val > 0)),
            isLeaf: tree.visible && !(series.type === 'treegraph' ?
                children.length > 0 :
                childrenTotal),
            isGroup: point?.isGroup,
            levelDynamic: (tree.level - (levelIsConstant ? 0 : nodeRoot.level)),
            name: TreemapSeries_pick(point?.name, ''),
            sortIndex: TreemapSeries_pick(point?.sortIndex, -val),
            val: val
        });
        return tree;
    }
    sliceAndDice(parent, children) {
        return this.algorithmFill(true, parent, children);
    }
    squarified(parent, children) {
        return this.algorithmLowAspectRatio(true, parent, children);
    }
    strip(parent, children) {
        return this.algorithmLowAspectRatio(false, parent, children);
    }
    stripes(parent, children) {
        return this.algorithmFill(false, parent, children);
    }
    translate(tree) {
        const series = this, options = series.options, applyGrouping = !tree;
        let // NOTE: updateRootId modifies series.
        rootId = TreemapSeries_updateRootId(series), rootNode, pointValues, seriesArea, val;
        if (!tree && !rootId.startsWith('highcharts-grouped-treemap-points-')) {
            // Group points are removed, but not destroyed during generatePoints
            (this.points || []).forEach((point) => {
                if (point.isGroup) {
                    point.destroy();
                }
            });
            // Call prototype function
            super.translate();
            // @todo Only if series.isDirtyData is true
            tree = series.getTree();
        }
        // Ensure `tree` and `series.tree` are synchronized
        series.tree = tree = tree || series.tree;
        rootNode = series.nodeMap[rootId];
        if (rootId !== '' && !rootNode) {
            series.setRootNode('', false);
            rootId = series.rootNode;
            rootNode = series.nodeMap[rootId];
        }
        if (!rootNode.point?.isGroup) {
            series.mapOptionsToLevel = TreemapSeries_getLevelOptions({
                from: rootNode.level + 1,
                levels: options.levels,
                to: tree.height,
                defaults: {
                    levelIsConstant: series.options.levelIsConstant,
                    colorByPoint: options.colorByPoint
                }
            });
        }
        // Parents of the root node is by default visible
        Treemap_TreemapUtilities.recursive(series.nodeMap[series.rootNode], (node) => {
            const p = node.parent;
            let next = false;
            node.visible = true;
            if (p || p === '') {
                next = series.nodeMap[p];
            }
            return next;
        });
        // Children of the root node is by default visible
        Treemap_TreemapUtilities.recursive(series.nodeMap[series.rootNode].children, (children) => {
            let next = false;
            for (const child of children) {
                child.visible = true;
                if (child.children.length) {
                    next = (next || []).concat(child.children);
                }
            }
            return next;
        });
        series.setTreeValues(tree);
        // Calculate plotting values.
        series.axisRatio = (series.xAxis.len / series.yAxis.len);
        series.nodeMap[''].pointValues = pointValues = {
            x: 0,
            y: 0,
            width: axisMax,
            height: axisMax
        };
        series.nodeMap[''].values = seriesArea = TreemapSeries_merge(pointValues, {
            width: (pointValues.width * series.axisRatio),
            direction: (options.layoutStartingDirection === 'vertical' ? 0 : 1),
            val: tree.val
        });
        // We need to pre-render the data labels in order to measure the height
        // of data label group
        if (this.hasOutsideDataLabels || this.hadOutsideDataLabels) {
            this.drawDataLabels();
        }
        series.calculateChildrenAreas(tree, seriesArea);
        // Logic for point colors
        if (!series.colorAxis &&
            !options.colorByPoint) {
            series.setColorRecursive(series.tree);
        }
        // Update axis extremes according to the root node.
        if (options.allowTraversingTree && rootNode.pointValues) {
            val = rootNode.pointValues;
            series.xAxis.setExtremes(val.x, val.x + val.width, false);
            series.yAxis.setExtremes(val.y, val.y + val.height, false);
            series.xAxis.setScale();
            series.yAxis.setScale();
        }
        // Assign values to points.
        series.setPointValues();
        if (applyGrouping) {
            series.applyTreeGrouping();
        }
    }
}
TreemapSeries.defaultOptions = TreemapSeries_merge(ScatterSeries.defaultOptions, Treemap_TreemapSeriesDefaults);
TreemapSeries_extend(TreemapSeries.prototype, {
    buildKDTree: noop,
    colorAttribs: (external_coloraxis_src_js_default_ColorMapComposition_default()).seriesMembers.colorAttribs,
    colorKey: 'colorValue', // Point color option key
    directTouch: true,
    getExtremesFromAll: true,
    getSymbol: noop,
    optionalAxis: 'colorAxis',
    parallelArrays: ['x', 'y', 'value', 'colorValue'],
    pointArrayMap: ['value', 'colorValue'],
    pointClass: Treemap_TreemapPoint,
    NodeClass: Treemap_TreemapNode,
    trackerGroups: ['group', 'dataLabelsGroup'],
    utils: Treemap_TreemapUtilities
});
external_coloraxis_src_js_default_ColorMapComposition_default().compose(TreemapSeries);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('treemap', TreemapSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treemap_TreemapSeries = (TreemapSeries);

;// ./code/es-modules/masters/modules/treemap.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-06)
 * @module highcharts/modules/treemap
 * @requires highcharts
 *
 * (c) 2014-2025 Highsoft AS
 * Authors: Jon Arild Nygard / Oystein Moseng
 *
 * License: www.highcharts.com/license
 */




const G = (external_highcharts_src_js_default_default());
G.Breadcrumbs = G.Breadcrumbs || Breadcrumbs_Breadcrumbs;
G.Breadcrumbs.compose(G.Chart, G.defaultOptions);
Treemap_TreemapSeries.compose(G.Series);
/* harmony default export */ const treemap_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/Series/PathUtilities.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

const getLinkPath = {
    'default': getOrthogonalPath,
    orthogonal: getOrthogonalPath,
    straight: getStraightPath,
    curved: getCurvedPath
};
/**
 *
 */
function getOrthogonalPath(pathParams) {
    const { x1, y1, x2, y2, bendAt, width = 0, inverted = false, radius, parentVisible } = pathParams;
    if (parentVisible) {
        const bend = bendAt ?? (width / 2);
        return applyRadius([
            ['M', x1, y1],
            ['L', x1 + bend * (inverted ? -1 : 1), y1],
            ['L', x1 + bend * (inverted ? -1 : 1), y2],
            ['L', x2, y2]
        ], radius);
    }
    return [
        ['M', x1, y1],
        ['L', x1, y1],
        ['C', x1, y1, x1, y2, x1, y2],
        ['L', x1, y2],
        ['C', x1, y1, x1, y2, x1, y2],
        ['L', x1, y2]
    ];
}
/**
 *
 */
function getStraightPath(pathParams) {
    const { x1, y1, x2, y2, width = 0, inverted = false, parentVisible } = pathParams;
    return parentVisible ? [
        ['M', x1, y1],
        ['L', x1 + width * (inverted ? -1 : 1), y2],
        ['L', x2, y2]
    ] : [
        ['M', x1, y1],
        ['L', x1, y2],
        ['L', x1, y2]
    ];
}
/**
 *
 */
function getCurvedPath(pathParams) {
    const { x1, y1, x2, y2, offset = 0, width = 0, inverted = false, parentVisible } = pathParams;
    return parentVisible ?
        [
            ['M', x1, y1],
            [
                'C',
                x1 + offset,
                y1,
                x1 - offset + width * (inverted ? -1 : 1),
                y2,
                x1 + width * (inverted ? -1 : 1),
                y2
            ],
            ['L', x2, y2]
        ] :
        [
            ['M', x1, y1],
            ['C', x1, y1, x1, y2, x1, y2],
            ['L', x2, y2]
        ];
}
/**
 * General function to apply corner radius to a path
 * @private
 */
function applyRadius(path, r) {
    const d = [];
    for (let i = 0; i < path.length; i++) {
        const x = path[i][1];
        const y = path[i][2];
        if (typeof x === 'number' && typeof y === 'number') {
            // MoveTo
            if (i === 0) {
                d.push(['M', x, y]);
            }
            else if (i === path.length - 1) {
                d.push(['L', x, y]);
                // CurveTo
            }
            else if (r) {
                const prevSeg = path[i - 1];
                const nextSeg = path[i + 1];
                if (prevSeg && nextSeg) {
                    const x1 = prevSeg[1], y1 = prevSeg[2], x2 = nextSeg[1], y2 = nextSeg[2];
                    // Only apply to breaks
                    if (typeof x1 === 'number' &&
                        typeof x2 === 'number' &&
                        typeof y1 === 'number' &&
                        typeof y2 === 'number' &&
                        x1 !== x2 &&
                        y1 !== y2) {
                        const directionX = x1 < x2 ? 1 : -1, directionY = y1 < y2 ? 1 : -1;
                        d.push([
                            'L',
                            x - directionX * Math.min(Math.abs(x - x1), r),
                            y - directionY * Math.min(Math.abs(y - y1), r)
                        ], [
                            'C',
                            x,
                            y,
                            x,
                            y,
                            x + directionX * Math.min(Math.abs(x - x2), r),
                            y + directionY * Math.min(Math.abs(y - y2), r)
                        ]);
                    }
                }
                // LineTo
            }
            else {
                d.push(['L', x, y]);
            }
        }
    }
    return d;
}
const PathUtilities = {
    applyRadius,
    getLinkPath
};
/* harmony default export */ const Series_PathUtilities = (PathUtilities);

;// external ["../highcharts.src.js","default","SVGRenderer"]
const external_highcharts_src_js_default_SVGRenderer_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SVGRenderer;
var external_highcharts_src_js_default_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGRenderer_namespaceObject);
;// ./code/es-modules/Series/Treegraph/TreegraphNode.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { seriesTypes: { treemap: { prototype: { NodeClass: TreegraphNode_TreemapNode } } } } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 */
class TreegraphNode extends TreegraphNode_TreemapNode {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.mod = 0;
        this.shift = 0;
        this.change = 0;
        this.children = [];
        this.preX = 0;
        this.hidden = false;
        this.wasVisited = false;
        this.collapsed = false;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Get the next left node which is either first child or thread.
     *
     * @return {TreegraphNode|undefined}
     *         Next left node child or thread.
     */
    nextLeft() {
        return this.getLeftMostChild() || this.thread;
    }
    /**
     * Get the next right node which is either last child or thread.
     *
     * @return {TreegraphNode|undefined}
     *         Next right node child or thread.
     */
    nextRight() {
        return this.getRightMostChild() || this.thread;
    }
    /**
     * Return the left one of the greatest uncommon ancestors of a
     * leftInternal node and it's right neighbor.
     *
     * @param {TreegraphNode} leftIntNode
     * @param {TreegraphNode} defaultAncestor
     * @return {TreegraphNode}
     *         Left one of the greatest uncommon ancestors of a leftInternal
     *         node and it's right neighbor.
     *
     */
    getAncestor(leftIntNode, defaultAncestor) {
        const leftAnc = leftIntNode.ancestor;
        if (leftAnc.children[0] === this.children[0]) {
            return leftIntNode.ancestor;
        }
        return defaultAncestor;
    }
    /**
     * Get node's first sibling, which is not hidden.
     *
     * @return {TreegraphNode|undefined}
     *         First sibling of the node which is not hidden or undefined, if it
     *         does not exists.
     */
    getLeftMostSibling() {
        const parent = this.getParent();
        if (parent) {
            for (const child of parent.children) {
                if (child && child.point.visible) {
                    return child;
                }
            }
        }
    }
    /**
     * Check if the node is a leaf (if it has any children).
     *
     * @return {boolean}
     *         If the node has no visible children return true.
     */
    hasChildren() {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i].point.visible) {
                return true;
            }
        }
        return false;
    }
    /**
     * Get node's left sibling (if it exists).
     *
     * @return {TreegraphNode|undefined}
     *         Left sibling of the node
     */
    getLeftSibling() {
        const parent = this.getParent();
        if (parent) {
            const children = parent.children;
            for (let i = this.relativeXPosition - 1; i >= 0; i--) {
                if (children[i] && children[i].point.visible) {
                    return children[i];
                }
            }
        }
    }
    /**
     * Get the node's first child (if it exists).
     *
     * @return {TreegraphNode|undefined}
     *         Node's first child which isn't hidden.
     */
    getLeftMostChild() {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i].point.visible) {
                return children[i];
            }
        }
    }
    /**
     * Get the node's last child (if it exists).
     *
     * @return {TreegraphNode|undefined}
     *         Node's last child which isn't hidden.
     */
    getRightMostChild() {
        const children = this.children;
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].point.visible) {
                return children[i];
            }
        }
    }
    /**
     * Get the parent of current node or return undefined for root of the
     * tree.
     *
     * @return {TreegraphNode|undefined}
     *         Node's parent or undefined for root.
     */
    getParent() {
        return this.parentNode;
    }
    /**
     * Get node's first child which is not hidden.
     *
     * @return {TreegraphNode|undefined}
     *         First child.
     */
    getFirstChild() {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i].point.visible) {
                return children[i];
            }
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treegraph_TreegraphNode = (TreegraphNode);

;// external ["../highcharts.src.js","default","Point"]
const external_highcharts_src_js_default_Point_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Point;
var external_highcharts_src_js_default_Point_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Point_namespaceObject);
;// ./code/es-modules/Series/Treegraph/TreegraphPoint.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { seriesTypes: { treemap: { prototype: { pointClass: TreegraphPoint_TreemapPoint } } } } = (external_highcharts_src_js_default_SeriesRegistry_default());

const { addEvent: TreegraphPoint_addEvent, fireEvent: TreegraphPoint_fireEvent, merge: TreegraphPoint_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 */
class TreegraphPoint extends TreegraphPoint_TreemapPoint {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.dataLabelOnHidden = true;
        this.isLink = false;
        this.setState = (external_highcharts_src_js_default_Point_default()).prototype.setState;
    }
    /* *
     *
     *  Functions
     *
     * */
    draw() {
        super.draw.apply(this, arguments);
        // Run animation of hiding/showing of the point.
        const graphic = this.graphic;
        if (graphic) {
            graphic.animate({
                visibility: this.visible ? 'inherit' : 'hidden'
            });
        }
        this.renderCollapseButton();
    }
    renderCollapseButton() {
        const point = this, series = point.series, parentGroup = point.graphic && point.graphic.parentGroup, levelOptions = series.mapOptionsToLevel[point.node.level || 0] || {}, btnOptions = TreegraphPoint_merge(series.options.collapseButton, levelOptions.collapseButton, point.options.collapseButton), { width, height, shape, style } = btnOptions, padding = 2, chart = this.series.chart, calculatedOpacity = (point.visible &&
            (point.collapsed ||
                !btnOptions.onlyOnHover ||
                point.state === 'hover')) ? 1 : 0;
        if (!point.shapeArgs) {
            return;
        }
        this.collapseButtonOptions = btnOptions;
        if (!point.collapseButton) {
            if (!point.node.children.length || !btnOptions.enabled) {
                return;
            }
            const { x, y } = this.getCollapseBtnPosition(btnOptions), fill = (btnOptions.fillColor ||
                point.color ||
                "#cccccc" /* Palette.neutralColor20 */);
            point.collapseButton = chart.renderer
                .label(point.collapsed ? '+' : '-', x, y, shape)
                .attr({
                height: height - 2 * padding,
                width: width - 2 * padding,
                padding: padding,
                fill,
                rotation: chart.inverted ? 90 : 0,
                rotationOriginX: width / 2,
                rotationOriginY: height / 2,
                stroke: btnOptions.lineColor || "#ffffff" /* Palette.backgroundColor */,
                'stroke-width': btnOptions.lineWidth,
                'text-align': 'center',
                align: 'center',
                zIndex: 1,
                opacity: calculatedOpacity,
                visibility: point.visible ? 'inherit' : 'hidden'
            })
                .addClass('highcharts-tracker')
                .addClass('highcharts-collapse-button')
                .removeClass('highcharts-no-tooltip')
                .css(TreegraphPoint_merge({
                color: typeof fill === 'string' ?
                    chart.renderer.getContrast(fill) :
                    "#333333" /* Palette.neutralColor80 */
            }, style))
                .add(parentGroup);
            point.collapseButton.element.point = point;
        }
        else {
            if (!point.node.children.length || !btnOptions.enabled) {
                point.collapseButton.destroy();
                delete point.collapseButton;
            }
            else {
                const { x, y } = this.getCollapseBtnPosition(btnOptions);
                point.collapseButton
                    .attr({
                    text: point.collapsed ? '+' : '-',
                    rotation: chart.inverted ? 90 : 0,
                    rotationOriginX: width / 2,
                    rotationOriginY: height / 2,
                    visibility: point.visible ? 'inherit' : 'hidden'
                })
                    .animate({
                    x,
                    y,
                    opacity: calculatedOpacity
                });
            }
        }
    }
    toggleCollapse(state) {
        const series = this.series;
        this.update({
            collapsed: state ?? !this.collapsed
        }, false, void 0, false);
        TreegraphPoint_fireEvent(series, 'toggleCollapse');
        series.redraw();
    }
    destroy() {
        if (this.collapseButton) {
            this.collapseButton.destroy();
            delete this.collapseButton;
            this.collapseButton = void 0;
        }
        if (this.linkToParent) {
            this.linkToParent.destroy();
            delete this.linkToParent;
        }
        super.destroy.apply(this, arguments);
    }
    getCollapseBtnPosition(btnOptions) {
        const point = this, chart = point.series.chart, inverted = chart.inverted, btnWidth = btnOptions.width, btnHeight = btnOptions.height, { x = 0, y = 0, width = 0, height = 0 } = point.shapeArgs || {};
        return {
            x: x +
                btnOptions.x +
                (inverted ? -btnHeight * 0.3 : width + btnWidth * -0.3),
            y: y + height / 2 - btnHeight / 2 + btnOptions.y
        };
    }
}
TreegraphPoint_addEvent(TreegraphPoint, 'mouseOut', function () {
    const btn = this.collapseButton, btnOptions = this.collapseButtonOptions;
    if (btn && btnOptions?.onlyOnHover && !this.collapsed) {
        btn.animate({ opacity: 0 });
    }
});
TreegraphPoint_addEvent(TreegraphPoint, 'mouseOver', function () {
    if (this.collapseButton && this.visible) {
        this.collapseButton.animate({ opacity: 1 }, this.series.options.states?.hover?.animation);
    }
});
// Handle showing and hiding of the points
TreegraphPoint_addEvent(TreegraphPoint, 'click', function () {
    this.toggleCollapse();
});
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ const Treegraph_TreegraphPoint = (TreegraphPoint);

;// ./code/es-modules/Series/Treegraph/TreegraphLink.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { pick: TreegraphLink_pick, extend: TreegraphLink_extend } = (external_highcharts_src_js_default_default());

const { seriesTypes: { column: { prototype: { pointClass: ColumnPoint } } } } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 */
class LinkPoint extends ColumnPoint {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(series, options, x, point) {
        super(series, options, x);
        /* *
         *
         *  Properties
         *
         * */
        this.dataLabelOnNull = true;
        this.formatPrefix = 'link';
        this.isLink = true;
        this.node = {};
        this.formatPrefix = 'link';
        this.dataLabelOnNull = true;
        if (point) {
            this.fromNode = point.node.parentNode.point;
            this.visible = point.visible;
            this.toNode = point;
            this.id = this.toNode.id + '-' + this.fromNode.id;
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    update(options, redraw, animation, runEvent) {
        const oldOptions = {
            id: this.id,
            formatPrefix: this.formatPrefix
        };
        external_highcharts_src_js_default_Point_default().prototype.update.call(this, options, this.isLink ? false : redraw, // Hold the redraw for nodes
        animation, runEvent);
        this.visible = this.toNode.visible;
        TreegraphLink_extend(this, oldOptions);
        if (TreegraphLink_pick(redraw, true)) {
            this.series.chart.redraw(animation);
        }
    }
}
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ const TreegraphLink = (LinkPoint);

;// ./code/es-modules/Series/Treegraph/TreegraphLayout.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 */
class TreegraphLayout {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Create dummy node, which allows to manually set the level of the node.
     *
     * @param {TreegraphNode} parent
     *        Parent node, to which the dummyNode should be connected.
     * @param {TreegraphNode} child
     *        Child node, which should be connected to dummyNode.
     * @param {number} gapSize
     *        Remaining gap size.
     *
     * @return {TreegraphNode}
     *         DummyNode as a parent of nodes, which column changes.
     */
    static createDummyNode(parent, child, gapSize) {
        // Initialise dummy node.
        const dummyNode = new Treegraph_TreegraphNode();
        dummyNode.id = parent.id + '-' + gapSize;
        dummyNode.ancestor = parent;
        // Add connection from new node to the previous points.
        // First connection to itself.
        dummyNode.children.push(child);
        dummyNode.parent = parent.id;
        dummyNode.parentNode = parent;
        dummyNode.point = child.point;
        dummyNode.level = child.level - gapSize;
        dummyNode.relativeXPosition = child.relativeXPosition;
        dummyNode.visible = child.visible;
        // Then connection from parent to dummyNode.
        parent.children[child.relativeXPosition] = dummyNode;
        child.oldParentNode = parent;
        child.relativeXPosition = 0;
        // Then connection from child to dummyNode.
        child.parentNode = dummyNode;
        child.parent = dummyNode.id;
        return dummyNode;
    }
    /**
     * Walker algorithm of positioning the nodes in the treegraph improved by
     * Buchheim to run in the linear time. Basic algorithm consists of post
     * order traversal, which starts from going bottom up (first walk), and then
     * pre order traversal top to bottom (second walk) where adding all of the
     * modifiers is performed.
     * link to the paper: http://dirk.jivas.de/papers/buchheim02improving.pdf
     *
     * @param {TreegraphSeries} series the Treegraph series
     */
    calculatePositions(series) {
        const treeLayout = this;
        const nodes = series.nodeList;
        this.resetValues(nodes);
        const root = series.tree;
        if (root) {
            treeLayout.calculateRelativeX(root, 0);
            treeLayout.beforeLayout(nodes);
            treeLayout.firstWalk(root);
            treeLayout.secondWalk(root, -root.preX);
            treeLayout.afterLayout(nodes);
        }
    }
    /**
     * Create dummyNodes as parents for nodes, which column is changed.
     *
     * @param {Array<TreegraphNode>} nodes
     *        All of the nodes.
     */
    beforeLayout(nodes) {
        for (const node of nodes) {
            for (let child of node.children) {
                // Support for children placed in distant columns.
                if (child && child.level - node.level > 1) {
                    // For further columns treat the nodes as a
                    // single parent-child pairs till the column is achieved.
                    let gapSize = child.level - node.level - 1;
                    // Parent -> dummyNode -> child
                    while (gapSize > 0) {
                        child = TreegraphLayout.createDummyNode(node, child, gapSize);
                        gapSize--;
                    }
                }
            }
        }
    }
    /**
     * Reset the calculated values from the previous run.
     * @param {TreegraphNode[]} nodes all of the nodes.
     */
    resetValues(nodes) {
        for (const node of nodes) {
            node.mod = 0;
            node.ancestor = node;
            node.shift = 0;
            node.thread = void 0;
            node.change = 0;
            node.preX = 0;
        }
    }
    /**
     * Assigns the value to each node, which indicates, what is his sibling
     * number.
     *
     * @param {TreegraphNode} node
     *        Root node
     * @param {number} index
     *        Index to which the nodes position should be set
     */
    calculateRelativeX(node, index) {
        const treeLayout = this, children = node.children;
        for (let i = 0, iEnd = children.length; i < iEnd; ++i) {
            treeLayout.calculateRelativeX(children[i], i);
        }
        node.relativeXPosition = index;
    }
    /**
     * Recursive post order traversal of the tree, where the initial position
     * of the nodes is calculated.
     *
     * @param {TreegraphNode} node
     *        The node for which the position should be calculated.
     */
    firstWalk(node) {
        const treeLayout = this, 
        // Arbitrary value used to position nodes in respect to each other.
        siblingDistance = 1;
        let leftSibling;
        // If the node is a leaf, set it's position based on the left siblings.
        if (!node.hasChildren()) {
            leftSibling = node.getLeftSibling();
            if (leftSibling) {
                node.preX = leftSibling.preX + siblingDistance;
                node.mod = node.preX;
            }
            else {
                node.preX = 0;
            }
        }
        else {
            // If the node has children, perform the recursive first walk for
            // its children, and then calculate its shift in the apportion
            // function (most crucial part of the algorithm).
            let defaultAncestor = node.getLeftMostChild();
            for (const child of node.children) {
                treeLayout.firstWalk(child);
                defaultAncestor = treeLayout.apportion(child, defaultAncestor);
            }
            treeLayout.executeShifts(node);
            const leftChild = node.getLeftMostChild(), rightChild = node.getRightMostChild(), 
            // Set the position of the parent as a middle point of its
            // children and move it by the value of the leftSibling (if it
            // exists).
            midPoint = (leftChild.preX + rightChild.preX) / 2;
            leftSibling = node.getLeftSibling();
            if (leftSibling) {
                node.preX = leftSibling.preX + siblingDistance;
                node.mod = node.preX - midPoint;
            }
            else {
                node.preX = midPoint;
            }
        }
    }
    /**
     * Pre order traversal of the tree, which sets the final xPosition of the
     * node as its preX value and sum of all if it's parents' modifiers.
     *
     * @param {TreegraphNode} node
     *        The node, for which the final position should be calculated.
     * @param {number} modSum
     *        The sum of modifiers of all of the parents.
     */
    secondWalk(node, modSum) {
        const treeLayout = this;
        // When the chart is not inverted we want the tree to be positioned from
        // left to right with root node close to the chart border, this is why
        // x and y positions are switched.
        node.yPosition = node.preX + modSum;
        node.xPosition = node.point?.x ?? node.level;
        for (const child of node.children) {
            treeLayout.secondWalk(child, modSum + node.mod);
        }
    }
    /**
     *  Shift all children of the current node from right to left.
     *
     * @param {TreegraphNode} node
     *        The parent node.
     */
    executeShifts(node) {
        let shift = 0, change = 0;
        for (let i = node.children.length - 1; i >= 0; i--) {
            const childNode = node.children[i];
            childNode.preX += shift;
            childNode.mod += shift;
            change += childNode.change;
            shift += childNode.shift + change;
        }
    }
    /**
     * The core of the algorithm. The new subtree is combined with the previous
     * subtrees. Threads are used to traverse the inside and outside contours of
     * the left and right subtree up to the highest common level. The vertecies
     * are left(right)Int(Out)node where Int means internal and Out means
     * outernal. For summing up the modifiers along the contour we use the
     * `left(right)Int(Out)mod` variable. Whenever two nodes of the inside
     * contours are in conflict we commute the left one of the greatest uncommon
     * ancestors using the getAncestor function and we call the moveSubtree
     * method to shift the subtree and prepare the shifts of smaller subtrees.
     * Finally we add a new thread (if necessary) and we adjust ancestor of
     * right outernal node or defaultAncestor.
     *
     * @param {TreegraphNode} node
     * Treegraph node.
     *
     * @param {TreegraphNode} defaultAncestor
     * The default ancestor of the passed node.
     */
    apportion(node, defaultAncestor) {
        const treeLayout = this, leftSibling = node.getLeftSibling();
        if (leftSibling) {
            let rightIntNode = node, rightOutNode = node, leftIntNode = leftSibling, leftOutNode = rightIntNode.getLeftMostSibling(), rightIntMod = rightIntNode.mod, rightOutMod = rightOutNode.mod, leftIntMod = leftIntNode.mod, leftOutMod = leftOutNode.mod;
            while (leftIntNode &&
                leftIntNode.nextRight() &&
                rightIntNode &&
                rightIntNode.nextLeft()) {
                leftIntNode = leftIntNode.nextRight();
                leftOutNode = leftOutNode.nextLeft();
                rightIntNode = rightIntNode.nextLeft();
                rightOutNode = rightOutNode.nextRight();
                rightOutNode.ancestor = node;
                const siblingDistance = 1, shift = leftIntNode.preX +
                    leftIntMod -
                    (rightIntNode.preX + rightIntMod) +
                    siblingDistance;
                if (shift > 0) {
                    treeLayout.moveSubtree(node.getAncestor(leftIntNode, defaultAncestor), node, shift);
                    rightIntMod += shift;
                    rightOutMod += shift;
                }
                leftIntMod += leftIntNode.mod;
                rightIntMod += rightIntNode.mod;
                leftOutMod += leftOutNode.mod;
                rightOutMod += rightOutNode.mod;
            }
            if (leftIntNode &&
                leftIntNode.nextRight() &&
                !rightOutNode.nextRight()) {
                rightOutNode.thread = leftIntNode.nextRight();
                rightOutNode.mod += leftIntMod - rightOutMod;
            }
            if (rightIntNode &&
                rightIntNode.nextLeft() &&
                !leftOutNode.nextLeft()) {
                leftOutNode.thread = rightIntNode.nextLeft();
                leftOutNode.mod += rightIntMod - leftOutMod;
            }
            defaultAncestor = node;
        }
        return defaultAncestor;
    }
    /**
     * Shifts the subtree from leftNode to rightNode.
     *
     * @param {TreegraphNode} leftNode
     * Left treegraph node.
     *
     * @param {TreegraphNode} rightNode
     * Right treegraph node.
     *
     * @param {number} shift
     * The value, by which the subtree should be moved.
     */
    moveSubtree(leftNode, rightNode, shift) {
        const subtrees = rightNode.relativeXPosition - leftNode.relativeXPosition;
        rightNode.change -= shift / subtrees;
        rightNode.shift += shift;
        rightNode.preX += shift;
        rightNode.mod += shift;
        leftNode.change += shift / subtrees;
    }
    /**
     * Clear values created in a beforeLayout.
     *
     * @param {TreegraphNode[]} nodes
     *        All of the nodes of the Treegraph Series.
     */
    afterLayout(nodes) {
        for (const node of nodes) {
            if (node.oldParentNode) {
                // Restore default connections
                node.relativeXPosition = node.parentNode.relativeXPosition;
                node.parent = node.oldParentNode.parent;
                node.parentNode = node.oldParentNode;
                // Delete dummyNode
                node.oldParentNode.children
                    .splice(node.relativeXPosition, 1, node);
                node.oldParentNode = void 0;
            }
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treegraph_TreegraphLayout = (TreegraphLayout);

;// ./code/es-modules/Series/Treegraph/TreegraphSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
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
 * A treegraph series is a diagram, which shows a relation between ancestors
 * and descendants with a clear parent - child relation.
 * The best examples of the dataStructures, which best reflect this chart
 * are e.g. genealogy tree or directory structure.
 *
 * TODO change back the demo path
 * @sample highcharts/demo/treegraph-chart
 *         Treegraph Chart
 *
 * @extends      plotOptions.treemap
 * @excluding    layoutAlgorithm, dashStyle, linecap, lineWidth,
 *               negativeColor, threshold, zones, zoneAxis, colorAxis,
 *               colorKey, compare, dataGrouping, endAngle, gapSize, gapUnit,
 *               ignoreHiddenPoint, innerSize, joinBy, legendType, linecap,
 *               minSize, navigatorOptions, pointRange, allowTraversingTree,
 *               alternateStartingDirection, borderRadius, breadcrumbs,
 *               interactByLeaf, layoutStartingDirection, levelIsConstant,
 *               lineWidth, negativeColor, nodes, sortIndex, zoneAxis,
 *               zones, cluster
 *
 * @product      highcharts
 * @since 10.3.0
 * @requires     modules/treemap
 * @requires     modules/treegraph
 * @optionparent plotOptions.treegraph
 */
const TreegraphSeriesDefaults = {
    /**
     * Flips the positions of the nodes of a treegraph along the
     * horizontal axis (vertical if chart is inverted).
     *
     * @sample highcharts/series-treegraph/reversed-nodes
     *         Treegraph series with reversed nodes.
     *
     * @type    {boolean}
     * @default false
     * @product highcharts
     * @since 10.3.0
     */
    reversed: false,
    /**
     * @extends   plotOptions.series.marker
     * @excluding enabled, enabledThreshold
     */
    marker: {
        radius: 10,
        lineWidth: 0,
        symbol: 'circle',
        fillOpacity: 1,
        states: {}
    },
    link: {
        /**
         * Modifier of the shape of the curved link. Works best for
         * values between 0 and 1, where 0 is a straight line, and 1 is
         * a shape close to the default one.
         *
         * @type      {number}
         * @default   0.5
         * @product   highcharts
         * @since 10.3.0
         * @apioption plotOptions.treegraph.link.curveFactor
         */
        /**
         * For the orthogonal link type, this defines how far down the link
         * bends. A number defines the pixel offset from the start of the link,
         * and a percentage defines the relative position on the link. For
         * example, a `bendAt` of `50%` means that the link bends in the middle.
         *
         * @type      {number|string}
         * @since     next
         * @product   highcharts
         * @default   50%
         * @apioption plotOptions.treegraph.link.bendAt
         */
        /**
         * The color of the links between nodes.
         *
         * @type {Highcharts.ColorString}
         * @private
         */
        color: "#666666" /* Palette.neutralColor60 */,
        /**
         * The line width of the links connecting nodes, in pixels.
         * @type {number}
         *
         * @private
         */
        lineWidth: 1,
        /**
         * Radius for the rounded corners of the links between nodes.
         * Works for the `orthogonal` link type.
         *
         * @private
         */
        radius: 10,
        cursor: 'default',
        /**
         * Type of the link shape.
         *
         * @sample   highcharts/series-treegraph/link-types
         *           Different link types
         *
         * @type {'orthogonal' | 'curved' | 'straight'}
         * @product highcharts
         *
         */
        type: 'curved'
    },
    /**
     * Can set the options of dataLabels on each point which lies on the
     * level.
     * [plotOptions.treegraph.dataLabels](#plotOptions.treegraph.dataLabels)
     * for possible values.
     *
     * @extends   plotOptions.treegraph.dataLabels
     * @product   highcharts
     * @apioption plotOptions.treegraph.levels.dataLabels
     */
    /**
     * Options applied to collapse Button. The collape button is the
     * small button which indicates, that the node is collapsable.
     */
    collapseButton: {
        /**
         * Whether the button should be visible only when the node is
         * hovered. When set to true, the button is hidden for nodes,
         * which are not collapsed, and shown for the collapsed ones.
         */
        onlyOnHover: true,
        /**
         * Whether the button should be visible.
         */
        enabled: true,
        /**
         * The line width of the button in pixels
         */
        lineWidth: 1,
        /**
         * Offset of the button in the x direction.
         */
        x: 0,
        /**
         * Offset of the button in the y direction.
         */
        y: 0,
        /**
         * Height of the button.
         */
        height: 18,
        /**
         * Width of the button.
         */
        width: 18,
        /**
         * The symbol of the collapse button.
         */
        shape: 'circle',
        /**
         * CSS styles for the collapse button.
         *
         * In styled mode, the collapse button style is given in the
         * `.highcharts-collapse-button` class.
         */
        style: {
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1em'
        }
    },
    /**
     * Whether the treegraph series should fill the entire plot area in the X
     * axis direction, even when there are collapsed points.
     *
     * @sample  highcharts/series-treegraph/fillspace
     *          Fill space demonstrated
     *
     * @product highcharts
     */
    fillSpace: false,
    /**
     * @extends plotOptions.series.tooltip
     * @excluding clusterFormat
     */
    tooltip: {
        /**
         * The HTML of the point's line in the tooltip. Variables are enclosed
         * by curly brackets. Available variables are `point.id`,
         * `point.fromNode.id`, `point.toNode.id`, `series.name`, `series.color`
         * and other properties on the same form. Furthermore, This can also be
         * overridden for each series, which makes it a good hook for displaying
         * units. In styled mode, the dot is colored by a class name rather than
         * the point color.
         *
         * @type {string}
         * @since 10.3.0
         * @product highcharts
         */
        linkFormat: '{point.fromNode.id} \u2192 {point.toNode.id}',
        pointFormat: '{point.id}'
        /**
         * A callback function for formatting the HTML output for a
         * single link in the tooltip. Like the `linkFormat` string,
         * but with more flexibility.
         *
         * @type {Highcharts.FormatterCallbackFunction.<Highcharts.Point>}
         * @apioption series.treegraph.tooltip.linkFormatter
         *
         */
    },
    /**
     * Options for the data labels appearing on top of the nodes and
     * links. For treegraph charts, data labels are visible for the
     * nodes by default, but hidden for links. This is controlled by
     * modifying the `nodeFormat`, and the `format` that applies to
     * links and is an empty string by default.
     *
     * @declare Highcharts.SeriesTreegraphDataLabelsOptionsObject
     */
    dataLabels: {
        defer: true,
        /**
         * Options for a _link_ label text which should follow link
         * connection. Border and background are disabled for a label
         * that follows a path.
         *
         * **Note:** Only SVG-based renderer supports this option.
         * Setting `useHTML` to true will disable this option.
         *
         * @sample highcharts/series-treegraph/link-text-path
         *         Treegraph series with link text path dataLabels.
         *
         * @extends plotOptions.treegraph.dataLabels.textPath
         * @since 10.3.0
         */
        linkTextPath: {
            attributes: {
                startOffset: '50%'
            }
        },
        enabled: true,
        linkFormatter: () => '',
        /**
         * The
         * [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
         * specifying what to show for _nodes_ in the treegraph. Overrides
         * `format`. Use `pointFormat` and `linkFormat` to differentiate between
         * node and link data labels.
         *
         * @type {string}
         */
        pointFormat: void 0,
        padding: 5,
        style: {
            textOverflow: 'none'
        }
        /**
         * Callback function to format data labels for _nodes_ in the
         * treegraph, when `pointFormat` is not sufficient.
         *
         * @type {function}
         * @apioption series.treegraph.dataLabels.pointFormatter
         */
    },
    /**
     * The distance between nodes in a tree graph in the longitudinal direction.
     * The longitudinal direction means the direction that the chart flows - in
     * a horizontal chart the distance is horizontal, in an inverted chart
     * (vertical), the distance is vertical.
     *
     * If a number is given, it denotes pixels. If a percentage string is given,
     * the distance is a percentage of the rendered node width. A `nodeDistance`
     * of `100%` will render equal widths for the nodes and the gaps between
     * them.
     *
     * This option applies only when the `nodeWidth` option is `auto`, making
     * the node width respond to the number of columns.
     *
     * @since 11.4.0
     * @sample highcharts/series-treegraph/node-distance
     *         Node distance of 100% means equal to node width
     * @type   {number|string}
     */
    nodeDistance: 30,
    /**
     * The pixel width of each node in a, or the height in case the chart is
     * inverted. For tree graphs, the node width is only applied if the marker
     * symbol is `rect`, otherwise the `marker` sizing options apply.
     *
     * Can be a number or a percentage string, or `auto`. If `auto`, the nodes
     * are sized to fill up the plot area in the longitudinal direction,
     * regardless of the number of levels.
     *
     * @since 11.4.0
     * @see    [treegraph.nodeDistance](#nodeDistance)
     * @sample highcharts/series-treegraph/node-distance
     *         Node width is auto and combined with node distance
     *
     * @type {number|string}
     */
    nodeWidth: void 0
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treegraph_TreegraphSeriesDefaults = (TreegraphSeriesDefaults);

;// external ["../highcharts.src.js","default","SVGElement"]
const external_highcharts_src_js_default_SVGElement_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SVGElement;
var external_highcharts_src_js_default_SVGElement_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGElement_namespaceObject);
;// ./code/es-modules/Extensions/TextPath.js
/* *
 *
 *  Highcharts module with textPath functionality.
 *
 *  (c) 2009-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { deg2rad } = (external_highcharts_src_js_default_default());
const { addEvent: TextPath_addEvent, merge: TextPath_merge, uniqueKey, defined: TextPath_defined, extend: TextPath_extend } = (external_highcharts_src_js_default_default());
/**
 * Set a text path for a `text` or `label` element, allowing the text to
 * flow along a path.
 *
 * In order to unset the path for an existing element, call `setTextPath`
 * with `{ enabled: false }` as the second argument.
 *
 * Text path support is not bundled into `highcharts.js`, and requires the
 * `modules/textpath.js` file. However, it is included in the script files of
 * those series types that use it by default
 *
 * @sample highcharts/members/renderer-textpath/ Text path demonstrated
 *
 * @function Highcharts.SVGElement#setTextPath
 *
 * @param {Highcharts.SVGElement|undefined} path
 *        Path to follow. If undefined, it allows changing options for the
 *        existing path.
 *
 * @param {Highcharts.DataLabelsTextPathOptionsObject} textPathOptions
 *        Options.
 *
 * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
 */
function setTextPath(path, textPathOptions) {
    // Defaults
    textPathOptions = TextPath_merge(true, {
        enabled: true,
        attributes: {
            dy: -5,
            startOffset: '50%',
            textAnchor: 'middle'
        }
    }, textPathOptions);
    const url = this.renderer.url, textWrapper = this.text || this, textPath = textWrapper.textPath, { attributes, enabled } = textPathOptions;
    path = path || (textPath && textPath.path);
    // Remove previously added event
    if (textPath) {
        textPath.undo();
    }
    if (path && enabled) {
        const undo = TextPath_addEvent(textWrapper, 'afterModifyTree', (e) => {
            if (path && enabled) {
                // Set ID for the path
                let textPathId = path.attr('id');
                if (!textPathId) {
                    path.attr('id', textPathId = uniqueKey());
                }
                // Set attributes for the <text>
                const textAttribs = {
                    // `dx`/`dy` options must by set on <text> (parent), the
                    // rest should be set on <textPath>
                    x: 0,
                    y: 0
                };
                if (TextPath_defined(attributes.dx)) {
                    textAttribs.dx = attributes.dx;
                    delete attributes.dx;
                }
                if (TextPath_defined(attributes.dy)) {
                    textAttribs.dy = attributes.dy;
                    delete attributes.dy;
                }
                textWrapper.attr(textAttribs);
                // Handle label properties
                this.attr({ transform: '' });
                if (this.box) {
                    this.box = this.box.destroy();
                }
                // Wrap the nodes in a textPath
                const children = e.nodes.slice(0);
                e.nodes.length = 0;
                e.nodes[0] = {
                    tagName: 'textPath',
                    attributes: TextPath_extend(attributes, {
                        'text-anchor': attributes.textAnchor,
                        href: `${url}#${textPathId}`
                    }),
                    children
                };
            }
        });
        // Set the reference
        textWrapper.textPath = { path, undo };
    }
    else {
        textWrapper.attr({ dx: 0, dy: 0 });
        delete textWrapper.textPath;
    }
    if (this.added) {
        // Rebuild text after added
        textWrapper.textCache = '';
        this.renderer.buildText(textWrapper);
    }
    return this;
}
/**
 * Attach a polygon to a bounding box if the element contains a textPath.
 *
 * @function Highcharts.SVGElement#setPolygon
 *
 * @param {any} event
 *        An event containing a bounding box object
 *
 * @return {Highcharts.BBoxObject} Returns the bounding box object.
 */
function setPolygon(event) {
    const bBox = event.bBox, tp = this.element?.querySelector('textPath');
    if (tp) {
        const polygon = [], { b, h } = this.renderer.fontMetrics(this.element), descender = h - b, lineCleanerRegex = new RegExp('(<tspan>|' +
            '<tspan(?!\\sclass="highcharts-br")[^>]*>|' +
            '<\\/tspan>)', 'g'), lines = tp
            .innerHTML
            .replace(lineCleanerRegex, '')
            .split(/<tspan class="highcharts-br"[^>]*>/), numOfLines = lines.length;
        // Calculate top and bottom coordinates for
        // either the start or the end of a single
        // character, and append it to the polygon.
        const appendTopAndBottom = (charIndex, positionOfChar) => {
            const { x, y } = positionOfChar, rotation = (tp.getRotationOfChar(charIndex) - 90) * deg2rad, cosRot = Math.cos(rotation), sinRot = Math.sin(rotation);
            return [
                [
                    x - descender * cosRot,
                    y - descender * sinRot
                ],
                [
                    x + b * cosRot,
                    y + b * sinRot
                ]
            ];
        };
        for (let i = 0, lineIndex = 0; lineIndex < numOfLines; lineIndex++) {
            const line = lines[lineIndex], lineLen = line.length;
            for (let lineCharIndex = 0; lineCharIndex < lineLen; lineCharIndex += 5) {
                try {
                    const srcCharIndex = (i +
                        lineCharIndex +
                        lineIndex), [lower, upper] = appendTopAndBottom(srcCharIndex, tp.getStartPositionOfChar(srcCharIndex));
                    if (lineCharIndex === 0) {
                        polygon.push(upper);
                        polygon.push(lower);
                    }
                    else {
                        if (lineIndex === 0) {
                            polygon.unshift(upper);
                        }
                        if (lineIndex === numOfLines - 1) {
                            polygon.push(lower);
                        }
                    }
                }
                catch {
                    // Safari fails on getStartPositionOfChar even if the
                    // character is within the `textContent.length`
                    break;
                }
            }
            i += lineLen - 1;
            try {
                const srcCharIndex = i + lineIndex, charPos = tp.getEndPositionOfChar(srcCharIndex), [lower, upper] = appendTopAndBottom(srcCharIndex, charPos);
                polygon.unshift(upper);
                polygon.unshift(lower);
            }
            catch {
                // Safari fails on getStartPositionOfChar even if the character
                // is within the `textContent.length`
                break;
            }
        }
        // Close it
        if (polygon.length) {
            polygon.push(polygon[0].slice());
        }
        bBox.polygon = polygon;
    }
    return bBox;
}
/**
 * Draw text along a textPath for a dataLabel.
 *
 * @function Highcharts.SVGElement#setTextPath
 *
 * @param {any} event
 *        An event containing label options
 *
 * @return {void}
 */
function drawTextPath(event) {
    const labelOptions = event.labelOptions, point = event.point, textPathOptions = (labelOptions[point.formatPrefix + 'TextPath'] ||
        labelOptions.textPath);
    if (textPathOptions && !labelOptions.useHTML) {
        this.setTextPath(point.getDataLabelPath?.(this) || point.graphic, textPathOptions);
        if (point.dataLabelPath &&
            !textPathOptions.enabled) {
            // Clean the DOM
            point.dataLabelPath = (point.dataLabelPath.destroy());
        }
    }
}
function compose(SVGElementClass) {
    TextPath_addEvent(SVGElementClass, 'afterGetBBox', setPolygon);
    TextPath_addEvent(SVGElementClass, 'beforeAddingDataLabel', drawTextPath);
    const svgElementProto = SVGElementClass.prototype;
    if (!svgElementProto.setTextPath) {
        svgElementProto.setTextPath = setTextPath;
    }
}
const TextPath = {
    compose
};
/* harmony default export */ const Extensions_TextPath = (TextPath);

;// ./code/es-modules/Series/Treegraph/TreegraphSeries.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy Grzegorz Blachlinski
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { getLinkPath: TreegraphSeries_getLinkPath } = Series_PathUtilities;

const { series: { prototype: seriesProto }, seriesTypes: { treemap: TreegraphSeries_TreemapSeries, column: TreegraphSeries_ColumnSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());

const { prototype: { symbols } } = (external_highcharts_src_js_default_SVGRenderer_default());



const { getLevelOptions: TreegraphSeries_getLevelOptions, getNodeWidth: TreegraphSeries_getNodeWidth } = Series_TreeUtilities;

const { arrayMax: TreegraphSeries_arrayMax, crisp: TreegraphSeries_crisp, extend: TreegraphSeries_extend, merge: TreegraphSeries_merge, pick: TreegraphSeries_pick, relativeLength: TreegraphSeries_relativeLength, splat: TreegraphSeries_splat } = (external_highcharts_src_js_default_default());





Extensions_TextPath.compose((external_highcharts_src_js_default_SVGElement_default()));
/* *
 *
 *  Class
 *
 * */
/**
 * The Treegraph series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.treegraph
 *
 * @augments Highcharts.Series
 */
class TreegraphSeries extends TreegraphSeries_TreemapSeries {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.nodeList = [];
        this.links = [];
    }
    /* *
     *
     *  Functions
     *
     * */
    init() {
        super.init.apply(this, arguments);
        this.layoutAlgorythm = new Treegraph_TreegraphLayout();
        // Register the link data labels in the label collector for overlap
        // detection.
        const series = this, collectors = this.chart.labelCollectors, collectorFunc = function () {
            const linkLabels = [];
            // Check links for overlap
            if (series.options.dataLabels &&
                !TreegraphSeries_splat(series.options.dataLabels)[0].allowOverlap) {
                for (const link of (series.links || [])) {
                    if (link.dataLabel) {
                        linkLabels.push(link.dataLabel);
                    }
                }
            }
            return linkLabels;
        };
        // Only add the collector function if it is not present
        if (!collectors.some((f) => f.name === 'collectorFunc')) {
            collectors.push(collectorFunc);
        }
    }
    /**
     * Calculate `a` and `b` parameters of linear transformation, where
     * `finalPosition = a * calculatedPosition + b`.
     *
     * @return {LayoutModifiers} `a` and `b` parameter for x and y direction.
     */
    getLayoutModifiers() {
        const chart = this.chart, series = this, plotSizeX = chart.plotSizeX, plotSizeY = chart.plotSizeY, linkWidth = series.options.link?.lineWidth || 0, columnCount = TreegraphSeries_arrayMax(this.points.map((p) => p.node.xPosition));
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, maxXSize = 0, minXSize = 0, maxYSize = 0, minYSize = 0;
        this.points.forEach((point) => {
            // When fillSpace is on, stop the layout calculation when the hidden
            // points are reached. (#19038)
            if (this.options.fillSpace && !point.visible) {
                return;
            }
            const node = point.node, level = series.mapOptionsToLevel[point.node.level] || {}, markerOptions = TreegraphSeries_merge(this.options.marker, level.marker, point.options.marker), nodeWidth = markerOptions.width ?? TreegraphSeries_getNodeWidth(this, columnCount), radius = TreegraphSeries_relativeLength(markerOptions.radius || 0, Math.min(plotSizeX, plotSizeY)), lineWidth = Math.max(markerOptions.lineWidth || 0, linkWidth), symbol = markerOptions.symbol, nodeSizeY = (symbol === 'circle' || !markerOptions.height) ?
                radius * 2 :
                TreegraphSeries_relativeLength(markerOptions.height, plotSizeY), nodeSizeX = symbol === 'circle' || !nodeWidth ?
                radius * 2 :
                TreegraphSeries_relativeLength(nodeWidth, plotSizeX);
            node.nodeSizeX = nodeSizeX;
            node.nodeSizeY = nodeSizeY;
            if (node.xPosition <= minX) {
                minX = node.xPosition;
                minXSize = Math.max(nodeSizeX + lineWidth, minXSize);
            }
            if (node.xPosition >= maxX) {
                maxX = node.xPosition;
                maxXSize = Math.max(nodeSizeX + lineWidth, maxXSize);
            }
            if (node.yPosition <= minY) {
                minY = node.yPosition;
                minYSize = Math.max(nodeSizeY + lineWidth, minYSize);
            }
            if (node.yPosition >= maxY) {
                maxY = node.yPosition;
                maxYSize = Math.max(nodeSizeY + lineWidth, maxYSize);
            }
        });
        // Calculate the values of linear transformation, which will later be
        // applied as `nodePosition = a * x + b` for each direction.
        const ay = maxY === minY ?
            1 :
            (plotSizeY - (minYSize + maxYSize) / 2) / (maxY - minY), by = maxY === minY ? plotSizeY / 2 : -ay * minY + minYSize / 2, ax = maxX === minX ?
            1 :
            (plotSizeX - (maxXSize + maxXSize) / 2) / (maxX - minX), bx = maxX === minX ? plotSizeX / 2 : -ax * minX + minXSize / 2;
        return { ax, bx, ay, by };
    }
    getLinks() {
        const series = this;
        const links = [];
        this.data.forEach((point) => {
            const levelOptions = series.mapOptionsToLevel[point.node.level ?? 0] || {};
            if (point.node.parent) {
                const pointOptions = TreegraphSeries_merge(levelOptions, point.options);
                if (!point.linkToParent || point.linkToParent.destroyed) {
                    const link = new series.LinkClass(series, pointOptions, void 0, point);
                    point.linkToParent = link;
                }
                else {
                    // #19552
                    point.collapsed = TreegraphSeries_pick(point.collapsed, (this.mapOptionsToLevel[point.node.level] || {}).collapsed);
                    point.linkToParent.visible =
                        point.linkToParent.toNode.visible;
                }
                point.linkToParent.index = links.push(point.linkToParent) - 1;
            }
            else {
                if (point.linkToParent) {
                    series.links.splice(point.linkToParent.index);
                    point.linkToParent.destroy();
                    delete point.linkToParent;
                }
            }
        });
        return links;
    }
    buildTree(id, index, level, list, parent) {
        const point = this.points[index];
        level = point?.level ?? level;
        return super.buildTree.call(this, id, index, level, list, parent);
    }
    markerAttribs() {
        // The super Series.markerAttribs returns { width: NaN, height: NaN },
        // so just disable this for now.
        return {};
    }
    setCollapsedStatus(node, visibility) {
        const point = node.point;
        if (point) {
            // Take the level options into account.
            point.collapsed = TreegraphSeries_pick(point.collapsed, (this.mapOptionsToLevel[node.level] || {}).collapsed);
            point.visible = visibility;
            visibility = visibility === false ? false : !point.collapsed;
        }
        node.children.forEach((childNode) => {
            this.setCollapsedStatus(childNode, visibility);
        });
    }
    drawTracker() {
        TreegraphSeries_ColumnSeries.prototype.drawTracker.apply(this, arguments);
        TreegraphSeries_ColumnSeries.prototype.drawTracker.call(this, this.links);
    }
    /**
     * Run pre-translation by generating the nodeColumns.
     * @private
     */
    translate() {
        const series = this, options = series.options;
        // NOTE: updateRootId modifies series.
        let rootId = Series_TreeUtilities.updateRootId(series), rootNode;
        // Call prototype function
        seriesProto.translate.call(series);
        const tree = series.tree = series.getTree();
        rootNode = series.nodeMap[rootId];
        if (rootId !== '' && (!rootNode || !rootNode.children.length)) {
            series.setRootNode('', false);
            rootId = series.rootNode;
            rootNode = series.nodeMap[rootId];
        }
        series.mapOptionsToLevel = TreegraphSeries_getLevelOptions({
            from: rootNode.level + 1,
            levels: options.levels,
            to: tree.height,
            defaults: {
                levelIsConstant: series.options.levelIsConstant,
                colorByPoint: options.colorByPoint
            }
        });
        this.setCollapsedStatus(tree, true);
        series.links = series.getLinks();
        series.setTreeValues(tree);
        this.layoutAlgorythm.calculatePositions(series);
        series.layoutModifier = this.getLayoutModifiers();
        this.points.forEach((point) => {
            this.translateNode(point);
        });
        this.points.forEach((point) => {
            if (point.linkToParent) {
                this.translateLink(point.linkToParent);
            }
        });
        if (!options.colorByPoint) {
            series.setColorRecursive(series.tree);
        }
    }
    translateLink(link) {
        const fromNode = link.fromNode, toNode = link.toNode, linkWidth = this.options.link?.lineWidth || 0, factor = TreegraphSeries_pick(this.options.link?.curveFactor, 0.5), hasXData = toNode.x !== toNode.node.level ||
            fromNode.x !== fromNode.node.level, type = TreegraphSeries_pick(link.options.link?.type, this.options.link?.type, 'default');
        if (fromNode.shapeArgs && toNode.shapeArgs) {
            const fromNodeWidth = (fromNode.shapeArgs.width || 0), inverted = this.chart.inverted, y1 = TreegraphSeries_crisp((fromNode.shapeArgs.y || 0) +
                (fromNode.shapeArgs.height || 0) / 2, linkWidth), y2 = TreegraphSeries_crisp((toNode.shapeArgs.y || 0) +
                (toNode.shapeArgs.height || 0) / 2, linkWidth);
            let x1 = TreegraphSeries_crisp((fromNode.shapeArgs.x || 0) + fromNodeWidth, linkWidth), x2 = TreegraphSeries_crisp(toNode.shapeArgs.x || 0, linkWidth);
            if (inverted) {
                x1 -= Math.round(fromNodeWidth);
                x2 += Math.round(toNode.shapeArgs.width || 0);
            }
            const xDiff = toNode.node.xPosition - fromNode.node.xPosition, fullWidth = Math.abs(x2 - x1) + fromNodeWidth, scopeWidth = hasXData ? fullWidth : (fullWidth / xDiff), width = scopeWidth - fromNodeWidth, offset = width * factor * (inverted ? -1 : 1), xMiddle = TreegraphSeries_crisp((x2 + x1) / 2, linkWidth), bendAt = TreegraphSeries_relativeLength(link.options.link?.bendAt ??
                this.options.link?.bendAt ??
                '50%', fullWidth - fromNodeWidth);
            link.shapeType = 'path';
            link.plotX = xMiddle;
            link.plotY = y2;
            link.shapeArgs = {
                d: TreegraphSeries_getLinkPath[type]({
                    x1,
                    y1,
                    x2,
                    y2,
                    width,
                    offset,
                    inverted,
                    parentVisible: toNode.visible,
                    radius: this.options.link?.radius,
                    bendAt
                })
            };
            link.dlBox = {
                x: (x1 + x2) / 2,
                y: (y1 + y2) / 2,
                height: linkWidth,
                width: 0
            };
            link.tooltipPos = inverted ? [
                (this.chart.plotSizeY || 0) - link.dlBox.y,
                (this.chart.plotSizeX || 0) - link.dlBox.x
            ] : [
                link.dlBox.x,
                link.dlBox.y
            ];
        }
    }
    /**
     * Private method responsible for adjusting the dataLabel options for each
     * node-point individually.
     */
    drawNodeLabels(points) {
        const series = this, mapOptionsToLevel = series.mapOptionsToLevel;
        let options, level;
        for (const point of points) {
            level = mapOptionsToLevel[point.node.level];
            // Set options to new object to avoid problems with scope
            options = { style: {} };
            // If options for level exists, include them as well
            if (level && level.dataLabels) {
                options = TreegraphSeries_merge(options, level.dataLabels);
                series.hasDataLabels = () => true;
            }
            // Set dataLabel width to the width of the point shape.
            if (point.shapeArgs &&
                series.options.dataLabels) {
                const css = {};
                let { width = 0, height = 0 } = point.shapeArgs;
                if (series.chart.inverted) {
                    [width, height] = [height, width];
                }
                if (!TreegraphSeries_splat(series.options.dataLabels)[0].style?.width) {
                    css.width = `${width}px`;
                }
                if (!TreegraphSeries_splat(series.options.dataLabels)[0].style?.lineClamp) {
                    css.lineClamp = Math.floor(height / 16);
                }
                TreegraphSeries_extend(options.style, css);
                point.dataLabel?.css(css);
            }
            // Merge custom options with point options
            point.dlOptions = TreegraphSeries_merge(options, point.options.dataLabels);
        }
        seriesProto.drawDataLabels.call(this, points);
    }
    /**
     * Override alignDataLabel so that position is always calculated and the
     * label is faded in and out instead of hidden/shown when collapsing and
     * expanding nodes.
     */
    alignDataLabel(point, dataLabel) {
        const visible = point.visible;
        // Force position calculation and visibility
        point.visible = true;
        super.alignDataLabel.apply(this, arguments);
        // Fade in or out
        dataLabel.animate({
            opacity: visible === false ? 0 : 1
        }, void 0, function () {
            // Hide data labels that belong to hidden points (#18891)
            visible || dataLabel.hide();
        });
        // Reset
        point.visible = visible;
    }
    /**
     * Treegraph has two separate collecions of nodes and lines,
     * render dataLabels for both sets.
     */
    drawDataLabels() {
        if (this.options.dataLabels) {
            this.options.dataLabels = TreegraphSeries_splat(this.options.dataLabels);
            // Render node labels.
            this.drawNodeLabels(this.points);
            // Render link labels.
            seriesProto.drawDataLabels.call(this, this.links);
        }
    }
    destroy() {
        // Links must also be destroyed.
        if (this.links) {
            for (const link of this.links) {
                link.destroy();
            }
            this.links.length = 0;
        }
        return seriesProto.destroy.apply(this, arguments);
    }
    /**
     * Return the presentational attributes.
     * @private
     */
    pointAttribs(point, state) {
        const series = this, levelOptions = point &&
            series.mapOptionsToLevel[point.node.level ?? 0] || {}, options = point && point.options, stateOptions = (levelOptions.states &&
            levelOptions.states[state]) ||
            {};
        if (point) {
            point.options.marker = TreegraphSeries_merge(series.options.marker, levelOptions.marker, point.options.marker);
        }
        const linkColor = TreegraphSeries_pick(stateOptions && stateOptions.link && stateOptions.link.color, options && options.link && options.link.color, levelOptions && levelOptions.link && levelOptions.link.color, series.options.link && series.options.link.color), linkLineWidth = TreegraphSeries_pick(stateOptions && stateOptions.link &&
            stateOptions.link.lineWidth, options && options.link && options.link.lineWidth, levelOptions && levelOptions.link &&
            levelOptions.link.lineWidth, series.options.link && series.options.link.lineWidth), attribs = seriesProto.pointAttribs.call(series, point, state);
        if (point) {
            if (point.isLink) {
                attribs.stroke = linkColor;
                attribs['stroke-width'] = linkLineWidth;
                delete attribs.fill;
            }
            if (!point.visible) {
                attribs.opacity = 0;
            }
        }
        return attribs;
    }
    drawPoints() {
        TreegraphSeries_TreemapSeries.prototype.drawPoints.apply(this, arguments);
        TreegraphSeries_ColumnSeries.prototype.drawPoints.call(this, this.links);
    }
    /**
     * Run translation operations for one node.
     * @private
     */
    translateNode(point) {
        const chart = this.chart, { node, plotX = 0 } = point, plotSizeY = chart.plotSizeY, plotSizeX = chart.plotSizeX, 
        // Get the layout modifiers which are common for all nodes.
        { ax, bx, ay, by } = this.layoutModifier, x = this.isCartesian ?
            (chart.inverted ? plotSizeX - plotX : plotX) :
            ax * node.xPosition + bx, y = ay * node.yPosition + by, level = this.mapOptionsToLevel[node.level] || {}, markerOptions = TreegraphSeries_merge(this.options.marker, level.marker, point.options.marker), symbol = markerOptions.symbol, height = node.nodeSizeY, width = node.nodeSizeX, reversed = this.options.reversed, nodeX = node.x = (chart.inverted ?
            plotSizeX - width / 2 - x :
            x - width / 2), nodeY = node.y = (!reversed ?
            plotSizeY - y - height / 2 :
            y - height / 2), borderRadius = TreegraphSeries_pick(point.options.borderRadius, level.borderRadius, this.options.borderRadius), symbolFn = symbols[symbol || 'circle'];
        if (symbolFn === void 0) {
            point.hasImage = true;
            point.shapeType = 'image';
            point.imageUrl = symbol.match(/^url\((.*?)\)$/)[1];
        }
        else {
            point.shapeType = 'path';
        }
        if (!point.visible && point.linkToParent) {
            const parentNode = point.linkToParent.fromNode;
            if (parentNode) {
                const parentShapeArgs = parentNode.shapeArgs || {}, { x = 0, y = 0, width = 0, height = 0 } = parentShapeArgs;
                if (!point.shapeArgs) {
                    point.shapeArgs = {};
                }
                if (!point.hasImage) {
                    TreegraphSeries_extend(point.shapeArgs, {
                        d: symbolFn(x, y, width, height, borderRadius ? { r: borderRadius } : void 0)
                    });
                }
                TreegraphSeries_extend(point.shapeArgs, { x, y });
                point.plotX = parentNode.plotX;
                point.plotY = parentNode.plotY;
            }
        }
        else {
            point.plotX = nodeX;
            point.plotY = nodeY;
            point.shapeArgs = {
                x: nodeX,
                y: nodeY,
                width,
                height,
                cursor: !point.node.isLeaf ? 'pointer' : 'default'
            };
            if (!point.hasImage) {
                point.shapeArgs.d = symbolFn(nodeX, nodeY, width, height, borderRadius ? { r: borderRadius } : void 0);
            }
        }
        // Set the anchor position for tooltip.
        point.tooltipPos = chart.inverted ?
            [plotSizeY - nodeY - height / 2, plotSizeX - nodeX - width / 2] :
            [nodeX + width / 2, nodeY];
    }
}
TreegraphSeries.defaultOptions = TreegraphSeries_merge(TreegraphSeries_TreemapSeries.defaultOptions, Treegraph_TreegraphSeriesDefaults);
TreegraphSeries_extend(TreegraphSeries.prototype, {
    forceDL: true,
    pointClass: Treegraph_TreegraphPoint,
    NodeClass: Treegraph_TreegraphNode,
    LinkClass: TreegraphLink,
    isCartesian: false
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('treegraph', TreegraphSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Treegraph_TreegraphSeries = ((/* unused pure expression or super */ null && (TreegraphSeries)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `treegraph` series. If the [type](#series.treegraph.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.treegraph
 * @exclude   allowDrillToNode, boostBlending, boostThreshold, curveFactor,
 * centerInCategory, connectEnds, connectNulls, colorAxis, colorKey,
 * dataSorting, dragDrop, findNearestPointBy, getExtremesFromAll, groupPadding,
 * headers, layout, nodePadding, nodeSizeBy, pointInterval, pointIntervalUnit,
 * pointPlacement, pointStart, relativeXValue, softThreshold, stack, stacking,
 * step, traverseUpButton, xAxis, yAxis, zoneAxis, zones
 * @product   highcharts
 * @requires  modules/treemap
 * @requires  modules/treegraph
 * @apioption series.treegraph
 */
/**
 * @extends   plotOptions.series.marker
 * @excluding enabled, enabledThreshold
 * @apioption series.treegraph.marker
 */
/**
 * @type      {Highcharts.SeriesTreegraphDataLabelsOptionsObject|Array<Highcharts.SeriesTreegraphDataLabelsOptionsObject>}
 * @product   highcharts
 * @apioption series.treegraph.data.dataLabels
 */
/**
 * @sample highcharts/series-treegraph/level-options
 *          Treegraph chart with level options applied
 *
 * @type      {Array<*>}
 * @excluding layoutStartingDirection, layoutAlgorithm
 * @apioption series.treegraph.levels
 */
/**
 * Set collapsed status for nodes level-wise.
 * @type {boolean}
 * @apioption series.treegraph.levels.collapsed
 */
/**
 * Set marker options for nodes at the level.
 * @extends   series.treegraph.marker
 * @apioption series.treegraph.levels.marker
 */
/**
 * An array of data points for the series. For the `treegraph` series type,
 * points can be given in the following ways:
 *
 * 1. The array of arrays, with `keys` property, which defines how the fields in
 *     array should be interpreted
 *    ```js
 *       keys: ['id', 'parent'],
 *       data: [
 *           ['Category1'],
 *           ['Category1', 'Category2']
 *       ]
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the
 *    series' [turboThreshold](#series.area.turboThreshold),
 *    this option is not available.
 *    The data of the treegraph series needs to be formatted in such a way, that
 *    there are no circular dependencies on the nodes
 *
 *  ```js
 *     data: [{
 *         id: 'Category1'
 *     }, {
 *         id: 'Category1',
 *         parent: 'Category2',
 *     }]
 *  ```
 *
 * @type      {Array<*>}
 * @extends   series.treemap.data
 * @product   highcharts
 * @excluding outgoing, weight, value
 * @apioption series.treegraph.data
 */
/**
 * Options used for button, which toggles the collapse status of the node.
 *
 *
 * @apioption series.treegraph.data.collapseButton
 */
/**
 * If point's children should be initially hidden
 *
 * @sample highcharts/series-treegraph/level-options
 *          Treegraph chart with initially hidden children
 *
 * @type {boolean}
 * @apioption series.treegraph.data.collapsed
 */
''; // Gets doclets above into transpiled version

;// ./code/es-modules/masters/modules/treegraph.src.js





/* harmony default export */ const treegraph_src = ((external_highcharts_src_js_default_default()));

export { treegraph_src as default };
