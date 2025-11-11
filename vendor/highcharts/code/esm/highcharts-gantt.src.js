/**
 * @license Highcharts Gantt JS v12.4.0-modified (2025-11-11)
 * @module highcharts/highcharts-gantt
 *
 * (c) 2017-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 *
 * Authors:
 * - Lars Cabrera
 * - Torstein Honsi
 * - Jon Arild Nygard
 * - Oystein Moseng
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__ from "./highcharts.src.js";
import "./highcharts.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_0ce86fde__ from "./modules/accessibility.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__modules_gantt_src_js_671dcdef__ from "./modules/gantt.src.js";
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

;// external ["./highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// external ["./highcharts.src.js","default","Fx"]
const external_highcharts_src_js_default_Fx_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Fx;
var external_highcharts_src_js_default_Fx_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Fx_namespaceObject);
;// external ["./highcharts.src.js","default","AST"]
const external_highcharts_src_js_default_AST_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].AST;
var external_highcharts_src_js_default_AST_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_AST_namespaceObject);
;// external ["./highcharts.src.js","default","Templating"]
const external_highcharts_src_js_default_Templating_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Templating;
var external_highcharts_src_js_default_Templating_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Templating_namespaceObject);
;// external ["./highcharts.src.js","default","RendererRegistry"]
const external_highcharts_src_js_default_RendererRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].RendererRegistry;
var external_highcharts_src_js_default_RendererRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_RendererRegistry_namespaceObject);
;// external ["./highcharts.src.js","default","SVGElement"]
const external_highcharts_src_js_default_SVGElement_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].SVGElement;
var external_highcharts_src_js_default_SVGElement_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGElement_namespaceObject);
;// external ["./highcharts.src.js","default","SVGRenderer"]
const external_highcharts_src_js_default_SVGRenderer_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].SVGRenderer;
var external_highcharts_src_js_default_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGRenderer_namespaceObject);
;// ./code/es-modules/Core/Renderer/HTML/HTMLElement.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { composed, isFirefox } = (external_highcharts_src_js_default_default());


const { attr, css, createElement, defined, extend, getAlignFactor, isNumber, pInt, pushUnique } = (external_highcharts_src_js_default_default());
/**
 * The opacity and visibility properties are set as attributes on the main
 * element and SVG groups, and as identical CSS properties on the HTML element
 * and the ancestry divs. (#3542)
 *
 * @private
 */
function commonSetter(value, key, elem) {
    const style = this.div?.style;
    (external_highcharts_src_js_default_SVGElement_default()).prototype[`${key}Setter`].call(this, value, key, elem);
    if (style) {
        elem.style[key] = style[key] = value;
    }
}
/**
 * Decorate each SVG group in the ancestry line. Each SVG `g` element that
 * contains children with useHTML, will receive a `div` element counterpart to
 * contain the HTML span. These div elements are translated and styled like
 * original `g` counterparts.
 *
 * @private
 */
const decorateSVGGroup = (g, container) => {
    if (!g.div) {
        const className = attr(g.element, 'class'), cssProto = g.css;
        // Create the parallel HTML group
        const div = createElement('div', className ? { className } : void 0, {
            // Add HTML specific styles
            position: 'absolute',
            left: `${g.translateX || 0}px`,
            top: `${g.translateY || 0}px`,
            // Add pre-existing styles
            ...g.styles,
            // Add g attributes that correspond to CSS
            display: g.display,
            opacity: g.opacity, // #5075
            visibility: g.visibility
        }, 
        // The top group is appended to container
        g.parentGroup?.div || container);
        g.classSetter = (value, key, element) => {
            element.setAttribute('class', value);
            div.className = value;
        };
        /**
         * Common translate setter for X and Y on the HTML group.
         *
         * Reverted the fix for #6957 due to positioning problems and offline
         * export (#7254, #7280, #7529)
         * @private
         */
        g.translateXSetter = g.translateYSetter = (value, key) => {
            g[key] = value;
            div.style[key === 'translateX' ? 'left' : 'top'] = `${value}px`;
            g.doTransform = true;
        };
        g.scaleXSetter = g.scaleYSetter = (value, key) => {
            g[key] = value;
            g.doTransform = true;
        };
        g.opacitySetter = g.visibilitySetter = commonSetter;
        // Extend the parent group's css function by updating the parallel div
        // counterpart with the same style.
        g.css = (styles) => {
            // Call the base css method. The `parentGroup` can be either an
            // SVGElement or an SVGLabel, in which the css method is extended
            // (#19200).
            cssProto.call(g, styles);
            // #6794
            if (styles.cursor) {
                div.style.cursor = styles.cursor;
            }
            // #18821
            if (styles.pointerEvents) {
                div.style.pointerEvents = styles.pointerEvents;
            }
            return g;
        };
        // Event handling
        g.on = function () {
            external_highcharts_src_js_default_SVGElement_default().prototype.on.apply({
                element: div,
                onEvents: g.onEvents
            }, arguments);
            return g;
        };
        g.div = div;
    }
    return g.div;
};
/* *
 *
 *  Class
 *
 * */
class HTMLElement extends (external_highcharts_src_js_default_SVGElement_default()) {
    /**
     * Compose
     * @private
     */
    static compose(SVGRendererClass) {
        if (pushUnique(composed, this.compose)) {
            /**
             * Create a HTML text node. This is used by the SVG renderer `text`
             * and `label` functions through the `useHTML` parameter.
             *
             * @private
             */
            SVGRendererClass.prototype.html = function (str, x, y) {
                return new HTMLElement(this, 'span')
                    // Set the default attributes
                    .attr({
                    text: str,
                    x: Math.round(x),
                    y: Math.round(y)
                });
            };
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    constructor(renderer, nodeName) {
        super(renderer, nodeName);
        if (HTMLElement.useForeignObject) {
            this.foreignObject = renderer.createElement('foreignObject')
                .attr({
                zIndex: 2
            });
        }
        else {
            this.css({
                position: 'absolute',
                ...(renderer.styledMode ? {} : {
                    fontFamily: renderer.style.fontFamily,
                    fontSize: renderer.style.fontSize
                })
            });
        }
        this.element.style.whiteSpace = 'nowrap';
    }
    /**
     * Get the correction in X and Y positioning as the element is rotated.
     * @private
     */
    getSpanCorrection(width, baseline, alignCorrection) {
        this.xCorr = -width * alignCorrection;
        this.yCorr = -baseline;
    }
    /**
     * Apply CSS to HTML elements. This is used in text within SVG rendering.
     * @private
     */
    css(styles) {
        const { element } = this, 
        // When setting or unsetting the width style, we need to update
        // transform (#8809)
        isSettingWidth = (element.tagName === 'SPAN' &&
            styles &&
            'width' in styles), textWidth = isSettingWidth && styles.width;
        let doTransform;
        if (isSettingWidth) {
            delete styles.width;
            this.textWidth = pInt(textWidth) || void 0;
            doTransform = true;
        }
        // Some properties require other properties to be set
        if (styles?.textOverflow === 'ellipsis') {
            styles.overflow = 'hidden';
            styles.whiteSpace = 'nowrap';
        }
        if (styles?.lineClamp) {
            styles.display = '-webkit-box';
            styles.WebkitLineClamp = styles.lineClamp;
            styles.WebkitBoxOrient = 'vertical';
            styles.overflow = 'hidden';
        }
        // SVG natively supports setting font size as numbers. With HTML, the
        // font size should behave in the same way (#21624).
        if (isNumber(Number(styles?.fontSize))) {
            styles.fontSize += 'px';
        }
        extend(this.styles, styles);
        css(element, styles);
        // Now that all styles are applied, to the transform
        if (doTransform) {
            this.updateTransform();
        }
        return this;
    }
    /**
     * The useHTML method for calculating the bounding box based on offsets.
     * Called internally from the `SVGElement.getBBox` function and subsequently
     * rotated.
     *
     * @private
     */
    htmlGetBBox() {
        const { element } = this;
        return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
    /**
     * Batch update styles and attributes related to transform
     *
     * @private
     */
    updateTransform() {
        // Aligning non added elements is expensive
        if (!this.added) {
            this.alignOnAdd = true;
            return;
        }
        const { element, foreignObject, oldTextWidth, renderer, rotation, rotationOriginX, rotationOriginY, scaleX, scaleY, styles: { display = 'inline-block', whiteSpace }, textAlign = 'left', textWidth, translateX = 0, translateY = 0, x = 0, y = 0 } = this;
        // Get the pixel length of the text
        const getTextPxLength = () => {
            if (this.textPxLength) {
                return this.textPxLength;
            }
            // Reset multiline/ellipsis in order to read width (#4928,
            // #5417)
            css(element, {
                width: '',
                whiteSpace: whiteSpace || 'nowrap'
            });
            return element.offsetWidth;
        };
        // Apply translate
        if (!foreignObject) {
            css(element, {
                marginLeft: `${translateX}px`,
                marginTop: `${translateY}px`
            });
        }
        if (element.tagName === 'SPAN') {
            const currentTextTransform = [
                rotation,
                textAlign,
                element.innerHTML,
                textWidth,
                this.textAlign
            ].join(','), parentPadding = (this.parentGroup?.padding * -1) || 0;
            let baseline;
            // Update textWidth. Use the memoized textPxLength if possible, to
            // avoid the getTextPxLength function using elem.offsetWidth.
            // Calling offsetWidth affects rendering time as it forces layout
            // (#7656).
            if (textWidth !== oldTextWidth) { // #983, #1254
                const textPxLength = getTextPxLength(), textWidthNum = textWidth || 0, willOverWrap = !renderer.styledMode &&
                    element.style.textOverflow === '' &&
                    element.style.webkitLineClamp;
                if ((textWidthNum > oldTextWidth ||
                    textPxLength > textWidthNum ||
                    willOverWrap) && (
                // Only set the width if the text is able to word-wrap,
                // or text-overflow is ellipsis (#9537)
                /[\-\s\u00AD]/.test(element.textContent || element.innerText) ||
                    element.style.textOverflow === 'ellipsis')) {
                    const usePxWidth = rotation || scaleX ||
                        textPxLength > textWidthNum ||
                        // Set width to prevent over-wrapping (#22609)
                        willOverWrap;
                    css(element, {
                        width: usePxWidth && isNumber(textWidth) ?
                            textWidth + 'px' : 'auto', // #16261
                        display,
                        whiteSpace: whiteSpace || 'normal' // #3331
                    });
                    this.oldTextWidth = textWidth;
                }
            }
            if (foreignObject) {
                css(element, {
                    // Inline block must be set before we can read the offset
                    // width
                    display: 'inline-block',
                    verticalAlign: 'top'
                });
                // In many cases (Firefox always, others on title layout) we
                // need the foreign object to have a larger width and height
                // than its content, in order to read its content's size
                foreignObject.attr({
                    width: renderer.width,
                    height: renderer.height
                });
            }
            // Do the calculations and DOM access only if properties changed
            if (currentTextTransform !== this.cTT) {
                baseline = renderer.fontMetrics(element).b;
                // Renderer specific handling of span rotation, but only if we
                // have something to update.
                if (defined(rotation) &&
                    !foreignObject &&
                    ((rotation !== (this.oldRotation || 0)) ||
                        (textAlign !== this.oldAlign))) {
                    // CSS transform and transform-origin both supported without
                    // prefix since Firefox 16 (2012), IE 10 (2012), Chrome 36
                    // (2014), Safari 9 (2015).;
                    css(element, {
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: `${parentPadding}% ${parentPadding}px`
                    });
                }
                this.getSpanCorrection(
                // Avoid elem.offsetWidth if we can, it affects rendering
                // time heavily (#7656)
                ((!defined(rotation) &&
                    !this.textWidth &&
                    this.textPxLength) || // #7920
                    element.offsetWidth), baseline, getAlignFactor(textAlign));
            }
            // Apply position with correction and rotation origin
            const { xCorr = 0, yCorr = 0 } = this, rotOriginX = (rotationOriginX ?? x) - xCorr - x - parentPadding, rotOriginY = (rotationOriginY ?? y) - yCorr - y - parentPadding, styles = {
                left: `${x + xCorr}px`,
                top: `${y + yCorr}px`,
                textAlign,
                transformOrigin: `${rotOriginX}px ${rotOriginY}px`
            };
            if (scaleX || scaleY) {
                styles.transform = `scale(${scaleX ?? 1},${scaleY ?? 1})`;
            }
            // Move the foreign object
            if (foreignObject) {
                super.updateTransform();
                if (isNumber(x) && isNumber(y)) {
                    foreignObject.attr({
                        x: x + xCorr,
                        y: y + yCorr,
                        width: element.offsetWidth + 3,
                        height: element.offsetHeight,
                        'transform-origin': element
                            .getAttribute('transform-origin') || '0 0'
                    });
                    // Reset, otherwise lineClamp will not work
                    css(element, { display, textAlign });
                }
                else if (isFirefox) {
                    foreignObject.attr({
                        width: 0,
                        height: 0
                    });
                }
            }
            else {
                css(element, styles);
            }
            // Record current text transform
            this.cTT = currentTextTransform;
            this.oldRotation = rotation;
            this.oldAlign = textAlign;
        }
    }
    /**
     * Add the element to a group wrapper. For HTML elements, a parallel div
     * will be created for each ancenstor SVG `g` element.
     *
     * @private
     */
    add(parentGroup) {
        const { foreignObject, renderer } = this, container = renderer.box.parentNode, parents = [];
        // Foreign object
        if (foreignObject) {
            foreignObject.add(parentGroup);
            super.add(
            // Create a body inside the foreignObject
            renderer.createElement('body')
                .attr({ xmlns: 'http://www.w3.org/1999/xhtml' })
                .css({
                background: 'transparent',
                // 3px is to avoid clipping on the right
                margin: '0 3px 0 0' // For export
            })
                .add(foreignObject));
            // Add span next to the SVG
        }
        else {
            let div;
            this.parentGroup = parentGroup;
            // Create a parallel divs to hold the HTML elements
            if (parentGroup) {
                div = parentGroup.div;
                if (!div) {
                    // Read the parent chain into an array and read from top
                    // down
                    let svgGroup = parentGroup;
                    while (svgGroup) {
                        parents.push(svgGroup);
                        // Move up to the next parent group
                        svgGroup = svgGroup.parentGroup;
                    }
                    // Decorate each of the ancestor group elements with a
                    // parallel div that reflects translation and styling
                    for (const parentGroup of parents.reverse()) {
                        div = decorateSVGGroup(parentGroup, container);
                    }
                }
            }
            (div || container).appendChild(this.element);
        }
        this.added = true;
        if (this.alignOnAdd) {
            this.updateTransform();
        }
        return this;
    }
    /**
     * Text setter
     * @private
     */
    textSetter(value) {
        if (value !== this.textStr) {
            delete this.bBox;
            delete this.oldTextWidth;
            external_highcharts_src_js_default_AST_default().setElementHTML(this.element, value ?? '');
            this.textStr = value;
            this.doTransform = true;
        }
    }
    /**
     * Align setter
     *
     * @private
     */
    alignSetter(value) {
        this.alignValue = this.textAlign = value;
        this.doTransform = true;
    }
    /**
     * Various setters which rely on update transform
     * @private
     */
    xSetter(value, key) {
        this[key] = value;
        this.doTransform = true;
    }
}
// Some shared setters
const proto = HTMLElement.prototype;
proto.visibilitySetter = proto.opacitySetter = commonSetter;
proto.ySetter =
    proto.rotationSetter =
        proto.rotationOriginXSetter =
            proto.rotationOriginYSetter = proto.xSetter;
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HTML_HTMLElement = (HTMLElement);

;// external ["./highcharts.src.js","default","Axis"]
const external_highcharts_src_js_default_Axis_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Axis;
var external_highcharts_src_js_default_Axis_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Axis_namespaceObject);
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


const { addEvent, getMagnitude, normalizeTickInterval, timeUnits } = (external_highcharts_src_js_default_default());
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
            addEvent(AxisClass, 'afterSetType', onAfterSetType);
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
            interval = timeUnits[unit[0]], multiples = unit[1], i;
            // Loop through the units to find the one that best fits the
            // tickInterval
            for (i = 0; i < units.length; i++) {
                unit = units[i];
                interval = timeUnits[unit[0]];
                multiples = unit[1];
                if (units[i + 1]) {
                    // `lessThan` is in the middle between the highest multiple
                    // and the next unit.
                    const lessThan = (interval *
                        multiples[multiples.length - 1] +
                        timeUnits[units[i + 1][0]]) / 2;
                    // Break and keep the current unit
                    if (tickInterval <= lessThan) {
                        break;
                    }
                }
            }
            // Prevent 2.5 years intervals, though 25, 250 etc. are allowed
            if (interval === timeUnits.year && tickInterval < 5 * interval) {
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

;// ./code/es-modules/Core/Axis/LogarithmicAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: LogarithmicAxis_addEvent, normalizeTickInterval: LogarithmicAxis_normalizeTickInterval, pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 */
var LogarithmicAxis;
(function (LogarithmicAxis) {
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
     * Provides logarithmic support for axes.
     * @private
     */
    function compose(AxisClass) {
        if (!AxisClass.keepProps.includes('logarithmic')) {
            AxisClass.keepProps.push('logarithmic');
            LogarithmicAxis_addEvent(AxisClass, 'afterSetType', onAfterSetType);
            LogarithmicAxis_addEvent(AxisClass, 'afterInit', onAfterInit);
        }
        return AxisClass;
    }
    LogarithmicAxis.compose = compose;
    /**
     * @private
     */
    function onAfterSetType() {
        if (this.type !== 'logarithmic') {
            this.logarithmic = void 0;
        }
        else {
            this.logarithmic ?? (this.logarithmic = new Additions(this));
        }
    }
    /**
     * @private
     */
    function onAfterInit() {
        const axis = this;
        const log = axis.logarithmic;
        // Extend logarithmic axis
        if (log) {
            axis.lin2val = function (num) {
                return log.lin2log(num);
            };
            axis.val2lin = function (num) {
                return log.log2lin(num);
            };
        }
    }
    /* *
     *
     *  Class
     *
     * */
    /**
     * Provides logarithmic support for axes.
     * @private
     * @class
     */
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
         * Set the tick positions of a logarithmic axis.
         */
        getLogTickPositions(interval, min, max, minor) {
            const log = this;
            const axis = log.axis;
            const axisLength = axis.len;
            const options = axis.options;
            // Since we use this method for both major and minor ticks,
            // use a local variable and return the result
            let positions = [];
            // Reset
            if (!minor) {
                log.minorAutoInterval = void 0;
            }
            // First case: All ticks fall on whole logarithms: 1, 10, 100 etc.
            if (interval >= 0.5) {
                interval = Math.round(interval);
                positions = axis.getLinearTickPositions(interval, min, max);
                // Second case: We need intermediary ticks. For example
                // 1, 2, 4, 6, 8, 10, 20, 40 etc.
            }
            else if (interval >= 0.08) {
                const roundedMin = Math.floor(min);
                let intermediate, i, j, len, pos, lastPos, break2;
                if (interval > 0.3) {
                    intermediate = [1, 2, 4];
                    // 0.2 equals five minor ticks per 1, 10, 100 etc
                }
                else if (interval > 0.15) {
                    intermediate = [1, 2, 4, 6, 8];
                }
                else { // 0.1 equals ten minor ticks per 1, 10, 100 etc
                    intermediate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                }
                for (i = roundedMin; i < max + 1 && !break2; i++) {
                    len = intermediate.length;
                    for (j = 0; j < len && !break2; j++) {
                        pos = log.log2lin(log.lin2log(i) * intermediate[j]);
                        // #1670, lastPos is #3113
                        if (pos > min &&
                            (!minor || lastPos <= max) &&
                            typeof lastPos !== 'undefined') {
                            positions.push(lastPos);
                        }
                        if (lastPos > max) {
                            break2 = true;
                        }
                        lastPos = pos;
                    }
                }
                // Third case: We are so deep in between whole logarithmic values,
                // that we might as well handle the tick positions like a linear
                // axis. For example 1.01, 1.02, 1.03, 1.04.
            }
            else {
                const realMin = log.lin2log(min), realMax = log.lin2log(max), tickIntervalOption = minor ?
                    axis.getMinorTickInterval() :
                    options.tickInterval, filteredTickIntervalOption = tickIntervalOption === 'auto' ?
                    null :
                    tickIntervalOption, tickPixelIntervalOption = options.tickPixelInterval / (minor ? 5 : 1), totalPixelLength = minor ?
                    axisLength / axis.tickPositions.length :
                    axisLength;
                interval = pick(filteredTickIntervalOption, log.minorAutoInterval, (realMax - realMin) *
                    tickPixelIntervalOption / (totalPixelLength || 1));
                interval = LogarithmicAxis_normalizeTickInterval(interval);
                positions = axis.getLinearTickPositions(interval, realMin, realMax).map(log.log2lin);
                if (!minor) {
                    log.minorAutoInterval = interval / 5;
                }
            }
            // Set the axis-level tickInterval variable
            if (!minor) {
                axis.tickInterval = interval;
            }
            return positions;
        }
        lin2log(num) {
            return Math.pow(10, num);
        }
        log2lin(num) {
            return Math.log(num) / Math.LN10;
        }
    }
    LogarithmicAxis.Additions = Additions;
})(LogarithmicAxis || (LogarithmicAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_LogarithmicAxis = (LogarithmicAxis);

;// external ["./highcharts.src.js","default","PlotLineOrBand"]
const external_highcharts_src_js_default_PlotLineOrBand_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].PlotLineOrBand;
var external_highcharts_src_js_default_PlotLineOrBand_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_PlotLineOrBand_namespaceObject);
;// external ["./highcharts.src.js","default","Tick"]
const external_highcharts_src_js_default_Tick_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Tick;
var external_highcharts_src_js_default_Tick_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Tick_namespaceObject);
;// external ["./highcharts.src.js","default","Tooltip"]
const external_highcharts_src_js_default_Tooltip_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Tooltip;
var external_highcharts_src_js_default_Tooltip_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Tooltip_namespaceObject);
;// external ["./highcharts.src.js","default","Point"]
const external_highcharts_src_js_default_Point_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Point;
var external_highcharts_src_js_default_Point_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Point_namespaceObject);
;// external ["./highcharts.src.js","default","Pointer"]
const external_highcharts_src_js_default_Pointer_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Pointer;
var external_highcharts_src_js_default_Pointer_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Pointer_namespaceObject);
;// external ["./highcharts.src.js","default","Legend"]
const external_highcharts_src_js_default_Legend_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Legend;
var external_highcharts_src_js_default_Legend_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Legend_namespaceObject);
;// external ["./highcharts.src.js","default","LegendSymbol"]
const external_highcharts_src_js_default_LegendSymbol_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].LegendSymbol;
var external_highcharts_src_js_default_LegendSymbol_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_LegendSymbol_namespaceObject);
;// external ["./highcharts.src.js","default","Chart"]
const external_highcharts_src_js_default_Chart_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Chart;
var external_highcharts_src_js_default_Chart_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Chart_namespaceObject);
;// ./code/es-modules/Extensions/ScrollablePlotArea.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Highcharts feature to make the Y axis stay fixed when scrolling the chart
 *  horizontally on mobile devices. Supports left and right side axes.
 */


const { stop } = (external_highcharts_src_js_default_default());

const { composed: ScrollablePlotArea_composed } = (external_highcharts_src_js_default_default());


const { addEvent: ScrollablePlotArea_addEvent, createElement: ScrollablePlotArea_createElement, css: ScrollablePlotArea_css, defined: ScrollablePlotArea_defined, erase, merge, pushUnique: ScrollablePlotArea_pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/** @private */
function onChartRender() {
    let scrollablePlotArea = this.scrollablePlotArea;
    if ((this.scrollablePixelsX || this.scrollablePixelsY) &&
        !scrollablePlotArea) {
        this.scrollablePlotArea = scrollablePlotArea = new ScrollablePlotArea(this);
    }
    scrollablePlotArea?.applyFixed();
}
/** @private */
function markDirty() {
    if (this.chart.scrollablePlotArea) {
        this.chart.scrollablePlotArea.isDirty = true;
    }
}
class ScrollablePlotArea {
    static compose(AxisClass, ChartClass, SeriesClass) {
        if (ScrollablePlotArea_pushUnique(ScrollablePlotArea_composed, this.compose)) {
            ScrollablePlotArea_addEvent(AxisClass, 'afterInit', markDirty);
            ScrollablePlotArea_addEvent(ChartClass, 'afterSetChartSize', (e) => this.afterSetSize(e.target, e));
            ScrollablePlotArea_addEvent(ChartClass, 'render', onChartRender);
            ScrollablePlotArea_addEvent(SeriesClass, 'show', markDirty);
        }
    }
    static afterSetSize(chart, e) {
        const { minWidth, minHeight } = chart.options.chart.scrollablePlotArea || {}, { clipBox, plotBox, inverted, renderer } = chart;
        let scrollablePixelsX, scrollablePixelsY, recalculateHoriz;
        // Skip for exporting
        if (renderer.forExport) {
            return;
        }
        // The amount of pixels to scroll, the difference between chart width
        // and scrollable width
        if (minWidth) {
            chart.scrollablePixelsX = scrollablePixelsX = Math.max(0, minWidth - chart.chartWidth);
            if (scrollablePixelsX) {
                chart.scrollablePlotBox = merge(chart.plotBox);
                plotBox.width = chart.plotWidth += scrollablePixelsX;
                clipBox[inverted ? 'height' : 'width'] += scrollablePixelsX;
                recalculateHoriz = true;
            }
            // Currently we can only do either X or Y
        }
        else if (minHeight) {
            chart.scrollablePixelsY = scrollablePixelsY = Math.max(0, minHeight - chart.chartHeight);
            if (ScrollablePlotArea_defined(scrollablePixelsY)) {
                chart.scrollablePlotBox = merge(chart.plotBox);
                plotBox.height = chart.plotHeight += scrollablePixelsY;
                clipBox[inverted ? 'width' : 'height'] += scrollablePixelsY;
                recalculateHoriz = false;
            }
        }
        if (ScrollablePlotArea_defined(recalculateHoriz)) {
            if (!e.skipAxes) {
                for (const axis of chart.axes) {
                    // Apply the corrected plot size to the axes of the other
                    // orientation than the scrolling direction
                    if (axis.horiz === recalculateHoriz ||
                        // Or parallel axes
                        (chart.hasParallelCoordinates && axis.coll === 'yAxis')) {
                        axis.setAxisSize();
                        axis.setAxisTranslation();
                    }
                }
            }
        }
        else {
            // Clear (potential) old box when a new one was not set
            delete chart.scrollablePlotBox;
        }
    }
    constructor(chart) {
        const chartOptions = chart.options.chart, Renderer = external_highcharts_src_js_default_RendererRegistry_default().getRendererType(), scrollableOptions = chartOptions.scrollablePlotArea || {}, moveFixedElements = this.moveFixedElements.bind(this), styles = {
            WebkitOverflowScrolling: 'touch',
            overflowX: 'hidden',
            overflowY: 'hidden'
        };
        if (chart.scrollablePixelsX) {
            styles.overflowX = 'auto';
        }
        if (chart.scrollablePixelsY) {
            styles.overflowY = 'auto';
        }
        this.chart = chart;
        // Insert a container with relative position that scrolling and fixed
        // container renders to (#10555)
        const parentDiv = this.parentDiv = ScrollablePlotArea_createElement('div', {
            className: 'highcharts-scrolling-parent'
        }, {
            position: 'relative'
        }, chart.renderTo), 
        // Add the necessary divs to provide scrolling
        scrollingContainer = this.scrollingContainer = ScrollablePlotArea_createElement('div', {
            'className': 'highcharts-scrolling'
        }, styles, parentDiv), innerContainer = this.innerContainer = ScrollablePlotArea_createElement('div', {
            'className': 'highcharts-inner-container'
        }, void 0, scrollingContainer), fixedDiv = this.fixedDiv = ScrollablePlotArea_createElement('div', {
            className: 'highcharts-fixed'
        }, {
            position: 'absolute',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: (chartOptions.style?.zIndex || 0) + 2,
            top: 0
        }, void 0, true), fixedRenderer = this.fixedRenderer = new Renderer(fixedDiv, chart.chartWidth, chart.chartHeight, chartOptions.style);
        // Mask
        this.mask = fixedRenderer
            .path()
            .attr({
            fill: chartOptions.backgroundColor || '#fff',
            'fill-opacity': scrollableOptions.opacity ?? 0.85,
            zIndex: -1
        })
            .addClass('highcharts-scrollable-mask')
            .add();
        scrollingContainer.parentNode.insertBefore(fixedDiv, scrollingContainer);
        ScrollablePlotArea_css(chart.renderTo, { overflow: 'visible' });
        ScrollablePlotArea_addEvent(chart, 'afterShowResetZoom', moveFixedElements);
        ScrollablePlotArea_addEvent(chart, 'afterApplyDrilldown', moveFixedElements);
        ScrollablePlotArea_addEvent(chart, 'afterLayOutTitles', moveFixedElements);
        // On scroll, reset the chart position because it applies to the
        // scrolled container
        let lastHoverPoint;
        ScrollablePlotArea_addEvent(scrollingContainer, 'scroll', () => {
            const { pointer, hoverPoint } = chart;
            if (pointer) {
                delete pointer.chartPosition;
                if (hoverPoint) {
                    lastHoverPoint = hoverPoint;
                }
                pointer.runPointActions(void 0, lastHoverPoint, true);
            }
        });
        // Now move the container inside
        innerContainer.appendChild(chart.container);
    }
    applyFixed() {
        const { chart, fixedRenderer, isDirty, scrollingContainer } = this, { axisOffset, chartWidth, chartHeight, container, plotHeight, plotLeft, plotTop, plotWidth, scrollablePixelsX = 0, scrollablePixelsY = 0 } = chart, chartOptions = chart.options.chart, scrollableOptions = chartOptions.scrollablePlotArea || {}, { scrollPositionX = 0, scrollPositionY = 0 } = scrollableOptions, scrollableWidth = chartWidth + scrollablePixelsX, scrollableHeight = chartHeight + scrollablePixelsY;
        // Set the size of the fixed renderer to the visible width
        fixedRenderer.setSize(chartWidth, chartHeight);
        if (isDirty ?? true) {
            this.isDirty = false;
            this.moveFixedElements();
        }
        // Increase the size of the scrollable renderer and background
        stop(chart.container);
        ScrollablePlotArea_css(container, {
            width: `${scrollableWidth}px`,
            height: `${scrollableHeight}px`
        });
        chart.renderer.boxWrapper.attr({
            width: scrollableWidth,
            height: scrollableHeight,
            viewBox: [0, 0, scrollableWidth, scrollableHeight].join(' ')
        });
        chart.chartBackground?.attr({
            width: scrollableWidth,
            height: scrollableHeight
        });
        ScrollablePlotArea_css(scrollingContainer, {
            width: `${chartWidth}px`,
            height: `${chartHeight}px`
        });
        // Set scroll position the first time (this.isDirty was undefined at
        // the top of this function)
        if (!ScrollablePlotArea_defined(isDirty)) {
            scrollingContainer.scrollLeft = scrollablePixelsX * scrollPositionX;
            scrollingContainer.scrollTop = scrollablePixelsY * scrollPositionY;
        }
        // Mask behind the left and right side
        const maskTop = plotTop - axisOffset[0] - 1, maskLeft = plotLeft - axisOffset[3] - 1, maskBottom = plotTop + plotHeight + axisOffset[2] + 1, maskRight = plotLeft + plotWidth + axisOffset[1] + 1, maskPlotRight = plotLeft + plotWidth - scrollablePixelsX, maskPlotBottom = plotTop + plotHeight - scrollablePixelsY;
        let d = [['M', 0, 0]];
        if (scrollablePixelsX) {
            d = [
                // Left side
                ['M', 0, maskTop],
                ['L', plotLeft - 1, maskTop],
                ['L', plotLeft - 1, maskBottom],
                ['L', 0, maskBottom],
                ['Z'],
                // Right side
                ['M', maskPlotRight, maskTop],
                ['L', chartWidth, maskTop],
                ['L', chartWidth, maskBottom],
                ['L', maskPlotRight, maskBottom],
                ['Z']
            ];
        }
        else if (scrollablePixelsY) {
            d = [
                // Top side
                ['M', maskLeft, 0],
                ['L', maskLeft, plotTop - 1],
                ['L', maskRight, plotTop - 1],
                ['L', maskRight, 0],
                ['Z'],
                // Bottom side
                ['M', maskLeft, maskPlotBottom],
                ['L', maskLeft, chartHeight],
                ['L', maskRight, chartHeight],
                ['L', maskRight, maskPlotBottom],
                ['Z']
            ];
        }
        if (chart.redrawTrigger !== 'adjustHeight') {
            this.mask.attr({ d });
        }
    }
    /**
     * These elements are moved over to the fixed renderer and stay fixed when
     * the user scrolls the chart
     * @private
     */
    moveFixedElements() {
        const { container, inverted, scrollablePixelsX, scrollablePixelsY } = this.chart, fixedRenderer = this.fixedRenderer, fixedSelectors = ScrollablePlotArea.fixedSelectors;
        let axisClass;
        if (scrollablePixelsX && !inverted) {
            axisClass = '.highcharts-yaxis';
        }
        else if (scrollablePixelsX && inverted) {
            axisClass = '.highcharts-xaxis';
        }
        else if (scrollablePixelsY && !inverted) {
            axisClass = '.highcharts-xaxis';
        }
        else if (scrollablePixelsY && inverted) {
            axisClass = '.highcharts-yaxis';
        }
        if (axisClass && !(this.chart.hasParallelCoordinates &&
            axisClass === '.highcharts-yaxis')) {
            // Add if not added yet
            for (const className of [
                `${axisClass}:not(.highcharts-radial-axis)`,
                `${axisClass}-labels:not(.highcharts-radial-axis-labels)`
            ]) {
                ScrollablePlotArea_pushUnique(fixedSelectors, className);
            }
        }
        else {
            // Clear all axis related selectors
            for (const classBase of [
                '.highcharts-xaxis',
                '.highcharts-yaxis'
            ]) {
                for (const className of [
                    `${classBase}:not(.highcharts-radial-axis)`,
                    `${classBase}-labels:not(.highcharts-radial-axis-labels)`
                ]) {
                    erase(fixedSelectors, className);
                }
            }
        }
        for (const className of fixedSelectors) {
            [].forEach.call(container.querySelectorAll(className), (elem) => {
                (elem.namespaceURI === fixedRenderer.SVG_NS ?
                    fixedRenderer.box :
                    fixedRenderer.box.parentNode).appendChild(elem);
                elem.style.pointerEvents = 'auto';
            });
        }
    }
}
ScrollablePlotArea.fixedSelectors = [
    '.highcharts-breadcrumbs-group',
    '.highcharts-contextbutton',
    '.highcharts-caption',
    '.highcharts-credits',
    '.highcharts-drillup-button',
    '.highcharts-legend',
    '.highcharts-legend-checkbox',
    '.highcharts-navigator-series',
    '.highcharts-navigator-xaxis',
    '.highcharts-navigator-yaxis',
    '.highcharts-navigator',
    '.highcharts-range-selector-group',
    '.highcharts-reset-zoom',
    '.highcharts-scrollbar',
    '.highcharts-subtitle',
    '.highcharts-title'
];
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Extensions_ScrollablePlotArea = (ScrollablePlotArea);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Options for a scrollable plot area. This feature provides a minimum size for
 * the plot area of the chart. If the size gets smaller than this, typically
 * on mobile devices, a native browser scrollbar is presented. This scrollbar
 * provides smooth scrolling for the contents of the plot area, whereas the
 * title, legend and unaffected axes are fixed.
 *
 * Since v7.1.2, a scrollable plot area can be defined for either horizontal or
 * vertical scrolling, depending on whether the `minWidth` or `minHeight`
 * option is set.
 *
 * @sample highcharts/chart/scrollable-plotarea
 *         Scrollable plot area
 * @sample highcharts/chart/scrollable-plotarea-vertical
 *         Vertically scrollable plot area
 * @sample {gantt} gantt/chart/scrollable-plotarea-vertical
 *         Gantt chart with vertically scrollable plot area
 *
 * @since     6.1.0
 * @product   highcharts gantt
 * @apioption chart.scrollablePlotArea
 */
/**
 * The minimum height for the plot area. If it gets smaller than this, the plot
 * area will become scrollable.
 *
 * @type      {number}
 * @since     7.1.2
 * @apioption chart.scrollablePlotArea.minHeight
 */
/**
 * The minimum width for the plot area. If it gets smaller than this, the plot
 * area will become scrollable.
 *
 * @type      {number}
 * @since     6.1.0
 * @apioption chart.scrollablePlotArea.minWidth
 */
/**
 * The initial scrolling position of the scrollable plot area. Ranges from 0 to
 * 1, where 0 aligns the plot area to the left and 1 aligns it to the right.
 * Typically we would use 1 if the chart has right aligned Y axes.
 *
 * @type      {number}
 * @since     6.1.0
 * @apioption chart.scrollablePlotArea.scrollPositionX
 */
/**
 * The initial scrolling position of the scrollable plot area. Ranges from 0 to
 * 1, where 0 aligns the plot area to the top and 1 aligns it to the bottom.
 *
 * @type      {number}
 * @since     7.1.2
 * @apioption chart.scrollablePlotArea.scrollPositionY
 */
/**
 * The opacity of mask applied on one of the sides of the plot
 * area.
 *
 * @sample {highcharts} highcharts/chart/scrollable-plotarea-opacity
 *         Disabled opacity for the mask
 *
 * @type        {number}
 * @default     0.85
 * @since       7.1.1
 * @apioption   chart.scrollablePlotArea.opacity
 */
(''); // Keep doclets above in transpiled file

;// external ["./highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// external ["./highcharts.src.js","default","StackItem"]
const external_highcharts_src_js_default_StackItem_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].StackItem;
var external_highcharts_src_js_default_StackItem_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_StackItem_namespaceObject);
;// ./code/es-modules/Core/Axis/Stacking/StackingAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { getDeferredAnimation } = (external_highcharts_src_js_default_default());

const { series: { prototype: seriesProto } } = (external_highcharts_src_js_default_SeriesRegistry_default());


const { addEvent: StackingAxis_addEvent, correctFloat, defined: StackingAxis_defined, destroyObjectProperties, fireEvent, isNumber: StackingAxis_isNumber, objectEach, pick: StackingAxis_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Generate stacks for each series and calculate stacks total values
 *
 * @private
 * @function Highcharts.Chart#getStacks
 */
function chartGetStacks() {
    const chart = this, inverted = chart.inverted;
    // Reset stacks for each axis
    chart.axes.forEach((axis) => {
        if (axis.stacking?.stacks && axis.hasVisibleSeries) {
            axis.stacking.oldStacks = axis.stacking.stacks;
        }
    });
    chart.series.forEach((series) => {
        const xAxisOptions = series.xAxis?.options || {};
        if (series.options.stacking && series.reserveSpace()) {
            series.stackKey = [
                series.type,
                StackingAxis_pick(series.options.stack, ''),
                inverted ? xAxisOptions.top : xAxisOptions.left,
                inverted ? xAxisOptions.height : xAxisOptions.width
            ].join(',');
        }
    });
}
/**
 * @private
 */
function onAxisDestroy() {
    const stacking = this.stacking;
    if (stacking) {
        const stacks = stacking.stacks;
        // Destroy each stack total
        objectEach(stacks, (stack, stackKey) => {
            destroyObjectProperties(stack);
            delete stacks[stackKey];
        });
        stacking.stackTotalGroup?.destroy();
    }
}
/**
 * @private
 */
function onAxisInit() {
    if (!this.stacking) {
        this.stacking = new AxisAdditions(this);
    }
}
/**
 * Get stack indicator, according to it's x-value, to determine points with the
 * same x-value
 *
 * @private
 * @function Highcharts.Series#getStackIndicator
 */
function seriesGetStackIndicator(stackIndicator, x, index, key) {
    // Update stack indicator, when:
    // first point in a stack || x changed || stack type (negative vs positive)
    // changed:
    if (!StackingAxis_defined(stackIndicator) ||
        stackIndicator.x !== x ||
        (key && stackIndicator.stackKey !== key)) {
        stackIndicator = {
            x: x,
            index: 0,
            key,
            stackKey: key
        };
    }
    else {
        stackIndicator.index++;
    }
    stackIndicator.key = [index, x, stackIndicator.index].join(',');
    return stackIndicator;
}
/**
 * Iterate over all stacks and compute the absolute values to percent
 *
 * @private
 * @function Highcharts.Series#modifyStacks
 */
function seriesModifyStacks() {
    const series = this, yAxis = series.yAxis, stackKey = series.stackKey || '', stacks = yAxis.stacking.stacks, processedXData = series.getColumn('x', true), stacking = series.options.stacking, stacker = series[stacking + 'Stacker'];
    let stackIndicator;
    if (stacker) { // Modifier function exists (Series.percentStacker etc.)
        [stackKey, '-' + stackKey].forEach((key) => {
            let i = processedXData.length, x, stackItem, pointExtremes;
            while (i--) {
                x = processedXData[i];
                stackIndicator = series.getStackIndicator(stackIndicator, x, series.index, key);
                stackItem = stacks[key]?.[x];
                pointExtremes = stackItem?.points[stackIndicator.key || ''];
                if (pointExtremes) {
                    stacker.call(series, pointExtremes, stackItem, i);
                }
            }
        });
    }
}
/**
 * Modifier function for percent stacks. Blows up the stack to 100%.
 *
 * @private
 * @function Highcharts.Series#percentStacker
 */
function seriesPercentStacker(pointExtremes, stack, i) {
    const totalFactor = stack.total ? 100 / stack.total : 0;
    // Y bottom value
    pointExtremes[0] = correctFloat(pointExtremes[0] * totalFactor);
    // Y value
    pointExtremes[1] = correctFloat(pointExtremes[1] * totalFactor);
    this.stackedYData[i] = pointExtremes[1];
}
/**
 * Set grouped points in a stack-like object. When `centerInCategory` is true,
 * and `stacking` is not enabled, we need a pseudo (horizontal) stack in order
 * to handle grouping of points within the same category.
 *
 * @private
 * @function Highcharts.Series#setGroupedPoints
 * @return {void}
 */
function seriesSetGroupedPoints(axis) {
    // Only series types supporting centerInCategory need to do this. That also
    // applies to resetting (#20221).
    if (this.is('column') || this.is('columnrange')) {
        if (this.options.centerInCategory &&
            // With only one series, we don't need to consider centerInCategory
            this.chart.series.length > 1) {
            seriesProto.setStackedPoints.call(this, axis, 'group');
            // After updating, if we now have proper stacks, we must delete the
            // group pseudo stacks (#14980)
        }
        else {
            axis.stacking.resetStacks();
        }
    }
}
/**
 * Adds series' points value to corresponding stack
 *
 * @private
 * @function Highcharts.Series#setStackedPoints
 */
function seriesSetStackedPoints(axis, stackingParam) {
    const type = stackingParam || this.options.stacking;
    if (!type ||
        !this.reserveSpace() ||
        // Group stacks (centerInCategory) belong on the x-axis, other stacks on
        // the y-axis.
        ({ group: 'xAxis' }[type] || 'yAxis') !== axis.coll) {
        return;
    }
    const series = this, xData = series.getColumn('x', true), yData = series.getColumn(series.pointValKey || 'y', true), stackedYData = [], yDataLength = yData.length, seriesOptions = series.options, threshold = seriesOptions.threshold || 0, stackThreshold = seriesOptions.startFromThreshold ? threshold : 0, stackOption = seriesOptions.stack, stackKey = stackingParam ?
        `${series.type},${type}` : (series.stackKey || ''), negKey = '-' + stackKey, negStacks = series.negStacks, stacking = axis.stacking, stacks = stacking.stacks, oldStacks = stacking.oldStacks;
    let stackIndicator, isNegative, stack, other, key, pointKey, i;
    stacking.stacksTouched += 1;
    // Loop over the non-null y values and read them into a local array
    for (i = 0; i < yDataLength; i++) {
        const x = xData[i] || 0, y = yData[i], yNumber = StackingAxis_isNumber(y) && y || 0;
        stackIndicator = series.getStackIndicator(stackIndicator, x, series.index);
        pointKey = stackIndicator.key || '';
        // Read stacked values into a stack based on the x value,
        // the sign of y and the stack key. Stacking is also handled for null
        // values (#739)
        isNegative = negStacks && yNumber < (stackThreshold ? 0 : threshold);
        key = isNegative ? negKey : stackKey;
        // Create empty object for this stack if it doesn't exist yet
        if (!stacks[key]) {
            stacks[key] = {};
        }
        // Initialize StackItem for this x
        if (!stacks[key][x]) {
            if (oldStacks[key]?.[x]) {
                stacks[key][x] = oldStacks[key][x];
                stacks[key][x].total = null;
            }
            else {
                stacks[key][x] = new (external_highcharts_src_js_default_StackItem_default())(axis, axis.options.stackLabels, !!isNegative, x, stackOption);
            }
        }
        // If the StackItem doesn't exist, create it first
        stack = stacks[key][x];
        if (y !== null) {
            stack.points[pointKey] = stack.points[series.index] = [
                StackingAxis_pick(stack.cumulative, stackThreshold)
            ];
            // Record the base of the stack
            if (!StackingAxis_defined(stack.cumulative)) {
                stack.base = pointKey;
            }
            stack.touched = stacking.stacksTouched;
            // In area charts, if there are multiple points on the same X value,
            // let the area fill the full span of those points
            if (stackIndicator.index > 0 && series.singleStacks === false) {
                stack.points[pointKey][0] = stack.points[series.index + ',' + x + ',0'][0];
            }
            // When updating to null, reset the point stack (#7493)
        }
        else {
            delete stack.points[pointKey];
            delete stack.points[series.index];
        }
        // Add value to the stack total
        let total = stack.total || 0;
        if (type === 'percent') {
            // Percent stacked column, totals are the same for the positive and
            // negative stacks
            other = isNegative ? stackKey : negKey;
            if (negStacks && stacks[other]?.[x]) {
                other = stacks[other][x];
                total = other.total = Math.max(other.total || 0, total) +
                    Math.abs(yNumber);
                // Percent stacked areas
            }
            else {
                total = correctFloat(total + Math.abs(yNumber));
            }
        }
        else if (type === 'group') {
            // In this stack, the total is the number of valid points
            if (StackingAxis_isNumber(y)) {
                total++;
            }
        }
        else {
            total = correctFloat(total + yNumber);
        }
        if (type === 'group') {
            // This point's index within the stack, pushed to stack.points[1]
            stack.cumulative = (total || 1) - 1;
        }
        else {
            stack.cumulative = correctFloat(StackingAxis_pick(stack.cumulative, stackThreshold) + yNumber);
        }
        stack.total = total;
        if (y !== null) {
            stack.points[pointKey].push(stack.cumulative);
            stackedYData[i] = stack.cumulative;
            stack.hasValidPoints = true;
        }
    }
    if (type === 'percent') {
        stacking.usePercentage = true;
    }
    if (type !== 'group') {
        this.stackedYData = stackedYData; // To be used in getExtremes
    }
    // Reset old stacks
    stacking.oldStacks = {};
}
/* *
 *
 *  Classes
 *
 * */
/**
 * Adds stacking support to axes.
 * @private
 * @class
 */
class AxisAdditions {
    /* *
     *
     *  Constructors
     *
     * */
    constructor(axis) {
        this.oldStacks = {};
        this.stacks = {};
        this.stacksTouched = 0;
        this.axis = axis;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Build the stacks from top down
     * @private
     */
    buildStacks() {
        const stacking = this, axis = stacking.axis, axisSeries = axis.series, isXAxis = axis.coll === 'xAxis', reversedStacks = axis.options.reversedStacks, len = axisSeries.length;
        let actualSeries, i;
        this.resetStacks();
        stacking.usePercentage = false;
        i = len;
        while (i--) {
            actualSeries = axisSeries[reversedStacks ? i : len - i - 1];
            if (isXAxis) {
                actualSeries.setGroupedPoints(axis);
            }
            actualSeries.setStackedPoints(axis);
        }
        // Loop up again to compute percent and stream stack
        if (!isXAxis) {
            for (i = 0; i < len; i++) {
                axisSeries[i].modifyStacks();
            }
        }
        fireEvent(axis, 'afterBuildStacks');
    }
    /**
     * @private
     */
    cleanStacks() {
        if (this.oldStacks) {
            this.stacks = this.oldStacks;
            // Reset stacks
            objectEach(this.stacks, (type) => {
                objectEach(type, (stack) => {
                    stack.cumulative = stack.total;
                });
            });
        }
    }
    /**
     * Set all the stacks to initial states and destroy unused ones.
     * @private
     */
    resetStacks() {
        objectEach(this.stacks, (type) => {
            objectEach(type, (stack, x) => {
                // Clean up memory after point deletion (#1044, #4320)
                if (StackingAxis_isNumber(stack.touched) &&
                    stack.touched < this.stacksTouched) {
                    stack.destroy();
                    delete type[x];
                    // Reset stacks
                }
                else {
                    stack.total = null;
                    stack.cumulative = null;
                }
            });
        });
    }
    /**
     * @private
     */
    renderStackTotals() {
        const stacking = this, axis = stacking.axis, chart = axis.chart, renderer = chart.renderer, stacks = stacking.stacks, stackLabelsAnim = axis.options.stackLabels?.animation, animationConfig = getDeferredAnimation(chart, stackLabelsAnim || false), stackTotalGroup = stacking.stackTotalGroup = (stacking.stackTotalGroup ||
            renderer
                .g('stack-labels')
                .attr({
                zIndex: 6,
                opacity: 0
            })
                .add());
        // The plotLeft/Top will change when y axis gets wider so we need to
        // translate the stackTotalGroup at every render call. See bug #506
        // and #516
        stackTotalGroup.translate(chart.plotLeft, chart.plotTop);
        // Render each stack total
        objectEach(stacks, (type) => {
            objectEach(type, (stack) => {
                stack.render(stackTotalGroup);
            });
        });
        stackTotalGroup.animate({
            opacity: 1
        }, animationConfig);
    }
}
/* *
 *
 *  Composition
 *
 * */
var StackingAxis;
(function (StackingAxis) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends axis with stacking support.
     * @private
     */
    function compose(AxisClass, ChartClass, SeriesClass) {
        const chartProto = ChartClass.prototype, seriesProto = SeriesClass.prototype;
        if (!chartProto.getStacks) {
            StackingAxis_addEvent(AxisClass, 'init', onAxisInit);
            StackingAxis_addEvent(AxisClass, 'destroy', onAxisDestroy);
            chartProto.getStacks = chartGetStacks;
            seriesProto.getStackIndicator = seriesGetStackIndicator;
            seriesProto.modifyStacks = seriesModifyStacks;
            seriesProto.percentStacker = seriesPercentStacker;
            seriesProto.setGroupedPoints = seriesSetGroupedPoints;
            seriesProto.setStackedPoints = seriesSetStackedPoints;
        }
    }
    StackingAxis.compose = compose;
})(StackingAxis || (StackingAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Stacking_StackingAxis = (StackingAxis);

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

const { fireEvent: DataTableCore_fireEvent, objectEach: DataTableCore_objectEach, uniqueKey } = (external_highcharts_src_js_default_default());
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
        this.id = (options.id || uniqueKey());
        this.rowCount = 0;
        this.versionTag = uniqueKey();
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
        this.versionTag = uniqueKey();
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
            this.versionTag = uniqueKey();
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
            this.versionTag = uniqueKey();
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

;// external ["./highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// external ["./highcharts.src.js","default","Series","types","line"]

;// external ["./highcharts.src.js","default","Series","types","area"]

;// external ["./highcharts.src.js","default","Series","types","spline"]

;// external ["./highcharts.src.js","default","Series","types","areaspline"]

;// external ["./highcharts.src.js","default","Series","types","column"]

;// external ["./highcharts.src.js","default","DataLabel"]
const external_highcharts_src_js_default_DataLabel_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].DataLabel;
var external_highcharts_src_js_default_DataLabel_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_DataLabel_namespaceObject);
;// ./code/es-modules/Series/Column/ColumnDataLabel.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { composed: ColumnDataLabel_composed } = (external_highcharts_src_js_default_default());

const { series: Series } = (external_highcharts_src_js_default_SeriesRegistry_default());

const { merge: ColumnDataLabel_merge, pushUnique: ColumnDataLabel_pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var ColumnDataLabel;
(function (ColumnDataLabel) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Override the basic data label alignment by adjusting for the position of
     * the column.
     * @private
     */
    function alignDataLabel(point, dataLabel, dlOptions, alignTo, isNew) {
        const { chart, options } = this, inverted = chart.inverted, xLen = this.xAxis?.len || chart.plotSizeX || 0, yLen = this.yAxis?.len || chart.plotSizeY || 0, 
        // Data label box for alignment
        dlBox = point.dlBox || point.shapeArgs, below = point.below ?? // Range series
            (point.plotY || 0) > (this.translatedThreshold ?? yLen), 
        // Draw it inside the box?
        inside = dlOptions.inside ?? !!options.stacking;
        // Align to the column itself, or the top of it
        if (dlBox) { // Area range uses this method but not alignTo
            alignTo = ColumnDataLabel_merge(dlBox);
            // Check for specific overflow and crop conditions (#13240, #22617)
            if (dlOptions.overflow !== 'allow' ||
                dlOptions.crop !== false ||
                options.clip !== false) {
                if (alignTo.y < 0) {
                    alignTo.height += alignTo.y;
                    alignTo.y = 0;
                }
                // If parts of the box overshoots outside the plot area, modify
                // the box to center the label inside
                const overshoot = alignTo.y + alignTo.height - yLen;
                if (overshoot > 0 && overshoot < alignTo.height - 1) {
                    alignTo.height -= overshoot;
                }
            }
            if (inverted) {
                alignTo = {
                    x: yLen - alignTo.y - alignTo.height,
                    y: xLen - alignTo.x - alignTo.width,
                    width: alignTo.height,
                    height: alignTo.width
                };
            }
            // Compute the alignment box
            if (!inside) {
                if (inverted) {
                    alignTo.x += below ? 0 : alignTo.width;
                    alignTo.width = 0;
                }
                else {
                    alignTo.y += below ? alignTo.height : 0;
                    alignTo.height = 0;
                }
            }
        }
        // When alignment is undefined (typically columns and bars), display the
        // individual point below or above the point depending on the threshold
        dlOptions.align ?? (dlOptions.align = !inverted || inside ?
            'center' : below ? 'right' : 'left');
        dlOptions.verticalAlign ?? (dlOptions.verticalAlign = inverted || inside ?
            'middle' : below ? 'top' : 'bottom');
        // Call the parent method
        Series.prototype.alignDataLabel.call(this, point, dataLabel, dlOptions, alignTo, isNew);
        // If label was justified and we have contrast, set it:
        if (dlOptions.inside && point.contrastColor) {
            dataLabel.css({
                color: point.contrastColor
            });
        }
    }
    /** @private */
    function compose(ColumnSeriesClass) {
        external_highcharts_src_js_default_DataLabel_default().compose(Series);
        if (ColumnDataLabel_pushUnique(ColumnDataLabel_composed, 'ColumnDataLabel')) {
            ColumnSeriesClass.prototype.alignDataLabel = alignDataLabel;
        }
    }
    ColumnDataLabel.compose = compose;
})(ColumnDataLabel || (ColumnDataLabel = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Column_ColumnDataLabel = (ColumnDataLabel);

;// external ["./highcharts.src.js","default","Series","types","bar"]

;// external ["./highcharts.src.js","default","Series","types","scatter"]

;// external ["./highcharts.src.js","default","Series","types","pie"]

;// ./code/es-modules/Series/Pie/PieDataLabel.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { composed: PieDataLabel_composed, noop } = (external_highcharts_src_js_default_default());

const { distribute } = (external_highcharts_src_js_default_default());

const { series: PieDataLabel_Series } = (external_highcharts_src_js_default_SeriesRegistry_default());

const { arrayMax, clamp, defined: PieDataLabel_defined, isNumber: PieDataLabel_isNumber, pick: PieDataLabel_pick, pushUnique: PieDataLabel_pushUnique, relativeLength } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var PieDataLabel_ColumnDataLabel;
(function (ColumnDataLabel) {
    /* *
     *
     *  Constants
     *
     * */
    const dataLabelPositioners = {
        // Based on the value computed in Highcharts' distribute algorithm.
        radialDistributionY: function (point, dataLabel) {
            return (dataLabel.dataLabelPosition?.top || 0) +
                point.distributeBox.pos;
        },
        // Get the x - use the natural x position for labels near the top and
        // bottom, to prevent the top and botton slice connectors from touching
        // each other on either side. Based on the value computed in Highcharts'
        // distribute algorithm.
        radialDistributionX: function (series, point, y, naturalY, dataLabel) {
            const pos = dataLabel.dataLabelPosition;
            return series.getX(y < (pos?.top || 0) + 2 || y > (pos?.bottom || 0) - 2 ?
                naturalY :
                y, point.half, point, dataLabel);
        },
        // The dataLabels.distance determines the x position of the label
        justify: function (point, dataLabel, radius, seriesCenter) {
            return seriesCenter[0] + (point.half ? -1 : 1) *
                (radius + (dataLabel.dataLabelPosition?.distance || 0));
        },
        // Left edges of the left-half labels touch the left edge of the plot
        // area. Right edges of the right-half labels touch the right edge of
        // the plot area.
        alignToPlotEdges: function (dataLabel, half, plotWidth, plotLeft) {
            const dataLabelWidth = dataLabel.getBBox().width;
            return half ? dataLabelWidth + plotLeft :
                plotWidth - dataLabelWidth - plotLeft;
        },
        // Connectors of each side end in the same x position. Labels are
        // aligned to them. Left edge of the widest left-half label touches the
        // left edge of the plot area. Right edge of the widest right-half label
        // touches the right edge of the plot area.
        alignToConnectors: function (points, half, plotWidth, plotLeft) {
            let maxDataLabelWidth = 0, dataLabelWidth;
            // Find widest data label
            points.forEach(function (point) {
                dataLabelWidth = point.dataLabel.getBBox().width;
                if (dataLabelWidth > maxDataLabelWidth) {
                    maxDataLabelWidth = dataLabelWidth;
                }
            });
            return half ? maxDataLabelWidth + plotLeft :
                plotWidth - maxDataLabelWidth - plotLeft;
        }
    };
    /* *
     *
     *  Functions
     *
     * */
    /** @private */
    function compose(PieSeriesClass) {
        external_highcharts_src_js_default_DataLabel_default().compose(PieDataLabel_Series);
        if (PieDataLabel_pushUnique(PieDataLabel_composed, 'PieDataLabel')) {
            const pieProto = PieSeriesClass.prototype;
            pieProto.dataLabelPositioners = dataLabelPositioners;
            pieProto.alignDataLabel = noop;
            pieProto.drawDataLabels = drawDataLabels;
            pieProto.getDataLabelPosition = getDataLabelPosition;
            pieProto.placeDataLabels = placeDataLabels;
            pieProto.verifyDataLabelOverflow = verifyDataLabelOverflow;
        }
    }
    ColumnDataLabel.compose = compose;
    /** @private */
    function getDataLabelPosition(point, distance) {
        const halfPI = Math.PI / 2, { start = 0, end = 0 } = point.shapeArgs || {};
        let angle = point.angle || 0;
        // If a large slice is crossing the lowest point, prefer rendering it 45
        // degrees out at either lower right or lower left. That's where there's
        // most likely to be space available and avoid text being truncated
        // (#22100). Technically this logic should also apply to the top point,
        // but that is more of an edge case since the default start angle is at
        // the top.
        if (distance > 0 &&
            // Crossing the bottom
            start < halfPI && end > halfPI &&
            // Angle within the bottom quadrant
            angle > halfPI / 2 && angle < halfPI * 1.5) {
            angle = angle <= halfPI ?
                Math.max(halfPI / 2, (start + halfPI) / 2) :
                Math.min(halfPI * 1.5, (halfPI + end) / 2);
        }
        const { center, options } = this, r = center[2] / 2, cosAngle = Math.cos(angle), sinAngle = Math.sin(angle), x = center[0] + cosAngle * r, y = center[1] + sinAngle * r, finalConnectorOffset = Math.min((options.slicedOffset || 0) + (options.borderWidth || 0), distance / 5); // #1678
        return {
            natural: {
                // Initial position of the data label - it's utilized for
                // finding the final position for the label
                x: x + cosAngle * distance,
                y: y + sinAngle * distance
            },
            computed: {
            // Used for generating connector path - initialized later in
            // drawDataLabels function x: undefined, y: undefined
            },
            // Left - pie on the left side of the data label
            // Right - pie on the right side of the data label
            // Center - data label overlaps the pie
            alignment: distance < 0 ? 'center' : point.half ? 'right' : 'left',
            connectorPosition: {
                angle,
                breakAt: {
                    x: x + cosAngle * finalConnectorOffset,
                    y: y + sinAngle * finalConnectorOffset
                },
                touchingSliceAt: {
                    x,
                    y
                }
            },
            distance
        };
    }
    /**
     * Override the base drawDataLabels method by pie specific functionality
     * @private
     */
    function drawDataLabels() {
        const series = this, points = series.points, chart = series.chart, plotWidth = chart.plotWidth, plotHeight = chart.plotHeight, plotLeft = chart.plotLeft, maxWidth = Math.round(chart.chartWidth / 3), seriesCenter = series.center, radius = seriesCenter[2] / 2, centerY = seriesCenter[1], halves = [
            [], // Right
            [] // Left
        ], overflow = [0, 0, 0, 0], // Top, right, bottom, left
        dataLabelPositioners = series.dataLabelPositioners;
        let connector, dataLabelWidth, labelHeight, maxLabelDistance = 0;
        // Get out if not enabled
        if (!series.visible || !series.hasDataLabels?.()) {
            return;
        }
        // Reset all labels that have been shortened
        points.forEach((point) => {
            (point.dataLabels || []).forEach((dataLabel) => {
                if (dataLabel.shortened) {
                    dataLabel
                        .attr({
                        width: 'auto'
                    }).css({
                        width: 'auto',
                        textOverflow: 'clip'
                    });
                    dataLabel.shortened = false;
                }
            });
        });
        // Run parent method
        PieDataLabel_Series.prototype.drawDataLabels.apply(series);
        points.forEach((point) => {
            (point.dataLabels || []).forEach((dataLabel, i) => {
                const r = seriesCenter[2] / 2, dataLabelOptions = dataLabel.options, distance = relativeLength(dataLabelOptions?.distance || 0, r);
                // Arrange points for collision detection
                if (i === 0) {
                    halves[point.half].push(point);
                }
                // Avoid long labels squeezing the pie size too far down
                if (!PieDataLabel_defined(dataLabelOptions?.style?.width)) {
                    if (dataLabel.getBBox().width > maxWidth) {
                        dataLabel.css({
                            // Use a fraction of the maxWidth to avoid wrapping
                            // close to the end of the string.
                            width: Math.round(maxWidth * 0.7) + 'px'
                        });
                        dataLabel.shortened = true;
                    }
                }
                dataLabel.dataLabelPosition = this.getDataLabelPosition(point, distance);
                maxLabelDistance = Math.max(maxLabelDistance, distance);
            });
        });
        /* Loop over the points in each half, starting from the top and bottom
         * of the pie to detect overlapping labels.
         */
        halves.forEach((points, halfIdx) => {
            const length = points.length, positions = [];
            let top, bottom, size = 0, distributionLength;
            if (!length) {
                return;
            }
            // Sort by angle
            series.sortByAngle(points, halfIdx - 0.5);
            // Only do anti-collision when we have dataLabels outside the pie
            // and have connectors. (#856)
            if (maxLabelDistance > 0) {
                top = Math.max(0, centerY - radius - maxLabelDistance);
                bottom = Math.min(centerY + radius + maxLabelDistance, chart.plotHeight);
                points.forEach((point) => {
                    // Check if specific points' label is outside the pie
                    (point.dataLabels || []).forEach((dataLabel) => {
                        const labelPosition = dataLabel.dataLabelPosition;
                        if (labelPosition &&
                            labelPosition.distance > 0) {
                            // The point.top depends on point.labelDistance
                            // value. Used for calculation of y value in getX
                            // method
                            labelPosition.top = Math.max(0, centerY - radius - labelPosition.distance);
                            labelPosition.bottom = Math.min(centerY + radius + labelPosition.distance, chart.plotHeight);
                            size = dataLabel.getBBox().height || 21;
                            dataLabel.lineHeight = chart.renderer.fontMetrics(dataLabel.text || dataLabel).h + 2 * dataLabel.padding;
                            point.distributeBox = {
                                target: ((dataLabel.dataLabelPosition
                                    ?.natural.y || 0) -
                                    labelPosition.top +
                                    dataLabel.lineHeight / 2),
                                size,
                                rank: point.y
                            };
                            positions.push(point.distributeBox);
                        }
                    });
                });
                distributionLength = bottom + size - top;
                distribute(positions, distributionLength, distributionLength / 5);
                // Uncomment this to visualize the boxes
                /*
                points.forEach((point): void => {
                    const box = point.distributeBox;
                    point.dlBox?.destroy();
                    if (box?.pos) {
                        point.dlBox = chart.renderer.rect(
                            chart.plotLeft + this.center[0] + (
                                halfIdx ?
                                    -this.center[2] / 2 - 100 :
                                    this.center[2] / 2
                            ),
                            chart.plotTop + box.pos,
                            100,
                            box.size
                        )
                            .attr({
                                stroke: 'silver',
                                'stroke-width': 1
                            })
                            .add();
                    }
                });
                // */
            }
            // Now the used slots are sorted, fill them up sequentially
            points.forEach((point) => {
                (point.dataLabels || []).forEach((dataLabel) => {
                    const dataLabelOptions = (dataLabel.options || {}), distributeBox = point.distributeBox, labelPosition = dataLabel.dataLabelPosition, naturalY = labelPosition?.natural.y || 0, connectorPadding = dataLabelOptions
                        .connectorPadding || 0, lineHeight = dataLabel.lineHeight || 21, bBox = dataLabel.getBBox(), topOffset = (lineHeight - bBox.height) / 2;
                    let x = 0, y = naturalY, visibility = 'inherit';
                    if (labelPosition) {
                        if (positions &&
                            PieDataLabel_defined(distributeBox) &&
                            labelPosition.distance > 0) {
                            if (typeof distributeBox.pos === 'undefined') {
                                visibility = 'hidden';
                            }
                            else {
                                labelHeight = distributeBox.size;
                                // Find label's y position
                                y = dataLabelPositioners
                                    .radialDistributionY(point, dataLabel);
                            }
                        }
                        // Find label's x position. The justify option is
                        // undocumented in the API - preserve support for it
                        if (dataLabelOptions.justify) {
                            x = dataLabelPositioners.justify(point, dataLabel, radius, seriesCenter);
                        }
                        else {
                            switch (dataLabelOptions.alignTo) {
                                case 'connectors':
                                    x = dataLabelPositioners.alignToConnectors(points, halfIdx, plotWidth, plotLeft);
                                    break;
                                case 'plotEdges':
                                    x = dataLabelPositioners.alignToPlotEdges(dataLabel, halfIdx, plotWidth, plotLeft);
                                    break;
                                default:
                                    x = dataLabelPositioners.radialDistributionX(series, point, y - topOffset, naturalY, dataLabel);
                            }
                        }
                        // Record the placement and visibility
                        labelPosition.attribs = {
                            visibility,
                            align: labelPosition.alignment
                        };
                        labelPosition.posAttribs = {
                            x: x +
                                (dataLabelOptions.x || 0) + // (#12985)
                                ({
                                    left: connectorPadding,
                                    right: -connectorPadding
                                }[labelPosition.alignment] || 0),
                            y: y +
                                (dataLabelOptions.y || 0) - // (#12985)
                                // Vertically center
                                lineHeight / 2
                        };
                        labelPosition.computed.x = x;
                        labelPosition.computed.y = y - topOffset;
                        // Detect overflowing data labels
                        if (PieDataLabel_pick(dataLabelOptions.crop, true)) {
                            dataLabelWidth = dataLabel.getBBox().width;
                            let sideOverflow;
                            // Overflow left
                            if (x - dataLabelWidth < connectorPadding &&
                                halfIdx === 1 // Left half
                            ) {
                                sideOverflow = Math.round(dataLabelWidth - x + connectorPadding);
                                overflow[3] = Math.max(sideOverflow, overflow[3]);
                                // Overflow right
                            }
                            else if (x + dataLabelWidth >
                                plotWidth - connectorPadding &&
                                halfIdx === 0 // Right half
                            ) {
                                sideOverflow = Math.round(x +
                                    dataLabelWidth -
                                    plotWidth +
                                    connectorPadding);
                                overflow[1] = Math.max(sideOverflow, overflow[1]);
                            }
                            // Overflow top
                            if (y - labelHeight / 2 < 0) {
                                overflow[0] = Math.max(Math.round(-y + labelHeight / 2), overflow[0]);
                                // Overflow left
                            }
                            else if (y + labelHeight / 2 > plotHeight) {
                                overflow[2] = Math.max(Math.round(y + labelHeight / 2 - plotHeight), overflow[2]);
                            }
                            labelPosition.sideOverflow = sideOverflow;
                        }
                    }
                }); // For each data label of the point
            }); // For each point
        }); // For each half
        // Do not apply the final placement and draw the connectors until we
        // have verified that labels are not spilling over.
        if (arrayMax(overflow) === 0 ||
            this.verifyDataLabelOverflow(overflow)) {
            // Place the labels in the final position
            this.placeDataLabels();
            this.points.forEach((point) => {
                point.dataLabels?.forEach((dataLabel, i) => {
                    // #8864: every connector can have individual options
                    const { connectorColor, connectorWidth = 1 } = (dataLabel.options || {}), labelPosition = dataLabel.dataLabelPosition;
                    // Draw the connector
                    if (PieDataLabel_isNumber(connectorWidth)) {
                        let isNew;
                        connector = dataLabel.connector;
                        if (labelPosition && labelPosition.distance > 0) {
                            isNew = !connector;
                            if (!connector) {
                                dataLabel.connector = connector = chart.renderer
                                    .path()
                                    .addClass('highcharts-data-label-connector ' +
                                    ' highcharts-color-' +
                                    point.colorIndex +
                                    (point.className ?
                                        ' ' + point.className :
                                        ''))
                                    .add(series.dataLabelsGroups?.[i]);
                            }
                            if (!chart.styledMode) {
                                connector.attr({
                                    'stroke-width': connectorWidth,
                                    'stroke': (connectorColor ||
                                        point.color ||
                                        "#666666" /* Palette.neutralColor60 */)
                                });
                            }
                            connector[isNew ? 'attr' : 'animate']({
                                d: point.getConnectorPath(dataLabel)
                            });
                            connector.attr({
                                visibility: labelPosition.attribs?.visibility
                            });
                        }
                        else if (connector) {
                            dataLabel.connector = connector.destroy();
                        }
                    }
                });
            });
        }
    }
    /**
     * Perform the final placement of the data labels after we have verified
     * that they fall within the plot area.
     * @private
     */
    function placeDataLabels() {
        this.points.forEach((point) => {
            (point.dataLabels || []).forEach((dataLabel) => {
                const labelPosition = dataLabel.dataLabelPosition;
                if (labelPosition) {
                    // Shorten data labels with ellipsis if they still overflow
                    // after the pie has reached minSize (#223).
                    if (labelPosition.sideOverflow) {
                        dataLabel.css({
                            width: (Math.max(dataLabel.getBBox().width -
                                labelPosition.sideOverflow, 0)) + 'px',
                            textOverflow: (dataLabel.options?.style?.textOverflow ||
                                'ellipsis')
                        });
                        dataLabel.shortened = true;
                    }
                    dataLabel.attr(labelPosition.attribs);
                    dataLabel[dataLabel.moved ? 'animate' : 'attr'](labelPosition.posAttribs);
                    dataLabel.moved = true;
                }
                else if (dataLabel) {
                    dataLabel.attr({ y: -9999 });
                }
            });
            // Clear for update
            delete point.distributeBox;
        }, this);
    }
    /**
     * Verify whether the data labels are allowed to draw, or we should run more
     * translation and data label positioning to keep them inside the plot area.
     * Returns true when data labels are ready to draw.
     * @private
     */
    function verifyDataLabelOverflow(overflow) {
        const center = this.center, options = this.options, centerOption = options.center, minSize = options.minSize || 80;
        let newSize = minSize, 
        // If a size is set, return true and don't try to shrink the pie
        // to fit the labels.
        ret = options.size !== null;
        if (!ret) {
            // Handle horizontal size and center
            if (centerOption[0] !== null) { // Fixed center
                newSize = Math.max(center[2] -
                    Math.max(overflow[1], overflow[3]), minSize);
            }
            else { // Auto center
                newSize = Math.max(
                // Horizontal overflow
                center[2] - overflow[1] - overflow[3], minSize);
                // Horizontal center
                center[0] += (overflow[3] - overflow[1]) / 2;
            }
            // Handle vertical size and center
            if (centerOption[1] !== null) { // Fixed center
                newSize = clamp(newSize, minSize, center[2] - Math.max(overflow[0], overflow[2]));
            }
            else { // Auto center
                newSize = clamp(newSize, minSize, 
                // Vertical overflow
                center[2] - overflow[0] - overflow[2]);
                // Vertical center
                center[1] += (overflow[0] - overflow[2]) / 2;
            }
            // If the size must be decreased, we need to run translate and
            // drawDataLabels again
            if (newSize < center[2]) {
                center[2] = newSize;
                center[3] = Math.min(// #3632
                options.thickness ?
                    Math.max(0, newSize - options.thickness * 2) :
                    Math.max(0, relativeLength(options.innerSize || 0, newSize)), newSize); // #6647
                this.translate(center);
                if (this.drawDataLabels) {
                    this.drawDataLabels();
                }
                // Else, return true to indicate that the pie and its labels is
                // within the plot area
            }
            else {
                ret = true;
            }
        }
        return ret;
    }
})(PieDataLabel_ColumnDataLabel || (PieDataLabel_ColumnDataLabel = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PieDataLabel = (PieDataLabel_ColumnDataLabel);

;// ./code/es-modules/Core/Geometry/GeometryUtilities.js
/* *
 *
 *  (c) 2010-2025 Highsoft AS
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
var GeometryUtilities;
(function (GeometryUtilities) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Calculates the center between a list of points.
     *
     * @private
     *
     * @param {Array<Highcharts.PositionObject>} points
     * A list of points to calculate the center of.
     *
     * @return {Highcharts.PositionObject}
     * Calculated center
     */
    function getCenterOfPoints(points) {
        const sum = points.reduce((sum, point) => {
            sum.x += point.x;
            sum.y += point.y;
            return sum;
        }, { x: 0, y: 0 });
        return {
            x: sum.x / points.length,
            y: sum.y / points.length
        };
    }
    GeometryUtilities.getCenterOfPoints = getCenterOfPoints;
    /**
     * Calculates the distance between two points based on their x and y
     * coordinates.
     *
     * @private
     *
     * @param {Highcharts.PositionObject} p1
     * The x and y coordinates of the first point.
     *
     * @param {Highcharts.PositionObject} p2
     * The x and y coordinates of the second point.
     *
     * @return {number}
     * Returns the distance between the points.
     */
    function getDistanceBetweenPoints(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }
    GeometryUtilities.getDistanceBetweenPoints = getDistanceBetweenPoints;
    /**
     * Calculates the angle between two points.
     * @todo add unit tests.
     * @private
     * @param {Highcharts.PositionObject} p1 The first point.
     * @param {Highcharts.PositionObject} p2 The second point.
     * @return {number} Returns the angle in radians.
     */
    function getAngleBetweenPoints(p1, p2) {
        return Math.atan2(p2.x - p1.x, p2.y - p1.y);
    }
    GeometryUtilities.getAngleBetweenPoints = getAngleBetweenPoints;
    /**
     * Test for point in polygon. Polygon defined as array of [x,y] points.
     * @private
     * @param {PositionObject} point The point potentially within a polygon.
     * @param {Array<Array<number>>} polygon The polygon potentially containing the point.
     */
    function pointInPolygon({ x, y }, polygon) {
        const len = polygon.length;
        let i, j, inside = false;
        for (i = 0, j = len - 1; i < len; j = i++) {
            const [x1, y1] = polygon[i], [x2, y2] = polygon[j];
            if (y1 > y !== y2 > y &&
                (x < (x2 - x1) *
                    (y - y1) /
                    (y2 - y1) +
                    x1)) {
                inside = !inside;
            }
        }
        return inside;
    }
    GeometryUtilities.pointInPolygon = pointInPolygon;
})(GeometryUtilities || (GeometryUtilities = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Geometry_GeometryUtilities = (GeometryUtilities);

;// ./code/es-modules/Core/Series/OverlappingDataLabels.js
/* *
 *
 *  Highcharts module to hide overlapping data labels.
 *  This module is included in Highcharts.
 *
 *  (c) 2009-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { pointInPolygon } = Geometry_GeometryUtilities;

const { addEvent: OverlappingDataLabels_addEvent, getAlignFactor: OverlappingDataLabels_getAlignFactor, fireEvent: OverlappingDataLabels_fireEvent, objectEach: OverlappingDataLabels_objectEach, pick: OverlappingDataLabels_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Hide overlapping labels. Labels are moved and faded in and out on zoom to
 * provide a smooth visual impression.
 *
 * @private
 * @function Highcharts.Chart#hideOverlappingLabels
 * @param {Array<Highcharts.SVGElement>} labels
 *        Rendered data labels
 */
function chartHideOverlappingLabels(labels) {
    const chart = this, len = labels.length, isIntersectRect = (box1, box2) => !(box2.x >= box1.x + box1.width ||
        box2.x + box2.width <= box1.x ||
        box2.y >= box1.y + box1.height ||
        box2.y + box2.height <= box1.y), isPolygonOverlap = (box1Poly, box2Poly) => {
        for (const p of box1Poly) {
            if (pointInPolygon({ x: p[0], y: p[1] }, box2Poly)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Get the box with its position inside the chart, as opposed to getBBox
     * that only reports the position relative to the parent.
     */
    function getAbsoluteBox(label) {
        if (label && (!label.alignAttr || label.placed)) {
            const padding = label.box ? 0 : (label.padding || 0), pos = label.alignAttr || {
                x: label.attr('x'),
                y: label.attr('y')
            }, { height, polygon, width } = label.getBBox(), alignOffset = OverlappingDataLabels_getAlignFactor(label.alignValue) * width;
            label.width = width;
            label.height = height;
            return {
                x: pos.x + (label.parentGroup?.translateX || 0) + padding - alignOffset,
                y: pos.y + (label.parentGroup?.translateY || 0) + padding,
                width: width - 2 * padding,
                height: height - 2 * padding,
                polygon
            };
        }
    }
    let label, label1, label2, box1, box2, isLabelAffected = false;
    for (let i = 0; i < len; i++) {
        label = labels[i];
        if (label) {
            // Mark with initial opacity
            label.oldOpacity = label.opacity;
            label.newOpacity = 1;
            label.absoluteBox = getAbsoluteBox(label);
        }
    }
    // Prevent a situation in a gradually rising slope, that each label will
    // hide the previous one because the previous one always has lower rank.
    labels.sort((a, b) => (b.labelrank || 0) - (a.labelrank || 0));
    // Detect overlapping labels
    for (let i = 0; i < len; ++i) {
        label1 = labels[i];
        box1 = label1 && label1.absoluteBox;
        const box1Poly = box1?.polygon;
        for (let j = i + 1; j < len; ++j) {
            label2 = labels[j];
            box2 = label2 && label2.absoluteBox;
            let toHide = false;
            if (box1 &&
                box2 &&
                label1 !== label2 && // #6465, polar chart with connectEnds
                label1.newOpacity !== 0 &&
                label2.newOpacity !== 0 &&
                // #15863 dataLabels are no longer hidden by translation
                label1.visibility !== 'hidden' &&
                label2.visibility !== 'hidden') {
                const box2Poly = box2.polygon;
                // If labels have polygons, only evaluate
                // based on polygons
                if (box1Poly &&
                    box2Poly &&
                    box1Poly !== box2Poly) {
                    if (isPolygonOverlap(box1Poly, box2Poly)) {
                        toHide = true;
                    }
                    // If there are no polygons, evaluate rectangles coliding
                }
                else if (isIntersectRect(box1, box2)) {
                    toHide = true;
                }
                if (toHide) {
                    const overlappingLabel = (label1.labelrank < label2.labelrank ?
                        label1 :
                        label2), labelText = overlappingLabel.text;
                    overlappingLabel.newOpacity = 0;
                    if (labelText?.element.querySelector('textPath')) {
                        labelText.hide();
                    }
                }
            }
        }
    }
    // Hide or show
    for (const label of labels) {
        if (hideOrShow(label, chart)) {
            isLabelAffected = true;
        }
    }
    if (isLabelAffected) {
        OverlappingDataLabels_fireEvent(chart, 'afterHideAllOverlappingLabels');
    }
}
/** @private */
function compose(ChartClass) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.hideOverlappingLabels) {
        chartProto.hideOverlappingLabels = chartHideOverlappingLabels;
        OverlappingDataLabels_addEvent(ChartClass, 'render', OverlappingDataLabels_onChartRender);
    }
}
/**
 * Hide or show labels based on opacity.
 *
 * @private
 * @function hideOrShow
 * @param {Highcharts.SVGElement} label
 * The label.
 * @param {Highcharts.Chart} chart
 * The chart that contains the label.
 * @return {boolean}
 * Whether label is affected
 */
function hideOrShow(label, chart) {
    let complete, newOpacity, isLabelAffected = false;
    if (label) {
        newOpacity = label.newOpacity;
        if (label.oldOpacity !== newOpacity) {
            // Toggle data labels
            if (label.hasClass('highcharts-data-label')) {
                // Make sure the label is completely hidden to avoid catching
                // clicks (#4362)
                label[newOpacity ? 'removeClass' : 'addClass']('highcharts-data-label-hidden');
                complete = function () {
                    if (!chart.styledMode) {
                        label.css({
                            pointerEvents: newOpacity ? 'auto' : 'none'
                        });
                    }
                };
                isLabelAffected = true;
                // Animate or set the opacity
                label[label.isOld ? 'animate' : 'attr']({ opacity: newOpacity }, void 0, complete);
                OverlappingDataLabels_fireEvent(chart, 'afterHideOverlappingLabel');
                // Toggle other labels, tick labels
            }
            else {
                label.attr({
                    opacity: newOpacity
                });
            }
        }
        label.isOld = true;
    }
    return isLabelAffected;
}
/**
 * Collect potential overlapping data labels. Stack labels probably don't need
 * to be considered because they are usually accompanied by data labels that lie
 * inside the columns.
 * @private
 */
function OverlappingDataLabels_onChartRender() {
    const chart = this;
    let labels = [];
    // Consider external label collectors
    for (const collector of (chart.labelCollectors || [])) {
        labels = labels.concat(collector());
    }
    for (const yAxis of (chart.yAxis || [])) {
        if (yAxis.stacking &&
            yAxis.options.stackLabels &&
            !yAxis.options.stackLabels.allowOverlap) {
            OverlappingDataLabels_objectEach(yAxis.stacking.stacks, (stack) => {
                OverlappingDataLabels_objectEach(stack, (stackItem) => {
                    if (stackItem.label) {
                        labels.push(stackItem.label);
                    }
                });
            });
        }
    }
    for (const series of (chart.series || [])) {
        if (series.visible && series.hasDataLabels?.()) { // #3866
            const push = (points) => {
                for (const point of points) {
                    if (point.visible) {
                        (point.dataLabels || []).forEach((label) => {
                            const options = label.options || {};
                            label.labelrank = OverlappingDataLabels_pick(options.labelrank, point.labelrank, point.shapeArgs?.height); // #4118
                            // Allow overlap if the option is explicitly true
                            if (
                            // #13449
                            options.allowOverlap ??
                                // Pie labels outside have a separate placement
                                // logic, skip the overlap logic
                                Number(options.distance) > 0) {
                                label.oldOpacity = label.opacity;
                                label.newOpacity = 1;
                                hideOrShow(label, chart);
                                // Do not allow overlap
                            }
                            else {
                                labels.push(label);
                            }
                        });
                    }
                }
            };
            push(series.nodes || []);
            push(series.points);
        }
    }
    this.hideOverlappingLabels(labels);
}
/* *
 *
 *  Default Export
 *
 * */
const OverlappingDataLabels = {
    compose
};
/* harmony default export */ const Series_OverlappingDataLabels = (OverlappingDataLabels);

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


const { defaultOptions } = (external_highcharts_src_js_default_default());

const { noop: BorderRadius_noop } = (external_highcharts_src_js_default_default());

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
let oldArc = BorderRadius_noop;
let oldRoundedRect = BorderRadius_noop;
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
        const { options, yAxis } = this, percent = options.stacking === 'percent', seriesDefault = defaultOptions.plotOptions?.[this.type]
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

;// ./code/es-modules/Core/Responsive.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { diffObjects, extend: Responsive_extend, find, merge: Responsive_merge, pick: Responsive_pick, uniqueKey: Responsive_uniqueKey } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var Responsive;
(function (Responsive) {
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
    function compose(ChartClass) {
        const chartProto = ChartClass.prototype;
        if (!chartProto.matchResponsiveRule) {
            Responsive_extend(chartProto, {
                matchResponsiveRule,
                setResponsive
            });
        }
        return ChartClass;
    }
    Responsive.compose = compose;
    /**
     * Handle a single responsiveness rule.
     *
     * @private
     * @function Highcharts.Chart#matchResponsiveRule
     * @param {Highcharts.ResponsiveRulesOptions} rule
     * @param {Array<string>} matches
     */
    function matchResponsiveRule(rule, matches) {
        const condition = rule.condition, fn = condition.callback || function () {
            return (this.chartWidth <= Responsive_pick(condition.maxWidth, Number.MAX_VALUE) &&
                this.chartHeight <= Responsive_pick(condition.maxHeight, Number.MAX_VALUE) &&
                this.chartWidth >= Responsive_pick(condition.minWidth, 0) &&
                this.chartHeight >= Responsive_pick(condition.minHeight, 0));
        };
        if (fn.call(this)) {
            matches.push(rule._id);
        }
    }
    /**
     * Update the chart based on the current chart/document size and options
     * for responsiveness.
     *
     * @private
     * @function Highcharts.Chart#setResponsive
     * @param  {boolean} [redraw=true]
     * @param  {boolean} [reset=false]
     * Reset by un-applying all rules. Chart.update resets all rules before
     * applying updated options.
     */
    function setResponsive(redraw, reset) {
        const options = this.options.responsive, currentResponsive = this.currentResponsive;
        let ruleIds = [], undoOptions;
        if (!reset && options && options.rules) {
            options.rules.forEach((rule) => {
                if (typeof rule._id === 'undefined') {
                    rule._id = Responsive_uniqueKey();
                }
                this.matchResponsiveRule(rule, ruleIds /* , redraw */);
            }, this);
        }
        // Merge matching rules
        const mergedOptions = Responsive_merge(...ruleIds
            .map((ruleId) => find(options?.rules || [], (rule) => (rule._id === ruleId)))
            .map((rule) => rule?.chartOptions));
        mergedOptions.isResponsiveOptions = true;
        // Stringified key for the rules that currently apply.
        ruleIds = (ruleIds.toString() || void 0);
        const currentRuleIds = currentResponsive?.ruleIds;
        // Changes in what rules apply
        if (ruleIds !== currentRuleIds) {
            // Undo previous rules. Before we apply a new set of rules, we
            // need to roll back completely to base options (#6291).
            if (currentResponsive) {
                this.currentResponsive = void 0;
                this.updatingResponsive = true;
                this.update(currentResponsive.undoOptions, redraw, true);
                this.updatingResponsive = false;
            }
            if (ruleIds) {
                // Get undo-options for matching rules. The `undoOptions``
                // hold the current values before they are changed by the
                // `mergedOptions`.
                undoOptions = diffObjects(mergedOptions, this.options, true, this.collectionsWithUpdate);
                undoOptions.isResponsiveOptions = true;
                this.currentResponsive = {
                    ruleIds: ruleIds,
                    mergedOptions: mergedOptions,
                    undoOptions: undoOptions
                };
                if (!this.updatingResponsive) {
                    this.update(mergedOptions, redraw, true);
                }
            }
            else {
                this.currentResponsive = void 0;
            }
        }
    }
})(Responsive || (Responsive = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Core_Responsive = (Responsive);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A callback function to gain complete control on when the responsive rule
 * applies.
 *
 * @callback Highcharts.ResponsiveCallbackFunction
 *
 * @param {Highcharts.Chart} this
 * Chart context.
 *
 * @return {boolean}
 * Return `true` if it applies.
 */
(''); // Keeps doclets above in JS file
/* *
 *
 *  API Options
 *
 * */
/**
 * Allows setting a set of rules to apply for different screen or chart
 * sizes. Each rule specifies additional chart options.
 *
 * @sample {highstock} stock/demo/responsive/
 *         Stock chart
 * @sample highcharts/responsive/axis/
 *         Axis
 * @sample highcharts/responsive/legend/
 *         Legend
 * @sample highcharts/responsive/classname/
 *         Class name
 *
 * @since     5.0.0
 * @apioption responsive
 */
/**
 * A set of rules for responsive settings. The rules are executed from
 * the top down.
 *
 * @sample {highcharts} highcharts/responsive/axis/
 *         Axis changes
 * @sample {highstock} highcharts/responsive/axis/
 *         Axis changes
 * @sample {highmaps} highcharts/responsive/axis/
 *         Axis changes
 *
 * @type      {Array<*>}
 * @since     5.0.0
 * @apioption responsive.rules
 */
/**
 * A full set of chart options to apply as overrides to the general
 * chart options. The chart options are applied when the given rule
 * is active.
 *
 * A special case is configuration objects that take arrays, for example
 * [xAxis](#xAxis), [yAxis](#yAxis) or [series](#series). For these
 * collections, an `id` option is used to map the new option set to
 * an existing object. If an existing object of the same id is not found,
 * the item of the same index updated. So for example, setting `chartOptions`
 * with two series items without an `id`, will cause the existing chart's
 * two series to be updated with respective options.
 *
 * @sample {highstock} stock/demo/responsive/
 *         Stock chart
 * @sample highcharts/responsive/axis/
 *         Axis
 * @sample highcharts/responsive/legend/
 *         Legend
 * @sample highcharts/responsive/classname/
 *         Class name
 *
 * @type      {Highcharts.Options}
 * @since     5.0.0
 * @apioption responsive.rules.chartOptions
 */
/**
 * Under which conditions the rule applies.
 *
 * @since     5.0.0
 * @apioption responsive.rules.condition
 */
/**
 * A callback function to gain complete control on when the responsive
 * rule applies. Return `true` if it applies. This opens for checking
 * against other metrics than the chart size, for example the document
 * size or other elements.
 *
 * @type      {Highcharts.ResponsiveCallbackFunction}
 * @since     5.0.0
 * @context   Highcharts.Chart
 * @apioption responsive.rules.condition.callback
 */
/**
 * The responsive rule applies if the chart height is less than this.
 *
 * @type      {number}
 * @since     5.0.0
 * @apioption responsive.rules.condition.maxHeight
 */
/**
 * The responsive rule applies if the chart width is less than this.
 *
 * @sample highcharts/responsive/axis/
 *         Max width is 500
 *
 * @type      {number}
 * @since     5.0.0
 * @apioption responsive.rules.condition.maxWidth
 */
/**
 * The responsive rule applies if the chart height is greater than this.
 *
 * @type      {number}
 * @default   0
 * @since     5.0.0
 * @apioption responsive.rules.condition.minHeight
 */
/**
 * The responsive rule applies if the chart width is greater than this.
 *
 * @type      {number}
 * @default   0
 * @since     5.0.0
 * @apioption responsive.rules.condition.minWidth
 */
(''); // Keeps doclets above in JS file

;// external ["./highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// external ["./highcharts.src.js","default","Time"]
const external_highcharts_src_js_default_Time_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_c57973fa__["default"].Time;
var external_highcharts_src_js_default_Time_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Time_namespaceObject);
;// ./code/es-modules/masters/highcharts.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-11)
 * @module highcharts/highcharts
 *
 * (c) 2009-2025 Highsoft AS
 *
 * License: www.highcharts.com/license
 */














































const G = (external_highcharts_src_js_default_default());
// Classes
G.AST = (external_highcharts_src_js_default_AST_default());
G.Axis = (external_highcharts_src_js_default_Axis_default());
G.Chart = (external_highcharts_src_js_default_Chart_default());
G.Color = (external_highcharts_src_js_default_Color_default());
G.DataLabel = (external_highcharts_src_js_default_DataLabel_default());
G.DataTableCore = Data_DataTableCore;
G.Fx = (external_highcharts_src_js_default_Fx_default());
G.HTMLElement = HTML_HTMLElement;
G.Legend = (external_highcharts_src_js_default_Legend_default());
G.LegendSymbol = (external_highcharts_src_js_default_LegendSymbol_default());
G.OverlappingDataLabels = G.OverlappingDataLabels || Series_OverlappingDataLabels;
G.PlotLineOrBand = (external_highcharts_src_js_default_PlotLineOrBand_default());
G.Point = (external_highcharts_src_js_default_Point_default());
G.Pointer = (external_highcharts_src_js_default_Pointer_default());
G.RendererRegistry = (external_highcharts_src_js_default_RendererRegistry_default());
G.Series = (external_highcharts_src_js_default_Series_default());
G.SeriesRegistry = (external_highcharts_src_js_default_SeriesRegistry_default());
G.StackItem = (external_highcharts_src_js_default_StackItem_default());
G.SVGElement = (external_highcharts_src_js_default_SVGElement_default());
G.SVGRenderer = (external_highcharts_src_js_default_SVGRenderer_default());
G.Templating = (external_highcharts_src_js_default_Templating_default());
G.Tick = (external_highcharts_src_js_default_Tick_default());
G.Time = (external_highcharts_src_js_default_Time_default());
G.Tooltip = (external_highcharts_src_js_default_Tooltip_default());
// Utilities
G.animate = (external_highcharts_src_js_default_default()).animate;
G.animObject = (external_highcharts_src_js_default_default()).animObject;
G.chart = (external_highcharts_src_js_default_Chart_default()).chart;
G.color = (external_highcharts_src_js_default_Color_default()).parse;
G.dateFormat = (external_highcharts_src_js_default_Templating_default()).dateFormat;
G.defaultOptions = (external_highcharts_src_js_default_default()).defaultOptions;
G.distribute = (external_highcharts_src_js_default_default()).distribute;
G.format = (external_highcharts_src_js_default_Templating_default()).format;
G.getDeferredAnimation = (external_highcharts_src_js_default_default()).getDeferredAnimation;
G.getOptions = (external_highcharts_src_js_default_default()).getOptions;
G.numberFormat = (external_highcharts_src_js_default_Templating_default()).numberFormat;
G.seriesType = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesType;
G.setAnimation = (external_highcharts_src_js_default_default()).setAnimation;
G.setOptions = (external_highcharts_src_js_default_default()).setOptions;
G.stop = (external_highcharts_src_js_default_default()).stop;
G.time = (external_highcharts_src_js_default_default()).defaultTime;
G.timers = (external_highcharts_src_js_default_Fx_default()).timers;
// Compositions
Extensions_BorderRadius.compose(G.Series, G.SVGElement, G.SVGRenderer);
Column_ColumnDataLabel.compose(G.Series.types.column);
external_highcharts_src_js_default_DataLabel_default().compose(G.Series);
Axis_DateTimeAxis.compose(G.Axis);
HTML_HTMLElement.compose(G.SVGRenderer);
external_highcharts_src_js_default_Legend_default().compose(G.Chart);
Axis_LogarithmicAxis.compose(G.Axis);
Series_OverlappingDataLabels.compose(G.Chart);
PieDataLabel.compose(G.Series.types.pie);
external_highcharts_src_js_default_PlotLineOrBand_default().compose(G.Chart, G.Axis);
external_highcharts_src_js_default_Pointer_default().compose(G.Chart);
Core_Responsive.compose(G.Chart);
Extensions_ScrollablePlotArea.compose(G.Axis, G.Chart, G.Series);
Stacking_StackingAxis.compose(G.Axis, G.Chart, G.Series);
external_highcharts_src_js_default_Tooltip_default().compose(G.Pointer);
external_highcharts_src_js_default_default().extend(G, (external_highcharts_src_js_default_default()));
// Default Export
/* harmony default export */ const highcharts_src = (G);

;// ./code/es-modules/Extensions/ArrowSymbols.js
/* *
 *
 *  (c) 2017 Highsoft AS
 *  Authors: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
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
 * Creates an arrow symbol. Like a triangle, except not filled.
 * ```
 *                   o
 *             o
 *       o
 * o
 *       o
 *             o
 *                   o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the arrow
 *
 * @param {number} y
 *        y position of the arrow
 *
 * @param {number} w
 *        width of the arrow
 *
 * @param {number} h
 *        height of the arrow
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
function arrow(x, y, w, h) {
    return [
        ['M', x, y + h / 2],
        ['L', x + w, y],
        ['L', x, y + h / 2],
        ['L', x + w, y + h]
    ];
}
/**
 * Creates a half-width arrow symbol. Like a triangle, except not filled.
 * ```
 *       o
 *    o
 * o
 *    o
 *       o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the arrow
 *
 * @param {number} y
 *        y position of the arrow
 *
 * @param {number} w
 *        width of the arrow
 *
 * @param {number} h
 *        height of the arrow
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
function arrowHalf(x, y, w, h) {
    return arrow(x, y, w / 2, h);
}
/**
 * @private
 */
function ArrowSymbols_compose(SVGRendererClass) {
    const symbols = SVGRendererClass.prototype.symbols;
    symbols.arrow = arrow;
    symbols['arrow-filled'] = triangleLeft;
    symbols['arrow-filled-half'] = triangleLeftHalf;
    symbols['arrow-half'] = arrowHalf;
    symbols['triangle-left'] = triangleLeft;
    symbols['triangle-left-half'] = triangleLeftHalf;
}
/**
 * Creates a left-oriented triangle.
 * ```
 *             o
 *       ooooooo
 * ooooooooooooo
 *       ooooooo
 *             o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the triangle
 *
 * @param {number} y
 *        y position of the triangle
 *
 * @param {number} w
 *        width of the triangle
 *
 * @param {number} h
 *        height of the triangle
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
function triangleLeft(x, y, w, h) {
    return [
        ['M', x + w, y],
        ['L', x, y + h / 2],
        ['L', x + w, y + h],
        ['Z']
    ];
}
/**
 * Creates a half-width, left-oriented triangle.
 * ```
 *       o
 *    oooo
 * ooooooo
 *    oooo
 *       o
 * ```
 *
 * @private
 * @function
 *
 * @param {number} x
 *        x position of the triangle
 *
 * @param {number} y
 *        y position of the triangle
 *
 * @param {number} w
 *        width of the triangle
 *
 * @param {number} h
 *        height of the triangle
 *
 * @return {Highcharts.SVGPathArray}
 *         Path array
 */
function triangleLeftHalf(x, y, w, h) {
    return triangleLeft(x, y, w / 2, h);
}
/* *
 *
 *  Default Export
 *
 * */
const ArrowSymbols = {
    compose: ArrowSymbols_compose
};
/* harmony default export */ const Extensions_ArrowSymbols = (ArrowSymbols);

;// ./code/es-modules/Gantt/Connection.js
/* *
 *
 *  (c) 2016 Highsoft AS
 *  Authors: Øystein Moseng, Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { defined: Connection_defined, error, merge: Connection_merge, objectEach: Connection_objectEach } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
const deg2rad = (external_highcharts_src_js_default_default()).deg2rad, max = Math.max, min = Math.min;
/* *
 *
 *  Class
 *
 * */
/**
 * The Connection class. Used internally to represent a connection between two
 * points.
 *
 * @internal
 * @class
 * @name Highcharts.Connection
 *
 * @param {Highcharts.Point} from
 *        Connection runs from this Point.
 *
 * @param {Highcharts.Point} to
 *        Connection runs to this Point.
 *
 * @param {Highcharts.ConnectorsOptions} [options]
 *        Connection options.
 */
class Connection {
    /** @internal */
    constructor(from, to, options) {
        this.init(from, to, options);
    }
    /**
     * Initialize the Connection object. Used as constructor only.
     *
     * @function Highcharts.Connection#init
     *
     * @param {Highcharts.Point} from
     *        Connection runs from this Point.
     *
     * @param {Highcharts.Point} to
     *        Connection runs to this Point.
     *
     * @param {Highcharts.ConnectorsOptions} [options]
     *        Connection options.
     */
    init(from, to, options) {
        this.fromPoint = from;
        this.toPoint = to;
        this.options = options;
        this.chart = from.series.chart;
        this.pathfinder = this.chart.pathfinder;
    }
    /**
     * Add (or update) this connection's path on chart. Stores reference to the
     * created element on this.graphics.path.
     *
     * @function Highcharts.Connection#renderPath
     *
     * @param {Highcharts.SVGPathArray} path
     *        Path to render, in array format. E.g. ['M', 0, 0, 'L', 10, 10]
     *
     * @param {Highcharts.SVGAttributes} [attribs]
     *        SVG attributes for the path.
     *
     * @param {Partial<Highcharts.AnimationOptionsObject>} [animation]
     *        Animation options for the rendering.
     */
    renderPath(path, attribs) {
        const connection = this, chart = this.chart, styledMode = chart.styledMode, pathfinder = this.pathfinder, anim = {};
        let pathGraphic = connection.graphics && connection.graphics.path;
        // Add the SVG element of the pathfinder group if it doesn't exist
        if (!pathfinder.group) {
            pathfinder.group = chart.renderer.g()
                .addClass('highcharts-pathfinder-group')
                .attr({ zIndex: -1 })
                .add(chart.seriesGroup);
        }
        // Shift the group to compensate for plot area.
        // Note: Do this always (even when redrawing a path) to avoid issues
        // when updating chart in a way that changes plot metrics.
        pathfinder.group.translate(chart.plotLeft, chart.plotTop);
        // Create path if does not exist
        if (!(pathGraphic && pathGraphic.renderer)) {
            pathGraphic = chart.renderer.path()
                .add(pathfinder.group);
            if (!styledMode) {
                pathGraphic.attr({
                    opacity: 0
                });
            }
        }
        // Set path attribs and animate to the new path
        pathGraphic.attr(attribs);
        anim.d = path;
        if (!styledMode) {
            anim.opacity = 1;
        }
        pathGraphic.animate(anim);
        // Store reference on connection
        this.graphics = this.graphics || {};
        this.graphics.path = pathGraphic;
    }
    /**
     * Calculate and add marker graphics for connection to the chart. The
     * created/updated elements are stored on this.graphics.start and
     * this.graphics.end.
     *
     * @function Highcharts.Connection#addMarker
     *
     * @param {string} type
     *        Marker type, either 'start' or 'end'.
     *
     * @param {Highcharts.ConnectorsMarkerOptions} options
     *        All options for this marker. Not calculated or merged with other
     *        options.
     *
     * @param {Highcharts.SVGPathArray} path
     *        Connection path in array format. This is used to calculate the
     *        rotation angle of the markers.
     */
    addMarker(type, options, path) {
        const connection = this, chart = connection.fromPoint.series.chart, pathfinder = chart.pathfinder, renderer = chart.renderer, point = (type === 'start' ?
            connection.fromPoint :
            connection.toPoint), anchor = point.getPathfinderAnchorPoint(options);
        let markerVector, radians, rotation, box, width, height, pathVector, segment;
        if (!options.enabled) {
            return;
        }
        // Last vector before start/end of path, used to get angle
        if (type === 'start') {
            segment = path[1];
        }
        else { // 'end'
            segment = path[path.length - 2];
        }
        if (segment && segment[0] === 'M' || segment[0] === 'L') {
            pathVector = {
                x: segment[1],
                y: segment[2]
            };
            // Get angle between pathVector and anchor point and use it to
            // create marker position.
            radians = point.getRadiansToVector(pathVector, anchor);
            markerVector = point.getMarkerVector(radians, options.radius, anchor);
            // Rotation of marker is calculated from angle between pathVector
            // and markerVector.
            // (Note:
            //  Used to recalculate radians between markerVector and pathVector,
            //  but this should be the same as between pathVector and anchor.)
            rotation = -radians / deg2rad;
            if (options.width && options.height) {
                width = options.width;
                height = options.height;
            }
            else {
                width = height = options.radius * 2;
            }
            // Add graphics object if it does not exist
            connection.graphics = connection.graphics || {};
            box = {
                x: markerVector.x - (width / 2),
                y: markerVector.y - (height / 2),
                width: width,
                height: height,
                rotation: rotation,
                rotationOriginX: markerVector.x,
                rotationOriginY: markerVector.y
            };
            if (!connection.graphics[type]) {
                // Create new marker element
                connection.graphics[type] = renderer
                    .symbol(options.symbol)
                    .addClass('highcharts-point-connecting-path-' + type + '-marker' +
                    ' highcharts-color-' + this.fromPoint.colorIndex)
                    .attr(box)
                    .add(pathfinder.group);
                if (!renderer.styledMode) {
                    connection.graphics[type].attr({
                        fill: options.color || connection.fromPoint.color,
                        stroke: options.lineColor,
                        'stroke-width': options.lineWidth,
                        opacity: 0
                    })
                        .animate({
                        opacity: 1
                    }, point.series.options.animation);
                }
            }
            else {
                connection.graphics[type].animate(box);
            }
        }
    }
    /**
     * Calculate and return connection path.
     * Note: Recalculates chart obstacles on demand if they aren't calculated.
     *
     * @function Highcharts.Connection#getPath
     *
     * @param {Highcharts.ConnectorsOptions} options
     *        Connector options. Not calculated or merged with other options.
     *
     * @return {object|undefined}
     *         Calculated SVG path data in array format.
     */
    getPath(options) {
        const pathfinder = this.pathfinder, chart = this.chart, algorithm = pathfinder.algorithms[options.type];
        let chartObstacles = pathfinder.chartObstacles;
        if (typeof algorithm !== 'function') {
            error('"' + options.type + '" is not a Pathfinder algorithm.');
            return {
                path: [],
                obstacles: []
            };
        }
        // This function calculates obstacles on demand if they don't exist
        if (algorithm.requiresObstacles && !chartObstacles) {
            chartObstacles =
                pathfinder.chartObstacles =
                    pathfinder.getChartObstacles(options);
            // If the algorithmMargin was computed, store the result in default
            // options.
            chart.options.connectors.algorithmMargin =
                options.algorithmMargin;
            // Cache some metrics too
            pathfinder.chartObstacleMetrics =
                pathfinder.getObstacleMetrics(chartObstacles);
        }
        // Get the SVG path
        return algorithm(
        // From
        this.fromPoint.getPathfinderAnchorPoint(options.startMarker), 
        // To
        this.toPoint.getPathfinderAnchorPoint(options.endMarker), Connection_merge({
            chartObstacles: chartObstacles,
            lineObstacles: pathfinder.lineObstacles || [],
            obstacleMetrics: pathfinder.chartObstacleMetrics,
            hardBounds: {
                xMin: 0,
                xMax: chart.plotWidth,
                yMin: 0,
                yMax: chart.plotHeight
            },
            obstacleOptions: {
                margin: options.algorithmMargin
            },
            startDirectionX: pathfinder.getAlgorithmStartDirection(options.startMarker)
        }, options));
    }
    /**
     * (re)Calculate and (re)draw the connection.
     *
     * @function Highcharts.Connection#render
     */
    render() {
        const connection = this, fromPoint = connection.fromPoint, series = fromPoint.series, chart = series.chart, pathfinder = chart.pathfinder, attribs = {};
        let options = Connection_merge(chart.options.connectors, series.options.connectors, fromPoint.options.connectors, connection.options);
        // Set path attribs
        if (!chart.styledMode) {
            attribs.stroke = options.lineColor || fromPoint.color;
            attribs['stroke-width'] = options.lineWidth;
            if (options.dashStyle) {
                attribs.dashstyle = options.dashStyle;
            }
        }
        attribs['class'] = // eslint-disable-line dot-notation
            'highcharts-point-connecting-path ' +
                'highcharts-color-' + fromPoint.colorIndex;
        options = Connection_merge(attribs, options);
        // Set common marker options
        if (!Connection_defined(options.marker.radius)) {
            options.marker.radius = min(max(Math.ceil((options.algorithmMargin || 8) / 2) - 1, 1), 5);
        }
        // Get the path
        const pathResult = connection.getPath(options), path = pathResult.path;
        // Always update obstacle storage with obstacles from this path.
        // We don't know if future calls will need this for their algorithm.
        if (pathResult.obstacles) {
            pathfinder.lineObstacles =
                pathfinder.lineObstacles || [];
            pathfinder.lineObstacles =
                pathfinder.lineObstacles.concat(pathResult.obstacles);
        }
        // Add the calculated path to the pathfinder group
        connection.renderPath(path, attribs);
        // Render the markers
        connection.addMarker('start', Connection_merge(options.marker, options.startMarker), path);
        connection.addMarker('end', Connection_merge(options.marker, options.endMarker), path);
    }
    /**
     * Destroy connection by destroying the added graphics elements.
     *
     * @function Highcharts.Connection#destroy
     */
    destroy() {
        if (this.graphics) {
            Connection_objectEach(this.graphics, function (val) {
                val.destroy();
            });
            delete this.graphics;
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const Gantt_Connection = (Connection);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * The default pathfinder algorithm to use for a chart. It is possible to define
 * your own algorithms by adding them to the
 * `Highcharts.Pathfinder.prototype.algorithms`
 * object before the chart has been created.
 *
 * The default algorithms are as follows:
 *
 * `straight`:      Draws a straight line between the connecting
 *                  points. Does not avoid other points when drawing.
 *
 * `simpleConnect`: Finds a path between the points using right angles
 *                  only. Takes only starting/ending points into
 *                  account, and will not avoid other points.
 *
 * `fastAvoid`:     Finds a path between the points using right angles
 *                  only. Will attempt to avoid other points, but its
 *                  focus is performance over accuracy. Works well with
 *                  less dense datasets.
 *
 * @typedef {"fastAvoid"|"simpleConnect"|"straight"|string} Highcharts.PathfinderTypeValue
 */
''; // Keeps doclets above in JS file

;// ./code/es-modules/Extensions/CurrentDateIndication.js
/* *
 *
 *  (c) 2016-2025 Highsoft AS
 *
 *  Author: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { composed: CurrentDateIndication_composed } = (external_highcharts_src_js_default_default());

const { addEvent: CurrentDateIndication_addEvent, merge: CurrentDateIndication_merge, pushUnique: CurrentDateIndication_pushUnique, wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * Show an indicator on the axis for the current date and time. Can be a
 * boolean or a configuration object similar to
 * [xAxis.plotLines](#xAxis.plotLines).
 *
 * @sample gantt/current-date-indicator/demo
 *         Current date indicator enabled
 * @sample gantt/current-date-indicator/object-config
 *         Current date indicator with custom options
 *
 * @declare   Highcharts.CurrentDateIndicatorOptions
 * @type      {boolean|CurrentDateIndicatorOptions}
 * @default   true
 * @extends   xAxis.plotLines
 * @excluding value
 * @product   gantt
 * @apioption xAxis.currentDateIndicator
 */
const CurrentDateIndication_defaultOptions = {
    color: "#ccd3ff" /* Palette.highlightColor20 */,
    width: 2,
    /**
     * @declare Highcharts.AxisCurrentDateIndicatorLabelOptions
     */
    label: {
        /**
         * Format of the label. This options is passed as the first argument to
         * [dateFormat](/class-reference/Highcharts.Time#dateFormat) function.
         *
         * @type      {string|Intl.DateTimeFormatOptions}
         * @product   gantt
         * @apioption xAxis.currentDateIndicator.label.format
         */
        format: '%[abdYHM]',
        formatter: function (value, format) {
            return this.axis.chart.time.dateFormat(format || '', value, true);
        },
        rotation: 0,
        /**
         * @type {Highcharts.CSSObject}
         */
        style: {
            /** @internal */
            fontSize: '0.7em'
        }
    }
};
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function CurrentDateIndication_compose(AxisClass, PlotLineOrBandClass) {
    if (CurrentDateIndication_pushUnique(CurrentDateIndication_composed, 'CurrentDateIndication')) {
        CurrentDateIndication_addEvent(AxisClass, 'afterSetOptions', onAxisAfterSetOptions);
        CurrentDateIndication_addEvent(PlotLineOrBandClass, 'render', onPlotLineOrBandRender);
        wrap(PlotLineOrBandClass.prototype, 'getLabelText', wrapPlotLineOrBandGetLabelText);
    }
}
/**
 * @private
 */
function onAxisAfterSetOptions() {
    const options = this.options, cdiOptions = options.currentDateIndicator;
    if (cdiOptions) {
        const plotLineOptions = typeof cdiOptions === 'object' ?
            CurrentDateIndication_merge(CurrentDateIndication_defaultOptions, cdiOptions) :
            CurrentDateIndication_merge(CurrentDateIndication_defaultOptions);
        plotLineOptions.value = Date.now();
        plotLineOptions.className = 'highcharts-current-date-indicator';
        if (!options.plotLines) {
            options.plotLines = [];
        }
        options.plotLines.push(plotLineOptions);
    }
}
/**
 * @private
 */
function onPlotLineOrBandRender() {
    // If the label already exists, update its text
    if (this.label) {
        this.label.attr({
            text: this.getLabelText(this.options.label)
        });
    }
}
/**
 * @private
 */
function wrapPlotLineOrBandGetLabelText(defaultMethod, defaultLabelOptions) {
    const options = this.options;
    if (options &&
        options.className &&
        options.className.indexOf('highcharts-current-date-indicator') !== -1 &&
        options.label &&
        typeof options.label.formatter === 'function') {
        options.value = Date.now();
        return options.label.formatter
            .call(this, options.value, options.label.format);
    }
    return defaultMethod.call(this, defaultLabelOptions);
}
/* *
 *
 *  Default Export
 *
 * */
const CurrentDateIndication = {
    compose: CurrentDateIndication_compose
};
/* harmony default export */ const Extensions_CurrentDateIndication = (CurrentDateIndication);

;// ./code/es-modules/Core/Chart/GanttChart.js
/* *
 *
 *  (c) 2016-2025 Highsoft AS
 *
 *  Author: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { defaultOptions: GanttChart_defaultOptions } = (external_highcharts_src_js_default_default());

const { isArray, merge: GanttChart_merge, splat } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Gantt-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/gantt
 *
 * @class
 * @name Highcharts.GanttChart
 * @extends Highcharts.Chart
 */
class GanttChart extends (external_highcharts_src_js_default_Chart_default()) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.GanttChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded.
     *
     *
     * @emits Highcharts.GanttChart#event:init
     * @emits Highcharts.GanttChart#event:afterInit
     */
    init(userOptions, callback) {
        const xAxisOptions = userOptions.xAxis, yAxisOptions = userOptions.yAxis;
        let defaultLinkedTo;
        // Avoid doing these twice
        userOptions.xAxis = userOptions.yAxis = void 0;
        const options = GanttChart_merge(true, {
            chart: {
                type: 'gantt'
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            navigator: {
                series: { type: 'gantt' },
                // Bars were clipped, #14060.
                yAxis: {
                    type: 'category'
                }
            }
        }, userOptions, // User's options
        // forced options
        {
            isGantt: true
        });
        userOptions.xAxis = xAxisOptions;
        userOptions.yAxis = yAxisOptions;
        // Apply X axis options to both single and multi x axes If user hasn't
        // defined axes as array, make it into an array and add a second axis by
        // default.
        options.xAxis = (!isArray(userOptions.xAxis) ?
            [userOptions.xAxis || {}, {}] :
            userOptions.xAxis).map((xAxisOptions, i) => {
            if (i === 1) { // Second xAxis
                defaultLinkedTo = 0;
            }
            return GanttChart_merge(
            // Defaults
            {
                grid: {
                    borderColor: GanttChart_defaultOptions.xAxis?.grid?.borderColor ||
                        "#cccccc" /* Palette.neutralColor20 */,
                    enabled: true
                },
                opposite: GanttChart_defaultOptions.xAxis?.opposite ??
                    xAxisOptions.opposite ??
                    true,
                linkedTo: defaultLinkedTo
            }, 
            // User options
            xAxisOptions, 
            // Forced options
            {
                type: 'datetime'
            });
        });
        // Apply Y axis options to both single and multi y axes
        options.yAxis = (splat(userOptions.yAxis || {})).map((yAxisOptions) => GanttChart_merge(
        // Defaults
        {
            grid: {
                borderColor: GanttChart_defaultOptions.yAxis?.grid?.borderColor ||
                    "#cccccc" /* Palette.neutralColor20 */,
                enabled: true
            },
            staticScale: 50,
            reversed: true,
            // Set default type treegrid, but only if 'categories' is
            // undefined
            type: yAxisOptions.categories ? yAxisOptions.type : 'treegrid'
        }, 
        // User options
        yAxisOptions));
        super.init(options, callback);
    }
}
/* *
 *
 *  Class Namespace
 *
 * */
(function (GanttChart) {
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable jsdoc/check-param-names */
    /**
     * The factory function for creating new gantt charts. Creates a new {@link
     * Highcharts.GanttChart|GanttChart} object with different default options
     * than the basic Chart.
     *
     * @example
     * // Render a chart in to div#container
     * let chart = Highcharts.ganttChart('container', {
     *     title: {
     *         text: 'My chart'
     *     },
     *     series: [{
     *         data: ...
     *     }]
     * });
     *
     * @function Highcharts.ganttChart
     *
     * @param {string|Highcharts.HTMLDOMElement} renderTo
     *        The DOM element to render to, or its id.
     *
     * @param {Highcharts.Options} options
     *        The chart options structure.
     *
     * @param {Highcharts.ChartCallbackFunction} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded. Defining a
     *        [chart.events.load](https://api.highcharts.com/highcharts/chart.events.load)
     *        handler is equivalent.
     *
     * @return {Highcharts.GanttChart}
     *         Returns the Chart object.
     */
    function ganttChart(a, b, c) {
        return new GanttChart(a, b, c);
    }
    GanttChart.ganttChart = ganttChart;
    /* eslint-enable jsdoc/check-param-names */
})(GanttChart || (GanttChart = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chart_GanttChart = (GanttChart);

;// external ["./modules/accessibility.src.js","default","Navigator"]
const accessibility_src_js_default_Navigator_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_0ce86fde__["default"].Navigator;
var accessibility_src_js_default_Navigator_default = /*#__PURE__*/__webpack_require__.n(accessibility_src_js_default_Navigator_namespaceObject);
;// external ["./modules/accessibility.src.js","default","RangeSelector"]
const accessibility_src_js_default_RangeSelector_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_0ce86fde__["default"].RangeSelector;
var accessibility_src_js_default_RangeSelector_default = /*#__PURE__*/__webpack_require__.n(accessibility_src_js_default_RangeSelector_namespaceObject);
;// external ["./modules/accessibility.src.js","default","Scrollbar"]
const accessibility_src_js_default_Scrollbar_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_0ce86fde__["default"].Scrollbar;
var accessibility_src_js_default_Scrollbar_default = /*#__PURE__*/__webpack_require__.n(accessibility_src_js_default_Scrollbar_namespaceObject);
;// external ["./modules/gantt.src.js","default","Pathfinder"]
const gantt_src_js_default_Pathfinder_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_gantt_src_js_671dcdef__["default"].Pathfinder;
var gantt_src_js_default_Pathfinder_default = /*#__PURE__*/__webpack_require__.n(gantt_src_js_default_Pathfinder_namespaceObject);
;// ./code/es-modules/masters/modules/pathfinder.src.js
/**
 * @license Highcharts Gantt JS v12.4.0-modified (2025-11-11)
 * @module highcharts/modules/pathfinder
 * @requires highcharts
 *
 * Pathfinder
 *
 * (c) 2016-2025 Øystein Moseng
 *
 * License: www.highcharts.com/license
 */




const pathfinder_src_G = (external_highcharts_src_js_default_default());
pathfinder_src_G.Pathfinder = pathfinder_src_G.Pathfinder || (gantt_src_js_default_Pathfinder_default());
Extensions_ArrowSymbols.compose(pathfinder_src_G.SVGRenderer);
pathfinder_src_G.Pathfinder.compose(pathfinder_src_G.Chart, pathfinder_src_G.Point);
/* harmony default export */ const pathfinder_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/Extensions/StaticScale.js
/* *
 *
 *  (c) 2016-2025 Torstein Honsi, Lars Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: StaticScale_addEvent, defined: StaticScale_defined, isNumber: StaticScale_isNumber } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/** @private */
function StaticScale_compose(AxisClass, ChartClass) {
    const chartProto = ChartClass.prototype;
    if (!chartProto.adjustHeight) {
        StaticScale_addEvent(AxisClass, 'afterSetOptions', StaticScale_onAxisAfterSetOptions);
        chartProto.adjustHeight = chartAdjustHeight;
        StaticScale_addEvent(ChartClass, 'render', chartProto.adjustHeight);
    }
}
/** @private */
function StaticScale_onAxisAfterSetOptions() {
    const chartOptions = this.chart.userOptions.chart;
    if (!this.horiz &&
        StaticScale_isNumber(this.options.staticScale) &&
        (!chartOptions?.height ||
            chartOptions.scrollablePlotArea?.minHeight)) {
        this.staticScale = this.options.staticScale;
    }
}
/** @private */
function chartAdjustHeight() {
    const chart = this;
    if (chart.redrawTrigger !== 'adjustHeight') {
        for (const axis of (chart.axes || [])) {
            const chart = axis.chart, staticScale = axis.options.staticScale;
            if (axis.staticScale &&
                staticScale &&
                StaticScale_defined(axis.min) &&
                StaticScale_defined(axis.max)) {
                let height = (axis.brokenAxis?.unitLength ??
                    (axis.max + axis.tickInterval - axis.min)) * (staticScale);
                // Minimum height is 1 x staticScale.
                height = Math.max(height, staticScale);
                const diff = height - chart.plotHeight;
                if (!chart.scrollablePixelsY && Math.abs(diff) >= 1) {
                    chart.plotHeight = height;
                    chart.redrawTrigger = 'adjustHeight';
                    chart.setSize(void 0, chart.chartHeight + diff, chart.initiatedScale ? void 0 : false);
                }
                // Make sure clip rects have the right height before initial
                // animation.
                axis.series.forEach(function (series) {
                    const clipRect = series.sharedClipKey &&
                        chart.sharedClips[series.sharedClipKey];
                    if (clipRect) {
                        clipRect.attr(chart.inverted ? {
                            width: chart.plotHeight
                        } : {
                            height: chart.plotHeight
                        });
                    }
                });
            }
        }
        this.initiatedScale = true;
    }
    this.redrawTrigger = void 0;
}
/* *
 *
 *  Default Export
 *
 * */
const StaticScale = {
    compose: StaticScale_compose
};
/* harmony default export */ const Extensions_StaticScale = (StaticScale);
/* *
 *
 *  API Options
 *
 * */
/**
 * For vertical axes only. Setting the static scale ensures that each tick unit
 * is translated into a fixed pixel height. For example, setting the static
 * scale to 24 results in each Y axis category taking up 24 pixels, and the
 * height of the chart adjusts. Adding or removing items will make the chart
 * resize.
 *
 * @sample gantt/xrange-series/demo/
 *         X-range series with static scale
 *
 * @type      {number}
 * @default   50
 * @since     6.2.0
 * @product   gantt
 * @apioption yAxis.staticScale
 */
''; // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/static-scale.src.js
/**
 * @license Highcharts Gantt JS v12.4.0-modified (2025-11-11)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2025 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */



const static_scale_src_G = (external_highcharts_src_js_default_default());
Extensions_StaticScale.compose(static_scale_src_G.Axis, static_scale_src_G.Chart);
/* harmony default export */ const static_scale_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// external ["./modules/gantt.src.js","default","Series","types","xrange"]
const gantt_src_js_default_Series_types_xrange_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_gantt_src_js_671dcdef__["default"].Series.types.xrange;
var gantt_src_js_default_Series_types_xrange_default = /*#__PURE__*/__webpack_require__.n(gantt_src_js_default_Series_types_xrange_namespaceObject);
;// ./code/es-modules/masters/modules/xrange.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-11)
 * @module highcharts/modules/xrange
 * @requires highcharts
 *
 * X-range series
 *
 * (c) 2010-2025 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */



const xrange_src_G = (external_highcharts_src_js_default_default());
gantt_src_js_default_Series_types_xrange_default().compose(xrange_src_G.Axis);
/* harmony default export */ const xrange_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/Series/Gantt/GanttPoint.js
/* *
 *
 *  (c) 2016-2025 Highsoft AS
 *
 *  Author: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { xrange: { prototype: { pointClass: XRangePoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class GanttPoint extends XRangePoint {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    static setGanttPointAliases(options, chart) {
        options.x = options.start = chart.time.parse(options.start ?? options.x);
        options.x2 = options.end = chart.time.parse(options.end ?? options.x2);
        options.partialFill = options.completed =
            options.completed ?? options.partialFill;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies the options containing the x and y data and possible some
     * extra properties. This is called on point init or from point.update.
     *
     * @private
     * @function Highcharts.Point#applyOptions
     *
     * @param {Object} options
     *        The point options
     *
     * @param {number} x
     *        The x value
     *
     * @return {Highcharts.Point}
     *         The Point instance
     */
    applyOptions(options, x) {
        const ganttPoint = super.applyOptions(options, x);
        GanttPoint.setGanttPointAliases(ganttPoint, ganttPoint.series.chart);
        this.isNull = !this.isValid?.();
        this.formatPrefix = this.isNull ? 'null' : 'point'; // #23605
        return ganttPoint;
    }
    isValid() {
        return ((typeof this.start === 'number' ||
            typeof this.x === 'number') &&
            (typeof this.end === 'number' ||
                typeof this.x2 === 'number' ||
                this.milestone));
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Gantt_GanttPoint = (GanttPoint);

;// ./code/es-modules/Series/Gantt/GanttSeriesDefaults.js
/* *
 *
 *  (c) 2016-2025 Highsoft AS
 *
 *  Author: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { isNumber: GanttSeriesDefaults_isNumber } = (external_highcharts_src_js_default_default());
/* *
 *
 *  API Options
 *
 * */
/**
 * A `gantt` series. If the [type](#series.gantt.type) option is not specified,
 * it is inherited from [chart.type](#chart.type).
 *
 * @extends      plotOptions.xrange
 * @product      gantt
 * @requires     highcharts-gantt
 * @optionparent plotOptions.gantt
 */
const GanttSeriesDefaults = {
    // Options - default options merged with parent
    grouping: false,
    dataLabels: {
        enabled: true
    },
    tooltip: {
        headerFormat: '<span style="font-size: 0.8em">{series.name}</span><br/>',
        pointFormat: null,
        pointFormatter: function () {
            const point = this, series = point.series, xAxis = series.xAxis, formats = series.tooltipOptions.dateTimeLabelFormats, startOfWeek = xAxis.options.startOfWeek, ttOptions = series.tooltipOptions, milestone = point.options.milestone;
            let format = ttOptions.xDateFormat, retVal = '<b>' + (point.name || point.yCategory) + '</b>';
            if (ttOptions.pointFormat) {
                return point.tooltipFormatter(ttOptions.pointFormat);
            }
            if (!format && GanttSeriesDefaults_isNumber(point.start)) {
                format = series.chart.time.getDateFormat(xAxis.closestPointRange, point.start, startOfWeek, formats || {});
            }
            const start = series.chart.time.dateFormat(format, point.start), end = series.chart.time.dateFormat(format, point.end);
            retVal += '<br/>';
            if (!milestone) {
                retVal += 'Start: ' + start + '<br/>';
                retVal += 'End: ' + end + '<br/>';
            }
            else {
                retVal += start + '<br/>';
            }
            return retVal;
        }
    },
    connectors: {
        type: 'simpleConnect',
        /**
         * @declare Highcharts.ConnectorsAnimationOptionsObject
         */
        animation: {
            reversed: true // Dependencies go from child to parent
        },
        radius: 0,
        startMarker: {
            enabled: true,
            symbol: 'arrow-filled',
            radius: 4,
            fill: '#fa0',
            align: 'left'
        },
        endMarker: {
            enabled: false, // Only show arrow on the dependent task
            align: 'right'
        }
    }
};
/**
 * A `gantt` series.
 *
 * @extends   series,plotOptions.gantt
 * @excluding boostThreshold, dashStyle, findNearestPointBy,
 *            getExtremesFromAll, marker, negativeColor, pointInterval,
 *            pointIntervalUnit, pointPlacement, pointStart
 * @product   gantt
 * @requires  highcharts-gantt
 * @apioption series.gantt
 */
/**
 * Data for a Gantt series.
 *
 * @declare   Highcharts.GanttPointOptionsObject
 * @type      {Array<*>}
 * @extends   series.xrange.data
 * @excluding className, connect, dataLabels, events,
 *            partialFill, selected, x, x2
 * @product   gantt
 * @apioption series.gantt.data
 */
/**
 * Whether the grid node belonging to this point should start as collapsed. Used
 * in axes of type treegrid.
 *
 * @sample {gantt} gantt/treegrid-axis/collapsed/
 *         Start as collapsed
 *
 * @type      {boolean}
 * @default   false
 * @product   gantt
 * @apioption series.gantt.data.collapsed
 */
/**
 * The start time of a task. May be a timestamp or a date string.
 *
 * @type      {number|string}
 * @product   gantt
 * @apioption series.gantt.data.start
 */
/**
 * The end time of a task. May be a timestamp or a date string.
 *
 * @type      {number|string}
 * @product   gantt
 * @apioption series.gantt.data.end
 */
/**
 * The Y value of a task.
 *
 * @type      {number}
 * @product   gantt
 * @apioption series.gantt.data.y
 */
/**
 * The name of a task. If a `treegrid` y-axis is used (default in Gantt charts),
 * this will be picked up automatically, and used to calculate the y-value.
 *
 * @type      {string}
 * @product   gantt
 * @apioption series.gantt.data.name
 */
/**
 * Progress indicator, how much of the task completed. If it is a number, the
 * `fill` will be applied automatically.
 *
 * @sample {gantt} gantt/demo/progress-indicator
 *         Progress indicator
 *
 * @type      {number|*}
 * @extends   series.xrange.data.partialFill
 * @product   gantt
 * @apioption series.gantt.data.completed
 */
/**
 * The amount of the progress indicator, ranging from 0 (not started) to 1
 * (finished).
 *
 * @type      {number}
 * @default   0
 * @apioption series.gantt.data.completed.amount
 */
/**
 * The fill of the progress indicator. Defaults to a darkened variety of the
 * main color.
 *
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @apioption series.gantt.data.completed.fill
 */
/**
 * The ID of the point (task) that this point depends on in Gantt charts.
 * Aliases [connect](series.xrange.data.connect). Can also be an object,
 * specifying further connecting [options](series.gantt.connectors) between the
 * points. Multiple connections can be specified by providing an array.
 *
 * @sample gantt/demo/project-management
 *         Dependencies
 * @sample gantt/pathfinder/demo
 *         Different connection types
 *
 * @type      {string|Array<string|*>|*}
 * @extends   series.xrange.data.connect
 * @since     6.2.0
 * @product   gantt
 * @apioption series.gantt.data.dependency
 */
/**
 * Whether this point is a milestone. If so, only the `start` option is handled,
 * while `end` is ignored.
 *
 * @sample gantt/gantt/milestones
 *         Milestones
 *
 * @type      {boolean}
 * @since     6.2.0
 * @product   gantt
 * @apioption series.gantt.data.milestone
 */
/**
 * The ID of the parent point (task) of this point in Gantt charts.
 *
 * @sample gantt/demo/subtasks
 *         Gantt chart with subtasks
 *
 * @type      {string}
 * @since     6.2.0
 * @product   gantt
 * @apioption series.gantt.data.parent
 */
/**
 * @excluding afterAnimate
 * @apioption series.gantt.events
 */
''; // Detachs doclets above
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Gantt_GanttSeriesDefaults = (GanttSeriesDefaults);

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

;// ./code/es-modules/Core/Axis/GridAxis.js
/* *
 *
 *  (c) 2016 Highsoft AS
 *  Authors: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { dateFormats } = (external_highcharts_src_js_default_default());

const { addEvent: GridAxis_addEvent, defined: GridAxis_defined, erase: GridAxis_erase, find: GridAxis_find, isArray: GridAxis_isArray, isNumber: GridAxis_isNumber, merge: GridAxis_merge, pick: GridAxis_pick, timeUnits: GridAxis_timeUnits, wrap: GridAxis_wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Enums
 *
 * */
/**
 * Enum for which side the axis is on. Maps to axis.side.
 * @private
 */
var GridAxisSide;
(function (GridAxisSide) {
    GridAxisSide[GridAxisSide["top"] = 0] = "top";
    GridAxisSide[GridAxisSide["right"] = 1] = "right";
    GridAxisSide[GridAxisSide["bottom"] = 2] = "bottom";
    GridAxisSide[GridAxisSide["left"] = 3] = "left";
})(GridAxisSide || (GridAxisSide = {}));
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function argsToArray(args) {
    return Array.prototype.slice.call(args, 1);
}
/**
 * @private
 */
function GridAxis_isObject(x) {
    // Always use strict mode
    return external_highcharts_src_js_default_default().isObject(x, true);
}
/**
 * @private
 */
function applyGridOptions(axis) {
    const options = axis.options;
    // Center-align by default
    /*
    if (!options.labels) {
        options.labels = {};
    }
    */
    options.labels.align = GridAxis_pick(options.labels.align, 'center');
    // @todo: Check against tickLabelPlacement between/on etc
    /* Prevents adding the last tick label if the axis is not a category
       axis.
       Since numeric labels are normally placed at starts and ends of a
       range of value, and this module makes the label point at the value,
       an "extra" label would appear. */
    if (!axis.categories) {
        options.showLastLabel = false;
    }
    // Prevents rotation of labels when squished, as rotating them would not
    // help.
    axis.labelRotation = 0;
    options.labels.rotation = 0;
    // Allow putting ticks closer than their data points.
    options.minTickInterval = 1;
}
/**
 * Extends axis class with grid support.
 * @private
 */
function GridAxis_compose(AxisClass, ChartClass, TickClass) {
    if (!AxisClass.keepProps.includes('grid')) {
        AxisClass.keepProps.push('grid');
        AxisClass.prototype.getMaxLabelDimensions = getMaxLabelDimensions;
        GridAxis_wrap(AxisClass.prototype, 'unsquish', wrapUnsquish);
        GridAxis_wrap(AxisClass.prototype, 'getOffset', wrapGetOffset);
        // Add event handlers
        GridAxis_addEvent(AxisClass, 'init', onInit);
        GridAxis_addEvent(AxisClass, 'afterGetTitlePosition', onAfterGetTitlePosition);
        GridAxis_addEvent(AxisClass, 'afterInit', onAfterInit);
        GridAxis_addEvent(AxisClass, 'afterRender', onAfterRender);
        GridAxis_addEvent(AxisClass, 'afterSetAxisTranslation', onAfterSetAxisTranslation);
        GridAxis_addEvent(AxisClass, 'afterSetOptions', onAfterSetOptions);
        GridAxis_addEvent(AxisClass, 'afterSetOptions', onAfterSetOptions2);
        GridAxis_addEvent(AxisClass, 'afterSetScale', onAfterSetScale);
        GridAxis_addEvent(AxisClass, 'afterTickSize', onAfterTickSize);
        GridAxis_addEvent(AxisClass, 'trimTicks', onTrimTicks);
        GridAxis_addEvent(AxisClass, 'destroy', onDestroy);
        GridAxis_addEvent(ChartClass, 'afterSetChartSize', onChartAfterSetChartSize);
        GridAxis_addEvent(TickClass, 'afterGetLabelPosition', onTickAfterGetLabelPosition);
        GridAxis_addEvent(TickClass, 'labelFormat', onTickLabelFormat);
    }
    return AxisClass;
}
/**
 * Get the largest label width and height.
 *
 * @private
 * @function Highcharts.Axis#getMaxLabelDimensions
 *
 * @param {Highcharts.Dictionary<Highcharts.Tick>} ticks
 * All the ticks on one axis.
 *
 * @param {Array<number|string>} tickPositions
 * All the tick positions on one axis.
 *
 * @return {Highcharts.SizeObject}
 * Object containing the properties height and width.
 *
 * @todo Move this to the generic axis implementation, as it is used there.
 */
function getMaxLabelDimensions(ticks, tickPositions) {
    const dimensions = {
        width: 0,
        height: 0
    };
    tickPositions.forEach(function (pos) {
        const tick = ticks[pos];
        let labelHeight = 0, labelWidth = 0, label;
        if (GridAxis_isObject(tick)) {
            label = GridAxis_isObject(tick.label) ? tick.label : {};
            // Find width and height of label
            labelHeight = label.getBBox ? label.getBBox().height : 0;
            if (label.textStr && !GridAxis_isNumber(label.textPxLength)) {
                label.textPxLength = label.getBBox().width;
            }
            labelWidth = GridAxis_isNumber(label.textPxLength) ?
                // Math.round ensures crisp lines
                Math.round(label.textPxLength) :
                0;
            if (label.textStr) {
                // Set the tickWidth same as the label width after ellipsis
                // applied #10281
                labelWidth = Math.round(label.getBBox().width);
            }
            // Update the result if width and/or height are larger
            dimensions.height = Math.max(labelHeight, dimensions.height);
            dimensions.width = Math.max(labelWidth, dimensions.width);
        }
    });
    // For tree grid, add indentation
    if (this.type === 'treegrid' &&
        this.treeGrid &&
        this.treeGrid.mapOfPosToGridNode) {
        const treeDepth = this.treeGrid.mapOfPosToGridNode[-1].height || 0;
        dimensions.width += (this.options.labels.indentation *
            (treeDepth - 1));
    }
    return dimensions;
}
/**
 * Handle columns and getOffset.
 * @private
 */
function wrapGetOffset(proceed) {
    const { grid } = this, 
    // On the left side we handle the columns first because the offset is
    // calculated from the plot area and out
    columnsFirst = this.side === 3;
    if (!columnsFirst) {
        proceed.apply(this);
    }
    if (!grid?.isColumn) {
        let columns = grid?.columns || [];
        if (columnsFirst) {
            columns = columns.slice().reverse();
        }
        columns
            .forEach((column) => {
            column.getOffset();
        });
    }
    if (columnsFirst) {
        proceed.apply(this);
    }
}
/**
 * @private
 */
function onAfterGetTitlePosition(e) {
    const axis = this;
    const options = axis.options;
    const gridOptions = options.grid || {};
    if (gridOptions.enabled === true) {
        // Compute anchor points for each of the title align options
        const { axisTitle, height: axisHeight, horiz, left: axisLeft, offset, opposite, options, top: axisTop, width: axisWidth } = axis;
        const tickSize = axis.tickSize();
        const titleWidth = axisTitle?.getBBox().width;
        const xOption = options.title.x;
        const yOption = options.title.y;
        const titleMargin = GridAxis_pick(options.title.margin, horiz ? 5 : 10);
        const titleFontSize = axisTitle ? axis.chart.renderer.fontMetrics(axisTitle).f : 0;
        const crispCorr = tickSize ? tickSize[0] / 2 : 0;
        // TODO account for alignment
        // the position in the perpendicular direction of the axis
        const offAxis = ((horiz ? axisTop + axisHeight : axisLeft) +
            (horiz ? 1 : -1) * // Horizontal axis reverses the margin
                (opposite ? -1 : 1) * // So does opposite axes
                crispCorr +
            (axis.side === GridAxisSide.bottom ? titleFontSize : 0));
        e.titlePosition.x = horiz ?
            axisLeft - (titleWidth || 0) / 2 - titleMargin + xOption :
            offAxis + (opposite ? axisWidth : 0) + offset + xOption;
        e.titlePosition.y = horiz ?
            (offAxis -
                (opposite ? axisHeight : 0) +
                (opposite ? titleFontSize : -titleFontSize) / 2 +
                offset +
                yOption) :
            axisTop - titleMargin + yOption;
    }
}
/**
 * @private
 */
function onAfterInit() {
    const axis = this;
    const { chart, options: { grid: gridOptions = {} }, userOptions } = axis;
    if (gridOptions.enabled) {
        applyGridOptions(axis);
    }
    if (gridOptions.columns) {
        const columns = axis.grid.columns = [];
        let columnIndex = axis.grid.columnIndex = 0;
        // Handle columns, each column is a grid axis
        while (++columnIndex < gridOptions.columns.length) {
            const columnOptions = GridAxis_merge(userOptions, gridOptions.columns[columnIndex], {
                isInternal: true,
                linkedTo: 0,
                // Disable by default the scrollbar on the grid axis
                scrollbar: {
                    enabled: false
                }
            }, 
            // Avoid recursion
            {
                grid: {
                    columns: void 0
                }
            });
            const column = new (external_highcharts_src_js_default_Axis_default())(axis.chart, columnOptions, 'yAxis');
            column.grid.isColumn = true;
            column.grid.columnIndex = columnIndex;
            // Remove column axis from chart axes array, and place it
            // in the columns array.
            GridAxis_erase(chart.axes, column);
            GridAxis_erase(chart[axis.coll] || [], column);
            columns.push(column);
        }
    }
}
/**
 * Draw an extra line on the far side of the outermost axis,
 * creating floor/roof/wall of a grid. And some padding.
 * ```
 * Make this:
 *             (axis.min) __________________________ (axis.max)
 *                           |    |    |    |    |
 * Into this:
 *             (axis.min) __________________________ (axis.max)
 *                        ___|____|____|____|____|__
 * ```
 * @private
 */
function onAfterRender() {
    const axis = this, { axisTitle, grid, options } = axis, gridOptions = options.grid || {};
    if (gridOptions.enabled === true) {
        const min = axis.min || 0, max = axis.max || 0, firstTick = axis.ticks[axis.tickPositions[0]];
        // Adjust the title max width to the column width (#19657)
        if (axisTitle &&
            !axis.chart.styledMode &&
            firstTick?.slotWidth &&
            !axis.options.title.style.width) {
            axisTitle.css({ width: `${firstTick.slotWidth}px` });
        }
        // @todo actual label padding (top, bottom, left, right)
        axis.maxLabelDimensions = axis.getMaxLabelDimensions(axis.ticks, axis.tickPositions);
        // Remove right wall before rendering if updating
        if (axis.rightWall) {
            axis.rightWall.destroy();
        }
        /*
        Draw an extra axis line on outer axes
                    >
        Make this:    |______|______|______|___

                    > _________________________
        Into this:    |______|______|______|__|
                                                */
        if (axis.grid?.isOuterAxis() && axis.axisLine) {
            const lineWidth = options.lineWidth;
            if (lineWidth) {
                const linePath = axis.getLinePath(lineWidth), startPoint = linePath[0], endPoint = linePath[1], 
                // Negate distance if top or left axis
                // Subtract 1px to draw the line at the end of the tick
                tickLength = (axis.tickSize('tick') || [1])[0], distance = tickLength * ((axis.side === GridAxisSide.top ||
                    axis.side === GridAxisSide.left) ? -1 : 1);
                // If axis is horizontal, reposition line path vertically
                if (startPoint[0] === 'M' && endPoint[0] === 'L') {
                    if (axis.horiz) {
                        startPoint[2] += distance;
                        endPoint[2] += distance;
                    }
                    else {
                        startPoint[1] += distance;
                        endPoint[1] += distance;
                    }
                }
                // If it doesn't exist, add an upper and lower border
                // for the vertical grid axis.
                if (!axis.horiz && axis.chart.marginRight) {
                    const upperBorderStartPoint = startPoint, upperBorderEndPoint = [
                        'L',
                        axis.left,
                        startPoint[2] || 0
                    ], upperBorderPath = [
                        upperBorderStartPoint,
                        upperBorderEndPoint
                    ], lowerBorderEndPoint = [
                        'L',
                        axis.chart.chartWidth - axis.chart.marginRight,
                        axis.toPixels(max + axis.tickmarkOffset)
                    ], lowerBorderStartPoint = [
                        'M',
                        endPoint[1] || 0,
                        axis.toPixels(max + axis.tickmarkOffset)
                    ], lowerBorderPath = [
                        lowerBorderStartPoint,
                        lowerBorderEndPoint
                    ];
                    if (!axis.grid.upperBorder && min % 1 !== 0) {
                        axis.grid.upperBorder = axis.grid.renderBorder(upperBorderPath);
                    }
                    if (axis.grid.upperBorder) {
                        axis.grid.upperBorder.attr({
                            stroke: options.lineColor,
                            'stroke-width': options.lineWidth
                        });
                        axis.grid.upperBorder.animate({
                            d: upperBorderPath
                        });
                    }
                    if (!axis.grid.lowerBorder && max % 1 !== 0) {
                        axis.grid.lowerBorder = axis.grid.renderBorder(lowerBorderPath);
                    }
                    if (axis.grid.lowerBorder) {
                        axis.grid.lowerBorder.attr({
                            stroke: options.lineColor,
                            'stroke-width': options.lineWidth
                        });
                        axis.grid.lowerBorder.animate({
                            d: lowerBorderPath
                        });
                    }
                }
                // Render an extra line parallel to the existing axes, to
                // close the grid.
                if (!axis.grid.axisLineExtra) {
                    axis.grid.axisLineExtra = axis.grid.renderBorder(linePath);
                }
                else {
                    axis.grid.axisLineExtra.attr({
                        stroke: options.lineColor,
                        'stroke-width': options.lineWidth
                    });
                    axis.grid.axisLineExtra.animate({
                        d: linePath
                    });
                }
                // Show or hide the line depending on options.showEmpty
                axis.axisLine[axis.showAxis ? 'show' : 'hide']();
            }
        }
        (grid?.columns || []).forEach((column) => column.render());
        // Manipulate the tick mark visibility
        // based on the axis.max- allows smooth scrolling.
        if (!axis.horiz &&
            axis.chart.hasRendered &&
            (axis.scrollbar || axis.linkedParent?.scrollbar) &&
            axis.tickPositions.length) {
            const tickmarkOffset = axis.tickmarkOffset, lastTick = axis.tickPositions[axis.tickPositions.length - 1], firstTick = axis.tickPositions[0];
            let label, tickMark;
            while ((label = axis.hiddenLabels.pop()) && label.element) {
                label.show(); // #15453
            }
            while ((tickMark = axis.hiddenMarks.pop()) &&
                tickMark.element) {
                tickMark.show(); // #16439
            }
            // Hide/show first tick label.
            label = axis.ticks[firstTick].label;
            if (label) {
                if (min - firstTick > tickmarkOffset) {
                    axis.hiddenLabels.push(label.hide());
                }
                else {
                    label.show();
                }
            }
            // Hide/show last tick mark/label.
            label = axis.ticks[lastTick].label;
            if (label) {
                if (lastTick - max > tickmarkOffset) {
                    axis.hiddenLabels.push(label.hide());
                }
                else {
                    label.show();
                }
            }
            const mark = axis.ticks[lastTick].mark;
            if (mark &&
                lastTick - max < tickmarkOffset &&
                lastTick - max > 0 && axis.ticks[lastTick].isLast) {
                axis.hiddenMarks.push(mark.hide());
            }
        }
    }
}
/**
 * @private
 */
function onAfterSetAxisTranslation() {
    const axis = this;
    const tickInfo = axis.tickPositions?.info;
    const options = axis.options;
    const gridOptions = options.grid || {};
    const userLabels = axis.userOptions.labels || {};
    // Fire this only for the Gantt type chart, #14868.
    if (gridOptions.enabled) {
        if (axis.horiz) {
            axis.series.forEach((series) => {
                series.options.pointRange = 0;
            });
            // Lower level time ticks, like hours or minutes, represent
            // points in time and not ranges. These should be aligned
            // left in the grid cell by default. The same applies to
            // years of higher order.
            if (tickInfo &&
                options.dateTimeLabelFormats &&
                options.labels &&
                !GridAxis_defined(userLabels.align) &&
                (options.dateTimeLabelFormats[tickInfo.unitName]
                    .range === false ||
                    tickInfo.count > 1 // Years
                )) {
                options.labels.align = 'left';
                if (!GridAxis_defined(userLabels.x)) {
                    options.labels.x = 3;
                }
            }
        }
        else {
            // Don't trim ticks which not in min/max range but
            // they are still in the min/max plus tickInterval.
            if (this.type !== 'treegrid' &&
                axis.grid &&
                axis.grid.columns) {
                this.minPointOffset = this.tickInterval;
            }
        }
    }
}
/**
 * Creates a left and right wall on horizontal axes:
 * - Places leftmost tick at the start of the axis, to create a left
 *   wall
 * - Ensures that the rightmost tick is at the end of the axis, to
 *   create a right wall.
 * @private
 */
function onAfterSetOptions(e) {
    const options = this.options, userOptions = e.userOptions, gridOptions = ((options && GridAxis_isObject(options.grid)) ? options.grid : {});
    let gridAxisOptions;
    if (gridOptions.enabled === true) {
        // Merge the user options into default grid axis options so
        // that when a user option is set, it takes precedence.
        gridAxisOptions = GridAxis_merge(true, {
            className: ('highcharts-grid-axis ' + (userOptions.className || '')),
            dateTimeLabelFormats: {
                hour: {
                    list: ['%[HM]', '%[H]']
                },
                day: {
                    list: ['%[AeB]', '%[aeb]', '%[E]']
                },
                week: {
                    list: ['Week %W', 'W%W']
                },
                month: {
                    list: ['%[B]', '%[b]', '%o']
                }
            },
            grid: {
                borderWidth: 1
            },
            labels: {
                padding: 2,
                style: {
                    fontSize: '0.9em'
                }
            },
            margin: 0,
            title: {
                text: null,
                reserveSpace: false,
                rotation: 0,
                style: {
                    textOverflow: 'ellipsis'
                }
            },
            // In a grid axis, only allow one unit of certain types,
            // for example we shouldn't have one grid cell spanning
            // two days.
            units: [[
                    'millisecond', // Unit name
                    [1, 10, 100]
                ], [
                    'second',
                    [1, 10]
                ], [
                    'minute',
                    [1, 5, 15]
                ], [
                    'hour',
                    [1, 6]
                ], [
                    'day',
                    [1]
                ], [
                    'week',
                    [1]
                ], [
                    'month',
                    [1]
                ], [
                    'year',
                    null
                ]]
        }, userOptions);
        // X-axis specific options
        if (this.coll === 'xAxis') {
            // For linked axes, tickPixelInterval is used only if
            // the tickPositioner below doesn't run or returns
            // undefined (like multiple years)
            if (GridAxis_defined(userOptions.linkedTo) &&
                !GridAxis_defined(userOptions.tickPixelInterval)) {
                gridAxisOptions.tickPixelInterval = 350;
            }
            // For the secondary grid axis, use the primary axis'
            // tick intervals and return ticks one level higher.
            if (
            // Check for tick pixel interval in options
            !GridAxis_defined(userOptions.tickPixelInterval) &&
                // Only for linked axes
                GridAxis_defined(userOptions.linkedTo) &&
                !GridAxis_defined(userOptions.tickPositioner) &&
                !GridAxis_defined(userOptions.tickInterval) &&
                !GridAxis_defined(userOptions.units)) {
                gridAxisOptions.tickPositioner = function (min, max) {
                    const parentInfo = this.linkedParent?.tickPositions?.info;
                    if (parentInfo) {
                        const units = (gridAxisOptions.units || []);
                        let unitIdx, count = 1, unitName = 'year';
                        for (let i = 0; i < units.length; i++) {
                            const unit = units[i];
                            if (unit && unit[0] === parentInfo.unitName) {
                                unitIdx = i;
                                break;
                            }
                        }
                        // Get the first allowed count on the next unit.
                        const unit = (GridAxis_isNumber(unitIdx) && units[unitIdx + 1]);
                        if (unit) {
                            unitName = unit[0] || 'year';
                            const counts = unit[1];
                            count = counts?.[0] || 1;
                            // In case the base X axis shows years, make the
                            // secondary axis show ten times the years (#11427)
                        }
                        else if (parentInfo.unitName === 'year') {
                            // `unitName` is 'year'
                            count = parentInfo.count * 10;
                        }
                        const unitRange = GridAxis_timeUnits[unitName];
                        this.tickInterval = unitRange * count;
                        return this.chart.time.getTimeTicks({ unitRange, count, unitName }, min, max, this.options.startOfWeek);
                    }
                };
            }
        }
        // Now merge the combined options into the axis options
        GridAxis_merge(true, this.options, gridAxisOptions);
        if (this.horiz) {
            /*               _________________________
            Make this:    ___|_____|_____|_____|__|
                            ^                     ^
                            _________________________
            Into this:    |_____|_____|_____|_____|
                                ^                 ^    */
            options.minPadding = GridAxis_pick(userOptions.minPadding, 0);
            options.maxPadding = GridAxis_pick(userOptions.maxPadding, 0);
        }
        // If borderWidth is set, then use its value for tick and
        // line width.
        if (GridAxis_isNumber(options.grid.borderWidth)) {
            options.tickWidth = options.lineWidth =
                gridOptions.borderWidth;
        }
    }
}
/**
 * @private
 */
function onAfterSetOptions2(e) {
    const axis = this;
    const userOptions = e.userOptions;
    const gridOptions = userOptions?.grid || {};
    const columns = gridOptions.columns;
    // Add column options to the parent axis. Children has their column options
    // set on init in onGridAxisAfterInit.
    if (gridOptions.enabled && columns) {
        GridAxis_merge(true, axis.options, columns[0]);
    }
}
/**
 * Handle columns and setScale.
 * @private
 */
function onAfterSetScale() {
    const axis = this;
    (axis.grid.columns || []).forEach((column) => column.setScale());
}
/**
 * Draw vertical axis ticks extra long to create cell floors and roofs.
 * Overrides the tickLength for vertical axes.
 * @private
 */
function onAfterTickSize(e) {
    const { horiz, maxLabelDimensions, options: { grid: gridOptions = {} } } = this;
    if (gridOptions.enabled && maxLabelDimensions) {
        const labelPadding = this.options.labels.distance * 2;
        const distance = horiz ?
            (gridOptions.cellHeight ||
                labelPadding + maxLabelDimensions.height) :
            labelPadding + maxLabelDimensions.width;
        if (GridAxis_isArray(e.tickSize)) {
            e.tickSize[0] = distance;
        }
        else {
            e.tickSize = [distance, 0];
        }
    }
}
/**
 * @private
 */
function onChartAfterSetChartSize() {
    this.axes.forEach((axis) => {
        (axis.grid?.columns || []).forEach((column) => {
            column.setAxisSize();
            column.setAxisTranslation();
        });
    });
}
/**
 * @private
 */
function onDestroy(e) {
    const { grid } = this;
    (grid.columns || []).forEach((column) => column.destroy(e.keepEvents));
    grid.columns = void 0;
}
/**
 * Wraps axis init to draw cell walls on vertical axes.
 * @private
 */
function onInit(e) {
    const axis = this;
    const userOptions = e.userOptions || {};
    const gridOptions = userOptions.grid || {};
    if (gridOptions.enabled && GridAxis_defined(gridOptions.borderColor)) {
        userOptions.tickColor = userOptions.lineColor = (gridOptions.borderColor);
    }
    if (!axis.grid) {
        axis.grid = new GridAxisAdditions(axis);
    }
    axis.hiddenLabels = [];
    axis.hiddenMarks = [];
}
/**
 * Center tick labels in cells.
 * @private
 */
function onTickAfterGetLabelPosition(e) {
    const tick = this, label = tick.label, axis = tick.axis, reversed = axis.reversed, chart = axis.chart, options = axis.options, gridOptions = options.grid || {}, labelOpts = axis.options.labels, align = labelOpts.align, 
    // `verticalAlign` is currently not supported for axis.labels.
    verticalAlign = 'middle', // LabelOpts.verticalAlign,
    side = GridAxisSide[axis.side], tickmarkOffset = e.tickmarkOffset, tickPositions = axis.tickPositions, tickPos = tick.pos - tickmarkOffset, nextTickPos = (GridAxis_isNumber(tickPositions[e.index + 1]) ?
        tickPositions[e.index + 1] - tickmarkOffset :
        (axis.max || 0) + tickmarkOffset), tickSize = axis.tickSize('tick'), tickWidth = tickSize ? tickSize[0] : 0, crispCorr = tickSize ? tickSize[1] / 2 : 0;
    // Only center tick labels in grid axes
    if (gridOptions.enabled === true) {
        let bottom, top, left, right;
        // Calculate top and bottom positions of the cell.
        if (side === 'top') {
            bottom = axis.top + axis.offset;
            top = bottom - tickWidth;
        }
        else if (side === 'bottom') {
            top = chart.chartHeight - axis.bottom + axis.offset;
            bottom = top + tickWidth;
        }
        else {
            bottom = axis.top + axis.len - (axis.translate(reversed ? nextTickPos : tickPos) || 0);
            top = axis.top + axis.len - (axis.translate(reversed ? tickPos : nextTickPos) || 0);
        }
        // Calculate left and right positions of the cell.
        if (side === 'right') {
            left = chart.chartWidth - axis.right + axis.offset;
            right = left + tickWidth;
        }
        else if (side === 'left') {
            right = axis.left + axis.offset;
            left = right - tickWidth;
        }
        else {
            left = Math.round(axis.left + (axis.translate(reversed ? nextTickPos : tickPos) || 0)) - crispCorr;
            right = Math.min(// #15742
            Math.round(axis.left + (axis.translate(reversed ? tickPos : nextTickPos) || 0)) - crispCorr, axis.left + axis.len);
        }
        tick.slotWidth = right - left;
        // Calculate the positioning of the label based on
        // alignment.
        e.pos.x = (align === 'left' ?
            left :
            align === 'right' ?
                right :
                left + ((right - left) / 2) // Default to center
        );
        e.pos.y = (verticalAlign === 'top' ?
            top :
            verticalAlign === 'bottom' ?
                bottom :
                top + ((bottom - top) / 2) // Default to middle
        );
        if (label) {
            const lblMetrics = chart.renderer.fontMetrics(label), labelHeight = label.getBBox().height;
            // Adjustment to y position to align the label correctly.
            // Would be better to have a setter or similar for this.
            if (!labelOpts.useHTML) {
                const lines = Math.round(labelHeight / lblMetrics.h);
                e.pos.y += (
                // Center the label
                // TODO: why does this actually center the label?
                ((lblMetrics.b - (lblMetrics.h - lblMetrics.f)) / 2) +
                    // Adjust for height of additional lines.
                    -(((lines - 1) * lblMetrics.h) / 2));
            }
            else {
                e.pos.y += (
                // Readjust yCorr in htmlUpdateTransform
                lblMetrics.b +
                    // Adjust for height of html label
                    -(labelHeight / 2));
            }
        }
        e.pos.x += (axis.horiz && labelOpts.x) || 0;
    }
}
/**
 * @private
 */
function onTickLabelFormat(ctx) {
    const { axis, value } = ctx;
    if (axis.options.grid?.enabled) {
        const tickPos = axis.tickPositions;
        const series = (axis.linkedParent || axis).series[0];
        const isFirst = value === tickPos[0];
        const isLast = value === tickPos[tickPos.length - 1];
        const point = series && GridAxis_find(series.options.data, function (p) {
            return p[axis.isXAxis ? 'x' : 'y'] === value;
        });
        let pointCopy;
        if (point && series.is('gantt')) {
            // For the Gantt set point aliases to the pointCopy
            // to do not change the original point
            pointCopy = GridAxis_merge(point);
            external_highcharts_src_js_default_default().seriesTypes.gantt.prototype.pointClass
                .setGanttPointAliases(pointCopy, axis.chart);
        }
        // Make additional properties available for the
        // formatter
        ctx.isFirst = isFirst;
        ctx.isLast = isLast;
        ctx.point = pointCopy;
    }
}
/**
 * Makes tick labels which are usually ignored in a linked axis
 * displayed if they are within range of linkedParent.min.
 * ```
 *                        _____________________________
 *                        |   |       |       |       |
 * Make this:             |   |   2   |   3   |   4   |
 *                        |___|_______|_______|_______|
 *                          ^
 *                        _____________________________
 *                        |   |       |       |       |
 * Into this:             | 1 |   2   |   3   |   4   |
 *                        |___|_______|_______|_______|
 *                          ^
 * ```
 * @private
 * @todo Does this function do what the drawing says? Seems to affect
 *       ticks and not the labels directly?
 */
function onTrimTicks() {
    const axis = this, options = axis.options, gridOptions = options.grid || {}, categoryAxis = axis.categories, tickPositions = axis.tickPositions, firstPos = tickPositions[0], secondPos = tickPositions[1], lastPos = tickPositions[tickPositions.length - 1], beforeLastPos = tickPositions[tickPositions.length - 2], linkedMin = axis.linkedParent?.min, linkedMax = axis.linkedParent?.max, min = linkedMin || axis.min, max = linkedMax || axis.max, tickInterval = axis.tickInterval, startLessThanMin = ( // #19845
    GridAxis_isNumber(min) &&
        min >= firstPos + tickInterval &&
        min < secondPos), endMoreThanMin = (GridAxis_isNumber(min) &&
        firstPos < min &&
        firstPos + tickInterval > min), startLessThanMax = (GridAxis_isNumber(max) &&
        lastPos > max &&
        lastPos - tickInterval < max), endMoreThanMax = (GridAxis_isNumber(max) &&
        max <= lastPos - tickInterval &&
        max > beforeLastPos);
    if (gridOptions.enabled === true &&
        !categoryAxis &&
        (axis.isXAxis || axis.isLinked)) {
        if ((endMoreThanMin || startLessThanMin) && !options.startOnTick) {
            tickPositions[0] = min;
        }
        if ((startLessThanMax || endMoreThanMax) && !options.endOnTick) {
            tickPositions[tickPositions.length - 1] = max;
        }
    }
}
/**
 * Avoid altering tickInterval when reserving space.
 * @private
 */
function wrapUnsquish(proceed) {
    const axis = this;
    const { options: { grid: gridOptions = {} } } = axis;
    if (gridOptions.enabled === true && axis.categories) {
        return axis.tickInterval;
    }
    return proceed.apply(axis, argsToArray(arguments));
}
/* *
 *
 *  Class
 *
 * */
/**
 * Additions for grid axes.
 * @private
 * @class
 */
class GridAxisAdditions {
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
     * Checks if an axis is the outer axis in its dimension. Since
     * axes are placed outwards in order, the axis with the highest
     * index is the outermost axis.
     *
     * Example: If there are multiple x-axes at the top of the chart,
     * this function returns true if the axis supplied is the last
     * of the x-axes.
     *
     * @private
     *
     * @return {boolean}
     * True if the axis is the outermost axis in its dimension; false if
     * not.
     */
    isOuterAxis() {
        const axis = this.axis;
        const chart = axis.chart;
        const columnIndex = axis.grid.columnIndex;
        const columns = (axis.linkedParent?.grid.columns ||
            axis.grid.columns ||
            []);
        const parentAxis = columnIndex ? axis.linkedParent : axis;
        let thisIndex = -1, lastIndex = 0;
        // On the left side, when we have columns (not only multiple axes), the
        // main axis is to the left
        if (axis.side === 3 && !chart.inverted && columns.length) {
            return !axis.linkedParent;
        }
        (chart[axis.coll] || []).forEach((otherAxis, index) => {
            if (otherAxis.side === axis.side &&
                !otherAxis.options.isInternal) {
                lastIndex = index;
                if (otherAxis === parentAxis) {
                    // Get the index of the axis in question
                    thisIndex = index;
                }
            }
        });
        return (lastIndex === thisIndex &&
            (GridAxis_isNumber(columnIndex) ?
                columns.length === columnIndex :
                true));
    }
    /**
     * Add extra border based on the provided path.
     * @private
     * @param {SVGPath} path
     * The path of the border.
     * @return {Highcharts.SVGElement}
     * Border
     */
    renderBorder(path) {
        const axis = this.axis, renderer = axis.chart.renderer, options = axis.options, extraBorderLine = renderer.path(path)
            .addClass('highcharts-axis-line')
            .add(axis.axisGroup);
        if (!renderer.styledMode) {
            extraBorderLine.attr({
                stroke: options.lineColor,
                'stroke-width': options.lineWidth,
                zIndex: 7
            });
        }
        return extraBorderLine;
    }
}
/* *
 *
 *  Registry
 *
 * */
// First letter of the day of the week, e.g. 'M' for 'Monday'.
dateFormats.E = function (timestamp) {
    return this.dateFormat('%a', timestamp, true).charAt(0);
};
// Adds week date format
dateFormats.W = function (timestamp) {
    const d = this.toParts(timestamp), firstDay = (d[7] + 6) % 7, thursday = d.slice(0);
    thursday[2] = d[2] - firstDay + 3;
    const firstThursday = this.toParts(this.makeTime(thursday[0], 0, 1));
    if (firstThursday[7] !== 4) {
        d[1] = 0; // Set month to January
        d[2] = 1 + (11 - firstThursday[7]) % 7;
    }
    const thursdayTS = this.makeTime(thursday[0], thursday[1], thursday[2]), firstThursdayTS = this.makeTime(firstThursday[0], firstThursday[1], firstThursday[2]);
    return (1 +
        Math.floor((thursdayTS - firstThursdayTS) / 604800000)).toString();
};
/* *
 *
 *  Default Export
 *
 * */
const GridAxis = {
    compose: GridAxis_compose
};
/* harmony default export */ const Axis_GridAxis = (GridAxis);
/* *
 *
 *  API Options
 *
 * */
/**
 * @productdesc {gantt}
 * For grid axes (like in Gantt charts),
 * it is possible to declare as a list to provide different
 * formats depending on available space.
 *
 * Defaults to:
 * ```js
 * {
 *     hour: { list: ['%H:%M', '%H'] },
 *     day: { list: ['%A, %e. %B', '%a, %e. %b', '%E'] },
 *     week: { list: ['Week %W', 'W%W'] },
 *     month: { list: ['%B', '%b', '%o'] }
 * }
 * ```
 *
 * @sample {gantt} gantt/grid-axis/date-time-label-formats
 *         Gantt chart with custom axis date format.
 *
 * @apioption xAxis.dateTimeLabelFormats
 */
/**
 * Set grid options for the axis labels. Requires Highcharts Gantt.
 *
 * @since     6.2.0
 * @product   gantt
 * @apioption xAxis.grid
 */
/**
 * Enable grid on the axis labels. Defaults to true for Gantt charts.
 *
 * @type      {boolean}
 * @default   true
 * @since     6.2.0
 * @product   gantt
 * @apioption xAxis.grid.enabled
 */
/**
 * Set specific options for each column (or row for horizontal axes) in the
 * grid. Each extra column/row is its own axis, and the axis options can be set
 * here.
 *
 * @sample gantt/demo/left-axis-table
 *         Left axis as a table
 * @sample gantt/demo/treegrid-columns
 *         Collapsible tree grid with columns
 *
 * @type      {Array<Highcharts.XAxisOptions>}
 * @apioption xAxis.grid.columns
 */
/**
 * Set border color for the label grid lines.
 *
 * @type      {Highcharts.ColorString}
 * @default   #e6e6e6
 * @apioption xAxis.grid.borderColor
 */
/**
 * Set border width of the label grid lines.
 *
 * @type      {number}
 * @default   1
 * @apioption xAxis.grid.borderWidth
 */
/**
 * Set cell height for grid axis labels. By default this is calculated from font
 * size. This option only applies to horizontal axes. For vertical axes, check
 * the [#yAxis.staticScale](yAxis.staticScale) option.
 *
 * @sample gantt/grid-axis/cellheight
 *         Gant chart with custom cell height
 * @type      {number}
 * @apioption xAxis.grid.cellHeight
 */
''; // Keeps doclets above in JS file

;// ./code/es-modules/Gantt/Tree.js
/* *
 *
 *  (c) 2016-2025 Highsoft AS
 *
 *  Authors: Jon Arild Nygard
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

const { extend: Tree_extend, isNumber: Tree_isNumber, pick: Tree_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Creates an object map from parent id to children's index.
 *
 * @internal
 * @function Highcharts.Tree#getListOfParents
 *
 * @param {Array<*>} data
 *        List of points set in options. `Array.parent` is parent id of point.
 *
 * @return {Highcharts.Dictionary<Array<*>>}
 * Map from parent id to children index in data
 */
function getListOfParents(data) {
    const root = '', ids = [], listOfParents = data.reduce((prev, curr) => {
        const { parent = '', id } = curr;
        if (typeof prev[parent] === 'undefined') {
            prev[parent] = [];
        }
        prev[parent].push(curr);
        if (id) {
            ids.push(id);
        }
        return prev;
    }, {});
    Object.keys(listOfParents).forEach((node) => {
        if ((node !== root) && (ids.indexOf(node) === -1)) {
            const adoptedByRoot = listOfParents[node].map(function (orphan) {
                const { ...parentExcluded } = orphan; // #15196
                return parentExcluded;
            });
            listOfParents[root].push(...adoptedByRoot);
            delete listOfParents[node];
        }
    });
    return listOfParents;
}
/** @internal */
function getNode(id, parent, level, data, mapOfIdToChildren, options) {
    const after = options && options.after, before = options && options.before, node = {
        data,
        depth: level - 1,
        id,
        level,
        parent: (parent || '')
    };
    let descendants = 0, height = 0, start, end;
    // Allow custom logic before the children has been created.
    if (typeof before === 'function') {
        before(node, options);
    }
    // Call getNode recursively on the children. Calculate the height of the
    // node, and the number of descendants.
    const children = ((mapOfIdToChildren[id] || [])).map((child) => {
        const node = getNode(child.id, id, (level + 1), child, mapOfIdToChildren, options), childStart = child.start || NaN, childEnd = (child.milestone === true ?
            childStart :
            child.end ||
                NaN);
        // Start should be the lowest child.start.
        start = ((!Tree_isNumber(start) || childStart < start) ?
            childStart :
            start);
        // End should be the largest child.end.
        // If child is milestone, then use start as end.
        end = ((!Tree_isNumber(end) || childEnd > end) ?
            childEnd :
            end);
        descendants = descendants + 1 + node.descendants;
        height = Math.max(node.height + 1, height);
        return node;
    });
    // Calculate start and end for point if it is not already explicitly set.
    if (data) {
        data.start = Tree_pick(data.start, start);
        data.end = Tree_pick(data.end, end);
    }
    Tree_extend(node, {
        children: children,
        descendants: descendants,
        height: height
    });
    // Allow custom logic after the children has been created.
    if (typeof after === 'function') {
        after(node, options);
    }
    return node;
}
/** @internal */
function getTree(data, options) {
    return getNode('', null, 1, null, getListOfParents(data), options);
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
const Tree = {
    getNode,
    getTree
};
/** @internal */
/* harmony default export */ const Gantt_Tree = (Tree);

;// ./code/es-modules/Core/Axis/TreeGrid/TreeGridTick.js
/* *
 *
 *  (c) 2016 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: TreeGridTick_addEvent, correctFloat: TreeGridTick_correctFloat, removeEvent, isObject: TreeGridTick_isObject, isNumber: TreeGridTick_isNumber, pick: TreeGridTick_pick, wrap: TreeGridTick_wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function onTickInit() {
    const tick = this;
    if (!tick.treeGrid) {
        tick.treeGrid = new TreeGridTickAdditions(tick);
    }
}
/**
 * @private
 */
function onTickHover(label) {
    label.addClass('highcharts-treegrid-node-active');
    if (!label.renderer.styledMode) {
        label.css({
            textDecoration: 'underline'
        });
    }
}
/**
 * @private
 */
function onTickHoverExit(label, options) {
    const css = TreeGridTick_isObject(options.style) ? options.style : {};
    label.removeClass('highcharts-treegrid-node-active');
    if (!label.renderer.styledMode) {
        label.css({ textDecoration: (css.textDecoration || 'none') });
    }
}
/**
 * @private
 */
function renderLabelIcon(tick, params) {
    const treeGrid = tick.treeGrid, isNew = !treeGrid.labelIcon, renderer = params.renderer, labelBox = params.xy, options = params.options, width = options.width || 0, height = options.height || 0, padding = options.padding ?? tick.axis.linkedParent ? 0 : 5, iconCenter = {
        x: labelBox.x - (width / 2) - padding,
        y: labelBox.y - (height / 2)
    }, rotation = params.collapsed ? 90 : 180, shouldRender = params.show && TreeGridTick_isNumber(iconCenter.y);
    let icon = treeGrid.labelIcon;
    if (!icon) {
        treeGrid.labelIcon = icon = renderer
            .path(renderer.symbols[options.type](options.x || 0, options.y || 0, width, height))
            .addClass('highcharts-label-icon')
            .add(params.group);
    }
    // Set the new position, and show or hide
    icon[shouldRender ? 'show' : 'hide'](); // #14904, #1338
    // Presentational attributes
    if (!renderer.styledMode) {
        icon
            .attr({
            cursor: 'pointer',
            'fill': TreeGridTick_pick(params.color, "#666666" /* Palette.neutralColor60 */),
            'stroke-width': 1,
            stroke: options.lineColor,
            strokeWidth: options.lineWidth || 0
        });
    }
    // Update the icon positions
    icon[isNew ? 'attr' : 'animate']({
        translateX: iconCenter.x,
        translateY: iconCenter.y,
        rotation: rotation
    });
}
/**
 * @private
 */
function wrapGetLabelPosition(proceed, x, y, label, horiz, labelOptions, tickmarkOffset, index, step) {
    const tick = this, lbOptions = TreeGridTick_pick(tick.options?.labels, labelOptions), pos = tick.pos, axis = tick.axis, isTreeGrid = axis.type === 'treegrid', result = proceed.apply(tick, [x, y, label, horiz, lbOptions, tickmarkOffset, index, step]);
    let mapOfPosToGridNode, node, level;
    if (isTreeGrid) {
        const { width = 0, padding = axis.linkedParent ? 0 : 5 } = (lbOptions && TreeGridTick_isObject(lbOptions.symbol, true) ?
            lbOptions.symbol :
            {}), indentation = (lbOptions && TreeGridTick_isNumber(lbOptions.indentation) ?
            lbOptions.indentation :
            0);
        mapOfPosToGridNode = axis.treeGrid.mapOfPosToGridNode;
        node = mapOfPosToGridNode?.[pos];
        level = node?.depth || 1;
        result.x += (
        // Add space for symbols
        (width + (padding * 2)) +
            // Apply indentation
            ((level - 1) * indentation));
    }
    return result;
}
/**
 * @private
 */
function wrapRenderLabel(proceed) {
    const tick = this, { pos, axis, label, treeGrid: tickGrid, options: tickOptions } = tick, icon = tickGrid?.labelIcon, labelElement = label?.element, { treeGrid: axisGrid, options: axisOptions, chart, tickPositions } = axis, mapOfPosToGridNode = axisGrid.mapOfPosToGridNode, labelOptions = TreeGridTick_pick(tickOptions?.labels, axisOptions?.labels), symbolOptions = (labelOptions && TreeGridTick_isObject(labelOptions.symbol, true) ?
        labelOptions.symbol :
        {}), node = mapOfPosToGridNode?.[pos], { descendants, depth } = node || {}, hasDescendants = node && descendants && descendants > 0, level = depth, isTreeGridElement = (axis.type === 'treegrid') && labelElement, shouldRender = tickPositions.indexOf(pos) > -1, prefixClassName = 'highcharts-treegrid-node-', prefixLevelClass = prefixClassName + 'level-', styledMode = chart.styledMode;
    let collapsed, addClassName, removeClassName;
    if (isTreeGridElement && node) {
        // Add class name for hierarchical styling.
        label
            .removeClass(new RegExp(prefixLevelClass + '.*'))
            .addClass(prefixLevelClass + level);
    }
    proceed.apply(tick, Array.prototype.slice.call(arguments, 1));
    if (isTreeGridElement && hasDescendants) {
        collapsed = axisGrid.isCollapsed(node);
        renderLabelIcon(tick, {
            color: (!styledMode &&
                label.styles.color ||
                ''),
            collapsed: collapsed,
            group: label.parentGroup,
            options: symbolOptions,
            renderer: label.renderer,
            show: shouldRender,
            xy: label.xy
        });
        // Add class name for the node.
        addClassName = prefixClassName +
            (collapsed ? 'collapsed' : 'expanded');
        removeClassName = prefixClassName +
            (collapsed ? 'expanded' : 'collapsed');
        label
            .addClass(addClassName)
            .removeClass(removeClassName);
        if (!styledMode) {
            label.css({
                cursor: 'pointer'
            });
        }
        // Add events to both label text and icon
        [label, icon].forEach((object) => {
            if (object && !object.attachedTreeGridEvents) {
                // On hover
                TreeGridTick_addEvent(object.element, 'mouseover', function () {
                    onTickHover(label);
                });
                // On hover out
                TreeGridTick_addEvent(object.element, 'mouseout', function () {
                    onTickHoverExit(label, labelOptions);
                });
                TreeGridTick_addEvent(object.element, 'click', function () {
                    tickGrid.toggleCollapse();
                });
                object.attachedTreeGridEvents = true;
            }
        });
    }
    else if (icon) {
        removeEvent(labelElement);
        label?.css({ cursor: 'default' });
        icon.destroy();
        tickGrid.labelIcon = void 0;
    }
}
/* *
 *
 *  Classes
 *
 * */
/**
 * @private
 * @class
 */
class TreeGridTickAdditions {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    static compose(TickClass) {
        const tickProto = TickClass.prototype;
        if (!tickProto.toggleCollapse) {
            TreeGridTick_addEvent(TickClass, 'init', onTickInit);
            TreeGridTick_wrap(tickProto, 'getLabelPosition', wrapGetLabelPosition);
            TreeGridTick_wrap(tickProto, 'renderLabel', wrapRenderLabel);
            // Backwards compatibility
            tickProto.collapse = function (redraw) {
                this.treeGrid.collapse(redraw);
            };
            tickProto.expand = function (redraw) {
                this.treeGrid.expand(redraw);
            };
            tickProto.toggleCollapse = function (redraw) {
                this.treeGrid.toggleCollapse(redraw);
            };
        }
    }
    /* *
     *
     *  Constructors
     *
     * */
    /**
     * @private
     */
    constructor(tick) {
        this.tick = tick;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Collapse the grid cell. Used when axis is of type treegrid.
     *
     * @see gantt/treegrid-axis/collapsed-dynamically/demo.js
     *
     * @private
     * @function Highcharts.Tick#collapse
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart or wait for an explicit call to
     * {@link Highcharts.Chart#redraw}
     */
    collapse(redraw) {
        const { pos, axis } = this.tick, { treeGrid, brokenAxis } = axis, posMappedNodes = treeGrid.mapOfPosToGridNode;
        if (brokenAxis && posMappedNodes) {
            brokenAxis.setBreaks(treeGrid.collapse(posMappedNodes[pos]), redraw ?? true);
        }
    }
    /**
     * Destroy remaining labelIcon if exist.
     *
     * @private
     * @function Highcharts.Tick#destroy
     */
    destroy() {
        this.labelIcon?.destroy();
    }
    /**
     * Expand the grid cell. Used when axis is of type treegrid.
     *
     * @see gantt/treegrid-axis/collapsed-dynamically/demo.js
     *
     * @private
     * @function Highcharts.Tick#expand
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart or wait for an explicit call to
     * {@link Highcharts.Chart#redraw}
     */
    expand(redraw) {
        const { pos, axis } = this.tick, { treeGrid, brokenAxis } = axis, posMappedNodes = treeGrid.mapOfPosToGridNode;
        if (brokenAxis && posMappedNodes) {
            brokenAxis.setBreaks(treeGrid.expand(posMappedNodes[pos]), redraw ?? true);
        }
    }
    /**
     * Toggle the collapse/expand state of the grid cell. Used when axis is
     * of type treegrid.
     *
     * @see gantt/treegrid-axis/collapsed-dynamically/demo.js
     *
     * @private
     * @function Highcharts.Tick#toggleCollapse
     *
     * @param {boolean} [redraw=true]
     * Whether to redraw the chart or wait for an explicit call to
     * {@link Highcharts.Chart#redraw}
     */
    toggleCollapse(redraw = true) {
        const { axis, pos } = this.tick, { brokenAxis, treeGrid } = axis;
        if (brokenAxis && treeGrid.mapOfPosToGridNode) {
            const scrollMode = !!(axis.scrollbar && axis.staticScale), maxPx = axis.pos + axis.len +
                (treeGrid.pendingSizeAdjustment || 0);
            treeGrid.pendingSizeAdjustment = 0;
            brokenAxis.setBreaks(treeGrid.toggleCollapse(treeGrid.mapOfPosToGridNode[pos]), scrollMode && redraw);
            if (scrollMode) {
                const adjustedMax = axis.toValue(axis.toPixels(axis.dataMax));
                let newMaxVal = axis.toValue(maxPx) - axis.tickmarkOffset, newMinVal = axis.userMin ?? axis.min;
                // If dataMax is in a break.
                treeGrid.adjustedMax = adjustedMax !== axis.dataMax ?
                    adjustedMax - axis.tickmarkOffset :
                    void 0;
                if (newMaxVal > axis.dataMax) {
                    let missingPx = maxPx -
                        axis.toPixels(axis.dataMax + axis.tickmarkOffset);
                    newMaxVal = treeGrid.adjustedMax ?? axis.dataMax;
                    // Check if enough space available on the min end.
                    newMinVal = axis.toValue(axis.toPixels(newMinVal - axis.tickmarkOffset) - missingPx) + axis.tickmarkOffset;
                    if (newMinVal < axis.dataMin) {
                        missingPx = axis.toPixels(axis.dataMin) -
                            axis.toPixels(newMinVal);
                        newMinVal = axis.dataMin;
                        treeGrid.pendingSizeAdjustment = missingPx;
                    }
                }
                axis.setExtremes(TreeGridTick_correctFloat(newMinVal), TreeGridTick_correctFloat(newMaxVal), false, false, { trigger: 'toggleCollapse' });
            }
            if (redraw) {
                axis.chart.redraw();
            }
        }
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TreeGridTick = (TreeGridTickAdditions);

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



const { extend: TreeUtilities_extend, isArray: TreeUtilities_isArray, isNumber: TreeUtilities_isNumber, isObject: TreeUtilities_isObject, merge: TreeUtilities_merge, pick: TreeUtilities_pick, relativeLength: TreeUtilities_relativeLength } = (external_highcharts_src_js_default_default());
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
    if (TreeUtilities_isObject(params)) {
        from = TreeUtilities_isNumber(params.from) ? params.from : 1;
        levels = params.levels;
        converted = {};
        defaults = TreeUtilities_isObject(params.defaults) ? params.defaults : {};
        if (TreeUtilities_isArray(levels)) {
            converted = levels.reduce((obj, item) => {
                let level, levelIsConstant, options;
                if (TreeUtilities_isObject(item) && TreeUtilities_isNumber(item.level)) {
                    options = TreeUtilities_merge({}, item);
                    levelIsConstant = TreeUtilities_pick(options.levelIsConstant, defaults.levelIsConstant);
                    // Delete redundant properties.
                    delete options.levelIsConstant;
                    delete options.level;
                    // Calculate which level these options apply to.
                    level = item.level + (levelIsConstant ? 0 : from - 1);
                    if (TreeUtilities_isObject(obj[level])) {
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
            result[i] = TreeUtilities_merge({}, defaults, TreeUtilities_isObject(converted[i]) ? converted[i] : {});
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
    if (TreeUtilities_isObject(series)) {
        // Get the series options.
        options = TreeUtilities_isObject(series.options) ? series.options : {};
        // Calculate the rootId.
        rootId = TreeUtilities_pick(series.rootNode, options.rootId, '');
        // Set rootId on series.userOptions to pick it up in exporting.
        if (TreeUtilities_isObject(series.userOptions)) {
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
    return TreeUtilities_relativeLength(nodeWidth, plotSizeX);
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

;// ./code/es-modules/Core/Axis/TreeGrid/TreeGridAxis.js
/* *
 *
 *  (c) 2016 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */






const { getLevelOptions: TreeGridAxis_getLevelOptions } = Series_TreeUtilities;

const { addEvent: TreeGridAxis_addEvent, isArray: TreeGridAxis_isArray, splat: TreeGridAxis_splat, find: TreeGridAxis_find, fireEvent: TreeGridAxis_fireEvent, isObject: TreeGridAxis_isObject, isString, merge: TreeGridAxis_merge, removeEvent: TreeGridAxis_removeEvent, wrap: TreeGridAxis_wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Variables
 *
 * */
let TickConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Creates a break object from a node.
 *
 * @param {Object} node
 * The node to create a break object from.
 *
 * @private
 */
function getBreakFromNode(node) {
    return {
        from: node.collapseStart || 0,
        to: node.collapseEnd || 0,
        showPoints: false
    };
}
/**
 * Creates a tree structure of the data, and the treegrid. Calculates
 * categories, and y-values of points based on the tree.
 *
 * @private
 * @function getTreeGridFromData
 *
 * @param {Array<Highcharts.GanttPointOptions>} data
 * All the data points to display in the axis.
 *
 * @param {boolean} uniqueNames
 * Whether or not the data node with the same name should share grid cell. If
 * true they do share cell. False by default.
 *
 * @param {number} numberOfSeries
 *
 * @return {Object}
 * Returns an object containing categories, mapOfIdToNode,
 * mapOfPosToGridNode, and tree.
 *
 * @todo There should be only one point per line.
 * @todo It should be optional to have one category per point, or merge
 *       cells
 * @todo Add unit-tests.
 */
function getTreeGridFromData(data, uniqueNames, numberOfSeries) {
    const categories = [], collapsedNodes = [], mapOfIdToNode = {}, uniqueNamesEnabled = uniqueNames || false;
    let mapOfPosToGridNode = {}, posIterator = -1;
    // Build the tree from the series data.
    const treeParams = {
        // After the children has been created.
        after: function (node) {
            const gridNode = mapOfPosToGridNode[node.pos];
            let height = 0, descendants = 0;
            gridNode.children.forEach(function (child) {
                descendants += (child.descendants || 0) + 1;
                height = Math.max((child.height || 0) + 1, height);
            });
            gridNode.descendants = descendants;
            gridNode.height = height;
            if (gridNode.collapsed) {
                collapsedNodes.push(gridNode);
            }
        },
        // Before the children has been created.
        before: function (node) {
            const data = TreeGridAxis_isObject(node.data, true) ?
                node.data :
                {}, name = isString(data.name) ? data.name : '', parentNode = mapOfIdToNode[node.parent], parentGridNode = (TreeGridAxis_isObject(parentNode, true) ?
                mapOfPosToGridNode[parentNode.pos] :
                null), hasSameName = function (x) {
                return x.name === name;
            };
            let gridNode, pos;
            // If not unique names, look for sibling node with the same name
            if (uniqueNamesEnabled &&
                TreeGridAxis_isObject(parentGridNode, true) &&
                !!(gridNode = TreeGridAxis_find(parentGridNode.children, hasSameName))) {
                // If there is a gridNode with the same name, reuse position
                pos = gridNode.pos;
                // Add data node to list of nodes in the grid node.
                gridNode.nodes.push(node);
            }
            else {
                // If it is a new grid node, increment position.
                pos = posIterator++;
            }
            // Add new grid node to map.
            if (!mapOfPosToGridNode[pos]) {
                mapOfPosToGridNode[pos] = gridNode = {
                    depth: parentGridNode ? parentGridNode.depth + 1 : 0,
                    name: name,
                    id: data.id,
                    nodes: [node],
                    children: [],
                    pos: pos
                };
                // If not root, then add name to categories.
                if (pos !== -1) {
                    categories.push(name);
                }
                // Add name to list of children.
                if (TreeGridAxis_isObject(parentGridNode, true)) {
                    parentGridNode.children.push(gridNode);
                }
            }
            // Add data node to map
            if (isString(node.id)) {
                mapOfIdToNode[node.id] = node;
            }
            // If one of the points are collapsed, then start the grid node
            // in collapsed state.
            if (gridNode && data.collapsed === true) {
                gridNode.collapsed = true;
            }
            // Assign pos to data node
            node.pos = pos;
        }
    };
    const updateYValuesAndTickPos = function (map, numberOfSeries) {
        const setValues = function (gridNode, start, result) {
            const nodes = gridNode.nodes, padding = 0.5;
            let end = start + (start === -1 ? 0 : numberOfSeries - 1);
            const diff = (end - start) / 2, pos = start + diff;
            nodes.forEach(function (node) {
                const data = node.data;
                if (TreeGridAxis_isObject(data, true)) {
                    // Update point
                    data.y = start + (data.seriesIndex || 0);
                    // Remove the property once used
                    delete data.seriesIndex;
                }
                node.pos = pos;
            });
            result[pos] = gridNode;
            gridNode.pos = pos;
            gridNode.tickmarkOffset = diff + padding;
            gridNode.collapseStart = end + padding;
            gridNode.children.forEach(function (child) {
                setValues(child, end + 1, result);
                end = (child.collapseEnd || 0) - padding;
            });
            // Set collapseEnd to the end of the last child node.
            gridNode.collapseEnd = end + padding;
            return result;
        };
        return setValues(map['-1'], -1, {});
    };
    // Create tree from data
    const tree = Gantt_Tree.getTree(data, treeParams);
    // Update y values of data, and set calculate tick positions.
    mapOfPosToGridNode = updateYValuesAndTickPos(mapOfPosToGridNode, numberOfSeries);
    // Return the resulting data.
    return {
        categories: categories,
        mapOfIdToNode: mapOfIdToNode,
        mapOfPosToGridNode: mapOfPosToGridNode,
        collapsedNodes: collapsedNodes,
        tree: tree
    };
}
/**
 * Builds the tree of categories and calculates its positions.
 * @private
 * @param {Object} e Event object
 * @param {Object} e.target The chart instance which the event was fired on.
 * @param {object[]} e.target.axes The axes of the chart.
 */
function onBeforeRender(e) {
    const chart = e.target, axes = chart.axes;
    axes.filter((axis) => axis.type === 'treegrid').forEach(function (axis) {
        const options = axis.options, labelOptions = options.labels, uniqueNames = axis.uniqueNames, max = chart.time.parse(options.max), 
        // Check whether any of series is rendering for the first
        // time, visibility has changed, or its data is dirty, and
        // only then update. #10570, #10580. Also check if
        // mapOfPosToGridNode exists. #10887
        isDirty = (!axis.treeGrid.mapOfPosToGridNode ||
            axis.series.some(function (series) {
                return !series.hasRendered ||
                    series.isDirtyData ||
                    series.isDirty;
            }));
        let numberOfSeries = 0, data, treeGrid;
        if (isDirty) {
            const seriesHasPrimitivePoints = [];
            // Concatenate data from all series assigned to this axis.
            data = axis.series.reduce(function (arr, s) {
                const seriesData = (s.options.data || []), firstPoint = seriesData[0], 
                // Check if the first point is a simple array of values.
                // If so we assume that this is the case for all points.
                foundPrimitivePoint = Array.isArray(firstPoint) &&
                    !firstPoint.find((value) => (typeof value === 'object'));
                seriesHasPrimitivePoints.push(foundPrimitivePoint);
                if (s.visible) {
                    // Push all data to array
                    seriesData.forEach(function (pointOptions) {
                        // For using keys, or when using primitive points,
                        // rebuild the data structure
                        if (foundPrimitivePoint || s.options.keys?.length) {
                            pointOptions = s.pointClass.prototype
                                .optionsToObject
                                .call({ series: s }, pointOptions);
                            s.pointClass.setGanttPointAliases(pointOptions, chart);
                        }
                        if (TreeGridAxis_isObject(pointOptions, true)) {
                            // Set series index on data. Removed again
                            // after use.
                            pointOptions.seriesIndex = numberOfSeries;
                            arr.push(pointOptions);
                        }
                    });
                    // Increment series index
                    if (uniqueNames === true) {
                        numberOfSeries++;
                    }
                }
                return arr;
            }, []);
            // If max is higher than set data - add a
            // dummy data to render categories #10779
            if (max && data.length < max) {
                for (let i = data.length; i <= max; i++) {
                    data.push({
                        // Use the zero-width character
                        // to avoid conflict with uniqueNames
                        name: i + '\u200B'
                    });
                }
            }
            // `setScale` is fired after all the series is initialized,
            // which is an ideal time to update the axis.categories.
            treeGrid = getTreeGridFromData(data, uniqueNames || false, (uniqueNames === true) ? numberOfSeries : 1);
            // Assign values to the axis.
            axis.categories = treeGrid.categories;
            axis.treeGrid.mapOfPosToGridNode = (treeGrid.mapOfPosToGridNode);
            axis.hasNames = true;
            axis.treeGrid.tree = treeGrid.tree;
            // Update yData now that we have calculated the y values
            axis.series.forEach(function (series, index) {
                const axisData = (series.options.data || []).map(function (d) {
                    if (seriesHasPrimitivePoints[index] ||
                        (TreeGridAxis_isArray(d) && series.options.keys?.length)) {
                        // Get the axisData from the data array used to
                        // build the treeGrid where has been modified
                        data.forEach(function (point) {
                            const toArray = TreeGridAxis_splat(d);
                            if (toArray.indexOf(point.x || 0) >= 0 &&
                                toArray.indexOf(point.x2 || 0) >= 0) {
                                d = point;
                            }
                        });
                    }
                    return TreeGridAxis_isObject(d, true) ? TreeGridAxis_merge(d) : d;
                });
                // Avoid destroying points when series is not visible
                if (series.visible) {
                    series.setData(axisData, false);
                }
            });
            // Calculate the label options for each level in the tree.
            axis.treeGrid.mapOptionsToLevel =
                TreeGridAxis_getLevelOptions({
                    defaults: labelOptions,
                    from: 1,
                    levels: labelOptions?.levels,
                    to: axis.treeGrid.tree?.height
                });
            // Setting initial collapsed nodes
            if (e.type === 'beforeRender') {
                axis.treeGrid.collapsedNodes = treeGrid.collapsedNodes;
            }
        }
    });
}
/**
 * Generates a tick for initial positioning.
 *
 * @private
 * @function Highcharts.GridAxis#generateTick
 *
 * @param {Function} proceed
 * The original generateTick function.
 *
 * @param {number} pos
 * The tick position in axis values.
 */
function wrapGenerateTick(proceed, pos) {
    const axis = this, mapOptionsToLevel = axis.treeGrid.mapOptionsToLevel || {}, isTreeGrid = axis.type === 'treegrid', ticks = axis.ticks;
    let tick = ticks[pos], levelOptions, options, gridNode;
    if (isTreeGrid &&
        axis.treeGrid.mapOfPosToGridNode) {
        gridNode = axis.treeGrid.mapOfPosToGridNode[pos];
        levelOptions = mapOptionsToLevel[gridNode.depth];
        if (levelOptions) {
            options = {
                labels: levelOptions
            };
        }
        if (!tick &&
            TickConstructor) {
            ticks[pos] = tick =
                new TickConstructor(axis, pos, void 0, void 0, {
                    category: gridNode.name,
                    tickmarkOffset: gridNode.tickmarkOffset,
                    options: options
                });
        }
        else {
            // Update labels depending on tick interval
            tick.parameters.category = gridNode.name;
            tick.options = options;
            tick.addLabel();
        }
    }
    else {
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
    }
}
/**
 * @private
 */
function wrapInit(proceed, chart, userOptions, coll) {
    const axis = this, isTreeGrid = userOptions.type === 'treegrid';
    if (!axis.treeGrid) {
        axis.treeGrid = new TreeGridAxisAdditions(axis);
    }
    // Set default and forced options for TreeGrid
    if (isTreeGrid) {
        // Add event for updating the categories of a treegrid.
        // NOTE Preferably these events should be set on the axis.
        TreeGridAxis_addEvent(chart, 'beforeRender', onBeforeRender);
        TreeGridAxis_addEvent(chart, 'beforeRedraw', onBeforeRender);
        // Add new collapsed nodes on addseries
        TreeGridAxis_addEvent(chart, 'addSeries', function (e) {
            if (e.options.data) {
                const treeGrid = getTreeGridFromData(e.options.data, userOptions.uniqueNames || false, 1);
                axis.treeGrid.collapsedNodes = (axis.treeGrid.collapsedNodes || []).concat(treeGrid.collapsedNodes);
            }
        });
        // Collapse all nodes in axis.treegrid.collapsednodes
        // where collapsed equals true.
        TreeGridAxis_addEvent(axis, 'foundExtremes', function () {
            axis.treeGrid.collapsedNodes?.forEach(function (node) {
                const breaks = axis.treeGrid.collapse(node);
                if (axis.brokenAxis) {
                    axis.brokenAxis.setBreaks(breaks, false);
                    // Remove the node from the axis collapsedNodes
                    if (axis.treeGrid.collapsedNodes) {
                        axis.treeGrid.collapsedNodes = axis.treeGrid
                            .collapsedNodes
                            .filter((n) => ((node.collapseStart !==
                            n.collapseStart) ||
                            node.collapseEnd !== n.collapseEnd));
                    }
                }
            });
        });
        // If staticScale is not defined on the yAxis
        // and chart height is set, set axis.isDirty
        // to ensure collapsing works (#12012)
        TreeGridAxis_addEvent(axis, 'afterBreaks', function () {
            if (axis.coll === 'yAxis' &&
                !axis.staticScale &&
                axis.chart.options.chart.height) {
                axis.isDirty = true;
            }
        });
        userOptions = TreeGridAxis_merge({
            // Default options
            grid: {
                enabled: true
            },
            // TODO: add support for align in treegrid.
            labels: {
                align: 'left',
                /**
                * Set options on specific levels in a tree grid axis. Takes
                * precedence over labels options.
                *
                * @sample {gantt} gantt/treegrid-axis/labels-levels
                *         Levels on TreeGrid Labels
                *
                * @type      {Array<*>}
                * @product   gantt
                * @apioption yAxis.labels.levels
                *
                * @private
                */
                levels: [{
                        /**
                        * Specify the level which the options within this object
                        * applies to.
                        *
                        * @type      {number}
                        * @product   gantt
                        * @apioption yAxis.labels.levels.level
                        *
                        * @private
                        */
                        level: void 0
                    }, {
                        level: 1,
                        /**
                         * @type      {Highcharts.CSSObject}
                         * @product   gantt
                         * @apioption yAxis.labels.levels.style
                         *
                         * @private
                         */
                        style: {
                            /** @ignore-option */
                            fontWeight: 'bold'
                        }
                    }],
                /**
                 * The symbol for the collapse and expand icon in a
                 * treegrid.
                 *
                 * @product      gantt
                 * @optionparent yAxis.labels.symbol
                 *
                 * @private
                 */
                symbol: {
                    /**
                     * The symbol type. Points to a definition function in
                     * the `Highcharts.Renderer.symbols` collection.
                     *
                     * @type {Highcharts.SymbolKeyValue}
                     *
                     * @private
                     */
                    type: 'triangle',
                    x: -5,
                    y: -5,
                    height: 10,
                    width: 10
                }
            },
            uniqueNames: false
        }, userOptions, {
            // Forced options
            reversed: true
        });
    }
    // Now apply the original function with the original arguments, which are
    // sliced off this function's arguments
    proceed.apply(axis, [chart, userOptions, coll]);
    if (isTreeGrid) {
        axis.hasNames = true;
        axis.options.showLastLabel = true;
    }
}
/**
 * Set the tick positions, tickInterval, axis min and max.
 *
 * @private
 * @function Highcharts.GridAxis#setTickInterval
 *
 * @param {Function} proceed
 * The original setTickInterval function.
 */
function wrapSetTickInterval(proceed) {
    const axis = this, options = axis.options, time = axis.chart.time, linkedParent = typeof options.linkedTo === 'number' ?
        this.chart[axis.coll]?.[options.linkedTo] :
        void 0, isTreeGrid = axis.type === 'treegrid';
    if (isTreeGrid) {
        axis.min = axis.userMin ?? time.parse(options.min) ?? axis.dataMin;
        axis.max = axis.userMax ?? time.parse(options.max) ?? axis.dataMax;
        TreeGridAxis_fireEvent(axis, 'foundExtremes');
        // `setAxisTranslation` modifies the min and max according to axis
        // breaks.
        axis.setAxisTranslation();
        axis.tickInterval = 1;
        axis.tickmarkOffset = 0.5;
        axis.tickPositions = axis.treeGrid.mapOfPosToGridNode ?
            axis.treeGrid.getTickPositions() :
            [];
        if (linkedParent) {
            const linkedParentExtremes = linkedParent.getExtremes();
            axis.min = linkedParentExtremes.min ?? linkedParentExtremes.dataMin;
            axis.max = linkedParentExtremes.max ?? linkedParentExtremes.dataMax;
            axis.tickPositions = linkedParent.tickPositions;
        }
        axis.linkedParent = linkedParent;
    }
    else {
        proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
    }
}
/**
 * Wrap axis redraw to remove TreeGrid events from ticks
 *
 * @private
 * @function Highcharts.GridAxis#redraw
 *
 * @param {Function} proceed
 * The original setTickInterval function.
 */
function wrapRedraw(proceed) {
    const axis = this, isTreeGrid = this.type === 'treegrid';
    if (isTreeGrid && axis.visible) {
        axis.tickPositions.forEach(function (pos) {
            const tick = axis.ticks[pos];
            if (tick.label?.attachedTreeGridEvents) {
                TreeGridAxis_removeEvent(tick.label.element);
                tick.label.attachedTreeGridEvents = false;
            }
        });
    }
    proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
}
/* *
 *
 *  Classes
 *
 * */
/**
 * @private
 * @class
 */
class TreeGridAxisAdditions {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * @private
     */
    static compose(AxisClass, ChartClass, SeriesClass, TickClass) {
        if (!AxisClass.keepProps.includes('treeGrid')) {
            const axisProps = AxisClass.prototype;
            AxisClass.keepProps.push('treeGrid');
            TreeGridAxis_wrap(axisProps, 'generateTick', wrapGenerateTick);
            TreeGridAxis_wrap(axisProps, 'init', wrapInit);
            TreeGridAxis_wrap(axisProps, 'setTickInterval', wrapSetTickInterval);
            TreeGridAxis_wrap(axisProps, 'redraw', wrapRedraw);
            // Make utility functions available for testing.
            axisProps.utils = {
                getNode: Gantt_Tree.getNode
            };
            if (!TickConstructor) {
                TickConstructor = TickClass;
            }
        }
        Axis_GridAxis.compose(AxisClass, ChartClass, TickClass);
        Axis_BrokenAxis.compose(AxisClass, SeriesClass);
        TreeGridTick.compose(TickClass);
        return AxisClass;
    }
    /* *
     *
     *  Constructors
     *
     * */
    /**
     * @private
     */
    constructor(axis) {
        this.pendingSizeAdjustment = 0;
        this.axis = axis;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Set the collapse status.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to collapse.
     */
    setCollapsedStatus(node) {
        const axis = this.axis, chart = axis.chart;
        axis.series.forEach(function (series) {
            const data = series.options.data;
            if (node.id && data) {
                const point = chart.get(node.id), dataPoint = data[series.data.indexOf(point)];
                if (point && dataPoint) {
                    point.collapsed = node.collapsed;
                    dataPoint.collapsed = node.collapsed;
                }
            }
        });
    }
    /**
     * Calculates the new axis breaks to collapse a node.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to collapse.
     *
     * @param {number} pos
     * The tick position to collapse.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    collapse(node) {
        const axis = this.axis, breaks = axis.options.breaks || [], obj = getBreakFromNode(node);
        breaks.push(obj);
        // Change the collapsed flag #13838
        node.collapsed = true;
        axis.treeGrid.setCollapsedStatus(node);
        return breaks;
    }
    /**
     * Calculates the new axis breaks to expand a node.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to expand.
     *
     * @param {number} pos
     * The tick position to expand.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    expand(node) {
        const axis = this.axis, obj = getBreakFromNode(node);
        // Change the collapsed flag #13838
        node.collapsed = false;
        axis.treeGrid.setCollapsedStatus(node);
        // Remove the break from the axis breaks array.
        return axis.options.breaks?.reduce(function (arr, b) {
            if (b.to !== obj.to || b.from !== obj.from) {
                arr.push(b);
            }
            return arr;
        }, []) || [];
    }
    /**
     * Creates a list of positions for the ticks on the axis. Filters out
     * positions that are outside min and max, or is inside an axis break.
     *
     * @private
     *
     * @return {Array<number>}
     * List of positions.
     */
    getTickPositions() {
        const axis = this.axis, roundedMin = Math.floor(axis.min / axis.tickInterval) * axis.tickInterval, roundedMax = Math.ceil(axis.max / axis.tickInterval) * axis.tickInterval;
        return Object.keys(axis.treeGrid.mapOfPosToGridNode || {}).reduce(function (arr, key) {
            const pos = +key;
            if (pos >= roundedMin &&
                pos <= roundedMax &&
                !axis.brokenAxis?.isInAnyBreak(pos)) {
                arr.push(pos);
            }
            return arr;
        }, []);
    }
    /**
     * Check if a node is collapsed.
     *
     * @private
     *
     * @param {Object} node
     * The node to check if is collapsed.
     *
     * @return {boolean}
     * Returns true if collapsed, false if expanded.
     */
    isCollapsed(node) {
        const axis = this.axis, breaks = (axis.options.breaks || []), obj = getBreakFromNode(node);
        return breaks.some(function (b) {
            return b.from === obj.from && b.to === obj.to;
        });
    }
    /**
     * Calculates the new axis breaks after toggling the collapse/expand
     * state of a node. If it is collapsed it will be expanded, and if it is
     * expanded it will be collapsed.
     *
     * @private
     *
     * @param {Highcharts.Axis} axis
     * The axis to check against.
     *
     * @param {Highcharts.GridNode} node
     * The node to toggle.
     *
     * @return {Array<object>}
     * Returns an array of the new breaks for the axis.
     */
    toggleCollapse(node) {
        return (this.isCollapsed(node) ?
            this.expand(node) :
            this.collapse(node));
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TreeGridAxis = (TreeGridAxisAdditions);

;// ./code/es-modules/Series/Gantt/GanttSeries.js
/* *
 *
 *  (c) 2016-2025 Highsoft AS
 *
 *  Author: Lars A. V. Cabrera
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { series: GanttSeries_Series, seriesTypes: { xrange: XRangeSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());



const { extend: GanttSeries_extend, isNumber: GanttSeries_isNumber, merge: GanttSeries_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * @private
 * @class
 * @name Highcharts.seriesTypes.gantt
 *
 * @augments Highcharts.Series
 */
class GanttSeries extends XRangeSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(AxisClass, ChartClass, SeriesClass, TickClass) {
        XRangeSeries.compose(AxisClass);
        if (!ChartClass) {
            return;
        }
        Extensions_StaticScale.compose(AxisClass, ChartClass);
        if (!SeriesClass) {
            return;
        }
        gantt_src_js_default_Pathfinder_default().compose(ChartClass, SeriesClass.prototype.pointClass);
        if (!TickClass) {
            return;
        }
        TreeGridAxis.compose(AxisClass, ChartClass, SeriesClass, TickClass);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Draws a single point in the series.
     *
     * This override draws the point as a diamond if point.options.milestone
     * is true, and uses the original drawPoint() if it is false or not set.
     *
     * @requires highcharts-gantt
     *
     * @private
     * @function Highcharts.seriesTypes.gantt#drawPoint
     *
     * @param {Highcharts.Point} point
     *        An instance of Point in the series
     *
     * @param {"animate"|"attr"} verb
     *        'animate' (animates changes) or 'attr' (sets options)
     */
    drawPoint(point, verb) {
        const series = this, seriesOpts = series.options, renderer = series.chart.renderer, shapeArgs = point.shapeArgs, plotY = point.plotY, state = point.selected && 'select', cutOff = seriesOpts.stacking && !seriesOpts.borderRadius;
        let graphic = point.graphic, diamondShape;
        if (point.options.milestone) {
            if (GanttSeries_isNumber(plotY) &&
                point.y !== null &&
                point.visible !== false) {
                diamondShape = renderer.symbols.diamond(shapeArgs.x || 0, shapeArgs.y || 0, shapeArgs.width || 0, shapeArgs.height || 0);
                if (graphic) {
                    graphic[verb]({
                        d: diamondShape
                    });
                }
                else {
                    point.graphic = graphic = renderer.path(diamondShape)
                        .addClass(point.getClassName(), true)
                        .add(point.group || series.group);
                }
                // Presentational
                if (!series.chart.styledMode) {
                    point.graphic
                        .attr(series.pointAttribs(point, state))
                        .shadow(seriesOpts.shadow, null, cutOff);
                }
            }
            else if (graphic) {
                point.graphic = graphic.destroy(); // #1269
            }
        }
        else {
            super.drawPoint(point, verb);
        }
    }
    /**
     * Handle milestones, as they have no x2.
     * @private
     */
    translatePoint(point) {
        let shapeArgs, size;
        super.translatePoint(point);
        if (point.options.milestone) {
            shapeArgs = point.shapeArgs;
            size = shapeArgs.height || 0;
            point.shapeArgs = {
                x: (shapeArgs.x || 0) - (size / 2),
                y: shapeArgs.y,
                width: size,
                height: size
            };
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
GanttSeries.defaultOptions = GanttSeries_merge(XRangeSeries.defaultOptions, Gantt_GanttSeriesDefaults);
GanttSeries_extend(GanttSeries.prototype, {
    pointArrayMap: ['start', 'end', 'y'],
    pointClass: Gantt_GanttPoint,
    setData: GanttSeries_Series.prototype.setData
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('gantt', GanttSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Gantt_GanttSeries = (GanttSeries);

;// ./code/es-modules/masters/modules/gantt.src.js
/**
 * @license Highcharts Gantt JS v12.4.0-modified (2025-11-11)
 * @module highcharts/modules/gantt
 * @requires highcharts
 *
 * Gantt series
 *
 * (c) 2016-2025 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */











// Series


const gantt_src_G = (external_highcharts_src_js_default_default());
// Classes
gantt_src_G.Connection = gantt_src_G.Connection || Gantt_Connection;
gantt_src_G.GanttChart = gantt_src_G.GanttChart || Chart_GanttChart;
gantt_src_G.Navigator = gantt_src_G.Navigator || (accessibility_src_js_default_Navigator_default());
gantt_src_G.RangeSelector = gantt_src_G.RangeSelector || (accessibility_src_js_default_RangeSelector_default());
gantt_src_G.Scrollbar = gantt_src_G.Scrollbar || (accessibility_src_js_default_Scrollbar_default());
// Functions
gantt_src_G.ganttChart = gantt_src_G.GanttChart.ganttChart;
// Compositions
Extensions_ArrowSymbols.compose(gantt_src_G.SVGRenderer);
Extensions_CurrentDateIndication.compose(gantt_src_G.Axis, gantt_src_G.PlotLineOrBand);
Gantt_GanttSeries.compose(gantt_src_G.Axis, gantt_src_G.Chart, gantt_src_G.Series, gantt_src_G.Tick);
gantt_src_G.Navigator.compose(gantt_src_G.Chart, gantt_src_G.Axis, gantt_src_G.Series);
gantt_src_G.RangeSelector.compose(gantt_src_G.Axis, gantt_src_G.Chart);
gantt_src_G.Scrollbar.compose(gantt_src_G.Axis);
/* harmony default export */ const gantt_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/masters/highcharts-gantt.src.js




highcharts_src.product = 'Highcharts Gantt';
/* harmony default export */ const highcharts_gantt_src = (highcharts_src);

export { highcharts_gantt_src as default };
