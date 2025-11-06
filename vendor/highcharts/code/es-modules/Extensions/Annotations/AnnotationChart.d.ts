import type { AnnotationOptions, ChartOptions } from './AnnotationOptions';
import type AnnotationSeries from './AnnotationSeries';
import type Chart from '../../Core/Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type NavigationBindings from './NavigationBindings';
import type Pointer from '../../Core/Pointer';
import type SVGElement from '../../Core/Renderer/SVG/SVGElement';
import Annotation from './Annotation.js';
declare class AnnotationChart extends Chart {
    annotations: Array<Annotation>;
    controlPointsGroup: SVGElement;
    navigationBindings: NavigationBindings;
    options: ChartOptions;
    plotBoxClip: SVGElement;
    series: Array<AnnotationSeries>;
    addAnnotation(userOptions: DeepPartial<AnnotationOptions>, redraw?: boolean): Annotation;
    drawAnnotations(): void;
    initAnnotation(userOptions: AnnotationOptions): Annotation;
    removeAnnotation(idOrAnnotation: (number | string | Annotation)): void;
}
/**
 * @private
 */
declare namespace AnnotationChart {
    /**
     * @private
     */
    function compose(AnnotationClass: typeof Annotation, ChartClass: typeof Chart, PointerClass: typeof Pointer): void;
}
export default AnnotationChart;
