import type AxisComposition from '../AxisComposition';
import type AxisOptions from '../AxisOptions';
import type Chart from '../../Chart/Chart';
import type ColorType from '../../Color/ColorType';
import type { GradientColorStop } from '../../Color/GradientColor';
import type Point from '../../Series/Point';
interface ColorAxisBase extends AxisComposition {
    chart: Chart;
    dataClasses: Array<ColorAxisBase.DataClassOptions>;
    index: number;
    options: ColorAxisBase.Options;
    stops: Array<GradientColorStop>;
    initDataClasses(userOptions: Partial<ColorAxisBase.Options>): void;
    initStops(): void;
    normalizedValue(value: number): number;
    toColor(value: number, point: Point): (ColorType | undefined);
}
declare namespace ColorAxisBase {
    interface Options extends AxisOptions {
        dataClassColor?: string;
        dataClasses?: Array<DataClassOptions>;
        maxColor?: ColorType;
        minColor?: ColorType;
        stops?: Array<GradientColorStop>;
    }
    interface DataClassOptions {
        color?: ColorType;
        colorIndex?: number;
        from?: number;
        name?: string;
        to?: number;
    }
    /**
     * Initialize defined data classes.
     * @private
     */
    function initDataClasses(this: ColorAxisBase, userOptions: Partial<Options>): void;
    /**
     * Create initial color stops.
     * @private
     */
    function initStops(this: ColorAxisBase): void;
    /**
     * Normalize logarithmic values.
     * @private
     */
    function normalizedValue(this: ColorAxisBase, value: number): number;
    /**
     * Translate from a value to a color.
     * @private
     */
    function toColor(this: ColorAxisBase, value: number, point: Point): (ColorType | undefined);
}
export default ColorAxisBase;
