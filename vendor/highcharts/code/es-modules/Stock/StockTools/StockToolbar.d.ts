import type Chart from '../../Core/Chart/Chart';
import type { HTMLDOMElement } from '../../Core/Renderer/DOMElementType';
import type { StockToolsGuiDefinitionsButtonsOptions, StockToolsGuiDefinitionsOptions, StockToolsGuiOptions, StockToolsOptions } from './StockToolsOptions';
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
declare class Toolbar {
    constructor(options: StockToolsGuiOptions, langOptions: (Record<string, string> | undefined), chart: Chart);
    arrowDown: HTMLDOMElement;
    arrowUp: HTMLDOMElement;
    arrowWrapper: HTMLDOMElement;
    chart: Chart;
    eventsToUnbind: Array<Function>;
    guiEnabled: (boolean | undefined);
    iconsURL: string;
    lang: (Record<string, string> | undefined);
    listWrapper: HTMLDOMElement;
    options: StockToolsGuiOptions;
    prevOffsetWidth: (number | undefined);
    showHideBtn: HTMLDOMElement;
    submenu: HTMLDOMElement;
    toolbar: HTMLDOMElement;
    visible: boolean;
    wrapper: HTMLDOMElement;
    guiClassName?: string;
    toolbarClassName?: string;
    buttonList?: Array<string>;
    width: number;
    isDirty: boolean;
    /**
     * Create and set up stockTools buttons with their events and submenus.
     * @private
     */
    createButtons(): void;
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
    addSubmenu(parentBtn: Record<string, HTMLDOMElement>, button: StockToolsGuiDefinitionsButtonsOptions): void;
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
    addSubmenuItems(buttonWrapper: HTMLDOMElement, button: StockToolsGuiDefinitionsButtonsOptions): void;
    /**
     * Erase active class on all other buttons.
     * @private
     */
    eraseActiveButtons(buttons: NodeListOf<ChildNode>, currentButton: HTMLDOMElement, submenuItems?: NodeListOf<HTMLDOMElement>): void;
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
    addButton(target: HTMLDOMElement, options: (StockToolsGuiDefinitionsButtonsOptions | StockToolsGuiDefinitionsOptions), btnName: string, lang?: Record<string, string>): Record<string, HTMLDOMElement>;
    /**
     * Create navigation's HTML elements: container and arrows.
     * @private
     */
    addNavigation(): void;
    /**
     * Add events to navigation (two arrows) which allows user to scroll
     * top/down GUI buttons, if container's height is not enough.
     * @private
     */
    scrollButtons(): void;
    createContainer(): void;
    /**
     * Function called in redraw verifies if the navigation should be visible.
     * @private
     */
    showHideNavigation(): void;
    /**
     * Create button which shows or hides GUI toolbar.
     * @private
     */
    showHideToolbar(): void;
    switchSymbol(button: HTMLDOMElement, redraw?: boolean): void;
    /**
     * Set select state (active class) on button.
     * @private
     */
    toggleButtonActiveClass(button: HTMLDOMElement): void;
    /**
     * Remove active class from all buttons except defined.
     * @private
     */
    unselectAllButtons(button: HTMLDOMElement): void;
    /**
     * Update GUI with given options.
     * @private
     */
    update(options: StockToolsOptions, redraw?: boolean): void;
    /**
     * Destroy all HTML GUI elements.
     * @private
     */
    destroy(): void;
    /**
     * Redraws the toolbar based on the current state of the options.
     * @private
     */
    redraw(): void;
    /**
     * Hadles the change of the `enabled` option.
     * @private
     */
    private handleGuiEnabledChange;
    /**
     * Updates the class names of the GUI and toolbar elements.
     * @private
     */
    private updateClassNames;
    /**
     * Updates the buttons in the toolbar if the button options have changed.
     * @private
     */
    private updateButtons;
    /**
     * Updates visibility based on current options.
     * @private
     */
    private updateVisibility;
    /**
     * @private
     */
    getIconsURL(): string;
}
interface Toolbar {
    /**
     * Mapping JSON fields to CSS classes.
     * @private
     */
    classMapping: Record<string, string>;
}
export default Toolbar;
