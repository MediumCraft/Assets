import type Point from '../../Core/Series/Point.js';
import type SonificationSpeaker from './SonificationSpeaker';
import SonificationInstrument from './SonificationInstrument.js';
declare global {
    namespace Sonification {
        interface TimelineEvent {
            time: number;
            relatedPoint?: Point;
            instrumentEventOptions?: SonificationInstrument.ScheduledEventOptions;
            speechOptions?: SonificationSpeaker.SpeakerOptions;
            message?: string;
            callback?: Function;
        }
    }
}
/**
 * Represents a channel of TimelineEvents for an engine (either an instrument
 * or a speaker).
 * @private
 */
declare class TimelineChannel {
    type: 'instrument' | 'speech';
    engine: SonificationInstrument | SonificationSpeaker;
    showPlayMarker: boolean;
    events: Sonification.TimelineEvent[];
    muted?: boolean;
    constructor(type: 'instrument' | 'speech', engine: SonificationInstrument | SonificationSpeaker, showPlayMarker?: boolean, events?: Sonification.TimelineEvent[], muted?: boolean);
    addEvent(event: Sonification.TimelineEvent): Sonification.TimelineEvent;
    mute(): void;
    unmute(): void;
    cancel(): void;
    destroy(): void;
}
export default TimelineChannel;
