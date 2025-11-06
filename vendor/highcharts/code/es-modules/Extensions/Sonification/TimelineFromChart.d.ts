import type Chart from '../../Core/Chart/Chart';
import SonificationTimeline from './SonificationTimeline.js';
interface PropExtremes {
    max: number;
    min: number;
}
type PropExtremesCache = Record<string, PropExtremes>;
interface ExtremesCache {
    globalExtremes: PropExtremesCache;
    seriesExtremes: Array<PropExtremesCache>;
}
export interface PropMetrics extends ExtremesCache {
    seriesTimeProps: Array<Record<string, boolean>>;
}
/**
 * Build a new timeline object from a chart.
 * @private
 */
declare function timelineFromChart(audioContext: AudioContext, destinationNode: AudioDestinationNode, chart: Chart): SonificationTimeline;
export default timelineFromChart;
