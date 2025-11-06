import type Axis from './Axis.js';
import type Chart from '../Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type Pane from '../../Extensions/Pane/Pane';
import type { PaneBackgroundShapeValue } from '../../Extensions/Pane/PaneOptions.js';
import type PlotBandOptions from './PlotLineOrBand/PlotBandOptions';
import type PlotLineOptions from './PlotLineOrBand/PlotLineOptions';
import type Point from '../Series/Point';
import type PositionObject from '../Renderer/PositionObject';
import type SVGPath from '../Renderer/SVG/SVGPath';
import type Tick from './Tick';
import type RadialAxisOptions from './RadialAxisOptions';
declare module './AxisOptions' {
    interface AxisOptions {
        angle?: number;
        gridLineInterpolation?: ('circle' | 'polygon');
    }
}
declare module './AxisType' {
    interface AxisTypeRegistry {
        RadialAxis: RadialAxis.AxisComposition;
    }
}
declare module '../Chart/ChartBase' {
    interface ChartBase {
        inverted?: boolean;
    }
}
declare module './PlotLineOrBand/PlotBandOptions' {
    interface PlotBandOptions {
        innerRadius?: (number | string);
        outerRadius?: (number | string);
        shape?: PaneBackgroundShapeValue;
        thickness?: (number | string);
    }
}
declare module './PlotLineOrBand/PlotLineOptions' {
    interface PlotLineOptions {
        chartX?: number;
        chartY?: number;
        isCrosshair?: boolean;
        point?: Point;
        reverse?: boolean;
    }
}
declare namespace RadialAxis {
    interface RadialDefaultOptions {
        circular: DeepPartial<RadialAxisOptions>;
        radial: DeepPartial<RadialAxisOptions>;
        radialGauge: DeepPartial<RadialAxisOptions>;
    }
    export class AxisComposition extends Axis {
        angleRad: number;
        autoConnect?: boolean;
        center: Array<number>;
        endAngleRad: number;
        isCircular?: boolean;
        isHidden?: boolean;
        labelCollector?: Chart.LabelCollectorFunction;
        max: number;
        min: number;
        minPointOffset: number;
        normalizedEndAngleRad: number;
        normalizedStartAngleRad: number;
        offset: number;
        options: RadialAxisOptions;
        pane: Pane;
        isRadial: boolean;
        sector?: number;
        startAngleRad: number;
        createLabelCollector(): Chart.LabelCollectorFunction;
        beforeSetTickPositions(): void;
        getCrosshairPosition(options: PlotLineOptions, x1: number, y1: number): [(number | undefined), number, number];
        getLinePath(lineWidth: number, radius?: number, innerRadius?: number): SVGPath;
        getOffset(): void;
        getPlotBandPath(from: number, to: number, options: PlotBandOptions): SVGPath;
        getPlotLinePath(options: PlotLineOptions): SVGPath;
        getPosition(value: number, length?: number): PositionObject;
        getTitlePosition(): PositionObject;
        postTranslate(angle: number, radius: number): PositionObject;
        setAxisSize(): void;
        setAxisTranslation(): void;
        setOptions(userOptions: DeepPartial<RadialAxisOptions>): void;
    }
    export class TickComposition extends Tick {
        axis: RadialAxis.AxisComposition;
    }
    export const radialDefaultOptions: RadialDefaultOptions;
    /**
     * Augments methods for the value axis.
     *
     * @private
     *
     * @param {Highcharts.Axis} AxisClass
     * Axis class to extend.
     *
     * @param {Highcharts.Tick} TickClass
     * Tick class to use.
     *
     * @return {Highcharts.Axis}
     * Axis composition.
     */
    export function compose<T extends typeof Axis>(AxisClass: T, TickClass: typeof Tick): (T & typeof AxisComposition);
    export {};
}
export default RadialAxis;
