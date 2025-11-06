import type SonificationSpeaker from './SonificationSpeaker';
import type Chart from '../../Core/Chart/Chart';
import type Point from '../../Core/Series/Point';
import TimelineChannel from './TimelineChannel.js';
import SonificationInstrument from './SonificationInstrument.js';
declare global {
    namespace Sonification {
        type TimelineFilterCallback = (e: Sonification.TimelineEvent, ix: number, arr: Sonification.TimelineEvent[]) => boolean;
    }
}
interface SonificationTimelineOptions {
    onPlay?: Sonification.ChartCallback;
    onEnd?: Sonification.ChartCallback;
    onStop?: Sonification.ChartCallback;
    showTooltip?: boolean;
    showCrosshair?: boolean;
    skipThreshold?: number;
}
/**
 * The SonificationTimeline class. This class represents a timeline of
 * audio events scheduled to play. It provides functionality for manipulating
 * and navigating the timeline.
 * @private
 */
declare class SonificationTimeline {
    private chart?;
    isPaused: boolean;
    isPlaying: boolean;
    channels: TimelineChannel[];
    private scheduledCallbacks;
    private playingChannels?;
    private options;
    private playTimestamp;
    private resumeFromTime;
    private onEndArgument?;
    constructor(options?: SonificationTimelineOptions, chart?: Chart | undefined);
    addChannel(type: 'instrument' | 'speech', engine: SonificationInstrument | SonificationSpeaker, showPlayMarker?: boolean, events?: Sonification.TimelineEvent[]): TimelineChannel;
    play(filter?: Sonification.TimelineFilterCallback, filterPersists?: boolean, resetAfter?: boolean, onEnd?: Sonification.ChartCallback): void;
    pause(): number;
    getCurrentTime(): number;
    getLength(): number;
    resume(): void;
    anchorPlayMoment(eventFilter: Sonification.TimelineFilterCallback, onEnd?: Sonification.ChartCallback): void;
    playAdjacent(next: boolean, onEnd?: Sonification.ChartCallback, onBoundaryHit?: Sonification.BoundaryHitCallback, eventFilter?: Sonification.TimelineFilterCallback): void;
    playClosestToPropValue(prop: keyof Point, targetVal: number, onEnd?: Sonification.ChartCallback, onBoundaryHit?: Sonification.BoundaryHitCallback, eventFilter?: Sonification.TimelineFilterCallback): void;
    getEventsForPoint(point: Point): Sonification.TimelineEvent[];
    playSegment(segment: number, onEnd?: Sonification.ChartCallback): void;
    getLastPlayedPoint(filter?: Sonification.TimelineFilterCallback): Point | null;
    reset(): void;
    cancel(): void;
    destroy(): void;
    setMasterVolume(vol: number): void;
    getMIDIData(): Uint8Array;
    downloadMIDI(filename?: string): void;
    private resetPlayState;
    private clearScheduledCallbacks;
}
export default SonificationTimeline;
