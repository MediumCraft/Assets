type EnvelopePoint = Record<'t' | 'vol', number>;
type Envelope = Array<EnvelopePoint>;
type OscType = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'whitenoise' | 'pulse';
interface FilterOptions {
    frequency?: number;
    frequencyPitchTrackingMultiplier?: number;
    Q?: number;
}
interface EQOptions {
    frequency?: number;
    gain?: number;
    Q?: number;
}
interface OscOptions {
    attackEnvelope?: Envelope;
    detune?: number;
    freqMultiplier?: number;
    fixedFrequency?: number;
    fmOscillator?: number;
    highpass?: FilterOptions;
    lowpass?: FilterOptions;
    pulseWidth?: number;
    releaseEnvelope?: Envelope;
    type?: OscType;
    vmOscillator?: number;
    volume?: number;
    volumePitchTrackingMultiplier?: number;
}
declare namespace SynthPatch {
    interface SynthPatchOptions {
        eq?: Array<EQOptions>;
        masterAttackEnvelope?: Envelope;
        masterReleaseEnvelope?: Envelope;
        masterVolume?: number;
        noteGlideDuration?: number;
        oscillators?: Array<OscOptions>;
        midiInstrument?: number;
    }
}
/**
 * The SynthPatch class. This class represents an instance and configuration
 * of the built-in Highcharts synthesizer. It can be used to play various
 * generated sounds.
 *
 * @sample highcharts/sonification/manual-using-synth
 *         Using Synth directly to sonify manually
 * @sample highcharts/sonification/custom-instrument
 *         Using custom Synth options with chart
 *
 * @requires modules/sonification
 *
 * @class
 * @name Highcharts.SynthPatch
 *
 * @param {AudioContext} audioContext
 *        The AudioContext to use.
 * @param {Highcharts.SynthPatchOptionsObject} options
 *        Configuration for the synth.
 */
declare class SynthPatch {
    private audioContext;
    private options;
    static stopRampTime: number;
    readonly midiInstrument: number;
    private outputNode;
    private eqNodes;
    private oscillators;
    constructor(audioContext: AudioContext, options: SynthPatch.SynthPatchOptions);
    /**
     * Start the oscillators, but don't output sound.
     * @function Highcharts.SynthPatch#startSilently
     */
    startSilently(): void;
    /**
     * Stop the synth. It can't be started again.
     * @function Highcharts.SynthPatch#stop
     */
    stop(): void;
    /**
     * Mute sound at time (in seconds).
     * Will still run release envelope. Note: If scheduled multiple times in
     * succession, the release envelope will run, and that could make sound.
     * @function Highcharts.SynthPatch#silenceAtTime
     * @param {number} time Time offset from now, in seconds
     */
    silenceAtTime(time: number): void;
    /**
     * Mute sound immediately.
     * @function Highcharts.SynthPatch#mute
     */
    mute(): void;
    /**
     * Play a frequency at time (in seconds).
     * Time denotes when the attack ramp starts. Note duration is given in
     * milliseconds. If note duration is not given, the note plays indefinitely.
     * @function Highcharts.SynthPatch#silenceAtTime
     * @param {number} time Time offset from now, in seconds
     * @param {number} frequency The frequency to play at
     * @param {number|undefined} noteDuration Duration to play, in milliseconds
     */
    playFreqAtTime(time: number, frequency: number, noteDuration?: number): void;
    /**
     * Cancel any scheduled actions
     * @function Highcharts.SynthPatch#cancelScheduled
     */
    cancelScheduled(): void;
    /**
     * Connect the SynthPatch output to an audio node / destination.
     * @function Highcharts.SynthPatch#connect
     * @param {AudioNode} destinationNode The node to connect to.
     * @return {AudioNode} The destination node, to allow chaining.
     */
    connect(destinationNode: AudioNode): AudioNode;
    /**
     * Create nodes for master EQ
     * @private
     */
    private createEqChain;
    /**
     * Fade by release envelopes at time
     * @private
     */
    private releaseAtTime;
}
export default SynthPatch;
