import type TimelineChannel from './TimelineChannel';
/**
 * Get MIDI data from a set of Timeline instrument channels.
 *
 * Outputs multi-track MIDI for Timelines with multiple channels.
 *
 * @private
 */
declare function toMIDI(channels: TimelineChannel[]): Uint8Array;
export default toMIDI;
