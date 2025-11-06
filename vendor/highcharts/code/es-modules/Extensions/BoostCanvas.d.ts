import type { BoostTargetObject } from './Boost/BoostTargetObject';
import type Chart from '../Core/Chart/Chart';
import type Series from '../Core/Series/Series';
import type SeriesRegistry from '../Core/Series/SeriesRegistry';
declare module './Boost/BoostOptions' {
    interface BoostOptions {
        timeRendering?: boolean;
        timeSeriesProcessing?: boolean;
        timeSetup?: boolean;
    }
}
declare module '../Core/Series/SeriesBase' {
    interface SeriesBase extends BoostTargetObject {
        cvsStrokeBatch?: number;
        /** @requires modules/boost-canvas */
        canvasToSVG(): void;
        /** @requires modules/boost-canvas */
        cvsDrawPoint(ctx: CanvasRenderingContext2D, clientX: number, plotY: number, yBottom: number, lastPoint?: Record<string, number>): void;
        /** @requires modules/boost-canvas */
        cvsLineTo(ctx: CanvasRenderingContext2D, clientX: number, plotY: number): void;
        /** @requires modules/boost-canvas */
        cvsMarkerCircle(ctx: CanvasRenderingContext2D, clientX: number, plotY: number, r: number, i?: number): void;
        /** @requires modules/boost-canvas */
        cvsMarkerSquare(ctx: CanvasRenderingContext2D, clientX: number, plotY: number, r: number): void;
        /** @requires modules/boost-canvas */
        getContext(): (CanvasRenderingContext2D | null | undefined);
        /** @requires modules/boost-canvas */
        renderCanvas(): void;
    }
}
declare namespace BoostCanvas {
    /**
     * @private
     */
    function compose(ChartClass: typeof Chart, SeriesClass: typeof Series, seriesTypes: typeof SeriesRegistry.seriesTypes): void;
}
export default BoostCanvas;
