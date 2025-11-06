import type Annotation from './Annotation';
import type AnnotationChart from './AnnotationChart';
import type Chart from '../../Core/Chart/Chart';
import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type NavigationBindingsBase from './NavigationBindingsBase';
import type NavigationBindingsOptions from './NavigationBindingsOptions';
import type NavigationOptions from '../Exporting/NavigationOptions';
import type Pointer from '../../Core/Pointer';
import type PointerEvent from '../../Core/PointerEvent';
import type { default as Popup } from './Popup/Popup';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        navigationBindings?: NavigationBindings;
        /** @requires modules/annotations */
        initNavigationBindings(): void;
    }
}
declare module '../../Core/PointerEvent' {
    interface PointerEvent {
        activeAnnotation?: boolean;
    }
}
interface NavigationBindingsButtonEventsObject {
    button: HTMLDOMElement;
    events: NavigationBindingsOptions;
}
/**
 * @private
 */
declare class NavigationBindings {
    static annotationsEditable: {
        nestedOptions: Record<string, Array<string>>;
        circle: string[];
        ellipse: string[];
        verticalLine: never[];
        label: string[];
        measure: string[];
        fibonacci: never[];
        tunnel: string[];
        pitchfork: string[];
        rect: string[];
        crookedLine: never[];
        basicAnnotation: string[];
    };
    static annotationsNonEditable: {
        rectangle: string[];
        ellipse: string[];
        circle: string[];
    };
    static compose(AnnotationClass: typeof Annotation, ChartClass: typeof Chart): void;
    constructor(chart: AnnotationChart, options: NavigationOptions);
    activeAnnotation?: (false | Annotation);
    boundClassNames: Record<string, NavigationBindingsOptions>;
    chart: AnnotationChart;
    container: HTMLCollectionOf<HTMLDOMElement>;
    currentUserDetails?: Annotation;
    eventsToUnbind: Array<Function>;
    mouseMoveEvent?: (false | Function);
    nextEvent?: (false | Function);
    options: NavigationOptions;
    popup?: Popup;
    selectedButtonElement?: (HTMLDOMElement | null);
    selectedButton: (NavigationBindingsOptions | null);
    stepIndex?: number;
    steps?: boolean;
    getCoords(e: PointerEvent): [
        Pointer.AxisCoordinateObject | undefined,
        Pointer.AxisCoordinateObject | undefined
    ];
    /**
     * Init all events connected to NavigationBindings.
     *
     * @private
     * @function Highcharts.NavigationBindings#initEvents
     */
    initEvents(): void;
    /**
     * Common chart.update() delegation, shared between bindings and exporting.
     *
     * @private
     * @function Highcharts.NavigationBindings#initUpdate
     */
    initUpdate(): void;
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
    bindingsButtonClick(button: HTMLDOMElement, events: NavigationBindingsOptions, clickEvent: PointerEvent): void;
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
    bindingsChartClick(chart: AnnotationChart, clickEvent: PointerEvent): void;
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
    bindingsContainerMouseMove(_container: HTMLDOMElement, moveEvent: Event): void;
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
    fieldsToOptions<T>(fields: Record<string, string>, config: T): T;
    /**
     * Shorthand method to deselect an annotation.
     *
     * @function Highcharts.NavigationBindings#deselectAnnotation
     */
    deselectAnnotation(): void;
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
    annotationToFields(annotation: Annotation): Record<string, string>;
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
    getClickedClassNames(container: HTMLDOMElement, event: Event): Array<[string, HTMLDOMElement]>;
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
    getButtonEvents(container: HTMLDOMElement, event: Event): (NavigationBindingsButtonEventsObject | undefined);
    /**
     * Bindings are just events, so the whole update process is simply
     * removing old events and adding new ones.
     *
     * @private
     * @function Highcharts.NavigationBindings#update
     */
    update(options?: NavigationOptions): void;
    /**
     * Remove all events created in the navigation.
     *
     * @private
     * @function Highcharts.NavigationBindings#removeEvents
     */
    removeEvents(): void;
    /**
     * @private
     * @function Highcharts.NavigationBindings#destroy
     */
    destroy(): void;
}
interface NavigationBindings extends NavigationBindingsBase {
}
export default NavigationBindings;
