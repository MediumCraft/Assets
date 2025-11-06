import type AlignObject from '../AlignObject';
import type AnimationOptions from '../../Animation/AnimationOptions';
import type BBoxObject from '../BBoxObject';
import type ColorString from '../../Color/ColorString';
import type ColorType from '../../Color/ColorType';
import type CSSObject from '../CSSObject';
import type { DeepPartial } from '../../../Shared/Types';
import type { DOMElementType, HTMLDOMElement, SVGDOMElement } from '../DOMElementType';
import type FontMetricsObject from '../FontMetricsObject';
import type RectangleObject from '../RectangleObject';
import type ShadowOptionsObject from '../ShadowOptionsObject';
import type SVGAttributes from './SVGAttributes';
import type SVGElementBase from './SVGElementBase';
import type SVGPath from './SVGPath';
import type SVGRenderer from './SVGRenderer';
/**
 * @private
 */
declare module '../CSSObject' {
    interface CSSObject {
        strokeWidth?: (number | string);
    }
}
/**
 * The SVGElement prototype is a JavaScript wrapper for SVG elements used in the
 * rendering layer of Highcharts. Combined with the
 * {@link Highcharts.SVGRenderer}
 * object, these prototypes allow freeform annotation in the charts or even in
 * HTML pages without instanciating a chart. The SVGElement can also wrap HTML
 * labels, when `text` or `label` elements are created with the `useHTML`
 * parameter.
 *
 * The SVGElement instances are created through factory functions on the
 * {@link Highcharts.SVGRenderer}
 * object, like
 * {@link Highcharts.SVGRenderer#rect|rect},
 * {@link Highcharts.SVGRenderer#path|path},
 * {@link Highcharts.SVGRenderer#text|text},
 * {@link Highcharts.SVGRenderer#label|label},
 * {@link Highcharts.SVGRenderer#g|g}
 * and more.
 *
 * See [How to use the SVG Renderer](
 * https://www.highcharts.com/docs/advanced-chart-features/renderer) for a
 * comprehensive tutorial on how to draw SVG elements on a chart.
 *
 * @class
 * @name Highcharts.SVGElement
 */
declare class SVGElement implements SVGElementBase {
    static symbolCustomAttribs: Array<string>;
    added?: boolean;
    alignByTranslate?: boolean;
    alignOptions?: AlignObject;
    alignTo?: BBoxObject | string;
    alignValue?: ('left' | 'center' | 'right');
    clipPath?: SVGElement;
    div?: HTMLDOMElement;
    doTransform?: boolean;
    element: DOMElementType;
    fakeTS?: boolean;
    firstLineMetrics?: FontMetricsObject;
    handleZ?: boolean;
    height?: number;
    imgwidth?: number;
    imgheight?: number;
    inverted: undefined;
    matrix?: Array<number>;
    onEvents: Record<string, Function>;
    opacity: number;
    parentGroup?: SVGElement;
    pathArray?: SVGPath;
    placed?: boolean;
    r?: number;
    radAttr?: SVGAttributes;
    renderer: SVGRenderer;
    rotation?: number;
    rotationOriginX?: number;
    rotationOriginY?: number;
    scaleX?: number;
    scaleY?: number;
    stops?: Array<SVGElement>;
    stroke?: ColorType;
    styledMode?: boolean;
    styles: CSSObject;
    SVG_NS: string;
    symbolName?: string;
    text?: SVGElement;
    textPxLength?: number;
    textStr?: string;
    textWidth?: number;
    translateX?: number;
    translateY?: number;
    visibility?: 'hidden' | 'inherit' | 'visible';
    width?: number;
    x?: number;
    y?: number;
    /**
     * Get the current value of an attribute or pseudo attribute,
     * used mainly for animation. Called internally from
     * the {@link Highcharts.SVGRenderer#attr} function.
     *
     * @private
     * @function Highcharts.SVGElement#_defaultGetter
     *
     * @param {string} key
     *        Property key.
     *
     * @return {number|string}
     *         Property value.
     */
    private _defaultGetter;
    /**
     * @private
     * @function Highcharts.SVGElement#_defaultSetter
     *
     * @param {string} value
     *
     * @param {string} key
     *
     * @param {Highcharts.SVGDOMElement} element
     *
     */
    _defaultSetter(value: string, key: string, element: SVGDOMElement): void;
    /**
     * Add the element to the DOM. All elements must be added this way.
     *
     * @sample highcharts/members/renderer-g
     *         Elements added to a group
     *
     * @function Highcharts.SVGElement#add
     *
     * @param {Highcharts.SVGElement} [parent]
     *        The parent item to add it to. If undefined, the element is added
     *        to the {@link Highcharts.SVGRenderer.box}.
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVGElement for chaining.
     */
    add(parent?: SVGElement): this;
    /**
     * Add a class name to an element.
     *
     * @function Highcharts.SVGElement#addClass
     *
     * @param {string} className
     * The new class name to add.
     *
     * @param {boolean} [replace=false]
     * When true, the existing class name(s) will be overwritten with the new
     * one. When false, the new one is added.
     *
     * @return {Highcharts.SVGElement}
     * Return the SVG element for chainability.
     */
    addClass(className: string, replace?: boolean): this;
    /**
     * This method is executed in the end of `attr()`, after setting all
     * attributes in the hash. In can be used to efficiently consolidate
     * multiple attributes in one SVG property -- e.g., translate, rotate and
     * scale are merged in one "transform" attribute in the SVG node.
     *
     * @private
     * @function Highcharts.SVGElement#afterSetters
     */
    afterSetters(): void;
    /**
     * Align the element relative to the chart or another box.
     *
     * @function Highcharts.SVGElement#align
     *
     * @param {Highcharts.AlignObject} [alignOptions]
     *        The alignment options. The function can be called without this
     *        parameter in order to re-align an element after the box has been
     *        updated.
     *
     * @param {boolean} [alignByTranslate]
     *        Align element by translation.
     *
     * @param {string|Highcharts.BBoxObject} [alignTo]
     *        The box to align to, needs a width and height. When the box is a
     *        string, it refers to an object in the Renderer. For example, when
     *        box is `spacingBox`, it refers to `Renderer.spacingBox` which
     *        holds `width`, `height`, `x` and `y` properties.
     *
     * @param {boolean} [redraw]
     *        Decide if SVGElement should be redrawn with new alignment or
     *        just change its attributes.
     *
     * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
     */
    align(alignOptions?: AlignObject, alignByTranslate?: boolean, alignTo?: (string | BBoxObject), redraw?: boolean): this;
    /**
     * @private
     * @function Highcharts.SVGElement#alignSetter
     * @param {"left"|"center"|"right"} value
     */
    alignSetter(value: ('left' | 'center' | 'right')): void;
    /**
     * Animate to given attributes or CSS properties.
     *
     * @sample highcharts/members/element-on/
     *         Setting some attributes by animation
     *
     * @function Highcharts.SVGElement#animate
     *
     * @param {Highcharts.SVGAttributes} params
     *        SVG attributes or CSS to animate.
     *
     * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [options]
     *        Animation options.
     *
     * @param {Function} [complete]
     *        Function to perform at the end of animation.
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVGElement for chaining.
     */
    animate(params: SVGAttributes, options?: (boolean | DeepPartial<AnimationOptions>), complete?: Function): this;
    /**
     * Apply a text outline through a custom CSS property, by copying the text
     * element and apply stroke to the copy. Used internally. Contrast checks at
     * [example](https://jsfiddle.net/highcharts/43soe9m1/2/).
     *
     * @example
     * // Specific color
     * text.css({
     *    textOutline: '1px black'
     * });
     * // Automatic contrast
     * text.css({
     *    color: '#000000', // black text
     *    textOutline: '1px contrast' // => white outline
     * });
     *
     * @private
     * @function Highcharts.SVGElement#applyTextOutline
     *
     * @param {string} textOutline
     *        A custom CSS `text-outline` setting, defined by `width color`.
     */
    applyTextOutline(textOutline: string): void;
    attr(key: string): (number | string);
    attr(key: string, val: (number | string | ColorType | SVGPath), complete?: Function, continueAnimation?: boolean): this;
    attr(hash?: SVGAttributes, val?: undefined, complete?: Function, continueAnimation?: boolean): this;
    /**
     * Apply a clipping shape to this element.
     *
     * @function Highcharts.SVGElement#clip
     *
     * @param {SVGElement} [clipElem]
     *        The clipping shape. If skipped, the current clip is removed.
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVG element to allow chaining.
     */
    clip(clipElem?: SVGElement): this;
    /**
     * Calculate the coordinates needed for drawing a rectangle crisply and
     * return the calculated attributes.
     *
     * @function Highcharts.SVGElement#crisp
     *
     * @param {Highcharts.RectangleObject} rect
     * Rectangle to crisp.
     *
     * @param {number} [strokeWidth]
     * The stroke width to consider when computing crisp positioning. It can
     * also be set directly on the rect parameter.
     *
     * @return {Highcharts.RectangleObject}
     * The modified rectangle arguments.
     */
    crisp(rect: RectangleObject, strokeWidth?: number): RectangleObject;
    /**
     * Build and apply an SVG gradient out of a common JavaScript configuration
     * object. This function is called from the attribute setters. An event
     * hook is added for supporting other complex color types.
     *
     * @private
     * @function Highcharts.SVGElement#complexColor
     *
     * @param {Highcharts.GradientColorObject|Highcharts.PatternObject} colorOptions
     * The gradient or pattern options structure.
     *
     * @param {string} prop
     * The property to apply, can either be `fill` or `stroke`.
     *
     * @param {Highcharts.SVGDOMElement} elem
     * SVG element to apply the gradient on.
     */
    complexColor(colorOptions: Exclude<ColorType, ColorString>, prop: string, elem: SVGDOMElement): void;
    /**
     * Set styles for the element. In addition to CSS styles supported by
     * native SVG and HTML elements, there are also some custom made for
     * Highcharts, like `width`, `ellipsis` and `textOverflow` for SVG text
     * elements.
     *
     * @sample highcharts/members/renderer-text-on-chart/
     *         Styled text
     *
     * @function Highcharts.SVGElement#css
     *
     * @param {Highcharts.CSSObject} styles
     *        The new CSS styles.
     *
     * @return {Highcharts.SVGElement}
     *         Return the SVG element for chaining.
     */
    css(styles: CSSObject): this;
    /**
     * @private
     * @function Highcharts.SVGElement#dashstyleSetter
     * @param {string} value
     */
    dashstyleSetter(value: string): void;
    /**
     * Destroy the element and element wrapper and clear up the DOM and event
     * hooks.
     *
     * @function Highcharts.SVGElement#destroy
     */
    destroy(): undefined;
    /**
     * @private
     * @function Highcharts.SVGElement#dSettter
     * @param {number|string|Highcharts.SVGPathArray} value
     * @param {string} key
     * @param {Highcharts.SVGDOMElement} element
     */
    dSetter(value: (string | SVGPath), key: string, element: SVGDOMElement): void;
    /**
     * @private
     * @function Highcharts.SVGElement#fillSetter
     * @param {Highcharts.ColorType} value
     * @param {string} key
     * @param {Highcharts.SVGDOMElement} element
     */
    fillSetter(value: ColorType, key: string, element: SVGDOMElement): void;
    /**
     * @private
     * @function Highcharts.SVGElement#hrefSetter
     * @param {Highcharts.ColorType} value
     * @param {string} key
     * @param {Highcharts.SVGDOMElement} element
     */
    hrefSetter(value: string, key: string, element: SVGDOMElement): void;
    /**
     * Get the bounding box (width, height, x and y) for the element. Generally
     * used to get rendered text size. Since this is called a lot in charts,
     * the results are cached based on text properties, in order to save DOM
     * traffic. The returned bounding box includes the rotation, so for example
     * a single text line of rotation 90 will report a greater height, and a
     * width corresponding to the line-height.
     *
     * @sample highcharts/members/renderer-on-chart/
     *         Draw a rectangle based on a text's bounding box
     *
     * @function Highcharts.SVGElement#getBBox
     *
     * @param {boolean} [reload]
     *        Skip the cache and get the updated DOM bounding box.
     *
     * @param {number} [rot]
     *        Override the element's rotation. This is internally used on axis
     *        labels with a value of 0 to find out what the bounding box would
     *        be have been if it were not rotated.
     *
     * @return {Highcharts.BBoxObject}
     *         The bounding box with `x`, `y`, `width` and `height` properties.
     */
    getBBox(reload?: boolean, rot?: number): BBoxObject;
    /**
     * Get the rotated box.
     * @private
     */
    getRotatedBox(box: BBoxObject, rotation: number): BBoxObject;
    /**
     * Get the computed style. Only in styled mode.
     *
     * @example
     * chart.series[0].points[0].graphic.getStyle('stroke-width'); // => '1px'
     *
     * @function Highcharts.SVGElement#getStyle
     *
     * @param {string} prop
     *        The property name to check for.
     *
     * @return {string}
     *         The current computed value.
     */
    getStyle(prop: string): string;
    /**
     * Check if an element has the given class name.
     *
     * @function Highcharts.SVGElement#hasClass
     *
     * @param {string} className
     * The class name to check for.
     *
     * @return {boolean}
     * Whether the class name is found.
     */
    hasClass(className: string): boolean;
    /**
     * Hide the element, similar to setting the `visibility` attribute to
     * `hidden`.
     *
     * @function Highcharts.SVGElement#hide
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVGElement for chaining.
     */
    hide(): this;
    /**
     * @private
     */
    htmlGetBBox(): BBoxObject;
    /**
     * Initialize the SVG element. This function only exists to make the
     * initialization process overridable. It should not be called directly.
     *
     * @function Highcharts.SVGElement#init
     *
     * @param {Highcharts.SVGRenderer} renderer
     * The SVGRenderer instance to initialize to.
     *
     * @param {string} nodeName
     * The SVG node name.
     */
    constructor(renderer: SVGRenderer, nodeName: string);
    /**
     * Add an event listener. This is a simple setter that replaces the
     * previous event of the same type added by this function, as opposed to
     * the {@link Highcharts#addEvent} function.
     *
     * @sample highcharts/members/element-on/
     *         A clickable rectangle
     *
     * @function Highcharts.SVGElement#on
     *
     * @param {string} eventType
     * The event type.
     *
     * @param {Function} handler
     * The handler callback.
     *
     * @return {Highcharts.SVGElement}
     * The SVGElement for chaining.
     */
    on(eventType: string, handler: Function): this;
    /**
     * @private
     * @function Highcharts.SVGElement#opacitySetter
     * @param {string} value
     * @param {string} key
     * @param {Highcharts.SVGDOMElement} element
     */
    opacitySetter(value: string, key: string, element: SVGDOMElement | HTMLDOMElement): void;
    /**
     * Re-align an aligned text or label after setting the text.
     *
     * @private
     * @function Highcharts.SVGElement#reAlign
     *
     */
    protected reAlign(): void;
    /**
     * Remove a class name from the element.
     *
     * @function Highcharts.SVGElement#removeClass
     *
     * @param {string|RegExp} className
     *        The class name to remove.
     *
     * @return {Highcharts.SVGElement} Returns the SVG element for chainability.
     */
    removeClass(className: (string | RegExp)): this;
    /**
     *
     * @private
     */
    removeTextOutline(): void;
    /**
     * Removes an element from the DOM.
     *
     * @private
     * @function Highcharts.SVGElement#safeRemoveChild
     *
     * @param {Highcharts.SVGDOMElement|Highcharts.HTMLDOMElement} element
     * The DOM node to remove.
     */
    safeRemoveChild(element: (SVGDOMElement | HTMLDOMElement)): void;
    /**
     * Set the coordinates needed to draw a consistent radial gradient across
     * a shape regardless of positioning inside the chart. Used on pie slices
     * to make all the slices have the same radial reference point.
     *
     * @function Highcharts.SVGElement#setRadialReference
     *
     * @param {Array<number>} coordinates
     * The center reference. The format is `[centerX, centerY, diameter]` in
     * pixels.
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    setRadialReference(coordinates: Array<number>): this;
    /**
     * Add a shadow to the element. In styled mode, this method is not used,
     * instead use `defs` and filters.
     *
     * @example
     * renderer.rect(10, 100, 100, 100)
     *     .attr({ fill: 'red' })
     *     .shadow(true);
     *
     * @function Highcharts.SVGElement#shadow
     *
     * @param {boolean|Highcharts.ShadowOptionsObject} [shadowOptions] The
     *        shadow options. If `true`, the default options are applied. If
     *        `false`, the current shadow will be removed.
     *
     * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
     */
    shadow(shadowOptions?: (boolean | Partial<ShadowOptionsObject>)): this;
    /**
     * Show the element after it has been hidden.
     *
     * @function Highcharts.SVGElement#show
     *
     * @param {boolean} [inherit=true]
     *        Set the visibility attribute to `inherit` rather than `visible`.
     *        The difference is that an element with `visibility="visible"`
     *        will be visible even if the parent is hidden.
     *
     * @return {Highcharts.SVGElement}
     *         Returns the SVGElement for chaining.
     */
    show(inherit?: boolean): this;
    /**
     * Get the computed stroke width in pixel values. This is used extensively
     * when drawing shapes to ensure the shapes are rendered crisp and
     * positioned correctly relative to each other. Using
     * `shape-rendering: crispEdges` leaves us less control over positioning,
     * for example when we want to stack columns next to each other, or position
     * things pixel-perfectly within the plot box.
     *
     * The common pattern when placing a shape is:
     * - Create the SVGElement and add it to the DOM. In styled mode, it will
     *   now receive a stroke width from the style sheet. In classic mode we
     *   will add the `stroke-width` attribute.
     * - Read the computed `elem.strokeWidth()`.
     * - Place it based on the stroke width.
     *
     * @function Highcharts.SVGElement#strokeWidth
     *
     * @return {number}
     * The stroke width in pixels. Even if the given stroke width (in CSS or by
     * attributes) is based on `em` or other units, the pixel size is returned.
     */
    strokeWidth(): number;
    /**
     * If one of the symbol size affecting parameters are changed,
     * check all the others only once for each call to an element's
     * .attr() method
     *
     * @private
     * @function Highcharts.SVGElement#symbolAttr
     *
     * @param {Highcharts.SVGAttributes} hash
     * The attributes to set.
     */
    symbolAttr(hash: SVGAttributes): void;
    /**
     * @private
     * @function Highcharts.SVGElement#textSetter
     * @param {string} value
     */
    textSetter(value: string): void;
    /**
     * @private
     * @function Highcharts.SVGElement#titleSetter
     * @param {string} value
     */
    titleSetter(value: string): void;
    /**
     * Bring the element to the front. Alternatively, a new zIndex can be set.
     *
     * @sample highcharts/members/element-tofront/
     *         Click an element to bring it to front
     *
     * @function Highcharts.SVGElement#toFront
     *
     * @return {Highcharts.SVGElement}
     * Returns the SVGElement for chaining.
     */
    toFront(): this;
    /**
     * Move an object and its children by x and y values.
     *
     * @function Highcharts.SVGElement#translate
     *
     * @param {number} x
     * The x value.
     *
     * @param {number} y
     * The y value.
     *
     * @return {Highcharts.SVGElement}
     * Translated element.
     */
    translate(x: number, y: number): this;
    /**
     * Update the transform attribute based on internal properties. Deals with
     * the custom `translateX`, `translateY`, `rotation`, `scaleX` and `scaleY`
     * attributes and updates the SVG `transform` attribute.
     *
     * @private
     * @function Highcharts.SVGElement#updateTransform
     */
    updateTransform(attrib?: 'transform' | 'patternTransform'): void;
    /**
     * @private
     * @function Highcharts.SVGElement#visibilitySetter
     *
     * @param {string} value
     *
     * @param {string} key
     *
     * @param {Highcharts.SVGDOMElement} element
     *
     */
    visibilitySetter(value: 'hidden' | 'inherit' | 'visible', key: 'visibility', element: SVGDOMElement): void;
    /**
     * @private
     * @function Highcharts.SVGElement#xGetter
     */
    xGetter(key: string): (number | string | null);
    /**
     * @private
     * @function Highcharts.SVGElement#zIndexSetter
     */
    zIndexSetter(value?: number, key?: string): boolean;
}
interface SVGElement extends SVGElementBase {
    matrixSetter: SVGElement.SetterFunction<(number | string | null)>;
    rotationOriginXSetter(value: number | null, key?: string): void;
    rotationOriginYSetter(value: number | null, key?: string): void;
    rotationSetter(value: number, key?: string): void;
    scaleXSetter: SVGElement.SetterFunction<(number | string | null)>;
    scaleYSetter: SVGElement.SetterFunction<(number | string | null)>;
    'stroke-widthSetter'(value: (number | string), key: string, element: SVGDOMElement): void;
    translateXSetter: SVGElement.SetterFunction<(number | string | null)>;
    translateYSetter: SVGElement.SetterFunction<(number | string | null)>;
    verticalAlignSetter: SVGElement.SetterFunction<(number | string | null)>;
    yGetter(key: string): (number | string | null);
}
declare namespace SVGElement {
    interface ElementSetterFunction<T> {
        (value: T, key: string, element: SVGDOMElement): void;
    }
    interface GetterFunction<T> {
        (key: string): T;
    }
    interface SetterFunction<T> {
        (value: T, key: string): void;
    }
}
export default SVGElement;
