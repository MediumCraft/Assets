import type AnnotationChart from './AnnotationChart';
import type ControlPointOptions from './ControlPointOptions';
import type ControlTarget from './ControlTarget';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import EventEmitter from './EventEmitter.js';
declare module './MockPointOptions' {
    interface MockPointOptions {
        controlPoint?: ControlPointOptions;
    }
}
/**
 * A control point class which is a connection between controllable
 * transform methods and a user actions.
 *
 * @requires modules/annotations
 *
 * @class
 * @name Highcharts.AnnotationControlPoint
 *
 * @hideconstructor
 *
 * @param {Highcharts.Chart} chart
 * A chart instance.
 *
 * @param {Highcharts.AnnotationControllable} target
 * A controllable instance which is a target for a control point.
 *
 * @param {Highcharts.AnnotationControlPointOptionsObject} options
 * An options object.
 *
 * @param {number} [index]
 * Point index.
 */
declare class ControlPoint extends EventEmitter {
    constructor(chart: AnnotationChart, target: ControlTarget, options: ControlPointOptions, index?: number);
    chart: AnnotationChart;
    graphic: SVGElement;
    index: number;
    /**
     * List of events for `annotation.options.events` that should not be
     * added to `annotation.graphic` but to the `annotation`.
     * @private
     * @name Highcharts.AnnotationControlPoint#nonDOMEvents
     * @type {Array<string>}
     */
    nonDOMEvents: string[];
    options: ControlPointOptions;
    target: ControlTarget;
    /**
     * Destroy the control point.
     * @private
     */
    destroy(): void;
    /**
     * Redraw the control point.
     * @private
     * @param {boolean} [animation]
     */
    redraw(animation?: boolean): void;
    /**
     * Render the control point.
     * @private
     */
    render(): void;
    /**
     * Set the visibility of the control point.
     *
     * @function Highcharts.AnnotationControlPoint#setVisibility
     *
     * @param {boolean} visible
     * Visibility of the control point.
     *
     */
    setVisibility(visible: boolean): void;
    /**
     * Update the control point.
     *
     * @function Highcharts.AnnotationControlPoint#update
     *
     * @param {Partial<Highcharts.AnnotationControlPointOptionsObject>} userOptions
     * New options for the control point.
     */
    update(userOptions: Partial<ControlPointOptions>): void;
}
export default ControlPoint;
