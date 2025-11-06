import type Chart from '../../Core/Chart/Chart';
import type Series from '../../Core/Series/Series';
import type Point from '../../Core/Series/Point';
import type { PropMetrics } from './TimelineFromChart';
import SonificationTimeline from './SonificationTimeline.js';
import SonificationInstrument from './SonificationInstrument.js';
import SonificationSpeaker from './SonificationSpeaker.js';
import SynthPatch from './SynthPatch.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        sonification?: Sonification;
        sonify: (onEnd?: globalThis.Sonification.ChartCallback) => void;
        toggleSonify: (reset?: boolean, onEnd?: globalThis.Sonification.ChartCallback) => void;
        updateSonificationEnabled: () => void;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        sonify: (onEnd?: globalThis.Sonification.ChartCallback) => void;
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        sonify: () => void;
    }
}
/**
 * The Sonification class. This class represents a chart's sonification
 * capabilities. A chart automatically gets an instance of this class when
 * applicable.
 *
 * @sample highcharts/sonification/chart-events
 *         Basic demo accessing some of the chart.sonification methods.
 * @sample highcharts/demo/sonification-navigation
 *         More advanced demo using more functionality.
 *
 * @requires modules/sonification
 *
 * @class
 * @name Highcharts.Sonification
 *
 * @param {Highcharts.Chart} chart The chart to tie the sonification to
 */
declare class Sonification {
    private chart;
    /**
     * Used for testing when working audio is not needed, but we want
     * synchronous timeline calculation.
     * @private
     */
    forceReady?: boolean;
    /**
     * Used for testing, updated on timeline creation
     * @private
     */
    propMetrics?: PropMetrics;
    /**
     * The internal SonificationTimeline, accessed for more advanced
     * functionality & testing
     * @private
     */
    timeline?: SonificationTimeline;
    private unbindKeydown;
    private audioContext?;
    private retryContextCounter;
    private lastUpdate;
    private scheduledUpdate?;
    private audioDestination?;
    private boundaryInstrument?;
    constructor(chart: Chart);
    /**
     * Set the audio destination node to something other than the default
     * output. This allows for inserting custom WebAudio chains after the
     * sonification.
     * @function Highcharts.Sonification#setAudioDestination
     * @param {AudioDestinationNode} audioDestination The destination node
     */
    setAudioDestination(audioDestination: AudioDestinationNode): void;
    /**
     * Check if sonification is playing currently
     * @function Highcharts.Sonification#isPlaying
     * @return {boolean} `true` if currently playing, `false` if not
     */
    isPlaying(): boolean;
    /**
     * Divide timeline into 100 parts of equal time, and play one of them.
     * Can be used for scrubbing navigation.
     * @function Highcharts.Sonification#playSegment
     *
     * @sample highcharts/sonification/scrubbing
     *         Scrubbing with slider
     *
     * @param {number} segment The segment to play, from 0 to 100
     * @param {Highcharts.SonificationChartEventCallback} [onEnd] Callback to call after play completed
     */
    playSegment(segment: number, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Play point(s)/event(s) adjacent to current timeline cursor location.
     * @function Highcharts.Sonification#playAdjacent
     *
     * @sample highcharts/demo/sonification-navigation
     *         Sonification keyboard navigation
     *
     * @param {number} next Pass `true` to play next point, `false` for previous
     * @param {Highcharts.SonificationChartEventCallback} [onEnd]
     * Callback to call after play completed
     * @param {Highcharts.SonificationTimelineFilterCallback} [eventFilter]
     * Filter to apply to the events before finding adjacent to play
     */
    playAdjacent(next: boolean, onEnd?: globalThis.Sonification.ChartCallback, eventFilter?: globalThis.Sonification.TimelineFilterCallback): void;
    /**
     * Play next/previous series, picking the point closest to a prop value
     * from last played point. By default picks the point in the adjacent
     * series with the closest x value as the last played point.
     * @function Highcharts.Sonification#playAdjacentSeries
     *
     * @sample highcharts/demo/sonification-navigation
     *         Sonification keyboard navigation
     *
     * @param {number} next Pass `true` to play next series, `false` for previous
     * @param {string} [prop] Prop to find closest value of, defaults to `x`.
     * @param {Highcharts.SonificationChartEventCallback} [onEnd]
     * Callback to call after play completed
     *
     * @return {Highcharts.Series|null} The played series, or `null` if none found
     */
    playAdjacentSeries(next?: boolean, prop?: keyof Point, onEnd?: globalThis.Sonification.ChartCallback): Series | null;
    /**
     * Play point(s)/event(s) closest to a prop relative to a reference value.
     * @function Highcharts.Sonification#playClosestToProp
     *
     * @param {string} prop Prop to compare.
     * @param {number} targetValue Target value to find closest value of.
     * @param {Highcharts.SonificationTimelineFilterCallback} [targetFilter]
     * Filter to apply to the events before finding closest point(s)
     * @param {Highcharts.SonificationChartEventCallback} [onEnd]
     * Callback to call after play completed
     */
    playClosestToProp(prop: keyof Point, targetValue: number, targetFilter?: globalThis.Sonification.TimelineFilterCallback, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Get last played point
     * @function Highcharts.Sonification#getLastPlayedPoint
     *
     * @sample highcharts/demo/sonification-navigation
     *         Sonification keyboard navigation
     *
     * @return {Highcharts.Point|null} The point, or null if none
     */
    getLastPlayedPoint(): Point | null;
    /**
     * Play a note with a specific instrument, and optionally a time offset.
     * @function Highcharts.Sonification#playNote
     *
     * @sample highcharts/sonification/chart-events
     *         Custom notifications
     *
     * @param {Highcharts.SonificationSynthPreset|Highcharts.SynthPatchOptionsObject} instrument
     * The instrument to play. Can be either a string referencing the
     * instrument presets, or an actual SynthPatch configuration.
     * @param {Highcharts.SonificationInstrumentScheduledEventOptionsObject} options
     * Configuration for the instrument event to play.
     * @param {number} [delayMs]
     * Time offset from now, in milliseconds. Defaults to 0.
     */
    playNote(instrument: string | SynthPatch.SynthPatchOptions, options: SonificationInstrument.ScheduledEventOptions, delayMs?: number): void;
    /**
     * Speak a text string, optionally with a custom speaker configuration
     * @function Highcharts.Sonification#speak
     *
     * @sample highcharts/sonification/chart-events
     *         Custom notifications
     *
     * @param {string} text Text to announce
     * @param {Highcharts.SonificationSpeakerOptionsObject} [speakerOptions]
     * Options for the announcement
     * @param {number} [delayMs]
     * Time offset from now, in milliseconds. Defaults to 0.
     */
    speak(text: string, speakerOptions?: SonificationSpeaker.SpeakerOptions, delayMs?: number): void;
    /**
     * Cancel current playing audio and reset the timeline.
     * @function Highcharts.Sonification#cancel
     */
    cancel(): void;
    /**
     * Start download of a MIDI file export of the timeline.
     * @function Highcharts.Sonification#downloadMIDI
     */
    downloadMIDI(): void;
    /**
     * Implementation of chart.sonify
     * @private
     */
    sonifyChart(resetAfter?: boolean, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Implementation of series.sonify
     * @private
     */
    sonifySeries(series: Series, resetAfter?: boolean, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Implementation of point.sonify
     * @private
     */
    sonifyPoint(point: Point, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Set the overall/master volume for the sonification.
     * Usually handled through chart update.
     * @private
     */
    setMasterVolume(vol: number): void;
    /**
     * Destroy the sonification capabilities
     * @private
     */
    destroy(): void;
    /**
     * Update the timeline with latest chart changes. Usually handled
     * automatically. Note that the [sonification.updateInterval](https://api.highcharts.com/highcharts/sonification.updateInterval)
     * option can stop updates from happening in rapid succession, including
     * manual calls to this function.
     * @private
     */
    update(): void;
    /**
     * Only continue if sonification enabled. If audioContext is
     * suspended, retry up to 20 times with a small delay.
     * @private
     */
    private ready;
    /**
     * Call beforePlay event handler if exists
     * @private
     */
    private beforePlay;
    /**
     * Initialize the builtin boundary hit instrument
     * @private
     */
    private initBoundaryInstrument;
    /**
     * The default boundary hit sound
     * @private
     */
    private defaultBoundaryHit;
}
declare namespace Sonification {
    /**
     * Compose
     * @private
     */
    function compose(ChartClass: typeof Chart, SeriesClass: typeof Series, PointClass: typeof Point): void;
}
export default Sonification;
