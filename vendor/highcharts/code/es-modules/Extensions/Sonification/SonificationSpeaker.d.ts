declare namespace SonificationSpeaker {
    interface SpeakerOptions {
        name?: string;
        language?: string;
        pitch?: number;
        rate?: number;
        volume?: number;
    }
}
/**
 * The SonificationSpeaker class. This class represents an announcer using
 * speech synthesis. It allows for scheduling speech announcements, as well
 * as speech parameter changes - including rate, volume and pitch.
 *
 * @sample highcharts/demo/sonification-navigation
 *         Demo using SonificationSpeaker directly for some announcements
 *
 * @requires modules/sonification
 *
 * @class
 * @name Highcharts.SonificationSpeaker
 *
 * @param {Highcharts.SonificationSpeakerOptionsObject} options
 *        Configuration for the speaker
 */
declare class SonificationSpeaker {
    private options;
    private synthesis;
    private voice?;
    private scheduled;
    private masterVolume;
    constructor(options: SonificationSpeaker.SpeakerOptions);
    /**
     * Say a message using the speaker voice. Interrupts other currently
     * speaking announcements from this speaker.
     * @function Highcharts.SonificationSpeaker#say
     * @param {string} message The message to speak.
     * @param {SonificationSpeakerOptionsObject} [options]
     * Optionally override speaker configuration.
     */
    say(message: string, options?: SonificationSpeaker.SpeakerOptions): void;
    /**
     * Schedule a message using the speaker voice.
     * @function Highcharts.SonificationSpeaker#sayAtTime
     * @param {number} time
     * The time offset to speak at, in milliseconds from now.
     * @param {string} message
     * The message to speak.
     * @param {SonificationSpeakerOptionsObject} [options]
     * Optionally override speaker configuration.
     */
    sayAtTime(time: number, message: string, options?: SonificationSpeaker.SpeakerOptions): void;
    /**
     * Clear scheduled announcements, and stop current speech.
     * @function Highcharts.SonificationSpeaker#cancel
     */
    cancel(): void;
    /**
     * Stop speech and release any used resources
     * @private
     */
    destroy(): void;
    /**
     * Set speaker overall/master volume modifier. This affects all
     * announcements, and applies in addition to the individual announcement
     * volume.
     * @function Highcharts.SonificationSpeaker#setMasterVolume
     * @param {number} vol Volume from 0 to 1.
     */
    setMasterVolume(vol: number): void;
    /**
     * Set the active synthesis voice for the speaker.
     * @private
     */
    private setVoice;
}
export default SonificationSpeaker;
