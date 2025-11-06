import type { AxisCollectionKey } from './AxisOptions';
import type Pane from '../../Extensions/Pane/Pane';
import type RadialAxis from './RadialAxis';
import type RadialAxisOptions from './RadialAxisOptions';
import ColorAxisBase from './Color/ColorAxisBase';
/**
 * @private
 */
interface SolidGaugeAxis extends ColorAxisBase, RadialAxis.AxisComposition {
    center: Array<number>;
    coll: AxisCollectionKey;
    max: number;
    min: number;
    options: (ColorAxisBase.Options & RadialAxisOptions);
    pane: Pane;
}
/**
 * @private
 */
declare function init(axis: RadialAxis.AxisComposition): void;
declare const SolidGaugeAxis: {
    init: typeof init;
};
export default SolidGaugeAxis;
