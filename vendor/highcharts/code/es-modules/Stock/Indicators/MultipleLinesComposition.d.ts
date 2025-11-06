/**
 *
 *  (c) 2010-2025 Wojciech Chmiel
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
import type SMAIndicator from './SMA/SMAIndicator';
import type SMAOptions from './SMA/SMAOptions';
import type SMAPoint from './SMA/SMAPoint';
import type SVGAttributes from '../../Core/Renderer/SVG/SVGAttributes';
declare namespace MultipleLinesComposition {
    class IndicatorComposition extends SMAIndicator {
        areaLinesNames: Array<string>;
        linesApiNames: Array<string>;
        nextPoints?: Array<SMAPoint>;
        options: IndicatorOptions;
        pointArrayMap: string[];
        pointValKey: string;
    }
    interface IndicatorOptions extends SMAOptions {
        fillColor?: SVGAttributes['fill'];
        gapSize?: number;
    }
    /**
     * Composition useful for all indicators that have more than one line.
     * Compose it with your implementation where you will provide the
     * `getValues` method appropriate to your indicator and `pointArrayMap`,
     * `pointValKey`, `linesApiNames` properties. Notice that `pointArrayMap`
     * should be consistent with the amount of lines calculated in the
     * `getValues` method.
     *
     * @private
     */
    function compose<T extends typeof SMAIndicator>(IndicatorClass: T): (T & typeof IndicatorComposition);
}
export default MultipleLinesComposition;
