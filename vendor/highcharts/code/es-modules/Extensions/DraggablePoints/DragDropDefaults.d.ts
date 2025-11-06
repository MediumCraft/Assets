import type { DragDropGuideBoxOptions, DragDropHandleOptions, DragDropOptions } from './DragDropOptions';
interface DragDropDefaults extends DragDropOptions {
    dragSensitivity: number;
    dragHandle: DragDropHandleOptions;
    guideBox: Record<string, DragDropGuideBoxOptions>;
}
/**
 * The draggable-points module allows points to be moved around or modified in
 * the chart. In addition to the options mentioned under the `dragDrop` API
 * structure, the module fires three events,
 * [point.dragStart](plotOptions.series.point.events.dragStart),
 * [point.drag](plotOptions.series.point.events.drag) and
 * [point.drop](plotOptions.series.point.events.drop).
 *
 * @sample {highcharts|highstock}
 *         highcharts/dragdrop/resize-column
 *         Draggable column and line series
 * @sample {highcharts|highstock}
 *         highcharts/dragdrop/bar-series
 *         Draggable bar
 * @sample {highcharts|highstock}
 *         highcharts/dragdrop/drag-bubble
 *         Draggable bubbles
 * @sample {highcharts|highstock}
 *         highcharts/dragdrop/drag-xrange
 *         Draggable X range series
 * @sample {highcharts|highstock}
 *         highcharts/dragdrop/undraggable-points
 *         Dragging disabled for specific points
 * @sample {highmaps}
 *         maps/series/draggable-mappoint
 *         Draggable Map Point series
 *
 * @declare      Highcharts.SeriesDragDropOptionsObject
 * @since        6.2.0
 * @requires     modules/draggable-points
 * @optionparent plotOptions.series.dragDrop
 */
declare const DragDropDefaults: DragDropDefaults;
export default DragDropDefaults;
