import type BulletPointOptions from './BulletPointOptions';
import type BulletSeries from './BulletSeries';
import ColumnSeries from '../Column/ColumnSeries.js';
import SVGElement from '../../Core/Renderer/SVG/SVGElement.js';
declare class BulletPoint extends ColumnSeries.prototype.pointClass {
    borderColor: BulletPointOptions['borderColor'];
    options: BulletPointOptions;
    series: BulletSeries;
    target?: number;
    targetGraphic?: SVGElement;
    /**
     * Destroys target graphic.
     * @private
     */
    destroy(): undefined;
}
export default BulletPoint;
