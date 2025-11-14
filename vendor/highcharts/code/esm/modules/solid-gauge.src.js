/**
 * @license Highcharts JS v12.4.0-modified (2025-11-13)
 * @module highcharts/modules/solid-gauge
 * @requires highcharts
 * @requires highcharts/highcharts-more
 *
 * Solid angular gauge module
 *
 * (c) 2010-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import "../highcharts-more.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_more_src_js_48e0d456__ from "../highcharts-more.src.js";
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
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// external ["../highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// ./code/es-modules/Series/CenteredUtilities.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { deg2rad } = (external_highcharts_src_js_default_default());


const { fireEvent, isNumber, pick, relativeLength } = (external_highcharts_src_js_default_default());
/**
 * @private
 */
var CenteredUtilities;
(function (CenteredUtilities) {
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
     * Get the center of the pie based on the size and center options relative
     * to the plot area. Borrowed by the polar and gauge series types.
     *
     * @private
     * @function Highcharts.CenteredSeriesMixin.getCenter
     */
    function getCenter() {
        const options = this.options, chart = this.chart, slicingRoom = 2 * (options.slicedOffset || 0), plotWidth = chart.plotWidth - 2 * slicingRoom, plotHeight = chart.plotHeight - 2 * slicingRoom, centerOption = options.center, smallestSize = Math.min(plotWidth, plotHeight), thickness = options.thickness;
        let handleSlicingRoom, size = options.size, innerSize = options.innerSize || 0, i, value;
        if (typeof size === 'string') {
            size = parseFloat(size);
        }
        if (typeof innerSize === 'string') {
            innerSize = parseFloat(innerSize);
        }
        const positions = [
            pick(centerOption?.[0], '50%'),
            pick(centerOption?.[1], '50%'),
            // Prevent from negative values
            pick(size && size < 0 ? void 0 : options.size, '100%'),
            pick(innerSize && innerSize < 0 ? void 0 : options.innerSize || 0, '0%')
        ];
        // No need for inner size in angular (gauges) series but still required
        // for pie series
        if (chart.angular && !(this instanceof (external_highcharts_src_js_default_Series_default()))) {
            positions[3] = 0;
        }
        for (i = 0; i < 4; ++i) {
            value = positions[i];
            handleSlicingRoom = i < 2 || (i === 2 && /%$/.test(value));
            // I == 0: centerX, relative to width
            // i == 1: centerY, relative to height
            // i == 2: size, relative to smallestSize
            // i == 3: innerSize, relative to size
            positions[i] = relativeLength(value, [plotWidth, plotHeight, smallestSize, positions[2]][i]) + (handleSlicingRoom ? slicingRoom : 0);
        }
        // Inner size cannot be larger than size (#3632)
        if (positions[3] > positions[2]) {
            positions[3] = positions[2];
        }
        // Thickness overrides innerSize, need to be less than pie size (#6647)
        if (isNumber(thickness) &&
            thickness * 2 < positions[2] && thickness > 0) {
            positions[3] = positions[2] - thickness * 2;
        }
        fireEvent(this, 'afterGetCenter', { positions });
        return positions;
    }
    CenteredUtilities.getCenter = getCenter;
    /**
     * GetStartAndEndRadians - Calculates start and end angles in radians.
     * Used in series types such as pie and sunburst.
     *
     * @private
     * @function Highcharts.CenteredSeriesMixin.getStartAndEndRadians
     *
     * @param {number} [start]
     *        Start angle in degrees.
     *
     * @param {number} [end]
     *        Start angle in degrees.
     *
     * @return {Highcharts.RadianAngles}
     *         Returns an object containing start and end angles as radians.
     */
    function getStartAndEndRadians(start, end) {
        const startAngle = isNumber(start) ? start : 0, // Must be a number
        endAngle = ((isNumber(end) && // Must be a number
            end > startAngle && // Must be larger than the start angle
            // difference must be less than 360 degrees
            (end - startAngle) < 360) ?
            end :
            startAngle + 360), correction = -90;
        return {
            start: deg2rad * (startAngle + correction),
            end: deg2rad * (endAngle + correction)
        };
    }
    CenteredUtilities.getStartAndEndRadians = getStartAndEndRadians;
})(CenteredUtilities || (CenteredUtilities = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Series_CenteredUtilities = (CenteredUtilities);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @private
 * @interface Highcharts.RadianAngles
 */ /**
* @name Highcharts.RadianAngles#end
* @type {number}
*/ /**
* @name Highcharts.RadianAngles#start
* @type {number}
*/
''; // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/Pane/PaneComposition.js
/* *
 *
 *  Imports
 *
 * */

const { addEvent, correctFloat, defined, pick: PaneComposition_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/** @private */
function chartGetHoverPane(eventArgs) {
    const chart = this;
    let hoverPane;
    if (eventArgs) {
        chart.pane.forEach((pane) => {
            const x = eventArgs.chartX - chart.plotLeft, y = eventArgs.chartY - chart.plotTop;
            if (isInsidePane(x, y, pane.center)) {
                hoverPane = pane;
            }
        });
    }
    return hoverPane;
}
/**
 * Adjusts the clipBox based on the position of panes.
 * @private
 */
function onSetClip({ clipBox }) {
    if (!this.xAxis ||
        !this.yAxis ||
        (!this.chart.angular && !this.chart.polar)) {
        return;
    }
    const { plotWidth, plotHeight } = this.chart, smallestSize = Math.min(plotWidth, plotHeight), xPane = this.xAxis.pane, yPane = this.yAxis.pane;
    if (xPane && xPane.axis) {
        clipBox.x += xPane.center[0] -
            (xPane.center[2] / smallestSize) * plotWidth / 2;
    }
    if (yPane && yPane.axis) {
        clipBox.y += yPane.center[1] -
            (yPane.center[2] / smallestSize) * plotHeight / 2;
    }
}
/** @private */
function compose(ChartClass, PointerClass, SeriesClass) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.getHoverPane) {
        chartProto.collectionsWithUpdate.push('pane');
        chartProto.getHoverPane = chartGetHoverPane;
        addEvent(ChartClass, 'afterIsInsidePlot', onChartAfterIsInsiderPlot);
        addEvent(PointerClass, 'afterGetHoverData', onPointerAfterGetHoverData);
        addEvent(PointerClass, 'beforeGetHoverData', onPointerBeforeGetHoverData);
        addEvent(SeriesClass, 'setClip', onSetClip);
    }
}
/**
 * Check whether element is inside or outside pane.
 * @private
 * @param  {number} x
 * Element's x coordinate
 * @param  {number} y
 * Element's y coordinate
 * @param  {Array<number>} center
 * Pane's center (x, y) and diameter
 * @param  {number} startAngle
 * Pane's normalized start angle in radians (<-PI, PI>)
 * @param  {number} endAngle
 * Pane's normalized end angle in radians (<-PI, PI>)
 */
function isInsidePane(x, y, center, startAngle, endAngle) {
    let insideSlice = true;
    const cx = center[0], cy = center[1], twoPi = 2 * Math.PI;
    const distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    if (defined(startAngle) && defined(endAngle)) {
        // Round angle to N-decimals to avoid numeric errors
        let angle = Math.atan2(correctFloat(y - cy, 8), correctFloat(x - cx, 8));
        // Normalize angle to [0, 2π)
        angle = (angle + twoPi) % (twoPi);
        startAngle = (startAngle + twoPi) % (twoPi);
        endAngle = (endAngle + twoPi) % (twoPi);
        // Ignore full circle panes:
        if (Math.abs(endAngle - startAngle) > 1e-6) {
            // If the normalized start angle is greater than the end angle,
            // it means the arc wraps around 0°. In this case, we check
            // if the angle falls into either [startAngle, 2π) or [0, endAngle].
            if (startAngle > endAngle) {
                insideSlice = (angle >= startAngle ||
                    angle <= endAngle);
            }
            else {
                // In this case, we simply check if angle is within the
                // [startAngle, endAngle] range
                insideSlice = angle >= startAngle &&
                    angle <= endAngle;
            }
        }
    }
    else {
        // If no start/end angles are defined, treat it as a full circle
        insideSlice = true;
    }
    // Round up radius because x and y values are rounded
    return distance <= Math.ceil(center[2] / 2) && insideSlice;
}
/**
 * Check if (x, y) position is within pane for polar.
 * @private
 */
function onChartAfterIsInsiderPlot(e) {
    const chart = this;
    if (chart.polar) {
        if (e.options.inverted) {
            [e.x, e.y] = [e.y, e.x];
        }
        e.isInsidePlot = chart.pane.some((pane) => isInsidePane(e.x, e.y, pane.center, pane.axis && pane.axis.normalizedStartAngleRad, pane.axis && pane.axis.normalizedEndAngleRad));
    }
}
/**
 *
 */
function onPointerAfterGetHoverData(eventArgs) {
    const chart = this.chart;
    if (eventArgs.hoverPoint &&
        eventArgs.hoverPoint.plotX &&
        eventArgs.hoverPoint.plotY &&
        chart.hoverPane &&
        !isInsidePane(eventArgs.hoverPoint.plotX, eventArgs.hoverPoint.plotY, chart.hoverPane.center)) {
        eventArgs.hoverPoint = void 0;
    }
}
/** @private */
function onPointerBeforeGetHoverData(eventArgs) {
    const chart = this.chart;
    if (chart.polar) {
        // Find pane we are currently hovering over.
        chart.hoverPane = chart.getHoverPane(eventArgs);
        // Edit filter method to handle polar
        eventArgs.filter = function (s) {
            return (s.visible &&
                !(!eventArgs.shared && s.directTouch) && // #3821
                PaneComposition_pick(s.options.enableMouseTracking, true) &&
                (!chart.hoverPane || s.xAxis.pane === chart.hoverPane));
        };
    }
    else {
        chart.hoverPane = void 0;
    }
}
/* *
 *
 *  Default Export
 *
 * */
const PaneComposition = {
    compose
};
/* harmony default export */ const Pane_PaneComposition = (PaneComposition);

;// ./code/es-modules/Extensions/Pane/PaneDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defaultOptions } = (external_highcharts_src_js_default_default());
/* *
 *
 *  API Options
 *
 * */
/**
 * A background item or an array of such for the pane. When used in
 * `Highcharts.setOptions` for theming, the background must be a single item.
 *
 * @sample {highcharts} highcharts/demo/gauge-speedometer/
 *         Speedometer gauge with multiple backgrounds
 *
 * @type         {Array<*>}
 * @optionparent pane.background
 */
const background = {
    /**
     * The class name for this background.
     *
     * @sample {highcharts} highcharts/css/pane/
     *         Panes styled by CSS
     * @sample {highstock} highcharts/css/pane/
     *         Panes styled by CSS
     * @sample {highmaps} highcharts/css/pane/
     *         Panes styled by CSS
     *
     * @type      {string}
     * @default   highcharts-pane
     * @since     5.0.0
     * @apioption pane.background.className
     */
    /**
     * The shape of the pane background. When `solid`, the background
     * is circular. When `arc`, the background extends only from the min
     * to the max of the value axis.
     *
     * @type    {Highcharts.PaneBackgroundShapeValue}
     * @since   2.3.0
     * @product highcharts
     */
    shape: 'circle',
    /**
     * The border radius of the pane background when the shape is `arc`. Can be
     * a number (pixels) or a percentage string.
     *
     * @since 11.4.2
     * @sample  highcharts/series-solidgauge/pane-borderradius
     *          Circular gauge and pane with equal border radius
     * @product highcharts
     * @type    {number|string}
     */
    borderRadius: 0,
    /**
     * The pixel border width of the pane background.
     *
     * @since 2.3.0
     * @product highcharts
     */
    borderWidth: 1,
    /**
     * The pane background border color.
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since   2.3.0
     * @product highcharts
     */
    borderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The background color or gradient for the pane.
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, #ffffff], [1, #e6e6e6]] }
     * @since   2.3.0
     * @product highcharts
     */
    backgroundColor: {
        /** @ignore-option */
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        /** @ignore-option */
        stops: [
            [0, "#ffffff" /* Palette.backgroundColor */],
            [1, "#e6e6e6" /* Palette.neutralColor10 */]
        ]
    },
    /** @ignore-option */
    from: -Number.MAX_VALUE, // Corrected to axis min
    /**
     * The inner radius of the pane background. Can be either numeric
     * (pixels) or a percentage string.
     *
     * @type    {number|string}
     * @since   2.3.0
     * @product highcharts
     */
    innerRadius: 0,
    /** @ignore-option */
    to: Number.MAX_VALUE, // Corrected to axis max
    /**
     * The outer radius of the circular pane background. Can be either
     * numeric (pixels) or a percentage string.
     *
     * @type     {number|string}
     * @since    2.3.0
     * @product  highcharts
     */
    outerRadius: '105%'
};
/**
 * The pane serves as a container for axes and backgrounds for circular
 * gauges and polar charts.
 *
 * When used in `Highcharts.setOptions` for theming, the pane must be a single
 * object, otherwise arrays are supported.
 *
 * @type         {*|Array<*>}
 * @since        2.3.0
 * @product      highcharts
 * @requires     highcharts-more
 * @optionparent pane
 */
const pane = {
    background,
    /**
     * The end angle of the polar X axis or gauge value axis, given in
     * degrees where 0 is north. Defaults to [startAngle](#pane.startAngle)
     * + 360.
     *
     * @sample {highcharts} highcharts/demo/gauge-vu-meter/
     *         VU-meter with custom start and end angle
     *
     * @type      {number}
     * @since     2.3.0
     * @product   highcharts
     * @apioption pane.endAngle
     */
    /**
     * The center of a polar chart or angular gauge, given as an array
     * of [x, y] positions. Positions can be given as integers that
     * transform to pixels, or as percentages of the plot area size.
     *
     * @sample {highcharts} highcharts/demo/gauge-vu-meter/
     *         Two gauges with different center
     *
     * @type    {Array<string|number>}
     * @default ["50%", "50%"]
     * @since   2.3.0
     * @product highcharts
     */
    center: ['50%', '50%'],
    /**
     * The size of the pane, either as a number defining pixels, or a
     * percentage defining a percentage of the available plot area (the
     * smallest of the plot height or plot width).
     *
     * @sample {highcharts} highcharts/demo/gauge-vu-meter/
     *         Smaller size
     *
     * @type    {number|string}
     * @product highcharts
     */
    size: '85%',
    /**
     * The inner size of the pane, either as a number defining pixels, or a
     * percentage defining a percentage of the pane's size.
     *
     * @sample {highcharts} highcharts/series-polar/column-inverted-inner
     *         The inner size set to 20%
     *
     * @type    {number|string}
     * @product highcharts
     */
    innerSize: '0%',
    /**
     * The start angle of the polar X axis or gauge axis, given in degrees
     * where 0 is north. Defaults to 0.
     *
     * @sample {highcharts} highcharts/demo/gauge-vu-meter/
     *         VU-meter with custom start and end angle
     *
     * @since   2.3.0
     * @product highcharts
     */
    startAngle: 0
};
defaultOptions.pane = pane;
/* *
 *
 *  Default Export
 *
 * */
const PaneDefaults = {
    pane,
    background
};
/* harmony default export */ const Pane_PaneDefaults = (PaneDefaults);

;// ./code/es-modules/Extensions/Pane/Pane.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { extend, merge, splat } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Pane object allows options that are common to a set of X and Y axes.
 *
 * In the future, this can be extended to basic Highcharts and Highcharts Stock.
 *
 * @private
 * @class
 * @name Highcharts.Pane
 * @param {Highcharts.PaneOptions} options
 * @param {Highcharts.Chart} chart
 */
class Pane {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(options, chart) {
        this.coll = 'pane'; // Member of chart.pane
        this.init(options, chart);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the Pane object
     *
     * @private
     * @function Highcharts.Pane#init
     *
     * @param {Highcharts.PaneOptions} options
     *
     * @param {Highcharts.Chart} chart
     */
    init(options, chart) {
        this.chart = chart;
        this.background = [];
        chart.pane.push(this);
        this.setOptions(options);
    }
    /**
     * @private
     * @function Highcharts.Pane#setOptions
     *
     * @param {Highcharts.PaneOptions} options
     */
    setOptions(options) {
        // Set options. Angular charts have a default background (#3318)
        this.options = options = merge(Pane_PaneDefaults.pane, { background: this.chart.angular ? {} : void 0 }, options);
    }
    /**
     * Render the pane with its backgrounds.
     *
     * @private
     * @function Highcharts.Pane#render
     */
    render() {
        const options = this.options, renderer = this.chart.renderer;
        if (!this.group) {
            this.group = renderer.g('pane-group')
                .attr({ zIndex: options.zIndex || 0 })
                .add();
        }
        this.updateCenter();
        let backgroundOption = this.options.background;
        // Render the backgrounds
        if (backgroundOption) {
            backgroundOption = splat(backgroundOption);
            const len = Math.max(backgroundOption.length, this.background.length || 0);
            for (let i = 0; i < len; i++) {
                // #6641 - if axis exists, chart is circular and apply
                // background
                if (backgroundOption[i] && this.axis) {
                    this.renderBackground(merge(Pane_PaneDefaults.background, backgroundOption[i]), i);
                }
                else if (this.background[i]) {
                    this.background[i] = this.background[i].destroy();
                    this.background.splice(i, 1);
                }
            }
        }
    }
    /**
     * Render an individual pane background.
     *
     * @private
     * @function Highcharts.Pane#renderBackground
     *
     * @param {Highcharts.PaneBackgroundOptions} backgroundOptions
     *        Background options
     *
     * @param {number} i
     *        The index of the background in this.backgrounds
     */
    renderBackground(backgroundOptions, i) {
        const attribs = {
            'class': 'highcharts-pane ' + (backgroundOptions.className || '')
        };
        let method = 'animate';
        if (!this.chart.styledMode) {
            extend(attribs, {
                'fill': backgroundOptions.backgroundColor,
                'stroke': backgroundOptions.borderColor,
                'stroke-width': backgroundOptions.borderWidth
            });
        }
        if (!this.background[i]) {
            this.background[i] = this.chart.renderer
                .path()
                .add(this.group);
            method = 'attr';
        }
        this.background[i][method]({
            'd': this.axis.getPlotBandPath(backgroundOptions.from, backgroundOptions.to, backgroundOptions)
        }).attr(attribs);
    }
    /**
     * Gets the center for the pane and its axis.
     *
     * @private
     * @function Highcharts.Pane#updateCenter
     * @param {Highcharts.Axis} [axis]
     */
    updateCenter(axis) {
        this.center = (axis ||
            this.axis ||
            {}).center = Series_CenteredUtilities.getCenter.call(this);
    }
    /**
     * Destroy the pane item
     *
     * @ignore
     * @private
     * @function Highcharts.Pane#destroy
     * /
    destroy: function () {
        erase(this.chart.pane, this);
        this.background.forEach(function (background) {
            background.destroy();
        });
        this.background.length = 0;
        this.group = this.group.destroy();
    },
    */
    /**
     * Update the pane item with new options
     *
     * @private
     * @function Highcharts.Pane#update
     * @param {Highcharts.PaneOptions} options
     *        New pane options
     * @param {boolean} [redraw]
     */
    update(options, redraw) {
        merge(true, this.options, options);
        this.setOptions(this.options);
        this.render();
        this.chart.axes.forEach(function (axis) {
            if (axis.pane === this) {
                axis.pane = null;
                axis.update({}, redraw);
            }
        }, this);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
Pane.compose = Pane_PaneComposition.compose;
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Pane_Pane = (Pane);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"arc"|"circle"|"solid"} Highcharts.PaneBackgroundShapeValue
 */
''; // Keeps doclets above in JS file

;// external ["../highcharts-more.src.js","default","Series","types","arearange"]

;// external ["../highcharts-more.src.js","default","Series","types","areasplinerange"]

;// external ["../highcharts-more.src.js","default","Series","types","boxplot"]

;// external ["../highcharts-more.src.js","default","Series","types","bubble"]
const external_highcharts_more_src_js_default_Series_types_bubble_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_more_src_js_48e0d456__["default"].Series.types.bubble;
var external_highcharts_more_src_js_default_Series_types_bubble_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_more_src_js_default_Series_types_bubble_namespaceObject);
;// external ["../highcharts-more.src.js","default","Series","types","columnrange"]

;// external ["../highcharts-more.src.js","default","Series","types","columnpyramid"]

;// external ["../highcharts-more.src.js","default","Series","types","errorbar"]

;// external ["../highcharts-more.src.js","default","Series","types","gauge"]

;// external ["../highcharts-more.src.js","default","Series","types","packedbubble"]
const external_highcharts_more_src_js_default_Series_types_packedbubble_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_more_src_js_48e0d456__["default"].Series.types.packedbubble;
var external_highcharts_more_src_js_default_Series_types_packedbubble_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_more_src_js_default_Series_types_packedbubble_namespaceObject);
;// external ["../highcharts-more.src.js","default","Series","types","polygon"]

;// ./code/es-modules/Extensions/BorderRadius.js
/* *
 *
 *  Highcharts Border Radius module
 *
 *  Author: Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defaultOptions: BorderRadius_defaultOptions } = (external_highcharts_src_js_default_default());

const { noop } = (external_highcharts_src_js_default_default());

const { addEvent: BorderRadius_addEvent, extend: BorderRadius_extend, isObject, merge: BorderRadius_merge, relativeLength: BorderRadius_relativeLength } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
const defaultBorderRadiusOptions = {
    radius: 0,
    scope: 'stack',
    where: void 0
};
/* *
 *
 *  Variables
 *
 * */
let oldArc = noop;
let oldRoundedRect = noop;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function applyBorderRadius(path, i, r) {
    const a = path[i];
    let b = path[i + 1];
    if (b[0] === 'Z') {
        b = path[0];
    }
    let line, arc, fromLineToArc;
    // From straight line to arc
    if ((a[0] === 'M' || a[0] === 'L') && b[0] === 'A') {
        line = a;
        arc = b;
        fromLineToArc = true;
        // From arc to straight line
    }
    else if (a[0] === 'A' && (b[0] === 'M' || b[0] === 'L')) {
        line = b;
        arc = a;
    }
    if (line && arc && arc.params) {
        const bigR = arc[1], 
        // In our use cases, outer pie slice arcs are clockwise and inner
        // arcs (donut/sunburst etc) are anti-clockwise
        clockwise = arc[5], params = arc.params, { start, end, cx, cy } = params;
        // Some geometric constants
        const relativeR = clockwise ? (bigR - r) : (bigR + r), 
        // The angle, on the big arc, that the border radius arc takes up
        angleOfBorderRadius = relativeR ? Math.asin(r / relativeR) : 0, angleOffset = clockwise ?
            angleOfBorderRadius :
            -angleOfBorderRadius, 
        // The distance along the radius of the big arc to the starting
        // point of the small border radius arc
        distanceBigCenterToStartArc = (Math.cos(angleOfBorderRadius) *
            relativeR);
        // From line to arc
        if (fromLineToArc) {
            // Update the cache
            params.start = start + angleOffset;
            // First move to the start position at the radial line. We want to
            // start one borderRadius closer to the center.
            line[1] = cx + distanceBigCenterToStartArc * Math.cos(start);
            line[2] = cy + distanceBigCenterToStartArc * Math.sin(start);
            // Now draw an arc towards the point where the small circle touches
            // the great circle.
            path.splice(i + 1, 0, [
                'A',
                r,
                r,
                0, // Slanting,
                0, // Long arc
                1, // Clockwise
                cx + bigR * Math.cos(params.start),
                cy + bigR * Math.sin(params.start)
            ]);
            // From arc to line
        }
        else {
            // Update the cache
            params.end = end - angleOffset;
            // End the big arc a bit earlier
            arc[6] = cx + bigR * Math.cos(params.end);
            arc[7] = cy + bigR * Math.sin(params.end);
            // Draw a small arc towards a point on the end angle, but one
            // borderRadius closer to the center relative to the perimeter.
            path.splice(i + 1, 0, [
                'A',
                r,
                r,
                0,
                0,
                1,
                cx + distanceBigCenterToStartArc * Math.cos(end),
                cy + distanceBigCenterToStartArc * Math.sin(end)
            ]);
        }
        // Long or short arc must be reconsidered because we have modified the
        // start and end points
        arc[4] = Math.abs(params.end - params.start) < Math.PI ? 0 : 1;
    }
}
/**
 * Extend arc with borderRadius.
 * @private
 */
function arc(x, y, w, h, options = {}) {
    const path = oldArc(x, y, w, h, options), { brStart = true, brEnd = true, innerR = 0, r = w, start = 0, end = 0 } = options;
    if (options.open || !options.borderRadius) {
        return path;
    }
    const alpha = end - start, sinHalfAlpha = Math.sin(alpha / 2), borderRadius = Math.max(Math.min(BorderRadius_relativeLength(options.borderRadius || 0, r - innerR), 
    // Cap to half the sector radius
    (r - innerR) / 2, 
    // For smaller pie slices, cap to the largest small circle that
    // can be fitted within the sector
    (r * sinHalfAlpha) / (1 + sinHalfAlpha)), 0), 
    // For the inner radius, we need an extra cap because the inner arc
    // is shorter than the outer arc
    innerBorderRadius = Math.min(borderRadius, 2 * (alpha / Math.PI) * innerR);
    // Apply turn-by-turn border radius. Start at the end since we're
    // splicing in arc segments.
    let i = path.length - 1;
    while (i--) {
        if ((!brStart && (i === 0 || i === 3)) ||
            (!brEnd && (i === 1 || i === 2))) {
            continue;
        }
        applyBorderRadius(path, i, i > 1 ? innerBorderRadius : borderRadius);
    }
    return path;
}
/** @private */
function seriesOnAfterColumnTranslate() {
    if (this.options.borderRadius &&
        !(this.chart.is3d && this.chart.is3d())) {
        const { options, yAxis } = this, percent = options.stacking === 'percent', seriesDefault = BorderRadius_defaultOptions.plotOptions?.[this.type]
            ?.borderRadius, borderRadius = optionsToObject(options.borderRadius, isObject(seriesDefault) ? seriesDefault : {}), reversed = yAxis.options.reversed;
        for (const point of this.points) {
            const { shapeArgs } = point;
            if (point.shapeType === 'roundedRect' && shapeArgs) {
                const { width = 0, height = 0, y = 0 } = shapeArgs;
                let brBoxY = y, brBoxHeight = height;
                // It would be nice to refactor StackItem.getStackBox/
                // setOffset so that we could get a reliable box out of
                // it. Currently it is close if we remove the label
                // offset, but we still need to run crispCol and also
                // flip it if inverted, so atm it is simpler to do it
                // like the below.
                if (borderRadius.scope === 'stack' &&
                    point.stackTotal) {
                    const stackEnd = yAxis.translate(percent ? 100 : point.stackTotal, false, true, false, true), stackThreshold = yAxis.translate(options.threshold || 0, false, true, false, true), box = this.crispCol(0, Math.min(stackEnd, stackThreshold), 0, Math.abs(stackEnd - stackThreshold));
                    brBoxY = box.y;
                    brBoxHeight = box.height;
                }
                const flip = (point.negative ? -1 : 1) *
                    (reversed ? -1 : 1) === -1;
                // Handle the where option
                let where = borderRadius.where;
                // Waterfall, hanging columns should have rounding on
                // all sides
                if (!where &&
                    this.is('waterfall') &&
                    Math.abs((point.yBottom || 0) -
                        (this.translatedThreshold || 0)) > this.borderWidth) {
                    where = 'all';
                }
                if (!where) {
                    where = 'end';
                }
                // Get the radius
                const r = Math.min(BorderRadius_relativeLength(borderRadius.radius, width), width / 2, 
                // Cap to the height, but not if where is `end`
                where === 'all' ? height / 2 : Infinity) || 0;
                // If the `where` option is 'end', cut off the
                // rectangles by making the border-radius box one r
                // greater, so that the imaginary radius falls outside
                // the rectangle.
                if (where === 'end') {
                    if (flip) {
                        brBoxY -= r;
                        brBoxHeight += r;
                    }
                    else {
                        brBoxHeight += r;
                    }
                }
                BorderRadius_extend(shapeArgs, { brBoxHeight, brBoxY, r });
            }
        }
    }
}
/** @private */
function BorderRadius_compose(SeriesClass, SVGElementClass, SVGRendererClass) {
    const PieSeriesClass = SeriesClass.types.pie;
    if (!SVGElementClass.symbolCustomAttribs.includes('borderRadius')) {
        const symbols = SVGRendererClass.prototype.symbols;
        BorderRadius_addEvent(SeriesClass, 'afterColumnTranslate', seriesOnAfterColumnTranslate, {
            // After columnrange and polar column modifications
            order: 9
        });
        BorderRadius_addEvent(PieSeriesClass, 'afterTranslate', pieSeriesOnAfterTranslate);
        SVGElementClass.symbolCustomAttribs.push('borderRadius', 'brBoxHeight', 'brBoxY', 'brEnd', 'brStart');
        oldArc = symbols.arc;
        oldRoundedRect = symbols.roundedRect;
        symbols.arc = arc;
        symbols.roundedRect = roundedRect;
    }
}
/** @private */
function optionsToObject(options, seriesBROptions) {
    if (!isObject(options)) {
        options = { radius: options || 0 };
    }
    return BorderRadius_merge(defaultBorderRadiusOptions, seriesBROptions, options);
}
/** @private */
function pieSeriesOnAfterTranslate() {
    const borderRadius = optionsToObject(this.options.borderRadius);
    for (const point of this.points) {
        const shapeArgs = point.shapeArgs;
        if (shapeArgs) {
            shapeArgs.borderRadius = BorderRadius_relativeLength(borderRadius.radius, (shapeArgs.r || 0) - ((shapeArgs.innerR) || 0));
        }
    }
}
/**
 * Extend roundedRect with individual cutting through rOffset.
 * @private
 */
function roundedRect(x, y, width, height, options = {}) {
    const path = oldRoundedRect(x, y, width, height, options), { r = 0, brBoxHeight = height, brBoxY = y } = options, brOffsetTop = y - brBoxY, brOffsetBtm = (brBoxY + brBoxHeight) - (y + height), 
    // When the distance to the border-radius box is greater than the r
    // itself, it means no border radius. The -0.1 accounts for float
    // rounding errors.
    rTop = (brOffsetTop - r) > -0.1 ? 0 : r, rBtm = (brOffsetBtm - r) > -0.1 ? 0 : r, cutTop = Math.max(rTop && brOffsetTop, 0), cutBtm = Math.max(rBtm && brOffsetBtm, 0);
    /*

    The naming of control points:

      / a -------- b \
     /                \
    h                  c
    |                  |
    |                  |
    |                  |
    g                  d
     \                /
      \ f -------- e /

    */
    const a = [x + rTop, y], b = [x + width - rTop, y], c = [x + width, y + rTop], d = [
        x + width, y + height - rBtm
    ], e = [
        x + width - rBtm,
        y + height
    ], f = [x + rBtm, y + height], g = [x, y + height - rBtm], h = [x, y + rTop];
    const applyPythagoras = (r, altitude) => Math.sqrt(Math.pow(r, 2) - Math.pow(altitude, 2));
    // Inside stacks, cut off part of the top
    if (cutTop) {
        const base = applyPythagoras(rTop, rTop - cutTop);
        a[0] -= base;
        b[0] += base;
        c[1] = h[1] = y + rTop - cutTop;
    }
    // Column is lower than the radius. Cut off bottom inside the top
    // radius.
    if (height < rTop - cutTop) {
        const base = applyPythagoras(rTop, rTop - cutTop - height);
        c[0] = d[0] = x + width - rTop + base;
        e[0] = Math.min(c[0], e[0]);
        f[0] = Math.max(d[0], f[0]);
        g[0] = h[0] = x + rTop - base;
        c[1] = h[1] = y + height;
    }
    // Inside stacks, cut off part of the bottom
    if (cutBtm) {
        const base = applyPythagoras(rBtm, rBtm - cutBtm);
        e[0] += base;
        f[0] -= base;
        d[1] = g[1] = y + height - rBtm + cutBtm;
    }
    // Cut off top inside the bottom radius
    if (height < rBtm - cutBtm) {
        const base = applyPythagoras(rBtm, rBtm - cutBtm - height);
        c[0] = d[0] = x + width - rBtm + base;
        b[0] = Math.min(c[0], b[0]);
        a[0] = Math.max(d[0], a[0]);
        g[0] = h[0] = x + rBtm - base;
        d[1] = g[1] = y;
    }
    // Preserve the box for data labels
    path.length = 0;
    path.push(['M', ...a], 
    // Top side
    ['L', ...b], 
    // Top right corner
    ['A', rTop, rTop, 0, 0, 1, ...c], 
    // Right side
    ['L', ...d], 
    // Bottom right corner
    ['A', rBtm, rBtm, 0, 0, 1, ...e], 
    // Bottom side
    ['L', ...f], 
    // Bottom left corner
    ['A', rBtm, rBtm, 0, 0, 1, ...g], 
    // Left side
    ['L', ...h], 
    // Top left corner
    ['A', rTop, rTop, 0, 0, 1, ...a], ['Z']);
    return path;
}
/* *
 *
 *  Default Export
 *
 * */
const BorderRadius = {
    compose: BorderRadius_compose,
    optionsToObject
};
/* harmony default export */ const Extensions_BorderRadius = (BorderRadius);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Detailed options for border radius.
 *
 * @sample  {highcharts} highcharts/plotoptions/column-borderradius/
 *          Rounded columns
 * @sample  highcharts/plotoptions/series-border-radius
 *          Column and pie with rounded border
 *
 * @interface Highcharts.BorderRadiusOptionsObject
 */ /**
* The border radius. A number signifies pixels. A percentage string, like for
* example `50%`, signifies a relative size. For columns this is relative to the
* column width, for pies it is relative to the radius and the inner radius.
*
* @name Highcharts.BorderRadiusOptionsObject#radius
* @type {string|number}
*/ /**
* The scope of the rounding for column charts. In a stacked column chart, the
* value `point` means each single point will get rounded corners. The value
* `stack` means the rounding will apply to the full stack, so that only points
* close to the top or bottom will receive rounding.
*
* @name Highcharts.BorderRadiusOptionsObject#scope
* @validvalue ["point", "stack"]
* @type {string}
*/ /**
* For column charts, where in the point or stack to apply rounding. The `end`
* value means only those corners at the point value will be rounded, leaving
* the corners at the base or threshold unrounded. This is the most intuitive
* behaviour. The `all` value means also the base will be rounded.
*
* @name Highcharts.BorderRadiusOptionsObject#where
* @validvalue ["all", "end"]
* @type {string}
* @default end
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Core/Axis/RadialAxisDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  Extension for radial axes
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/**
     * Circular axis around the perimeter of a polar chart.
     * @private
     */
const defaultCircularOptions = {
    gridLineWidth: 1, // Spokes
    labels: {
        align: void 0, // Auto
        x: 0,
        y: void 0 // Auto
    },
    maxPadding: 0,
    minPadding: 0,
    showLastLabel: false,
    tickLength: 0
};
/**
 * The default options extend defaultYAxisOptions.
 * @private
 */
const defaultRadialGaugeOptions = {
    endOnTick: false,
    gridLineWidth: 0,
    labels: {
        align: 'center',
        distance: -25,
        x: 0,
        y: void 0 // Auto
    },
    lineWidth: 1,
    minorGridLineWidth: 0,
    minorTickInterval: 'auto',
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickWidth: 1,
    startOnTick: false,
    tickLength: 10,
    tickPixelInterval: 100,
    tickPosition: 'inside',
    tickWidth: 2,
    title: {
        rotation: 0,
        text: ''
    },
    zIndex: 2 // Behind dials, points in the series group
};
/**
 * Radial axis, like a spoke in a polar chart.
 * @private
 */
const defaultRadialOptions = {
    /**
     * In a polar chart, this is the angle of the Y axis in degrees, where
     * 0 is up and 90 is right. The angle determines the position of the
     * axis line and the labels, though the coordinate system is unaffected.
     * Since v8.0.0 this option is also applicable for X axis (inverted
     * polar).
     *
     * @sample {highcharts} highcharts/xaxis/angle/
     *         Custom X axis' angle on inverted polar chart
     * @sample {highcharts} highcharts/yaxis/angle/
     *         Dual axis polar chart
     *
     * @type      {number}
     * @default   0
     * @since     4.2.7
     * @product   highcharts
     * @apioption xAxis.angle
     */
    /**
     * Polar charts only. Whether the grid lines should draw as a polygon
     * with straight lines between categories, or as circles. Can be either
     * `circle` or `polygon`. Since v8.0.0 this option is also applicable
     * for X axis (inverted polar).
     *
     * @sample {highcharts} highcharts/demo/polar-spider/
     *         Polygon grid lines
     * @sample {highcharts} highcharts/xaxis/gridlineinterpolation/
     *         Circle and polygon on inverted polar
     * @sample {highcharts} highcharts/yaxis/gridlineinterpolation/
     *         Circle and polygon
     *
     * @type       {string}
     * @product    highcharts
     * @validvalue ["circle", "polygon"]
     * @apioption  xAxis.gridLineInterpolation
     */
    gridLineInterpolation: 'circle',
    gridLineWidth: 1,
    labels: {
        align: 'right',
        padding: 5,
        x: -3,
        y: -2
    },
    showLastLabel: false,
    title: {
        x: 4,
        text: null,
        rotation: 90
    }
};
/* *
 *
 *  Default Export
 *
 * */
const RadialAxisDefaults = {
    circular: defaultCircularOptions,
    radial: defaultRadialOptions,
    radialGauge: defaultRadialGaugeOptions
};
/* harmony default export */ const Axis_RadialAxisDefaults = (RadialAxisDefaults);

;// ./code/es-modules/Core/Axis/RadialAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { defaultOptions: RadialAxis_defaultOptions } = (external_highcharts_src_js_default_default());

const { composed, noop: RadialAxis_noop } = (external_highcharts_src_js_default_default());

const { addEvent: RadialAxis_addEvent, correctFloat: RadialAxis_correctFloat, defined: RadialAxis_defined, extend: RadialAxis_extend, fireEvent: RadialAxis_fireEvent, isObject: RadialAxis_isObject, merge: RadialAxis_merge, pick: RadialAxis_pick, pushUnique, relativeLength: RadialAxis_relativeLength, splat: RadialAxis_splat, wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var RadialAxis;
(function (RadialAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    RadialAxis.radialDefaultOptions = RadialAxis_merge(Axis_RadialAxisDefaults);
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * In case of auto connect, add one closestPointRange to the max value
     * right before tickPositions are computed, so that ticks will extend
     * passed the real max.
     * @private
     */
    function beforeSetTickPositions() {
        // If autoConnect is true, polygonal grid lines are connected, and
        // one closestPointRange is added to the X axis to prevent the last
        // point from overlapping the first.
        this.autoConnect = (this.isCircular &&
            typeof RadialAxis_pick(this.userMax, this.options.max) === 'undefined' &&
            RadialAxis_correctFloat(this.endAngleRad - this.startAngleRad) ===
                RadialAxis_correctFloat(2 * Math.PI));
        // This will lead to add an extra tick to xAxis in order to display
        // a correct range on inverted polar
        if (!this.isCircular && this.chart.inverted) {
            this.max++;
        }
        if (this.autoConnect) {
            this.max += ((this.categories && 1) ||
                this.pointRange ||
                this.closestPointRange ||
                0); // #1197, #2260
        }
    }
    /**
     * Augments methods for the value axis.
     *
     * @private
     *
     * @param {Highcharts.Axis} AxisClass
     * Axis class to extend.
     *
     * @param {Highcharts.Tick} TickClass
     * Tick class to use.
     *
     * @return {Highcharts.Axis}
     * Axis composition.
     */
    function compose(AxisClass, TickClass) {
        if (pushUnique(composed, 'Axis.Radial')) {
            RadialAxis_addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            RadialAxis_addEvent(AxisClass, 'autoLabelAlign', onAxisAutoLabelAlign);
            RadialAxis_addEvent(AxisClass, 'destroy', onAxisDestroy);
            RadialAxis_addEvent(AxisClass, 'init', onAxisInit);
            RadialAxis_addEvent(AxisClass, 'initialAxisTranslation', onAxisInitialAxisTranslation);
            RadialAxis_addEvent(TickClass, 'afterGetLabelPosition', onTickAfterGetLabelPosition);
            RadialAxis_addEvent(TickClass, 'afterGetPosition', onTickAfterGetPosition);
            RadialAxis_addEvent((external_highcharts_src_js_default_default()), 'setOptions', onGlobalSetOptions);
            wrap(TickClass.prototype, 'getMarkPath', wrapTickGetMarkPath);
        }
        return AxisClass;
    }
    RadialAxis.compose = compose;
    /**
     * Attach and return collecting function for labels in radial axis for
     * anti-collision.
     *
     * @private
     */
    function createLabelCollector() {
        return () => {
            if (this.isRadial &&
                this.tickPositions &&
                // Undocumented option for now, but working
                this.options.labels &&
                this.options.labels.allowOverlap !== true) {
                return this.tickPositions
                    .map((pos) => this.ticks[pos]?.label)
                    .filter((label) => Boolean(label));
            }
        };
    }
    /**
     * Creates an empty collector function.
     * @private
     */
    function createLabelCollectorHidden() {
        return RadialAxis_noop;
    }
    /**
     * Find the correct end values of crosshair in polar.
     * @private
     */
    function getCrosshairPosition(options, x1, y1) {
        const center = this.pane.center;
        let value = options.value, shapeArgs, end, x2, y2;
        if (this.isCircular) {
            if (!RadialAxis_defined(value)) {
                // When the snap is set to false
                x2 = options.chartX || 0;
                y2 = options.chartY || 0;
                value = this.translate(Math.atan2(y2 - y1, x2 - x1) - this.startAngleRad, true);
            }
            else if (options.point) {
                // When the snap is set to true
                shapeArgs = options.point.shapeArgs || {};
                if (shapeArgs.start) {
                    // Find a true value of the point based on the
                    // angle
                    value = this.chart.inverted ?
                        this.translate(options.point.rectPlotY, true) :
                        options.point.x;
                }
            }
            end = this.getPosition(value);
            x2 = end.x;
            y2 = end.y;
        }
        else {
            if (!RadialAxis_defined(value)) {
                x2 = options.chartX;
                y2 = options.chartY;
            }
            if (RadialAxis_defined(x2) && RadialAxis_defined(y2)) {
                // Calculate radius of non-circular axis' crosshair
                y1 = center[1] + this.chart.plotTop;
                value = this.translate(Math.min(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), center[2] / 2) - center[3] / 2, true);
            }
        }
        return [value, x2 || 0, y2 || 0];
    }
    /**
     * Get the path for the axis line. This method is also referenced in the
     * getPlotLinePath method.
     *
     * @private
     * @param {number} _lineWidth
     * Line width is not used.
     * @param {number} [radius]
     * Radius of radial path.
     * @param {number} [innerRadius]
     * Inner radius of radial path.
     */
    function getLinePath(_lineWidth, radius, innerRadius) {
        const center = this.pane.center, chart = this.chart, left = this.left || 0, top = this.top || 0;
        let end, r = RadialAxis_pick(radius, center[2] / 2 - this.offset), path;
        if (typeof innerRadius === 'undefined') {
            innerRadius = this.horiz ? 0 : this.center && -this.center[3] / 2;
        }
        // In case when innerSize of pane is set, it must be included
        if (innerRadius) {
            r += innerRadius;
        }
        if (this.isCircular || typeof radius !== 'undefined') {
            path = this.chart.renderer.symbols.arc(left + center[0], top + center[1], r, r, {
                start: this.startAngleRad,
                end: this.endAngleRad,
                open: true,
                innerR: 0
            });
            // Bounds used to position the plotLine label next to the line
            // (#7117)
            path.xBounds = [left + center[0]];
            path.yBounds = [top + center[1] - r];
        }
        else {
            end = this.postTranslate(this.angleRad, r);
            path = [
                [
                    'M',
                    this.center[0] + chart.plotLeft,
                    this.center[1] + chart.plotTop
                ],
                ['L', end.x, end.y]
            ];
        }
        return path;
    }
    /**
     * Wrap the getOffset method to return zero offset for title or labels
     * in a radial axis.
     */
    function getOffset() {
        const axisProto = this.constructor.prototype;
        // Call the Axis prototype method (the method we're in now is on the
        // instance)
        axisProto.getOffset.call(this);
        // Title or label offsets are not counted
        this.chart.axisOffset[this.side] = 0;
    }
    /**
     * Find the path for plot bands along the radial axis.
     *
     * @private
     */
    function getPlotBandPath(from, to, options) {
        const chart = this.chart, radiusToPixels = (radius) => {
            if (typeof radius === 'string') {
                let r = parseInt(radius, 10);
                if (percentRegex.test(radius)) {
                    r = (r * fullRadius) / 100;
                }
                return r;
            }
            return radius;
        }, center = this.center, startAngleRad = this.startAngleRad, borderRadius = options.borderRadius, fullRadius = center[2] / 2, offset = Math.min(this.offset, 0), left = this.left || 0, top = this.top || 0, percentRegex = /%$/, isCircular = this.isCircular, // X axis in a polar chart
        trueBands = this.options.plotBands || [], index = trueBands.indexOf(options);
        let start, end, angle, xOnPerimeter, open, path, outerRadius = RadialAxis_pick(radiusToPixels(options.outerRadius), fullRadius), innerRadius = radiusToPixels(options.innerRadius), thickness = RadialAxis_pick(radiusToPixels(options.thickness), 10), brStart = true, brEnd = true;
        // Apply conditional border radius, only for ends of band stacks
        if (borderRadius && index > -1) {
            if (trueBands[index - 1] && trueBands[index - 1].to === from) {
                brStart = false;
            }
            if (trueBands[index + 1] && trueBands[index + 1].from === to) {
                brEnd = false;
            }
        }
        // Polygonal plot bands
        if (this.options.gridLineInterpolation === 'polygon') {
            path = this.getPlotLinePath({ value: from }).concat(this.getPlotLinePath({ value: to, reverse: true }));
            // Circular grid bands
        }
        else {
            // Keep within bounds
            from = Math.max(from, this.min);
            to = Math.min(to, this.max);
            const transFrom = this.translate(from), transTo = this.translate(to);
            // Plot bands on Y axis (radial axis) - inner and outer
            // radius depend on to and from
            if (!isCircular) {
                outerRadius = transFrom || 0;
                innerRadius = transTo || 0;
            }
            // Handle full circle
            if (options.shape === 'circle' || !isCircular) {
                start = -Math.PI / 2;
                end = Math.PI * 1.5;
                open = true;
            }
            else {
                start = startAngleRad + (transFrom || 0);
                end = startAngleRad + (transTo || 0);
            }
            outerRadius -= offset; // #5283
            thickness -= offset; // #5283
            path = chart.renderer.symbols.arc(left + center[0], top + center[1], outerRadius, outerRadius, {
                // Math is for reversed yAxis (#3606)
                start: Math.min(start, end),
                end: Math.max(start, end),
                innerR: RadialAxis_pick(innerRadius, outerRadius - thickness),
                open,
                borderRadius,
                brStart,
                brEnd
            });
            // Provide positioning boxes for the label (#6406)
            if (isCircular) {
                angle = (end + start) / 2;
                xOnPerimeter = (left +
                    center[0] +
                    (center[2] / 2) * Math.cos(angle));
                path.xBounds = angle > -Math.PI / 2 && angle < Math.PI / 2 ?
                    // Right hemisphere
                    [xOnPerimeter, chart.plotWidth] :
                    // Left hemisphere
                    [0, xOnPerimeter];
                path.yBounds = [
                    top + center[1] + (center[2] / 2) * Math.sin(angle)
                ];
                // Shift up or down to get the label clear of the perimeter
                path.yBounds[0] += ((angle > -Math.PI && angle < 0) ||
                    (angle > Math.PI)) ? -10 : 10;
            }
        }
        return path;
    }
    /**
     * Find the path for plot lines perpendicular to the radial axis.
     */
    function getPlotLinePath(options) {
        const center = this.pane.center, chart = this.chart, inverted = chart.inverted, reverse = options.reverse, backgroundOption = this.pane.options.background, background = backgroundOption ?
            RadialAxis_splat(backgroundOption)[0] :
            {}, innerRadius = background.innerRadius || '0%', outerRadius = background.outerRadius || '100%', x1 = center[0] + chart.plotLeft, y1 = center[1] + chart.plotTop, height = this.height, isCrosshair = options.isCrosshair, paneInnerR = center[3] / 2;
        let value = options.value, innerRatio, distance, a, b, otherAxis, xy, tickPositions, crossPos, path;
        const end = this.getPosition(value);
        let x2 = end.x, y2 = end.y;
        // Crosshair logic
        if (isCrosshair) {
            // Find crosshair's position and perform destructuring
            // assignment
            crossPos = this.getCrosshairPosition(options, x1, y1);
            value = crossPos[0];
            x2 = crossPos[1];
            y2 = crossPos[2];
        }
        // Spokes
        if (this.isCircular) {
            distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            a = (typeof innerRadius === 'string') ?
                RadialAxis_relativeLength(innerRadius, 1) :
                (innerRadius / distance);
            b = (typeof outerRadius === 'string') ?
                RadialAxis_relativeLength(outerRadius, 1) :
                (outerRadius / distance);
            // To ensure that gridlines won't be displayed in area
            // defined by innerSize in case of custom radiuses of pane's
            // background
            if (center && paneInnerR) {
                innerRatio = paneInnerR / distance;
                if (a < innerRatio) {
                    a = innerRatio;
                }
                if (b < innerRatio) {
                    b = innerRatio;
                }
            }
            path = [
                ['M', x1 + a * (x2 - x1), y1 - a * (y1 - y2)],
                ['L', x2 - (1 - b) * (x2 - x1), y2 + (1 - b) * (y1 - y2)]
            ];
            // Concentric circles
        }
        else {
            // Pick the right values depending if it is grid line or
            // crosshair
            value = this.translate(value);
            // This is required in case when xAxis is non-circular to
            // prevent grid lines (or crosshairs, if enabled) from
            // rendering above the center after they supposed to be
            // displayed below the center point
            if (value) {
                if (value < 0 || value > height) {
                    value = 0;
                }
            }
            if (this.options.gridLineInterpolation === 'circle') {
                // A value of 0 is in the center, so it won't be
                // visible, but draw it anyway for update and animation
                // (#2366)
                path = this.getLinePath(0, value, paneInnerR);
                // Concentric polygons
            }
            else {
                path = [];
                // Find the other axis (a circular one) in the same pane
                chart[inverted ? 'yAxis' : 'xAxis'].forEach((a) => {
                    if (a.pane === this.pane) {
                        otherAxis = a;
                    }
                });
                if (otherAxis) {
                    tickPositions = otherAxis.tickPositions;
                    if (otherAxis.autoConnect) {
                        tickPositions =
                            tickPositions.concat([tickPositions[0]]);
                    }
                    // Reverse the positions for concatenation of polygonal
                    // plot bands
                    if (reverse) {
                        tickPositions = tickPositions.slice().reverse();
                    }
                    if (value) {
                        value += paneInnerR;
                    }
                    for (let i = 0; i < tickPositions.length; i++) {
                        xy = otherAxis.getPosition(tickPositions[i], value);
                        path.push(i ? ['L', xy.x, xy.y] : ['M', xy.x, xy.y]);
                    }
                }
            }
        }
        return path;
    }
    /**
     * Returns the x, y coordinate of a point given by a value and a pixel
     * distance from center.
     *
     * @private
     * @param {number} value
     * Point value.
     * @param {number} [length]
     * Distance from center.
     */
    function getPosition(value, length) {
        const translatedVal = this.translate(value);
        return this.postTranslate(this.isCircular ? translatedVal : this.angleRad, // #2848
        // In case when translatedVal is negative, the 0 value must be
        // used instead, in order to deal with lines and labels that
        // fall out of the visible range near the center of a pane
        RadialAxis_pick(this.isCircular ?
            length :
            (translatedVal < 0 ? 0 : translatedVal), this.center[2] / 2) - this.offset);
    }
    /**
     * Find the position for the axis title, by default inside the gauge.
     */
    function getTitlePosition() {
        const center = this.center, chart = this.chart, titleOptions = this.options.title;
        return {
            x: chart.plotLeft + center[0] + (titleOptions.x || 0),
            y: (chart.plotTop +
                center[1] -
                ({
                    high: 0.5,
                    middle: 0.25,
                    low: 0
                }[titleOptions.align] *
                    center[2]) +
                (titleOptions.y || 0))
        };
    }
    /**
     * Modify radial axis.
     * @private
     *
     * @param {Highcharts.Axis} radialAxis
     * Radial axis to modify.
     */
    function modify(axis) {
        axis.beforeSetTickPositions = beforeSetTickPositions;
        axis.createLabelCollector = createLabelCollector;
        axis.getCrosshairPosition = getCrosshairPosition;
        axis.getLinePath = getLinePath;
        axis.getOffset = getOffset;
        axis.getPlotBandPath = getPlotBandPath;
        axis.getPlotLinePath = getPlotLinePath;
        axis.getPosition = getPosition;
        axis.getTitlePosition = getTitlePosition;
        axis.postTranslate = postTranslate;
        axis.setAxisSize = setAxisSize;
        axis.setAxisTranslation = setAxisTranslation;
        axis.setOptions = setOptions;
    }
    /**
     * Modify radial axis as hidden.
     * @private
     *
     * @param {Highcharts.Axis} radialAxis
     * Radial axis to modify.
     */
    function modifyAsHidden(radialAxis) {
        radialAxis.isHidden = true;
        radialAxis.createLabelCollector = createLabelCollectorHidden;
        radialAxis.getOffset = RadialAxis_noop;
        radialAxis.redraw = renderHidden;
        radialAxis.render = renderHidden;
        radialAxis.setScale = RadialAxis_noop;
        radialAxis.setCategories = RadialAxis_noop;
        radialAxis.setTitle = RadialAxis_noop;
    }
    /**
     * Finalize modification of axis instance with radial logic.
     */
    function onAxisAfterInit() {
        const chart = this.chart, options = this.options, isHidden = chart.angular && this.isXAxis, pane = this.pane, paneOptions = pane?.options;
        if (!isHidden && pane && (chart.angular || chart.polar)) {
            const fullCircle = Math.PI * 2, 
            // Start and end angle options are given in degrees relative to
            // top, while internal computations are in radians relative to
            // right (like SVG).
            start = (RadialAxis_pick(paneOptions.startAngle, 0) - 90) * Math.PI / 180, end = (RadialAxis_pick(paneOptions.endAngle, RadialAxis_pick(paneOptions.startAngle, 0) + 360) - 90) * Math.PI / 180;
            // Y axis in polar charts
            this.angleRad = (options.angle || 0) * Math.PI / 180;
            // Gauges
            this.startAngleRad = start;
            this.endAngleRad = end;
            this.offset = options.offset || 0;
            // Normalize Start and End to <0, 2*PI> range
            // (in degrees: <0,360>)
            let normalizedStart = (start % fullCircle + fullCircle) %
                fullCircle, normalizedEnd = (end % fullCircle + fullCircle) % fullCircle;
            // Move normalized angles to <-PI, PI> range (<-180, 180>)
            // to match values returned by Math.atan2()
            if (normalizedStart > Math.PI) {
                normalizedStart -= fullCircle;
            }
            if (normalizedEnd > Math.PI) {
                normalizedEnd -= fullCircle;
            }
            this.normalizedStartAngleRad = normalizedStart;
            this.normalizedEndAngleRad = normalizedEnd;
        }
    }
    /**
     * Wrap auto label align to avoid setting axis-wide rotation on radial axes.
     * (#4920)
     */
    function onAxisAutoLabelAlign(e) {
        if (this.isRadial) {
            e.align = void 0;
            e.preventDefault();
        }
    }
    /**
     * Remove label collector function on axis remove/update.
     */
    function onAxisDestroy() {
        if (this.chart?.labelCollectors) {
            const index = (this.labelCollector ?
                this.chart.labelCollectors.indexOf(this.labelCollector) :
                -1);
            if (index >= 0) {
                this.chart.labelCollectors.splice(index, 1);
            }
        }
    }
    /**
     * Modify axis instance with radial logic before common axis init.
     */
    function onAxisInit(e) {
        const chart = this.chart, angular = chart.angular, polar = chart.polar, isX = this.isXAxis, coll = this.coll, isHidden = angular && isX, paneIndex = e.userOptions.pane || 0, pane = this.pane = chart.pane && chart.pane[paneIndex];
        let isCircular;
        // Prevent changes for colorAxis
        if (coll === 'colorAxis') {
            this.isRadial = false;
            return;
        }
        // Before prototype.init
        if (angular) {
            if (isHidden) {
                modifyAsHidden(this);
            }
            else {
                modify(this);
            }
            isCircular = !isX;
        }
        else if (polar) {
            modify(this);
            // Check which axis is circular
            isCircular = this.horiz;
        }
        // Disable certain features on angular and polar axes
        if (angular || polar) {
            this.isRadial = true;
            if (!this.labelCollector) {
                this.labelCollector = this.createLabelCollector();
            }
            if (this.labelCollector) {
                // Prevent overlapping axis labels (#9761)
                chart.labelCollectors.push(this.labelCollector);
            }
        }
        else {
            this.isRadial = false;
        }
        // A pointer back to this axis to borrow geometry
        if (pane && isCircular) {
            pane.axis = this;
        }
        this.isCircular = isCircular;
    }
    /**
     * Prepare axis translation.
     */
    function onAxisInitialAxisTranslation() {
        if (this.isRadial) {
            this.beforeSetTickPositions();
        }
    }
    /**
     * Find the center position of the label based on the distance option.
     */
    function onTickAfterGetLabelPosition(e) {
        const label = this.label;
        if (!label) {
            return;
        }
        const axis = this.axis, labelBBox = label.getBBox(), labelOptions = axis.options.labels, angle = ((axis.translate(this.pos) + axis.startAngleRad +
            Math.PI / 2) / Math.PI * 180) % 360, correctAngle = Math.round(angle), labelYPosCorrection = !RadialAxis_defined(labelOptions.y) ? -labelBBox.height * 0.3 : 0;
        let optionsY = labelOptions.y, ret, centerSlot = 20, // 20 degrees to each side at the top and bottom
        align = labelOptions.align, labelDir = 'end', // Direction of the label 'start' or 'end'
        reducedAngle1 = correctAngle < 0 ?
            correctAngle + 360 : correctAngle, reducedAngle2 = reducedAngle1, translateY = 0, translateX = 0;
        if (axis.isRadial) { // Both X and Y axes in a polar chart
            ret = axis.getPosition(this.pos, (axis.center[2] / 2) +
                RadialAxis_relativeLength(RadialAxis_pick(labelOptions.distance, -25), axis.center[2] / 2, -axis.center[2] / 2));
            // Automatically rotated
            if (labelOptions.rotation === 'auto') {
                label.attr({
                    rotation: angle
                });
                // Vertically centered
            }
            else if (!RadialAxis_defined(optionsY)) {
                optionsY = (axis.chart.renderer.fontMetrics(label).b -
                    labelBBox.height / 2);
            }
            // Automatic alignment
            if (!RadialAxis_defined(align)) {
                if (axis.isCircular) { // Y axis
                    if (labelBBox.width >
                        axis.len * axis.tickInterval / (axis.max - axis.min)) { // #3506
                        centerSlot = 0;
                    }
                    if (angle > centerSlot && angle < 180 - centerSlot) {
                        align = 'left'; // Right hemisphere
                    }
                    else if (angle > 180 + centerSlot &&
                        angle < 360 - centerSlot) {
                        align = 'right'; // Left hemisphere
                    }
                    else {
                        align = 'center'; // Top or bottom
                    }
                }
                else {
                    align = 'center';
                }
                label.attr({
                    align: align
                });
            }
            // Auto alignment for solid-gauges with two labels (#10635)
            if (align === 'auto' &&
                axis.tickPositions.length === 2 &&
                axis.isCircular) {
                // Angles reduced to 0 - 90 or 180 - 270
                if (reducedAngle1 > 90 && reducedAngle1 < 180) {
                    reducedAngle1 = 180 - reducedAngle1;
                }
                else if (reducedAngle1 > 270 && reducedAngle1 <= 360) {
                    reducedAngle1 = 540 - reducedAngle1;
                }
                // Angles reduced to 0 - 180
                if (reducedAngle2 > 180 && reducedAngle2 <= 360) {
                    reducedAngle2 = 360 - reducedAngle2;
                }
                if ((axis.pane.options.startAngle === correctAngle) ||
                    (axis.pane.options.startAngle === correctAngle + 360) ||
                    (axis.pane.options.startAngle === correctAngle - 360)) {
                    labelDir = 'start';
                }
                if ((correctAngle >= -90 && correctAngle <= 90) ||
                    (correctAngle >= -360 && correctAngle <= -270) ||
                    (correctAngle >= 270 && correctAngle <= 360)) {
                    align = (labelDir === 'start') ? 'right' : 'left';
                }
                else {
                    align = (labelDir === 'start') ? 'left' : 'right';
                }
                // For angles between (90 + n * 180) +- 20
                if (reducedAngle2 > 70 && reducedAngle2 < 110) {
                    align = 'center';
                }
                // Auto Y translation
                if (reducedAngle1 < 15 ||
                    (reducedAngle1 >= 180 && reducedAngle1 < 195)) {
                    translateY = labelBBox.height * 0.3;
                }
                else if (reducedAngle1 >= 15 && reducedAngle1 <= 35) {
                    translateY = labelDir === 'start' ?
                        0 : labelBBox.height * 0.75;
                }
                else if (reducedAngle1 >= 195 && reducedAngle1 <= 215) {
                    translateY = labelDir === 'start' ?
                        labelBBox.height * 0.75 : 0;
                }
                else if (reducedAngle1 > 35 && reducedAngle1 <= 90) {
                    translateY = labelDir === 'start' ?
                        -labelBBox.height * 0.25 : labelBBox.height;
                }
                else if (reducedAngle1 > 215 && reducedAngle1 <= 270) {
                    translateY = labelDir === 'start' ?
                        labelBBox.height : -labelBBox.height * 0.25;
                }
                // Auto X translation
                if (reducedAngle2 < 15) {
                    translateX = labelDir === 'start' ?
                        -labelBBox.height * 0.15 : labelBBox.height * 0.15;
                }
                else if (reducedAngle2 > 165 && reducedAngle2 <= 180) {
                    translateX = labelDir === 'start' ?
                        labelBBox.height * 0.15 : -labelBBox.height * 0.15;
                }
                label.attr({ align: align });
                label.translate(translateX, translateY + labelYPosCorrection);
            }
            e.pos.x = ret.x + (labelOptions.x || 0);
            e.pos.y = ret.y + (optionsY || 0);
        }
    }
    /**
     * Add special cases within the Tick class' methods for radial axes.
     */
    function onTickAfterGetPosition(e) {
        if (this.axis.getPosition) {
            RadialAxis_extend(e.pos, this.axis.getPosition(this.pos));
        }
    }
    /**
     * Update default options for radial axes from setOptions method.
     */
    function onGlobalSetOptions({ options }) {
        if (options.xAxis) {
            RadialAxis_merge(true, RadialAxis.radialDefaultOptions.circular, options.xAxis);
        }
        if (options.yAxis) {
            RadialAxis_merge(true, RadialAxis.radialDefaultOptions.radialGauge, options.yAxis);
        }
    }
    /**
     * Translate from intermediate plotX (angle), plotY (axis.len - radius)
     * to final chart coordinates.
     *
     * @private
     * @param {number} angle
     * Translation angle.
     * @param {number} radius
     * Translation radius.
     */
    function postTranslate(angle, radius) {
        const chart = this.chart, center = this.center;
        angle = this.startAngleRad + angle;
        return {
            x: chart.plotLeft + center[0] + Math.cos(angle) * radius,
            y: chart.plotTop + center[1] + Math.sin(angle) * radius
        };
    }
    /**
     * Prevent setting Y axis dirty.
     */
    function renderHidden() {
        this.isDirty = false;
    }
    /**
     * Override the setAxisSize method to use the arc's circumference as
     * length. This allows tickPixelInterval to apply to pixel lengths along
     * the perimeter.
     * @private
     */
    function setAxisSize() {
        const axisProto = this.constructor.prototype;
        let center, start;
        axisProto.setAxisSize.call(this);
        if (this.isRadial) {
            // Set the center array
            this.pane.updateCenter(this);
            // In case when the innerSize is set in a polar chart, the axis'
            // center cannot be a reference to pane's center
            center = this.center = this.pane.center.slice();
            // The sector is used in Axis.translate to compute the
            // translation of reversed axis points (#2570)
            if (this.isCircular) {
                this.sector = this.endAngleRad - this.startAngleRad;
            }
            else {
                // When the pane's startAngle or the axis' angle is set then
                // new x and y values for vertical axis' center must be
                // calculated
                start = this.postTranslate(this.angleRad, center[3] / 2);
                center[0] = start.x - this.chart.plotLeft;
                center[1] = start.y - this.chart.plotTop;
            }
            // Axis len is used to lay out the ticks
            this.len = this.width = this.height =
                (center[2] - center[3]) * RadialAxis_pick(this.sector, 1) / 2;
        }
    }
    /**
     * Override setAxisTranslation by setting the translation to the
     * difference in rotation. This allows the translate method to return
     * angle for any given value.
     *
     * @private
     */
    function setAxisTranslation() {
        const axisProto = this.constructor.prototype;
        // Call uber method
        axisProto.setAxisTranslation.call(this);
        // Set transA and minPixelPadding
        if (this.center) { // It's not defined the first time
            if (this.isCircular) {
                this.transA = (this.endAngleRad - this.startAngleRad) /
                    ((this.max - this.min) || 1);
            }
            else {
                // The transA here is the length of the axis, so in case
                // of inner radius, the length must be decreased by it
                this.transA = ((this.center[2] - this.center[3]) / 2) /
                    ((this.max - this.min) || 1);
            }
            if (this.isXAxis) {
                this.minPixelPadding = this.transA * this.minPointOffset;
            }
            else {
                // This is a workaround for regression #2593, but categories
                // still don't position correctly.
                this.minPixelPadding = 0;
            }
        }
    }
    /**
     * Merge and set options.
     */
    function setOptions(userOptions) {
        const { coll } = this;
        const { angular, inverted, polar } = this.chart;
        let defaultPolarOptions = {};
        if (angular) {
            if (!this.isXAxis) {
                defaultPolarOptions = RadialAxis_merge(RadialAxis_defaultOptions.yAxis, RadialAxis.radialDefaultOptions.radialGauge);
            }
        }
        else if (polar) {
            defaultPolarOptions = this.horiz ?
                RadialAxis_merge(RadialAxis_defaultOptions.xAxis, RadialAxis.radialDefaultOptions.circular) :
                RadialAxis_merge(coll === 'xAxis' ?
                    RadialAxis_defaultOptions.xAxis :
                    RadialAxis_defaultOptions.yAxis, RadialAxis.radialDefaultOptions.radial);
        }
        if (inverted && coll === 'yAxis') {
            defaultPolarOptions.stackLabels = RadialAxis_isObject(RadialAxis_defaultOptions.yAxis, true) ? RadialAxis_defaultOptions.yAxis.stackLabels : {};
            defaultPolarOptions.reversedStacks = true;
        }
        const options = this.options = RadialAxis_merge(defaultPolarOptions, userOptions);
        // Make sure the plotBands array is instantiated for each Axis
        // (#2649)
        if (!options.plotBands) {
            options.plotBands = [];
        }
        RadialAxis_fireEvent(this, 'afterSetOptions');
    }
    /**
     * Wrap the getMarkPath function to return the path of the radial marker.
     */
    function wrapTickGetMarkPath(proceed, x, y, tickLength, tickWidth, horiz, renderer) {
        const axis = this.axis;
        let endPoint, ret;
        if (axis.isRadial) {
            endPoint = axis.getPosition(this.pos, axis.center[2] / 2 + tickLength);
            ret = [
                'M',
                x,
                y,
                'L',
                endPoint.x,
                endPoint.y
            ];
        }
        else {
            ret = proceed.call(this, x, y, tickLength, tickWidth, horiz, renderer);
        }
        return ret;
    }
    /* eslint-enable valid-jsdoc */
})(RadialAxis || (RadialAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_RadialAxis = (RadialAxis);

;// ./code/es-modules/Series/PolarComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { animObject } = (external_highcharts_src_js_default_default());

const { optionsToObject: PolarComposition_optionsToObject } = Extensions_BorderRadius;

const { defaultOptions: PolarComposition_defaultOptions } = (external_highcharts_src_js_default_default());

const { composed: PolarComposition_composed } = (external_highcharts_src_js_default_default());




const { addEvent: PolarComposition_addEvent, defined: PolarComposition_defined, find, isNumber: PolarComposition_isNumber, isObject: PolarComposition_isObject, merge: PolarComposition_merge, pick: PolarComposition_pick, pushUnique: PolarComposition_pushUnique, relativeLength: PolarComposition_relativeLength, splat: PolarComposition_splat, uniqueKey, wrap: PolarComposition_wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function clipCircle(renderer, x, y, r, innerR) {
    const id = uniqueKey(), clipPath = renderer.createElement('clipPath').attr({
        id: id
    }).add(renderer.defs), wrapper = innerR ?
        renderer.arc(x, y, r, innerR, 0, 2 * Math.PI).add(clipPath) :
        renderer.circle(x, y, r).add(clipPath);
    wrapper.id = id;
    wrapper.clipPath = clipPath;
    return wrapper;
}
/**
 * Find correct align and vertical align based on an angle in polar chart
 * @private
 */
function findAlignments(angle, options) {
    let align, verticalAlign;
    if (options.align === null) {
        if (angle > 20 && angle < 160) {
            align = 'left'; // Right hemisphere
        }
        else if (angle > 200 && angle < 340) {
            align = 'right'; // Left hemisphere
        }
        else {
            align = 'center'; // Top or bottom
        }
        options.align = align;
    }
    if (options.verticalAlign === null) {
        if (angle < 45 || angle > 315) {
            verticalAlign = 'bottom'; // Top part
        }
        else if (angle > 135 && angle < 225) {
            verticalAlign = 'top'; // Bottom part
        }
        else {
            verticalAlign = 'middle'; // Left or right
        }
        options.verticalAlign = verticalAlign;
    }
    return options;
}
/**
 * #6212 Calculate connectors for spline series in polar chart.
 * @private
 * @param {boolean} calculateNeighbours
 *        Check if connectors should be calculated for neighbour points as
 *        well allows short recurrence
 */
function getConnectors(segment, index, calculateNeighbours, connectEnds) {
    const smoothing = 1.5, denom = smoothing + 1, addedNumber = connectEnds ? 1 : 0;
    let i, leftContX, leftContY, rightContX, rightContY, jointAngle;
    // Calculate final index of points depending on the initial index value.
    // Because of calculating neighbours, index may be outside segment
    // array.
    if (index >= 0 && index <= segment.length - 1) {
        i = index;
    }
    else if (index < 0) {
        i = segment.length - 1 + index;
    }
    else {
        i = 0;
    }
    // 1 means control points midway between points, 2 means 1/3 from
    // the point, 3 is 1/4 etc;
    const prevPointInd = ((i - 1 < 0) ? segment.length - (1 + addedNumber) : i - 1), nextPointInd = (i + 1 > segment.length - 1) ? addedNumber : i + 1, previousPoint = segment[prevPointInd], nextPoint = segment[nextPointInd], previousX = previousPoint.plotX, previousY = previousPoint.plotY, nextX = nextPoint.plotX, nextY = nextPoint.plotY, plotX = segment[i].plotX, // Actual point
    plotY = segment[i].plotY;
    leftContX = (smoothing * plotX + previousX) / denom;
    leftContY = (smoothing * plotY + previousY) / denom;
    rightContX = (smoothing * plotX + nextX) / denom;
    rightContY = (smoothing * plotY + nextY) / denom;
    // Distance left control point
    const dLControlPoint = Math.sqrt(Math.pow(leftContX - plotX, 2) + Math.pow(leftContY - plotY, 2)), dRControlPoint = Math.sqrt(Math.pow(rightContX - plotX, 2) + Math.pow(rightContY - plotY, 2)), leftContAngle = Math.atan2(leftContY - plotY, leftContX - plotX), rightContAngle = Math.atan2(rightContY - plotY, rightContX - plotX);
    jointAngle = (Math.PI / 2) + ((leftContAngle + rightContAngle) / 2);
    // Ensure the right direction, jointAngle should be in the same quadrant
    // as leftContAngle
    if (Math.abs(leftContAngle - jointAngle) > Math.PI / 2) {
        jointAngle -= Math.PI;
    }
    // Find the corrected control points for a spline straight through the
    // point
    leftContX = plotX + Math.cos(jointAngle) * dLControlPoint;
    leftContY = plotY + Math.sin(jointAngle) * dLControlPoint;
    rightContX = plotX + Math.cos(Math.PI + jointAngle) * dRControlPoint;
    rightContY = plotY + Math.sin(Math.PI + jointAngle) * dRControlPoint;
    // Push current point's connectors into returned object
    const ret = {
        rightContX: rightContX,
        rightContY: rightContY,
        leftContX: leftContX,
        leftContY: leftContY,
        plotX: plotX,
        plotY: plotY
    };
    // Calculate connectors for previous and next point and push them inside
    // returned object
    if (calculateNeighbours) {
        ret.prevPointCont = getConnectors(segment, prevPointInd, false, connectEnds);
    }
    return ret;
}
/**
 *
 */
function onChartAfterDrawChartBox() {
    (this.pane || []).forEach((pane) => {
        pane.render();
    });
}
/**
 * If polar has polygonal grid lines, force start and endOnTick on radial axis
 * @private
 */
function onChartAfterInit(event) {
    const xAxis = event.args[0].xAxis, yAxis = event.args[0].yAxis, chart = event.args[0].chart;
    if (xAxis && yAxis) {
        if (yAxis.gridLineInterpolation === 'polygon') {
            xAxis.startOnTick = true;
            xAxis.endOnTick = true;
        }
        else if (xAxis.gridLineInterpolation === 'polygon' &&
            chart.inverted) {
            yAxis.startOnTick = true;
            yAxis.endOnTick = true;
        }
    }
}
/**
 *
 */
function onChartCreateAxes() {
    if (!this.pane) {
        this.pane = [];
    }
    this.options.pane = PolarComposition_splat(this.options.pane || {});
    PolarComposition_splat(this.userOptions.pane || {}).forEach((paneOptions) => {
        new Pane_Pane(// eslint-disable-line no-new
        paneOptions, this);
    }, this);
}
/**
 * Get selection dimensions
 * @private
 */
function onPointerGetSelectionBox(event) {
    const marker = event.args.marker, xAxis = this.chart.xAxis[0], yAxis = this.chart.yAxis[0], inverted = this.chart.inverted, radialAxis = inverted ? yAxis : xAxis, linearAxis = inverted ? xAxis : yAxis;
    if (this.chart.polar) {
        event.preventDefault();
        const start = (marker.attr ? marker.attr('start') : marker.start) - radialAxis.startAngleRad, r = (marker.attr ? marker.attr('r') : marker.r), end = (marker.attr ? marker.attr('end') : marker.end) - radialAxis.startAngleRad, innerR = (marker.attr ? marker.attr('innerR') : marker.innerR);
        event.result.x = start + radialAxis.pos;
        event.result.width = end - start;
        // `innerR` goes from pane's center but `toValue` computes values from
        // top
        event.result.y = linearAxis.len + linearAxis.pos - r;
        event.result.height = r - innerR;
    }
}
/**
 * Get attrs for Polar selection marker
 * @private
 */
function onPointerGetSelectionMarkerAttrs(event) {
    const chart = this.chart;
    if (chart.polar && chart.hoverPane && chart.hoverPane.axis) {
        event.preventDefault();
        const center = chart.hoverPane.center, mouseDownX = chart.mouseDownX || 0, mouseDownY = chart.mouseDownY || 0, chartY = event.args.chartY, chartX = event.args.chartX, fullCircle = Math.PI * 2, startAngleRad = chart.hoverPane.axis.startAngleRad, endAngleRad = chart.hoverPane.axis.endAngleRad, linearAxis = chart.inverted ? chart.xAxis[0] : chart.yAxis[0], attrs = {};
        let shapeType = 'arc';
        attrs.x = center[0] + chart.plotLeft;
        attrs.y = center[1] + chart.plotTop;
        // Adjust the width of the selection marker
        if (this.zoomHor) {
            const paneRadRange = startAngleRad > 0 ?
                endAngleRad - startAngleRad :
                Math.abs(startAngleRad) + Math.abs(endAngleRad);
            let startAngle = Math.atan2(mouseDownY - chart.plotTop - center[1], mouseDownX - chart.plotLeft - center[0]) - startAngleRad, endAngle = Math.atan2(chartY - chart.plotTop - center[1], chartX - chart.plotLeft - center[0]) - startAngleRad;
            attrs.r = center[2] / 2;
            attrs.innerR = center[3] / 2;
            if (startAngle <= 0) {
                startAngle += fullCircle;
            }
            if (endAngle <= 0) {
                endAngle += fullCircle;
            }
            if (endAngle < startAngle) {
                // Swapping angles
                endAngle = [startAngle, startAngle = endAngle][0];
            }
            // If pane is not a full circle we need to let users zoom to the min
            // We do this by swapping angles after pointer crosses
            // middle angle (swapAngle) of the missing slice of the pane
            if (paneRadRange < fullCircle) {
                const swapAngle = endAngleRad + (fullCircle - paneRadRange) / 2;
                if (startAngleRad + endAngle > swapAngle) {
                    endAngle = startAngle;
                    startAngle = startAngleRad <= 0 ? startAngleRad : 0;
                }
            }
            const start = attrs.start =
                Math.max(startAngle + startAngleRad, startAngleRad), end = attrs.end =
                Math.min(endAngle + startAngleRad, endAngleRad);
            // Adjust the selection shape for polygon grid lines
            if (linearAxis.options.gridLineInterpolation === 'polygon') {
                const radialAxis = chart.hoverPane.axis, min = start - radialAxis.startAngleRad + radialAxis.pos, max = end - start;
                let path = linearAxis.getPlotLinePath({
                    value: linearAxis.max
                }), pathStart = radialAxis.toValue(min), pathEnd = radialAxis.toValue(min + max);
                if (pathStart < radialAxis.getExtremes().min) {
                    const { min, max } = radialAxis.getExtremes();
                    pathStart = max - (min - pathStart);
                }
                if (pathEnd < radialAxis.getExtremes().min) {
                    const { min, max } = radialAxis.getExtremes();
                    pathEnd = max - (min - pathEnd);
                }
                if (pathEnd < pathStart) {
                    // Swapping angles
                    pathEnd = [pathStart, pathStart = pathEnd][0];
                }
                // Get trimmed path
                path = trimPath(path, pathStart, pathEnd, radialAxis);
                // Add center to the path
                path.push([
                    'L', center[0] + chart.plotLeft,
                    chart.plotTop + center[1]
                ]);
                attrs.d = path;
                shapeType = 'path';
            }
        }
        // Adjust the height of the selection marker
        if (this.zoomVert) {
            const linearAxis = chart.inverted ? chart.xAxis[0] : chart.yAxis[0];
            let innerR = Math.sqrt(Math.pow(mouseDownX - chart.plotLeft - center[0], 2) +
                Math.pow(mouseDownY - chart.plotTop - center[1], 2)), r = Math.sqrt(Math.pow(chartX - chart.plotLeft - center[0], 2) +
                Math.pow(chartY - chart.plotTop - center[1], 2));
            if (r < innerR) {
                // Swapping angles
                innerR = [r, r = innerR][0];
            }
            if (r > center[2] / 2) {
                r = center[2] / 2;
            }
            if (innerR < center[3] / 2) {
                innerR = center[3] / 2;
            }
            if (!this.zoomHor) {
                attrs.start = startAngleRad;
                attrs.end = endAngleRad;
            }
            attrs.r = r;
            attrs.innerR = innerR;
            if (linearAxis.options.gridLineInterpolation === 'polygon') {
                const end = linearAxis.toValue(linearAxis.len + linearAxis.pos - innerR), start = linearAxis.toValue(linearAxis.len + linearAxis.pos - r), path = linearAxis.getPlotLinePath({
                    value: start
                }).concat(linearAxis.getPlotLinePath({
                    value: end,
                    reverse: true
                }));
                attrs.d = path;
                shapeType = 'path';
            }
        }
        if (this.zoomHor &&
            this.zoomVert &&
            linearAxis.options.gridLineInterpolation === 'polygon') {
            const radialAxis = chart.hoverPane.axis, start = attrs.start || 0, end = attrs.end || 0, min = start - radialAxis.startAngleRad + radialAxis.pos, max = end - start, pathStart = radialAxis.toValue(min), pathEnd = radialAxis.toValue(min + max);
            // Trim path
            if (attrs.d instanceof Array) {
                let innerPath = attrs.d.slice(0, attrs.d.length / 2), outerPath = attrs.d.slice(attrs.d.length / 2, attrs.d.length);
                outerPath = [...outerPath].reverse();
                const radialAxis = chart.hoverPane.axis;
                innerPath = trimPath(innerPath, pathStart, pathEnd, radialAxis);
                outerPath = trimPath(outerPath, pathStart, pathEnd, radialAxis);
                if (outerPath) {
                    (outerPath[0][0]) = 'L';
                }
                outerPath = [...outerPath].reverse();
                attrs.d = innerPath.concat(outerPath);
                shapeType = 'path';
            }
        }
        event.attrs = attrs;
        event.shapeType = shapeType;
    }
}
/**
 * @private
 */
function onSeriesAfterInit() {
    const chart = this.chart;
    if (chart.polar) {
        this.polar = new PolarAdditions(this);
        // Add flags that identifies radial inverted series
        if (chart.inverted) {
            this.isRadialSeries = true;
            if (this.is('column')) {
                this.isRadialBar = true;
            }
        }
    }
}
/**
 * Apply conditional rounding to polar bars
 */
function onSeriesAfterColumnTranslate() {
    const { chart, options, yAxis } = this;
    if (options.borderRadius &&
        chart.polar &&
        chart.inverted) {
        const seriesDefault = PolarComposition_defaultOptions.plotOptions?.[this.type]
            ?.borderRadius, { scope, where = 'end' } = PolarComposition_optionsToObject(options.borderRadius, PolarComposition_isObject(seriesDefault) ? seriesDefault : {});
        for (const point of this.points) {
            const { shapeArgs } = point;
            if (point.shapeType === 'arc' && shapeArgs) {
                let brStart = where === 'all', brEnd = true;
                if (options.stacking && scope === 'stack') {
                    brStart = point.stackY === point.y && where === 'all',
                        brEnd = point.stackY === point.stackTotal;
                }
                if (yAxis.reversed) {
                    [brStart, brEnd] = [brEnd, brStart];
                }
                shapeArgs.brStart = brStart;
                shapeArgs.brEnd = brEnd;
            }
        }
    }
}
/**
 * Extend translate. The plotX and plotY values are computed as if the polar
 * chart were a cartesian plane, where plotX denotes the angle in radians
 * and (yAxis.len - plotY) is the pixel distance from center.
 * @private
 */
function onSeriesAfterTranslate() {
    if (this.chart.polar && this.xAxis) {
        const series = this, { xAxis, yAxis } = series, chart = series.chart;
        // Prepare k-d-tree handling. It searches by angle (clientX) in
        // case of shared tooltip, and by two dimensional distance in case
        // of non-shared.
        series.kdByAngle = chart.tooltip && chart.tooltip.shared;
        if (series.kdByAngle || chart.inverted) {
            series.searchPoint = searchPointByAngleOrInverted;
        }
        else {
            series.options.findNearestPointBy = 'xy';
        }
        const points = series.points;
        let i = points.length;
        while (i--) {
            // Translate plotX, plotY from angle and radius to true plot
            // coordinates
            if (!series.is('column') && !series.is('columnrange')) {
                series.polar.toXY(points[i]);
            }
            // Treat points below Y axis min as null (#10082)
            if (!chart.hasParallelCoordinates &&
                !series.yAxis.reversed) {
                if (PolarComposition_pick(points[i].y, Number.MIN_VALUE) < yAxis.min ||
                    points[i].x < xAxis.min ||
                    points[i].x > xAxis.max) {
                    // Destroy markers
                    points[i].isNull = true;
                    // Destroy column's graphic
                    points[i].plotY = NaN;
                }
                else {
                    // Restore isNull flag
                    points[i].isNull =
                        points[i].isValid && !points[i].isValid();
                }
            }
        }
        // Perform clip after render
        if (!this.hasClipCircleSetter) {
            this.hasClipCircleSetter = !!series.eventsToUnbind.push(PolarComposition_addEvent(series, 'afterRender', function () {
                let circ;
                if (chart.polar && this.options.clip !== false) {
                    // For clipping purposes there is a need for
                    // coordinates from the absolute center
                    circ = this.yAxis.pane.center;
                    if (!this.clipCircle) {
                        this.clipCircle = clipCircle(chart.renderer, circ[0], circ[1], circ[2] / 2, circ[3] / 2);
                    }
                    else {
                        this.clipCircle.animate({
                            x: circ[0],
                            y: circ[1],
                            r: circ[2] / 2,
                            innerR: circ[3] / 2
                        });
                    }
                    this.group.clip(this.clipCircle);
                    this.setClip = (external_highcharts_src_js_default_default()).noop;
                }
            }));
        }
    }
}
/**
 * Search a k-d tree by the point angle (used for shared tooltips in polar) or
 * the inverted point.
 * charts
 * @private
 */
function searchPointByAngleOrInverted(e) {
    const series = this, chart = series.chart, xAxis = series.xAxis, yAxis = series.yAxis, center = xAxis.pane && xAxis.pane.center, plotX = e.chartX - (center && center[0] || 0) - chart.plotLeft, plotY = e.chartY - (center && center[1] || 0) - chart.plotTop;
    const searchKDTreePoint = chart.inverted ? {
        clientX: e.chartX - yAxis.pos,
        plotY: e.chartY - xAxis.pos
    } : {
        clientX: 180 + (Math.atan2(plotX, plotY) * (-180 / Math.PI))
    };
    return series.searchKDTree(searchKDTreePoint);
}
/**
 * Trim polygonal path
 * @private
 */
function trimPath(path, start, end, radialAxis) {
    const tickInterval = radialAxis.tickInterval, ticks = radialAxis.tickPositions;
    let lastTick = find(ticks, (tick) => tick >= end), firstTick = find([...ticks].reverse(), (tick) => tick <= start);
    if (!PolarComposition_defined(lastTick)) {
        lastTick = ticks[ticks.length - 1];
    }
    if (!PolarComposition_defined(firstTick)) {
        firstTick = ticks[0];
        lastTick += tickInterval;
        path[0][0] = 'L';
        // To do: figure out why -3 or -2
        path.unshift(path[path.length - 3]);
    }
    path = path.slice(ticks.indexOf(firstTick), ticks.indexOf(lastTick) + 1);
    path[0][0] = 'M';
    return path;
}
/**
 * Extend chart.get to also search in panes. Used internally in
 * responsiveness and chart.update.
 * @private
 */
function wrapChartGet(proceed, id) {
    return find(this.pane || [], (pane) => (
    // @todo remove id or define id type:
    pane.options.id === id)) || proceed.call(this, id);
}
/**
 * Align column data labels outside the columns. #1199.
 * @private
 */
function wrapColumnSeriesAlignDataLabel(proceed, point, dataLabel, options, alignTo, isNew) {
    const chart = this.chart, inside = PolarComposition_pick(options.inside, !!this.options.stacking);
    let angle, shapeArgs, labelPos;
    if (chart.polar) {
        angle = point.rectPlotX / Math.PI * 180;
        if (!chart.inverted) {
            // Align nicely outside the perimeter of the columns
            options = findAlignments(angle, options);
        }
        else { // Required corrections for data labels of inverted bars
            // The plotX and plotY are correctly set therefore they
            // don't need to be swapped (inverted argument is false)
            this.forceDL = chart.isInsidePlot(point.plotX, point.plotY);
            // Checks if labels should be positioned inside
            if (inside && point.shapeArgs) {
                shapeArgs = point.shapeArgs;
                // Calculates pixel positions for a data label to be
                // inside
                labelPos =
                    this.yAxis.postTranslate(
                    // Angle
                    ((shapeArgs.start || 0) + (shapeArgs.end || 0)) / 2 -
                        this
                            .xAxis.startAngleRad, 
                    // Radius
                    point.barX +
                        point.pointWidth / 2);
                alignTo = PolarComposition_merge(alignTo, {
                    x: labelPos.x - chart.plotLeft,
                    y: labelPos.y - chart.plotTop
                });
            }
            else if (point.tooltipPos) {
                alignTo = PolarComposition_merge(alignTo, {
                    x: point.tooltipPos[0],
                    y: point.tooltipPos[1]
                });
            }
            options.align = PolarComposition_pick(options.align, 'center');
            options.verticalAlign =
                PolarComposition_pick(options.verticalAlign, 'middle');
        }
        external_highcharts_src_js_default_Series_default().prototype.alignDataLabel.call(this, point, dataLabel, options, alignTo, isNew);
        // Hide label of a point (only inverted) that is outside the
        // visible y range
        if (this.isRadialBar && point.shapeArgs &&
            point.shapeArgs.start === point.shapeArgs.end) {
            dataLabel.hide();
        }
        else {
            dataLabel.show();
        }
    }
    else {
        proceed.call(this, point, dataLabel, options, alignTo, isNew);
    }
}
/**
 * Extend the column prototype's translate method
 * @private
 */
function onAfterColumnTranslate() {
    const series = this, options = series.options, stacking = options.stacking, chart = series.chart, xAxis = series.xAxis, yAxis = series.yAxis, reversed = yAxis.reversed, center = yAxis.center, startAngleRad = xAxis.startAngleRad, endAngleRad = xAxis.endAngleRad, visibleRange = endAngleRad - startAngleRad;
    let threshold = options.threshold, thresholdAngleRad = 0, points, point, i, yMin, yMax, start = 0, end = 0, tooltipPos, pointX, pointY, stackValues, stack, barX, innerR, r;
    // Postprocess plot coordinates
    if (xAxis.isRadial) {
        points = series.points;
        i = points.length;
        yMin = yAxis.translate(yAxis.min);
        yMax = yAxis.translate(yAxis.max);
        threshold = options.threshold || 0;
        if (chart.inverted) {
            // Finding a correct threshold
            if (PolarComposition_isNumber(threshold)) {
                thresholdAngleRad = yAxis.translate(threshold);
                // Checks if threshold is outside the visible range
                if (PolarComposition_defined(thresholdAngleRad)) {
                    if (thresholdAngleRad < 0) {
                        thresholdAngleRad = 0;
                    }
                    else if (thresholdAngleRad > visibleRange) {
                        thresholdAngleRad = visibleRange;
                    }
                    // Adding start angle offset
                    series.translatedThreshold =
                        thresholdAngleRad + startAngleRad;
                }
            }
        }
        while (i--) {
            point = points[i];
            barX = point.barX;
            pointX = point.x;
            pointY = point.y;
            point.shapeType = 'arc';
            if (chart.inverted) {
                point.plotY = yAxis.translate(pointY);
                if (stacking && yAxis.stacking) {
                    stack = yAxis.stacking.stacks[(pointY < 0 ? '-' : '') +
                        series.stackKey];
                    if (series.visible && stack && stack[pointX]) {
                        if (!point.isNull) {
                            stackValues = stack[pointX].points[series.getStackIndicator(void 0, pointX, series.index).key];
                            // Translating to radial values
                            start = yAxis.translate(stackValues[0]);
                            end = yAxis.translate(stackValues[1]);
                            // If starting point is beyond the
                            // range, set it to 0
                            if (PolarComposition_defined(start)) {
                                start = external_highcharts_src_js_default_default().clamp(start, 0, visibleRange);
                            }
                        }
                    }
                }
                else {
                    // Initial start and end angles for radial bar
                    start = thresholdAngleRad;
                    end = point.plotY;
                }
                if (start > end) {
                    // Swapping start and end
                    end = [start, start = end][0];
                }
                // Prevent from rendering point outside the
                // acceptable circular range
                if (!reversed) {
                    if (start < yMin) {
                        start = yMin;
                    }
                    else if (end > yMax) {
                        end = yMax;
                    }
                    else if (end < yMin || start > yMax) {
                        start = end = 0;
                    }
                }
                else {
                    if (end > yMin) {
                        end = yMin;
                    }
                    else if (start < yMax) {
                        start = yMax;
                    }
                    else if (start > yMin || end < yMax) {
                        start = end = visibleRange;
                    }
                }
                if (yAxis.min > yAxis.max) {
                    start = end = reversed ? visibleRange : 0;
                }
                start += startAngleRad;
                end += startAngleRad;
                if (center) {
                    point.barX = barX += center[3] / 2;
                }
                // In case when radius, inner radius or both are negative, a
                // point is rendered but partially or as a center point
                innerR = Math.max(barX, 0);
                r = Math.max(barX + point.pointWidth, 0);
                // Handle border radius
                const brOption = options.borderRadius, brValue = typeof brOption === 'object' ?
                    brOption.radius : brOption, borderRadius = PolarComposition_relativeLength(brValue || 0, r - innerR);
                point.shapeArgs = {
                    x: center[0],
                    y: center[1],
                    r,
                    innerR,
                    start,
                    end,
                    borderRadius
                };
                // Fade out the points if not inside the polar "plot area"
                point.opacity = start === end ? 0 : void 0;
                // A correct value for stacked or not fully visible
                // point
                point.plotY = (PolarComposition_defined(series.translatedThreshold) &&
                    (start < series.translatedThreshold ? start : end)) -
                    startAngleRad;
                // Non-inverted polar columns
            }
            else {
                start = barX + startAngleRad;
                point.shapeArgs = series.polar.arc(point.yBottom, point.plotY, start, start + point.pointWidth);
                // Disallow border radius on polar columns for now. It would
                // take some refactoring to work with the `scope` and the
                // `where` options. Those options would require that only
                // individual corners be rounded, in practice individual calls
                // to applyBorderRadius from the extended `arc` function. That
                // would be a viable solution, though it would not be perfect
                // until we implemented rounding that included the lower points
                // in the stack, like we have for cartesian column.
                point.shapeArgs.borderRadius = 0;
            }
            // Provided a correct coordinates for the tooltip
            series.polar.toXY(point);
            if (chart.inverted) {
                tooltipPos = yAxis.postTranslate(point.rectPlotY, barX + point.pointWidth / 2);
                point.tooltipPos = [
                    tooltipPos.x - chart.plotLeft,
                    tooltipPos.y - chart.plotTop
                ];
            }
            else {
                point.tooltipPos = [point.plotX, point.plotY];
            }
            if (center) {
                point.ttBelow = point.plotY > center[1];
            }
        }
    }
}
/**
 * Extend getSegmentPath to allow connecting ends across 0 to provide a
 * closed circle in line-like series.
 * @private
 */
function wrapLineSeriesGetGraphPath(proceed, points) {
    const series = this;
    let firstValid, popLastPoint;
    // Connect the path
    if (this.chart.polar) {
        points = points || this.points;
        // Append first valid point in order to connect the ends
        for (let i = 0; i < points.length; i++) {
            if (!points[i].isNull) {
                firstValid = i;
                break;
            }
        }
        /**
         * Polar charts only. Whether to connect the ends of a line series
         * plot across the extremes.
         *
         * @sample {highcharts} highcharts/plotoptions/line-connectends-false/
         *         Do not connect
         *
         * @type      {boolean}
         * @since     2.3.0
         * @product   highcharts
         * @apioption plotOptions.series.connectEnds
         */
        if (this.options.connectEnds !== false &&
            typeof firstValid !== 'undefined') {
            this.connectEnds = true; // Re-used in splines
            points.splice(points.length, 0, points[firstValid]);
            popLastPoint = true;
        }
        // For area charts, pseudo points are added to the graph, now we
        // need to translate these
        points.forEach((point) => {
            if (typeof point.polarPlotY === 'undefined') {
                series.polar.toXY(point);
            }
        });
    }
    // Run uber method
    const ret = proceed.apply(this, [].slice.call(arguments, 1));
    // #6212 points.splice method is adding points to an array. In case of
    // areaspline getGraphPath method is used two times and in both times
    // points are added to an array. That is why points.pop is used, to get
    // unmodified points.
    if (popLastPoint) {
        points.pop();
    }
    return ret;
}
/**
 * Extend getCoordinates to prepare for polar axis values
 * @private
 */
function wrapPointerGetCoordinates(proceed, e) {
    const chart = this.chart;
    let ret = {
        xAxis: [],
        yAxis: []
    };
    if (chart.polar) {
        chart.axes.forEach((axis) => {
            // Skip colorAxis
            if (axis.coll === 'colorAxis') {
                return;
            }
            const isXAxis = axis.isXAxis, center = axis.center, x = e.chartX - center[0] - chart.plotLeft, y = e.chartY - center[1] - chart.plotTop;
            ret[isXAxis ? 'xAxis' : 'yAxis'].push({
                axis: axis,
                value: axis.translate(isXAxis ?
                    Math.PI - Math.atan2(x, y) : // Angle
                    // distance from center
                    Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), true)
            });
        });
    }
    else {
        ret = proceed.call(this, e);
    }
    return ret;
}
/**
 * Prevent zooming on mobile devices
 * @private
 */
function wrapPointerPinch(proceed, e) {
    if (this.chart.polar) {
        return;
    }
    proceed.call(this, e);
}
/**
 * Define the animate method for regular series
 * @private
 */
function wrapSeriesAnimate(proceed, init) {
    const series = this, chart = this.chart, group = this.group, markerGroup = this.markerGroup, center = this.xAxis && this.xAxis.center, plotLeft = chart.plotLeft, plotTop = chart.plotTop;
    let animation = this.options.animation, attribs, paneInnerR, graphic, shapeArgs, r, innerR;
    // Specific animation for polar charts
    if (chart.polar) {
        if (series.isRadialBar) {
            if (!init) {
                // Run the pie animation for radial bars
                series.startAngleRad = PolarComposition_pick(series.translatedThreshold, series.xAxis.startAngleRad);
                external_highcharts_src_js_default_default().seriesTypes.pie.prototype.animate.call(series, init);
            }
        }
        else {
            animation = animObject(animation);
            // A different animation needed for column like series
            if (series.is('column')) {
                if (!init) {
                    paneInnerR = center[3] / 2;
                    series.points.forEach((point) => {
                        graphic = point.graphic;
                        shapeArgs = point.shapeArgs;
                        r = shapeArgs && shapeArgs.r;
                        innerR = shapeArgs && shapeArgs.innerR;
                        if (graphic && shapeArgs) {
                            // Start values
                            graphic.attr({
                                r: paneInnerR,
                                innerR: paneInnerR
                            });
                            // Animate
                            graphic.animate({
                                r: r,
                                innerR: innerR
                            }, series.options.animation);
                        }
                    });
                }
            }
            else {
                // Initialize the animation
                if (init) {
                    // Scale down the group and place it in the center
                    attribs = {
                        translateX: center[0] + plotLeft,
                        translateY: center[1] + plotTop,
                        scaleX: 0.001,
                        scaleY: 0.001
                    };
                    group.attr(attribs);
                    if (markerGroup) {
                        markerGroup.attr(attribs);
                    }
                    // Run the animation
                }
                else {
                    attribs = {
                        translateX: plotLeft,
                        translateY: plotTop,
                        scaleX: 1,
                        scaleY: 1
                    };
                    group.animate(attribs, animation);
                    if (markerGroup) {
                        markerGroup.animate(attribs, animation);
                    }
                }
            }
        }
        // For non-polar charts, revert to the basic animation
    }
    else {
        proceed.call(this, init);
    }
}
/**
 * Overridden method for calculating a spline from one point to the next
 * @private
 */
function wrapSplineSeriesGetPointSpline(proceed, segment, point, i) {
    let ret, connectors;
    if (this.chart.polar) {
        // `moveTo` or `lineTo`
        if (!i) {
            ret = ['M', point.plotX, point.plotY];
        }
        else { // Curve from last point to this
            connectors = getConnectors(segment, i, true, this.connectEnds);
            const rightContX = connectors.prevPointCont &&
                connectors.prevPointCont.rightContX;
            const rightContY = connectors.prevPointCont &&
                connectors.prevPointCont.rightContY;
            ret = [
                'C',
                PolarComposition_isNumber(rightContX) ? rightContX : connectors.plotX,
                PolarComposition_isNumber(rightContY) ? rightContY : connectors.plotY,
                PolarComposition_isNumber(connectors.leftContX) ?
                    connectors.leftContX :
                    connectors.plotX,
                PolarComposition_isNumber(connectors.leftContY) ?
                    connectors.leftContY :
                    connectors.plotY,
                connectors.plotX,
                connectors.plotY
            ];
        }
    }
    else {
        ret = proceed.call(this, segment, point, i);
    }
    return ret;
}
/**
 * Extend the point pos method to calculate point positions for the polar chart.
 * @private
 */
function wrapPointPos(proceed, chartCoordinates, plotY = this.plotY) {
    if (!this.destroyed) {
        const { plotX, series } = this, { chart } = series;
        if (chart.polar &&
            PolarComposition_isNumber(plotX) &&
            PolarComposition_isNumber(plotY)) {
            return [
                plotX + (chartCoordinates ? chart.plotLeft : 0),
                plotY + (chartCoordinates ? chart.plotTop : 0)
            ];
        }
        return proceed.call(this, chartCoordinates, plotY);
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * Extensions for polar charts. Additionally, much of the geometry required
 * for polar charts is gathered in RadialAxes.js.
 * @private
 */
class PolarAdditions {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(AxisClass, ChartClass, PointerClass, SeriesClass, TickClass, PointClass, AreaSplineRangeSeriesClass, ColumnSeriesClass, LineSeriesClass, SplineSeriesClass) {
        Pane_Pane.compose(ChartClass, PointerClass, SeriesClass);
        Axis_RadialAxis.compose(AxisClass, TickClass);
        if (PolarComposition_pushUnique(PolarComposition_composed, 'Polar')) {
            const chartProto = ChartClass.prototype, pointProto = PointClass.prototype, pointerProto = PointerClass.prototype, seriesProto = SeriesClass.prototype;
            PolarComposition_addEvent(ChartClass, 'afterDrawChartBox', onChartAfterDrawChartBox);
            PolarComposition_addEvent(ChartClass, 'createAxes', onChartCreateAxes);
            PolarComposition_addEvent(ChartClass, 'init', onChartAfterInit);
            PolarComposition_wrap(chartProto, 'get', wrapChartGet);
            PolarComposition_wrap(pointerProto, 'getCoordinates', wrapPointerGetCoordinates);
            PolarComposition_wrap(pointerProto, 'pinch', wrapPointerPinch);
            PolarComposition_addEvent(PointerClass, 'getSelectionMarkerAttrs', onPointerGetSelectionMarkerAttrs);
            PolarComposition_addEvent(PointerClass, 'getSelectionBox', onPointerGetSelectionBox);
            PolarComposition_addEvent(SeriesClass, 'afterInit', onSeriesAfterInit);
            PolarComposition_addEvent(SeriesClass, 'afterColumnTranslate', onSeriesAfterColumnTranslate, {
                // After columnrange and polar column modifications
                order: 9
            });
            PolarComposition_addEvent(SeriesClass, 'afterTranslate', onSeriesAfterTranslate, { order: 2 } // Run after translation of ||-coords
            );
            PolarComposition_addEvent(SeriesClass, 'afterColumnTranslate', onAfterColumnTranslate, { order: 4 });
            PolarComposition_wrap(seriesProto, 'animate', wrapSeriesAnimate);
            PolarComposition_wrap(pointProto, 'pos', wrapPointPos);
            if (ColumnSeriesClass) {
                const columnProto = ColumnSeriesClass.prototype;
                PolarComposition_wrap(columnProto, 'alignDataLabel', wrapColumnSeriesAlignDataLabel);
                PolarComposition_wrap(columnProto, 'animate', wrapSeriesAnimate);
            }
            if (LineSeriesClass) {
                const lineProto = LineSeriesClass.prototype;
                PolarComposition_wrap(lineProto, 'getGraphPath', wrapLineSeriesGetGraphPath);
            }
            if (SplineSeriesClass) {
                const splineProto = SplineSeriesClass.prototype;
                PolarComposition_wrap(splineProto, 'getPointSpline', wrapSplineSeriesGetPointSpline);
                if (AreaSplineRangeSeriesClass) {
                    const areaSplineRangeProto = AreaSplineRangeSeriesClass.prototype;
                    // #6430 Areasplinerange series use unwrapped getPointSpline
                    // method, so we need to set this method again.
                    areaSplineRangeProto.getPointSpline =
                        splineProto.getPointSpline;
                }
            }
        }
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(series) {
        this.series = series;
    }
    /* *
     *
     *  Functions
     *
     * */
    arc(low, high, start, end) {
        const series = this.series, center = series.xAxis.center, len = series.yAxis.len, paneInnerR = center[3] / 2;
        let r = len - high + paneInnerR, innerR = len - PolarComposition_pick(low, len) + paneInnerR;
        // Prevent columns from shooting through the pane's center
        if (series.yAxis.reversed) {
            if (r < 0) {
                r = paneInnerR;
            }
            if (innerR < 0) {
                innerR = paneInnerR;
            }
        }
        // Return a new shapeArgs
        return {
            x: center[0],
            y: center[1],
            r: r,
            innerR: innerR,
            start: start,
            end: end
        };
    }
    /**
     * Translate a point's plotX and plotY from the internal angle and radius
     * measures to true plotX, plotY coordinates
     * @private
     */
    toXY(point) {
        const series = this.series, chart = series.chart, xAxis = series.xAxis, yAxis = series.yAxis, plotX = point.plotX, inverted = chart.inverted, pointY = point.y;
        let plotY = point.plotY, radius = inverted ? plotX : yAxis.len - plotY, clientX;
        // Corrected y position of inverted series other than column
        if (inverted && series && !series.isRadialBar) {
            point.plotY = plotY =
                PolarComposition_isNumber(pointY) ? yAxis.translate(pointY) : 0;
        }
        // Save rectangular plotX, plotY for later computation
        point.rectPlotX = plotX;
        point.rectPlotY = plotY;
        if (yAxis.center) {
            radius += yAxis.center[3] / 2;
        }
        // Find the polar plotX and plotY. Avoid setting plotX and plotY to NaN
        // when plotY is undefined (#15438)
        if (PolarComposition_isNumber(plotY)) {
            const xy = inverted ? yAxis.postTranslate(plotY, radius) :
                xAxis.postTranslate(plotX, radius);
            point.plotX = point.polarPlotX = xy.x - chart.plotLeft;
            point.plotY = point.polarPlotY = xy.y - chart.plotTop;
        }
        // If shared tooltip, record the angle in degrees in order to align X
        // points. Otherwise, use a standard k-d tree to get the nearest point
        // in two dimensions.
        if (series.kdByAngle) {
            clientX = ((plotX / Math.PI * 180) + xAxis.pane.options.startAngle) % 360;
            if (clientX < 0) { // #2665
                clientX += 360;
            }
            point.clientX = clientX;
        }
        else {
            point.clientX = point.plotX;
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PolarComposition = (PolarAdditions);

;// external ["../highcharts-more.src.js","default","Series","types","waterfall"]
const external_highcharts_more_src_js_default_Series_types_waterfall_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_more_src_js_48e0d456__["default"].Series.types.waterfall;
var external_highcharts_more_src_js_default_Series_types_waterfall_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_more_src_js_default_Series_types_waterfall_namespaceObject);
;// ./code/es-modules/masters/highcharts-more.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-13)
 * @module highcharts/highcharts-more
 * @requires highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */

















const G = (external_highcharts_src_js_default_default());
G.RadialAxis = Axis_RadialAxis;
external_highcharts_more_src_js_default_Series_types_bubble_default().compose(G.Axis, G.Chart, G.Legend);
external_highcharts_more_src_js_default_Series_types_packedbubble_default().compose(G.Axis, G.Chart, G.Legend);
Pane_Pane.compose(G.Chart, G.Pointer, G.Series);
PolarComposition.compose(G.Axis, G.Chart, G.Pointer, G.Series, G.Tick, G.Point, (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.areasplinerange, (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.column, (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.line, (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.spline);
external_highcharts_more_src_js_default_Series_types_waterfall_default().compose(G.Axis, G.Chart);
/* harmony default export */ const highcharts_more_src = ((/* unused pure expression or super */ null && (G)));

;// external ["../highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// ./code/es-modules/Core/Axis/Color/ColorAxisBase.js
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

const { merge: ColorAxisBase_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Namespace
 *
 * */
var ColorAxisBase;
(function (ColorAxisBase) {
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
     * Initialize defined data classes.
     * @private
     */
    function initDataClasses(userOptions) {
        const axis = this, chart = axis.chart, legendItem = axis.legendItem = axis.legendItem || {}, options = axis.options, userDataClasses = userOptions.dataClasses || [];
        let dataClass, dataClasses, colorCount = chart.options.chart.colorCount, colorCounter = 0, colors;
        axis.dataClasses = dataClasses = [];
        legendItem.labels = [];
        for (let i = 0, iEnd = userDataClasses.length; i < iEnd; ++i) {
            dataClass = userDataClasses[i];
            dataClass = ColorAxisBase_merge(dataClass);
            dataClasses.push(dataClass);
            if (!chart.styledMode && dataClass.color) {
                continue;
            }
            if (options.dataClassColor === 'category') {
                if (!chart.styledMode) {
                    colors = chart.options.colors || [];
                    colorCount = colors.length;
                    dataClass.color = colors[colorCounter];
                }
                dataClass.colorIndex = colorCounter;
                // Loop back to zero
                colorCounter++;
                if (colorCounter === colorCount) {
                    colorCounter = 0;
                }
            }
            else {
                dataClass.color = color(options.minColor).tweenTo(color(options.maxColor), iEnd < 2 ? 0.5 : i / (iEnd - 1) // #3219
                );
            }
        }
    }
    ColorAxisBase.initDataClasses = initDataClasses;
    /**
     * Create initial color stops.
     * @private
     */
    function initStops() {
        const axis = this, options = axis.options, stops = axis.stops = options.stops || [
            [0, options.minColor || ''],
            [1, options.maxColor || '']
        ];
        for (let i = 0, iEnd = stops.length; i < iEnd; ++i) {
            stops[i].color = color(stops[i][1]);
        }
    }
    ColorAxisBase.initStops = initStops;
    /**
     * Normalize logarithmic values.
     * @private
     */
    function normalizedValue(value) {
        const axis = this, max = axis.max || 0, min = axis.min || 0;
        if (axis.logarithmic) {
            value = axis.logarithmic.log2lin(value);
        }
        return 1 - ((max - value) /
            ((max - min) || 1));
    }
    ColorAxisBase.normalizedValue = normalizedValue;
    /**
     * Translate from a value to a color.
     * @private
     */
    function toColor(value, point) {
        const axis = this;
        const dataClasses = axis.dataClasses;
        const stops = axis.stops;
        let pos, from, to, color, dataClass, i;
        if (dataClasses) {
            i = dataClasses.length;
            while (i--) {
                dataClass = dataClasses[i];
                from = dataClass.from;
                to = dataClass.to;
                if ((typeof from === 'undefined' || value >= from) &&
                    (typeof to === 'undefined' || value <= to)) {
                    color = dataClass.color;
                    if (point) {
                        point.dataClass = i;
                        point.colorIndex = dataClass.colorIndex;
                    }
                    break;
                }
            }
        }
        else {
            pos = axis.normalizedValue(value);
            i = stops.length;
            while (i--) {
                if (pos > stops[i][0]) {
                    break;
                }
            }
            from = stops[i] || stops[i + 1];
            to = stops[i + 1] || from;
            // The position within the gradient
            pos = 1 - (to[0] - pos) / ((to[0] - from[0]) || 1);
            color = from.color.tweenTo(to.color, pos);
        }
        return color;
    }
    ColorAxisBase.toColor = toColor;
})(ColorAxisBase || (ColorAxisBase = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Color_ColorAxisBase = (ColorAxisBase);

;// ./code/es-modules/Core/Axis/SolidGaugeAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { extend: SolidGaugeAxis_extend } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function init(axis) {
    SolidGaugeAxis_extend(axis, Color_ColorAxisBase);
}
/* *
 *
 *  Default export
 *
 * */
const SolidGaugeAxis = {
    init
};
/* harmony default export */ const Axis_SolidGaugeAxis = (SolidGaugeAxis);

;// ./code/es-modules/Series/SolidGauge/SolidGaugeSeriesDefaults.js
/* *
 *
 *  Solid angular gauge module
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
 * A solid gauge is a circular gauge where the value is indicated by a filled
 * arc, and the color of the arc may variate with the value.
 *
 * @sample highcharts/demo/gauge-solid/
 *         Solid gauges
 *
 * @extends      plotOptions.gauge
 * @excluding    dial, pivot, wrap
 * @product      highcharts
 * @requires     modules/solid-gauge
 * @optionparent plotOptions.solidgauge
 */
const SolidGaugeSeriesDefaults = {
    /**
     * The corner radius of the border surrounding solid gauge. A number
     * signifies pixels and percentage string, like for example `50%`,
     * signifies a relative size.
     *
     * @sample {highcharts} highcharts/series-solidgauge/pane-borderradius
     *         Solid gauge with rounded border.
     *
     * @type      {number | string}
     * @since     11.0.0
     * @product   highcharts
     * @apioption plotOptions.solidgauge.borderRadius
     */
    /**
     * The inner radius for points in a solid gauge. Can be given only in
     * percentage, either as a number or a string like `"50%"`.
     *
     * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
     *         Individual radius and innerRadius
     *
     * @type      {string}
     * @default   "60%"
     * @since     4.1.6
     * @product   highcharts
     * @apioption plotOptions.solidgauge.innerRadius
     */
    /**
     * Whether the strokes of the solid gauge should be `round` or `square`.
     *
     * @sample {highcharts} highcharts/demo/gauge-multiple-kpi/
     *         Rounded gauge
     *
     * @type       {string}
     * @default    round
     * @since      4.2.2
     * @product    highcharts
     * @validvalue ["square", "round"]
     * @apioption  plotOptions.solidgauge.linecap
     */
    /**
     * Allow the gauge to overshoot the end of the perimeter axis by this
     * many degrees. Say if the gauge axis goes from 0 to 60, a value of
     * 100, or 1000, will show 5 degrees beyond the end of the axis when this
     * option is set to 5.
     *
     * @type      {number}
     * @default   0
     * @since     3.0.10
     * @product   highcharts
     * @apioption plotOptions.solidgauge.overshoot
     */
    /**
     * The outer radius for points in a solid gauge. Can be given only in
     * percentage, either as a number or a string like `"100%"`.
     *
     * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
     *         Individual radius and innerRadius
     *
     * @type      {string}
     * @default   "100%"
     * @since     4.1.6
     * @product   highcharts
     * @apioption plotOptions.solidgauge.radius
     */
    /**
     * Whether to draw rounded edges on the gauge. This options adds the radius
     * of the rounding to the ends of the arc, so it extends past the actual
     * values. When `borderRadius` is set, it takes precedence over `rounded`. A
     * `borderRadius` of 50% behaves like `rounded`, except the shape is not
     * extended past its value.
     *
     * @sample {highcharts} highcharts/demo/gauge-multiple-kpi/
     *         Gauge showing multiple KPIs
     *
     * @type      {boolean}
     * @default   false
     * @since     5.0.8
     * @product   highcharts
     * @apioption plotOptions.solidgauge.rounded
     */
    /**
     * The threshold or base level for the gauge.
     *
     * @sample {highcharts} highcharts/plotoptions/solidgauge-threshold/
     *         Zero threshold with negative and positive values
     *
     * @type      {number|null}
     * @since     5.0.3
     * @product   highcharts
     * @apioption plotOptions.solidgauge.threshold
     */
    /**
     * Whether to give each point an individual color.
     */
    colorByPoint: true,
    dataLabels: {
        y: 0
    }
};
/**
 * A `solidgauge` series. If the [type](#series.solidgauge.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 *
 * @extends   series,plotOptions.solidgauge
 * @excluding animationLimit, boostThreshold, connectEnds, connectNulls,
 *            cropThreshold, dashStyle, dataParser, dataURL, dial,
 *            findNearestPointBy, getExtremesFromAll, marker, negativeColor,
 *            pointPlacement, pivot, shadow, softThreshold, stack, stacking,
 *            states, step, threshold, turboThreshold, wrap, zoneAxis, zones,
 *            dataSorting, boostBlending
 * @product   highcharts
 * @requires  modules/solid-gauge
 * @apioption series.solidgauge
 */
/**
 * An array of data points for the series. For the `solidgauge` series
 * type, points can be given in the following ways:
 *
 * 1. An array of numerical values. In this case, the numerical values will be
 *    interpreted as `y` options. Example:
 *    ```js
 *    data: [0, 5, 3, 5]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.solidgauge.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        y: 5,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        y: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * The typical gauge only contains a single data value.
 *
 * @sample {highcharts} highcharts/chart/reflow-true/
 *         Numerical values
 * @sample {highcharts} highcharts/series/data-array-of-objects/
 *         Config objects
 *
 * @type      {Array<number|null|*>}
 * @extends   series.gauge.data
 * @product   highcharts
 * @apioption series.solidgauge.data
 */
/**
 * The inner radius of an individual point in a solid gauge. Can be given only
 * in percentage, either as a number or a string like `"50%"`.
 *
 * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
 *         Individual radius and innerRadius
 *
 * @type      {string}
 * @since     4.1.6
 * @product   highcharts
 * @apioption series.solidgauge.data.innerRadius
 */
/**
 * The outer radius of an individual point in a solid gauge. Can be
 * given only in percentage, either as a number or a string like `"100%"`.
 *
 * @sample {highcharts} highcharts/plotoptions/solidgauge-radius/
 *         Individual radius and innerRadius
 *
 * @type      {string}
 * @since     4.1.6
 * @product   highcharts
 * @apioption series.solidgauge.data.radius
 */
''; // Keeps doclets above separate
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const SolidGauge_SolidGaugeSeriesDefaults = (SolidGaugeSeriesDefaults);

;// ./code/es-modules/Series/SolidGauge/SolidGaugeSeries.js
/* *
 *
 *  Solid angular gauge module
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { gauge: GaugeSeries, pie: PieSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;



const { clamp, extend: SolidGaugeSeries_extend, isNumber: SolidGaugeSeries_isNumber, merge: SolidGaugeSeries_merge, pick: SolidGaugeSeries_pick, pInt } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * SolidGauge series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.solidgauge
 *
 * @augments Highcarts.Series
 */
class SolidGaugeSeries extends GaugeSeries {
    /* *
     *
     *  Functions
     *
     * */
    // Extend the translate function to extend the Y axis with the necessary
    // decoration (#5895).
    translate() {
        const axis = this.yAxis;
        Axis_SolidGaugeAxis.init(axis);
        // Prepare data classes
        if (!axis.dataClasses && axis.options.dataClasses) {
            axis.initDataClasses(axis.options);
        }
        axis.initStops();
        // Generate points and inherit data label position
        GaugeSeries.prototype.translate.call(this);
    }
    // Draw the points where each point is one needle.
    drawPoints() {
        const series = this, yAxis = series.yAxis, center = yAxis.center, options = series.options, renderer = series.chart.renderer, overshoot = options.overshoot, rounded = options.rounded && options.borderRadius === void 0, overshootVal = SolidGaugeSeries_isNumber(overshoot) ?
            overshoot / 180 * Math.PI :
            0;
        let thresholdAngleRad;
        // Handle the threshold option
        if (SolidGaugeSeries_isNumber(options.threshold)) {
            thresholdAngleRad = yAxis.startAngleRad + yAxis.translate(options.threshold, void 0, void 0, void 0, true);
        }
        this.thresholdAngleRad = SolidGaugeSeries_pick(thresholdAngleRad, yAxis.startAngleRad);
        for (const point of series.points) {
            // #10630 null point should not be draw
            if (!point.isNull) { // Condition like in pie chart
                const radius = ((pInt(SolidGaugeSeries_pick(point.options.radius, options.radius, 100 // %
                )) * center[2]) / 200), innerRadius = ((pInt(SolidGaugeSeries_pick(point.options.innerRadius, options.innerRadius, 60 // %
                )) * center[2]) / 200), axisMinAngle = Math.min(yAxis.startAngleRad, yAxis.endAngleRad), axisMaxAngle = Math.max(yAxis.startAngleRad, yAxis.endAngleRad);
                let graphic = point.graphic, rotation = (yAxis.startAngleRad +
                    yAxis.translate(point.y, void 0, void 0, void 0, true)), shapeArgs, d, toColor = yAxis.toColor(point.y, point), className = point.getClassName();
                if (toColor === 'none') { // #3708
                    toColor = point.color || series.color || 'none';
                }
                if (toColor !== 'none') {
                    point.color = toColor;
                }
                // Handle overshoot and clipping to axis max/min
                rotation = clamp(rotation, axisMinAngle - overshootVal, axisMaxAngle + overshootVal);
                // Handle the wrap option
                if (options.wrap === false) {
                    rotation = clamp(rotation, axisMinAngle, axisMaxAngle);
                }
                const angleOfRounding = rounded ?
                    ((radius - innerRadius) / 2) / radius :
                    0, start = Math.min(rotation, series.thresholdAngleRad) -
                    angleOfRounding;
                let end = Math.max(rotation, series.thresholdAngleRad) +
                    angleOfRounding;
                if (end - start > 2 * Math.PI) {
                    end = start + 2 * Math.PI;
                }
                let borderRadius = rounded ? '50%' : 0;
                if (options.borderRadius) {
                    borderRadius = Extensions_BorderRadius.optionsToObject(options.borderRadius).radius;
                }
                point.shapeArgs = shapeArgs = {
                    x: center[0],
                    y: center[1],
                    r: radius,
                    innerR: innerRadius,
                    start,
                    end,
                    borderRadius
                };
                point.startR = radius; // For PieSeries.animate
                if (graphic) {
                    d = shapeArgs.d;
                    graphic.animate(SolidGaugeSeries_extend({ fill: toColor }, shapeArgs));
                    if (d) {
                        shapeArgs.d = d; // Animate alters it
                    }
                }
                else {
                    point.graphic = graphic = renderer.arc(shapeArgs)
                        .attr({
                        fill: toColor,
                        'sweep-flag': 0
                    })
                        .add(series.group);
                }
                if (!series.chart.styledMode) {
                    if (options.linecap !== 'square') {
                        graphic.attr({
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round'
                        });
                    }
                    graphic.attr({
                        stroke: options.borderColor || 'none',
                        'stroke-width': options.borderWidth || 0
                    });
                }
                else if (series.yAxis?.stops) {
                    className = className
                        .replace(/highcharts-color-\d/gm, '')
                        .trim();
                }
                if (graphic) {
                    graphic.addClass(className);
                }
            }
        }
    }
    // Extend the pie slice animation by animating from start angle and up.
    animate(init) {
        if (!init) {
            this.startAngleRad = this.thresholdAngleRad;
            PieSeries.prototype.animate.call(this, init);
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
SolidGaugeSeries.defaultOptions = SolidGaugeSeries_merge(GaugeSeries.defaultOptions, SolidGauge_SolidGaugeSeriesDefaults);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('solidgauge', SolidGaugeSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const SolidGauge_SolidGaugeSeries = ((/* unused pure expression or super */ null && (SolidGaugeSeries)));

;// ./code/es-modules/masters/modules/solid-gauge.src.js





/* harmony default export */ const solid_gauge_src = ((external_highcharts_src_js_default_default()));

export { solid_gauge_src as default };
