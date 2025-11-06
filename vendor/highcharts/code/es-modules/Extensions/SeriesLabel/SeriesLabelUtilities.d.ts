import type { LabelIntersectBoxObject } from './SeriesLabelOptions';
/**
 * Detect if a box intersects with a line.
 *
 * @private
 * @function boxIntersectLine
 */
declare function boxIntersectLine(x: number, y: number, w: number, h: number, x1: number, y1: number, x2: number, y2: number): boolean;
/**
 * @private
 */
declare function intersectRect(r1: LabelIntersectBoxObject, r2: LabelIntersectBoxObject): boolean;
declare const SeriesLabelUtilities: {
    boxIntersectLine: typeof boxIntersectLine;
    intersectRect: typeof intersectRect;
};
export default SeriesLabelUtilities;
