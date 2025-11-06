import type Chart from '../../Core/Chart/Chart';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /** @requires Extensions/Fullscreen */
        fullscreen?: Fullscreen;
    }
}
/**
 * Handles displaying chart's container in the fullscreen mode.
 *
 * **Note**: Fullscreen is not supported on iPhone due to iOS limitations.
 *
 * @class
 * @name Highcharts.Fullscreen
 *
 * @requires modules/exporting
 */
declare class Fullscreen {
    /**
     * Prepares the chart class to support fullscreen.
     *
     * @param {typeof_Highcharts.Chart} ChartClass
     * The chart class to decorate with fullscreen support.
     */
    static compose(ChartClass: typeof Chart): void;
    constructor(chart: Chart);
    /** @private */
    browserProps?: Fullscreen.BrowserProperties;
    chart: Chart;
    isOpen: boolean;
    /** @private */
    origHeight?: number;
    /** @private */
    origHeightOption?: (number | string | null);
    /** @private */
    origWidth?: number;
    /** @private */
    origWidthOption?: (number | null);
    /** @private */
    unbindFullscreenEvent?: Function;
    /**
     * Stops displaying the chart in fullscreen mode.
     * Exporting module required.
     *
     * @since       8.0.1
     *
     * @function    Highcharts.Fullscreen#close
     * @return      {void}
     * @requires    modules/full-screen
     */
    close(): void;
    /**
     * Displays the chart in fullscreen mode.
     * When fired customly by user before exporting context button is created,
     * button's text will not be replaced - it's on the user side.
     * Exporting module required.
     *
     * @since       8.0.1
     *
     * @function Highcharts.Fullscreen#open
     * @return      {void}
     * @requires    modules/full-screen
     */
    open(): void;
    /**
     * Replaces the exporting context button's text when toogling the
     * fullscreen mode.
     *
     * @private
     *
     * @since 8.0.1
     *
     * @requires modules/full-screen
     */
    private setButtonText;
    /**
     * Toggles displaying the chart in fullscreen mode.
     * By default, when the exporting module is enabled, a context button with
     * a drop down menu in the upper right corner accesses this function.
     * Exporting module required.
     *
     * @since 8.0.1
     *
     * @sample      highcharts/members/chart-togglefullscreen/
     *              Toggle fullscreen mode from a HTML button
     *
     * @function Highcharts.Fullscreen#toggle
     * @requires    modules/full-screen
     */
    toggle(): void;
}
declare namespace Fullscreen {
    interface BrowserProperties {
        fullscreenChange: ('fullscreenchange' | 'mozfullscreenchange' | 'webkitfullscreenchange' | 'MSFullscreenChange');
        requestFullscreen: ('msRequestFullscreen' | 'mozRequestFullScreen' | 'requestFullscreen' | 'webkitRequestFullScreen');
        exitFullscreen: ('exitFullscreen' | 'mozCancelFullScreen' | 'webkitExitFullscreen' | 'msExitFullscreen');
    }
}
export default Fullscreen;
