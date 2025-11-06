/**
 * @license Highstock JS v12.4.0-modified (2025-11-06)
 * @module highcharts/indicators/indicators-all
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * All technical indicators for Highcharts Stock
 *
 * (c) 2010-2025 Pawel Fus
 *
 * License: www.highcharts.com/license
 */
import * as __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__ from "../highcharts.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__modules_datagrouping_src_js_b7a4250c__ from "../modules/datagrouping.src.js";
import * as __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_59783372__ from "../modules/accessibility.src.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external ["../highcharts.src.js","default"]
const external_highcharts_src_js_default_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"];
var external_highcharts_src_js_default_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_namespaceObject);
;// external ["../highcharts.src.js","default","Chart"]
const external_highcharts_src_js_default_Chart_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Chart;
var external_highcharts_src_js_default_Chart_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Chart_namespaceObject);
;// external ["../highcharts.src.js","default","SeriesRegistry"]
const external_highcharts_src_js_default_SeriesRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SeriesRegistry;
var external_highcharts_src_js_default_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SeriesRegistry_namespaceObject);
;// ./code/es-modules/Stock/Indicators/SMA/SMAIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { line: LineSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { addEvent, fireEvent, error, extend, isArray, merge, pick } = (external_highcharts_src_js_default_default());
/**
 *
 * Return the parent series values in the legacy two-dimensional yData
 * format
 * @private
 */
const tableToMultiYData = (series, processed) => {
    const yData = [], pointArrayMap = series.pointArrayMap, table = processed && series.dataTable.getModified() || series.dataTable;
    if (!pointArrayMap) {
        return series.getColumn('y', processed);
    }
    const columns = pointArrayMap.map((key) => series.getColumn(key, processed));
    for (let i = 0; i < table.rowCount; i++) {
        const values = pointArrayMap.map((key, colIndex) => columns[colIndex]?.[i] || 0);
        yData.push(values);
    }
    return yData;
};
/* *
 *
 *  Class
 *
 * */
/**
 * The SMA series type.
 *
 * @private
 */
class SMAIndicator extends LineSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    destroy() {
        this.dataEventsToUnbind.forEach(function (unbinder) {
            unbinder();
        });
        super.destroy.apply(this, arguments);
    }
    /**
     * @private
     */
    getName() {
        const params = [];
        let name = this.name;
        if (!name) {
            (this.nameComponents || []).forEach(function (component, index) {
                params.push(this.options.params[component] +
                    pick(this.nameSuffixes[index], ''));
            }, this);
            name = (this.nameBase || this.type.toUpperCase()) +
                (this.nameComponents ? ' (' + params.join(', ') + ')' : '');
        }
        return name;
    }
    /**
     * @private
     */
    getValues(series, params) {
        const period = params.period, xVal = series.xData || [], yVal = series.yData, yValLen = yVal.length, SMA = [], xData = [], yData = [];
        let i, index = -1, range = 0, SMAPoint, sum = 0;
        if (xVal.length < period) {
            return;
        }
        // Switch index for OHLC / Candlestick / Arearange
        if (isArray(yVal[0])) {
            index = params.index ? params.index : 0;
        }
        // Accumulate first N-points
        while (range < period - 1) {
            sum += index < 0 ? yVal[range] : yVal[range][index];
            range++;
        }
        // Calculate value one-by-one for each period in visible data
        for (i = range; i < yValLen; i++) {
            sum += index < 0 ? yVal[i] : yVal[i][index];
            SMAPoint = [xVal[i], sum / period];
            SMA.push(SMAPoint);
            xData.push(SMAPoint[0]);
            yData.push(SMAPoint[1]);
            sum -= (index < 0 ?
                yVal[i - range] :
                yVal[i - range][index]);
        }
        return {
            values: SMA,
            xData: xData,
            yData: yData
        };
    }
    /**
     * @private
     */
    init(chart, options) {
        const indicator = this;
        super.init.call(indicator, chart, options);
        // Only after series are linked indicator can be processed.
        const linkedSeriesUnbiner = addEvent((external_highcharts_src_js_default_Chart_default()), 'afterLinkSeries', function ({ isUpdating }) {
            // #18643 indicator shouldn't recalculate
            // values while series updating.
            if (isUpdating) {
                return;
            }
            const hasEvents = !!indicator.dataEventsToUnbind.length;
            if (indicator.linkedParent) {
                if (!hasEvents) {
                    // No matter which indicator, always recalculate after
                    // updating the data.
                    indicator.dataEventsToUnbind.push(addEvent(indicator.linkedParent, 'updatedData', function () {
                        indicator.recalculateValues();
                    }));
                    // Some indicators (like VBP) requires an additional
                    // event (afterSetExtremes) to properly show the data.
                    if (indicator.calculateOn.xAxis) {
                        indicator.dataEventsToUnbind.push(addEvent(indicator.linkedParent.xAxis, indicator.calculateOn.xAxis, function () {
                            indicator.recalculateValues();
                        }));
                    }
                }
                // Most indicators are being calculated on chart's init.
                if (indicator.calculateOn.chart === 'init') {
                    // When closestPointRange is set, it is an indication
                    // that `Series.processData` has run. If it hasn't we
                    // need to `recalculateValues`.
                    if (!indicator.closestPointRange) {
                        indicator.recalculateValues();
                    }
                }
                else if (!hasEvents) {
                    // Some indicators (like VBP) has to recalculate their
                    // values after other chart's events (render).
                    const unbinder = addEvent(indicator.chart, indicator.calculateOn.chart, function () {
                        indicator.recalculateValues();
                        // Call this just once.
                        unbinder();
                    });
                }
            }
            else {
                return error('Series ' +
                    indicator.options.linkedTo +
                    ' not found! Check `linkedTo`.', false, chart);
            }
        }, {
            order: 0
        });
        // Make sure we find series which is a base for an indicator
        // chart.linkSeries();
        indicator.dataEventsToUnbind = [];
        indicator.eventsToUnbind.push(linkedSeriesUnbiner);
    }
    /**
     * @private
     */
    recalculateValues() {
        const croppedDataValues = [], indicator = this, table = this.dataTable, oldData = indicator.points || [], oldDataLength = indicator.dataTable.rowCount, emptySet = {
            values: [],
            xData: [],
            yData: []
        };
        let overwriteData = true, oldFirstPointIndex, oldLastPointIndex, min, max;
        // For the newer data table, temporarily set the parent series `yData`
        // to the legacy format that is documented for custom indicators, and
        // get the xData from the data table
        const yData = indicator.linkedParent.yData, processedYData = indicator.linkedParent.processedYData;
        indicator.linkedParent.xData = indicator.linkedParent
            .getColumn('x');
        indicator.linkedParent.yData = tableToMultiYData(indicator.linkedParent);
        indicator.linkedParent.processedYData = tableToMultiYData(indicator.linkedParent, true);
        // Updating an indicator with redraw=false may destroy data.
        // If there will be a following update for the parent series,
        // we will try to access Series object without any properties
        // (except for prototyped ones). This is what happens
        // for example when using Axis.setDataGrouping(). See #16670
        const processedData = indicator.linkedParent.options &&
            // #18176, #18177 indicators should work with empty dataset
            indicator.linkedParent.dataTable.rowCount ?
            (indicator.getValues(indicator.linkedParent, indicator.options.params) || emptySet) : emptySet;
        // Reset
        delete indicator.linkedParent.xData;
        indicator.linkedParent.yData = yData;
        indicator.linkedParent.processedYData = processedYData;
        const pointArrayMap = indicator.pointArrayMap || ['y'], valueColumns = {};
        // Split legacy twodimensional values into value columns
        processedData.yData
            .forEach((values) => {
            pointArrayMap.forEach((key, index) => {
                const column = valueColumns[key] || [];
                column.push(isArray(values) ? values[index] : values);
                if (!valueColumns[key]) {
                    valueColumns[key] = column;
                }
            });
        });
        // We need to update points to reflect changes in all,
        // x and y's, values. However, do it only for non-grouped
        // data - grouping does it for us (#8572)
        if (oldDataLength &&
            !indicator.hasGroupedData &&
            indicator.visible &&
            indicator.points) {
            // When data is cropped update only avaliable points (#9493)
            if (indicator.cropped) {
                if (indicator.xAxis) {
                    min = indicator.xAxis.min;
                    max = indicator.xAxis.max;
                }
                const croppedData = indicator.cropData(table, min, max);
                const keys = ['x', ...(indicator.pointArrayMap || ['y'])];
                for (let i = 0; i < (croppedData.modified?.rowCount || 0); i++) {
                    const values = keys.map((key) => this.getColumn(key)[i] || 0);
                    croppedDataValues.push(values);
                }
                const indicatorXData = indicator.getColumn('x');
                oldFirstPointIndex = processedData.xData.indexOf(indicatorXData[0]);
                oldLastPointIndex = processedData.xData.indexOf(indicatorXData[indicatorXData.length - 1]);
                // Check if indicator points should be shifted (#8572)
                if (oldFirstPointIndex === -1 &&
                    oldLastPointIndex === processedData.xData.length - 2) {
                    if (croppedDataValues[0][0] === oldData[0].x) {
                        croppedDataValues.shift();
                    }
                }
                indicator.updateData(croppedDataValues);
            }
            else if (indicator.updateAllPoints || // #18710
                // Omit addPoint() and removePoint() cases
                processedData.xData.length !== oldDataLength - 1 &&
                    processedData.xData.length !== oldDataLength + 1) {
                overwriteData = false;
                indicator.updateData(processedData.values);
            }
        }
        if (overwriteData) {
            table.setColumns({
                ...valueColumns,
                x: processedData.xData
            });
            indicator.options.data = processedData.values;
        }
        if (indicator.calculateOn.xAxis &&
            indicator.getColumn('x', true).length) {
            indicator.isDirty = true;
            indicator.redraw();
        }
        indicator.isDirtyData = !!indicator.linkedSeries.length;
        fireEvent(indicator, 'updatedData'); // #18689
    }
    /**
     * @private
     */
    processData() {
        const series = this, compareToMain = series.options.compareToMain, linkedParent = series.linkedParent;
        super.processData.apply(series, arguments);
        if (series.dataModify &&
            linkedParent &&
            linkedParent.dataModify &&
            linkedParent.dataModify.compareValue &&
            compareToMain) {
            series.dataModify.compareValue =
                linkedParent.dataModify.compareValue;
        }
        return;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * The parameter allows setting line series type and use OHLC indicators.
 * Data in OHLC format is required.
 *
 * @sample {highstock} stock/indicators/use-ohlc-data
 *         Use OHLC data format to plot line chart
 *
 * @type      {boolean}
 * @product   highstock
 * @apioption plotOptions.line.useOhlcData
 */
/**
 * Simple moving average indicator (SMA). This series requires `linkedTo`
 * option to be set.
 *
 * @sample stock/indicators/sma
 *         Simple moving average indicator
 *
 * @extends      plotOptions.line
 * @since        6.0.0
 * @excluding    allAreas, colorAxis, dragDrop, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking, useOhlcData
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @optionparent plotOptions.sma
 */
SMAIndicator.defaultOptions = merge(LineSeries.defaultOptions, {
    /**
     * The name of the series as shown in the legend, tooltip etc. If not
     * set, it will be based on a technical indicator type and default
     * params.
     *
     * @type {string}
     */
    name: void 0,
    tooltip: {
        /**
         * Number of decimals in indicator series.
         */
        valueDecimals: 4
    },
    /**
     * The main series ID that indicator will be based on. Required for this
     * indicator.
     *
     * @type {string}
     */
    linkedTo: void 0,
    /**
     * Whether to compare indicator to the main series values
     * or indicator values.
     *
     * @sample {highstock} stock/plotoptions/series-comparetomain/
     *         Difference between comparing SMA values to the main series
     *         and its own values.
     *
     * @type {boolean}
     */
    compareToMain: false,
    /**
     * Parameters used in calculation of regression series' points.
     */
    params: {
        /**
         * The point index which indicator calculations will base. For
         * example using OHLC data, index=2 means the indicator will be
         * calculated using Low values.
         */
        index: 3,
        /**
         * The base period for indicator calculations. This is the number of
         * data points which are taken into account for the indicator
         * calculations.
         */
        period: 14
    }
});
extend(SMAIndicator.prototype, {
    calculateOn: {
        chart: 'init'
    },
    hasDerivedData: true,
    nameComponents: ['period'],
    nameSuffixes: [], // E.g. Zig Zag uses extra '%'' in the legend name
    useCommonDataGrouping: true
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('sma', SMAIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const SMA_SMAIndicator = ((/* unused pure expression or super */ null && (SMAIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `SMA` series. If the [type](#series.sma.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.sma
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL, useOhlcData
 * @requires  stock/indicators/indicators
 * @apioption series.sma
 */
(''); // Adds doclet above to the transpiled file

;// ./code/es-modules/Stock/Indicators/EMA/EMAIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: EMAIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat, isArray: EMAIndicator_isArray, merge: EMAIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The EMA series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ema
 *
 * @augments Highcharts.Series
 */
class EMAIndicator extends EMAIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    accumulatePeriodPoints(period, index, yVal) {
        let sum = 0, i = 0, y = 0;
        while (i < period) {
            y = index < 0 ? yVal[i] : yVal[i][index];
            sum = sum + y;
            i++;
        }
        return sum;
    }
    calculateEma(xVal, yVal, i, EMApercent, calEMA, index, SMA) {
        const x = xVal[i - 1], yValue = index < 0 ?
            yVal[i - 1] :
            yVal[i - 1][index], y = typeof calEMA === 'undefined' ?
            SMA : correctFloat((yValue * EMApercent) +
            (calEMA * (1 - EMApercent)));
        return [x, y];
    }
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, EMApercent = 2 / (period + 1), EMA = [], xData = [], yData = [];
        let calEMA, EMAPoint, i, index = -1, sum = 0, SMA = 0;
        // Check period, if bigger than points length, skip
        if (yValLen < period) {
            return;
        }
        // Switch index for OHLC / Candlestick / Arearange
        if (EMAIndicator_isArray(yVal[0])) {
            index = params.index ? params.index : 0;
        }
        // Accumulate first N-points
        sum = this.accumulatePeriodPoints(period, index, yVal);
        // First point
        SMA = sum / period;
        // Calculate value one-by-one for each period in visible data
        for (i = period; i < yValLen + 1; i++) {
            EMAPoint = this.calculateEma(xVal, yVal, i, EMApercent, calEMA, index, SMA);
            EMA.push(EMAPoint);
            xData.push(EMAPoint[0]);
            yData.push(EMAPoint[1]);
            calEMA = EMAPoint[1];
        }
        return {
            values: EMA,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Exponential moving average indicator (EMA). This series requires the
 * `linkedTo` option to be set.
 *
 * @sample stock/indicators/ema
 * Exponential moving average indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @optionparent plotOptions.ema
 */
EMAIndicator.defaultOptions = EMAIndicator_merge(EMAIndicator_SMAIndicator.defaultOptions, {
    params: {
        /**
         * The point index which indicator calculations will base. For
         * example using OHLC data, index=2 means the indicator will be
         * calculated using Low values.
         *
         * By default index value used to be set to 0. Since
         * Highcharts Stock 7 by default index is set to 3
         * which means that the ema indicator will be
         * calculated using Close values.
         */
        index: 3,
        period: 9 // @merge 14 in v6.2
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ema', EMAIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const EMA_EMAIndicator = ((/* unused pure expression or super */ null && (EMAIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `EMA` series. If the [type](#series.ema.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ema
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @apioption series.ema
 */
''; // Adds doclet above to the transpiled file

;// ./code/es-modules/Stock/Indicators/AD/ADIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 * */


const { sma: ADIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { error: ADIndicator_error, extend: ADIndicator_extend, merge: ADIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The AD series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ad
 *
 * @augments Highcharts.Series
 */
class ADIndicator extends ADIndicator_SMAIndicator {
    /* *
     *
     *  Static Functions
     *
     * */
    static populateAverage(xVal, yVal, yValVolume, i, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _period) {
        const high = yVal[i][1], low = yVal[i][2], close = yVal[i][3], volume = yValVolume[i], adY = close === high && close === low || high === low ?
            0 :
            ((2 * close - low - high) / (high - low)) * volume, adX = xVal[i];
        return [adX, adY];
    }
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, volumeSeriesID = params.volumeSeriesID, volumeSeries = series.chart.get(volumeSeriesID), yValVolume = volumeSeries?.getColumn('y'), yValLen = yVal ? yVal.length : 0, AD = [], xData = [], yData = [];
        let len, i, ADPoint;
        if (xVal.length <= period &&
            yValLen &&
            yVal[0].length !== 4) {
            return;
        }
        if (!volumeSeries) {
            ADIndicator_error('Series ' +
                volumeSeriesID +
                ' not found! Check `volumeSeriesID`.', true, series.chart);
            return;
        }
        // When i = period <-- skip first N-points
        // Calculate value one-by-one for each period in visible data
        for (i = period; i < yValLen; i++) {
            len = AD.length;
            ADPoint = ADIndicator.populateAverage(xVal, yVal, yValVolume, i, period);
            if (len > 0) {
                ADPoint[1] += AD[len - 1][1];
            }
            AD.push(ADPoint);
            xData.push(ADPoint[0]);
            yData.push(ADPoint[1]);
        }
        return {
            values: AD,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Accumulation Distribution (AD). This series requires `linkedTo` option to
 * be set.
 *
 * @sample stock/indicators/accumulation-distribution
 *         Accumulation/Distribution indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/accumulation-distribution
 * @optionparent plotOptions.ad
 */
ADIndicator.defaultOptions = ADIndicator_merge(ADIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unused index, do not inherit (#15362)
        /**
         * The id of volume series which is mandatory.
         * For example using OHLC data, volumeSeriesID='volume' means
         * the indicator will be calculated using OHLC and volume values.
         *
         * @since 6.0.0
         */
        volumeSeriesID: 'volume'
    }
});
ADIndicator_extend(ADIndicator.prototype, {
    nameComponents: false,
    nameBase: 'Accumulation/Distribution'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ad', ADIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const AD_ADIndicator = (ADIndicator);
/* *
 *
 *  API Options
 *
 * */
/**
 * A `AD` series. If the [type](#series.ad.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ad
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/accumulation-distribution
 * @apioption series.ad
 */
''; // Add doclet above to transpiled file

;// ./code/es-modules/Stock/Indicators/AO/AOIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { noop } = (external_highcharts_src_js_default_default());

const { column: { prototype: columnProto }, sma: AOIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: AOIndicator_extend, merge: AOIndicator_merge, correctFloat: AOIndicator_correctFloat, isArray: AOIndicator_isArray } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The AO series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ao
 *
 * @augments Highcharts.Series
 */
class AOIndicator extends AOIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    drawGraph() {
        const indicator = this, options = indicator.options, points = indicator.points, userColor = indicator.userOptions.color, positiveColor = options.greaterBarColor, negativeColor = options.lowerBarColor, firstPoint = points[0];
        let i;
        if (!userColor && firstPoint) {
            firstPoint.color = positiveColor;
            for (i = 1; i < points.length; i++) {
                if (points[i].y > points[i - 1].y) {
                    points[i].color = positiveColor;
                }
                else if (points[i].y < points[i - 1].y) {
                    points[i].color = negativeColor;
                }
                else {
                    points[i].color = points[i - 1].color;
                }
            }
        }
    }
    getValues(series) {
        const shortPeriod = 5, longPeriod = 34, xVal = series.xData || [], yVal = series.yData || [], yValLen = yVal.length, AO = [], // 0- date, 1- Awesome Oscillator
        xData = [], yData = [], high = 1, low = 2;
        let shortSMA, // Shorter Period SMA
        longSMA, // Longer Period SMA
        awesome, shortLastIndex, longLastIndex, price, i, j, longSum = 0, shortSum = 0;
        if (xVal.length <= longPeriod ||
            !AOIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        for (i = 0; i < longPeriod - 1; i++) {
            price = (yVal[i][high] + yVal[i][low]) / 2;
            if (i >= longPeriod - shortPeriod) {
                shortSum = AOIndicator_correctFloat(shortSum + price);
            }
            longSum = AOIndicator_correctFloat(longSum + price);
        }
        for (j = longPeriod - 1; j < yValLen; j++) {
            price = (yVal[j][high] + yVal[j][low]) / 2;
            shortSum = AOIndicator_correctFloat(shortSum + price);
            longSum = AOIndicator_correctFloat(longSum + price);
            shortSMA = shortSum / shortPeriod;
            longSMA = longSum / longPeriod;
            awesome = AOIndicator_correctFloat(shortSMA - longSMA);
            AO.push([xVal[j], awesome]);
            xData.push(xVal[j]);
            yData.push(awesome);
            shortLastIndex = j + 1 - shortPeriod;
            longLastIndex = j + 1 - longPeriod;
            shortSum = AOIndicator_correctFloat(shortSum -
                (yVal[shortLastIndex][high] +
                    yVal[shortLastIndex][low]) / 2);
            longSum = AOIndicator_correctFloat(longSum -
                (yVal[longLastIndex][high] +
                    yVal[longLastIndex][low]) / 2);
        }
        return {
            values: AO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Awesome Oscillator. This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`
 *
 * @sample {highstock} stock/indicators/ao
 *         Awesome
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               params, pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/ao
 * @optionparent plotOptions.ao
 */
AOIndicator.defaultOptions = AOIndicator_merge(AOIndicator_SMAIndicator.defaultOptions, {
    params: {
        // Index and period are unchangeable, do not inherit (#15362)
        index: void 0,
        period: void 0
    },
    /**
     * Color of the Awesome oscillator series bar that is greater than the
     * previous one. Note that if a `color` is defined, the `color`
     * takes precedence and the `greaterBarColor` is ignored.
     *
     * @sample {highstock} stock/indicators/ao/
     *         greaterBarColor
     *
     * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since 7.0.0
     */
    greaterBarColor: "#06b535" /* Palette.positiveColor */,
    /**
     * Color of the Awesome oscillator series bar that is lower than the
     * previous one. Note that if a `color` is defined, the `color`
     * takes precedence and the `lowerBarColor` is ignored.
     *
     * @sample {highstock} stock/indicators/ao/
     *         lowerBarColor
     *
     * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since 7.0.0
     */
    lowerBarColor: "#f21313" /* Palette.negativeColor */,
    threshold: 0,
    groupPadding: 0.2,
    pointPadding: 0.2,
    crisp: false,
    states: {
        hover: {
            halo: {
                size: 0
            }
        }
    }
});
AOIndicator_extend(AOIndicator.prototype, {
    nameBase: 'AO',
    nameComponents: void 0,
    // Columns support:
    markerAttribs: noop,
    getColumnMetrics: columnProto.getColumnMetrics,
    crispCol: columnProto.crispCol,
    translate: columnProto.translate,
    drawPoints: columnProto.drawPoints
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ao', AOIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const AO_AOIndicator = ((/* unused pure expression or super */ null && (AOIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * An `AO` series. If the [type](#series.ao.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ao
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/ao
 * @apioption series.ao
 */
''; // For including the above in the doclets

;// ./code/es-modules/Stock/Indicators/MultipleLinesComposition.js
/**
 *
 *  (c) 2010-2025 Wojciech Chmiel
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: { prototype: smaProto } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { defined, error: MultipleLinesComposition_error, merge: MultipleLinesComposition_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var MultipleLinesComposition;
(function (MultipleLinesComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Constants
     *
     * */
    /**
     * Additional lines DOCS names. Elements of linesApiNames array should
     * be consistent with DOCS line names defined in your implementation.
     * Notice that linesApiNames should have decreased amount of elements
     * relative to pointArrayMap (without pointValKey).
     *
     * @private
     * @type {Array<string>}
     */
    const linesApiNames = ['bottomLine'];
    /**
     * Lines ids. Required to plot appropriate amount of lines.
     * Notice that pointArrayMap should have more elements than
     * linesApiNames, because it contains main line and additional lines ids.
     * Also it should be consistent with amount of lines calculated in
     * getValues method from your implementation.
     *
     * @private
     * @type {Array<string>}
     */
    const pointArrayMap = ['top', 'bottom'];
    /**
     * Names of the lines, between which the area should be plotted.
     * If the drawing of the area should
     * be disabled for some indicators, leave this option as an empty array.
     * Names should be the same as the names in the pointArrayMap.
     *
     * @private
     * @type {Array<string>}
     */
    const areaLinesNames = ['top'];
    /**
     * Main line id.
     *
     * @private
     * @type {string}
     */
    const pointValKey = 'top';
    /* *
     *
     *  Functions
     *
     * */
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
    function compose(IndicatorClass) {
        const proto = IndicatorClass.prototype;
        proto.linesApiNames = (proto.linesApiNames ||
            linesApiNames.slice());
        proto.pointArrayMap = (proto.pointArrayMap ||
            pointArrayMap.slice());
        proto.pointValKey = (proto.pointValKey ||
            pointValKey);
        proto.areaLinesNames = (proto.areaLinesNames ||
            areaLinesNames.slice());
        proto.drawGraph = indicatorDrawGraph;
        proto.getGraphPath = indicatorGetGraphPath;
        proto.toYData = indicatorToYData;
        proto.translate = indicatorTranslate;
        return IndicatorClass;
    }
    MultipleLinesComposition.compose = compose;
    /**
     * Generate the API name of the line
     *
     * @private
     * @param propertyName name of the line
     */
    function getLineName(propertyName) {
        return ('plot' +
            propertyName.charAt(0).toUpperCase() +
            propertyName.slice(1));
    }
    /**
     * Create translatedLines Collection based on pointArrayMap.
     *
     * @private
     * @param {string} [excludedValue]
     *        Main line id
     * @return {Array<string>}
     *         Returns translated lines names without excluded value.
     */
    function getTranslatedLinesNames(indicator, excludedValue) {
        const translatedLines = [];
        (indicator.pointArrayMap || []).forEach((propertyName) => {
            if (propertyName !== excludedValue) {
                translatedLines.push(getLineName(propertyName));
            }
        });
        return translatedLines;
    }
    /**
     * Draw main and additional lines.
     *
     * @private
     */
    function indicatorDrawGraph() {
        const indicator = this, pointValKey = indicator.pointValKey, linesApiNames = indicator.linesApiNames, areaLinesNames = indicator.areaLinesNames, mainLinePoints = indicator.points, mainLineOptions = indicator.options, mainLinePath = indicator.graph, gappedExtend = {
            options: {
                gapSize: mainLineOptions.gapSize
            }
        }, 
        // Additional lines point place holders:
        secondaryLines = [], secondaryLinesNames = getTranslatedLinesNames(indicator, pointValKey);
        let pointsLength = mainLinePoints.length, point;
        // Generate points for additional lines:
        secondaryLinesNames.forEach((plotLine, index) => {
            // Create additional lines point place holders
            secondaryLines[index] = [];
            while (pointsLength--) {
                point = mainLinePoints[pointsLength];
                secondaryLines[index].push({
                    x: point.x,
                    plotX: point.plotX,
                    plotY: point[plotLine],
                    isNull: !defined(point[plotLine])
                });
            }
            pointsLength = mainLinePoints.length;
        });
        // Modify options and generate area fill:
        if (indicator.userOptions.fillColor && areaLinesNames.length) {
            const index = secondaryLinesNames.indexOf(getLineName(areaLinesNames[0])), secondLinePoints = secondaryLines[index], firstLinePoints = areaLinesNames.length === 1 ?
                mainLinePoints :
                secondaryLines[secondaryLinesNames.indexOf(getLineName(areaLinesNames[1]))], originalColor = indicator.color;
            indicator.points = firstLinePoints;
            indicator.nextPoints = secondLinePoints;
            indicator.color = indicator.userOptions.fillColor;
            indicator.options = MultipleLinesComposition_merge(mainLinePoints, gappedExtend);
            indicator.graph = indicator.area;
            indicator.fillGraph = true;
            smaProto.drawGraph.call(indicator);
            indicator.area = indicator.graph;
            // Clean temporary properties:
            delete indicator.nextPoints;
            delete indicator.fillGraph;
            indicator.color = originalColor;
        }
        // Modify options and generate additional lines:
        linesApiNames.forEach((lineName, i) => {
            if (secondaryLines[i]) {
                indicator.points = secondaryLines[i];
                if (mainLineOptions[lineName]) {
                    indicator.options = MultipleLinesComposition_merge(mainLineOptions[lineName].styles, gappedExtend);
                }
                else {
                    MultipleLinesComposition_error('Error: "There is no ' + lineName +
                        ' in DOCS options declared. Check if linesApiNames' +
                        ' are consistent with your DOCS line names."');
                }
                indicator.graph = indicator['graph' + lineName];
                smaProto.drawGraph.call(indicator);
                // Now save lines:
                indicator['graph' + lineName] = indicator.graph;
            }
            else {
                MultipleLinesComposition_error('Error: "' + lineName + ' doesn\'t have equivalent ' +
                    'in pointArrayMap. To many elements in linesApiNames ' +
                    'relative to pointArrayMap."');
            }
        });
        // Restore options and draw a main line:
        indicator.points = mainLinePoints;
        indicator.options = mainLineOptions;
        indicator.graph = mainLinePath;
        smaProto.drawGraph.call(indicator);
    }
    /**
     * Create the path based on points provided as argument.
     * If indicator.nextPoints option is defined, create the areaFill.
     *
     * @private
     * @param points Points on which the path should be created
     */
    function indicatorGetGraphPath(points) {
        let areaPath, path = [], higherAreaPath = [];
        points = points || this.points;
        // Render Span
        if (this.fillGraph && this.nextPoints) {
            areaPath = smaProto.getGraphPath.call(this, this.nextPoints);
            if (areaPath && areaPath.length) {
                areaPath[0][0] = 'L';
                path = smaProto.getGraphPath.call(this, points);
                higherAreaPath = areaPath.slice(0, path.length);
                // Reverse points, so that the areaFill will start from the end:
                for (let i = higherAreaPath.length - 1; i >= 0; i--) {
                    path.push(higherAreaPath[i]);
                }
            }
        }
        else {
            path = smaProto.getGraphPath.apply(this, arguments);
        }
        return path;
    }
    /**
     * @private
     * @param {Highcharts.Point} point
     *        Indicator point
     * @return {Array<number>}
     *         Returns point Y value for all lines
     */
    function indicatorToYData(point) {
        const pointColl = [];
        (this.pointArrayMap || []).forEach((propertyName) => {
            pointColl.push(point[propertyName]);
        });
        return pointColl;
    }
    /**
     * Add lines plot pixel values.
     *
     * @private
     */
    function indicatorTranslate() {
        const pointArrayMap = this.pointArrayMap;
        let LinesNames = [], value;
        LinesNames = getTranslatedLinesNames(this);
        smaProto.translate.apply(this, arguments);
        this.points.forEach((point) => {
            pointArrayMap.forEach((propertyName, i) => {
                value = point[propertyName];
                // If the modifier, like for example compare exists,
                // modified the original value by that method, #15867.
                if (this.dataModify) {
                    value = this.dataModify.modifyValue(value);
                }
                if (value !== null) {
                    point[LinesNames[i]] = this.yAxis.toPixels(value, true);
                }
            });
        });
    }
})(MultipleLinesComposition || (MultipleLinesComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Indicators_MultipleLinesComposition = (MultipleLinesComposition);

;// ./code/es-modules/Stock/Indicators/Aroon/AroonIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: AroonIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: AroonIndicator_extend, merge: AroonIndicator_merge, pick: AroonIndicator_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils
// Index of element with extreme value from array (min or max)
/**
 * @private
 */
function getExtremeIndexInArray(arr, extreme) {
    let extremeValue = arr[0], valueIndex = 0, i;
    for (i = 1; i < arr.length; i++) {
        if (extreme === 'max' && arr[i] >= extremeValue ||
            extreme === 'min' && arr[i] <= extremeValue) {
            extremeValue = arr[i];
            valueIndex = i;
        }
    }
    return valueIndex;
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Aroon series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.aroon
 *
 * @augments Highcharts.Series
 */
class AroonIndicator extends AroonIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // 0- date, 1- Aroon Up, 2- Aroon Down
        AR = [], xData = [], yData = [], low = 2, high = 1;
        let aroonUp, aroonDown, xLow, xHigh, i, slicedY;
        // For a N-period, we start from N-1 point, to calculate Nth point
        // That is why we later need to comprehend slice() elements list
        // with (+1)
        for (i = period - 1; i < yValLen; i++) {
            slicedY = yVal.slice(i - period + 1, i + 2);
            xLow = getExtremeIndexInArray(slicedY.map(function (elem) {
                return AroonIndicator_pick(elem[low], elem);
            }), 'min');
            xHigh = getExtremeIndexInArray(slicedY.map(function (elem) {
                return AroonIndicator_pick(elem[high], elem);
            }), 'max');
            aroonUp = (xHigh / period) * 100;
            aroonDown = (xLow / period) * 100;
            if (xVal[i + 1]) {
                AR.push([xVal[i + 1], aroonUp, aroonDown]);
                xData.push(xVal[i + 1]);
                yData.push([aroonUp, aroonDown]);
            }
        }
        return {
            values: AR,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Aroon. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/aroon
 *         Aroon
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/aroon
 * @optionparent plotOptions.aroon
 */
AroonIndicator.defaultOptions = AroonIndicator_merge(AroonIndicator_SMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of aroon series points.
     *
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        period: 25
    },
    marker: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b><br/>Aroon Up: {point.y}<br/>Aroon Down: {point.aroonDown}<br/>'
    },
    /**
     * AroonDown line options.
     */
    aroonDown: {
        /**
         * Styles for an aroonDown line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.aroon.color](#plotOptions.aroon.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
AroonIndicator_extend(AroonIndicator.prototype, {
    areaLinesNames: [],
    linesApiNames: ['aroonDown'],
    nameBase: 'Aroon',
    pointArrayMap: ['y', 'aroonDown'],
    pointValKey: 'y'
});
Indicators_MultipleLinesComposition.compose(AroonIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('aroon', AroonIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Aroon_AroonIndicator = ((/* unused pure expression or super */ null && (AroonIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Aroon indicator. If the [type](#series.aroon.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.aroon
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/aroon
 * @apioption series.aroon
 */
''; // To avoid removal of the above jsdoc

;// ./code/es-modules/Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { aroon: AroonOscillatorIndicator_AroonIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: AroonOscillatorIndicator_extend, merge: AroonOscillatorIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Aroon Oscillator series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.aroonoscillator
 *
 * @augments Highcharts.Series
 */
class AroonOscillatorIndicator extends AroonOscillatorIndicator_AroonIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        // 0- date, 1- Aroon Oscillator
        const ARO = [], xData = [], yData = [];
        let aroonUp, aroonDown, oscillator, i;
        const aroon = super.getValues.call(this, series, params);
        for (i = 0; i < aroon.yData.length; i++) {
            aroonUp = aroon.yData[i][0];
            aroonDown = aroon.yData[i][1];
            oscillator = aroonUp - aroonDown;
            ARO.push([aroon.xData[i], oscillator]);
            xData.push(aroon.xData[i]);
            yData.push(oscillator);
        }
        return {
            values: ARO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Aroon Oscillator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/aroon.js`.
 *
 * @sample {highstock} stock/indicators/aroon-oscillator
 *         Aroon Oscillator
 *
 * @extends      plotOptions.aroon
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, aroonDown, colorAxis, compare, compareBase,
 *               joinBy, keys, navigatorOptions, pointInterval,
 *               pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *               showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/aroon
 * @requires     stock/indicators/aroon-oscillator
 * @optionparent plotOptions.aroonoscillator
 */
AroonOscillatorIndicator.defaultOptions = AroonOscillatorIndicator_merge(AroonOscillatorIndicator_AroonIndicator.defaultOptions, {
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b>: {point.y}'
    }
});
AroonOscillatorIndicator_extend(AroonOscillatorIndicator.prototype, {
    nameBase: 'Aroon Oscillator',
    linesApiNames: [],
    pointArrayMap: ['y'],
    pointValKey: 'y'
});
Indicators_MultipleLinesComposition.compose(AroonOscillatorIndicator_AroonIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('aroonoscillator', AroonOscillatorIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const AroonOscillator_AroonOscillatorIndicator = ((/* unused pure expression or super */ null && (AroonOscillatorIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * An `Aroon Oscillator` series. If the [type](#series.aroonoscillator.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.aroonoscillator
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, aroonDown, colorAxis, compare, compareBase, dataParser,
 *            dataURL, joinBy, keys, navigatorOptions, pointInterval,
 *            pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *            showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/aroon
 * @requires  stock/indicators/aroon-oscillator
 * @apioption series.aroonoscillator
 */
''; // Adds doclet above to the transpiled file

;// ./code/es-modules/Stock/Indicators/ATR/ATRIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: ATRIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isArray: ATRIndicator_isArray, merge: ATRIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 * @private
 */
function accumulateAverage(points, xVal, yVal, i) {
    const xValue = xVal[i], yValue = yVal[i];
    points.push([xValue, yValue]);
}
/**
 * @private
 */
function getTR(currentPoint, prevPoint) {
    const pointY = currentPoint, prevY = prevPoint, HL = pointY[1] - pointY[2], HCp = typeof prevY === 'undefined' ? 0 : Math.abs(pointY[1] - prevY[3]), LCp = typeof prevY === 'undefined' ? 0 : Math.abs(pointY[2] - prevY[3]), TR = Math.max(HL, HCp, LCp);
    return TR;
}
/**
 * @private
 */
function populateAverage(points, xVal, yVal, i, period, prevATR) {
    const x = xVal[i - 1], TR = getTR(yVal[i - 1], yVal[i - 2]), y = (((prevATR * (period - 1)) + TR) / period);
    return [x, y];
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ATR series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.atr
 *
 * @augments Highcharts.Series
 */
class ATRIndicator extends ATRIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, xValue = xVal[0], yValue = yVal[0], points = [[xValue, yValue]], ATR = [], xData = [], yData = [];
        let point, i, prevATR = 0, range = 1, TR = 0;
        if ((xVal.length <= period) ||
            !ATRIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        for (i = 1; i <= yValLen; i++) {
            accumulateAverage(points, xVal, yVal, i);
            if (period < range) {
                point = populateAverage(points, xVal, yVal, i, period, prevATR);
                prevATR = point[1];
                ATR.push(point);
                xData.push(point[0]);
                yData.push(point[1]);
            }
            else if (period === range) {
                prevATR = TR / (i - 1);
                ATR.push([xVal[i - 1], prevATR]);
                xData.push(xVal[i - 1]);
                yData.push(prevATR);
                range++;
            }
            else {
                TR += getTR(yVal[i - 1], yVal[i - 2]);
                range++;
            }
        }
        return {
            values: ATR,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Average true range indicator (ATR). This series requires `linkedTo`
 * option to be set.
 *
 * @sample stock/indicators/atr
 *         ATR indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/atr
 * @optionparent plotOptions.atr
 */
ATRIndicator.defaultOptions = ATRIndicator_merge(ATRIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0 // Unused index, do not inherit (#15362)
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('atr', ATRIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const ATR_ATRIndicator = ((/* unused pure expression or super */ null && (ATRIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `ATR` series. If the [type](#series.atr.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.atr
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/atr
 * @apioption series.atr
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/BB/BBIndicator.js
/**
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: BBIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: BBIndicator_extend, isArray: BBIndicator_isArray, merge: BBIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 * @private
 */
function getStandardDeviation(arr, index, isOHLC, mean) {
    const arrLen = arr.length;
    let i = 0, std = 0, value, variance = 0;
    for (; i < arrLen; i++) {
        value = (isOHLC ? arr[i][index] : arr[i]) - mean;
        variance += value * value;
    }
    variance = variance / (arrLen - 1);
    std = Math.sqrt(variance);
    return std;
}
/* *
 *
 *  Class
 *
 * */
/**
 * Bollinger Bands series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.bb
 *
 * @augments Highcharts.Series
 */
class BBIndicator extends BBIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.init.apply(this, arguments);
        // Set default color for lines:
        this.options = BBIndicator_merge({
            topLine: {
                styles: {
                    lineColor: this.color
                }
            },
            bottomLine: {
                styles: {
                    lineColor: this.color
                }
            }
        }, this.options);
    }
    getValues(series, params) {
        const period = params.period, standardDeviation = params.standardDeviation, xData = [], yData = [], xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // 0- date, 1-middle line, 2-top line, 3-bottom line
        BB = [];
        // Middle line, top line and bottom line
        let ML, TL, BL, date, slicedX, slicedY, stdDev, point, i;
        if (xVal.length < period) {
            return;
        }
        const isOHLC = BBIndicator_isArray(yVal[0]);
        for (i = period; i <= yValLen; i++) {
            slicedX = xVal.slice(i - period, i);
            slicedY = yVal.slice(i - period, i);
            point = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.getValues.call(this, {
                xData: slicedX,
                yData: slicedY
            }, params);
            date = point.xData[0];
            ML = point.yData[0];
            stdDev = getStandardDeviation(slicedY, params.index, isOHLC, ML);
            TL = ML + standardDeviation * stdDev;
            BL = ML - standardDeviation * stdDev;
            BB.push([date, TL, ML, BL]);
            xData.push(date);
            yData.push([TL, ML, BL]);
        }
        return {
            values: BB,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Bollinger bands (BB). This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/bollinger-bands
 *         Bollinger bands
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/bollinger-bands
 * @optionparent plotOptions.bb
 */
BBIndicator.defaultOptions = BBIndicator_merge(BBIndicator_SMAIndicator.defaultOptions, {
    /**
     * Option for fill color between lines in Bollinger Bands Indicator.
     *
     * @sample {highstock} stock/indicators/indicator-area-fill
     *      Background fill between lines.
     *
     * @type      {Highcharts.ColorType}
     * @since     9.3.2
     * @apioption plotOptions.bb.fillColor
     */
    /**
     * Parameters used in calculation of the regression points.
     */
    params: {
        period: 20,
        /**
         * Standard deviation for top and bottom bands.
         */
        standardDeviation: 2,
        index: 3
    },
    /**
     * Bottom line options.
     */
    bottomLine: {
        /**
         * Styles for the bottom line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.bb.color](#plotOptions.bb.color).
             *
             * @type  {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * Top line options.
     *
     * @extends plotOptions.bb.bottomLine
     */
    topLine: {
        /**
         * Styles for the top line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.bb.color](#plotOptions.bb.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'
    },
    marker: {
        enabled: false
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
BBIndicator_extend(BBIndicator.prototype, {
    areaLinesNames: ['top', 'bottom'],
    linesApiNames: ['topLine', 'bottomLine'],
    nameComponents: ['period', 'standardDeviation'],
    pointArrayMap: ['top', 'middle', 'bottom'],
    pointValKey: 'middle'
});
Indicators_MultipleLinesComposition.compose(BBIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('bb', BBIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const BB_BBIndicator = ((/* unused pure expression or super */ null && (BBIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A bollinger bands indicator. If the [type](#series.bb.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.bb
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/bollinger-bands
 * @apioption series.bb
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/CCI/CCIIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 * */


const { sma: CCIIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isArray: CCIIndicator_isArray, merge: CCIIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 * @private
 */
function sumArray(array) {
    return array.reduce(function (prev, cur) {
        return prev + cur;
    }, 0);
}
/**
 * @private
 */
function meanDeviation(arr, sma) {
    const len = arr.length;
    let sum = 0, i;
    for (i = 0; i < len; i++) {
        sum += Math.abs(sma - (arr[i]));
    }
    return sum;
}
/* *
 *
 *  Class
 *
 * */
/**
 * The CCI series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cci
 *
 * @augments Highcharts.Series
 */
class CCIIndicator extends CCIIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, TP = [], CCI = [], xData = [], yData = [];
        let CCIPoint, p, periodTP = [], len, range = 1, smaTP, TPtemp, meanDev, i;
        // CCI requires close value
        if (xVal.length <= period ||
            !CCIIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        // Accumulate first N-points
        while (range < period) {
            p = yVal[range - 1];
            TP.push((p[1] + p[2] + p[3]) / 3);
            range++;
        }
        for (i = period; i <= yValLen; i++) {
            p = yVal[i - 1];
            TPtemp = (p[1] + p[2] + p[3]) / 3;
            len = TP.push(TPtemp);
            periodTP = TP.slice(len - period);
            smaTP = sumArray(periodTP) / period;
            meanDev = meanDeviation(periodTP, smaTP) / period;
            CCIPoint = ((TPtemp - smaTP) / (0.015 * meanDev));
            CCI.push([xVal[i - 1], CCIPoint]);
            xData.push(xVal[i - 1]);
            yData.push(CCIPoint);
        }
        return {
            values: CCI,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Commodity Channel Index (CCI). This series requires `linkedTo` option to
 * be set.
 *
 * @sample stock/indicators/cci
 *         CCI indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/cci
 * @optionparent plotOptions.cci
 */
CCIIndicator.defaultOptions = CCIIndicator_merge(CCIIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0 // Unused index, do not inherit (#15362)
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('cci', CCIIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const CCI_CCIIndicator = ((/* unused pure expression or super */ null && (CCIIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `CCI` series. If the [type](#series.cci.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.cci
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/cci
 * @apioption series.cci
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/CMF/CMFIndicator.js
/* *
 *
 *  (c) 2010-2025 Highsoft AS
 *
 *  Author: Sebastian Domas
 *
 *  Chaikin Money Flow indicator for Highcharts Stock
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: CMFIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { merge: CMFIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The CMF series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cmf
 *
 * @augments Highcharts.Series
 */
class CMFIndicator extends CMFIndicator_SMAIndicator {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.nameBase = 'Chaikin Money Flow';
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Checks if the series and volumeSeries are accessible, number of
     * points.x is longer than period, is series has OHLC data
     * @private
     * @param {Highcharts.CMFIndicator} this indicator to use.
     * @return {boolean} True if series is valid and can be computed,
     * otherwise false.
     */
    isValid() {
        const chart = this.chart, options = this.options, series = this.linkedParent, volumeSeries = (this.volumeSeries ||
            (this.volumeSeries =
                chart.get(options.params.volumeSeriesID))), isSeriesOHLC = (series?.pointArrayMap?.length === 4);
        /**
         * @private
         * @param {Highcharts.Series} serie to check length validity on.
         * @return {boolean|undefined} true if length is valid.
         */
        function isLengthValid(serie) {
            return serie.dataTable.rowCount >=
                options.params.period;
        }
        return !!(series &&
            volumeSeries &&
            isLengthValid(series) &&
            isLengthValid(volumeSeries) && isSeriesOHLC);
    }
    /**
     * Returns indicator's data.
     * @private
     * @param {Highcharts.CMFIndicator} this indicator to use.
     * @param {Highcharts.Series} series to calculate values from
     * @param {Highcharts.CMFIndicatorParamsOptions} params to pass
     * @return {boolean|Highcharts.IndicatorNullableValuesObject} Returns false if the
     * indicator is not valid, otherwise returns Values object.
     */
    getValues(series, params) {
        if (!this.isValid()) {
            return;
        }
        return this.getMoneyFlow(series.xData, series.yData, this.volumeSeries.getColumn('y'), params.period);
    }
    /**
     * @private
     *
     * @param {Array<number>} xData
     * x timestamp values
     *
     * @param {Array<number>} seriesYData
     * yData of basic series
     *
     * @param {Array<number>} volumeSeriesYData
     * yData of volume series
     *
     * @param {number} period
     * indicator's param
     *
     * @return {Highcharts.IndicatorNullableValuesObject}
     * object containing computed money flow data
     */
    getMoneyFlow(xData, seriesYData, volumeSeriesYData, period) {
        const len = seriesYData.length, moneyFlowVolume = [], moneyFlowXData = [], moneyFlowYData = [], values = [];
        let i, point, nullIndex = -1, sumVolume = 0, sumMoneyFlowVolume = 0;
        /**
         * Calculates money flow volume, changes i, nullIndex vars from
         * upper scope!
         *
         * @private
         *
         * @param {Array<number>} ohlc
         * OHLC point
         *
         * @param {number} volume
         * Volume point's y value
         *
         * @return {number|null}
         * Volume * moneyFlowMultiplier
         */
        function getMoneyFlowVolume(ohlc, volume) {
            const high = ohlc[1], low = ohlc[2], close = ohlc[3], isValid = volume !== null &&
                high !== null &&
                low !== null &&
                close !== null &&
                high !== low;
            /**
             * @private
             * @param {number} h
             * High value
             * @param {number} l
             * Low value
             * @param {number} c
             * Close value
             * @return {number}
             * Calculated multiplier for the point
             */
            function getMoneyFlowMultiplier(h, l, c) {
                return ((c - l) - (h - c)) / (h - l);
            }
            return isValid ?
                getMoneyFlowMultiplier(high, low, close) * volume :
                ((nullIndex = i), null);
        }
        if (period > 0 && period <= len) {
            for (i = 0; i < period; i++) {
                moneyFlowVolume[i] = getMoneyFlowVolume(seriesYData[i], volumeSeriesYData[i]);
                sumVolume += volumeSeriesYData[i];
                sumMoneyFlowVolume += moneyFlowVolume[i];
            }
            moneyFlowXData.push(xData[i - 1]);
            moneyFlowYData.push(i - nullIndex >= period && sumVolume !== 0 ?
                sumMoneyFlowVolume / sumVolume :
                null);
            values.push([moneyFlowXData[0], moneyFlowYData[0]]);
            for (; i < len; i++) {
                moneyFlowVolume[i] = getMoneyFlowVolume(seriesYData[i], volumeSeriesYData[i]);
                sumVolume -= volumeSeriesYData[i - period];
                sumVolume += volumeSeriesYData[i];
                sumMoneyFlowVolume -= moneyFlowVolume[i - period];
                sumMoneyFlowVolume += moneyFlowVolume[i];
                point = [
                    xData[i],
                    i - nullIndex >= period ?
                        sumMoneyFlowVolume / sumVolume :
                        null
                ];
                moneyFlowXData.push(point[0]);
                moneyFlowYData.push(point[1]);
                values.push([point[0], point[1]]);
            }
        }
        return {
            values: values,
            xData: moneyFlowXData,
            yData: moneyFlowYData
        };
    }
}
/**
 * Chaikin Money Flow indicator (cmf).
 *
 * @sample stock/indicators/cmf/
 *         Chaikin Money Flow indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @excluding    animationLimit
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/cmf
 * @optionparent plotOptions.cmf
 */
CMFIndicator.defaultOptions = CMFIndicator_merge(CMFIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unused index, do not inherit (#15362)
        /**
         * The id of another series to use its data as volume data for the
         * indicator calculation.
         */
        volumeSeriesID: 'volume'
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('cmf', CMFIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const CMF_CMFIndicator = ((/* unused pure expression or super */ null && (CMFIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `CMF` series. If the [type](#series.cmf.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.cmf
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/cmf
 * @apioption series.cmf
 */
''; // Adds doclet above to the transpiled file

;// ./code/es-modules/Stock/Indicators/DMI/DMIIndicator.js
/* *
 *  (c) 2010-2025 Rafal Sebestjanski
 *
 *  Directional Movement Index (DMI) indicator for Highcharts Stock
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: DMIIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: DMIIndicator_correctFloat, extend: DMIIndicator_extend, isArray: DMIIndicator_isArray, merge: DMIIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Directional Movement Index (DMI) series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dmi
 *
 * @augments Highcharts.Series
 */
class DMIIndicator extends DMIIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    calculateDM(yVal, i, isPositiveDM) {
        const currentHigh = yVal[i][1], currentLow = yVal[i][2], previousHigh = yVal[i - 1][1], previousLow = yVal[i - 1][2];
        let DM;
        if (currentHigh - previousHigh > previousLow - currentLow) {
            // For +DM
            DM = isPositiveDM ? Math.max(currentHigh - previousHigh, 0) : 0;
        }
        else {
            // For -DM
            DM = !isPositiveDM ? Math.max(previousLow - currentLow, 0) : 0;
        }
        return DMIIndicator_correctFloat(DM);
    }
    calculateDI(smoothedDM, tr) {
        return smoothedDM / tr * 100;
    }
    calculateDX(plusDI, minusDI) {
        return DMIIndicator_correctFloat(Math.abs(plusDI - minusDI) / Math.abs(plusDI + minusDI) * 100);
    }
    smoothValues(accumulatedValues, currentValue, period) {
        return DMIIndicator_correctFloat(accumulatedValues - accumulatedValues / period + currentValue);
    }
    getTR(currentPoint, prevPoint) {
        return DMIIndicator_correctFloat(Math.max(
        // `currentHigh - currentLow`
        currentPoint[1] - currentPoint[2], 
        // `currentHigh - previousClose`
        !prevPoint ? 0 : Math.abs(currentPoint[1] - prevPoint[3]), 
        // `currentLow - previousClose`
        !prevPoint ? 0 : Math.abs(currentPoint[2] - prevPoint[3])));
    }
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, DMI = [], xData = [], yData = [];
        if (
        // Check period, if bigger than points length, skip
        (xVal.length <= period) ||
            // Only ohlc data is valid
            !DMIIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        let prevSmoothedPlusDM = 0, prevSmoothedMinusDM = 0, prevSmoothedTR = 0, i;
        for (i = 1; i < yValLen; i++) {
            let smoothedPlusDM, smoothedMinusDM, smoothedTR, plusDM, // +DM
            minusDM, // -DM
            TR, plusDI, // +DI
            minusDI, // -DI
            DX;
            if (i <= period) {
                plusDM = this.calculateDM(yVal, i, true);
                minusDM = this.calculateDM(yVal, i);
                TR = this.getTR(yVal[i], yVal[i - 1]);
                // Accumulate first period values to smooth them later
                prevSmoothedPlusDM += plusDM;
                prevSmoothedMinusDM += minusDM;
                prevSmoothedTR += TR;
                // Get all values for the first point
                if (i === period) {
                    plusDI = this.calculateDI(prevSmoothedPlusDM, prevSmoothedTR);
                    minusDI = this.calculateDI(prevSmoothedMinusDM, prevSmoothedTR);
                    DX = this.calculateDX(prevSmoothedPlusDM, prevSmoothedMinusDM);
                    DMI.push([xVal[i], DX, plusDI, minusDI]);
                    xData.push(xVal[i]);
                    yData.push([DX, plusDI, minusDI]);
                }
            }
            else {
                // Calculate current values
                plusDM = this.calculateDM(yVal, i, true);
                minusDM = this.calculateDM(yVal, i);
                TR = this.getTR(yVal[i], yVal[i - 1]);
                // Smooth +DM, -DM and TR
                smoothedPlusDM = this.smoothValues(prevSmoothedPlusDM, plusDM, period);
                smoothedMinusDM = this.smoothValues(prevSmoothedMinusDM, minusDM, period);
                smoothedTR = this.smoothValues(prevSmoothedTR, TR, period);
                // Save current smoothed values for the next step
                prevSmoothedPlusDM = smoothedPlusDM;
                prevSmoothedMinusDM = smoothedMinusDM;
                prevSmoothedTR = smoothedTR;
                // Get all next points (except the first one calculated above)
                plusDI = this.calculateDI(prevSmoothedPlusDM, prevSmoothedTR);
                minusDI = this.calculateDI(prevSmoothedMinusDM, prevSmoothedTR);
                DX = this.calculateDX(prevSmoothedPlusDM, prevSmoothedMinusDM);
                DMI.push([xVal[i], DX, plusDI, minusDI]);
                xData.push(xVal[i]);
                yData.push([DX, plusDI, minusDI]);
            }
        }
        return {
            values: DMI,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Directional Movement Index (DMI).
 * This series requires the `linkedTo` option to be set and should
 * be loaded after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/dmi
 *         DMI indicator
 *
 * @extends      plotOptions.sma
 * @since 9.1.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/dmi
 * @optionparent plotOptions.dmi
 */
DMIIndicator.defaultOptions = DMIIndicator_merge(DMIIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0 // Unused index, do not inherit (#15362)
    },
    marker: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color: {point.color}">' +
            '\u25CF</span><b> {series.name}</b><br/>' +
            '<span style="color: {point.color}">DX</span>: {point.y}<br/>' +
            '<span style="color: ' +
            '{point.series.options.plusDILine.styles.lineColor}">' +
            '+DI</span>: {point.plusDI}<br/>' +
            '<span style="color: ' +
            '{point.series.options.minusDILine.styles.lineColor}">' +
            '-DI</span>: {point.minusDI}<br/>'
    },
    /**
     * +DI line options.
     */
    plusDILine: {
        /**
         * Styles for the +DI line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: "#06b535" /* Palette.positiveColor */ // Green-ish
        }
    },
    /**
     * -DI line options.
     */
    minusDILine: {
        /**
         * Styles for the -DI line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: "#f21313" /* Palette.negativeColor */ // Red-ish
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
DMIIndicator_extend(DMIIndicator.prototype, {
    areaLinesNames: [],
    nameBase: 'DMI',
    linesApiNames: ['plusDILine', 'minusDILine'],
    pointArrayMap: ['y', 'plusDI', 'minusDI'],
    parallelArrays: ['x', 'y', 'plusDI', 'minusDI'],
    pointValKey: 'y'
});
Indicators_MultipleLinesComposition.compose(DMIIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('dmi', DMIIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const DMI_DMIIndicator = ((/* unused pure expression or super */ null && (DMIIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * The Directional Movement Index (DMI) indicator series.
 * If the [type](#series.dmi.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.dmi
 * @since 9.1.0
 * @product   highstock
 * @excluding allAreas, colorAxis,  dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/dmi
 * @apioption series.dmi
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/DPO/DPOIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: DPOIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: DPOIndicator_extend, merge: DPOIndicator_merge, correctFloat: DPOIndicator_correctFloat, pick: DPOIndicator_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 * @private
 */
function accumulatePoints(sum, yVal, i, index, subtract) {
    const price = DPOIndicator_pick(yVal[i][index], yVal[i]);
    if (subtract) {
        return DPOIndicator_correctFloat(sum - price);
    }
    return DPOIndicator_correctFloat(sum + price);
}
/* *
 *
 *  Class
 *
 * */
/**
 * The DPO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dpo
 *
 * @augments Highcharts.Series
 */
class DPOIndicator extends DPOIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, index = params.index, offset = Math.floor(period / 2 + 1), range = period + offset, xVal = series.xData || [], yVal = series.yData || [], yValLen = yVal.length, 
        // 0- date, 1- Detrended Price Oscillator
        DPO = [], xData = [], yData = [];
        let oscillator, periodIndex, rangeIndex, price, i, j, sum = 0;
        if (xVal.length <= range) {
            return;
        }
        // Accumulate first N-points for SMA
        for (i = 0; i < period - 1; i++) {
            sum = accumulatePoints(sum, yVal, i, index);
        }
        // Detrended Price Oscillator formula:
        // DPO = Price - Simple moving average [from (n / 2 + 1) days ago]
        for (j = 0; j <= yValLen - range; j++) {
            periodIndex = j + period - 1;
            rangeIndex = j + range - 1;
            // Adding the last period point
            sum = accumulatePoints(sum, yVal, periodIndex, index);
            price = DPOIndicator_pick(yVal[rangeIndex][index], yVal[rangeIndex]);
            oscillator = price - sum / period;
            // Subtracting the first period point
            sum = accumulatePoints(sum, yVal, j, index, true);
            DPO.push([xVal[rangeIndex], oscillator]);
            xData.push(xVal[rangeIndex]);
            yData.push(oscillator);
        }
        return {
            values: DPO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Detrended Price Oscillator. This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/dpo
 *         Detrended Price Oscillator
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/dpo
 * @optionparent plotOptions.dpo
 */
DPOIndicator.defaultOptions = DPOIndicator_merge(DPOIndicator_SMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Detrended Price Oscillator series
     * points.
     */
    params: {
        index: 0,
        /**
         * Period for Detrended Price Oscillator
         */
        period: 21
    }
});
DPOIndicator_extend(DPOIndicator.prototype, {
    nameBase: 'DPO'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('dpo', DPOIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const DPO_DPOIndicator = ((/* unused pure expression or super */ null && (DPOIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Detrended Price Oscillator. If the [type](#series.dpo.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.dpo
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/dpo
 * @apioption series.dpo
 */
''; // To include the above in the js output'

;// ./code/es-modules/Stock/Indicators/Chaikin/ChaikinIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

 // For historic reasons, AD is built into Chaikin

const { ema: ChaikinIndicator_EMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: ChaikinIndicator_correctFloat, extend: ChaikinIndicator_extend, merge: ChaikinIndicator_merge, error: ChaikinIndicator_error } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Chaikin series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.chaikin
 *
 * @augments Highcharts.Series
 */
class ChaikinIndicator extends ChaikinIndicator_EMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const periods = params.periods, period = params.period, 
        // 0- date, 1- Chaikin Oscillator
        CHA = [], xData = [], yData = [];
        let oscillator, i;
        // Check if periods are correct
        if (periods.length !== 2 || periods[1] <= periods[0]) {
            ChaikinIndicator_error('Error: "Chaikin requires two periods. Notice, first ' +
                'period should be lower than the second one."');
            return;
        }
        // Accumulation Distribution Line data
        const ADL = AD_ADIndicator.prototype.getValues.call(this, series, {
            volumeSeriesID: params.volumeSeriesID,
            period: period
        });
        // Check if adl is calculated properly, if not skip
        if (!ADL) {
            return;
        }
        // Shorter Period EMA
        const SPE = super.getValues.call(this, ADL, {
            period: periods[0]
        });
        // Longer Period EMA
        const LPE = super.getValues.call(this, ADL, {
            period: periods[1]
        });
        // Check if ema is calculated properly, if not skip
        if (!SPE || !LPE) {
            return;
        }
        const periodsOffset = periods[1] - periods[0];
        for (i = 0; i < LPE.yData.length; i++) {
            oscillator = ChaikinIndicator_correctFloat(SPE.yData[i + periodsOffset] -
                LPE.yData[i]);
            CHA.push([LPE.xData[i], oscillator]);
            xData.push(LPE.xData[i]);
            yData.push(oscillator);
        }
        return {
            values: CHA,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Chaikin Oscillator. This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/chaikin
 *         Chaikin Oscillator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/chaikin
 * @optionparent plotOptions.chaikin
 */
ChaikinIndicator.defaultOptions = ChaikinIndicator_merge(ChaikinIndicator_EMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Chaikin Oscillator
     * series points.
     *
     * @excluding index
     */
    params: {
        index: void 0, // Unused index, do not inherit (#15362)
        /**
         * The id of volume series which is mandatory.
         * For example using OHLC data, volumeSeriesID='volume' means
         * the indicator will be calculated using OHLC and volume values.
         */
        volumeSeriesID: 'volume',
        /**
         * Parameter used indirectly for calculating the `AD` indicator.
         * Decides about the number of data points that are taken
         * into account for the indicator calculations.
         */
        period: 9,
        /**
         * Periods for Chaikin Oscillator calculations.
         *
         * @type    {Array<number>}
         * @default [3, 10]
         */
        periods: [3, 10]
    }
});
ChaikinIndicator_extend(ChaikinIndicator.prototype, {
    nameBase: 'Chaikin Osc',
    nameComponents: ['periods']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('chaikin', ChaikinIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chaikin_ChaikinIndicator = ((/* unused pure expression or super */ null && (ChaikinIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Chaikin Oscillator` series. If the [type](#series.chaikin.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.chaikin
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, stacking, showInNavigator
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/chaikin
 * @apioption series.chaikin
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/CMO/CMOIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: CMOIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isNumber, merge: CMOIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The CMO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.cmo
 *
 * @augments Highcharts.Series
 */
class CMOIndicator extends CMOIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, CMO = [], xData = [], yData = [];
        let i, index = params.index, values;
        if (xVal.length < period) {
            return;
        }
        if (isNumber(yVal[0])) {
            values = yVal;
        }
        else {
            // In case of the situation, where the series type has data length
            // shorter then 4 (HLC, range), this ensures that we are not trying
            // to reach the index out of bounds
            index = Math.min(index, yVal[0].length - 1);
            values = yVal.map((value) => value[index]);
        }
        let firstAddedSum = 0, sumOfHigherValues = 0, sumOfLowerValues = 0, y;
        // Calculate first point, check if the first value
        // was added to sum of higher/lower values, and what was the value.
        for (let j = period; j > 0; j--) {
            if (values[j] > values[j - 1]) {
                sumOfHigherValues += values[j] - values[j - 1];
            }
            else if (values[j] < values[j - 1]) {
                sumOfLowerValues += values[j - 1] - values[j];
            }
        }
        // You might divide by 0 if all values are equal,
        // so return 0 in this case.
        y =
            sumOfHigherValues + sumOfLowerValues > 0 ?
                (100 * (sumOfHigherValues - sumOfLowerValues)) /
                    (sumOfHigherValues + sumOfLowerValues) :
                0;
        xData.push(xVal[period]);
        yData.push(y);
        CMO.push([xVal[period], y]);
        for (i = period + 1; i < yValLen; i++) {
            firstAddedSum = Math.abs(values[i - period - 1] - values[i - period]);
            if (values[i] > values[i - 1]) {
                sumOfHigherValues += values[i] - values[i - 1];
            }
            else if (values[i] < values[i - 1]) {
                sumOfLowerValues += values[i - 1] - values[i];
            }
            // Check, to which sum was the first value added to,
            // and subtract this value from given sum.
            if (values[i - period] > values[i - period - 1]) {
                sumOfHigherValues -= firstAddedSum;
            }
            else {
                sumOfLowerValues -= firstAddedSum;
            }
            // Same as above.
            y =
                sumOfHigherValues + sumOfLowerValues > 0 ?
                    (100 * (sumOfHigherValues - sumOfLowerValues)) /
                        (sumOfHigherValues + sumOfLowerValues) :
                    0;
            xData.push(xVal[i]);
            yData.push(y);
            CMO.push([xVal[i], y]);
        }
        return {
            values: CMO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Chande Momentum Oscilator (CMO) technical indicator. This series
 * requires the `linkedTo` option to be set and should be loaded after
 * the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/cmo
 *         CMO indicator
 *
 * @extends      plotOptions.sma
 * @since 9.1.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/cmo
 * @optionparent plotOptions.cmo
 */
CMOIndicator.defaultOptions = CMOIndicator_merge(CMOIndicator_SMAIndicator.defaultOptions, {
    params: {
        period: 20,
        index: 3
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('cmo', CMOIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const CMO_CMOIndicator = ((/* unused pure expression or super */ null && (CMOIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `CMO` series. If the [type](#series.cmo.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.cmo
 * @since 9.1.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/cmo
 * @apioption series.cmo
 */
(''); // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/DEMA/DEMAIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { ema: DEMAIndicator_EMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: DEMAIndicator_correctFloat, isArray: DEMAIndicator_isArray, merge: DEMAIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The DEMA series Type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.dema
 *
 * @augments Highcharts.Series
 */
class DEMAIndicator extends DEMAIndicator_EMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getEMA(yVal, prevEMA, SMA, index, i, xVal) {
        return super.calculateEma(xVal || [], yVal, typeof i === 'undefined' ? 1 : i, this.EMApercent, prevEMA, typeof index === 'undefined' ? -1 : index, SMA);
    }
    getValues(series, params) {
        const period = params.period, EMAvalues = [], doubledPeriod = 2 * period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, DEMA = [], xDataDema = [], yDataDema = [];
        let accumulatePeriodPoints = 0, EMA = 0, 
        // EMA(EMA)
        EMAlevel2, 
        // EMA of previous point
        prevEMA, prevEMAlevel2, 
        // EMA values array
        i, index = -1, DEMAPoint, SMA = 0;
        this.EMApercent = (2 / (period + 1));
        // Check period, if bigger than EMA points length, skip
        if (yValLen < 2 * period - 1) {
            return;
        }
        // Switch index for OHLC / Candlestick / Arearange
        if (DEMAIndicator_isArray(yVal[0])) {
            index = params.index ? params.index : 0;
        }
        // Accumulate first N-points
        accumulatePeriodPoints =
            super.accumulatePeriodPoints(period, index, yVal);
        // First point
        SMA = accumulatePeriodPoints / period;
        accumulatePeriodPoints = 0;
        // Calculate value one-by-one for each period in visible data
        for (i = period; i < yValLen + 2; i++) {
            if (i < yValLen + 1) {
                EMA = this.getEMA(yVal, prevEMA, SMA, index, i)[1];
                EMAvalues.push(EMA);
            }
            prevEMA = EMA;
            // Summing first period points for EMA(EMA)
            if (i < doubledPeriod) {
                accumulatePeriodPoints += EMA;
            }
            else {
                // Calculate DEMA
                // First DEMA point
                if (i === doubledPeriod) {
                    SMA = accumulatePeriodPoints / period;
                }
                EMA = EMAvalues[i - period - 1];
                EMAlevel2 = this.getEMA([EMA], prevEMAlevel2, SMA)[1];
                DEMAPoint = [
                    xVal[i - 2],
                    DEMAIndicator_correctFloat(2 * EMA - EMAlevel2)
                ];
                DEMA.push(DEMAPoint);
                xDataDema.push(DEMAPoint[0]);
                yDataDema.push(DEMAPoint[1]);
                prevEMAlevel2 = EMAlevel2;
            }
        }
        return {
            values: DEMA,
            xData: xDataDema,
            yData: yDataDema
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Double exponential moving average (DEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/dema
 *         DEMA indicator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/dema
 * @optionparent plotOptions.dema
 */
DEMAIndicator.defaultOptions = DEMAIndicator_merge(DEMAIndicator_EMAIndicator.defaultOptions);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('dema', DEMAIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const DEMA_DEMAIndicator = ((/* unused pure expression or super */ null && (DEMAIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `DEMA` series. If the [type](#series.dema.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.dema
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/dema
 * @apioption series.dema
 */
''; // Adds doclet above to the transpiled file

;// ./code/es-modules/Stock/Indicators/TEMA/TEMAIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { ema: TEMAIndicator_EMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: TEMAIndicator_correctFloat, isArray: TEMAIndicator_isArray, merge: TEMAIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The TEMA series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tema
 *
 * @augments Highcharts.Series
 */
class TEMAIndicator extends TEMAIndicator_EMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getEMA(yVal, prevEMA, SMA, index, i, xVal) {
        return super.calculateEma(xVal || [], yVal, typeof i === 'undefined' ? 1 : i, this.EMApercent, prevEMA, typeof index === 'undefined' ? -1 : index, SMA);
    }
    getTemaPoint(xVal, tripledPeriod, EMAlevels, i) {
        const TEMAPoint = [
            xVal[i - 3],
            TEMAIndicator_correctFloat(3 * EMAlevels.level1 -
                3 * EMAlevels.level2 + EMAlevels.level3)
        ];
        return TEMAPoint;
    }
    getValues(series, params) {
        const period = params.period, doubledPeriod = 2 * period, tripledPeriod = 3 * period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, tema = [], xDataTema = [], yDataTema = [], 
        // EMA values array
        emaValues = [], emaLevel2Values = [], 
        // This object contains all EMA EMAlevels calculated like below
        // EMA = level1
        // EMA(EMA) = level2,
        // EMA(EMA(EMA)) = level3,
        emaLevels = {};
        let index = -1, accumulatePeriodPoints = 0, sma = 0, 
        // EMA of previous point
        prevEMA, prevEMAlevel2, i, temaPoint;
        this.EMApercent = (2 / (period + 1));
        // Check period, if bigger than EMA points length, skip
        if (yValLen < 3 * period - 2) {
            return;
        }
        // Switch index for OHLC / Candlestick / Arearange
        if (TEMAIndicator_isArray(yVal[0])) {
            index = params.index ? params.index : 0;
        }
        // Accumulate first N-points
        accumulatePeriodPoints = super.accumulatePeriodPoints(period, index, yVal);
        // First point
        sma = accumulatePeriodPoints / period;
        accumulatePeriodPoints = 0;
        // Calculate value one-by-one for each period in visible data
        for (i = period; i < yValLen + 3; i++) {
            if (i < yValLen + 1) {
                emaLevels.level1 = this.getEMA(yVal, prevEMA, sma, index, i)[1];
                emaValues.push(emaLevels.level1);
            }
            prevEMA = emaLevels.level1;
            // Summing first period points for ema(ema)
            if (i < doubledPeriod) {
                accumulatePeriodPoints += emaLevels.level1;
            }
            else {
                // Calculate dema
                // First dema point
                if (i === doubledPeriod) {
                    sma = accumulatePeriodPoints / period;
                    accumulatePeriodPoints = 0;
                }
                emaLevels.level1 = emaValues[i - period - 1];
                emaLevels.level2 = this.getEMA([emaLevels.level1], prevEMAlevel2, sma)[1];
                emaLevel2Values.push(emaLevels.level2);
                prevEMAlevel2 = emaLevels.level2;
                // Summing first period points for ema(ema(ema))
                if (i < tripledPeriod) {
                    accumulatePeriodPoints += emaLevels.level2;
                }
                else {
                    // Calculate tema
                    // First tema point
                    if (i === tripledPeriod) {
                        sma = accumulatePeriodPoints / period;
                    }
                    if (i === yValLen + 1) {
                        // Calculate the last ema and emaEMA points
                        emaLevels.level1 = emaValues[i - period - 1];
                        emaLevels.level2 = this.getEMA([emaLevels.level1], prevEMAlevel2, sma)[1];
                        emaLevel2Values.push(emaLevels.level2);
                    }
                    emaLevels.level1 = emaValues[i - period - 2];
                    emaLevels.level2 = emaLevel2Values[i - 2 * period - 1];
                    emaLevels.level3 = this.getEMA([emaLevels.level2], emaLevels.prevLevel3, sma)[1];
                    temaPoint = this.getTemaPoint(xVal, tripledPeriod, emaLevels, i);
                    // Make sure that point exists (for TRIX oscillator)
                    if (temaPoint) {
                        tema.push(temaPoint);
                        xDataTema.push(temaPoint[0]);
                        yDataTema.push(temaPoint[1]);
                    }
                    emaLevels.prevLevel3 = emaLevels.level3;
                }
            }
        }
        return {
            values: tema,
            xData: xDataTema,
            yData: yDataTema
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Triple exponential moving average (TEMA) indicator. This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/tema
 *         TEMA indicator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/tema
 * @optionparent plotOptions.tema
 */
TEMAIndicator.defaultOptions = TEMAIndicator_merge(TEMAIndicator_EMAIndicator.defaultOptions);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('tema', TEMAIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TEMA_TEMAIndicator = ((/* unused pure expression or super */ null && (TEMAIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `TEMA` series. If the [type](#series.tema.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.tema
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/tema
 * @apioption series.tema
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/TRIX/TRIXIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { tema: TRIXIndicator_TEMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: TRIXIndicator_correctFloat, merge: TRIXIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The TRIX series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.trix
 *
 * @augments Highcharts.Series
 */
class TRIXIndicator extends TRIXIndicator_TEMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    // TRIX is calculated using TEMA so we just extend getTemaPoint method.
    getTemaPoint(xVal, tripledPeriod, EMAlevels, i) {
        if (i > tripledPeriod) {
            return [
                xVal[i - 3],
                EMAlevels.prevLevel3 !== 0 ?
                    TRIXIndicator_correctFloat(EMAlevels.level3 - EMAlevels.prevLevel3) /
                        EMAlevels.prevLevel3 * 100 : null
            ];
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Triple exponential average (TRIX) oscillator. This series requires
 * `linkedTo` option to be set.
 *
 * @sample {highstock} stock/indicators/trix
 * TRIX indicator
 *
 * @extends      plotOptions.tema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/tema
 * @requires     stock/indicators/trix
 * @optionparent plotOptions.trix
 */
TRIXIndicator.defaultOptions = TRIXIndicator_merge(TRIXIndicator_TEMAIndicator.defaultOptions);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('trix', TRIXIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TRIX_TRIXIndicator = ((/* unused pure expression or super */ null && (TRIXIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `TRIX` series. If the [type](#series.trix.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.trix
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/tema
 * @apioption series.trix
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/APO/APOIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { ema: APOIndicator_EMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: APOIndicator_extend, merge: APOIndicator_merge, error: APOIndicator_error } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The APO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.apo
 *
 * @augments Highcharts.Series
 */
class APOIndicator extends APOIndicator_EMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const periods = params.periods, index = params.index, 
        // 0- date, 1- Absolute price oscillator
        APO = [], xData = [], yData = [];
        let oscillator, i;
        // Check if periods are correct
        if (periods.length !== 2 || periods[1] <= periods[0]) {
            APOIndicator_error('Error: "APO requires two periods. Notice, first period ' +
                'should be lower than the second one."');
            return;
        }
        // Shorter Period EMA
        const SPE = super.getValues.call(this, series, {
            index: index,
            period: periods[0]
        });
        // Longer Period EMA
        const LPE = super.getValues.call(this, series, {
            index: index,
            period: periods[1]
        });
        // Check if ema is calculated properly, if not skip
        if (!SPE || !LPE) {
            return;
        }
        const periodsOffset = periods[1] - periods[0];
        for (i = 0; i < LPE.yData.length; i++) {
            oscillator = (SPE.yData[i + periodsOffset] -
                LPE.yData[i]);
            APO.push([LPE.xData[i], oscillator]);
            xData.push(LPE.xData[i]);
            yData.push(oscillator);
        }
        return {
            values: APO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Absolute Price Oscillator. This series requires the `linkedTo` option to
 * be set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/apo
 *         Absolute Price Oscillator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/apo
 * @optionparent plotOptions.apo
 */
APOIndicator.defaultOptions = APOIndicator_merge(APOIndicator_EMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Absolute Price Oscillator
     * series points.
     *
     * @excluding period
     */
    params: {
        period: void 0, // Unchangeable period, do not inherit (#15362)
        /**
         * Periods for Absolute Price Oscillator calculations.
         *
         * @type    {Array<number>}
         * @default [10, 20]
         * @since   7.0.0
         */
        periods: [10, 20]
    }
});
APOIndicator_extend(APOIndicator.prototype, {
    nameBase: 'APO',
    nameComponents: ['periods']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('apo', APOIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const APO_APOIndicator = ((/* unused pure expression or super */ null && (APOIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * An `Absolute Price Oscillator` series. If the [type](#series.apo.type) option
 * is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.apo
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/apo
 * @apioption series.apo
 */
''; // To include the above in the js output

;// external ["../modules/datagrouping.src.js","default","dataGrouping","approximations"]
const datagrouping_src_js_default_dataGrouping_approximations_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_datagrouping_src_js_b7a4250c__["default"].dataGrouping.approximations;
var datagrouping_src_js_default_dataGrouping_approximations_default = /*#__PURE__*/__webpack_require__.n(datagrouping_src_js_default_dataGrouping_approximations_namespaceObject);
;// external ["../highcharts.src.js","default","Color"]
const external_highcharts_src_js_default_Color_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Color;
var external_highcharts_src_js_default_Color_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Color_namespaceObject);
;// ./code/es-modules/Stock/Indicators/IKH/IKHIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { parse: color } = (external_highcharts_src_js_default_Color_default());

const { sma: IKHIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { defined: IKHIndicator_defined, extend: IKHIndicator_extend, isArray: IKHIndicator_isArray, isNumber: IKHIndicator_isNumber, getClosestDistance, merge: IKHIndicator_merge, objectEach } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function maxHigh(arr) {
    return arr.reduce(function (max, res) {
        return Math.max(max, res[1]);
    }, -Infinity);
}
/**
 * @private
 */
function minLow(arr) {
    return arr.reduce(function (min, res) {
        return Math.min(min, res[2]);
    }, Infinity);
}
/**
 * @private
 */
function highlowLevel(arr) {
    return {
        high: maxHigh(arr),
        low: minLow(arr)
    };
}
/**
 * Check two lines intersection (line a1-a2 and b1-b2)
 * Source: https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
 * @private
 */
function checkLineIntersection(a1, a2, b1, b2) {
    if (a1 && a2 && b1 && b2) {
        const saX = a2.plotX - a1.plotX, // Auxiliary section a2-a1 X
        saY = a2.plotY - a1.plotY, // Auxiliary section a2-a1 Y
        sbX = b2.plotX - b1.plotX, // Auxiliary section b2-b1 X
        sbY = b2.plotY - b1.plotY, // Auxiliary section b2-b1 Y
        sabX = a1.plotX - b1.plotX, // Auxiliary section a1-b1 X
        sabY = a1.plotY - b1.plotY, // Auxiliary section a1-b1 Y
        // First degree Bézier parameters
        u = (-saY * sabX + saX * sabY) / (-sbX * saY + saX * sbY), t = (sbX * sabY - sbY * sabX) / (-sbX * saY + saX * sbY);
        if (u >= 0 && u <= 1 && t >= 0 && t <= 1) {
            return {
                plotX: a1.plotX + t * saX,
                plotY: a1.plotY + t * saY
            };
        }
    }
}
/**
 * Parameter opt (indicator options object) include indicator, points,
 * nextPoints, color, options, gappedExtend and graph properties
 * @private
 */
function drawSenkouSpan(opt) {
    const indicator = opt.indicator;
    indicator.points = opt.points;
    indicator.nextPoints = opt.nextPoints;
    indicator.color = opt.color;
    indicator.options = IKHIndicator_merge(opt.options.senkouSpan.styles, opt.gap);
    indicator.graph = opt.graph;
    indicator.fillGraph = true;
    external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.drawGraph.call(indicator);
}
/**
 * Data integrity in Ichimoku is different than default 'averages':
 * Point: [undefined, value, value, ...] is correct
 * Point: [undefined, undefined, undefined, ...] is incorrect
 * @private
 */
function ichimokuAverages() {
    const ret = [];
    let isEmptyRange;
    [].forEach.call(arguments, function (arr, i) {
        ret.push(datagrouping_src_js_default_dataGrouping_approximations_default().average(arr));
        isEmptyRange = !isEmptyRange && typeof ret[i] === 'undefined';
    });
    // Return undefined when first elem. is undefined and let
    // sum method handle null (#7377)
    return isEmptyRange ? void 0 : ret;
}
/* *
 *
 *  Class
 *
 * */
/**
 * The IKH series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ikh
 *
 * @augments Highcharts.Series
 */
class IKHIndicator extends IKHIndicator_SMAIndicator {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        /* *
         *
         *  Properties
         *
         * */
        this.data = [];
        this.options = {};
        this.points = [];
        this.graphCollection = [];
    }
    /* *
     *
     * Functions
     *
     * */
    init() {
        super.init.apply(this, arguments);
        // Set default color for lines:
        this.options = IKHIndicator_merge({
            tenkanLine: {
                styles: {
                    lineColor: this.color
                }
            },
            kijunLine: {
                styles: {
                    lineColor: this.color
                }
            },
            chikouLine: {
                styles: {
                    lineColor: this.color
                }
            },
            senkouSpanA: {
                styles: {
                    lineColor: this.color,
                    fill: color(this.color).setOpacity(0.5).get()
                }
            },
            senkouSpanB: {
                styles: {
                    lineColor: this.color,
                    fill: color(this.color).setOpacity(0.5).get()
                }
            },
            senkouSpan: {
                styles: {
                    fill: color(this.color).setOpacity(0.2).get()
                }
            }
        }, this.options);
    }
    toYData(point) {
        return [
            point.tenkanSen,
            point.kijunSen,
            point.chikouSpan,
            point.senkouSpanA,
            point.senkouSpanB
        ];
    }
    translate() {
        const indicator = this;
        external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.translate.apply(indicator);
        for (const point of indicator.points) {
            for (const key of indicator.pointArrayMap) {
                const pointValue = point[key];
                if (IKHIndicator_isNumber(pointValue)) {
                    point['plot' + key] = indicator.yAxis.toPixels(pointValue, true);
                    // Add extra parameters for support tooltip in moved
                    // lines
                    point.plotY = point['plot' + key];
                    point.tooltipPos = [
                        point.plotX,
                        point['plot' + key]
                    ];
                    point.isNull = false;
                }
            }
        }
    }
    drawGraph() {
        const indicator = this, mainLinePoints = indicator.points, mainLineOptions = indicator.options, mainLinePath = indicator.graph, mainColor = indicator.color, gappedExtend = {
            options: {
                gapSize: mainLineOptions.gapSize
            }
        }, pointArrayMapLength = indicator.pointArrayMap.length, allIchimokuPoints = [
            [],
            [],
            [],
            [],
            [],
            []
        ], ikhMap = {
            tenkanLine: allIchimokuPoints[0],
            kijunLine: allIchimokuPoints[1],
            chikouLine: allIchimokuPoints[2],
            senkouSpanA: allIchimokuPoints[3],
            senkouSpanB: allIchimokuPoints[4],
            senkouSpan: allIchimokuPoints[5]
        }, intersectIndexColl = [], senkouSpanOptions = indicator
            .options.senkouSpan, color = senkouSpanOptions.color ||
            senkouSpanOptions.styles.fill, negativeColor = senkouSpanOptions.negativeColor, 
        // Points to create color and negativeColor senkouSpan
        points = [
            [], // Points color
            [] // Points negative color
        ], 
        // For span, we need an access to the next points, used in
        // getGraphPath()
        nextPoints = [
            [], // Next points color
            [] // Next points negative color
        ];
        let pointsLength = mainLinePoints.length, lineIndex = 0, position, point, i, startIntersect, endIntersect, sectionPoints, sectionNextPoints, pointsPlotYSum, nextPointsPlotYSum, senkouSpanTempColor, concatArrIndex, j, k;
        indicator.ikhMap = ikhMap;
        // Generate points for all lines and spans lines:
        while (pointsLength--) {
            point = mainLinePoints[pointsLength];
            for (i = 0; i < pointArrayMapLength; i++) {
                position = indicator.pointArrayMap[i];
                if (IKHIndicator_defined(point[position])) {
                    allIchimokuPoints[i].push({
                        plotX: point.plotX,
                        plotY: point['plot' + position],
                        isNull: false
                    });
                }
            }
            if (negativeColor && pointsLength !== mainLinePoints.length - 1) {
                // Check if lines intersect
                const index = ikhMap.senkouSpanB.length - 1, intersect = checkLineIntersection(ikhMap.senkouSpanA[index - 1], ikhMap.senkouSpanA[index], ikhMap.senkouSpanB[index - 1], ikhMap.senkouSpanB[index]);
                if (intersect) {
                    const intersectPointObj = {
                        plotX: intersect.plotX,
                        plotY: intersect.plotY,
                        isNull: false,
                        intersectPoint: true
                    };
                    // Add intersect point to ichimoku points collection
                    // Create senkouSpan sections
                    ikhMap.senkouSpanA.splice(index, 0, intersectPointObj);
                    ikhMap.senkouSpanB.splice(index, 0, intersectPointObj);
                    intersectIndexColl.push(index);
                }
            }
        }
        // Modify options and generate lines:
        objectEach(ikhMap, (values, lineName) => {
            if (mainLineOptions[lineName] &&
                lineName !== 'senkouSpan') {
                // First line is rendered by default option
                indicator.points = allIchimokuPoints[lineIndex];
                indicator.options = IKHIndicator_merge(mainLineOptions[lineName].styles, gappedExtend);
                indicator.graph = indicator['graph' + lineName];
                indicator.fillGraph = false;
                indicator.color = mainColor;
                external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.drawGraph.call(indicator);
                // Now save line
                indicator['graph' + lineName] = indicator.graph;
            }
            lineIndex++;
        });
        // Generate senkouSpan area:
        // If graphCollection exist then remove svg
        // element and indicator property
        if (indicator.graphCollection) {
            for (const graphName of indicator.graphCollection) {
                indicator[graphName].destroy();
                delete indicator[graphName];
            }
        }
        // Clean graphCollection or initialize it
        indicator.graphCollection = [];
        // When user set negativeColor property
        if (negativeColor && ikhMap.senkouSpanA[0] && ikhMap.senkouSpanB[0]) {
            // Add first and last point to senkouSpan area sections
            intersectIndexColl.unshift(0);
            intersectIndexColl.push(ikhMap.senkouSpanA.length - 1);
            // Populate points and nextPoints arrays
            for (j = 0; j < intersectIndexColl.length - 1; j++) {
                startIntersect = intersectIndexColl[j];
                endIntersect = intersectIndexColl[j + 1];
                sectionPoints = ikhMap.senkouSpanB.slice(startIntersect, endIntersect + 1);
                sectionNextPoints = ikhMap.senkouSpanA.slice(startIntersect, endIntersect + 1);
                // Add points to color or negativeColor arrays
                // Check the middle point (if exist)
                if (Math.floor(sectionPoints.length / 2) >= 1) {
                    const x = Math.floor(sectionPoints.length / 2);
                    // When middle points has equal values
                    // Compare all points plotY value sum
                    if (sectionPoints[x].plotY === sectionNextPoints[x].plotY) {
                        pointsPlotYSum = 0;
                        nextPointsPlotYSum = 0;
                        for (k = 0; k < sectionPoints.length; k++) {
                            pointsPlotYSum += sectionPoints[k].plotY;
                            nextPointsPlotYSum += sectionNextPoints[k].plotY;
                        }
                        concatArrIndex =
                            pointsPlotYSum > nextPointsPlotYSum ? 0 : 1;
                        points[concatArrIndex] = points[concatArrIndex].concat(sectionPoints);
                        nextPoints[concatArrIndex] = nextPoints[concatArrIndex].concat(sectionNextPoints);
                    }
                    else {
                        // Compare middle point of the section
                        concatArrIndex = (sectionPoints[x].plotY > sectionNextPoints[x].plotY) ? 0 : 1;
                        points[concatArrIndex] = points[concatArrIndex].concat(sectionPoints);
                        nextPoints[concatArrIndex] = nextPoints[concatArrIndex].concat(sectionNextPoints);
                    }
                }
                else {
                    // Compare first point of the section
                    concatArrIndex = (sectionPoints[0].plotY > sectionNextPoints[0].plotY) ? 0 : 1;
                    points[concatArrIndex] = points[concatArrIndex].concat(sectionPoints);
                    nextPoints[concatArrIndex] = nextPoints[concatArrIndex].concat(sectionNextPoints);
                }
            }
            // Render color and negativeColor paths
            ['graphsenkouSpanColor', 'graphsenkouSpanNegativeColor'].forEach(function (areaName, i) {
                if (points[i].length && nextPoints[i].length) {
                    senkouSpanTempColor = i === 0 ? color : negativeColor;
                    drawSenkouSpan({
                        indicator: indicator,
                        points: points[i],
                        nextPoints: nextPoints[i],
                        color: senkouSpanTempColor,
                        options: mainLineOptions,
                        gap: gappedExtend,
                        graph: indicator[areaName]
                    });
                    // Now save line
                    indicator[areaName] = indicator.graph;
                    indicator.graphCollection.push(areaName);
                }
            });
        }
        else {
            // When user set only senkouSpan style.fill property
            drawSenkouSpan({
                indicator: indicator,
                points: ikhMap.senkouSpanB,
                nextPoints: ikhMap.senkouSpanA,
                color: color,
                options: mainLineOptions,
                gap: gappedExtend,
                graph: indicator.graphsenkouSpan
            });
            // Now save line
            indicator.graphsenkouSpan = indicator.graph;
        }
        // Clean temporary properties:
        delete indicator.nextPoints;
        delete indicator.fillGraph;
        // Restore options and draw the Tenkan line:
        indicator.points = mainLinePoints;
        indicator.options = mainLineOptions;
        indicator.graph = mainLinePath;
        indicator.color = mainColor;
    }
    getGraphPath(points) {
        const indicator = this;
        let path = [], spanA, spanAarr = [];
        points = points || this.points;
        // Render Senkou Span
        if (indicator.fillGraph && indicator.nextPoints) {
            spanA = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.getGraphPath.call(indicator, 
            // Reverse points, so Senkou Span A will start from the end:
            indicator.nextPoints);
            if (spanA && spanA.length) {
                spanA[0][0] = 'L';
                path = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.getGraphPath
                    .call(indicator, points);
                spanAarr = spanA.slice(0, path.length);
                for (let i = spanAarr.length - 1; i >= 0; i--) {
                    path.push(spanAarr[i]);
                }
            }
        }
        else {
            path = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.getGraphPath
                .apply(indicator, arguments);
        }
        return path;
    }
    getValues(series, params) {
        const period = params.period, periodTenkan = params.periodTenkan, periodSenkouSpanB = params.periodSenkouSpanB, xVal = series.xData, yVal = series.yData, xAxis = series.xAxis, yValLen = (yVal && yVal.length) || 0, closestPointRange = getClosestDistance(xAxis.series.map((s) => s.getColumn('x'))), IKH = [], xData = [];
        let date, slicedTSY, slicedKSY, slicedSSBY, pointTS, pointKS, pointSSB, i, TS, KS, CS, SSA, SSB;
        // Ikh requires close value
        if (xVal.length <= period ||
            !IKHIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        // Add timestamps at the beginning
        const dateStart = xVal[0] - period * closestPointRange;
        for (i = 0; i < period; i++) {
            xData.push(dateStart + i * closestPointRange);
        }
        for (i = 0; i < yValLen; i++) {
            // Tenkan Sen
            if (i >= periodTenkan) {
                slicedTSY = yVal.slice(i - periodTenkan, i);
                pointTS = highlowLevel(slicedTSY);
                TS = (pointTS.high + pointTS.low) / 2;
            }
            if (i >= period) {
                slicedKSY = yVal.slice(i - period, i);
                pointKS = highlowLevel(slicedKSY);
                KS = (pointKS.high + pointKS.low) / 2;
                SSA = (TS + KS) / 2;
            }
            if (i >= periodSenkouSpanB) {
                slicedSSBY = yVal.slice(i - periodSenkouSpanB, i);
                pointSSB = highlowLevel(slicedSSBY);
                SSB = (pointSSB.high + pointSSB.low) / 2;
            }
            CS = yVal[i][3];
            date = xVal[i];
            if (typeof IKH[i] === 'undefined') {
                IKH[i] = [];
            }
            if (typeof IKH[i + period - 1] === 'undefined') {
                IKH[i + period - 1] = [];
            }
            IKH[i + period - 1][0] = TS;
            IKH[i + period - 1][1] = KS;
            IKH[i + period - 1][2] = void 0;
            if (typeof IKH[i + 1] === 'undefined') {
                IKH[i + 1] = [];
            }
            IKH[i + 1][2] = CS;
            if (i <= period) {
                IKH[i + period - 1][3] = void 0;
                IKH[i + period - 1][4] = void 0;
            }
            if (typeof IKH[i + 2 * period - 2] === 'undefined') {
                IKH[i + 2 * period - 2] = [];
            }
            IKH[i + 2 * period - 2][3] = SSA;
            IKH[i + 2 * period - 2][4] = SSB;
            xData.push(date);
        }
        // Add timestamps for further points
        for (i = 1; i <= period; i++) {
            xData.push(date + i * closestPointRange);
        }
        return {
            values: IKH,
            xData: xData,
            yData: IKH
        };
    }
}
/**
 * Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be
 * set.
 *
 * @sample stock/indicators/ichimoku-kinko-hyo
 *         Ichimoku Kinko Hyo indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/ichimoku-kinko-hyo
 * @optionparent plotOptions.ikh
 */
IKHIndicator.defaultOptions = IKHIndicator_merge(IKHIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unused index, do not inherit (#15362)
        period: 26,
        /**
         * The base period for Tenkan calculations.
         */
        periodTenkan: 9,
        /**
         * The base period for Senkou Span B calculations
         */
        periodSenkouSpanB: 52
    },
    marker: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
            'TENKAN SEN: {point.tenkanSen:.3f}<br/>' +
            'KIJUN SEN: {point.kijunSen:.3f}<br/>' +
            'CHIKOU SPAN: {point.chikouSpan:.3f}<br/>' +
            'SENKOU SPAN A: {point.senkouSpanA:.3f}<br/>' +
            'SENKOU SPAN B: {point.senkouSpanB:.3f}<br/>'
    },
    /**
     * The styles for Tenkan line
     */
    tenkanLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * The styles for Kijun line
     */
    kijunLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * The styles for Chikou line
     */
    chikouLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * The styles for Senkou Span A line
     */
    senkouSpanA: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * The styles for Senkou Span B line
     */
    senkouSpanB: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * The styles for area between Senkou Span A and B.
     */
    senkouSpan: {
        /**
         * Color of the area between Senkou Span A and B,
         * when Senkou Span A is above Senkou Span B. Note that if
         * a `style.fill` is defined, the `color` takes precedence and
         * the `style.fill` is ignored.
         *
         * @see [senkouSpan.styles.fill](#series.ikh.senkouSpan.styles.fill)
         *
         * @sample stock/indicators/ichimoku-kinko-hyo
         *         Ichimoku Kinko Hyo color
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since     7.0.0
         * @apioption plotOptions.ikh.senkouSpan.color
         */
        /**
         * Color of the area between Senkou Span A and B,
         * when Senkou Span A is under Senkou Span B.
         *
         * @sample stock/indicators/ikh-negative-color
         *         Ichimoku Kinko Hyo negativeColor
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @since     7.0.0
         * @apioption plotOptions.ikh.senkouSpan.negativeColor
         */
        styles: {
            /**
             * Color of the area between Senkou Span A and B.
             *
             * @deprecated
             * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             */
            fill: 'rgba(255, 0, 0, 0.5)'
        }
    },
    dataGrouping: {
        approximation: 'ichimoku-averages'
    }
});
IKHIndicator_extend(IKHIndicator.prototype, {
    pointArrayMap: [
        'tenkanSen',
        'kijunSen',
        'chikouSpan',
        'senkouSpanA',
        'senkouSpanB'
    ],
    pointValKey: 'tenkanSen',
    nameComponents: ['periodSenkouSpanB', 'period', 'periodTenkan']
});
/* *
 *
 *  Registry
 *
 * */
(datagrouping_src_js_default_dataGrouping_approximations_default())["ichimoku-averages"] = ichimokuAverages;
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ikh', IKHIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const IKH_IKHIndicator = ((/* unused pure expression or super */ null && (IKHIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `IKH` series. If the [type](#series.ikh.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ikh
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/ichimoku-kinko-hyo
 * @apioption series.ikh
 */
(''); // Add doclet above to transpiled file

;// ./code/es-modules/Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: KeltnerChannelsIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: KeltnerChannelsIndicator_correctFloat, extend: KeltnerChannelsIndicator_extend, merge: KeltnerChannelsIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Keltner Channels series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.keltnerchannels
 *
 * @augments Highcharts.Series
 */
class KeltnerChannelsIndicator extends KeltnerChannelsIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.init.apply(this, arguments);
        // Set default color for lines:
        this.options = KeltnerChannelsIndicator_merge({
            topLine: {
                styles: {
                    lineColor: this.color
                }
            },
            bottomLine: {
                styles: {
                    lineColor: this.color
                }
            }
        }, this.options);
    }
    getValues(series, params) {
        const period = params.period, periodATR = params.periodATR, multiplierATR = params.multiplierATR, index = params.index, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // Keltner Channels array structure:
        // 0-date, 1-top line, 2-middle line, 3-bottom line
        KC = [], seriesEMA = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.ema.prototype.getValues(series, {
            period: period,
            index: index
        }), seriesATR = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.atr.prototype.getValues(series, {
            period: periodATR
        }), xData = [], yData = [];
        // Middle line, top line and bottom lineI
        let ML, TL, BL, date, pointEMA, pointATR, i;
        if (yValLen < period) {
            return;
        }
        for (i = period; i <= yValLen; i++) {
            pointEMA = seriesEMA.values[i - period];
            pointATR = seriesATR.values[i - periodATR];
            date = pointEMA[0];
            TL = KeltnerChannelsIndicator_correctFloat(pointEMA[1] + (multiplierATR * pointATR[1]));
            BL = KeltnerChannelsIndicator_correctFloat(pointEMA[1] - (multiplierATR * pointATR[1]));
            ML = pointEMA[1];
            KC.push([date, TL, ML, BL]);
            xData.push(date);
            yData.push([TL, ML, BL]);
        }
        return {
            values: KC,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Keltner Channels. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js`,
 * `stock/indicators/atr.js`, and `stock/ema/.js`.
 *
 * @sample {highstock} stock/indicators/keltner-channels
 *         Keltner Channels
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart,showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/keltner-channels
 * @optionparent plotOptions.keltnerchannels
 */
KeltnerChannelsIndicator.defaultOptions = KeltnerChannelsIndicator_merge(KeltnerChannelsIndicator_SMAIndicator.defaultOptions, {
    /**
     * Option for fill color between lines in Keltner Channels Indicator.
     *
     * @sample {highstock} stock/indicators/indicator-area-fill
     *      Background fill between lines.
     *
     * @type {Highcharts.Color}
     * @since 9.3.2
     * @apioption plotOptions.keltnerchannels.fillColor
     *
     */
    params: {
        /**
         * The point index which indicator calculations will base. For
         * example using OHLC data, index=2 means the indicator will be
         * calculated using Low values.
         */
        index: 0,
        period: 20,
        /**
         * The ATR period.
         */
        periodATR: 10,
        /**
         * The ATR multiplier.
         */
        multiplierATR: 2
    },
    /**
     * Bottom line options.
     *
     */
    bottomLine: {
        /**
         * Styles for a bottom line.
         *
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * `plotOptions.keltnerchannels.color`
             */
            lineColor: void 0
        }
    },
    /**
     * Top line options.
     *
     * @extends plotOptions.keltnerchannels.bottomLine
     */
    topLine: {
        styles: {
            lineWidth: 1,
            lineColor: void 0
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'
    },
    marker: {
        enabled: false
    },
    dataGrouping: {
        approximation: 'averages'
    },
    lineWidth: 1
});
KeltnerChannelsIndicator_extend(KeltnerChannelsIndicator.prototype, {
    nameBase: 'Keltner Channels',
    areaLinesNames: ['top', 'bottom'],
    nameComponents: ['period', 'periodATR', 'multiplierATR'],
    linesApiNames: ['topLine', 'bottomLine'],
    pointArrayMap: ['top', 'middle', 'bottom'],
    pointValKey: 'middle'
});
Indicators_MultipleLinesComposition.compose(KeltnerChannelsIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('keltnerchannels', KeltnerChannelsIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const KeltnerChannels_KeltnerChannelsIndicator = ((/* unused pure expression or super */ null && (KeltnerChannelsIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Keltner Channels indicator. If the [type](#series.keltnerchannels.type)
 * option is not specified, it is inherited from[chart.type](#chart.type).
 *
 * @extends      series,plotOptions.keltnerchannels
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *               joinBy, keys, navigatorOptions, pointInterval,
 *               pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *               stacking, showInNavigator
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/keltner-channels
 * @apioption    series.keltnerchannels
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/Klinger/KlingerIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { ema: KlingerIndicator_EMAIndicator, sma: KlingerIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: KlingerIndicator_correctFloat, error: KlingerIndicator_error, extend: KlingerIndicator_extend, isArray: KlingerIndicator_isArray, merge: KlingerIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Klinger oscillator series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.klinger
 *
 * @augments Highcharts.Series
 */
class KlingerIndicator extends KlingerIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    calculateTrend(yVal, i) {
        const isUpward = yVal[i][1] + yVal[i][2] + yVal[i][3] >
            yVal[i - 1][1] + yVal[i - 1][2] + yVal[i - 1][3];
        return isUpward ? 1 : -1;
    }
    // Checks if the series and volumeSeries are accessible, number of
    // points.x is longer than period, is series has OHLC data
    isValidData(firstYVal) {
        const chart = this.chart, options = this.options, series = this.linkedParent, isSeriesOHLC = KlingerIndicator_isArray(firstYVal) &&
            firstYVal.length === 4, volumeSeries = this.volumeSeries ||
            (this.volumeSeries =
                chart.get(options.params.volumeSeriesID));
        if (!volumeSeries) {
            KlingerIndicator_error('Series ' +
                options.params.volumeSeriesID +
                ' not found! Check `volumeSeriesID`.', true, series.chart);
        }
        const isLengthValid = [series, volumeSeries].every(function (series) {
            return series && series.dataTable.rowCount >=
                options.params.slowAvgPeriod;
        });
        return !!(isLengthValid && isSeriesOHLC);
    }
    getCM(previousCM, DM, trend, previousTrend, prevoiusDM) {
        return KlingerIndicator_correctFloat(DM + (trend === previousTrend ? previousCM : prevoiusDM));
    }
    getDM(high, low) {
        return KlingerIndicator_correctFloat(high - low);
    }
    getVolumeForce(yVal) {
        const volumeForce = [];
        let CM = 0, // Cumulative measurement
        DM, // Daily measurement
        force, i = 1, // Start from second point
        previousCM = 0, previousDM = yVal[0][1] - yVal[0][2], // Initial DM
        previousTrend = 0, trend;
        for (i; i < yVal.length; i++) {
            trend = this.calculateTrend(yVal, i);
            DM = this.getDM(yVal[i][1], yVal[i][2]);
            // For the first iteration when the previousTrend doesn't exist,
            // previousCM doesn't exist either, but it doesn't matter becouse
            // it's filltered out in the getCM method in else statement,
            // (in this iteration, previousCM can be raplaced with the DM).
            CM = this.getCM(previousCM, DM, trend, previousTrend, previousDM);
            force = this.volumeSeries.getColumn('y')[i] *
                trend * Math.abs(2 * ((DM / CM) - 1)) * 100;
            volumeForce.push([force]);
            // Before next iteration, assign the current as the previous.
            previousTrend = trend;
            previousCM = CM;
            previousDM = DM;
        }
        return volumeForce;
    }
    getEMA(yVal, prevEMA, SMA, EMApercent, index, i, xVal) {
        return KlingerIndicator_EMAIndicator.prototype.calculateEma(xVal || [], yVal, typeof i === 'undefined' ? 1 : i, EMApercent, prevEMA, typeof index === 'undefined' ? -1 : index, SMA);
    }
    getSMA(period, index, values) {
        return KlingerIndicator_EMAIndicator.prototype
            .accumulatePeriodPoints(period, index, values) / period;
    }
    getValues(series, params) {
        const Klinger = [], xVal = series.xData, yVal = series.yData, xData = [], yData = [], calcSingal = [];
        let KO, i = 0, fastEMA = 0, slowEMA, previousFastEMA = void 0, previousSlowEMA = void 0, signal = null;
        // If the necessary conditions are not fulfilled, don't proceed.
        if (!this.isValidData(yVal[0])) {
            return;
        }
        // Calculate the Volume Force array.
        const volumeForce = this.getVolumeForce(yVal);
        // Calculate SMA for the first points.
        const SMAFast = this.getSMA(params.fastAvgPeriod, 0, volumeForce), SMASlow = this.getSMA(params.slowAvgPeriod, 0, volumeForce);
        // Calculate EMApercent for the first points.
        const fastEMApercent = 2 / (params.fastAvgPeriod + 1), slowEMApercent = 2 / (params.slowAvgPeriod + 1);
        // Calculate KO
        for (i; i < yVal.length; i++) {
            // Get EMA for fast period.
            if (i >= params.fastAvgPeriod) {
                fastEMA = this.getEMA(volumeForce, previousFastEMA, SMAFast, fastEMApercent, 0, i, xVal)[1];
                previousFastEMA = fastEMA;
            }
            // Get EMA for slow period.
            if (i >= params.slowAvgPeriod) {
                slowEMA = this.getEMA(volumeForce, previousSlowEMA, SMASlow, slowEMApercent, 0, i, xVal)[1];
                previousSlowEMA = slowEMA;
                KO = KlingerIndicator_correctFloat(fastEMA - slowEMA);
                calcSingal.push(KO);
                // Calculate signal SMA
                if (calcSingal.length >= params.signalPeriod) {
                    signal = calcSingal.slice(-params.signalPeriod)
                        .reduce((prev, curr) => prev + curr) / params.signalPeriod;
                }
                Klinger.push([xVal[i], KO, signal]);
                xData.push(xVal[i]);
                yData.push([KO, signal]);
            }
        }
        return {
            values: Klinger,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Klinger oscillator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/klinger
 *         Klinger oscillator
 *
 * @extends      plotOptions.sma
 * @since 9.1.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/klinger
 * @optionparent plotOptions.klinger
 */
KlingerIndicator.defaultOptions = KlingerIndicator_merge(KlingerIndicator_SMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Klinger Oscillator.
     *
     * @excluding index, period
     */
    params: {
        /**
         * The fast period for indicator calculations.
         */
        fastAvgPeriod: 34,
        /**
         * The slow period for indicator calculations.
         */
        slowAvgPeriod: 55,
        /**
         * The base period for signal calculations.
         */
        signalPeriod: 13,
        /**
         * The id of another series to use its data as volume data for the
         * indiator calculation.
         */
        volumeSeriesID: 'volume'
    },
    signalLine: {
        /**
         * Styles for a signal line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.klinger.color
             * ](#plotOptions.klinger.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: '#ff0000'
        }
    },
    dataGrouping: {
        approximation: 'averages'
    },
    tooltip: {
        pointFormat: '<span style="color: {point.color}">\u25CF</span>' +
            '<b> {series.name}</b><br/>' +
            '<span style="color: {point.color}">Klinger</span>: ' +
            '{point.y}<br/>' +
            '<span style="color: ' +
            '{point.series.options.signalLine.styles.lineColor}">' +
            'Signal</span>' +
            ': {point.signal}<br/>'
    }
});
KlingerIndicator_extend(KlingerIndicator.prototype, {
    areaLinesNames: [],
    linesApiNames: ['signalLine'],
    nameBase: 'Klinger',
    nameComponents: ['fastAvgPeriod', 'slowAvgPeriod'],
    pointArrayMap: ['y', 'signal'],
    parallelArrays: ['x', 'y', 'signal'],
    pointValKey: 'y'
});
Indicators_MultipleLinesComposition.compose(KlingerIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('klinger', KlingerIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Klinger_KlingerIndicator = ((/* unused pure expression or super */ null && (KlingerIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Klinger oscillator. If the [type](#series.klinger.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.klinger
 * @since 9.1.0
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/klinger
 * @apioption series.klinger
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/MACD/MACDIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { noop: MACDIndicator_noop } = (external_highcharts_src_js_default_default());

const { sma: MACDIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: MACDIndicator_extend, correctFloat: MACDIndicator_correctFloat, defined: MACDIndicator_defined, merge: MACDIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The MACD series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.macd
 *
 * @augments Highcharts.Series
 */
class MACDIndicator extends MACDIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.init.apply(this, arguments);
        const originalColor = this.color, originalColorIndex = this.colorIndex;
        // Check whether series is initialized. It may be not initialized,
        // when any of required indicators is missing.
        if (this.options) {
            // If the default color doesn't set, get the next available from
            // the array and apply it #15608.
            if (MACDIndicator_defined(this.colorIndex)) {
                if (this.options.signalLine?.styles &&
                    !this.options.signalLine.styles.lineColor) {
                    this.options.colorIndex = this.colorIndex + 1;
                    this.getCyclic('color', void 0, this.chart.options.colors);
                    this.options.signalLine.styles.lineColor =
                        this.color;
                }
                if (this.options.macdLine?.styles &&
                    !this.options.macdLine.styles.lineColor) {
                    this.options.colorIndex = this.colorIndex + 1;
                    this.getCyclic('color', void 0, this.chart.options.colors);
                    this.options.macdLine.styles.lineColor =
                        this.color;
                }
            }
            // Zones have indexes automatically calculated, we need to
            // translate them to support multiple lines within one indicator
            this.macdZones = {
                zones: this.options.macdLine?.zones,
                startIndex: 0
            };
            this.signalZones = {
                zones: this.macdZones.zones?.concat(this.options.signalLine.zones),
                startIndex: this.macdZones.zones?.length
            };
        }
        // Reset color and index #15608.
        this.color = originalColor;
        this.colorIndex = originalColorIndex;
    }
    toYData(point) {
        return [point.y, point.signal, point.MACD];
    }
    translate() {
        const indicator = this, plotNames = ['plotSignal', 'plotMACD'];
        external_highcharts_src_js_default_default().seriesTypes.column.prototype.translate.apply(indicator);
        indicator.points.forEach(function (point) {
            [point.signal, point.MACD].forEach(function (value, i) {
                if (value !== null) {
                    point[plotNames[i]] =
                        indicator.yAxis.toPixels(value, true);
                }
            });
        });
    }
    destroy() {
        // This.graph is null due to removing two times the same SVG element
        this.graph = null;
        this.graphmacd = this.graphmacd && this.graphmacd.destroy();
        this.graphsignal = this.graphsignal && this.graphsignal.destroy();
        external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.destroy.apply(this, arguments);
    }
    drawGraph() {
        const indicator = this, mainLinePoints = indicator.points, mainLineOptions = indicator.options, histogramZones = indicator.zones, gappedExtend = {
            options: {
                gapSize: mainLineOptions.gapSize
            }
        }, otherSignals = [[], []];
        let point, pointsLength = mainLinePoints.length;
        // Generate points for top and bottom lines:
        while (pointsLength--) {
            point = mainLinePoints[pointsLength];
            if (MACDIndicator_defined(point.plotMACD)) {
                otherSignals[0].push({
                    plotX: point.plotX,
                    plotY: point.plotMACD,
                    isNull: !MACDIndicator_defined(point.plotMACD)
                });
            }
            if (MACDIndicator_defined(point.plotSignal)) {
                otherSignals[1].push({
                    plotX: point.plotX,
                    plotY: point.plotSignal,
                    isNull: !MACDIndicator_defined(point.plotMACD)
                });
            }
        }
        // Modify options and generate smoothing line:
        ['macd', 'signal'].forEach((lineName, i) => {
            indicator.points = otherSignals[i];
            indicator.options = MACDIndicator_merge(mainLineOptions[`${lineName}Line`]?.styles || {}, gappedExtend);
            indicator.graph = indicator[`graph${lineName}`];
            // Zones extension:
            indicator.zones = (indicator[`${lineName}Zones`].zones || []).slice(indicator[`${lineName}Zones`].startIndex || 0);
            external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.drawGraph.call(indicator);
            indicator[`graph${lineName}`] = indicator.graph;
        });
        // Restore options:
        indicator.points = mainLinePoints;
        indicator.options = mainLineOptions;
        indicator.zones = histogramZones;
    }
    applyZones() {
        // Histogram zones are handled by drawPoints method
        // Here we need to apply zones for all lines
        const histogramZones = this.zones;
        // `signalZones.zones` contains all zones:
        this.zones = this.signalZones.zones;
        external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.sma.prototype.applyZones.call(this);
        // `applyZones` hides only main series.graph, hide macd line manually
        if (this.graphmacd && this.options.macdLine.zones.length) {
            this.graphmacd.hide();
        }
        this.zones = histogramZones;
    }
    getValues(series, params) {
        const indexToShift = (params.longPeriod - params.shortPeriod), // #14197
        MACD = [], xMACD = [], yMACD = [];
        let shortEMA, longEMA, i, j = 0, signalLine = [];
        if (series.xData.length <
            params.longPeriod + params.signalPeriod) {
            return;
        }
        // Calculating the short and long EMA used when calculating the MACD
        shortEMA = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.ema.prototype.getValues(series, {
            period: params.shortPeriod,
            index: params.index
        });
        longEMA = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.ema.prototype.getValues(series, {
            period: params.longPeriod,
            index: params.index
        });
        shortEMA = shortEMA.values;
        longEMA = longEMA.values;
        // Subtract each Y value from the EMA's and create the new dataset
        // (MACD)
        for (i = 0; i <= shortEMA.length; i++) {
            if (MACDIndicator_defined(longEMA[i]) &&
                MACDIndicator_defined(longEMA[i][1]) &&
                MACDIndicator_defined(shortEMA[i + indexToShift]) &&
                MACDIndicator_defined(shortEMA[i + indexToShift][0])) {
                MACD.push([
                    shortEMA[i + indexToShift][0],
                    0,
                    null,
                    shortEMA[i + indexToShift][1] -
                        longEMA[i][1]
                ]);
            }
        }
        // Set the Y and X data of the MACD. This is used in calculating the
        // signal line.
        for (i = 0; i < MACD.length; i++) {
            xMACD.push(MACD[i][0]);
            yMACD.push([0, null, MACD[i][3]]);
        }
        // Setting the signalline (Signal Line: X-day EMA of MACD line).
        signalLine = external_highcharts_src_js_default_SeriesRegistry_default().seriesTypes.ema.prototype.getValues({
            xData: xMACD,
            yData: yMACD
        }, {
            period: params.signalPeriod,
            index: 2
        });
        signalLine = signalLine.values;
        // Setting the MACD Histogram. In comparison to the loop with pure
        // MACD this loop uses MACD x value not xData.
        for (i = 0; i < MACD.length; i++) {
            // Detect the first point
            if (MACD[i][0] >= signalLine[0][0]) {
                MACD[i][2] = signalLine[j][1];
                yMACD[i] = [0, signalLine[j][1], MACD[i][3]];
                if (MACD[i][3] === null) {
                    MACD[i][1] = 0;
                    yMACD[i][0] = 0;
                }
                else {
                    MACD[i][1] = MACDIndicator_correctFloat(MACD[i][3] -
                        signalLine[j][1]);
                    yMACD[i][0] = MACDIndicator_correctFloat(MACD[i][3] -
                        signalLine[j][1]);
                }
                j++;
            }
        }
        return {
            values: MACD,
            xData: xMACD,
            yData: yMACD
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Moving Average Convergence Divergence (MACD). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample stock/indicators/macd
 *         MACD indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/macd
 * @optionparent plotOptions.macd
 */
MACDIndicator.defaultOptions = MACDIndicator_merge(MACDIndicator_SMAIndicator.defaultOptions, {
    params: {
        /**
         * The short period for indicator calculations.
         */
        shortPeriod: 12,
        /**
         * The long period for indicator calculations.
         */
        longPeriod: 26,
        /**
         * The base period for signal calculations.
         */
        signalPeriod: 9,
        period: 26
    },
    /**
     * The styles for signal line
     */
    signalLine: {
        /**
         * @sample stock/indicators/macd-zones
         *         Zones in MACD
         *
         * @extends plotOptions.macd.zones
         */
        zones: [],
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type  {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * The styles for macd line
     */
    macdLine: {
        /**
         * @sample stock/indicators/macd-zones
         *         Zones in MACD
         *
         * @extends plotOptions.macd.zones
         */
        zones: [],
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type  {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * @type {number|null}
     */
    threshold: 0,
    groupPadding: 0.1,
    pointPadding: 0.1,
    crisp: false,
    states: {
        hover: {
            halo: {
                size: 0
            }
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
            'Value: {point.MACD}<br/>' +
            'Signal: {point.signal}<br/>' +
            'Histogram: {point.y}<br/>'
    },
    dataGrouping: {
        approximation: 'averages'
    },
    minPointLength: 0
});
MACDIndicator_extend(MACDIndicator.prototype, {
    nameComponents: ['longPeriod', 'shortPeriod', 'signalPeriod'],
    // "y" value is treated as Histogram data
    pointArrayMap: ['y', 'signal', 'MACD'],
    parallelArrays: ['x', 'y', 'signal', 'MACD'],
    pointValKey: 'y',
    // Columns support:
    markerAttribs: MACDIndicator_noop,
    getColumnMetrics: (external_highcharts_src_js_default_default()).seriesTypes.column.prototype.getColumnMetrics,
    crispCol: (external_highcharts_src_js_default_default()).seriesTypes.column.prototype.crispCol,
    drawPoints: (external_highcharts_src_js_default_default()).seriesTypes.column.prototype.drawPoints
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('macd', MACDIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const MACD_MACDIndicator = ((/* unused pure expression or super */ null && (MACDIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `MACD` series. If the [type](#series.macd.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.macd
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/macd
 * @apioption series.macd
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/MFI/MFIIndicator.js
/* *
 *
 *  Money Flow Index indicator for Highcharts Stock
 *
 *  (c) 2010-2025 Grzegorz Blachliński
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: MFIIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: MFIIndicator_extend, merge: MFIIndicator_merge, error: MFIIndicator_error, isArray: MFIIndicator_isArray } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 *
 */
function MFIIndicator_sumArray(array) {
    return array.reduce(function (prev, cur) {
        return prev + cur;
    });
}
/**
 *
 */
function toFixed(a, n) {
    return parseFloat(a.toFixed(n));
}
/**
 *
 */
function calculateTypicalPrice(point) {
    return (point[1] + point[2] + point[3]) / 3;
}
/**
 *
 */
function calculateRawMoneyFlow(typicalPrice, volume) {
    return typicalPrice * volume;
}
/* *
 *
 *  Class
 *
 * */
/**
 * The MFI series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.mfi
 *
 * @augments Highcharts.Series
 */
class MFIIndicator extends MFIIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, decimals = params.decimals, volumeSeries = series.chart.get(params.volumeSeriesID), yValVolume = volumeSeries?.getColumn('y') || [], MFI = [], xData = [], yData = [], positiveMoneyFlow = [], negativeMoneyFlow = [];
        let newTypicalPrice, oldTypicalPrice, rawMoneyFlow, negativeMoneyFlowSum, positiveMoneyFlowSum, moneyFlowRatio, MFIPoint, i, isUp = false, 
        // MFI starts calculations from the second point
        // Cause we need to calculate change between two points
        range = 1;
        if (!volumeSeries) {
            MFIIndicator_error('Series ' +
                params.volumeSeriesID +
                ' not found! Check `volumeSeriesID`.', true, series.chart);
            return;
        }
        // MFI requires high low and close values
        if ((xVal.length <= period) || !MFIIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4 ||
            !yValVolume) {
            return;
        }
        // Calculate first typical price
        newTypicalPrice = calculateTypicalPrice(yVal[range]);
        // Accumulate first N-points
        while (range < period + 1) {
            // Calculate if up or down
            oldTypicalPrice = newTypicalPrice;
            newTypicalPrice = calculateTypicalPrice(yVal[range]);
            isUp = newTypicalPrice >= oldTypicalPrice;
            // Calculate raw money flow
            rawMoneyFlow = calculateRawMoneyFlow(newTypicalPrice, yValVolume[range]);
            // Add to array
            positiveMoneyFlow.push(isUp ? rawMoneyFlow : 0);
            negativeMoneyFlow.push(isUp ? 0 : rawMoneyFlow);
            range++;
        }
        for (i = range - 1; i < yValLen; i++) {
            if (i > range - 1) {
                // Remove first point from array
                positiveMoneyFlow.shift();
                negativeMoneyFlow.shift();
                // Calculate if up or down
                oldTypicalPrice = newTypicalPrice;
                newTypicalPrice = calculateTypicalPrice(yVal[i]);
                isUp = newTypicalPrice > oldTypicalPrice;
                // Calculate raw money flow
                rawMoneyFlow = calculateRawMoneyFlow(newTypicalPrice, yValVolume[i]);
                // Add to array
                positiveMoneyFlow.push(isUp ? rawMoneyFlow : 0);
                negativeMoneyFlow.push(isUp ? 0 : rawMoneyFlow);
            }
            // Calculate sum of negative and positive money flow:
            negativeMoneyFlowSum = MFIIndicator_sumArray(negativeMoneyFlow);
            positiveMoneyFlowSum = MFIIndicator_sumArray(positiveMoneyFlow);
            moneyFlowRatio = positiveMoneyFlowSum / negativeMoneyFlowSum;
            MFIPoint = toFixed(100 - (100 / (1 + moneyFlowRatio)), decimals);
            MFI.push([xVal[i], MFIPoint]);
            xData.push(xVal[i]);
            yData.push(MFIPoint);
        }
        return {
            values: MFI,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Money Flow Index. This series requires `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/mfi
 *         Money Flow Index Indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/mfi
 * @optionparent plotOptions.mfi
 */
MFIIndicator.defaultOptions = MFIIndicator_merge(MFIIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        /**
         * The id of volume series which is mandatory.
         * For example using OHLC data, volumeSeriesID='volume' means
         * the indicator will be calculated using OHLC and volume values.
         */
        volumeSeriesID: 'volume',
        /**
         * Number of maximum decimals that are used in MFI calculations.
         */
        decimals: 4
    }
});
MFIIndicator_extend(MFIIndicator.prototype, {
    nameBase: 'Money Flow Index'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('mfi', MFIIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const MFI_MFIIndicator = ((/* unused pure expression or super */ null && (MFIIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `MFI` series. If the [type](#series.mfi.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.mfi
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/mfi
 * @apioption series.mfi
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/Momentum/MomentumIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: MomentumIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: MomentumIndicator_extend, isArray: MomentumIndicator_isArray, merge: MomentumIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function MomentumIndicator_populateAverage(xVal, yVal, i, period, index) {
    const mmY = yVal[i - 1][index] - yVal[i - period - 1][index], mmX = xVal[i - 1];
    return [mmX, mmY];
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Momentum series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.momentum
 *
 * @augments Highcharts.Series
 */
class MomentumIndicator extends MomentumIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, index = params.index, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, MM = [], xData = [], yData = [];
        let i, MMPoint;
        if (xVal.length <= period) {
            return;
        }
        // Switch index for OHLC / Candlestick / Arearange
        if (!MomentumIndicator_isArray(yVal[0])) {
            return;
        }
        // Calculate value one-by-one for each period in visible data
        for (i = (period + 1); i < yValLen; i++) {
            MMPoint = MomentumIndicator_populateAverage(xVal, yVal, i, period, index);
            MM.push(MMPoint);
            xData.push(MMPoint[0]);
            yData.push(MMPoint[1]);
        }
        MMPoint = MomentumIndicator_populateAverage(xVal, yVal, i, period, index);
        MM.push(MMPoint);
        xData.push(MMPoint[0]);
        yData.push(MMPoint[1]);
        return {
            values: MM,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Momentum. This series requires `linkedTo` option to be set.
 *
 * @sample stock/indicators/momentum
 *         Momentum indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/momentum
 * @optionparent plotOptions.momentum
 */
MomentumIndicator.defaultOptions = MomentumIndicator_merge(MomentumIndicator_SMAIndicator.defaultOptions, {
    params: {
        index: 3
    }
});
MomentumIndicator_extend(MomentumIndicator.prototype, {
    nameBase: 'Momentum'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('momentum', MomentumIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Momentum_MomentumIndicator = ((/* unused pure expression or super */ null && (MomentumIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Momentum` series. If the [type](#series.momentum.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.momentum
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/momentum
 * @apioption series.momentum
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/NATR/NATRIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { atr: NATRIndicator_ATRIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { merge: NATRIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The NATR series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.natr
 *
 * @augments Highcharts.Series
 */
class NATRIndicator extends NATRIndicator_ATRIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const atrData = (super.getValues.apply(this, arguments)), atrLength = atrData.values.length, yVal = series.yData;
        let i = 0, period = params.period - 1;
        if (!atrData) {
            return;
        }
        for (; i < atrLength; i++) {
            atrData.yData[i] = (atrData.values[i][1] / yVal[period][3] * 100);
            atrData.values[i][1] = atrData.yData[i];
            period++;
        }
        return atrData;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Normalized average true range indicator (NATR). This series requires
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` and `stock/indicators/atr.js`.
 *
 * @sample {highstock} stock/indicators/natr
 *         NATR indicator
 *
 * @extends      plotOptions.atr
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/natr
 * @optionparent plotOptions.natr
 */
NATRIndicator.defaultOptions = NATRIndicator_merge(NATRIndicator_ATRIndicator.defaultOptions, {
    tooltip: {
        valueSuffix: '%'
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('natr', NATRIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const NATR_NATRIndicator = ((/* unused pure expression or super */ null && (NATRIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `NATR` series. If the [type](#series.natr.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.natr
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/atr
 * @requires  stock/indicators/natr
 * @apioption series.natr
 */
''; // To include the above in the js output'

;// ./code/es-modules/Stock/Indicators/OBV/OBVIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: OBVIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isNumber: OBVIndicator_isNumber, error: OBVIndicator_error, extend: OBVIndicator_extend, merge: OBVIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The OBV series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.obv
 *
 * @augments Highcharts.Series
 */
class OBVIndicator extends OBVIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const volumeSeries = series.chart.get(params.volumeSeriesID), xVal = series.xData, yVal = series.yData, OBV = [], xData = [], yData = [], hasOHLC = !OBVIndicator_isNumber(yVal[0]);
        let OBVPoint = [], i = 1, previousOBV = 0, curentOBV = 0, previousClose = 0, curentClose = 0, volume;
        // Checks if volume series exists.
        if (volumeSeries) {
            volume = volumeSeries.getColumn('y');
            // Add first point and get close value.
            OBVPoint = [xVal[0], previousOBV];
            previousClose = hasOHLC ?
                yVal[0][3] : yVal[0];
            OBV.push(OBVPoint);
            xData.push(xVal[0]);
            yData.push(OBVPoint[1]);
            for (i; i < yVal.length; i++) {
                curentClose = hasOHLC ?
                    yVal[i][3] : yVal[i];
                if (curentClose > previousClose) { // Up
                    curentOBV = previousOBV + volume[i];
                }
                else if (curentClose === previousClose) { // Constant
                    curentOBV = previousOBV;
                }
                else { // Down
                    curentOBV = previousOBV - volume[i];
                }
                // Add point.
                OBVPoint = [xVal[i], curentOBV];
                // Assign current as previous for next iteration.
                previousOBV = curentOBV;
                previousClose = curentClose;
                OBV.push(OBVPoint);
                xData.push(xVal[i]);
                yData.push(OBVPoint[1]);
            }
        }
        else {
            OBVIndicator_error('Series ' +
                params.volumeSeriesID +
                ' not found! Check `volumeSeriesID`.', true, series.chart);
            return;
        }
        return {
            values: OBV,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * On-Balance Volume (OBV) technical indicator. This series
 * requires the `linkedTo` option to be set and should be loaded after
 * the `stock/indicators/indicators.js` file. Through the `volumeSeriesID`
 * there also should be linked the volume series.
 *
 * @sample stock/indicators/obv
 *         OBV indicator
 *
 * @extends      plotOptions.sma
 * @since 9.1.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/obv
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @optionparent plotOptions.obv
 */
OBVIndicator.defaultOptions = OBVIndicator_merge(OBVIndicator_SMAIndicator.defaultOptions, {
    marker: {
        enabled: false
    },
    /**
     * @excluding index, period
     */
    params: {
        // Index and period are unchangeable, do not inherit (#15362)
        index: void 0,
        period: void 0,
        /**
         * The id of another series to use its data as volume data for the
         * indicator calculation.
         */
        volumeSeriesID: 'volume'
    },
    tooltip: {
        valueDecimals: 0
    }
});
OBVIndicator_extend(OBVIndicator.prototype, {
    nameComponents: void 0
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('obv', OBVIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OBV_OBVIndicator = ((/* unused pure expression or super */ null && (OBVIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `OBV` series. If the [type](#series.obv.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.obv
 * @since 9.1.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/obv
 * @apioption series.obv
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/PivotPoints/PivotPointsPoint.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const SMAPoint = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.sma.prototype.pointClass;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function destroyExtraLabels(point, functionName) {
    const props = point.series.pointArrayMap;
    let prop, i = props.length;
    (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes.sma.prototype.pointClass.prototype[functionName].call(point);
    while (i--) {
        prop = 'dataLabel' + props[i];
        // S4 dataLabel could be removed by parent method:
        if (point[prop] && point[prop].element) {
            point[prop].destroy();
        }
        point[prop] = null;
    }
}
/* *
 *
 *  Class
 *
 * */
class PivotPointsPoint extends SMAPoint {
    /* *
     *
     *  Functions
     *
     * */
    destroyElements() {
        destroyExtraLabels(this, 'destroyElements');
    }
    // This method is called when removing points, e.g. series.update()
    destroy() {
        destroyExtraLabels(this, 'destroyElements');
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PivotPoints_PivotPointsPoint = (PivotPointsPoint);

;// ./code/es-modules/Stock/Indicators/PivotPoints/PivotPointsIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: PivotPointsIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { merge: PivotPointsIndicator_merge, extend: PivotPointsIndicator_extend, defined: PivotPointsIndicator_defined, isArray: PivotPointsIndicator_isArray } = (external_highcharts_src_js_default_default());
/**
 *
 *  Class
 *
 **/
/**
 * The Pivot Points series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pivotpoints
 *
 * @augments Highcharts.Series
 */
class PivotPointsIndicator extends PivotPointsIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    toYData(point) {
        return [point.P]; // The rest should not affect extremes
    }
    translate() {
        const indicator = this;
        super.translate.apply(indicator);
        indicator.points.forEach(function (point) {
            indicator.pointArrayMap.forEach(function (value) {
                if (PivotPointsIndicator_defined(point[value])) {
                    point['plot' + value] = (indicator.yAxis.toPixels(point[value], true));
                }
            });
        });
        // Pivot points are rendered as horizontal lines
        // And last point start not from the next one (as it's the last one)
        // But from the approximated last position in a given range
        indicator.plotEndPoint = indicator.xAxis.toPixels(indicator.endPoint, true);
    }
    getGraphPath(points) {
        const indicator = this, allPivotPoints = ([[], [], [], [], [], [], [], [], []]), pointArrayMapLength = indicator.pointArrayMap.length;
        let endPoint = indicator.plotEndPoint, path = [], position, point, pointsLength = points.length, i;
        while (pointsLength--) {
            point = points[pointsLength];
            for (i = 0; i < pointArrayMapLength; i++) {
                position = indicator.pointArrayMap[i];
                if (PivotPointsIndicator_defined(point[position])) {
                    allPivotPoints[i].push({
                        // Start left:
                        plotX: point.plotX,
                        plotY: point['plot' + position],
                        isNull: false
                    }, {
                        // Go to right:
                        plotX: endPoint,
                        plotY: point['plot' + position],
                        isNull: false
                    }, {
                        // And add null points in path to generate breaks:
                        plotX: endPoint,
                        plotY: null,
                        isNull: true
                    });
                }
            }
            endPoint = point.plotX;
        }
        allPivotPoints.forEach((pivotPoints) => {
            path = path.concat(super.getGraphPath.call(indicator, pivotPoints));
        });
        return path;
    }
    // TODO: Rewrite this logic to use multiple datalabels
    drawDataLabels() {
        const indicator = this, pointMapping = indicator.pointArrayMap;
        let currentLabel, pointsLength, point, i;
        if (indicator.options.dataLabels.enabled) {
            pointsLength = indicator.points.length;
            // For every Resistance/Support group we need to render labels.
            // Add one more item, which will just store dataLabels from
            // previous iteration
            pointMapping.concat([false]).forEach((position, k) => {
                i = pointsLength;
                while (i--) {
                    point = indicator.points[i];
                    if (!position) {
                        // Store S4 dataLabel too:
                        point['dataLabel' + pointMapping[k - 1]] =
                            point.dataLabel;
                    }
                    else {
                        point.y = point[position];
                        point.pivotLine = position;
                        point.plotY = point['plot' + position];
                        currentLabel = point['dataLabel' + position];
                        // Store previous label
                        if (k) {
                            point['dataLabel' + pointMapping[k - 1]] = point.dataLabel;
                        }
                        if (!point.dataLabels) {
                            point.dataLabels = [];
                        }
                        point.dataLabels[0] = point.dataLabel =
                            currentLabel =
                                currentLabel && currentLabel.element ?
                                    currentLabel :
                                    null;
                    }
                }
                super.drawDataLabels
                    .call(indicator);
            });
        }
    }
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, placement = this[params.algorithm + 'Placement'], 
        // 0- from, 1- to, 2- R1, 3- R2, 4- pivot, 5- S1 etc.
        PP = [], xData = [], yData = [];
        let endTimestamp, slicedXLen, slicedX, slicedY, lastPP, pivot, avg, i;
        // Pivot Points requires high, low and close values
        if (xVal.length < period ||
            !PivotPointsIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        for (i = period + 1; i <= yValLen + period; i += period) {
            slicedX = xVal.slice(i - period - 1, i);
            slicedY = yVal.slice(i - period - 1, i);
            slicedXLen = slicedX.length;
            endTimestamp = slicedX[slicedXLen - 1];
            pivot = this.getPivotAndHLC(slicedY);
            avg = placement(pivot);
            lastPP = PP.push([endTimestamp]
                .concat(avg));
            xData.push(endTimestamp);
            yData.push(PP[lastPP - 1].slice(1));
        }
        // We don't know exact position in ordinal axis
        // So we use simple logic:
        // Get first point in last range, calculate visible average range
        // and multiply by period
        this.endPoint = slicedX[0] + ((endTimestamp - slicedX[0]) /
            slicedXLen) * period;
        return {
            values: PP,
            xData: xData,
            yData: yData
        };
    }
    getPivotAndHLC(values) {
        const close = values[values.length - 1][3];
        let high = -Infinity, low = Infinity;
        values.forEach(function (p) {
            high = Math.max(high, p[1]);
            low = Math.min(low, p[2]);
        });
        const pivot = (high + low + close) / 3;
        return [pivot, high, low, close];
    }
    standardPlacement(values) {
        const diff = values[1] - values[2], avg = [
            null,
            null,
            values[0] + diff,
            values[0] * 2 - values[2],
            values[0],
            values[0] * 2 - values[1],
            values[0] - diff,
            null,
            null
        ];
        return avg;
    }
    camarillaPlacement(values) {
        const diff = values[1] - values[2], avg = [
            values[3] + diff * 1.5,
            values[3] + diff * 1.25,
            values[3] + diff * 1.1666,
            values[3] + diff * 1.0833,
            values[0],
            values[3] - diff * 1.0833,
            values[3] - diff * 1.1666,
            values[3] - diff * 1.25,
            values[3] - diff * 1.5
        ];
        return avg;
    }
    fibonacciPlacement(values) {
        const diff = values[1] - values[2], avg = [
            null,
            values[0] + diff,
            values[0] + diff * 0.618,
            values[0] + diff * 0.382,
            values[0],
            values[0] - diff * 0.382,
            values[0] - diff * 0.618,
            values[0] - diff,
            null
        ];
        return avg;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Pivot points indicator. This series requires the `linkedTo` option to be
 * set and should be loaded after `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/pivot-points
 *         Pivot points
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/pivot-points
 * @optionparent plotOptions.pivotpoints
 */
PivotPointsIndicator.defaultOptions = PivotPointsIndicator_merge(PivotPointsIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        period: 28,
        /**
         * Algorithm used to calculate resistance and support lines based
         * on pivot points. Implemented algorithms: `'standard'`,
         * `'fibonacci'` and `'camarilla'`
         */
        algorithm: 'standard'
    },
    marker: {
        enabled: false
    },
    enableMouseTracking: false,
    dataLabels: {
        enabled: true,
        format: '{point.pivotLine}'
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
PivotPointsIndicator_extend(PivotPointsIndicator.prototype, {
    nameBase: 'Pivot Points',
    pointArrayMap: ['R4', 'R3', 'R2', 'R1', 'P', 'S1', 'S2', 'S3', 'S4'],
    pointValKey: 'P',
    pointClass: PivotPoints_PivotPointsPoint
});
/* *
 *
 *  Registry
 *
 * */
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('pivotpoints', PivotPointsIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PivotPoints_PivotPointsIndicator = ((/* unused pure expression or super */ null && (PivotPointsIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A pivot points indicator. If the [type](#series.pivotpoints.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.pivotpoints
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/pivot-points
 * @apioption series.pivotpoints
 */
''; // To include the above in the js output'

;// ./code/es-modules/Stock/Indicators/PPO/PPOIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { ema: PPOIndicator_EMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: PPOIndicator_correctFloat, extend: PPOIndicator_extend, merge: PPOIndicator_merge, error: PPOIndicator_error } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The PPO series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ppo
 *
 * @augments Highcharts.Series
 */
class PPOIndicator extends PPOIndicator_EMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const periods = params.periods, index = params.index, 
        // 0- date, 1- Percentage Price Oscillator
        PPO = [], xData = [], yData = [];
        let oscillator, i;
        // Check if periods are correct
        if (periods.length !== 2 || periods[1] <= periods[0]) {
            PPOIndicator_error('Error: "PPO requires two periods. Notice, first period ' +
                'should be lower than the second one."');
            return;
        }
        // Shorter Period EMA
        const SPE = super.getValues.call(this, series, {
            index: index,
            period: periods[0]
        });
        // Longer Period EMA
        const LPE = super.getValues.call(this, series, {
            index: index,
            period: periods[1]
        });
        // Check if ema is calculated properly, if not skip
        if (!SPE || !LPE) {
            return;
        }
        const periodsOffset = periods[1] - periods[0];
        for (i = 0; i < LPE.yData.length; i++) {
            oscillator = PPOIndicator_correctFloat((SPE.yData[i + periodsOffset] -
                LPE.yData[i]) /
                LPE.yData[i] *
                100);
            PPO.push([LPE.xData[i], oscillator]);
            xData.push(LPE.xData[i]);
            yData.push(oscillator);
        }
        return {
            values: PPO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Percentage Price Oscillator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/ppo
 *         Percentage Price Oscillator
 *
 * @extends      plotOptions.ema
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/ppo
 * @optionparent plotOptions.ppo
 */
PPOIndicator.defaultOptions = PPOIndicator_merge(PPOIndicator_EMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Percentage Price Oscillator series
     * points.
     *
     * @excluding period
     */
    params: {
        period: void 0, // Unchangeable period, do not inherit (#15362)
        /**
         * Periods for Percentage Price Oscillator calculations.
         *
         * @type    {Array<number>}
         * @default [12, 26]
         */
        periods: [12, 26]
    }
});
PPOIndicator_extend(PPOIndicator.prototype, {
    nameBase: 'PPO',
    nameComponents: ['periods']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ppo', PPOIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PPO_PPOIndicator = ((/* unused pure expression or super */ null && (PPOIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Percentage Price Oscillator` series. If the [type](#series.ppo.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ppo
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/ppo
 * @apioption series.ppo
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/ArrayUtilities.js
/**
 *
 *  (c) 2010-2025 Pawel Fus & Daniel Studencki
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Functions
 *
 * */
/**
 * Get extremes of array filled by OHLC data.
 *
 * @private
 *
 * @param {Array<Array<number>>} arr
 * Array of OHLC points (arrays).
 *
 * @param {number} minIndex
 * Index of "low" value in point array.
 *
 * @param {number} maxIndex
 * Index of "high" value in point array.
 *
 * @return {Array<number,number>}
 * Returns array with min and max value.
 */
function getArrayExtremes(arr, minIndex, maxIndex) {
    return arr.reduce((prev, target) => [
        Math.min(prev[0], target[minIndex]),
        Math.max(prev[1], target[maxIndex])
    ], [Number.MAX_VALUE, -Number.MAX_VALUE]);
}
/* *
 *
 *  Default Export
 *
 * */
const ArrayUtilities = {
    getArrayExtremes
};
/* harmony default export */ const Indicators_ArrayUtilities = (ArrayUtilities);

;// ./code/es-modules/Core/Color/Palettes.js
/**
 * Series palettes for Highcharts. Series colors are defined in highcharts.css.
 * **Do not edit this file!** This file is generated using the 'gulp palette' task.
 * @private
 */
const SeriesPalettes = {
    /**
     * Colors for data series and points
     */
    colors: [
        '#2caffe',
        '#544fc5',
        '#00e272',
        '#fe6a35',
        '#6b8abc',
        '#d568fb',
        '#2ee0ca',
        '#fa4b42',
        '#feb56a',
        '#91e8e1'
    ],
};
/* harmony default export */ const Palettes = (SeriesPalettes);

;// ./code/es-modules/Stock/Indicators/PC/PCIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { sma: PCIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { merge: PCIndicator_merge, extend: PCIndicator_extend } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Price Channel series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pc
 *
 * @augments Highcharts.Series
 */
class PCIndicator extends PCIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // 0- date, 1-top line, 2-middle line, 3-bottom line
        PC = [], 
        // Middle line, top line and bottom line
        low = 2, high = 1, xData = [], yData = [];
        let ML, TL, BL, date, slicedY, extremes, i;
        if (yValLen < period) {
            return;
        }
        for (i = period; i <= yValLen; i++) {
            date = xVal[i - 1];
            slicedY = yVal.slice(i - period, i);
            extremes = Indicators_ArrayUtilities.getArrayExtremes(slicedY, low, high);
            TL = extremes[1];
            BL = extremes[0];
            ML = (TL + BL) / 2;
            PC.push([date, TL, ML, BL]);
            xData.push(date);
            yData.push([TL, ML, BL]);
        }
        return {
            values: PC,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Price channel (PC). This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/price-channel
 *         Price Channel
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/price-channel
 * @optionparent plotOptions.pc
 */
PCIndicator.defaultOptions = PCIndicator_merge(PCIndicator_SMAIndicator.defaultOptions, {
    /**
     * Option for fill color between lines in Price channel Indicator.
     *
     * @sample {highstock} stock/indicators/indicator-area-fill
     *      background fill between lines
     *
     * @type {Highcharts.Color}
     * @apioption plotOptions.pc.fillColor
     *
     */
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        period: 20
    },
    lineWidth: 1,
    topLine: {
        styles: {
            /**
             * Color of the top line. If not set, it's inherited from
             * [plotOptions.pc.color](#plotOptions.pc.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: Palettes.colors[2],
            /**
             * Pixel width of the line.
             */
            lineWidth: 1
        }
    },
    bottomLine: {
        styles: {
            /**
             * Color of the bottom line. If not set, it's inherited from
             * [plotOptions.pc.color](#plotOptions.pc.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: Palettes.colors[8],
            /**
             * Pixel width of the line.
             */
            lineWidth: 1
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
PCIndicator_extend(PCIndicator.prototype, {
    areaLinesNames: ['top', 'bottom'],
    nameBase: 'Price Channel',
    nameComponents: ['period'],
    linesApiNames: ['topLine', 'bottomLine'],
    pointArrayMap: ['top', 'middle', 'bottom'],
    pointValKey: 'middle'
});
Indicators_MultipleLinesComposition.compose(PCIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('pc', PCIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PC_PCIndicator = ((/* unused pure expression or super */ null && (PCIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Price channel indicator. If the [type](#series.pc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends      series,plotOptions.pc
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *               joinBy, keys, navigatorOptions, pointInterval,
 *               pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *               showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/price-channel
 * @apioption    series.pc
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: PriceEnvelopesIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: PriceEnvelopesIndicator_extend, isArray: PriceEnvelopesIndicator_isArray, merge: PriceEnvelopesIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Price Envelopes series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.priceenvelopes
 *
 * @augments Highcharts.Series
 */
class PriceEnvelopesIndicator extends PriceEnvelopesIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        super.init.apply(this, arguments);
        // Set default color for lines:
        this.options = PriceEnvelopesIndicator_merge({
            topLine: {
                styles: {
                    lineColor: this.color
                }
            },
            bottomLine: {
                styles: {
                    lineColor: this.color
                }
            }
        }, this.options);
    }
    getValues(series, params) {
        const period = params.period, topPercent = params.topBand, botPercent = params.bottomBand, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // 0- date, 1-top line, 2-middle line, 3-bottom line
        PE = [], 
        // Middle line, top line and bottom line
        xData = [], yData = [];
        let ML, TL, BL, date, slicedX, slicedY, point, i;
        // Price envelopes requires close value
        if (xVal.length < period ||
            !PriceEnvelopesIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        for (i = period; i <= yValLen; i++) {
            slicedX = xVal.slice(i - period, i);
            slicedY = yVal.slice(i - period, i);
            point = super.getValues({
                xData: slicedX,
                yData: slicedY
            }, params);
            date = point.xData[0];
            ML = point.yData[0];
            TL = ML * (1 + topPercent);
            BL = ML * (1 - botPercent);
            PE.push([date, TL, ML, BL]);
            xData.push(date);
            yData.push([TL, ML, BL]);
        }
        return {
            values: PE,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Price envelopes indicator based on [SMA](#plotOptions.sma) calculations.
 * This series requires the `linkedTo` option to be set and should be loaded
 * after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/price-envelopes
 *         Price envelopes
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/price-envelopes
 * @optionparent plotOptions.priceenvelopes
 */
PriceEnvelopesIndicator.defaultOptions = PriceEnvelopesIndicator_merge(PriceEnvelopesIndicator_SMAIndicator.defaultOptions, {
    marker: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'
    },
    params: {
        period: 20,
        /**
         * Percentage above the moving average that should be displayed.
         * 0.1 means 110%. Relative to the calculated value.
         */
        topBand: 0.1,
        /**
         * Percentage below the moving average that should be displayed.
         * 0.1 means 90%. Relative to the calculated value.
         */
        bottomBand: 0.1
    },
    /**
     * Bottom line options.
     */
    bottomLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.priceenvelopes.color](
             * #plotOptions.priceenvelopes.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    /**
     * Top line options.
     *
     * @extends plotOptions.priceenvelopes.bottomLine
     */
    topLine: {
        styles: {
            lineWidth: 1
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
    /**
     * Option for fill color between lines in Price Envelopes Indicator.
     *
     * @sample {highstock} stock/indicators/indicator-area-fill
     *      Background fill between lines.
     *
     * @type      {Highcharts.Color}
     * @since 11.0.0
     * @apioption plotOptions.priceenvelopes.fillColor
     *
     */
});
PriceEnvelopesIndicator_extend(PriceEnvelopesIndicator.prototype, {
    areaLinesNames: ['top', 'bottom'],
    linesApiNames: ['topLine', 'bottomLine'],
    nameComponents: ['period', 'topBand', 'bottomBand'],
    nameBase: 'Price envelopes',
    pointArrayMap: ['top', 'middle', 'bottom'],
    parallelArrays: ['x', 'y', 'top', 'bottom'],
    pointValKey: 'middle'
});
Indicators_MultipleLinesComposition.compose(PriceEnvelopesIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('priceenvelopes', PriceEnvelopesIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PriceEnvelopes_PriceEnvelopesIndicator = ((/* unused pure expression or super */ null && (PriceEnvelopesIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A price envelopes indicator. If the [type](#series.priceenvelopes.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.priceenvelopes
 * @since     6.0.0
 * @excluding dataParser, dataURL
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/price-envelopes
 * @apioption series.priceenvelopes
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/PSAR/PSARIndicator.js
/* *
 *
 *  Parabolic SAR indicator for Highcharts Stock
 *
 *  (c) 2010-2025 Grzegorz Blachliński
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: PSARIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { merge: PSARIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 *
 */
function PSARIndicator_toFixed(a, n) {
    return parseFloat(a.toFixed(n));
}
/**
 *
 */
function calculateDirection(previousDirection, low, high, PSAR) {
    if ((previousDirection === 1 && low > PSAR) ||
        (previousDirection === -1 && high > PSAR)) {
        return 1;
    }
    return -1;
}
/* *
 * Method for calculating acceleration factor
 * dir - direction
 * pDir - previous Direction
 * eP - extreme point
 * pEP - previous extreme point
 * inc - increment for acceleration factor
 * maxAcc - maximum acceleration factor
 * initAcc - initial acceleration factor
 */
/**
 *
 */
function getAccelerationFactor(dir, pDir, eP, pEP, pAcc, inc, maxAcc, initAcc) {
    if (dir === pDir) {
        if (dir === 1 && (eP > pEP)) {
            return (pAcc === maxAcc) ? maxAcc : PSARIndicator_toFixed(pAcc + inc, 2);
        }
        if (dir === -1 && (eP < pEP)) {
            return (pAcc === maxAcc) ? maxAcc : PSARIndicator_toFixed(pAcc + inc, 2);
        }
        return pAcc;
    }
    return initAcc;
}
/**
 *
 */
function getExtremePoint(high, low, previousDirection, previousExtremePoint) {
    if (previousDirection === 1) {
        return (high > previousExtremePoint) ? high : previousExtremePoint;
    }
    return (low < previousExtremePoint) ? low : previousExtremePoint;
}
/**
 *
 */
function getEPMinusPSAR(EP, PSAR) {
    return EP - PSAR;
}
/**
 *
 */
function getAccelerationFactorMultiply(accelerationFactor, EPMinusSAR) {
    return accelerationFactor * EPMinusSAR;
}
/* *
 * Method for calculating PSAR
 * pdir - previous direction
 * sDir - second previous Direction
 * PSAR - previous PSAR
 * pACCMultiply - previous acceleration factor multiply
 * sLow - second previous low
 * pLow - previous low
 * sHigh - second previous high
 * pHigh - previous high
 * pEP - previous extreme point
 */
/**
 *
 */
function getPSAR(pdir, sDir, PSAR, pACCMulti, sLow, pLow, pHigh, sHigh, pEP) {
    if (pdir === sDir) {
        if (pdir === 1) {
            return (PSAR + pACCMulti < Math.min(sLow, pLow)) ?
                PSAR + pACCMulti :
                Math.min(sLow, pLow);
        }
        return (PSAR + pACCMulti > Math.max(sHigh, pHigh)) ?
            PSAR + pACCMulti :
            Math.max(sHigh, pHigh);
    }
    return pEP;
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Parabolic SAR series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.psar
 *
 * @augments Highcharts.Series
 */
class PSARIndicator extends PSARIndicator_SMAIndicator {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.nameComponents = void 0;
    }
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const xVal = series.xData, yVal = series.yData, maxAccelerationFactor = params.maxAccelerationFactor, increment = params.increment, 
        // Set initial acc factor (for every new trend!)
        initialAccelerationFactor = params.initialAccelerationFactor, decimals = params.decimals, index = params.index, PSARArr = [], xData = [], yData = [];
        let accelerationFactor = params.initialAccelerationFactor, direction, 
        // Extreme point is the lowest low for falling and highest high
        // for rising psar - and we are starting with falling
        extremePoint = yVal[0][1], EPMinusPSAR, accelerationFactorMultiply, newDirection, previousDirection = 1, prevLow, prevPrevLow, prevHigh, prevPrevHigh, PSAR = yVal[0][2], newExtremePoint, high, low, ind;
        if (index >= yVal.length) {
            return;
        }
        for (ind = 0; ind < index; ind++) {
            extremePoint = Math.max(yVal[ind][1], extremePoint);
            PSAR = Math.min(yVal[ind][2], PSARIndicator_toFixed(PSAR, decimals));
        }
        direction = (yVal[ind][1] > PSAR) ? 1 : -1;
        EPMinusPSAR = getEPMinusPSAR(extremePoint, PSAR);
        accelerationFactor = params.initialAccelerationFactor;
        accelerationFactorMultiply = getAccelerationFactorMultiply(accelerationFactor, EPMinusPSAR);
        PSARArr.push([xVal[index], PSAR]);
        xData.push(xVal[index]);
        yData.push(PSARIndicator_toFixed(PSAR, decimals));
        for (ind = index + 1; ind < yVal.length; ind++) {
            prevLow = yVal[ind - 1][2];
            prevPrevLow = yVal[ind - 2][2];
            prevHigh = yVal[ind - 1][1];
            prevPrevHigh = yVal[ind - 2][1];
            high = yVal[ind][1];
            low = yVal[ind][2];
            // Null points break PSAR
            if (prevPrevLow !== null &&
                prevPrevHigh !== null &&
                prevLow !== null &&
                prevHigh !== null &&
                high !== null &&
                low !== null) {
                PSAR = getPSAR(direction, previousDirection, PSAR, accelerationFactorMultiply, prevPrevLow, prevLow, prevHigh, prevPrevHigh, extremePoint);
                newExtremePoint = getExtremePoint(high, low, direction, extremePoint);
                newDirection = calculateDirection(previousDirection, low, high, PSAR);
                accelerationFactor = getAccelerationFactor(newDirection, direction, newExtremePoint, extremePoint, accelerationFactor, increment, maxAccelerationFactor, initialAccelerationFactor);
                EPMinusPSAR = getEPMinusPSAR(newExtremePoint, PSAR);
                accelerationFactorMultiply = getAccelerationFactorMultiply(accelerationFactor, EPMinusPSAR);
                PSARArr.push([xVal[ind], PSARIndicator_toFixed(PSAR, decimals)]);
                xData.push(xVal[ind]);
                yData.push(PSARIndicator_toFixed(PSAR, decimals));
                previousDirection = direction;
                direction = newDirection;
                extremePoint = newExtremePoint;
            }
        }
        return {
            values: PSARArr,
            xData: xData,
            yData: yData
        };
    }
}
/**
 * Parabolic SAR. This series requires `linkedTo`
 * option to be set and should be loaded
 * after `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/psar
 *         Parabolic SAR Indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/psar
 * @optionparent plotOptions.psar
 */
PSARIndicator.defaultOptions = PSARIndicator_merge(PSARIndicator_SMAIndicator.defaultOptions, {
    lineWidth: 0,
    marker: {
        enabled: true
    },
    states: {
        hover: {
            lineWidthPlus: 0
        }
    },
    /**
     * @excluding period
     */
    params: {
        period: void 0, // Unchangeable period, do not inherit (#15362)
        /**
         * The initial value for acceleration factor.
         * Acceleration factor is starting with this value
         * and increases by specified increment each time
         * the extreme point makes a new high.
         * AF can reach a maximum of maxAccelerationFactor,
         * no matter how long the uptrend extends.
         */
        initialAccelerationFactor: 0.02,
        /**
         * The Maximum value for acceleration factor.
         * AF can reach a maximum of maxAccelerationFactor,
         * no matter how long the uptrend extends.
         */
        maxAccelerationFactor: 0.2,
        /**
         * Acceleration factor increases by increment each time
         * the extreme point makes a new high.
         *
         * @since 6.0.0
         */
        increment: 0.02,
        /**
         * Index from which PSAR is starting calculation
         *
         * @since 6.0.0
         */
        index: 2,
        /**
         * Number of maximum decimals that are used in PSAR calculations.
         *
         * @since 6.0.0
         */
        decimals: 4
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('psar', PSARIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const PSAR_PSARIndicator = ((/* unused pure expression or super */ null && (PSARIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `PSAR` series. If the [type](#series.psar.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.psar
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/psar
 * @apioption series.psar
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/ROC/ROCIndicator.js
/* *
 *
 *  (c) 2010-2025 Kacper Madej
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: ROCIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isArray: ROCIndicator_isArray, merge: ROCIndicator_merge, extend: ROCIndicator_extend } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 *
 */
function ROCIndicator_populateAverage(xVal, yVal, i, period, index) {
    /* Calculated as:

       (Closing Price [today] - Closing Price [n days ago]) /
        Closing Price [n days ago] * 100

       Return y as null when avoiding division by zero */
    let nDaysAgoY, rocY;
    if (index < 0) {
        // Y data given as an array of values
        nDaysAgoY = yVal[i - period];
        rocY = nDaysAgoY ?
            (yVal[i] - nDaysAgoY) / nDaysAgoY * 100 :
            null;
    }
    else {
        // Y data given as an array of arrays and the index should be used
        nDaysAgoY = yVal[i - period][index];
        rocY = nDaysAgoY ?
            (yVal[i][index] - nDaysAgoY) / nDaysAgoY * 100 :
            null;
    }
    return [xVal[i], rocY];
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ROC series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.roc
 *
 * @augments Highcharts.Series
 */
class ROCIndicator extends ROCIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, ROC = [], xData = [], yData = [];
        let i, index = -1, ROCPoint;
        // Period is used as a number of time periods ago, so we need more
        // (at least 1 more) data than the period value
        if (xVal.length <= period) {
            return;
        }
        // Switch index for OHLC / Candlestick / Arearange
        if (ROCIndicator_isArray(yVal[0])) {
            index = params.index;
        }
        // I = period <-- skip first N-points
        // Calculate value one-by-one for each period in visible data
        for (i = period; i < yValLen; i++) {
            ROCPoint = ROCIndicator_populateAverage(xVal, yVal, i, period, index);
            ROC.push(ROCPoint);
            xData.push(ROCPoint[0]);
            yData.push(ROCPoint[1]);
        }
        return {
            values: ROC,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Rate of change indicator (ROC). The indicator value for each point
 * is defined as:
 *
 * `(C - Cn) / Cn * 100`
 *
 * where: `C` is the close value of the point of the same x in the
 * linked series and `Cn` is the close value of the point `n` periods
 * ago. `n` is set through [period](#plotOptions.roc.params.period).
 *
 * This series requires `linkedTo` option to be set.
 *
 * @sample stock/indicators/roc
 *         Rate of change indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/roc
 * @optionparent plotOptions.roc
 */
ROCIndicator.defaultOptions = ROCIndicator_merge(ROCIndicator_SMAIndicator.defaultOptions, {
    params: {
        index: 3,
        period: 9
    }
});
ROCIndicator_extend(ROCIndicator.prototype, {
    nameBase: 'Rate of Change'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('roc', ROCIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const ROC_ROCIndicator = ((/* unused pure expression or super */ null && (ROCIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `ROC` series. If the [type](#series.wma.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * Rate of change indicator (ROC). The indicator value for each point
 * is defined as:
 *
 * `(C - Cn) / Cn * 100`
 *
 * where: `C` is the close value of the point of the same x in the
 * linked series and `Cn` is the close value of the point `n` periods
 * ago. `n` is set through [period](#series.roc.params.period).
 *
 * This series requires `linkedTo` option to be set.
 *
 * @extends   series,plotOptions.roc
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/roc
 * @apioption series.roc
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/RSI/RSIIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: RSIIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isNumber: RSIIndicator_isNumber, merge: RSIIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 *
 */
function RSIIndicator_toFixed(a, n) {
    return parseFloat(a.toFixed(n));
}
/* *
 *
 *  Class
 *
 * */
/**
 * The RSI series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.rsi
 *
 * @augments Highcharts.Series
 */
class RSIIndicator extends RSIIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, decimals = params.decimals, 
        // RSI starts calculations from the second point
        // Cause we need to calculate change between two points
        RSI = [], xData = [], yData = [];
        let gain = 0, loss = 0, index = params.index, range = 1, RSIPoint, change, avgGain, avgLoss, i, values;
        if ((xVal.length < period)) {
            return;
        }
        if (RSIIndicator_isNumber(yVal[0])) {
            values = yVal;
        }
        else {
            // In case of the situation, where the series type has data length
            // longer then 4 (HLC, range), this ensures that we are not trying
            // to reach the index out of bounds
            index = Math.min(index, yVal[0].length - 1);
            values = yVal
                .map((value) => value[index]);
        }
        // Calculate changes for first N points
        while (range < period) {
            change = RSIIndicator_toFixed(values[range] - values[range - 1], decimals);
            if (change > 0) {
                gain += change;
            }
            else {
                loss += Math.abs(change);
            }
            range++;
        }
        // Average for first n-1 points:
        avgGain = RSIIndicator_toFixed(gain / (period - 1), decimals);
        avgLoss = RSIIndicator_toFixed(loss / (period - 1), decimals);
        for (i = range; i < yValLen; i++) {
            change = RSIIndicator_toFixed(values[i] - values[i - 1], decimals);
            if (change > 0) {
                gain = change;
                loss = 0;
            }
            else {
                gain = 0;
                loss = Math.abs(change);
            }
            // Calculate smoothed averages, RS, RSI values:
            avgGain = RSIIndicator_toFixed((avgGain * (period - 1) + gain) / period, decimals);
            avgLoss = RSIIndicator_toFixed((avgLoss * (period - 1) + loss) / period, decimals);
            // If average-loss is equal zero, then by definition RSI is set
            // to 100:
            if (avgLoss === 0) {
                RSIPoint = 100;
                // If average-gain is equal zero, then by definition RSI is set
                // to 0:
            }
            else if (avgGain === 0) {
                RSIPoint = 0;
            }
            else {
                RSIPoint = RSIIndicator_toFixed(100 - (100 / (1 + (avgGain / avgLoss))), decimals);
            }
            RSI.push([xVal[i], RSIPoint]);
            xData.push(xVal[i]);
            yData.push(RSIPoint);
        }
        return {
            values: RSI,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Relative strength index (RSI) technical indicator. This series
 * requires the `linkedTo` option to be set and should be loaded after
 * the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/rsi
 *         RSI indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/rsi
 * @optionparent plotOptions.rsi
 */
RSIIndicator.defaultOptions = RSIIndicator_merge(RSIIndicator_SMAIndicator.defaultOptions, {
    params: {
        decimals: 4,
        index: 3
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('rsi', RSIIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const RSI_RSIIndicator = ((/* unused pure expression or super */ null && (RSIIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `RSI` series. If the [type](#series.rsi.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.rsi
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/rsi
 * @apioption series.rsi
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/Stochastic/StochasticIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




const { sma: StochasticIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: StochasticIndicator_extend, isArray: StochasticIndicator_isArray, merge: StochasticIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Stochastic series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.stochastic
 *
 * @augments Highcharts.Series
 */
class StochasticIndicator extends StochasticIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        super.init.apply(this, arguments);
        // Set default color for lines:
        this.options = StochasticIndicator_merge({
            smoothedLine: {
                styles: {
                    lineColor: this.color
                }
            }
        }, this.options);
    }
    getValues(series, params) {
        const periodK = params.periods[0], periodD = params.periods[1], xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // 0- date, 1-%K, 2-%D
        SO = [], xData = [], yData = [], close = 3, low = 2, high = 1;
        let slicedY, CL, HL, LL, K, D = null, points, extremes, i;
        // Stochastic requires close value
        if (yValLen < periodK ||
            !StochasticIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        // If the value of initial points is constant, wait until it changes
        // to calculate correct Stochastic values
        let constantValues = true, j = 0;
        // For a N-period, we start from N-1 point, to calculate Nth point
        // That is why we later need to comprehend slice() elements list
        // with (+1)
        for (i = periodK - 1; i < yValLen; i++) {
            slicedY = yVal.slice(i - periodK + 1, i + 1);
            // Calculate %K
            extremes = Indicators_ArrayUtilities.getArrayExtremes(slicedY, low, high);
            LL = extremes[0]; // Lowest low in %K periods
            CL = yVal[i][close] - LL;
            HL = extremes[1] - LL;
            K = CL / HL * 100;
            if (isNaN(K) && constantValues) {
                j++;
                continue;
            }
            else if (constantValues && !isNaN(K)) {
                constantValues = false;
            }
            const length = xData.push(xVal[i]);
            // If N-period previous values are constant which results in NaN %K,
            // we need to use previous %K value if it is a number,
            // otherwise we should use null
            if (isNaN(K)) {
                yData.push([
                    yData[length - 2] &&
                        typeof yData[length - 2][0] === 'number' ?
                        yData[length - 2][0] : null,
                    null
                ]);
            }
            else {
                yData.push([K, null]);
            }
            // Calculate smoothed %D, which is SMA of %K
            if (i >= j + (periodK - 1) + (periodD - 1)) {
                points = super.getValues({
                    xData: xData.slice(-periodD),
                    yData: yData.slice(-periodD)
                }, {
                    period: periodD
                });
                D = points.yData[0];
            }
            SO.push([xVal[i], K, D]);
            yData[length - 1][1] = D;
        }
        return {
            values: SO,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Stochastic oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/stochastic
 *         Stochastic oscillator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/stochastic
 * @optionparent plotOptions.stochastic
 */
StochasticIndicator.defaultOptions = StochasticIndicator_merge(StochasticIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index, period
     */
    params: {
        // Index and period are unchangeable, do not inherit (#15362)
        index: void 0,
        period: void 0,
        /**
         * Periods for Stochastic oscillator: [%K, %D].
         *
         * @type    {Array<number,number>}
         * @default [14, 3]
         */
        periods: [14, 3]
    },
    marker: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b> {series.name}</b><br/>%K: {point.y}<br/>%D: {point.smoothed}<br/>'
    },
    /**
     * Smoothed line options.
     */
    smoothedLine: {
        /**
         * Styles for a smoothed line.
         */
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line. If not set, it's inherited from
             * [plotOptions.stochastic.color
             * ](#plotOptions.stochastic.color).
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: void 0
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
StochasticIndicator_extend(StochasticIndicator.prototype, {
    areaLinesNames: [],
    nameComponents: ['periods'],
    nameBase: 'Stochastic',
    pointArrayMap: ['y', 'smoothed'],
    parallelArrays: ['x', 'y', 'smoothed'],
    pointValKey: 'y',
    linesApiNames: ['smoothedLine']
});
Indicators_MultipleLinesComposition.compose(StochasticIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('stochastic', StochasticIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Stochastic_StochasticIndicator = ((/* unused pure expression or super */ null && (StochasticIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Stochastic indicator. If the [type](#series.stochastic.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.stochastic
 * @since     6.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis,  dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/stochastic
 * @apioption series.stochastic
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: SlowStochasticIndicator_SMAIndicator, stochastic: SlowStochasticIndicator_StochasticIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: SlowStochasticIndicator_extend, merge: SlowStochasticIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Slow Stochastic series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.slowstochastic
 *
 * @augments Highcharts.Series
 */
class SlowStochasticIndicator extends SlowStochasticIndicator_StochasticIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const periods = params.periods, fastValues = super.getValues.call(this, series, params), slowValues = {
            values: [],
            xData: [],
            yData: []
        };
        if (!fastValues) {
            return;
        }
        slowValues.xData = fastValues.xData.slice(periods[1] - 1);
        const fastYData = fastValues.yData.slice(periods[1] - 1);
        // Get SMA(%D)
        const smoothedValues = SlowStochasticIndicator_SMAIndicator.prototype.getValues.call(this, {
            xData: slowValues.xData,
            yData: fastYData
        }, {
            index: 1,
            period: periods[2]
        });
        if (!smoothedValues) {
            return;
        }
        // Format data
        for (let i = 0, xDataLen = slowValues.xData.length; i < xDataLen; i++) {
            slowValues.yData[i] = [
                fastYData[i][1],
                smoothedValues.yData[i - periods[2] + 1] || null
            ];
            slowValues.values[i] = [
                slowValues.xData[i],
                fastYData[i][1],
                smoothedValues.yData[i - periods[2] + 1] || null
            ];
        }
        return slowValues;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Slow Stochastic oscillator. This series requires the `linkedTo` option
 * to be set and should be loaded after `stock/indicators/indicators.js`
 * and `stock/indicators/stochastic.js` files.
 *
 * @sample stock/indicators/slow-stochastic
 *         Slow Stochastic oscillator
 *
 * @extends      plotOptions.stochastic
 * @since        8.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/stochastic
 * @requires     stock/indicators/slow-stochastic
 * @optionparent plotOptions.slowstochastic
 */
SlowStochasticIndicator.defaultOptions = SlowStochasticIndicator_merge(SlowStochasticIndicator_StochasticIndicator.defaultOptions, {
    params: {
        /**
         * Periods for Slow Stochastic oscillator: [%K, %D, SMA(%D)].
         *
         * @type    {Array<number,number,number>}
         * @default [14, 3, 3]
         */
        periods: [14, 3, 3]
    }
});
SlowStochasticIndicator_extend(SlowStochasticIndicator.prototype, {
    nameBase: 'Slow Stochastic'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('slowstochastic', SlowStochasticIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const SlowStochastic_SlowStochasticIndicator = ((/* unused pure expression or super */ null && (SlowStochasticIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A Slow Stochastic indicator. If the [type](#series.slowstochastic.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.slowstochastic
 * @since     8.0.0
 * @product   highstock
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/stochastic
 * @requires  stock/indicators/slow-stochastic
 * @apioption series.slowstochastic
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/Supertrend/SupertrendIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { atr: SupertrendIndicator_ATRIndicator, sma: SupertrendIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { addEvent: SupertrendIndicator_addEvent, correctFloat: SupertrendIndicator_correctFloat, isArray: SupertrendIndicator_isArray, isNumber: SupertrendIndicator_isNumber, extend: SupertrendIndicator_extend, merge: SupertrendIndicator_merge, objectEach: SupertrendIndicator_objectEach } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 * @private
 */
function createPointObj(mainSeries, index) {
    return {
        index,
        close: mainSeries.getColumn('close')[index],
        x: mainSeries.getColumn('x')[index]
    };
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Supertrend series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.supertrend
 *
 * @augments Highcharts.Series
 */
class SupertrendIndicator extends SupertrendIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        const indicator = this;
        super.init.apply(indicator, arguments);
        // Only after series are linked add some additional logic/properties.
        const unbinder = SupertrendIndicator_addEvent(this.chart.constructor, 'afterLinkSeries', () => {
            // Protection for a case where the indicator is being updated,
            // for a brief moment the indicator is deleted.
            if (indicator.options) {
                const options = indicator.options, parentOptions = indicator.linkedParent.options;
                // Indicator cropThreshold has to be equal linked series one
                // reduced by period due to points comparison in drawGraph
                // (#9787)
                options.cropThreshold = (parentOptions.cropThreshold -
                    (options.params.period - 1));
            }
            unbinder();
        }, {
            order: 1
        });
    }
    drawGraph() {
        const indicator = this, indicOptions = indicator.options, 
        // Series that indicator is linked to
        mainSeries = indicator.linkedParent, mainXData = mainSeries.getColumn('x'), mainLinePoints = (mainSeries ? mainSeries.points : []), indicPoints = indicator.points, indicPath = indicator.graph, 
        // Points offset between lines
        tempOffset = mainLinePoints.length - indicPoints.length, offset = tempOffset > 0 ? tempOffset : 0, 
        // @todo: fix when ichi-moku indicator is merged to master.
        gappedExtend = {
            options: {
                gapSize: indicOptions.gapSize
            }
        }, 
        // Sorted supertrend points array
        groupedPoints = {
            top: [], // Rising trend line points
            bottom: [], // Falling trend line points
            intersect: [] // Change trend line points
        }, 
        // Options for trend lines
        supertrendLineOptions = {
            top: {
                styles: {
                    lineWidth: indicOptions.lineWidth,
                    lineColor: (indicOptions.fallingTrendColor ||
                        indicOptions.color),
                    dashStyle: indicOptions.dashStyle
                }
            },
            bottom: {
                styles: {
                    lineWidth: indicOptions.lineWidth,
                    lineColor: (indicOptions.risingTrendColor ||
                        indicOptions.color),
                    dashStyle: indicOptions.dashStyle
                }
            },
            intersect: indicOptions.changeTrendLine
        };
        let // Supertrend line point
        point, 
        // Supertrend line next point (has smaller x pos than point)
        nextPoint, 
        // Main series points
        mainPoint, nextMainPoint, 
        // Used when supertrend and main points are shifted
        // relative to each other
        prevMainPoint, prevPrevMainPoint, 
        // Used when particular point color is set
        pointColor, 
        // Temporary points that fill groupedPoints array
        newPoint, newNextPoint, indicPointsLen = indicPoints.length;
        // Loop which sort supertrend points
        while (indicPointsLen--) {
            point = indicPoints[indicPointsLen];
            nextPoint = indicPoints[indicPointsLen - 1];
            mainPoint = mainLinePoints[indicPointsLen - 1 + offset];
            nextMainPoint = mainLinePoints[indicPointsLen - 2 + offset];
            prevMainPoint = mainLinePoints[indicPointsLen + offset];
            prevPrevMainPoint = mainLinePoints[indicPointsLen + offset + 1];
            pointColor = point.options.color;
            newPoint = {
                x: point.x,
                plotX: point.plotX,
                plotY: point.plotY,
                isNull: false
            };
            // When mainPoint is the last one (left plot area edge)
            // but supertrend has additional one
            if (!nextMainPoint &&
                mainPoint &&
                SupertrendIndicator_isNumber(mainXData[mainPoint.index - 1])) {
                nextMainPoint = createPointObj(mainSeries, mainPoint.index - 1);
            }
            // When prevMainPoint is the last one (right plot area edge)
            // but supertrend has additional one (and points are shifted)
            if (!prevPrevMainPoint &&
                prevMainPoint &&
                SupertrendIndicator_isNumber(mainXData[prevMainPoint.index + 1])) {
                prevPrevMainPoint = createPointObj(mainSeries, prevMainPoint.index + 1);
            }
            // When points are shifted (right or left plot area edge)
            if (!mainPoint &&
                nextMainPoint &&
                SupertrendIndicator_isNumber(mainXData[nextMainPoint.index + 1])) {
                mainPoint = createPointObj(mainSeries, nextMainPoint.index + 1);
            }
            else if (!mainPoint &&
                prevMainPoint &&
                SupertrendIndicator_isNumber(mainXData[prevMainPoint.index - 1])) {
                mainPoint = createPointObj(mainSeries, prevMainPoint.index - 1);
            }
            // Check if points are shifted relative to each other
            if (point &&
                mainPoint &&
                prevMainPoint &&
                nextMainPoint &&
                point.x !== mainPoint.x) {
                if (point.x === prevMainPoint.x) {
                    nextMainPoint = mainPoint;
                    mainPoint = prevMainPoint;
                }
                else if (point.x === nextMainPoint.x) {
                    mainPoint = nextMainPoint;
                    nextMainPoint = {
                        close: mainSeries.getColumn('close')[mainPoint.index - 1],
                        x: mainXData[mainPoint.index - 1]
                    };
                }
                else if (prevPrevMainPoint && point.x === prevPrevMainPoint.x) {
                    mainPoint = prevPrevMainPoint;
                    nextMainPoint = prevMainPoint;
                }
            }
            if (nextPoint && nextMainPoint && mainPoint) {
                newNextPoint = {
                    x: nextPoint.x,
                    plotX: nextPoint.plotX,
                    plotY: nextPoint.plotY,
                    isNull: false
                };
                if (point.y >= mainPoint.close &&
                    nextPoint.y >= nextMainPoint.close) {
                    point.color = (pointColor || indicOptions.fallingTrendColor ||
                        indicOptions.color);
                    groupedPoints.top.push(newPoint);
                }
                else if (point.y < mainPoint.close &&
                    nextPoint.y < nextMainPoint.close) {
                    point.color = (pointColor || indicOptions.risingTrendColor ||
                        indicOptions.color);
                    groupedPoints.bottom.push(newPoint);
                }
                else {
                    groupedPoints.intersect.push(newPoint);
                    groupedPoints.intersect.push(newNextPoint);
                    // Additional null point to make a gap in line
                    groupedPoints.intersect.push(SupertrendIndicator_merge(newNextPoint, {
                        isNull: true
                    }));
                    if (point.y >= mainPoint.close &&
                        nextPoint.y < nextMainPoint.close) {
                        point.color = (pointColor || indicOptions.fallingTrendColor ||
                            indicOptions.color);
                        nextPoint.color = (pointColor || indicOptions.risingTrendColor ||
                            indicOptions.color);
                        groupedPoints.top.push(newPoint);
                        groupedPoints.top.push(SupertrendIndicator_merge(newNextPoint, {
                            isNull: true
                        }));
                    }
                    else if (point.y < mainPoint.close &&
                        nextPoint.y >= nextMainPoint.close) {
                        point.color = (pointColor || indicOptions.risingTrendColor ||
                            indicOptions.color);
                        nextPoint.color = (pointColor || indicOptions.fallingTrendColor ||
                            indicOptions.color);
                        groupedPoints.bottom.push(newPoint);
                        groupedPoints.bottom.push(SupertrendIndicator_merge(newNextPoint, {
                            isNull: true
                        }));
                    }
                }
            }
            else if (mainPoint) {
                if (point.y >= mainPoint.close) {
                    point.color = (pointColor || indicOptions.fallingTrendColor ||
                        indicOptions.color);
                    groupedPoints.top.push(newPoint);
                }
                else {
                    point.color = (pointColor || indicOptions.risingTrendColor ||
                        indicOptions.color);
                    groupedPoints.bottom.push(newPoint);
                }
            }
        }
        // Generate lines:
        SupertrendIndicator_objectEach(groupedPoints, function (values, lineName) {
            indicator.points = values;
            indicator.options = SupertrendIndicator_merge(supertrendLineOptions[lineName].styles, gappedExtend);
            indicator.graph = indicator['graph' + lineName + 'Line'];
            SupertrendIndicator_SMAIndicator.prototype.drawGraph.call(indicator);
            // Now save line
            indicator['graph' + lineName + 'Line'] = indicator.graph;
        });
        // Restore options:
        indicator.points = indicPoints;
        indicator.options = indicOptions;
        indicator.graph = indicPath;
    }
    // Supertrend (Multiplier, Period) Formula:
    // BASIC UPPERBAND = (HIGH + LOW) / 2 + Multiplier * ATR(Period)
    // BASIC LOWERBAND = (HIGH + LOW) / 2 - Multiplier * ATR(Period)
    // FINAL UPPERBAND =
    //     IF(
    //      Current BASICUPPERBAND  < Previous FINAL UPPERBAND AND
    //      Previous Close > Previous FINAL UPPERBAND
    //     ) THEN (Current BASIC UPPERBAND)
    //     ELSE (Previous FINALUPPERBAND)
    // FINAL LOWERBAND =
    //     IF(
    //      Current BASIC LOWERBAND  > Previous FINAL LOWERBAND AND
    //      Previous Close < Previous FINAL LOWERBAND
    //     ) THEN (Current BASIC LOWERBAND)
    //     ELSE (Previous FINAL LOWERBAND)
    // SUPERTREND =
    //     IF(
    //      Previous Supertrend == Previous FINAL UPPERBAND AND
    //      Current Close < Current FINAL UPPERBAND
    //     ) THAN Current FINAL UPPERBAND
    //     ELSE IF(
    //      Previous Supertrend == Previous FINAL LOWERBAND AND
    //      Current Close < Current FINAL LOWERBAND
    //     ) THAN Current FINAL UPPERBAND
    //     ELSE IF(
    //      Previous Supertrend == Previous FINAL UPPERBAND AND
    //      Current Close > Current FINAL UPPERBAND
    //     ) THAN Current FINAL LOWERBAND
    //     ELSE IF(
    //      Previous Supertrend == Previous FINAL LOWERBAND AND
    //      Current Close > Current FINAL LOWERBAND
    //     ) THAN Current FINAL LOWERBAND
    getValues(series, params) {
        const period = params.period, multiplier = params.multiplier, xVal = series.xData, yVal = series.yData, 
        // 0- date, 1- Supertrend indicator
        st = [], xData = [], yData = [], close = 3, low = 2, high = 1, periodsOffset = (period === 0) ? 0 : period - 1, finalUp = [], finalDown = [];
        let atrData = [], basicUp, basicDown, supertrend, prevFinalUp, prevFinalDown, prevST, // Previous Supertrend
        prevY, y, i;
        if ((xVal.length <= period) || !SupertrendIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4 || period < 0) {
            return;
        }
        atrData = SupertrendIndicator_ATRIndicator.prototype.getValues.call(this, series, {
            period: period
        }).yData;
        for (i = 0; i < atrData.length; i++) {
            y = yVal[periodsOffset + i];
            prevY = yVal[periodsOffset + i - 1] || [];
            prevFinalUp = finalUp[i - 1];
            prevFinalDown = finalDown[i - 1];
            prevST = yData[i - 1];
            if (i === 0) {
                prevFinalUp = prevFinalDown = prevST = 0;
            }
            basicUp = SupertrendIndicator_correctFloat((y[high] + y[low]) / 2 + multiplier * atrData[i]);
            basicDown = SupertrendIndicator_correctFloat((y[high] + y[low]) / 2 - multiplier * atrData[i]);
            if ((basicUp < prevFinalUp) ||
                (prevY[close] > prevFinalUp)) {
                finalUp[i] = basicUp;
            }
            else {
                finalUp[i] = prevFinalUp;
            }
            if ((basicDown > prevFinalDown) ||
                (prevY[close] < prevFinalDown)) {
                finalDown[i] = basicDown;
            }
            else {
                finalDown[i] = prevFinalDown;
            }
            if (prevST === prevFinalUp && y[close] < finalUp[i] ||
                prevST === prevFinalDown && y[close] < finalDown[i]) {
                supertrend = finalUp[i];
            }
            else if (prevST === prevFinalUp && y[close] > finalUp[i] ||
                prevST === prevFinalDown && y[close] > finalDown[i]) {
                supertrend = finalDown[i];
            }
            st.push([xVal[periodsOffset + i], supertrend]);
            xData.push(xVal[periodsOffset + i]);
            yData.push(supertrend);
        }
        return {
            values: st,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Supertrend indicator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/sma.js`.
 *
 * @sample {highstock} stock/indicators/supertrend
 *         Supertrend indicator
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, cropThreshold, negativeColor, colorAxis, joinBy,
 *               keys, navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking, threshold
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/supertrend
 * @optionparent plotOptions.supertrend
 */
SupertrendIndicator.defaultOptions = SupertrendIndicator_merge(SupertrendIndicator_SMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Supertrend indicator series points.
     *
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        /**
         * Multiplier for Supertrend Indicator.
         */
        multiplier: 3,
        /**
         * The base period for indicator Supertrend Indicator calculations.
         * This is the number of data points which are taken into account
         * for the indicator calculations.
         */
        period: 10
    },
    /**
     * Color of the Supertrend series line that is beneath the main series.
     *
     * @sample {highstock} stock/indicators/supertrend/
     *         Example with risingTrendColor
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    risingTrendColor: "#06b535" /* Palette.positiveColor */,
    /**
     * Color of the Supertrend series line that is above the main series.
     *
     * @sample {highstock} stock/indicators/supertrend/
     *         Example with fallingTrendColor
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    fallingTrendColor: "#f21313" /* Palette.negativeColor */,
    /**
     * The styles for the Supertrend line that intersect main series.
     *
     * @sample {highstock} stock/indicators/supertrend/
     *         Example with changeTrendLine
     */
    changeTrendLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1,
            /**
             * Color of the line.
             *
             * @type {Highcharts.ColorString}
             */
            lineColor: "#333333" /* Palette.neutralColor80 */,
            /**
             * The dash or dot style of the grid lines. For possible
             * values, see
             * [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).
             *
             * @sample {highcharts} highcharts/yaxis/gridlinedashstyle/
             *         Long dashes
             * @sample {highstock} stock/xaxis/gridlinedashstyle/
             *         Long dashes
             *
             * @type  {Highcharts.DashStyleValue}
             * @since 7.0.0
             */
            dashStyle: 'LongDash'
        }
    }
});
SupertrendIndicator_extend(SupertrendIndicator.prototype, {
    nameBase: 'Supertrend',
    nameComponents: ['multiplier', 'period']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('supertrend', SupertrendIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Supertrend_SupertrendIndicator = ((/* unused pure expression or super */ null && (SupertrendIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Supertrend indicator` series. If the [type](#series.supertrend.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.supertrend
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, cropThreshold, data, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, negativeColor, pointInterval,
 *            pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *            showInNavigator, stacking, threshold
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/supertrend
 * @apioption series.supertrend
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/VBP/VBPPoint.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

const { sma: { prototype: { pointClass: VBPPoint_SMAPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class VBPPoint extends VBPPoint_SMAPoint {
    // Required for destroying negative part of volume
    destroy() {
        // @todo: this.negativeGraphic doesn't seem to be used anywhere
        if (this.negativeGraphic) {
            this.negativeGraphic = this.negativeGraphic.destroy();
        }
        super.destroy.apply(this, arguments);
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const VBP_VBPPoint = (VBPPoint);

;// ./code/es-modules/Stock/Indicators/VBP/VBPIndicator.js
/* *
 *
 *  (c) 2010-2025 Paweł Dalek
 *
 *  Volume By Price (VBP) indicator for Highcharts Stock
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { animObject } = (external_highcharts_src_js_default_default());

const { noop: VBPIndicator_noop } = (external_highcharts_src_js_default_default());

const { column: { prototype: VBPIndicator_columnProto }, sma: VBPIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { addEvent: VBPIndicator_addEvent, arrayMax, arrayMin, correctFloat: VBPIndicator_correctFloat, defined: VBPIndicator_defined, error: VBPIndicator_error, extend: VBPIndicator_extend, isArray: VBPIndicator_isArray, merge: VBPIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
const abs = Math.abs;
/* *
 *
 *  Functions
 *
 * */
// Utils
/**
 * @private
 */
function arrayExtremesOHLC(data) {
    const dataLength = data.length;
    let min = data[0][3], max = min, i = 1, currentPoint;
    for (; i < dataLength; i++) {
        currentPoint = data[i][3];
        if (currentPoint < min) {
            min = currentPoint;
        }
        if (currentPoint > max) {
            max = currentPoint;
        }
    }
    return {
        min: min,
        max: max
    };
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Volume By Price (VBP) series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.vbp
 *
 * @augments Highcharts.Series
 */
class VBPIndicator extends VBPIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init(chart, options) {
        const indicator = this;
        // Series.update() sends data that is not necessary as everything is
        // calculated in getValues(), #17007
        delete options.data;
        super.init.apply(indicator, arguments);
        // Only after series are linked add some additional logic/properties.
        const unbinder = VBPIndicator_addEvent(this.chart.constructor, 'afterLinkSeries', function () {
            // Protection for a case where the indicator is being updated,
            // for a brief moment the indicator is deleted.
            if (indicator.options) {
                const params = indicator.options.params, baseSeries = indicator.linkedParent, volumeSeries = chart.get(params.volumeSeriesID);
                indicator.addCustomEvents(baseSeries, volumeSeries);
            }
            unbinder();
        }, {
            order: 1
        });
        return indicator;
    }
    // Adds events related with removing series
    addCustomEvents(baseSeries, volumeSeries) {
        const indicator = this, toEmptyIndicator = () => {
            indicator.chart.redraw();
            indicator.setData([]);
            indicator.zoneStarts = [];
            if (indicator.zoneLinesSVG) {
                indicator.zoneLinesSVG = indicator.zoneLinesSVG.destroy();
            }
        };
        // If base series is deleted, indicator series data is filled with
        // an empty array
        indicator.dataEventsToUnbind.push(VBPIndicator_addEvent(baseSeries, 'remove', function () {
            toEmptyIndicator();
        }));
        // If volume series is deleted, indicator series data is filled with
        // an empty array
        if (volumeSeries) {
            indicator.dataEventsToUnbind.push(VBPIndicator_addEvent(volumeSeries, 'remove', function () {
                toEmptyIndicator();
            }));
        }
        return indicator;
    }
    // Initial animation
    animate(init) {
        const series = this, inverted = series.chart.inverted, group = series.group, attr = {};
        if (!init && group) {
            const position = inverted ? series.yAxis.top : series.xAxis.left;
            if (inverted) {
                group['forceAnimate:translateY'] = true;
                attr.translateY = position;
            }
            else {
                group['forceAnimate:translateX'] = true;
                attr.translateX = position;
            }
            group.animate(attr, VBPIndicator_extend(animObject(series.options.animation), {
                step: function (val, fx) {
                    series.group.attr({
                        scaleX: Math.max(0.001, fx.pos)
                    });
                }
            }));
        }
    }
    drawPoints() {
        const indicator = this;
        if (indicator.options.volumeDivision.enabled) {
            indicator.posNegVolume(true, true);
            VBPIndicator_columnProto.drawPoints.apply(indicator, arguments);
            indicator.posNegVolume(false, false);
        }
        VBPIndicator_columnProto.drawPoints.apply(indicator, arguments);
    }
    // Function responsible for dividing volume into positive and negative
    posNegVolume(initVol, pos) {
        const indicator = this, signOrder = pos ?
            ['positive', 'negative'] :
            ['negative', 'positive'], volumeDivision = indicator.options.volumeDivision, pointLength = indicator.points.length;
        let posWidths = [], negWidths = [], i = 0, pointWidth, priceZone, wholeVol, point;
        if (initVol) {
            indicator.posWidths = posWidths;
            indicator.negWidths = negWidths;
        }
        else {
            posWidths = indicator.posWidths;
            negWidths = indicator.negWidths;
        }
        for (; i < pointLength; i++) {
            point = indicator.points[i];
            point[signOrder[0] + 'Graphic'] = point.graphic;
            point.graphic = point[signOrder[1] + 'Graphic'];
            if (initVol) {
                pointWidth = point.shapeArgs.width;
                priceZone = indicator.priceZones[i];
                wholeVol = priceZone.wholeVolumeData;
                if (wholeVol) {
                    posWidths.push(pointWidth / wholeVol * priceZone.positiveVolumeData);
                    negWidths.push(pointWidth / wholeVol * priceZone.negativeVolumeData);
                }
                else {
                    posWidths.push(0);
                    negWidths.push(0);
                }
            }
            point.color = pos ?
                volumeDivision.styles.positiveColor :
                volumeDivision.styles.negativeColor;
            point.shapeArgs.width = pos ?
                indicator.posWidths[i] :
                indicator.negWidths[i];
            point.shapeArgs.x = pos ?
                point.shapeArgs.x :
                indicator.posWidths[i];
        }
    }
    translate() {
        const indicator = this, options = indicator.options, chart = indicator.chart, yAxis = indicator.yAxis, yAxisMin = yAxis.min, zoneLinesOptions = indicator.options.zoneLines, priceZones = (indicator.priceZones);
        let yBarOffset = 0, volumeDataArray, maxVolume, primalBarWidth, barHeight, barHeightP, oldBarHeight, barWidth, pointPadding, chartPlotTop, barX, barY;
        VBPIndicator_columnProto.translate.apply(indicator);
        const indicatorPoints = indicator.points;
        // Do translate operation when points exist
        if (indicatorPoints.length) {
            pointPadding = options.pointPadding < 0.5 ?
                options.pointPadding :
                0.1;
            volumeDataArray = indicator.volumeDataArray;
            maxVolume = arrayMax(volumeDataArray);
            primalBarWidth = chart.plotWidth / 2;
            chartPlotTop = chart.plotTop;
            barHeight = abs(yAxis.toPixels(yAxisMin) -
                yAxis.toPixels(yAxisMin + indicator.rangeStep));
            oldBarHeight = abs(yAxis.toPixels(yAxisMin) -
                yAxis.toPixels(yAxisMin + indicator.rangeStep));
            if (pointPadding) {
                barHeightP = abs(barHeight * (1 - 2 * pointPadding));
                yBarOffset = abs((barHeight - barHeightP) / 2);
                barHeight = abs(barHeightP);
            }
            indicatorPoints.forEach(function (point, index) {
                barX = point.barX = point.plotX = 0;
                barY = point.plotY = (yAxis.toPixels(priceZones[index].start) -
                    chartPlotTop -
                    (yAxis.reversed ?
                        (barHeight - oldBarHeight) :
                        barHeight) -
                    yBarOffset);
                barWidth = VBPIndicator_correctFloat(primalBarWidth *
                    priceZones[index].wholeVolumeData / maxVolume);
                point.pointWidth = barWidth;
                point.shapeArgs = indicator.crispCol.apply(// eslint-disable-line no-useless-call
                indicator, [barX, barY, barWidth, barHeight]);
                point.volumeNeg = priceZones[index].negativeVolumeData;
                point.volumePos = priceZones[index].positiveVolumeData;
                point.volumeAll = priceZones[index].wholeVolumeData;
            });
            if (zoneLinesOptions.enabled) {
                indicator.drawZones(chart, yAxis, indicator.zoneStarts, zoneLinesOptions.styles);
            }
        }
    }
    getExtremes() {
        const prevCompare = this.options.compare, prevCumulative = this.options.cumulative;
        let ret;
        // Temporarily disable cumulative and compare while getting the extremes
        if (this.options.compare) {
            this.options.compare = void 0;
            ret = super.getExtremes();
            this.options.compare = prevCompare;
        }
        else if (this.options.cumulative) {
            this.options.cumulative = false;
            ret = super.getExtremes();
            this.options.cumulative = prevCumulative;
        }
        else {
            ret = super.getExtremes();
        }
        return ret;
    }
    getValues(series, params) {
        const indicator = this, xValues = series.getColumn('x', true), yValues = series.processedYData, chart = indicator.chart, ranges = params.ranges, VBP = [], xData = [], yData = [], volumeSeries = chart.get(params.volumeSeriesID);
        // Checks if base series exists
        if (!series.chart) {
            VBPIndicator_error('Base series not found! In case it has been removed, add ' +
                'a new one.', true, chart);
            return;
        }
        // Checks if volume series exists and if it has data
        if (!volumeSeries ||
            !volumeSeries.getColumn('x', true).length) {
            const errorMessage = volumeSeries &&
                !volumeSeries.getColumn('x', true).length ?
                ' does not contain any data.' :
                ' not found! Check `volumeSeriesID`.';
            VBPIndicator_error('Series ' +
                params.volumeSeriesID + errorMessage, true, chart);
            return;
        }
        // Checks if series data fits the OHLC format
        const isOHLC = VBPIndicator_isArray(yValues[0]);
        if (isOHLC && yValues[0].length !== 4) {
            VBPIndicator_error('Type of ' +
                series.name +
                ' series is different than line, OHLC or candlestick.', true, chart);
            return;
        }
        // Price zones contains all the information about the zones (index,
        // start, end, volumes, etc.)
        const priceZones = indicator.priceZones = indicator.specifyZones(isOHLC, xValues, yValues, ranges, volumeSeries);
        priceZones.forEach(function (zone, index) {
            VBP.push([zone.x, zone.end]);
            xData.push(VBP[index][0]);
            yData.push(VBP[index][1]);
        });
        return {
            values: VBP,
            xData: xData,
            yData: yData
        };
    }
    // Specifying where each zone should start ans end
    specifyZones(isOHLC, xValues, yValues, ranges, volumeSeries) {
        const indicator = this, rangeExtremes = (isOHLC ? arrayExtremesOHLC(yValues) : false), zoneStarts = indicator.zoneStarts = [], priceZones = [];
        let lowRange = rangeExtremes ?
            rangeExtremes.min :
            arrayMin(yValues), highRange = rangeExtremes ?
            rangeExtremes.max :
            arrayMax(yValues), i = 0, j = 1;
        // If the compare mode is set on the main series, change the VBP
        // zones to fit new extremes, #16277.
        const mainSeries = indicator.linkedParent;
        if (!indicator.options.compareToMain &&
            mainSeries.dataModify) {
            lowRange = mainSeries.dataModify.modifyValue(lowRange);
            highRange = mainSeries.dataModify.modifyValue(highRange);
        }
        if (!VBPIndicator_defined(lowRange) || !VBPIndicator_defined(highRange)) {
            if (this.points.length) {
                this.setData([]);
                this.zoneStarts = [];
                if (this.zoneLinesSVG) {
                    this.zoneLinesSVG = this.zoneLinesSVG.destroy();
                }
            }
            return [];
        }
        const rangeStep = indicator.rangeStep =
            VBPIndicator_correctFloat(highRange - lowRange) / ranges;
        zoneStarts.push(lowRange);
        for (; i < ranges - 1; i++) {
            zoneStarts.push(VBPIndicator_correctFloat(zoneStarts[i] + rangeStep));
        }
        zoneStarts.push(highRange);
        const zoneStartsLength = zoneStarts.length;
        //    Creating zones
        for (; j < zoneStartsLength; j++) {
            priceZones.push({
                index: j - 1,
                x: xValues[0],
                start: zoneStarts[j - 1],
                end: zoneStarts[j]
            });
        }
        return indicator.volumePerZone(isOHLC, priceZones, volumeSeries, xValues, yValues);
    }
    // Calculating sum of volume values for a specific zone
    volumePerZone(isOHLC, priceZones, volumeSeries, xValues, yValues) {
        const indicator = this, volumeXData = volumeSeries.getColumn('x', true), volumeYData = volumeSeries.getColumn('y', true), lastZoneIndex = priceZones.length - 1, baseSeriesLength = yValues.length, volumeSeriesLength = volumeYData.length;
        let previousValue, startFlag, endFlag, value, i;
        // Checks if each point has a corresponding volume value
        if (abs(baseSeriesLength - volumeSeriesLength)) {
            // If the first point don't have volume, add 0 value at the
            // beginning of the volume array
            if (xValues[0] !== volumeXData[0]) {
                volumeYData.unshift(0);
            }
            // If the last point don't have volume, add 0 value at the end
            // of the volume array
            if (xValues[baseSeriesLength - 1] !==
                volumeXData[volumeSeriesLength - 1]) {
                volumeYData.push(0);
            }
        }
        indicator.volumeDataArray = [];
        priceZones.forEach(function (zone) {
            zone.wholeVolumeData = 0;
            zone.positiveVolumeData = 0;
            zone.negativeVolumeData = 0;
            for (i = 0; i < baseSeriesLength; i++) {
                startFlag = false;
                endFlag = false;
                value = isOHLC ? yValues[i][3] : yValues[i];
                previousValue = i ?
                    (isOHLC ?
                        yValues[i - 1][3] :
                        yValues[i - 1]) :
                    value;
                // If the compare mode is set on the main series,
                // change the VBP zones to fit new extremes, #16277.
                const mainSeries = indicator.linkedParent;
                if (!indicator.options.compareToMain &&
                    mainSeries.dataModify) {
                    value = mainSeries.dataModify.modifyValue(value);
                    previousValue = mainSeries.dataModify
                        .modifyValue(previousValue);
                }
                // Checks if this is the point with the
                // lowest close value and if so, adds it calculations
                if (value <= zone.start && zone.index === 0) {
                    startFlag = true;
                }
                // Checks if this is the point with the highest
                // close value and if so, adds it calculations
                if (value >= zone.end && zone.index === lastZoneIndex) {
                    endFlag = true;
                }
                if ((value > zone.start || startFlag) &&
                    (value < zone.end || endFlag)) {
                    zone.wholeVolumeData += volumeYData[i];
                    if (previousValue > value) {
                        zone.negativeVolumeData += volumeYData[i];
                    }
                    else {
                        zone.positiveVolumeData += volumeYData[i];
                    }
                }
            }
            indicator.volumeDataArray.push(zone.wholeVolumeData);
        });
        return priceZones;
    }
    // Function responsible for drawing additional lines indicating zones
    drawZones(chart, yAxis, zonesValues, zonesStyles) {
        const indicator = this, renderer = chart.renderer, leftLinePos = 0, rightLinePos = chart.plotWidth, verticalOffset = chart.plotTop;
        let zoneLinesSVG = indicator.zoneLinesSVG, zoneLinesPath = [], verticalLinePos;
        zonesValues.forEach(function (value) {
            verticalLinePos = yAxis.toPixels(value) - verticalOffset;
            zoneLinesPath = zoneLinesPath.concat(chart.renderer.crispLine([[
                    'M',
                    leftLinePos,
                    verticalLinePos
                ], [
                    'L',
                    rightLinePos,
                    verticalLinePos
                ]], zonesStyles.lineWidth));
        });
        // Create zone lines one path or update it while animating
        if (zoneLinesSVG) {
            zoneLinesSVG.animate({
                d: zoneLinesPath
            });
        }
        else {
            zoneLinesSVG = indicator.zoneLinesSVG =
                renderer
                    .path(zoneLinesPath)
                    .attr({
                    'stroke-width': zonesStyles.lineWidth,
                    'stroke': zonesStyles.color,
                    'dashstyle': zonesStyles.dashStyle,
                    'zIndex': indicator.group.zIndex + 0.1
                })
                    .add(indicator.group);
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Volume By Price indicator.
 *
 * This series requires `linkedTo` option to be set.
 *
 * @sample stock/indicators/volume-by-price
 *         Volume By Price indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/volume-by-price
 * @optionparent plotOptions.vbp
 */
VBPIndicator.defaultOptions = VBPIndicator_merge(VBPIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index, period
     */
    params: {
        // Index and period are unchangeable, do not inherit (#15362)
        index: void 0,
        period: void 0,
        /**
         * The number of price zones.
         */
        ranges: 12,
        /**
         * The id of volume series which is mandatory. For example using
         * OHLC data, volumeSeriesID='volume' means the indicator will be
         * calculated using OHLC and volume values.
         */
        volumeSeriesID: 'volume'
    },
    /**
     * The styles for lines which determine price zones.
     */
    zoneLines: {
        /**
         * Enable/disable zone lines.
         */
        enabled: true,
        /**
         * Specify the style of zone lines.
         *
         * @type    {Highcharts.CSSObject}
         * @default {"color": "#0A9AC9", "dashStyle": "LongDash", "lineWidth": 1}
         */
        styles: {
            /** @ignore-option */
            color: '#0A9AC9',
            /** @ignore-option */
            dashStyle: 'LongDash',
            /** @ignore-option */
            lineWidth: 1
        }
    },
    /**
     * The styles for bars when volume is divided into positive/negative.
     */
    volumeDivision: {
        /**
         * Option to control if volume is divided.
         */
        enabled: true,
        styles: {
            /**
             * Color of positive volume bars.
             *
             * @type {Highcharts.ColorString}
             */
            positiveColor: 'rgba(144, 237, 125, 0.8)',
            /**
             * Color of negative volume bars.
             *
             * @type {Highcharts.ColorString}
             */
            negativeColor: 'rgba(244, 91, 91, 0.8)'
        }
    },
    // To enable series animation; must be animationLimit > pointCount
    animationLimit: 1000,
    enableMouseTracking: false,
    pointPadding: 0,
    zIndex: -1,
    crisp: true,
    dataGrouping: {
        enabled: false
    },
    dataLabels: {
        align: 'left',
        allowOverlap: true,
        enabled: true,
        format: 'P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}',
        padding: 0,
        style: {
            /** @internal */
            fontSize: '0.5em'
        },
        verticalAlign: 'top'
    }
});
VBPIndicator_extend(VBPIndicator.prototype, {
    nameBase: 'Volume by Price',
    nameComponents: ['ranges'],
    calculateOn: {
        chart: 'render',
        xAxis: 'afterSetExtremes'
    },
    pointClass: VBP_VBPPoint,
    markerAttribs: VBPIndicator_noop,
    drawGraph: VBPIndicator_noop,
    getColumnMetrics: VBPIndicator_columnProto.getColumnMetrics,
    crispCol: VBPIndicator_columnProto.crispCol
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('vbp', VBPIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const VBP_VBPIndicator = ((/* unused pure expression or super */ null && (VBPIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Volume By Price (VBP)` series. If the [type](#series.vbp.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.vbp
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL, compare, compareBase, compareStart
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/volume-by-price
 * @apioption series.vbp
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/VWAP/VWAPIndicator.js
/* *
 *
 *  (c) 2010-2025 Paweł Dalek
 *
 *  Volume Weighted Average Price (VWAP) indicator for Highcharts Stock
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: VWAPIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { error: VWAPIndicator_error, isArray: VWAPIndicator_isArray, merge: VWAPIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Volume Weighted Average Price (VWAP) series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.vwap
 *
 * @augments Highcharts.Series
 */
class VWAPIndicator extends VWAPIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const indicator = this, chart = series.chart, xValues = series.xData, yValues = series.yData, period = params.period;
        let isOHLC = true, volumeSeries;
        // Checks if volume series exists
        if (!(volumeSeries = (chart.get(params.volumeSeriesID)))) {
            VWAPIndicator_error('Series ' +
                params.volumeSeriesID +
                ' not found! Check `volumeSeriesID`.', true, chart);
            return;
        }
        // Checks if series data fits the OHLC format
        if (!(VWAPIndicator_isArray(yValues[0]))) {
            isOHLC = false;
        }
        return indicator.calculateVWAPValues(isOHLC, xValues, yValues, volumeSeries, period);
    }
    /**
     * Main algorithm used to calculate Volume Weighted Average Price (VWAP)
     * values
     *
     * @private
     *
     * @param {boolean} isOHLC
     * Says if data has OHLC format
     *
     * @param {Array<number>} xValues
     * Array of timestamps
     *
     * @param {Array<number|Array<number,number,number,number>>} yValues
     * Array of yValues, can be an array of a four arrays (OHLC) or array of
     * values (line)
     *
     * @param {Array<*>} volumeSeries
     * Volume series
     *
     * @param {number} period
     * Number of points to be calculated
     *
     * @return {Object}
     * Object contains computed VWAP
     **/
    calculateVWAPValues(isOHLC, xValues, yValues, volumeSeries, period) {
        const volumeValues = volumeSeries.getColumn('y'), volumeLength = volumeValues.length, pointsLength = xValues.length, cumulativePrice = [], cumulativeVolume = [], xData = [], yData = [], VWAP = [];
        let commonLength, typicalPrice, cPrice, cVolume, i, j;
        if (pointsLength <= volumeLength) {
            commonLength = pointsLength;
        }
        else {
            commonLength = volumeLength;
        }
        for (i = 0, j = 0; i < commonLength; i++) {
            // Depending on whether series is OHLC or line type, price is
            // average of the high, low and close or a simple value
            typicalPrice = isOHLC ?
                ((yValues[i][1] + yValues[i][2] +
                    yValues[i][3]) / 3) :
                yValues[i];
            typicalPrice *= volumeValues[i];
            cPrice = j ?
                (cumulativePrice[i - 1] + typicalPrice) :
                typicalPrice;
            cVolume = j ?
                (cumulativeVolume[i - 1] + volumeValues[i]) :
                volumeValues[i];
            cumulativePrice.push(cPrice);
            cumulativeVolume.push(cVolume);
            VWAP.push([xValues[i], (cPrice / cVolume)]);
            xData.push(VWAP[i][0]);
            yData.push(VWAP[i][1]);
            j++;
            if (j === period) {
                j = 0;
            }
        }
        return {
            values: VWAP,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Volume Weighted Average Price indicator.
 *
 * This series requires `linkedTo` option to be set.
 *
 * @sample stock/indicators/vwap
 *         Volume Weighted Average Price indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/vwap
 * @optionparent plotOptions.vwap
 */
VWAPIndicator.defaultOptions = VWAPIndicator_merge(VWAPIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        period: 30,
        /**
         * The id of volume series which is mandatory. For example using
         * OHLC data, volumeSeriesID='volume' means the indicator will be
         * calculated using OHLC and volume values.
         */
        volumeSeriesID: 'volume'
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('vwap', VWAPIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const VWAP_VWAPIndicator = ((/* unused pure expression or super */ null && (VWAPIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Volume Weighted Average Price (VWAP)` series. If the
 * [type](#series.vwap.type) option is not specified, it is inherited from
 * [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.vwap
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/vwap
 * @apioption series.vwap
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/WilliamsR/WilliamsRIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: WilliamsRIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: WilliamsRIndicator_extend, isArray: WilliamsRIndicator_isArray, merge: WilliamsRIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Williams %R series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.williamsr
 *
 * @augments Highcharts.Series
 */
class WilliamsRIndicator extends WilliamsRIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, WR = [], // 0- date, 1- Williams %R
        xData = [], yData = [], close = 3, low = 2, high = 1;
        let slicedY, extremes, R, HH, // Highest high value in period
        LL, // Lowest low value in period
        CC, // Current close value
        i;
        // Williams %R requires close value
        if (xVal.length < period ||
            !WilliamsRIndicator_isArray(yVal[0]) ||
            yVal[0].length !== 4) {
            return;
        }
        // For a N-period, we start from N-1 point, to calculate Nth point
        // That is why we later need to comprehend slice() elements list
        // with (+1)
        for (i = period - 1; i < yValLen; i++) {
            slicedY = yVal.slice(i - period + 1, i + 1);
            extremes = Indicators_ArrayUtilities.getArrayExtremes(slicedY, low, high);
            LL = extremes[0];
            HH = extremes[1];
            CC = yVal[i][close];
            R = ((HH - CC) / (HH - LL)) * -100;
            if (xVal[i]) {
                WR.push([xVal[i], R]);
                xData.push(xVal[i]);
                yData.push(R);
            }
        }
        return {
            values: WR,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Williams %R. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/williams-r
 *         Williams %R
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/williams-r
 * @optionparent plotOptions.williamsr
 */
WilliamsRIndicator.defaultOptions = WilliamsRIndicator_merge(WilliamsRIndicator_SMAIndicator.defaultOptions, {
    /**
     * Parameters used in calculation of Williams %R series points.
     * @excluding index
     */
    params: {
        index: void 0, // Unchangeable index, do not inherit (#15362)
        /**
         * Period for Williams %R oscillator
         */
        period: 14
    }
});
WilliamsRIndicator_extend(WilliamsRIndicator.prototype, {
    nameBase: 'Williams %R'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('williamsr', WilliamsRIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const WilliamsR_WilliamsRIndicator = ((/* unused pure expression or super */ null && (WilliamsRIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Williams %R Oscillator` series. If the [type](#series.williamsr.type)
 * option is not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.williamsr
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/williams-r
 * @apioption series.williamsr
 */
''; // Adds doclets above to the transpiled file

;// ./code/es-modules/Stock/Indicators/WMA/WMAIndicator.js
/* *
 *
 *  (c) 2010-2025 Kacper Madej
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: WMAIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isArray: WMAIndicator_isArray, merge: WMAIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
// Utils:
/**
 * @private
 */
function WMAIndicator_accumulateAverage(points, xVal, yVal, i, index) {
    const xValue = xVal[i], yValue = index < 0 ? yVal[i] : yVal[i][index];
    points.push([xValue, yValue]);
}
/**
 * @private
 */
function weightedSumArray(array, pLen) {
    // The denominator is the sum of the number of days as a triangular number.
    // If there are 5 days, the triangular numbers are 5, 4, 3, 2, and 1.
    // The sum is 5 + 4 + 3 + 2 + 1 = 15.
    const denominator = (pLen + 1) / 2 * pLen;
    // Reduce VS loop => reduce
    return array.reduce(function (prev, cur, i) {
        return [null, prev[1] + cur[1] * (i + 1)];
    })[1] / denominator;
}
/**
 * @private
 */
function WMAIndicator_populateAverage(points, xVal, yVal, i) {
    const pLen = points.length, wmaY = weightedSumArray(points, pLen), wmaX = xVal[i - 1];
    points.shift(); // Remove point until range < period
    return [wmaX, wmaY];
}
/* *
 *
 *  Class
 *
 * */
/**
 * The SMA series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.wma
 *
 * @augments Highcharts.Series
 */
class WMAIndicator extends WMAIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, xValue = xVal[0], wma = [], xData = [], yData = [];
        let range = 1, index = -1, i, wmaPoint, yValue = yVal[0];
        if (xVal.length < period) {
            return;
        }
        // Switch index for OHLC / Candlestick
        if (WMAIndicator_isArray(yVal[0])) {
            index = params.index;
            yValue = yVal[0][index];
        }
        // Starting point
        const points = [[xValue, yValue]];
        // Accumulate first N-points
        while (range !== period) {
            WMAIndicator_accumulateAverage(points, xVal, yVal, range, index);
            range++;
        }
        // Calculate value one-by-one for each period in visible data
        for (i = range; i < yValLen; i++) {
            wmaPoint = WMAIndicator_populateAverage(points, xVal, yVal, i);
            wma.push(wmaPoint);
            xData.push(wmaPoint[0]);
            yData.push(wmaPoint[1]);
            WMAIndicator_accumulateAverage(points, xVal, yVal, i, index);
        }
        wmaPoint = WMAIndicator_populateAverage(points, xVal, yVal, i);
        wma.push(wmaPoint);
        xData.push(wmaPoint[0]);
        yData.push(wmaPoint[1]);
        return {
            values: wma,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Weighted moving average indicator (WMA). This series requires `linkedTo`
 * option to be set.
 *
 * @sample stock/indicators/wma
 *         Weighted moving average indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/wma
 * @optionparent plotOptions.wma
 */
WMAIndicator.defaultOptions = WMAIndicator_merge(WMAIndicator_SMAIndicator.defaultOptions, {
    params: {
        index: 3,
        period: 9
    }
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('wma', WMAIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const WMA_WMAIndicator = ((/* unused pure expression or super */ null && (WMAIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `WMA` series. If the [type](#series.wma.type) option is not specified, it
 * is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.wma
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/wma
 * @apioption series.wma
 */
''; // Adds doclet above to the transpiled file

;// ./code/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js
/* *
 *
 *  (c) 2010-2025 Kacper Madej
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: ZigzagIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { merge: ZigzagIndicator_merge, extend: ZigzagIndicator_extend } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Zig Zag series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.zigzag
 *
 * @augments Highcharts.Series
 */
class ZigzagIndicator extends ZigzagIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const lowIndex = params.lowIndex, highIndex = params.highIndex, deviation = params.deviation / 100, deviations = {
            'low': 1 + deviation,
            'high': 1 - deviation
        }, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, zigzag = [], xData = [], yData = [];
        let i, j, zigzagPoint, directionUp, exitLoop = false, yIndex = false;
        // Exit if not enough points or no low or high values
        if (!xVal || xVal.length <= 1 ||
            (yValLen &&
                (typeof yVal[0][lowIndex] === 'undefined' ||
                    typeof yVal[0][highIndex] === 'undefined'))) {
            return;
        }
        // Set first zigzag point candidate
        const firstZigzagLow = yVal[0][lowIndex], firstZigzagHigh = yVal[0][highIndex];
        // Search for a second zigzag point candidate,
        // this will also set first zigzag point
        for (i = 1; i < yValLen; i++) {
            // Required change to go down
            if (yVal[i][lowIndex] <= firstZigzagHigh * deviations.high) {
                zigzag.push([xVal[0], firstZigzagHigh]);
                // Second zigzag point candidate
                zigzagPoint = [xVal[i], yVal[i][lowIndex]];
                // Next line will be going up
                directionUp = true;
                exitLoop = true;
                // Required change to go up
            }
            else if (yVal[i][highIndex] >= firstZigzagLow * deviations.low) {
                zigzag.push([xVal[0], firstZigzagLow]);
                // Second zigzag point candidate
                zigzagPoint = [xVal[i], yVal[i][highIndex]];
                // Next line will be going down
                directionUp = false;
                exitLoop = true;
            }
            if (exitLoop) {
                xData.push(zigzag[0][0]);
                yData.push(zigzag[0][1]);
                j = i++;
                i = yValLen;
            }
        }
        // Search for next zigzags
        for (i = j; i < yValLen; i++) {
            if (directionUp) { // Next line up
                // lower when going down -> change zigzag candidate
                if (yVal[i][lowIndex] <= zigzagPoint[1]) {
                    zigzagPoint = [xVal[i], yVal[i][lowIndex]];
                }
                // Required change to go down -> new zigzagpoint and
                // direction change
                if (yVal[i][highIndex] >=
                    zigzagPoint[1] * deviations.low) {
                    yIndex = highIndex;
                }
            }
            else { // Next line down
                // higher when going up -> change zigzag candidate
                if (yVal[i][highIndex] >= zigzagPoint[1]) {
                    zigzagPoint = [xVal[i], yVal[i][highIndex]];
                }
                // Required change to go down -> new zigzagpoint and
                // direction change
                if (yVal[i][lowIndex] <=
                    zigzagPoint[1] * deviations.high) {
                    yIndex = lowIndex;
                }
            }
            if (yIndex !== false) { // New zigzag point and direction change
                zigzag.push(zigzagPoint);
                xData.push(zigzagPoint[0]);
                yData.push(zigzagPoint[1]);
                zigzagPoint = [xVal[i], yVal[i][yIndex]];
                directionUp = !directionUp;
                yIndex = false;
            }
        }
        const zigzagLen = zigzag.length;
        // No zigzag for last point
        if (zigzagLen !== 0 &&
            zigzag[zigzagLen - 1][0] < xVal[yValLen - 1]) {
            // Set last point from zigzag candidate
            zigzag.push(zigzagPoint);
            xData.push(zigzagPoint[0]);
            yData.push(zigzagPoint[1]);
        }
        return {
            values: zigzag,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Zig Zag indicator.
 *
 * This series requires `linkedTo` option to be set.
 *
 * @sample stock/indicators/zigzag
 *         Zig Zag indicator
 *
 * @extends      plotOptions.sma
 * @since        6.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/zigzag
 * @optionparent plotOptions.zigzag
 */
ZigzagIndicator.defaultOptions = ZigzagIndicator_merge(ZigzagIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding index, period
     */
    params: {
        // Index and period are unchangeable, do not inherit (#15362)
        index: void 0,
        period: void 0,
        /**
         * The point index which indicator calculations will base - low
         * value.
         *
         * For example using OHLC data, index=2 means the indicator will be
         * calculated using Low values.
         */
        lowIndex: 2,
        /**
         * The point index which indicator calculations will base - high
         * value.
         *
         * For example using OHLC data, index=1 means the indicator will be
         * calculated using High values.
         */
        highIndex: 1,
        /**
         * The threshold for the value change.
         *
         * For example deviation=1 means the indicator will ignore all price
         * movements less than 1%.
         */
        deviation: 1
    }
});
ZigzagIndicator_extend(ZigzagIndicator.prototype, {
    nameComponents: ['deviation'],
    nameSuffixes: ['%'],
    nameBase: 'Zig Zag'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('zigzag', ZigzagIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Zigzag_ZigzagIndicator = ((/* unused pure expression or super */ null && (ZigzagIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `Zig Zag` series. If the [type](#series.zigzag.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.zigzag
 * @since     6.0.0
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/zigzag
 * @apioption series.zigzag
 */
''; // Adds doclets above to transpiled file

;// ./code/es-modules/Stock/Indicators/LinearRegression/LinearRegressionIndicator.js
/**
 *
 *  (c) 2010-2025 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: LinearRegressionIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isArray: LinearRegressionIndicator_isArray, extend: LinearRegressionIndicator_extend, merge: LinearRegressionIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Linear regression series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearregression
 *
 * @augments Highcharts.Series
 */
class LinearRegressionIndicator extends LinearRegressionIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Return the slope and intercept of a straight line function.
     *
     * @private
     *
     * @param {Array<number>} xData
     * List of all x coordinates in a period.
     *
     * @param {Array<number>} yData
     * List of all y coordinates in a period.
     *
     * @return {Highcharts.RegressionLineParametersObject}
     * Object that contains the slope and the intercept of a straight line
     * function.
     */
    getRegressionLineParameters(xData, yData) {
        // Least squares method
        const yIndex = this.options.params.index, getSingleYValue = function (yValue, yIndex) {
            return LinearRegressionIndicator_isArray(yValue) ? yValue[yIndex] : yValue;
        }, xSum = xData.reduce(function (accX, val) {
            return val + accX;
        }, 0), ySum = yData.reduce(function (accY, val) {
            return getSingleYValue(val, yIndex) + accY;
        }, 0), xMean = xSum / xData.length, yMean = ySum / yData.length;
        let xError, yError, i, formulaNumerator = 0, formulaDenominator = 0;
        for (i = 0; i < xData.length; i++) {
            xError = xData[i] - xMean;
            yError = getSingleYValue(yData[i], yIndex) - yMean;
            formulaNumerator += xError * yError;
            formulaDenominator += Math.pow(xError, 2);
        }
        const slope = formulaDenominator ?
            formulaNumerator / formulaDenominator : 0; // Don't divide by 0
        return {
            slope: slope,
            intercept: yMean - slope * xMean
        };
    }
    /**
     * Return the y value on a straight line.
     *
     * @private
     *
     * @param {Highcharts.RegressionLineParametersObject} lineParameters
     * Object that contains the slope and the intercept of a straight line
     * function.
     *
     * @param {number} endPointX
     * X coordinate of the point.
     *
     * @return {number}
     * Y value of the point that lies on the line.
     */
    getEndPointY(lineParameters, endPointX) {
        return lineParameters.slope * endPointX + lineParameters.intercept;
    }
    /**
     * Transform the coordinate system so that x values start at 0 and
     * apply xAxisUnit.
     *
     * @private
     *
     * @param {Array<number>} xData
     * List of all x coordinates in a period
     *
     * @param {number} xAxisUnit
     * Option (see the API)
     *
     * @return {Array<number>}
     * Array of transformed x data
     */
    transformXData(xData, xAxisUnit) {
        const xOffset = xData[0];
        return xData.map(function (xValue) {
            return (xValue - xOffset) / xAxisUnit;
        });
    }
    /**
     * Find the closest distance between points in the base series.
     * @private
     * @param {Array<number>} xData list of all x coordinates in the base series
     * @return {number} - closest distance between points in the base series
     */
    findClosestDistance(xData) {
        let distance, closestDistance, i;
        for (i = 1; i < xData.length - 1; i++) {
            distance = xData[i] - xData[i - 1];
            if (distance > 0 &&
                (typeof closestDistance === 'undefined' ||
                    distance < closestDistance)) {
                closestDistance = distance;
            }
        }
        return closestDistance;
    }
    // Required to be implemented - starting point for indicator's logic
    getValues(baseSeries, regressionSeriesParams) {
        const xData = baseSeries.xData, yData = baseSeries.yData, period = regressionSeriesParams.period, 
        // Format required to be returned
        indicatorData = {
            xData: [], // By getValues() method
            yData: [],
            values: []
        }, xAxisUnit = this.options.params.xAxisUnit ||
            this.findClosestDistance(xData);
        let lineParameters, i, periodStart, periodEnd, endPointX, endPointY, periodXData, periodYData, periodTransformedXData;
        // Iteration logic: x value of the last point within the period
        // (end point) is used to represent the y value (regression)
        // of the entire period.
        for (i = period - 1; i <= xData.length - 1; i++) {
            periodStart = i - period + 1; // Adjusted for slice() function
            periodEnd = i + 1; // (as above)
            endPointX = xData[i];
            periodXData = xData.slice(periodStart, periodEnd);
            periodYData = yData.slice(periodStart, periodEnd);
            periodTransformedXData = this.transformXData(periodXData, xAxisUnit);
            lineParameters = this.getRegressionLineParameters(periodTransformedXData, periodYData);
            endPointY = this.getEndPointY(lineParameters, periodTransformedXData[periodTransformedXData.length - 1]);
            // @todo this is probably not used anywhere
            indicatorData.values.push({
                regressionLineParameters: lineParameters,
                x: endPointX,
                y: endPointY
            });
            if (LinearRegressionIndicator_isArray(indicatorData.xData)) {
                indicatorData.xData.push(endPointX);
            }
            if (LinearRegressionIndicator_isArray(indicatorData.yData)) {
                indicatorData.yData.push(endPointY);
            }
        }
        return indicatorData;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Linear regression indicator. This series requires `linkedTo` option to be
 * set.
 *
 * @sample {highstock} stock/indicators/linear-regression
 *         Linear regression indicator
 *
 * @extends      plotOptions.sma
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/regressions
 * @optionparent plotOptions.linearregression
 */
LinearRegressionIndicator.defaultOptions = LinearRegressionIndicator_merge(LinearRegressionIndicator_SMAIndicator.defaultOptions, {
    params: {
        /**
         * Unit (in milliseconds) for the x axis distances used to
         * compute the regression line parameters (slope & intercept)
         * for every range. In Highcharts Stock the x axis values are
         * always represented in milliseconds which may cause that
         * distances between points are "big" integer numbers.
         *
         * Highcharts Stock's linear regression algorithm (least squares
         * method) will utilize these "big" integers for finding the
         * slope and the intercept of the regression line for each
         * period. In consequence, this value may be a very "small"
         * decimal number that's hard to interpret by a human.
         *
         * For instance: `xAxisUnit` equaled to `86400000` ms (1 day)
         * forces the algorithm to treat `86400000` as `1` while
         * computing the slope and the intercept. This may enhance the
         * legibility of the indicator's values.
         *
         * Default value is the closest distance between two data
         * points.
         *
         * In `v9.0.2`, the default value has been changed
         * from `undefined` to `null`.
         *
         * @sample {highstock} stock/plotoptions/linear-regression-xaxisunit
         *         xAxisUnit set to 1 minute
         *
         * @example
         * // In Liniear Regression Slope Indicator series `xAxisUnit`is
         * // `86400000` (1 day) and period is `3`. There're 3 points in
         * // the base series:
         *
         * data: [
         *   [Date.UTC(2020, 0, 1), 1],
         *   [Date.UTC(2020, 0, 2), 3],
         *   [Date.UTC(2020, 0, 3), 5]
         * ]
         *
         * // This will produce one point in the indicator series that
         * // has a `y` value of `2` (slope of the regression line). If
         * // we change the `xAxisUnit` to `1` (ms) the value of the
         * // indicator's point will be `2.3148148148148148e-8` which is
         * // harder to interpert for a human.
         *
         * @type    {null|number}
         * @product highstock
         */
        xAxisUnit: null
    },
    tooltip: {
        valueDecimals: 4
    }
});
LinearRegressionIndicator_extend(LinearRegressionIndicator.prototype, {
    nameBase: 'Linear Regression Indicator'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('linearRegression', LinearRegressionIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const LinearRegression_LinearRegressionIndicator = ((/* unused pure expression or super */ null && (LinearRegressionIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A linear regression series. If the
 * [type](#series.linearregression.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregression
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregression
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/LinearRegressionSlopes/LinearRegressionSlopesIndicator.js
/**
 *
 *  (c) 2010-2025 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { linearRegression: LinearRegressionSlopesIndicator_LinearRegressionIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: LinearRegressionSlopesIndicator_extend, merge: LinearRegressionSlopesIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Linear Regression Slope series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionSlope
 *
 * @augments Highcharts.Series
 */
class LinearRegressionSlopesIndicator extends LinearRegressionSlopesIndicator_LinearRegressionIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getEndPointY(lineParameters) {
        return lineParameters.slope;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Linear regression slope indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-slope
 *         Linear regression slope indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @optionparent plotOptions.linearregressionslope
 */
LinearRegressionSlopesIndicator.defaultOptions = LinearRegressionSlopesIndicator_merge(LinearRegressionSlopesIndicator_LinearRegressionIndicator.defaultOptions);
LinearRegressionSlopesIndicator_extend(LinearRegressionSlopesIndicator.prototype, {
    nameBase: 'Linear Regression Slope Indicator'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('linearRegressionSlope', LinearRegressionSlopesIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const LinearRegressionSlopes_LinearRegressionSlopesIndicator = ((/* unused pure expression or super */ null && (LinearRegressionSlopesIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A linear regression intercept series. If the
 * [type](#series.linearregressionslope.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionslope
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionslope
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/LinearRegressionIntercept/LinearRegressionInterceptIndicator.js
/**
 *
 *  (c) 2010-2025 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { linearRegression: LinearRegressionInterceptIndicator_LinearRegressionIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: LinearRegressionInterceptIndicator_extend, merge: LinearRegressionInterceptIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Linear Regression Intercept series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionIntercept
 *
 * @augments Highcharts.Series
 */
class LinearRegressionInterceptIndicator extends LinearRegressionInterceptIndicator_LinearRegressionIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getEndPointY(lineParameters) {
        return lineParameters.intercept;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-intercept
 *         Linear intercept slope indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @optionparent plotOptions.linearregressionintercept
 */
LinearRegressionInterceptIndicator.defaultOptions = LinearRegressionInterceptIndicator_merge(LinearRegressionInterceptIndicator_LinearRegressionIndicator.defaultOptions);
LinearRegressionInterceptIndicator_extend(LinearRegressionInterceptIndicator.prototype, {
    nameBase: 'Linear Regression Intercept Indicator'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('linearRegressionIntercept', LinearRegressionInterceptIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const LinearRegressionIntercept_LinearRegressionInterceptIndicator = ((/* unused pure expression or super */ null && (LinearRegressionInterceptIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A linear regression intercept series. If the
 * [type](#series.linearregressionintercept.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionintercept
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionintercept
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/LinearRegressionAngle/LinearRegressionAngleIndicator.js
/**
 *
 *  (c) 2010-2025 Kamil Kulig
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { linearRegression: LinearRegressionAngleIndicator_LinearRegressionIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: LinearRegressionAngleIndicator_extend, merge: LinearRegressionAngleIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Linear Regression Angle series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.linearRegressionAngle
 *
 * @augments Highcharts.Series
 */
class LinearRegressionAngleIndicator extends LinearRegressionAngleIndicator_LinearRegressionIndicator {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Convert a slope of a line to angle (in degrees) between
     * the line and x axis
     * @private
     * @param {number} slope of the straight line function
     * @return {number} angle in degrees
     */
    slopeToAngle(slope) {
        return Math.atan(slope) * (180 / Math.PI); // Rad to deg
    }
    getEndPointY(lineParameters) {
        return this.slopeToAngle(lineParameters.slope);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Linear regression angle indicator. This series requires `linkedTo`
 * option to be set.
 *
 * @sample {highstock} stock/indicators/linear-regression-angle
 *         Linear intercept angle indicator
 *
 * @extends      plotOptions.linearregression
 * @since        7.0.0
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @optionparent plotOptions.linearregressionangle
 */
LinearRegressionAngleIndicator.defaultOptions = LinearRegressionAngleIndicator_merge(LinearRegressionAngleIndicator_LinearRegressionIndicator.defaultOptions, {
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
            '{series.name}: <b>{point.y}°</b><br/>'
    }
});
LinearRegressionAngleIndicator_extend(LinearRegressionAngleIndicator.prototype, {
    nameBase: 'Linear Regression Angle Indicator'
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('linearRegressionAngle', LinearRegressionAngleIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const LinearRegressionAngle_LinearRegressionAngleIndicator = ((/* unused pure expression or super */ null && (LinearRegressionAngleIndicator)));
/**
 * A linear regression intercept series. If the
 * [type](#series.linearregressionangle.type) option is not specified, it is
 * inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.linearregressionangle
 * @since     7.0.0
 * @product   highstock
 * @excluding dataParser,dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/regressions
 * @apioption series.linearregressionangle
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/ABands/ABandsIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { sma: ABandsIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: ABandsIndicator_correctFloat, extend: ABandsIndicator_extend, merge: ABandsIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function getBaseForBand(low, high, factor) {
    return (((ABandsIndicator_correctFloat(high - low)) /
        ((ABandsIndicator_correctFloat(high + low)) / 2)) * 1000) * factor;
}
/**
 * @private
 */
function getPointUB(high, base) {
    return high * (ABandsIndicator_correctFloat(1 + 2 * base));
}
/**
 * @private
 */
function getPointLB(low, base) {
    return low * (ABandsIndicator_correctFloat(1 - 2 * base));
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ABands series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.abands
 *
 * @augments Highcharts.Series
 */
class ABandsIndicator extends ABandsIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const period = params.period, factor = params.factor, index = params.index, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, 
        // Upperbands
        UB = [], 
        // Lowerbands
        LB = [], 
        // ABANDS array structure:
        // 0-date, 1-top line, 2-middle line, 3-bottom line
        ABANDS = [], low = 2, high = 1, xData = [], yData = [];
        // Middle line, top line and bottom line
        let ML, TL, BL, date, bandBase, pointSMA, ubSMA, lbSMA, slicedX, slicedY, i;
        if (yValLen < period) {
            return;
        }
        for (i = 0; i <= yValLen; i++) {
            // Get UB and LB values of every point. This condition
            // is necessary, because there is a need to calculate current
            // UB nad LB values simultaneously with given period SMA
            // in one for loop.
            if (i < yValLen) {
                bandBase = getBaseForBand(yVal[i][low], yVal[i][high], factor);
                UB.push(getPointUB(yVal[i][high], bandBase));
                LB.push(getPointLB(yVal[i][low], bandBase));
            }
            if (i >= period) {
                slicedX = xVal.slice(i - period, i);
                slicedY = yVal.slice(i - period, i);
                ubSMA = super.getValues.call(this, {
                    xData: slicedX,
                    yData: UB.slice(i - period, i)
                }, {
                    period: period
                });
                lbSMA = super.getValues.call(this, {
                    xData: slicedX,
                    yData: LB.slice(i - period, i)
                }, {
                    period: period
                });
                pointSMA = super.getValues.call(this, {
                    xData: slicedX,
                    yData: slicedY
                }, {
                    period: period,
                    index: index
                });
                date = pointSMA.xData[0];
                TL = ubSMA.yData[0];
                BL = lbSMA.yData[0];
                ML = pointSMA.yData[0];
                ABANDS.push([date, TL, ML, BL]);
                xData.push(date);
                yData.push([TL, ML, BL]);
            }
        }
        return {
            values: ABANDS,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Acceleration bands (ABANDS). This series requires the `linkedTo` option
 * to be set and should be loaded after the
 * `stock/indicators/indicators.js`.
 *
 * @sample {highstock} stock/indicators/acceleration-bands
 *         Acceleration Bands
 *
 * @extends      plotOptions.sma
 * @mixes        Highcharts.MultipleLinesMixin
 * @since        7.0.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, compare, compareBase, joinBy, keys,
 *               navigatorOptions, pointInterval, pointIntervalUnit,
 *               pointPlacement, pointRange, pointStart, showInNavigator,
 *               stacking,
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/acceleration-bands
 * @optionparent plotOptions.abands
 */
ABandsIndicator.defaultOptions = ABandsIndicator_merge(ABandsIndicator_SMAIndicator.defaultOptions, {
    /**
     * Option for fill color between lines in Accelleration bands Indicator.
     *
     * @sample {highstock} stock/indicators/indicator-area-fill
     *      Background fill between lines.
     *
     * @type {Highcharts.Color}
     * @since 9.3.2
     * @apioption plotOptions.abands.fillColor
     *
     */
    params: {
        period: 20,
        /**
         * The algorithms factor value used to calculate bands.
         *
         * @product highstock
         */
        factor: 0.001,
        index: 3
    },
    lineWidth: 1,
    topLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1
        }
    },
    bottomLine: {
        styles: {
            /**
             * Pixel width of the line.
             */
            lineWidth: 1
        }
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
ABandsIndicator_extend(ABandsIndicator.prototype, {
    areaLinesNames: ['top', 'bottom'],
    linesApiNames: ['topLine', 'bottomLine'],
    nameBase: 'Acceleration Bands',
    nameComponents: ['period', 'factor'],
    pointArrayMap: ['top', 'middle', 'bottom'],
    pointValKey: 'middle'
});
Indicators_MultipleLinesComposition.compose(ABandsIndicator);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('abands', ABandsIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const ABands_ABandsIndicator = ((/* unused pure expression or super */ null && (ABandsIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * An Acceleration bands indicator. If the [type](#series.abands.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.abands
 * @since     7.0.0
 * @product   highstock
 * @excluding allAreas, colorAxis, compare, compareBase, dataParser, dataURL,
 *            joinBy, keys, navigatorOptions, pointInterval,
 *            pointIntervalUnit, pointPlacement, pointRange, pointStart,
 *            stacking, showInNavigator,
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/acceleration-bands
 * @apioption series.abands
 */
''; // To include the above in jsdoc

;// ./code/es-modules/Stock/Indicators/TrendLine/TrendLineIndicator.js
/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: TrendLineIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { extend: TrendLineIndicator_extend, merge: TrendLineIndicator_merge, isArray: TrendLineIndicator_isArray } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Trend line series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.trendline
 *
 * @augments Highcharts.Series
 */
class TrendLineIndicator extends TrendLineIndicator_SMAIndicator {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.updateAllPoints = true;
    }
    /* *
     *
     *  Functions
     *
     * */
    getValues(series, params) {
        const orgXVal = series.xData, yVal = series.yData, xVal = [], LR = [], xData = [], yData = [], index = params.index;
        let numerator = 0, denominator = 0, xValSum = 0, yValSum = 0, counter = 0;
        // Create an array of consecutive xValues, (don't remove duplicates)
        for (let i = 0; i < orgXVal.length; i++) {
            if (i === 0 || orgXVal[i] !== orgXVal[i - 1]) {
                counter++;
            }
            xVal.push(counter);
        }
        for (let i = 0; i < xVal.length; i++) {
            xValSum += xVal[i];
            yValSum += TrendLineIndicator_isArray(yVal[i]) ? yVal[i][index] : yVal[i];
        }
        const meanX = xValSum / xVal.length, meanY = yValSum / yVal.length;
        for (let i = 0; i < xVal.length; i++) {
            const y = TrendLineIndicator_isArray(yVal[i]) ? yVal[i][index] : yVal[i];
            numerator += (xVal[i] - meanX) * (y - meanY);
            denominator += Math.pow(xVal[i] - meanX, 2);
        }
        // Calculate linear regression:
        for (let i = 0; i < xVal.length; i++) {
            // Check if the xVal is already used
            if (orgXVal[i] === xData[xData.length - 1]) {
                continue;
            }
            const x = orgXVal[i], y = meanY + (numerator / denominator) * (xVal[i] - meanX);
            LR.push([x, y]);
            xData.push(x);
            yData.push(y);
        }
        return {
            xData: xData,
            yData: yData,
            values: LR
        };
    }
}
/**
 * Trendline (linear regression) fits a straight line to the selected data
 * using a method called the Sum Of Least Squares. This series requires the
 * `linkedTo` option to be set.
 *
 * @sample stock/indicators/trendline
 *         Trendline indicator
 *
 * @extends      plotOptions.sma
 * @since        7.1.3
 * @product      highstock
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/trendline
 * @optionparent plotOptions.trendline
 */
TrendLineIndicator.defaultOptions = TrendLineIndicator_merge(TrendLineIndicator_SMAIndicator.defaultOptions, {
    /**
     * @excluding period
     */
    params: {
        period: void 0, // Unchangeable period, do not inherit (#15362)
        /**
         * The point index which indicator calculations will base. For
         * example using OHLC data, index=2 means the indicator will be
         * calculated using Low values.
         *
         * @default 3
         */
        index: 3
    }
});
TrendLineIndicator_extend(TrendLineIndicator.prototype, {
    nameBase: 'Trendline',
    nameComponents: void 0
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('trendline', TrendLineIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TrendLine_TrendLineIndicator = ((/* unused pure expression or super */ null && (TrendLineIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * A `TrendLine` series. If the [type](#series.trendline.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.trendline
 * @since     7.1.3
 * @product   highstock
 * @excluding dataParser, dataURL
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/trendline
 * @apioption series.trendline
 */
''; // To include the above in the js output

;// ./code/es-modules/Stock/Indicators/DisparityIndex/DisparityIndexIndicator.js
/* *
 *  (c) 2010-2025 Rafal Sebestjanski
 *
 *  Disparity Index technical indicator for Highcharts Stock
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { sma: DisparityIndexIndicator_SMAIndicator } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { correctFloat: DisparityIndexIndicator_correctFloat, defined: DisparityIndexIndicator_defined, extend: DisparityIndexIndicator_extend, isArray: DisparityIndexIndicator_isArray, merge: DisparityIndexIndicator_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The Disparity Index series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.disparityindex
 *
 * @augments Highcharts.Series
 */
class DisparityIndexIndicator extends DisparityIndexIndicator_SMAIndicator {
    /* *
     *
     *  Functions
     *
     * */
    init() {
        const args = arguments, ctx = this, // Disparity Index indicator
        params = args[1].params, // Options.params
        averageType = params && params.average ? params.average : void 0;
        ctx.averageIndicator = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes[averageType] || DisparityIndexIndicator_SMAIndicator;
        ctx.averageIndicator.prototype.init.apply(ctx, args);
    }
    calculateDisparityIndex(curPrice, periodAverage) {
        return DisparityIndexIndicator_correctFloat(curPrice - periodAverage) / periodAverage * 100;
    }
    getValues(series, params) {
        const index = params.index, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, disparityIndexPoint = [], xData = [], yData = [], 
        // "as any" because getValues doesn't exist on typeof Series
        averageIndicator = this.averageIndicator, isOHLC = DisparityIndexIndicator_isArray(yVal[0]), 
        // Get the average indicator's values
        values = averageIndicator.prototype.getValues(series, params), yValues = values.yData, start = xVal.indexOf(values.xData[0]);
        // Check period, if bigger than points length, skip
        if (!yValues || yValues.length === 0 ||
            !DisparityIndexIndicator_defined(index) ||
            yVal.length <= start) {
            return;
        }
        // Get the Disparity Index indicator's values
        for (let i = start; i < yValLen; i++) {
            const disparityIndexValue = this.calculateDisparityIndex(isOHLC ? yVal[i][index] : yVal[i], yValues[i - start]);
            disparityIndexPoint.push([
                xVal[i],
                disparityIndexValue
            ]);
            xData.push(xVal[i]);
            yData.push(disparityIndexValue);
        }
        return {
            values: disparityIndexPoint,
            xData: xData,
            yData: yData
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
/**
 * Disparity Index.
 * This series requires the `linkedTo` option to be set and should
 * be loaded after the `stock/indicators/indicators.js` file.
 *
 * @sample stock/indicators/disparity-index
 *         Disparity Index indicator
 *
 * @extends      plotOptions.sma
 * @since 9.1.0
 * @product      highstock
 * @excluding    allAreas, colorAxis, joinBy, keys, navigatorOptions,
 *               pointInterval, pointIntervalUnit, pointPlacement,
 *               pointRange, pointStart, showInNavigator, stacking
 * @requires     stock/indicators/indicators
 * @requires     stock/indicators/disparity-index
 * @optionparent plotOptions.disparityindex
 */
DisparityIndexIndicator.defaultOptions = DisparityIndexIndicator_merge(DisparityIndexIndicator_SMAIndicator.defaultOptions, {
    params: {
        /**
         * The average used to calculate the Disparity Index indicator.
         * By default it uses SMA, with EMA as an option. To use other
         * averages, e.g. TEMA, the `stock/indicators/tema.js` file needs to
         * be loaded.
         *
         * If value is different than `ema`, `dema`, `tema` or `wma`,
         * then sma is used.
         */
        average: 'sma',
        index: 3
    },
    marker: {
        enabled: false
    },
    dataGrouping: {
        approximation: 'averages'
    }
});
DisparityIndexIndicator_extend(DisparityIndexIndicator.prototype, {
    nameBase: 'Disparity Index',
    nameComponents: ['period', 'average']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('disparityindex', DisparityIndexIndicator);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const DisparityIndex_DisparityIndexIndicator = ((/* unused pure expression or super */ null && (DisparityIndexIndicator)));
/* *
 *
 *  API Options
 *
 * */
/**
 * The Disparity Index indicator series.
 * If the [type](#series.disparityindex.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.disparityindex
 * @since 9.1.0
 * @product   highstock
 * @excluding allAreas, colorAxis,  dataParser, dataURL, joinBy, keys,
 *            navigatorOptions, pointInterval, pointIntervalUnit,
 *            pointPlacement, pointRange, pointStart, showInNavigator, stacking
 * @requires  stock/indicators/indicators
 * @requires  stock/indicators/disparity-index
 * @apioption series.disparityindex
 */
''; // To include the above in the js output

;// external ["../highcharts.src.js","default","Point"]
const external_highcharts_src_js_default_Point_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Point;
var external_highcharts_src_js_default_Point_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Point_namespaceObject);
;// external ["../highcharts.src.js","default","Series"]
const external_highcharts_src_js_default_Series_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series;
var external_highcharts_src_js_default_Series_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_namespaceObject);
;// ./code/es-modules/Series/DataModifyComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { tooltipFormatter: pointTooltipFormatter } = (external_highcharts_src_js_default_Point_default()).prototype;


const { addEvent: DataModifyComposition_addEvent, arrayMax: DataModifyComposition_arrayMax, arrayMin: DataModifyComposition_arrayMin, correctFloat: DataModifyComposition_correctFloat, defined: DataModifyComposition_defined, isArray: DataModifyComposition_isArray, isNumber: DataModifyComposition_isNumber, isString, pick: DataModifyComposition_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var DataModifyComposition;
(function (DataModifyComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends the series, axis and point classes with
     * compare and cumulative support.
     *
     * @private
     *
     * @param SeriesClass
     * Series class to use.
     *
     * @param AxisClass
     * Axis class to extend.
     *
     * @param PointClass
     * Point class to use.
     */
    function compose(SeriesClass, AxisClass, PointClass) {
        const axisProto = AxisClass.prototype, pointProto = PointClass.prototype, seriesProto = SeriesClass.prototype;
        if (!seriesProto.setCompare) {
            seriesProto.setCompare = seriesSetCompare;
            seriesProto.setCumulative = seriesSetCumulative;
            DataModifyComposition_addEvent(SeriesClass, 'afterInit', afterInit);
            DataModifyComposition_addEvent(SeriesClass, 'afterGetExtremes', afterGetExtremes);
            DataModifyComposition_addEvent(SeriesClass, 'afterProcessData', afterProcessData);
        }
        if (!axisProto.setCompare) {
            axisProto.setCompare = axisSetCompare;
            axisProto.setModifier = setModifier;
            axisProto.setCumulative = axisSetCumulative;
            pointProto.tooltipFormatter = tooltipFormatter;
        }
        return SeriesClass;
    }
    DataModifyComposition.compose = compose;
    /* ********************************************************************** *
     *  Start shared compare and cumulative logic                             *
     * ********************************************************************** */
    /**
     * Shared code for the axis.setCompare() and the axis.setCumulative()
     * methods. Inits the 'compare' or the 'cumulative' mode.
     * @private
     */
    function setModifier(mode, modeState, redraw) {
        if (!this.isXAxis) {
            this.series.forEach(function (series) {
                if (mode === 'compare' &&
                    typeof modeState !== 'boolean') {
                    series.setCompare(modeState, false);
                }
                else if (mode === 'cumulative' &&
                    !isString(modeState)) {
                    series.setCumulative(modeState, false);
                }
            });
            if (DataModifyComposition_pick(redraw, true)) {
                this.chart.redraw();
            }
        }
    }
    /**
     * Extend the tooltip formatter by adding support for the point.change
     * variable as well as the changeDecimals option.
     *
     * @ignore
     * @function Highcharts.Point#tooltipFormatter
     *
     * @param {string} pointFormat
     */
    function tooltipFormatter(pointFormat) {
        const point = this, { numberFormatter } = point.series.chart, replace = function (value) {
            pointFormat = pointFormat.replace('{point.' + value + '}', (point[value] > 0 && value === 'change' ? '+' : '') +
                numberFormatter(point[value], DataModifyComposition_pick(point.series.tooltipOptions.changeDecimals, 2)));
        };
        if (DataModifyComposition_defined(point.change)) {
            replace('change');
        }
        if (DataModifyComposition_defined(point.cumulativeSum)) {
            replace('cumulativeSum');
        }
        return pointTooltipFormatter.apply(this, [pointFormat]);
    }
    /**
     * Extend series.init by adding a methods to modify the y values used
     * for plotting on the y axis. For compare mode, this method is called both
     * from the axis when finding dataMin and dataMax,
     * and from the series.translate method.
     *
     * @ignore
     * @function Highcharts.Series#init
     */
    function afterInit() {
        // If linked series does not have compare option set, use the parent
        // series' compare option, #21119.
        const linkedTo = this.options.linkedTo, chart = this.chart;
        if (linkedTo) {
            const linkedSeries = linkedTo === ':previous' ?
                chart.series[this.index - 1] :
                chart.get(linkedTo);
            if (linkedSeries instanceof (external_highcharts_src_js_default_Series_default())) {
                this.options.compare = DataModifyComposition_pick(this.userOptions.compare, linkedSeries.options.compare);
            }
        }
        const compare = this.options.compare;
        let dataModify;
        if (compare === 'percent' ||
            compare === 'value' ||
            this.options.cumulative) {
            dataModify = new Additions(this);
            if (compare === 'percent' || compare === 'value') {
                // Set comparison mode
                dataModify.initCompare(compare);
            }
            else {
                // Set Cumulative Sum mode
                dataModify.initCumulative();
            }
        }
        this.dataModify = dataModify;
    }
    /**
     * Adjust the extremes (compare and cumulative modify the data).
     * @private
     */
    function afterGetExtremes(e) {
        const dataExtremes = e.dataExtremes, activeYData = dataExtremes.activeYData;
        if (this.dataModify && dataExtremes) {
            let extremes;
            if (this.options.compare) {
                extremes = [
                    this.dataModify.modifyValue(dataExtremes.dataMin),
                    this.dataModify.modifyValue(dataExtremes.dataMax)
                ];
            }
            else if (this.options.cumulative &&
                DataModifyComposition_isArray(activeYData) &&
                // If only one y visible, sum doesn't change
                // so no need to change extremes
                activeYData.length >= 2) {
                extremes = Additions.getCumulativeExtremes(activeYData);
            }
            if (extremes) {
                dataExtremes.dataMin = DataModifyComposition_arrayMin(extremes);
                dataExtremes.dataMax = DataModifyComposition_arrayMax(extremes);
            }
        }
    }
    /* ********************************************************************** *
     *  End shared compare and cumulative logic                               *
     * ********************************************************************** */
    /* ********************************************************************** *
     *  Start value compare logic                                             *
     * ********************************************************************** */
    /**
     * Highcharts Stock only. Set the
     * [compare](https://api.highcharts.com/highstock/plotOptions.series.compare)
     * mode of the series after render time.
     * In most cases it is more useful running
     * {@link Axis#setCompare} on the X axis to update all its series.
     *
     * @function Highcharts.Series#setCompare
     *
     * @param {string|null} [compare]
     *        Can be one of `undefined` (default), `null`, `"percent"`
     *        or `"value"`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function seriesSetCompare(compare, redraw) {
        // Survive to export, #5485 (and for options generally)
        this.options.compare = this.userOptions.compare = compare;
        // Fire series.init() that will set or delete series.dataModify
        this.update({}, DataModifyComposition_pick(redraw, true));
        if (this.dataModify && (compare === 'value' || compare === 'percent')) {
            this.dataModify.initCompare(compare);
        }
        else {
            // When disabling, clear the points
            this.points.forEach((point) => {
                delete point.change;
            });
        }
    }
    /**
     * Extend series.processData by finding the first y value in the plot area,
     * used for comparing the following values
     *
     * @ignore
     * @function Highcharts.Series#processData
     */
    function afterProcessData() {
        const series = this, 
        // For series with more than one value (range, OHLC etc), compare
        // against close or the pointValKey (#4922, #3112, #9854)
        compareColumn = this.getColumn((series.pointArrayMap &&
            (series.options.pointValKey || series.pointValKey)) || 'y', true);
        if (series.xAxis && // Not pies
            compareColumn.length &&
            series.dataModify) {
            const processedXData = series.getColumn('x', true), length = series.dataTable.rowCount, compareStart = series.options.compareStart === true ? 0 : 1;
            // Find the first value for comparison
            for (let i = 0; i < length - compareStart; i++) {
                const compareValue = compareColumn[i];
                if (DataModifyComposition_isNumber(compareValue) &&
                    compareValue !== 0 &&
                    processedXData[i + compareStart] >= (series.xAxis.min || 0)) {
                    series.dataModify.compareValue = compareValue;
                    break;
                }
            }
        }
    }
    /**
     * Highcharts Stock only. Set the compare mode on all series
     * belonging to a Y axis.
     *
     * @see [plotOptions.series.compare](https://api.highcharts.com/highstock/plotOptions.series.compare)
     *
     * @sample stock/members/axis-setcompare/
     *         Set compare
     *
     * @function Highcharts.Axis#setCompare
     *
     * @param {string|null} [compare]
     *        The compare mode. Can be one of `undefined` (default), `null`,
     *        `"value"` or `"percent"`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function axisSetCompare(compare, redraw) {
        this.setModifier('compare', compare, redraw);
    }
    /* ********************************************************************** *
     *  End value compare logic                                               *
     * ********************************************************************** */
    /* ********************************************************************** *
     *  Start Cumulative Sum logic, author: Rafal Sebestjanski                *
     * ********************************************************************** */
    /**
     * Highcharts Stock only. Set the
     * [cumulative](https://api.highcharts.com/highstock/plotOptions.series.cumulative)
     * mode of the series after render time.
     * In most cases it is more useful running
     * {@link Axis#setCumulative} on the Y axis to update all its series.
     *
     * @function Highcharts.Series#setCumulative
     *
     * @param {boolean} [cumulative=false]
     *        Either enable or disable Cumulative Sum mode.
     *        Can be one of `false` (default) or `true`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function seriesSetCumulative(cumulative, redraw) {
        // Set default value to false
        cumulative = DataModifyComposition_pick(cumulative, false);
        // Survive to export, #5485 (and for options generally)
        this.options.cumulative = this.userOptions.cumulative = cumulative;
        // Fire series.init() that will set or delete series.dataModify
        this.update({}, DataModifyComposition_pick(redraw, true));
        // If should, turn on the Cumulative Sum mode
        if (this.dataModify) {
            this.dataModify.initCumulative();
        }
        else {
            // When disabling, clear the points
            this.points.forEach((point) => {
                delete point.cumulativeSum;
            });
        }
    }
    /**
     * Highcharts Stock only. Set the cumulative mode on all series
     * belonging to a Y axis.
     *
     * @see [plotOptions.series.cumulative](https://api.highcharts.com/highstock/plotOptions.series.cumulative)
     *
     * @sample stock/members/axis-setcumulative/
     *         Set cumulative
     *
     * @function Highcharts.Axis#setCumulative
     *
     * @param {boolean} [cumulative]
     *        Whether to disable or enable the cumulative mode.
     *        Can be one of `undefined` (default, treated as `false`),
     *        `false` or `true`.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart or to wait for a later call to
     *        {@link Chart#redraw}.
     */
    function axisSetCumulative(cumulative, redraw) {
        this.setModifier('cumulative', cumulative, redraw);
    }
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /**
         * @private
         */
        constructor(series) {
            this.series = series;
        }
        /* *
        *
        *  Functions
        *
        * */
        /**
         * @private
         */
        modifyValue() {
            return 0;
        }
        /**
         * @ignore
         * @function Highcharts.Series#getCumulativeExtremes
         *
         * @param {Array} [activeYData]
         *        An array cointaining all the points' y values
         *        in a visible range.
         */
        static getCumulativeExtremes(activeYData) {
            let cumulativeDataMin = Infinity, cumulativeDataMax = -Infinity;
            activeYData.reduce((prev, cur) => {
                const sum = prev + cur;
                cumulativeDataMin = Math.min(cumulativeDataMin, sum, prev);
                cumulativeDataMax = Math.max(cumulativeDataMax, sum, prev);
                return sum;
            });
            return [cumulativeDataMin, cumulativeDataMax];
        }
        /**
         * @ignore
         * @function Highcharts.Series#initCompare
         *
         * @param {string} [compare]
         *        Can be one of `"percent"` or `"value"`.
         */
        initCompare(compare) {
            // Set the modifyValue method
            this.modifyValue = function (value, index) {
                if (value === null) {
                    value = 0;
                }
                const compareValue = this.compareValue;
                if (typeof value !== 'undefined' &&
                    typeof compareValue !== 'undefined') { // #2601, #5814
                    // Get the modified value
                    if (compare === 'value') {
                        value -= compareValue;
                        // Compare percent
                    }
                    else {
                        const compareBase = this.series.options.compareBase;
                        value = 100 * (value / compareValue) -
                            (compareBase === 100 ? 0 : 100);
                    }
                    // Record for tooltip etc.
                    if (typeof index !== 'undefined') {
                        const point = this.series.points[index];
                        if (point) {
                            point.change = value;
                        }
                    }
                    return value;
                }
                return 0;
            };
        }
        /**
         * @ignore
         * @function Highcharts.Series#initCumulative
         */
        initCumulative() {
            // Set the modifyValue method
            this.modifyValue = function (value, index) {
                if (value === null) {
                    value = 0;
                }
                if (value !== void 0 && index !== void 0) {
                    const prevPoint = index > 0 ?
                        this.series.points[index - 1] : null;
                    // Get the modified value
                    if (prevPoint && prevPoint.cumulativeSum) {
                        value = DataModifyComposition_correctFloat(prevPoint.cumulativeSum + value);
                    }
                    // Record for tooltip etc.
                    const point = this.series.points[index];
                    const cumulativeStart = point.series.options.cumulativeStart, withinRange = point.x <= this.series.xAxis.max &&
                        point.x >= this.series.xAxis.min;
                    if (point) {
                        if (!cumulativeStart || withinRange) {
                            point.cumulativeSum = value;
                        }
                        else {
                            point.cumulativeSum = void 0;
                        }
                    }
                    return value;
                }
                return 0;
            };
        }
    }
    DataModifyComposition.Additions = Additions;
})(DataModifyComposition || (DataModifyComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Series_DataModifyComposition = (DataModifyComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * Compare the values of the series against the first non-null, non-
 * zero value in the visible range. The y axis will show percentage
 * or absolute change depending on whether `compare` is set to `"percent"`
 * or `"value"`. When this is applied to multiple series, it allows
 * comparing the development of the series against each other. Adds
 * a `change` field to every point object. If a `compare` value is not set on a
 * linked series, it will be inherited from the parent series.
 *
 * @see [compareBase](#plotOptions.series.compareBase)
 * @see [Axis.setCompare()](/class-reference/Highcharts.Axis#setCompare)
 * @see [Series.setCompare()](/class-reference/Highcharts.Series#setCompare)
 *
 * @sample {highstock} stock/plotoptions/series-compare-percent/
 *         Percent
 * @sample {highstock} stock/plotoptions/series-compare-value/
 *         Value
 *
 * @type      {string}
 * @since     1.0.1
 * @product   highstock
 * @validvalue ["percent", "value"]
 * @apioption plotOptions.series.compare
 */
/**
 * Defines if comparison should start from the first point within the visible
 * range or should start from the last point **before** the range.
 *
 * In other words, this flag determines if first point within the visible range
 * will have 0% (`compareStart=true`) or should have been already calculated
 * according to the previous point (`compareStart=false`).
 *
 * @sample {highstock} stock/plotoptions/series-comparestart/
 *         Calculate compare within visible range
 *
 * @type      {boolean}
 * @default   false
 * @since     6.0.0
 * @product   highstock
 * @apioption plotOptions.series.compareStart
 */
/**
 * When [compare](#plotOptions.series.compare) is `percent`, this option
 * dictates whether to use 0 or 100 as the base of comparison.
 *
 * @sample {highstock} stock/plotoptions/series-comparebase/
 *         Compare base is 100
 *
 * @type       {number}
 * @default    0
 * @since      5.0.6
 * @product    highstock
 * @validvalue [0, 100]
 * @apioption  plotOptions.series.compareBase
 */
/**
 * Cumulative Sum feature replaces points' values with the following formula:
 * `sum of all previous points' values + current point's value`.
 * Works only for points in a visible range.
 * Adds the `cumulativeSum` field to each point object that can be accessed
 * e.g. in the [tooltip.pointFormat](https://api.highcharts.com/highstock/tooltip.pointFormat).
 *
 * With `dataGrouping` enabled, default grouping approximation is set to `sum`.
 *
 * @see [Axis.setCumulative()](/class-reference/Highcharts.Axis#setCumulative)
 * @see [Series.setCumulative()](/class-reference/Highcharts.Series#setCumulative)
 *
 * @sample {highstock} stock/plotoptions/series-cumulative-sum/
 *         Cumulative Sum
 *
 * @type      {boolean}
 * @default   false
 * @since 9.3.0
 * @product   highstock
 * @apioption plotOptions.series.cumulative
 */
/**
 * Defines if cumulation should start from the first point within the visible
 * range or should start from the last point **before** the range.
 *
 * In other words, this flag determines if first point within the visible range
 * will start at 0 (`cumulativeStart=true`) or should have been already calculated
 * according to the previous point (`cumulativeStart=false`).
 *
 * @sample {highstock} stock/plotoptions/series-cumulativestart/
 *         Cumulative Start
 *
 * @type      {boolean}
 * @default   false
 * @since 11.4.2
 * @product   highstock
 * @apioption plotOptions.series.cumulativeStart
 */
''; // Keeps doclets above in transpiled file

;// external ["../modules/accessibility.src.js","default","Navigator"]
const accessibility_src_js_default_Navigator_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_59783372__["default"].Navigator;
var accessibility_src_js_default_Navigator_default = /*#__PURE__*/__webpack_require__.n(accessibility_src_js_default_Navigator_namespaceObject);
;// ./code/es-modules/Data/ColumnUtils.js
/* *
 *
 *  (c) 2020-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *
 * */
/**
 * Utility functions for columns that can be either arrays or typed arrays.
 * @private
 */
var ColumnUtils;
(function (ColumnUtils) {
    /* *
    *
    *  Declarations
    *
    * */
    /* *
    *
    * Functions
    *
    * */
    /**
     * Sets the length of the column array.
     *
     * @param {DataTable.Column} column
     * Column to be modified.
     *
     * @param {number} length
     * New length of the column.
     *
     * @param {boolean} asSubarray
     * If column is a typed array, return a subarray instead of a new array. It
     * is faster `O(1)`, but the entire buffer will be kept in memory until all
     * views of it are destroyed. Default is `false`.
     *
     * @return {DataTable.Column}
     * Modified column.
     *
     * @private
     */
    function setLength(column, length, asSubarray) {
        if (Array.isArray(column)) {
            column.length = length;
            return column;
        }
        return column[asSubarray ? 'subarray' : 'slice'](0, length);
    }
    ColumnUtils.setLength = setLength;
    /**
     * Splices a column array.
     *
     * @param {DataTable.Column} column
     * Column to be modified.
     *
     * @param {number} start
     * Index at which to start changing the array.
     *
     * @param {number} deleteCount
     * An integer indicating the number of old array elements to remove.
     *
     * @param {boolean} removedAsSubarray
     * If column is a typed array, return a subarray instead of a new array. It
     * is faster `O(1)`, but the entire buffer will be kept in memory until all
     * views to it are destroyed. Default is `true`.
     *
     * @param {Array<number>|TypedArray} items
     * The elements to add to the array, beginning at the start index. If you
     * don't specify any elements, `splice()` will only remove elements from the
     * array.
     *
     * @return {SpliceResult}
     * Object containing removed elements and the modified column.
     *
     * @private
     */
    function splice(column, start, deleteCount, removedAsSubarray, items = []) {
        if (Array.isArray(column)) {
            if (!Array.isArray(items)) {
                items = Array.from(items);
            }
            return {
                removed: column.splice(start, deleteCount, ...items),
                array: column
            };
        }
        const Constructor = Object.getPrototypeOf(column)
            .constructor;
        const removed = column[removedAsSubarray ? 'subarray' : 'slice'](start, start + deleteCount);
        const newLength = column.length - deleteCount + items.length;
        const result = new Constructor(newLength);
        result.set(column.subarray(0, start), 0);
        result.set(items, start);
        result.set(column.subarray(start + deleteCount), start + items.length);
        return {
            removed: removed,
            array: result
        };
    }
    ColumnUtils.splice = splice;
    /**
     * Converts a cell value to a number.
     *
     * @param {DataTable.CellType} value
     * Cell value to convert to a number.
     *
     * @param {boolean} useNaN
     * If `true`, returns `NaN` for non-numeric values; if `false`,
     * returns `null` instead.
     *
     * @return {number | null}
     * Number or `null` if the value is not a number.
     *
     * @private
     */
    function convertToNumber(value, useNaN) {
        switch (typeof value) {
            case 'boolean':
                return (value ? 1 : 0);
            case 'number':
                return (isNaN(value) && !useNaN ? null : value);
            default:
                value = parseFloat(`${value ?? ''}`);
                return (isNaN(value) && !useNaN ? null : value);
        }
    }
    ColumnUtils.convertToNumber = convertToNumber;
})(ColumnUtils || (ColumnUtils = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_ColumnUtils = (ColumnUtils);

;// ./code/es-modules/Data/DataTableCore.js
/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Torstein Hønsi
 *
 * */


const { setLength, splice } = Data_ColumnUtils;

const { fireEvent: DataTableCore_fireEvent, objectEach: DataTableCore_objectEach, uniqueKey } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * Class to manage columns and rows in a table structure. It provides methods
 * to add, remove, and manipulate columns and rows, as well as to retrieve data
 * from specific cells.
 *
 * @class
 * @name Highcharts.DataTable
 *
 * @param {Highcharts.DataTableOptions} [options]
 * Options to initialize the new DataTable instance.
 */
class DataTableCore {
    /**
     * Constructs an instance of the DataTable class.
     *
     * @example
     * const dataTable = new Highcharts.DataTableCore({
     *   columns: {
     *     year: [2020, 2021, 2022, 2023],
     *     cost: [11, 13, 12, 14],
     *     revenue: [12, 15, 14, 18]
     *   }
     * });

     *
     * @param {Highcharts.DataTableOptions} [options]
     * Options to initialize the new DataTable instance.
     */
    constructor(options = {}) {
        /**
         * Whether the ID was automatic generated or given in the constructor.
         *
         * @name Highcharts.DataTable#autoId
         * @type {boolean}
         */
        this.autoId = !options.id;
        this.columns = {};
        /**
         * ID of the table for identification purposes.
         *
         * @name Highcharts.DataTable#id
         * @type {string}
         */
        this.id = (options.id || uniqueKey());
        this.rowCount = 0;
        this.versionTag = uniqueKey();
        let rowCount = 0;
        DataTableCore_objectEach(options.columns || {}, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = Math.max(rowCount, column.length);
        });
        this.applyRowCount(rowCount);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Applies a row count to the table by setting the `rowCount` property and
     * adjusting the length of all columns.
     *
     * @private
     * @param {number} rowCount The new row count.
     */
    applyRowCount(rowCount) {
        this.rowCount = rowCount;
        DataTableCore_objectEach(this.columns, (column, columnId) => {
            if (column.length !== rowCount) {
                this.columns[columnId] = setLength(column, rowCount);
            }
        });
    }
    /**
     * Delete rows. Simplified version of the full
     * `DataTable.deleteRows` method.
     *
     * @param {number} rowIndex
     * The start row index
     *
     * @param {number} [rowCount=1]
     * The number of rows to delete
     *
     * @return {void}
     *
     * @emits #afterDeleteRows
     */
    deleteRows(rowIndex, rowCount = 1) {
        if (rowCount > 0 && rowIndex < this.rowCount) {
            let length = 0;
            DataTableCore_objectEach(this.columns, (column, columnId) => {
                this.columns[columnId] =
                    splice(column, rowIndex, rowCount).array;
                length = column.length;
            });
            this.rowCount = length;
        }
        DataTableCore_fireEvent(this, 'afterDeleteRows', { rowIndex, rowCount });
        this.versionTag = uniqueKey();
    }
    /**
     * Fetches the given column by the canonical column name. Simplified version
     * of the full `DataTable.getRow` method, always returning by reference.
     *
     * @param {string} columnId
     * Name of the column to get.
     *
     * @return {Highcharts.DataTableColumn|undefined}
     * A copy of the column, or `undefined` if not found.
     */
    getColumn(columnId, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return this.columns[columnId];
    }
    /**
     * Retrieves all or the given columns. Simplified version of the full
     * `DataTable.getColumns` method, always returning by reference.
     *
     * @param {Array<string>} [columnIds]
     * Column ids to retrieve.
     *
     * @return {Highcharts.DataTableColumnCollection}
     * Collection of columns. If a requested column was not found, it is
     * `undefined`.
     */
    getColumns(columnIds, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asReference) {
        return (columnIds || Object.keys(this.columns)).reduce((columns, columnId) => {
            columns[columnId] = this.columns[columnId];
            return columns;
        }, {});
    }
    /**
     * Retrieves the row at a given index.
     *
     * @param {number} rowIndex
     * Row index to retrieve. First row has index 0.
     *
     * @param {Array<string>} [columnIds]
     * Column names to retrieve.
     *
     * @return {Record<string, number|string|undefined>|undefined}
     * Returns the row values, or `undefined` if not found.
     */
    getRow(rowIndex, columnIds) {
        return (columnIds || Object.keys(this.columns)).map((key) => this.columns[key]?.[rowIndex]);
    }
    /**
     * Sets cell values for a column. Will insert a new column, if not found.
     *
     * @param {string} columnId
     * Column name to set.
     *
     * @param {Highcharts.DataTableColumn} [column]
     * Values to set in the column.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. (Default: 0)
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumn(columnId, column = [], rowIndex = 0, eventDetail) {
        this.setColumns({ [columnId]: column }, rowIndex, eventDetail);
    }
    /**
     * Sets cell values for multiple columns. Will insert new columns, if not
     * found. Simplified version of the full `DataTableCore.setColumns`, limited
     * to full replacement of the columns (undefined `rowIndex`).
     *
     * @param {Highcharts.DataTableColumnCollection} columns
     * Columns as a collection, where the keys are the column names.
     *
     * @param {number} [rowIndex]
     * Index of the first row to change. Ignored in the `DataTableCore`, as it
     * always replaces the full column.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #setColumns
     * @emits #afterSetColumns
     */
    setColumns(columns, rowIndex, eventDetail) {
        let rowCount = this.rowCount;
        DataTableCore_objectEach(columns, (column, columnId) => {
            this.columns[columnId] = column.slice();
            rowCount = column.length;
        });
        this.applyRowCount(rowCount);
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetColumns');
            this.versionTag = uniqueKey();
        }
    }
    /**
     * Sets cell values of a row. Will insert a new row if no index was
     * provided, or if the index is higher than the total number of table rows.
     * A simplified version of the full `DateTable.setRow`, limited to objects.
     *
     * @param {Record<string, number|string|undefined>} row
     * Cell values to set.
     *
     * @param {number} [rowIndex]
     * Index of the row to set. Leave `undefined` to add as a new row.
     *
     * @param {boolean} [insert]
     * Whether to insert the row at the given index, or to overwrite the row.
     *
     * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
     * Custom information for pending events.
     *
     * @emits #afterSetRows
     */
    setRow(row, rowIndex = this.rowCount, insert, eventDetail) {
        const { columns } = this, indexRowCount = insert ? this.rowCount + 1 : rowIndex + 1;
        DataTableCore_objectEach(row, (cellValue, columnId) => {
            let column = columns[columnId] ||
                eventDetail?.addColumns !== false && new Array(indexRowCount);
            if (column) {
                if (insert) {
                    column = splice(column, rowIndex, 0, true, [cellValue]).array;
                }
                else {
                    column[rowIndex] = cellValue;
                }
                columns[columnId] = column;
            }
        });
        if (indexRowCount > this.rowCount) {
            this.applyRowCount(indexRowCount);
        }
        if (!eventDetail?.silent) {
            DataTableCore_fireEvent(this, 'afterSetRows');
            this.versionTag = uniqueKey();
        }
    }
    /**
     * Returns the medified (clone) or the original data table if the modified
     * one does not exist.
     *
     * @return {Highcharts.DataTableCore}
     * The medified (clone) or the original data table.
     */
    getModified() {
        return this.modified || this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Data_DataTableCore = (DataTableCore);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * A typed array.
 * @typedef {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} Highcharts.TypedArray
 * //**
 * A column of values in a data table.
 * @typedef {Array<boolean|null|number|string|undefined>|Highcharts.TypedArray} Highcharts.DataTableColumn
 */ /**
* A collection of data table columns defined by a object where the key is the
* column name and the value is an array of the column values.
* @typedef {Record<string, Highcharts.DataTableColumn>} Highcharts.DataTableColumnCollection
*/
/**
 * Options for the `DataTable` or `DataTableCore` classes.
 * @interface Highcharts.DataTableOptions
 */ /**
* The column options for the data table. The columns are defined by an object
* where the key is the column ID and the value is an array of the column
* values.
*
* @name Highcharts.DataTableOptions.columns
* @type {Highcharts.DataTableColumnCollection|undefined}
*/ /**
* Custom ID to identify the new DataTable instance.
*
* @name Highcharts.DataTableOptions.id
* @type {string|undefined}
*/
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Core/Axis/OrdinalAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




const { addEvent: OrdinalAxis_addEvent, correctFloat: OrdinalAxis_correctFloat, css, defined: OrdinalAxis_defined, error: OrdinalAxis_error, isNumber: OrdinalAxis_isNumber, pick: OrdinalAxis_pick, timeUnits, isString: OrdinalAxis_isString } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/**
 * Extends the axis with ordinal support.
 * @private
 */
var OrdinalAxis;
(function (OrdinalAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends the axis with ordinal support.
     *
     * @private
     *
     * @param AxisClass
     * Axis class to extend.
     *
     * @param ChartClass
     * Chart class to use.
     *
     * @param SeriesClass
     * Series class to use.
     */
    function compose(AxisClass, SeriesClass, ChartClass) {
        const axisProto = AxisClass.prototype;
        if (!axisProto.ordinal2lin) {
            axisProto.getTimeTicks = getTimeTicks;
            axisProto.index2val = index2val;
            axisProto.lin2val = lin2val;
            axisProto.val2lin = val2lin;
            // Record this to prevent overwriting by broken-axis module (#5979)
            axisProto.ordinal2lin = axisProto.val2lin;
            OrdinalAxis_addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            OrdinalAxis_addEvent(AxisClass, 'foundExtremes', onAxisFoundExtremes);
            OrdinalAxis_addEvent(AxisClass, 'afterSetScale', onAxisAfterSetScale);
            OrdinalAxis_addEvent(AxisClass, 'initialAxisTranslation', onAxisInitialAxisTranslation);
            OrdinalAxis_addEvent(ChartClass, 'pan', onChartPan);
            OrdinalAxis_addEvent(ChartClass, 'touchpan', onChartPan);
            OrdinalAxis_addEvent(SeriesClass, 'updatedData', onSeriesUpdatedData);
        }
        return AxisClass;
    }
    OrdinalAxis.compose = compose;
    /**
     * In an ordinal axis, there might be areas with dense concentrations of
     * points, then large gaps between some. Creating equally distributed
     * ticks over this entire range may lead to a huge number of ticks that
     * will later be removed. So instead, break the positions up in
     * segments, find the tick positions for each segment then concatenize
     * them. This method is used from both data grouping logic and X axis
     * tick position logic.
     * @private
     */
    function getTimeTicks(normalizedInterval, min, max, startOfWeek, positions = [], closestDistance = 0, findHigherRanks) {
        const higherRanks = {}, tickPixelIntervalOption = this.options.tickPixelInterval, time = this.chart.time, 
        // Record all the start positions of a segment, to use when
        // deciding what's a gap in the data.
        segmentStarts = [];
        let end, segmentPositions, hasCrossedHigherRank, info, outsideMax, start = 0, groupPositions = [], lastGroupPosition = -Number.MAX_VALUE;
        // The positions are not always defined, for example for ordinal
        // positions when data has regular interval (#1557, #2090)
        if ((!this.options.ordinal && !this.options.breaks) ||
            !positions ||
            positions.length < 3 ||
            typeof min === 'undefined') {
            return time.getTimeTicks.apply(time, arguments);
        }
        // Analyze the positions array to split it into segments on gaps
        // larger than 5 times the closest distance. The closest distance is
        // already found at this point, so we reuse that instead of
        // computing it again.
        const posLength = positions.length;
        for (end = 0; end < posLength; end++) {
            outsideMax = end && positions[end - 1] > max;
            if (positions[end] < min) { // Set the last position before min
                start = end;
            }
            if (end === posLength - 1 ||
                positions[end + 1] - positions[end] > closestDistance * 5 ||
                outsideMax) {
                // For each segment, calculate the tick positions from the
                // getTimeTicks utility function. The interval will be the
                // same regardless of how long the segment is.
                if (positions[end] > lastGroupPosition) { // #1475
                    segmentPositions = time.getTimeTicks(normalizedInterval, positions[start], positions[end], startOfWeek);
                    // Prevent duplicate groups, for example for multiple
                    // segments within one larger time frame (#1475)
                    while (segmentPositions.length &&
                        segmentPositions[0] <= lastGroupPosition) {
                        segmentPositions.shift();
                    }
                    if (segmentPositions.length) {
                        lastGroupPosition =
                            segmentPositions[segmentPositions.length - 1];
                    }
                    segmentStarts.push(groupPositions.length);
                    groupPositions = groupPositions.concat(segmentPositions);
                }
                // Set start of next segment
                start = end + 1;
            }
            if (outsideMax) {
                break;
            }
        }
        // Get the grouping info from the last of the segments. The info is
        // the same for all segments.
        if (segmentPositions) {
            info = segmentPositions.info;
            // Optionally identify ticks with higher rank, for example
            // when the ticks have crossed midnight.
            if (findHigherRanks && info.unitRange <= timeUnits.hour) {
                end = groupPositions.length - 1;
                // Compare points two by two
                for (start = 1; start < end; start++) {
                    if (time.dateFormat('%d', groupPositions[start]) !==
                        time.dateFormat('%d', groupPositions[start - 1])) {
                        higherRanks[groupPositions[start]] = 'day';
                        hasCrossedHigherRank = true;
                    }
                }
                // If the complete array has crossed midnight, we want
                // to mark the first positions also as higher rank
                if (hasCrossedHigherRank) {
                    higherRanks[groupPositions[0]] = 'day';
                }
                info.higherRanks = higherRanks;
            }
            // Save the info
            info.segmentStarts = segmentStarts;
            groupPositions.info = info;
        }
        else {
            OrdinalAxis_error(12, false, this.chart);
        }
        // Don't show ticks within a gap in the ordinal axis, where the
        // space between two points is greater than a portion of the tick
        // pixel interval
        if (findHigherRanks && OrdinalAxis_defined(tickPixelIntervalOption)) {
            const length = groupPositions.length, translatedArr = [], distances = [];
            let itemToRemove, translated, lastTranslated, medianDistance, distance, i = length;
            // Find median pixel distance in order to keep a reasonably even
            // distance between ticks (#748)
            while (i--) {
                translated = this.translate(groupPositions[i]);
                if (lastTranslated) {
                    distances[i] = lastTranslated - translated;
                }
                translatedArr[i] = lastTranslated = translated;
            }
            distances.sort((a, b) => a - b);
            medianDistance = distances[Math.floor(distances.length / 2)];
            if (medianDistance < tickPixelIntervalOption * 0.6) {
                medianDistance = null;
            }
            // Now loop over again and remove ticks where needed
            i = groupPositions[length - 1] > max ? length - 1 : length; // #817
            lastTranslated = void 0;
            while (i--) {
                translated = translatedArr[i];
                distance = Math.abs(lastTranslated - translated);
                // #4175 - when axis is reversed, the distance, is negative but
                // tickPixelIntervalOption positive, so we need to compare the
                // same values
                // Remove ticks that are closer than 0.6 times the pixel
                // interval from the one to the right, but not if it is close to
                // the median distance (#748).
                if (lastTranslated &&
                    distance < tickPixelIntervalOption * 0.8 &&
                    (medianDistance === null || distance < medianDistance * 0.8)) {
                    // Is this a higher ranked position with a normal
                    // position to the right?
                    if (higherRanks[groupPositions[i]] &&
                        !higherRanks[groupPositions[i + 1]]) {
                        // Yes: remove the lower ranked neighbour to the
                        // right
                        itemToRemove = i + 1;
                        lastTranslated = translated; // #709
                    }
                    else {
                        // No: remove this one
                        itemToRemove = i;
                    }
                    groupPositions.splice(itemToRemove, 1);
                }
                else {
                    lastTranslated = translated;
                }
            }
        }
        return groupPositions;
    }
    /**
     * Get axis position of given index of the extended ordinal positions.
     * Used only when panning an ordinal axis.
     *
     * @private
     * @function Highcharts.Axis#index2val
     * @param {number} index
     * The index value of searched point
     */
    function index2val(index) {
        const axis = this, ordinal = axis.ordinal, 
        // Context could be changed to extendedOrdinalPositions.
        ordinalPositions = ordinal.positions;
        // The visible range contains only equally spaced values.
        if (!ordinalPositions) {
            return index;
        }
        let i = ordinalPositions.length - 1, distance;
        if (index < 0) { // Out of range, in effect panning to the left
            index = ordinalPositions[0];
        }
        else if (index > i) { // Out of range, panning to the right
            index = ordinalPositions[i];
        }
        else { // Split it up
            i = Math.floor(index);
            distance = index - i; // The decimal
        }
        if (typeof distance !== 'undefined' &&
            typeof ordinalPositions[i] !== 'undefined') {
            return ordinalPositions[i] + (distance ?
                distance *
                    (ordinalPositions[i + 1] - ordinalPositions[i]) :
                0);
        }
        return index;
    }
    /**
     * Translate from linear (internal) to axis value.
     *
     * @private
     * @function Highcharts.Axis#lin2val
     * @param {number} val
     * The linear abstracted value.
     */
    function lin2val(val) {
        const axis = this, ordinal = axis.ordinal, localMin = axis.old ? axis.old.min : axis.min, localA = axis.old ? axis.old.transA : axis.transA;
        // Always use extendedPositions (#19816)
        const positions = ordinal.getExtendedPositions();
        // In some cases (especially in early stages of the chart creation) the
        // getExtendedPositions might return undefined.
        if (positions?.length) {
            // Convert back from modivied value to pixels. // #15970
            const pixelVal = OrdinalAxis_correctFloat((val - localMin) * localA +
                axis.minPixelPadding), index = OrdinalAxis_correctFloat(ordinal.getIndexOfPoint(pixelVal, positions)), mantissa = OrdinalAxis_correctFloat(index % 1);
            // Check if the index is inside position array. If true,
            // read/approximate value for that exact index.
            if (index >= 0 && index <= positions.length - 1) {
                const leftNeighbour = positions[Math.floor(index)], rightNeighbour = positions[Math.ceil(index)], distance = rightNeighbour - leftNeighbour;
                return positions[Math.floor(index)] + mantissa * distance;
            }
        }
        // If the value is outside positions array, return initial value
        return val; // #16784
    }
    /**
     * Internal function to calculate the precise index in ordinalPositions
     * array.
     * @private
     */
    function getIndexInArray(ordinalPositions, val) {
        const index = OrdinalAxis.Additions.findIndexOf(ordinalPositions, val, true);
        if (ordinalPositions[index] === val) {
            return index;
        }
        const percent = (val - ordinalPositions[index]) /
            (ordinalPositions[index + 1] - ordinalPositions[index]);
        return index + percent;
    }
    /**
    * @private
    */
    function onAxisAfterInit() {
        const axis = this;
        if (!axis.ordinal) {
            axis.ordinal = new OrdinalAxis.Additions(axis);
        }
    }
    /**
     * @private
     */
    function onAxisFoundExtremes() {
        const axis = this, { eventArgs, options } = axis;
        if (axis.isXAxis &&
            OrdinalAxis_defined(options.overscroll) &&
            options.overscroll !== 0 &&
            OrdinalAxis_isNumber(axis.max) &&
            OrdinalAxis_isNumber(axis.min)) {
            if (axis.options.ordinal && !axis.ordinal.originalOrdinalRange) {
                // Calculate the original ordinal range
                axis.ordinal.getExtendedPositions(false);
            }
            if (axis.max === axis.dataMax &&
                (
                // Panning is an exception. We don't want to apply
                // overscroll when panning over the dataMax
                eventArgs?.trigger !== 'pan' ||
                    axis.isInternal) &&
                // Scrollbar buttons are the other execption
                eventArgs?.trigger !== 'navigator') {
                const overscroll = axis.ordinal.convertOverscroll(options.overscroll);
                axis.max += overscroll;
                // Live data and buttons require translation for the min:
                if (!axis.isInternal &&
                    OrdinalAxis_defined(axis.userMin) &&
                    eventArgs?.trigger !== 'mousewheel') {
                    axis.min += overscroll;
                }
            }
        }
    }
    /**
     * For ordinal axis, that loads data async, redraw axis after data is
     * loaded. If we don't do that, axis will have the same extremes as
     * previously, but ordinal positions won't be calculated. See #10290
     * @private
     */
    function onAxisAfterSetScale() {
        const axis = this;
        if (axis.horiz && !axis.isDirty) {
            axis.isDirty = axis.isOrdinal &&
                axis.chart.navigator &&
                !axis.chart.navigator.adaptToUpdatedData;
        }
    }
    /**
     * @private
     */
    function onAxisInitialAxisTranslation() {
        const axis = this;
        if (axis.ordinal) {
            axis.ordinal.beforeSetTickPositions();
            axis.tickInterval = axis.ordinal.postProcessTickInterval(axis.tickInterval);
        }
    }
    /**
     * Extending the Chart.pan method for ordinal axes
     * @private
     */
    function onChartPan(e) {
        const chart = this, xAxis = chart.xAxis[0], overscroll = xAxis.ordinal.convertOverscroll(xAxis.options.overscroll), chartX = e.originalEvent.chartX, panning = chart.options.chart.panning;
        let runBase = false;
        if (panning?.type !== 'y' &&
            xAxis.options.ordinal &&
            xAxis.series.length &&
            // On touch devices, let default function handle the pinching
            (!e.touches || e.touches.length <= 1)) {
            const mouseDownX = chart.mouseDownX, extremes = xAxis.getExtremes(), dataMin = extremes.dataMin, dataMax = extremes.dataMax, min = extremes.min, max = extremes.max, hoverPoints = chart.hoverPoints, closestPointRange = (xAxis.closestPointRange ||
                xAxis.ordinal?.overscrollPointsRange), pointPixelWidth = (xAxis.translationSlope *
                (xAxis.ordinal.slope || closestPointRange)), 
            // How many ordinal units did we move?
            movedUnits = Math.round((mouseDownX - chartX) / pointPixelWidth), 
            // Get index of all the chart's points
            extendedOrdinalPositions = xAxis.ordinal.getExtendedPositions(), extendedAxis = {
                ordinal: {
                    positions: extendedOrdinalPositions,
                    extendedOrdinalPositions: extendedOrdinalPositions
                }
            }, index2val = xAxis.index2val, val2lin = xAxis.val2lin;
            let trimmedRange, ordinalPositions;
            // Make sure panning to the edges does not decrease the zoomed range
            if ((min <= dataMin && movedUnits <= 0) ||
                (max >= dataMax + overscroll && movedUnits >= 0)) {
                e.preventDefault();
                return;
            }
            // We have an ordinal axis, but the data is equally spaced
            if (!extendedAxis.ordinal.positions) {
                runBase = true;
            }
            else if (Math.abs(movedUnits) > 1) {
                // Remove active points for shared tooltip
                if (hoverPoints) {
                    hoverPoints.forEach(function (point) {
                        point.setState();
                    });
                }
                // In grouped data series, the last ordinal position represents
                // the grouped data, which is to the left of the real data max.
                // If we don't compensate for this, we will be allowed to pan
                // grouped data series passed the right of the plot area.
                ordinalPositions = extendedAxis.ordinal.positions;
                if (overscroll) { // #21606
                    ordinalPositions = extendedAxis.ordinal.positions =
                        ordinalPositions.concat(xAxis.ordinal.getOverscrollPositions());
                }
                if (dataMax > ordinalPositions[ordinalPositions.length - 1]) {
                    ordinalPositions.push(dataMax);
                }
                // Get the new min and max values by getting the ordinal index
                // for the current extreme, then add the moved units and
                // translate back to values. This happens on the extended
                // ordinal positions if the new position is out of range, else
                // it happens on the current x axis which is smaller and faster.
                chart.setFixedRange(max - min);
                trimmedRange = xAxis.navigatorAxis
                    .toFixedRange(void 0, void 0, index2val.apply(extendedAxis, [
                    val2lin.apply(extendedAxis, [min, true]) +
                        movedUnits
                ]), index2val.apply(extendedAxis, [
                    val2lin.apply(extendedAxis, [max, true]) +
                        movedUnits
                ]));
                // Apply it if it is within the available data range
                if (trimmedRange.min >= Math.min(ordinalPositions[0], min) &&
                    trimmedRange.max <= Math.max(ordinalPositions[ordinalPositions.length - 1], max) + overscroll) {
                    xAxis.setExtremes(trimmedRange.min, trimmedRange.max, true, false, { trigger: 'pan' });
                }
                chart.mouseDownX = chartX; // Set new reference for next run
                css(chart.container, { cursor: 'move' });
            }
        }
        else {
            runBase = true;
        }
        // Revert to the linear chart.pan version
        if (runBase || (panning && /y/.test(panning.type))) {
            if (overscroll && OrdinalAxis_isNumber(xAxis.dataMax)) {
                xAxis.max = xAxis.dataMax + overscroll;
            }
        }
        else {
            e.preventDefault();
        }
    }
    /**
     * @private
     */
    function onSeriesUpdatedData() {
        const xAxis = this.xAxis;
        // Destroy the extended ordinal index on updated data
        // and destroy extendedOrdinalPositions, #16055.
        if (xAxis?.options.ordinal) {
            delete xAxis.ordinal.index;
            delete xAxis.ordinal.originalOrdinalRange;
        }
    }
    /**
     * Translate from a linear axis value to the corresponding ordinal axis
     * position. If there are no gaps in the ordinal axis this will be the
     * same. The translated value is the value that the point would have if
     * the axis was linear, using the same min and max.
     *
     * @private
     * @function Highcharts.Axis#val2lin
     * @param {number} val
     * The axis value.
     * @param {boolean} [toIndex]
     * Whether to return the index in the ordinalPositions or the new value.
     */
    function val2lin(val, toIndex) {
        const axis = this, ordinal = axis.ordinal, ordinalPositions = ordinal.positions;
        let slope = ordinal.slope, extendedOrdinalPositions;
        if (!ordinalPositions) {
            return val;
        }
        const ordinalLength = ordinalPositions.length;
        let ordinalIndex;
        // If the searched value is inside visible plotArea, ivastigate the
        // value basing on ordinalPositions.
        if (ordinalPositions[0] <= val &&
            ordinalPositions[ordinalLength - 1] >= val) {
            ordinalIndex = getIndexInArray(ordinalPositions, val);
            // Final return value is based on ordinalIndex
        }
        else {
            extendedOrdinalPositions = ordinal.getExtendedPositions?.();
            if (!extendedOrdinalPositions?.length) {
                return val;
            }
            const length = extendedOrdinalPositions.length;
            if (!slope) {
                slope =
                    (extendedOrdinalPositions[length - 1] -
                        extendedOrdinalPositions[0]) /
                        length;
            }
            // `originalPointReference` is equal to the index of first point of
            // ordinalPositions in extendedOrdinalPositions.
            const originalPositionsReference = getIndexInArray(extendedOrdinalPositions, ordinalPositions[0]);
            // If the searched value is outside the visiblePlotArea,
            // check if it is inside extendedOrdinalPositions.
            if (val >= extendedOrdinalPositions[0] &&
                val <=
                    extendedOrdinalPositions[length - 1]) {
                // Return Value
                ordinalIndex = getIndexInArray(extendedOrdinalPositions, val) -
                    originalPositionsReference;
            }
            else {
                if (!toIndex) {
                    // If the value is outside positions array,
                    // return initial value, #16784
                    return val;
                }
                // Since ordinal.slope is the average distance between 2
                // points on visible plotArea, this can be used to calculate
                // the approximate position of the point, which is outside
                // the extendedOrdinalPositions.
                if (val < extendedOrdinalPositions[0]) {
                    const diff = extendedOrdinalPositions[0] - val, approximateIndexOffset = diff / slope;
                    ordinalIndex =
                        -originalPositionsReference -
                            approximateIndexOffset;
                }
                else {
                    const diff = val -
                        extendedOrdinalPositions[length - 1], approximateIndexOffset = diff / slope;
                    ordinalIndex =
                        approximateIndexOffset +
                            length -
                            originalPositionsReference;
                }
            }
        }
        return toIndex ? ordinalIndex : slope * (ordinalIndex || 0) +
            ordinal.offset;
    }
    /* *
     *
     *  Classes
     *
     * */
    /**
     * @private
     */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        /**
         * @private
         */
        constructor(axis) {
            this.index = {};
            this.axis = axis;
        }
        /* *
        *
        *  Functions
        *
        * */
        /**
         * Calculate the ordinal positions before tick positions are calculated.
         * @private
         */
        beforeSetTickPositions() {
            const axis = this.axis, ordinal = axis.ordinal, extremes = axis.getExtremes(), min = extremes.min, max = extremes.max, hasBreaks = axis.brokenAxis?.hasBreaks, isOrdinal = axis.options.ordinal, overscroll = axis.options.overscroll &&
                axis.ordinal.convertOverscroll(axis.options.overscroll) ||
                0;
            let len, uniqueOrdinalPositions, dist, minIndex, maxIndex, slope, i, ordinalPositions = [], overscrollPointsRange = Number.MAX_VALUE, useOrdinal = false, adjustOrdinalExtremesPoints = false, isBoosted = false;
            // Apply the ordinal logic
            if (isOrdinal || hasBreaks) { // #4167 YAxis is never ordinal ?
                let distanceBetweenPoint = 0;
                axis.series.forEach(function (series, i) {
                    const xData = series.getColumn('x', true);
                    uniqueOrdinalPositions = [];
                    // For an axis with multiple series, check if the distance
                    // between points is identical throughout all series.
                    if (i > 0 &&
                        series.options.id !== 'highcharts-navigator-series' &&
                        xData.length > 1) {
                        adjustOrdinalExtremesPoints = (distanceBetweenPoint !== xData[1] - xData[0]);
                    }
                    distanceBetweenPoint = xData[1] - xData[0];
                    if (series.boosted) {
                        isBoosted = series.boosted;
                    }
                    if (series.reserveSpace() &&
                        (series
                            .takeOrdinalPosition !== false || hasBreaks)) {
                        // Concatenate the processed X data into the existing
                        // positions, or the empty array
                        ordinalPositions = ordinalPositions.concat(xData);
                        len = ordinalPositions.length;
                        // Remove duplicates (#1588)
                        ordinalPositions.sort(function (a, b) {
                            // Without a custom function it is sorted as strings
                            return a - b;
                        });
                        overscrollPointsRange = Math.min(overscrollPointsRange, OrdinalAxis_pick(
                        // Check for a single-point series:
                        series.closestPointRange, overscrollPointsRange));
                        if (len) {
                            i = 0;
                            while (i < len - 1) {
                                if (ordinalPositions[i] !==
                                    ordinalPositions[i + 1]) {
                                    uniqueOrdinalPositions.push(ordinalPositions[i + 1]);
                                }
                                i++;
                            }
                            // Check first item:
                            if (uniqueOrdinalPositions[0] !==
                                ordinalPositions[0]) {
                                uniqueOrdinalPositions.unshift(ordinalPositions[0]);
                            }
                            ordinalPositions = uniqueOrdinalPositions;
                        }
                    }
                });
                if (!axis.ordinal.originalOrdinalRange) {
                    // Calculate current originalOrdinalRange
                    axis.ordinal.originalOrdinalRange =
                        (ordinalPositions.length - 1) * overscrollPointsRange;
                }
                // If the distance between points is not identical throughout
                // all series, remove the first and last ordinal position to
                // avoid enabling ordinal logic when it is not needed, #17405.
                // Only for boosted series because changes are negligible.
                if (adjustOrdinalExtremesPoints && isBoosted) {
                    ordinalPositions.pop();
                    ordinalPositions.shift();
                }
                // Cache the length
                len = ordinalPositions.length;
                // Check if we really need the overhead of mapping axis data
                // against the ordinal positions. If the series consist of
                // evenly spaced data any way, we don't need any ordinal logic.
                if (len > 2) { // Two points have equal distance by default
                    dist = ordinalPositions[1] - ordinalPositions[0];
                    i = len - 1;
                    while (i-- && !useOrdinal) {
                        if (ordinalPositions[i + 1] - ordinalPositions[i] !==
                            dist) {
                            useOrdinal = true;
                        }
                    }
                    // When zooming in on a week, prevent axis padding for
                    // weekends even though the data within the week is evenly
                    // spaced.
                    if (!axis.options.keepOrdinalPadding &&
                        (ordinalPositions[0] - min > dist ||
                            max - overscroll - ordinalPositions[len - 1] >
                                dist)) {
                        useOrdinal = true;
                    }
                }
                else if (axis.options.overscroll) {
                    if (len === 2) {
                        // Exactly two points, distance for overscroll is fixed:
                        overscrollPointsRange =
                            ordinalPositions[1] - ordinalPositions[0];
                    }
                    else if (len === 1) {
                        // We have just one point, closest distance is unknown.
                        // Assume then it is last point and overscrolled range:
                        overscrollPointsRange = overscroll;
                        ordinalPositions = [
                            ordinalPositions[0],
                            ordinalPositions[0] + overscrollPointsRange
                        ];
                    }
                    else {
                        // In case of zooming in on overscrolled range, stick to
                        // the old range:
                        overscrollPointsRange = ordinal.overscrollPointsRange;
                    }
                }
                // Record the slope and offset to compute the linear values from
                // the array index. Since the ordinal positions may exceed the
                // current range, get the start and end positions within it
                // (#719, #665b)
                if (useOrdinal || axis.forceOrdinal) {
                    if (axis.options.overscroll) {
                        ordinal.overscrollPointsRange = overscrollPointsRange;
                        ordinalPositions = ordinalPositions.concat(ordinal.getOverscrollPositions());
                    }
                    // Register
                    ordinal.positions = ordinalPositions;
                    // This relies on the ordinalPositions being set. Use
                    // Math.max and Math.min to prevent padding on either sides
                    // of the data.
                    minIndex = axis.ordinal2lin(// #5979
                    Math.max(min, ordinalPositions[0]), true);
                    maxIndex = Math.max(axis.ordinal2lin(Math.min(max, ordinalPositions[ordinalPositions.length - 1]), true), 1); // #3339
                    // Set the slope and offset of the values compared to the
                    // indices in the ordinal positions.
                    ordinal.slope = slope =
                        (max - min) / (maxIndex - minIndex);
                    ordinal.offset = min - (minIndex * slope);
                }
                else {
                    ordinal.overscrollPointsRange = OrdinalAxis_pick(axis.closestPointRange, ordinal.overscrollPointsRange);
                    ordinal.positions = axis.ordinal.slope = ordinal.offset =
                        void 0;
                }
            }
            axis.isOrdinal = isOrdinal && useOrdinal; // #3818, #4196, #4926
            ordinal.groupIntervalFactor = null; // Reset for next run
        }
        /**
         * Faster way of using the Array.indexOf method.
         * Works for sorted arrays only with unique values.
         *
         * @param {Array} sortedArray
         *        The sorted array inside which we are looking for.
         * @param {number} key
         *        The key to being found.
         * @param {boolean} indirectSearch
         *        In case of lack of the point in the array, should return
         *        value be equal to -1 or the closest smaller index.
         *  @private
         */
        static findIndexOf(sortedArray, key, indirectSearch) {
            let start = 0, end = sortedArray.length - 1, middle;
            while (start < end) {
                middle = Math.ceil((start + end) / 2);
                // Key found as the middle element.
                if (sortedArray[middle] <= key) {
                    // Continue searching to the right.
                    start = middle;
                }
                else {
                    // Continue searching to the left.
                    end = middle - 1;
                }
            }
            if (sortedArray[start] === key) {
                return start;
            }
            // Key could not be found.
            return !indirectSearch ? -1 : start;
        }
        /**
         * Get the ordinal positions for the entire data set. This is necessary
         * in chart panning because we need to find out what points or data
         * groups are available outside the visible range. When a panning
         * operation starts, if an index for the given grouping does not exists,
         * it is created and cached. This index is deleted on updated data, so
         * it will be regenerated the next time a panning operation starts.
         * @private
         */
        getExtendedPositions(withOverscroll = true) {
            const ordinal = this, axis = ordinal.axis, axisProto = axis.constructor.prototype, chart = axis.chart, key = axis.series.reduce((k, series) => {
                const grouping = series.currentDataGrouping;
                return (k +
                    (grouping ? grouping.count + grouping.unitName : 'raw'));
            }, ''), overscroll = withOverscroll ?
                axis.ordinal.convertOverscroll(axis.options.overscroll) : 0, extremes = axis.getExtremes();
            let fakeAxis, fakeSeries = void 0, ordinalIndex = ordinal.index;
            // If this is the first time, or the ordinal index is deleted by
            // updatedData,
            // create it.
            if (!ordinalIndex) {
                ordinalIndex = ordinal.index = {};
            }
            if (!ordinalIndex[key]) {
                // Create a fake axis object where the extended ordinal
                // positions are emulated
                fakeAxis = {
                    series: [],
                    chart: chart,
                    forceOrdinal: false,
                    getExtremes: function () {
                        return {
                            min: extremes.dataMin,
                            max: extremes.dataMax + overscroll
                        };
                    },
                    applyGrouping: axisProto.applyGrouping,
                    getGroupPixelWidth: axisProto.getGroupPixelWidth,
                    getTimeTicks: axisProto.getTimeTicks,
                    options: {
                        ordinal: true
                    },
                    ordinal: {
                        getGroupIntervalFactor: this.getGroupIntervalFactor
                    },
                    ordinal2lin: axisProto.ordinal2lin, // #6276
                    getIndexOfPoint: axisProto.getIndexOfPoint,
                    val2lin: axisProto.val2lin // #2590
                };
                fakeAxis.ordinal.axis = fakeAxis;
                // Add the fake series to hold the full data, then apply
                // processData to it
                axis.series.forEach((series) => {
                    if (series.takeOrdinalPosition === false) {
                        return; // #22657
                    }
                    fakeSeries = {
                        xAxis: fakeAxis,
                        chart: chart,
                        groupPixelWidth: series.groupPixelWidth,
                        destroyGroupedData: (external_highcharts_src_js_default_default()).noop,
                        getColumn: series.getColumn,
                        applyGrouping: series.applyGrouping,
                        getProcessedData: series.getProcessedData,
                        reserveSpace: series.reserveSpace,
                        visible: series.visible
                    };
                    const xData = series.getColumn('x').concat(withOverscroll ?
                        ordinal.getOverscrollPositions() :
                        []);
                    fakeSeries.dataTable = new Data_DataTableCore({
                        columns: {
                            x: xData
                        }
                    });
                    fakeSeries.options = {
                        ...series.options,
                        dataGrouping: series.currentDataGrouping ? {
                            firstAnchor: series.options.dataGrouping?.firstAnchor,
                            anchor: series.options.dataGrouping?.anchor,
                            lastAnchor: series.options.dataGrouping?.firstAnchor,
                            enabled: true,
                            forced: true,
                            approximation: 'open',
                            units: [[
                                    series.currentDataGrouping.unitName,
                                    [series.currentDataGrouping.count]
                                ]]
                        } : {
                            enabled: false
                        }
                    };
                    fakeAxis.series.push(fakeSeries);
                    series.processData.apply(fakeSeries);
                });
                fakeAxis.applyGrouping({ hasExtremesChanged: true });
                // Force to use the ordinal when points are evenly spaced (e.g.
                // weeks), #3825.
                if ((fakeSeries?.closestPointRange !==
                    fakeSeries?.basePointRange) &&
                    fakeSeries.currentDataGrouping) {
                    fakeAxis.forceOrdinal = true;
                }
                // Run beforeSetTickPositions to compute the ordinalPositions
                axis.ordinal.beforeSetTickPositions.apply({ axis: fakeAxis });
                if (!axis.ordinal.originalOrdinalRange &&
                    fakeAxis.ordinal.originalOrdinalRange) {
                    axis.ordinal.originalOrdinalRange =
                        fakeAxis.ordinal.originalOrdinalRange;
                }
                // Cache it
                if (fakeAxis.ordinal.positions) {
                    ordinalIndex[key] = fakeAxis.ordinal.positions;
                }
            }
            return ordinalIndex[key];
        }
        /**
         * Find the factor to estimate how wide the plot area would have been if
         * ordinal gaps were included. This value is used to compute an imagined
         * plot width in order to establish the data grouping interval.
         *
         * A real world case is the intraday-candlestick example. Without this
         * logic, it would show the correct data grouping when viewing a range
         * within each day, but once moving the range to include the gap between
         * two days, the interval would include the cut-away night hours and the
         * data grouping would be wrong. So the below method tries to compensate
         * by identifying the most common point interval, in this case days.
         *
         * An opposite case is presented in issue #718. We have a long array of
         * daily data, then one point is appended one hour after the last point.
         * We expect the data grouping not to change.
         *
         * In the future, if we find cases where this estimation doesn't work
         * optimally, we might need to add a second pass to the data grouping
         * logic, where we do another run with a greater interval if the number
         * of data groups is more than a certain fraction of the desired group
         * count.
         * @private
         */
        getGroupIntervalFactor(xMin, xMax, series) {
            const ordinal = this, processedXData = series.getColumn('x', true), len = processedXData.length, distances = [];
            let median, i, groupIntervalFactor = ordinal.groupIntervalFactor;
            // Only do this computation for the first series, let the other
            // inherit it (#2416)
            if (!groupIntervalFactor) {
                // Register all the distances in an array
                for (i = 0; i < len - 1; i++) {
                    distances[i] = (processedXData[i + 1] -
                        processedXData[i]);
                }
                // Sort them and find the median
                distances.sort(function (a, b) {
                    return a - b;
                });
                median = distances[Math.floor(len / 2)];
                // Compensate for series that don't extend through the entire
                // axis extent. #1675.
                xMin = Math.max(xMin, processedXData[0]);
                xMax = Math.min(xMax, processedXData[len - 1]);
                ordinal.groupIntervalFactor = groupIntervalFactor =
                    (len * median) / (xMax - xMin);
            }
            // Return the factor needed for data grouping
            return groupIntervalFactor;
        }
        /**
         * Get index of point inside the ordinal positions array.
         *
         * @private
         * @param {number} pixelVal
         * The pixel value of a point.
         *
         * @param {Array<number>} [ordinalArray]
         * An array of all points available on the axis for the given data set.
         * Either ordinalPositions if the value is inside the plotArea or
         * extendedOrdinalPositions if not.
         */
        getIndexOfPoint(pixelVal, ordinalArray) {
            const ordinal = this, axis = ordinal.axis, min = axis.min, minX = axis.minPixelPadding, indexOfMin = getIndexInArray(ordinalArray, min);
            const ordinalPointPixelInterval = axis.translationSlope *
                (ordinal.slope ||
                    axis.closestPointRange ||
                    ordinal.overscrollPointsRange);
            const shiftIndex = OrdinalAxis_correctFloat((pixelVal - minX) / ordinalPointPixelInterval);
            return indexOfMin + shiftIndex;
        }
        /**
         * Get ticks for an ordinal axis within a range where points don't
         * exist. It is required when overscroll is enabled. We can't base on
         * points, because we may not have any, so we use approximated
         * pointRange and generate these ticks between Axis.dataMax,
         * Axis.dataMax + Axis.overscroll evenly spaced. Used in panning and
         * navigator scrolling.
         * @private
         */
        getOverscrollPositions() {
            const ordinal = this, axis = ordinal.axis, extraRange = ordinal.convertOverscroll(axis.options.overscroll), distance = ordinal.overscrollPointsRange, positions = [];
            let max = axis.dataMax;
            if (OrdinalAxis_defined(distance)) {
                // Max + pointRange because we need to scroll to the last
                while (max < axis.dataMax + extraRange) {
                    max += distance;
                    positions.push(max);
                }
            }
            return positions;
        }
        /**
         * Make the tick intervals closer because the ordinal gaps make the
         * ticks spread out or cluster.
         * @private
         */
        postProcessTickInterval(tickInterval) {
            // Problem: https://jsfiddle.net/highcharts/FQm4E/1/. This is a case
            // where this algorithm doesn't work optimally. In this case, the
            // tick labels are spread out per week, but all the gaps reside
            // within weeks. So we have a situation where the labels are courser
            // than the ordinal gaps, and thus the tick interval should not be
            // altered.
            const ordinal = this, axis = ordinal.axis, ordinalSlope = ordinal.slope, closestPointRange = axis.closestPointRange;
            let ret;
            if (ordinalSlope && closestPointRange) {
                if (!axis.options.breaks) {
                    ret = (tickInterval /
                        (ordinalSlope / closestPointRange));
                }
                else {
                    ret = closestPointRange || tickInterval; // #7275
                }
            }
            else {
                ret = tickInterval;
            }
            return ret;
        }
        /**
         * If overscroll is pixel or percentage value, convert it to axis range.
         *
         * @private
         * @param {number | string} overscroll
         * Overscroll value in axis range, pixels or percentage value.
         * @return {number}
         * Overscroll value in axis range.
         */
        convertOverscroll(overscroll = 0) {
            const ordinal = this, axis = ordinal.axis, calculateOverscroll = function (overscrollPercentage) {
                return OrdinalAxis_pick(ordinal.originalOrdinalRange, OrdinalAxis_defined(axis.dataMax) && OrdinalAxis_defined(axis.dataMin) ?
                    axis.dataMax - axis.dataMin : 0) * overscrollPercentage;
            };
            if (OrdinalAxis_isString(overscroll)) {
                const overscrollValue = parseInt(overscroll, 10);
                let isFullRange;
                // #22334
                if (OrdinalAxis_defined(axis.min) && OrdinalAxis_defined(axis.max) &&
                    OrdinalAxis_defined(axis.dataMin) && OrdinalAxis_defined(axis.dataMax)) {
                    isFullRange =
                        axis.max - axis.min === axis.dataMax - axis.dataMin;
                    if (!isFullRange) {
                        this.originalOrdinalRange = axis.max - axis.min;
                    }
                }
                if (/%$/.test(overscroll)) {
                    // If overscroll is percentage
                    return calculateOverscroll(overscrollValue / 100);
                }
                if (/px/.test(overscroll)) {
                    // If overscroll is pixels, it is limited to 90% of the axis
                    // length to prevent division by zero
                    const limitedOverscrollValue = Math.min(overscrollValue, axis.len * 0.9), pixelToPercent = limitedOverscrollValue / axis.len;
                    return calculateOverscroll(pixelToPercent /
                        (isFullRange ? (1 - pixelToPercent) : 1));
                }
                // If overscroll is a string but not pixels or percentage,
                // return 0 as no overscroll
                return 0;
            }
            return overscroll;
        }
    }
    OrdinalAxis.Additions = Additions;
})(OrdinalAxis || (OrdinalAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_OrdinalAxis = (OrdinalAxis);

;// external ["../modules/accessibility.src.js","default","RangeSelector"]
const accessibility_src_js_default_RangeSelector_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_59783372__["default"].RangeSelector;
var accessibility_src_js_default_RangeSelector_default = /*#__PURE__*/__webpack_require__.n(accessibility_src_js_default_RangeSelector_namespaceObject);
;// external ["../modules/accessibility.src.js","default","Scrollbar"]
const accessibility_src_js_default_Scrollbar_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_accessibility_src_js_59783372__["default"].Scrollbar;
var accessibility_src_js_default_Scrollbar_default = /*#__PURE__*/__webpack_require__.n(accessibility_src_js_default_Scrollbar_namespaceObject);
;// external ["../highcharts.src.js","default","Templating"]
const external_highcharts_src_js_default_Templating_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Templating;
var external_highcharts_src_js_default_Templating_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Templating_namespaceObject);
;// ./code/es-modules/Stock/Navigator/NavigatorDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { parse: NavigatorDefaults_color } = (external_highcharts_src_js_default_Color_default());

const { seriesTypes } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * The navigator is a small series below the main series, displaying
 * a view of the entire data set. It provides tools to zoom in and
 * out on parts of the data as well as panning across the dataset.
 *
 * @product      highstock gantt
 * @optionparent navigator
 */
const NavigatorDefaults = {
    /**
     * Whether the navigator and scrollbar should adapt to updated data
     * in the base X axis. When loading data async, as in the demo below,
     * this should be `false`. Otherwise new data will trigger navigator
     * redraw, which will cause unwanted looping. In the demo below, the
     * data in the navigator is set only once. On navigating, only the main
     * chart content is updated.
     *
     * @sample {highstock} stock/demo/lazy-loading/
     *         Set to false with async data loading
     *
     * @type      {boolean}
     * @default   true
     * @apioption navigator.adaptToUpdatedData
     */
    /**
     * An integer identifying the index to use for the base series, or a
     * string representing the id of the series.
     *
     * **Note**: As of Highcharts 5.0, this is now a deprecated option.
     * Prefer [series.showInNavigator](#plotOptions.series.showInNavigator).
     *
     * @see [series.showInNavigator](#plotOptions.series.showInNavigator)
     *
     * @deprecated
     * @type      {number|string}
     * @default   0
     * @apioption navigator.baseSeries
     */
    /**
     * Enable or disable the navigator.
     *
     * @sample {highstock} stock/navigator/enabled/
     *         Disable the navigator
     *
     * @type      {boolean}
     * @default   true
     * @apioption navigator.enabled
     */
    /**
     * When the chart is inverted, whether to draw the navigator on the
     * opposite side.
     *
     * @type      {boolean}
     * @default   false
     * @since     5.0.8
     * @apioption navigator.opposite
     */
    /**
     * The height of the navigator.
     *
     * @sample {highstock} stock/navigator/height/
     *         A higher navigator
     */
    height: 40,
    /**
     * The distance from the nearest element, the X axis or X axis labels.
     *
     * @sample {highstock} stock/navigator/margin/
     *         A margin of 2 draws the navigator closer to the X axis labels
     */
    margin: 22,
    /**
     * Whether the mask should be inside the range marking the zoomed
     * range, or outside. In Highcharts Stock 1.x it was always `false`.
     *
     * @sample {highstock} stock/demo/maskinside-false/
     *         False, mask outside
     *
     * @since   2.0
     */
    maskInside: true,
    /**
     * Options for the handles for dragging the zoomed area.
     *
     * @sample {highstock} stock/navigator/handles/
     *         Colored handles
     */
    handles: {
        /**
         * Width for handles.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since   6.0.0
         */
        width: 7,
        /**
         * Border radius of the handles.
         *
         * @sample {highstock} stock/navigator/handles-border-radius/
         *      Border radius on the navigator handles.
         *
         * @since 11.4.2
         */
        borderRadius: 0,
        /**
         * Height for handles.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since   6.0.0
         */
        height: 15,
        /**
         * Array to define shapes of handles. 0-index for left, 1-index for
         * right.
         *
         * Additionally, the URL to a graphic can be given on this form:
         * `url(graphic.png)`. Note that for the image to be applied to
         * exported charts, its URL needs to be accessible by the export
         * server.
         *
         * Custom callbacks for symbol path generation can also be added to
         * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
         * used by its method name, as shown in the demo.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @type    {Array<string>}
         * @default ["navigator-handle", "navigator-handle"]
         * @since   6.0.0
         */
        symbols: ['navigator-handle', 'navigator-handle'],
        /**
         * Allows to enable/disable handles.
         *
         * @since   6.0.0
         */
        enabled: true,
        /**
         * The width for the handle border and the stripes inside.
         *
         * @sample {highstock} stock/navigator/styled-handles/
         *         Styled handles
         *
         * @since     6.0.0
         * @apioption navigator.handles.lineWidth
         */
        lineWidth: 1,
        /**
         * The fill for the handle.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        backgroundColor: "#f2f2f2" /* Palette.neutralColor5 */,
        /**
         * The stroke for the handle border and the stripes inside.
         *
         * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        borderColor: "#999999" /* Palette.neutralColor40 */
    },
    /**
     * The color of the mask covering the areas of the navigator series
     * that are currently not visible in the main series. The default
     * color is bluish with an opacity of 0.3 to see the series below.
     *
     * @see In styled mode, the mask is styled with the
     *      `.highcharts-navigator-mask` and
     *      `.highcharts-navigator-mask-inside` classes.
     *
     * @sample {highstock} stock/navigator/maskfill/
     *         Blue, semi transparent mask
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default rgba(102,133,194,0.3)
     */
    maskFill: NavigatorDefaults_color("#667aff" /* Palette.highlightColor60 */).setOpacity(0.3).get(),
    /**
     * The color of the line marking the currently zoomed area in the
     * navigator.
     *
     * @sample {highstock} stock/navigator/outline/
     *         2px blue outline
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default #cccccc
     */
    outlineColor: "#999999" /* Palette.neutralColor40 */,
    /**
     * The width of the line marking the currently zoomed area in the
     * navigator.
     *
     * @see In styled mode, the outline stroke width is set with the
     *      `.highcharts-navigator-outline` class.
     *
     * @sample {highstock} stock/navigator/outline/
     *         2px blue outline
     *
     * @type    {number}
     */
    outlineWidth: 1,
    /**
     * Options for the navigator series. Available options are the same
     * as any series, documented at [plotOptions](#plotOptions.series)
     * and [series](#series).
     *
     * Unless data is explicitly defined on navigator.series, the data
     * is borrowed from the first series in the chart.
     *
     * Default series options for the navigator series are:
     * ```js
     * series: {
     *     type: 'areaspline',
     *     fillOpacity: 0.05,
     *     dataGrouping: {
     *         smoothed: true
     *     },
     *     lineWidth: 1,
     *     marker: {
     *         enabled: false
     *     }
     * }
     * ```
     *
     * @see In styled mode, the navigator series is styled with the
     *      `.highcharts-navigator-series` class.
     *
     * @sample {highstock} stock/navigator/series-data/
     *         Using a separate data set for the navigator
     * @sample {highstock} stock/navigator/series/
     *         A green navigator series
     *
     * @type {*|Array<*>|Highcharts.SeriesOptionsType|Array<Highcharts.SeriesOptionsType>}
     */
    series: {
        /**
         * The type of the navigator series.
         *
         * Heads up:
         * In column-type navigator, zooming is limited to at least one
         * point with its `pointRange`.
         *
         * @sample {highstock} stock/navigator/column/
         *         Column type navigator
         *
         * @type    {string}
         * @default {highstock} `areaspline` if defined, otherwise `line`
         * @default {gantt} gantt
         */
        type: (typeof seriesTypes.areaspline === 'undefined' ?
            'line' :
            'areaspline'),
        /**
         * The fill opacity of the navigator series.
         */
        fillOpacity: 0.05,
        /**
         * The pixel line width of the navigator series.
         */
        lineWidth: 1,
        /**
         * @ignore-option
         */
        compare: null,
        /**
         * @ignore-option
         */
        sonification: {
            enabled: false
        },
        /**
         * Unless data is explicitly defined, the data is borrowed from the
         * first series in the chart.
         *
         * @type      {Array<number|Array<number|string|null>|object|null>}
         * @product   highstock
         * @apioption navigator.series.data
         */
        /**
         * Data grouping options for the navigator series.
         *
         * @extends plotOptions.series.dataGrouping
         */
        dataGrouping: {
            approximation: 'average',
            enabled: true,
            groupPixelWidth: 2,
            // Replace smoothed property by anchors, #12455.
            firstAnchor: 'firstPoint',
            anchor: 'middle',
            lastAnchor: 'lastPoint',
            // Day and week differs from plotOptions.series.dataGrouping
            units: [
                ['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ['second', [1, 2, 5, 10, 15, 30]],
                ['minute', [1, 2, 5, 10, 15, 30]],
                ['hour', [1, 2, 3, 4, 6, 8, 12]],
                ['day', [1, 2, 3, 4]],
                ['week', [1, 2, 3]],
                ['month', [1, 3, 6]],
                ['year', null]
            ]
        },
        /**
         * Data label options for the navigator series. Data labels are
         * disabled by default on the navigator series.
         *
         * @extends plotOptions.series.dataLabels
         */
        dataLabels: {
            enabled: false,
            zIndex: 2 // #1839
        },
        id: 'highcharts-navigator-series',
        className: 'highcharts-navigator-series',
        /**
         * Sets the fill color of the navigator series.
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption navigator.series.color
         */
        /**
         * Line color for the navigator series. Allows setting the color
         * while disallowing the default candlestick setting.
         *
         * @type {Highcharts.ColorString|null}
         */
        lineColor: null, // #4602
        marker: {
            enabled: false
        },
        /**
         * Since Highcharts Stock v8, default value is the same as default
         * `pointRange` defined for a specific type (e.g. `null` for
         * column type).
         *
         * In Highcharts Stock version < 8, defaults to 0.
         *
         * @extends plotOptions.series.pointRange
         * @type {number|null}
         * @apioption navigator.series.pointRange
         */
        /**
         * The threshold option. Setting it to 0 will make the default
         * navigator area series draw its area from the 0 value and up.
         *
         * @type {number|null}
         */
        threshold: null
    },
    /**
     * Enable or disable navigator sticking to right, while adding new
     * points. If `undefined`, the navigator sticks to the axis maximum only
     * if it was already at the maximum prior to adding points.
     *
     * @type      {boolean}
     * @default   undefined
     * @since 10.2.1
     * @sample {highstock} stock/navigator/sticktomax-false/
     * stickToMax set to false
     * @apioption navigator.stickToMax
     */
    /**
     * Options for the navigator X axis. Default series options for the
     * navigator xAxis are:
     * ```js
     * xAxis: {
     *     tickWidth: 0,
     *     lineWidth: 0,
     *     gridLineWidth: 1,
     *     tickPixelInterval: 200,
     *     labels: {
     *            align: 'left',
     *         style: {
     *             color: '#888'
     *         },
     *         x: 3,
     *         y: -4
     *     }
     * }
     * ```
     *
     * @extends   xAxis
     * @excluding linkedTo, maxZoom, minRange, opposite, range, scrollbar,
     *            showEmpty, maxRange
     */
    xAxis: {
        /**
         * Additional range on the right side of the xAxis. Works similar to
         * `xAxis.maxPadding`, but the value is set in terms of axis values,
         * percentage or pixels.
         *
         * If it's a number, it is interpreted as axis values, which in a
         * datetime axis equals milliseconds.
         *
         * If it's a percentage string, is interpreted as percentages of the
         * axis length. An overscroll of 50% will make a 100px axis 50px longer.
         *
         * If it's a pixel string, it is interpreted as a fixed pixel value, but
         * limited to 90% of the axis length.
         *
         * If it's undefined, the value is inherited from `xAxis.overscroll`.
         *
         * Can be set for both, main xAxis and navigator's xAxis.
         *
         * @type    {number | string | undefined}
         * @since   6.0.0
         * @apioption navigator.xAxis.overscroll
         */
        className: 'highcharts-navigator-xaxis',
        tickLength: 0,
        lineWidth: 0,
        gridLineColor: "#e6e6e6" /* Palette.neutralColor10 */,
        id: 'navigator-x-axis',
        gridLineWidth: 1,
        tickPixelInterval: 200,
        labels: {
            align: 'left',
            /**
             * @type {Highcharts.CSSObject}
             */
            style: {
                /** @ignore */
                color: "#000000" /* Palette.neutralColor100 */,
                /** @ignore */
                fontSize: '0.7em',
                /** @ignore */
                opacity: 0.6,
                /** @ignore */
                textOutline: '2px contrast'
            },
            x: 3,
            y: -4
        },
        crosshair: false
    },
    /**
     * Options for the navigator Y axis. Default series options for the
     * navigator yAxis are:
     * ```js
     * yAxis: {
     *     gridLineWidth: 0,
     *     startOnTick: false,
     *     endOnTick: false,
     *     minPadding: 0.1,
     *     maxPadding: 0.1,
     *     labels: {
     *         enabled: false
     *     },
     *     title: {
     *         text: null
     *     },
     *     tickWidth: 0
     * }
     * ```
     *
     * @extends   yAxis
     * @excluding height, linkedTo, maxZoom, minRange, ordinal, range,
     *            showEmpty, scrollbar, top, units, maxRange, minLength,
     *            maxLength, resize
     */
    yAxis: {
        className: 'highcharts-navigator-yaxis',
        gridLineWidth: 0,
        startOnTick: false,
        endOnTick: false,
        minPadding: 0.1,
        id: 'navigator-y-axis',
        maxPadding: 0.1,
        labels: {
            enabled: false
        },
        crosshair: false,
        title: {
            text: void 0
        },
        tickLength: 0,
        tickWidth: 0
    }
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Navigator_NavigatorDefaults = (NavigatorDefaults);
/* *
 *
 *  API Options
 *
 * */
/**
 * Maximum range which can be set using the navigator's handles.
 * Opposite of [xAxis.minRange](#xAxis.minRange).
 *
 * @sample {highstock} stock/navigator/maxrange/
 *         Defined max and min range
 *
 * @type      {number}
 * @since     6.0.0
 * @product   highstock gantt
 * @apioption xAxis.maxRange
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/Stock/RangeSelector/RangeSelectorDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Declarations
 *
 * */
/**
 * An object containing language-related strings and settings. A typical setup
 * uses `Highcharts.setOptions` to make the options apply to all charts in the
 * same page.
 *
 * ```js
 * Highcharts.setOptions({
 *     lang: {
 *         locale: 'fr'
 *     }
 * });
 * ```
 *
 * @optionparent lang
 */
const lang = {
    /**
     * The text for the label for the range selector buttons.
     *
     * @product highstock gantt
     */
    rangeSelectorZoom: 'Zoom',
    /**
     * The text for the label for the "from" input box in the range
     * selector. Since v9.0, this string is empty as the label is not
     * rendered by default.
     *
     * @product highstock gantt
     */
    rangeSelectorFrom: '',
    /**
     * The text for the label for the "to" input box in the range selector.
     *
     * @product highstock gantt
     */
    rangeSelectorTo: '→',
    /**
     * The default text for the rangeselector buttons.
     *
     * @since 12.2.0
     */
    rangeSelector: {
        allText: 'All',
        allTitle: 'View all',
        monthText: '{count}m',
        monthTitle: 'View {count} {#eq count 1}month{else}months{/eq}',
        yearText: '{count}y',
        yearTitle: 'View {count} {#eq count 1}year{else}years{/eq}',
        ytdText: 'YTD',
        ytdTitle: 'View year to date'
    }
};
/**
 * The range selector is a tool for selecting ranges to display within
 * the chart. It provides buttons to select preconfigured ranges in
 * the chart, like 1 day, 1 week, 1 month etc. It also provides input
 * boxes where min and max dates can be manually input.
 *
 * @product      highstock gantt
 * @optionparent rangeSelector
 */
const rangeSelector = {
    /**
     * Whether to enable all buttons from the start. By default buttons are
     * only enabled if the corresponding time range exists on the X axis,
     * but enabling all buttons allows for dynamically loading different
     * time ranges.
     *
     * @sample {highstock} stock/rangeselector/allbuttonsenabled-true/
     *         All buttons enabled
     *
     * @since     2.0.3
     */
    allButtonsEnabled: false,
    /**
     * An array of configuration objects for the buttons.
     *
     * Defaults to:
     * ```js
     * buttons: [{
     *     type: 'month',
     *     count: 1,
     *     text: '1m',
     *     title: 'View 1 month'
     * }, {
     *     type: 'month',
     *     count: 3,
     *     text: '3m',
     *     title: 'View 3 months'
     * }, {
     *     type: 'month',
     *     count: 6,
     *     text: '6m',
     *     title: 'View 6 months'
     * }, {
     *     type: 'ytd',
     *     text: 'YTD',
     *     title: 'View year to date'
     * }, {
     *     type: 'year',
     *     count: 1,
     *     text: '1y',
     *     title: 'View 1 year'
     * }, {
     *     type: 'all',
     *     text: 'All',
     *     title: 'View all'
     * }]
     * ```
     *
     * @sample {highstock} stock/demo/rangeselector-datagrouping/
     *         Data grouping by buttons
     *
     * @type      {Array<*>}
     */
    buttons: [{
            type: 'month',
            count: 1
        }, {
            type: 'month',
            count: 3
        }, {
            type: 'month',
            count: 6
        }, {
            type: 'ytd'
        }, {
            type: 'year',
            count: 1
        }, {
            type: 'all'
        }],
    /**
     * How many units of the defined type the button should span. If `type`
     * is "month" and `count` is 3, the button spans three months.
     *
     * @type      {number}
     * @default   1
     * @apioption rangeSelector.buttons.count
     */
    /**
     * Fires when clicking on the rangeSelector button. One parameter,
     * event, is passed to the function, containing common event
     * information.
     *
     * ```js
     * click: function(e) {
     *   console.log(this);
     * }
     * ```
     *
     * Return false to stop default button's click action.
     *
     * @sample {highstock} stock/rangeselector/button-click/
     *         Click event on the button
     *
     * @type      {Highcharts.RangeSelectorClickCallbackFunction}
     * @apioption rangeSelector.buttons.events.click
     */
    /**
     * Additional range (in milliseconds) added to the end of the calculated
     * time span.
     *
     * @sample {highstock} stock/rangeselector/min-max-offsets/
     *         Button offsets
     *
     * @type      {number}
     * @default   0
     * @since     6.0.0
     * @apioption rangeSelector.buttons.offsetMax
     */
    /**
     * Additional range (in milliseconds) added to the start of the
     * calculated time span.
     *
     * @sample {highstock} stock/rangeselector/min-max-offsets/
     *         Button offsets
     *
     * @type      {number}
     * @default   0
     * @since     6.0.0
     * @apioption rangeSelector.buttons.offsetMin
     */
    /**
     * When buttons apply dataGrouping on a series, by default zooming
     * in/out will deselect buttons and unset dataGrouping. Enable this
     * option to keep buttons selected when extremes change.
     *
     * @sample {highstock} stock/rangeselector/preserve-datagrouping/
     *         Different preserveDataGrouping settings
     *
     * @type      {boolean}
     * @default   false
     * @since     6.1.2
     * @apioption rangeSelector.buttons.preserveDataGrouping
     */
    /**
     * A custom data grouping object for each button.
     *
     * @see [series.dataGrouping](#plotOptions.series.dataGrouping)
     *
     * @sample {highstock} stock/demo/rangeselector-datagrouping/
     *         Data grouping by range selector buttons
     *
     * @type      {*}
     * @extends   plotOptions.series.dataGrouping
     * @apioption rangeSelector.buttons.dataGrouping
     */
    /**
     * The text for the button itself.
     *
     * @type      {string}
     * @apioption rangeSelector.buttons.text
     */
    /**
     * Explanation for the button, shown as a tooltip on hover, and used by
     * assistive technology.
     *
     * @type      {string}
     * @apioption rangeSelector.buttons.title
     */
    /**
     * Defined the time span for the button. Can be one of `millisecond`,
     * `second`, `minute`, `hour`, `day`, `week`, `month`, `year`, `ytd`,
     * and `all`.
     *
     * @type       {Highcharts.RangeSelectorButtonTypeValue}
     * @apioption  rangeSelector.buttons.type
     */
    /**
     * The space in pixels between the buttons in the range selector.
     */
    buttonSpacing: 5,
    /**
     * Whether to collapse the range selector buttons into a dropdown when
     * there is not enough room to show everything in a single row, instead
     * of dividing the range selector into multiple rows.
     * Can be one of the following:
     *  - `always`: Always collapse
     *  - `responsive`: Only collapse when there is not enough room
     *  - `never`: Never collapse
     *
     * @sample {highstock} stock/rangeselector/dropdown/
     *         Dropdown option
     *
     * @validvalue ["always", "responsive", "never"]
     * @since 9.0.0
     */
    dropdown: 'responsive',
    /**
     * Enable or disable the range selector. Default to `true` for stock
     * charts, using the `stockChart` factory.
     *
     * @sample {highstock} stock/rangeselector/enabled/
     *         Disable the range selector
     *
     * @type {boolean|undefined}
     * @default {highstock} true
     */
    enabled: void 0,
    /**
     * The vertical alignment of the rangeselector box. Allowed properties
     * are `top`, `middle`, `bottom`.
     *
     * @sample {highstock} stock/rangeselector/vertical-align-middle/
     *         Middle
     * @sample {highstock} stock/rangeselector/vertical-align-bottom/
     *         Bottom
     *
     * @type  {Highcharts.VerticalAlignValue}
     * @since 6.0.0
     */
    verticalAlign: 'top',
    /**
     * A collection of attributes for the buttons. The object takes SVG
     * attributes like `fill`, `stroke`, `stroke-width`, as well as `style`,
     * a collection of CSS properties for the text.
     *
     * The object can also be extended with states, so you can set
     * presentational options for `hover`, `select` or `disabled` button
     * states.
     *
     * CSS styles for the text label.
     *
     * In styled mode, the buttons are styled by the
     * `.highcharts-range-selector-buttons .highcharts-button` rule with its
     * different states.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type {Highcharts.SVGAttributes}
     */
    buttonTheme: {
        /** @ignore */
        width: 28,
        /** @ignore */
        height: 18,
        /** @ignore */
        padding: 2,
        /** @ignore */
        zIndex: 7 // #484, #852
    },
    /**
     * When the rangeselector is floating, the plot area does not reserve
     * space for it. This opens for positioning anywhere on the chart.
     *
     * @sample {highstock} stock/rangeselector/floating/
     *         Placing the range selector between the plot area and the
     *         navigator
     *
     * @since 6.0.0
     */
    floating: false,
    /**
     * The x offset of the range selector relative to its horizontal
     * alignment within `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @since 6.0.0
     */
    x: 0,
    /**
     * The y offset of the range selector relative to its horizontal
     * alignment within `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @since 6.0.0
     */
    y: 0,
    /**
     * Deprecated. The height of the range selector. Currently it is
     * calculated dynamically.
     *
     * @deprecated
     * @type  {number|undefined}
     * @since 2.1.9
     */
    height: void 0, // Reserved space for buttons and input
    /**
     * The border color of the date input boxes.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type      {Highcharts.ColorString}
     * @since     1.3.7
     */
    inputBoxBorderColor: 'none',
    /**
     * The pixel height of the date input boxes.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @since     1.3.7
     */
    inputBoxHeight: 17,
    /**
     * The pixel width of the date input boxes. When `undefined`, the width
     * is fitted to the rendered content.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type   {number|undefined}
     * @since  1.3.7
     */
    inputBoxWidth: void 0,
    /**
     * The date format in the input boxes when not selected for editing.
     * Defaults to `%e %b %Y`.
     *
     * This is used to determine which type of input to show,
     * `datetime-local`, `date` or `time` and falling back to `text` when
     * the browser does not support the input type or the format contains
     * milliseconds.
     *
     * @sample {highstock} stock/rangeselector/input-type/
     *         Input types
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     */
    inputDateFormat: '%[ebY]',
    /**
     * A custom callback function to parse values entered in the input boxes and
     * return a valid JavaScript time as milliseconds since 1970. The first
     * argument passed is the value to parse, second is a boolean indicating use
     * of UTC time. The third is a reference to the `time` object. Time zone can
     * be read from `time.timezone`.
     *
     * This will only get called for inputs of type `text`. Since v8.2.3, the
     * input type is dynamically determined based on the granularity of the
     * `inputDateFormat` and the browser support.
     *
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     * @type      {Highcharts.RangeSelectorParseCallbackFunction}
     * @since     1.3.3
     */
    inputDateParser: void 0,
    /**
     * The date format in the input boxes when they are selected for
     * editing. This must be a format that is recognized by JavaScript
     * Date.parse.
     *
     * This will only be used for inputs of type `text`. Since v8.2.3,
     * the input type is dynamically determined based on the granularity
     * of the `inputDateFormat` and the browser support.
     *
     * @sample {highstock} stock/rangeselector/input-format/
     *         Milliseconds in the range selector
     *
     */
    inputEditDateFormat: '%Y-%m-%d',
    /**
     * Enable or disable the date input boxes.
     */
    inputEnabled: true,
    /**
     * Positioning for the input boxes. Allowed properties are `align`,
     *  `x` and `y`.
     *
     * @since 1.2.4
     */
    inputPosition: {
        /**
         * The alignment of the input box. Allowed properties are `left`,
         * `center`, `right`.
         *
         * @sample {highstock} stock/rangeselector/input-button-opposite-alignment/
         *         Opposite alignment
         *
         * @sample {highstock} stock/rangeselector/input-button-same-alignment/
         *         Same alignment for buttons and input
         *
         * @type  {Highcharts.AlignValue}
         * @since 6.0.0
         */
        align: 'right',
        /**
         * X offset of the input row.
         */
        x: 0,
        /**
         * Y offset of the input row.
         */
        y: 0
    },
    /**
     * The space in pixels between the labels and the date input boxes in
     * the range selector.
     *
     * @since 9.0.0
     */
    inputSpacing: 5,
    /**
     * The index of the button to appear pre-selected. If the selected range
     * exceeds the total data range and the 'all' option is available,
     * the 'all' option, showing the full range, is automatically selected.
     *
     * @type      {number}
     */
    selected: void 0,
    /**
     * Positioning for the button row.
     *
     * @since 1.2.4
     */
    buttonPosition: {
        /**
         * The alignment of the input box. Allowed properties are `left`,
         * `center`, `right`.
         *
         * @sample {highstock} stock/rangeselector/input-button-opposite-alignment/
         *         Opposite alignment
         *
         * @sample {highstock} stock/rangeselector/input-button-same-alignment/
         *         Same alignment for buttons and input
         *
         * @type  {Highcharts.AlignValue}
         * @since 6.0.0
         */
        align: 'left',
        /**
         * X offset of the button row.
         */
        x: 0,
        /**
         * Y offset of the button row.
         */
        y: 0
    },
    /**
     * CSS for the HTML inputs in the range selector.
     *
     * In styled mode, the inputs are styled by the
     * `.highcharts-range-input text` rule in SVG mode, and
     * `input.highcharts-range-selector` when active.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type      {Highcharts.CSSObject}
     * @apioption rangeSelector.inputStyle
     */
    inputStyle: {
        /** @ignore */
        color: "#334eff" /* Palette.highlightColor80 */,
        /** @ignore */
        cursor: 'pointer',
        /** @ignore */
        fontSize: '0.8em'
    },
    /**
     * CSS styles for the labels - the Zoom, From and To texts.
     *
     * In styled mode, the labels are styled by the
     * `.highcharts-range-label` class.
     *
     * @sample {highstock} stock/rangeselector/styling/
     *         Styling the buttons and inputs
     *
     * @type {Highcharts.CSSObject}
     */
    labelStyle: {
        /** @ignore */
        color: "#666666" /* Palette.neutralColor60 */,
        /** @ignore */
        fontSize: '0.8em'
    }
};
/* *
 *
 *  Default Export
 *
 * */
const RangeSelectorDefaults = {
    lang,
    rangeSelector
};
/* harmony default export */ const RangeSelector_RangeSelectorDefaults = (RangeSelectorDefaults);

;// ./code/es-modules/Stock/Scrollbar/ScrollbarDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Constant
 *
 * */
/**
 *
 * The scrollbar is a means of panning over the X axis of a stock chart.
 * Scrollbars can also be applied to other types of axes.
 *
 * Another approach to scrollable charts is the [chart.scrollablePlotArea](
 * https://api.highcharts.com/highcharts/chart.scrollablePlotArea) option that
 * is especially suitable for simpler cartesian charts on mobile.
 *
 * In styled mode, all the presentational options for the
 * scrollbar are replaced by the classes `.highcharts-scrollbar-thumb`,
 * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
 * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
 *
 * @sample stock/yaxis/inverted-bar-scrollbar/
 *         A scrollbar on a simple bar chart
 *
 * @product highstock gantt
 * @optionparent scrollbar
 *
 * @private
 */
const ScrollbarDefaults = {
    /**
     * The height of the scrollbar. If `buttonsEnabled` is true , the height
     * also applies to the width of the scroll arrows so that they are always
     * squares.
     *
     * @sample stock/scrollbar/style/
     *         Non-default height
     *
     * @type    {number}
     */
    height: 10,
    /**
     * The border rounding radius of the bar.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    barBorderRadius: 5,
    /**
     * The corner radius of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    buttonBorderRadius: 0,
    /**
     * Enable or disable the buttons at the end of the scrollbar.
     *
     * @since 11.0.0
     */
    buttonsEnabled: false,
    /**
     * Enable or disable the scrollbar.
     *
     * @sample stock/scrollbar/enabled/
     *         Disable the scrollbar, only use navigator
     *
     * @type      {boolean}
     * @default   true
     * @apioption scrollbar.enabled
     */
    /**
     * Whether to redraw the main chart as the scrollbar or the navigator
     * zoomed window is moved. Defaults to `true` for modern browsers and
     * `false` for legacy IE browsers as well as mobile devices.
     *
     * @sample stock/scrollbar/liveredraw
     *         Setting live redraw to false
     *
     * @type  {boolean}
     * @since 1.3
     */
    liveRedraw: void 0,
    /**
     * The margin between the scrollbar and its axis when the scrollbar is
     * applied directly to an axis, or the navigator in case that is enabled.
     * Defaults to 10 for axis, 3 for navigator.
     *
     * @type {number|undefined}
     */
    margin: void 0,
    /**
     * The minimum width of the scrollbar.
     *
     * @since 1.2.5
     */
    minWidth: 6,
    /** @ignore-option */
    opposite: true,
    /**
     * Whether to show or hide the scrollbar when the scrolled content is
     * zoomed out to it full extent.
     *
     * @type      {boolean}
     * @default   true
     * @apioption scrollbar.showFull
     */
    step: 0.2,
    /**
     * The z index of the scrollbar group.
     */
    zIndex: 3,
    /**
     * The background color of the scrollbar itself.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    barBackgroundColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The width of the bar's border.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    barBorderWidth: 0,
    /**
     * The color of the scrollbar's border.
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    barBorderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The color of the small arrow inside the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    buttonArrowColor: "#333333" /* Palette.neutralColor80 */,
    /**
     * The color of scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    buttonBackgroundColor: "#e6e6e6" /* Palette.neutralColor10 */,
    /**
     * The color of the border of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    buttonBorderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The border width of the scrollbar buttons.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    buttonBorderWidth: 1,
    /**
     * The color of the small rifles in the middle of the scrollbar.
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    rifleColor: 'none',
    /**
     * The color of the track background.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    trackBackgroundColor: 'rgba(255, 255, 255, 0.001)', // #18922
    /**
     * The color of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    trackBorderColor: "#cccccc" /* Palette.neutralColor20 */,
    /**
     * The corner radius of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    trackBorderRadius: 5,
    /**
     * The width of the border of the scrollbar track.
     *
     * @sample stock/scrollbar/style/
     *         Scrollbar styling
     */
    trackBorderWidth: 1
};
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Scrollbar_ScrollbarDefaults = (ScrollbarDefaults);

;// ./code/es-modules/Stock/Utilities/StockUtilities.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defined: StockUtilities_defined } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Sets the chart.fixedRange to the specified value. If the value is larger
 * than actual range, sets it to the maximum possible range. (#20327)
 *
 * @private
 * @function Highcharts.StockChart#setFixedRange
 * @param {number|undefined} range
 *        Range to set in axis units.
 */
function setFixedRange(range) {
    const xAxis = this.xAxis[0];
    if (StockUtilities_defined(xAxis.dataMax) &&
        StockUtilities_defined(xAxis.dataMin) &&
        range) {
        this.fixedRange = Math.min(range, xAxis.dataMax - xAxis.dataMin);
    }
    else {
        this.fixedRange = range;
    }
}
const StockUtilities = {
    setFixedRange
};
/* harmony default export */ const Utilities_StockUtilities = (StockUtilities);

;// ./code/es-modules/Core/Chart/StockChart.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { format } = (external_highcharts_src_js_default_Templating_default());

const { getOptions } = (external_highcharts_src_js_default_default());




const { setFixedRange: StockChart_setFixedRange } = Utilities_StockUtilities;

const { addEvent: StockChart_addEvent, clamp, crisp, defined: StockChart_defined, extend: StockChart_extend, find, isNumber: StockChart_isNumber, isString: StockChart_isString, merge: StockChart_merge, pick: StockChart_pick, splat } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * Get stock-specific default axis options.
 *
 * @private
 * @function getDefaultAxisOptions
 */
function getDefaultAxisOptions(coll, options, defaultOptions) {
    if (coll === 'xAxis') {
        return {
            minPadding: 0,
            maxPadding: 0,
            overscroll: 0,
            ordinal: true
        };
    }
    if (coll === 'yAxis') {
        return {
            labels: {
                y: -2
            },
            opposite: defaultOptions.opposite ?? options.opposite ?? true,
            showLastLabel: !!(
            // #6104, show last label by default for category axes
            options.categories ||
                options.type === 'category'),
            title: {
                text: void 0
            }
        };
    }
    return {};
}
/**
 * Get stock-specific forced axis options.
 *
 * @private
 * @function getForcedAxisOptions
 */
function getForcedAxisOptions(type, chartOptions) {
    if (type === 'xAxis') {
        // Always disable startOnTick:true on the main axis when the navigator
        // is enabled (#1090)
        const navigatorEnabled = StockChart_pick(chartOptions.navigator?.enabled, Navigator_NavigatorDefaults.enabled, true);
        const axisOptions = {
            type: 'datetime',
            categories: void 0
        };
        if (navigatorEnabled) {
            axisOptions.startOnTick = false;
            axisOptions.endOnTick = false;
        }
        return axisOptions;
    }
    return {};
}
/* *
 *
 *  Class
 *
 * */
/**
 * Stock-optimized chart. Use {@link Highcharts.Chart|Chart} for common charts.
 *
 * @requires modules/stock
 *
 * @class
 * @name Highcharts.StockChart
 * @extends Highcharts.Chart
 */
class StockChart extends (external_highcharts_src_js_default_Chart_default()) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initializes the chart. The constructor's arguments are passed on
     * directly.
     *
     * @function Highcharts.StockChart#init
     *
     * @param {Highcharts.Options} userOptions
     *        Custom options.
     *
     * @param {Function} [callback]
     *        Function to run when the chart has loaded and all external
     *        images are loaded.
     *
     *
     * @emits Highcharts.StockChart#event:init
     * @emits Highcharts.StockChart#event:afterInit
     */
    init(userOptions, callback) {
        const defaultOptions = getOptions(), xAxisOptions = userOptions.xAxis, yAxisOptions = userOptions.yAxis, 
        // Always disable startOnTick:true on the main axis when the
        // navigator is enabled (#1090)
        navigatorEnabled = StockChart_pick(userOptions.navigator?.enabled, Navigator_NavigatorDefaults.enabled, true);
        // Avoid doing these twice
        userOptions.xAxis = userOptions.yAxis = void 0;
        const options = StockChart_merge({
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                zooming: {
                    pinchType: 'x',
                    mouseWheel: {
                        type: 'x'
                    }
                }
            },
            navigator: {
                enabled: navigatorEnabled
            },
            scrollbar: {
                // #4988 - check if setOptions was called
                enabled: StockChart_pick(Scrollbar_ScrollbarDefaults.enabled, true)
            },
            rangeSelector: {
                // #4988 - check if setOptions was called
                enabled: StockChart_pick(RangeSelector_RangeSelectorDefaults.rangeSelector.enabled, true)
            },
            title: {
                text: null
            },
            tooltip: {
                split: StockChart_pick(defaultOptions.tooltip?.split, true),
                crosshairs: true
            },
            legend: {
                enabled: false
            }
        }, userOptions, // User's options
        {
            isStock: true // Internal flag
        });
        userOptions.xAxis = xAxisOptions;
        userOptions.yAxis = yAxisOptions;
        // Apply X axis options to both single and multi y axes
        options.xAxis = splat(userOptions.xAxis || {}).map((xAxisOptions) => StockChart_merge(getDefaultAxisOptions('xAxis', xAxisOptions, defaultOptions.xAxis), 
        // #7690
        xAxisOptions, // User options
        getForcedAxisOptions('xAxis', userOptions)));
        // Apply Y axis options to both single and multi y axes
        options.yAxis = splat(userOptions.yAxis || {}).map((yAxisOptions) => StockChart_merge(getDefaultAxisOptions('yAxis', yAxisOptions, defaultOptions.yAxis), 
        // #7690
        yAxisOptions // User options
        ));
        super.init(options, callback);
    }
    /**
     * Factory for creating different axis types.
     * Extended to add stock defaults.
     *
     * @private
     * @function Highcharts.StockChart#createAxis
     * @param {string} coll
     * An axis type.
     * @param {Chart.CreateAxisOptionsObject} options
     * The axis creation options.
     */
    createAxis(coll, options) {
        options.axis = StockChart_merge(getDefaultAxisOptions(coll, options.axis, getOptions()[coll]), options.axis, getForcedAxisOptions(coll, this.userOptions));
        return super.createAxis(coll, options);
    }
}
StockChart_addEvent((external_highcharts_src_js_default_Chart_default()), 'update', function (e) {
    const chart = this, options = e.options;
    // Use case: enabling scrollbar from a disabled state.
    // Scrollbar needs to be initialized from a controller, Navigator in this
    // case (#6615)
    if ('scrollbar' in options && chart.navigator) {
        StockChart_merge(true, chart.options.scrollbar, options.scrollbar);
        chart.navigator.update({ enabled: !!chart.navigator.navigatorEnabled });
        delete options.scrollbar;
    }
});
/* *
 *
 *  Composition
 *
 * */
(function (StockChart) {
    /* *
     *
     *  Functions
     *
     * */
    /** @private */
    function compose(ChartClass, AxisClass, SeriesClass, SVGRendererClass) {
        const seriesProto = SeriesClass.prototype;
        if (!seriesProto.forceCropping) {
            StockChart_addEvent(AxisClass, 'afterDrawCrosshair', onAxisAfterDrawCrosshair);
            StockChart_addEvent(AxisClass, 'afterHideCrosshair', onAxisAfterHideCrosshair);
            StockChart_addEvent(AxisClass, 'autoLabelAlign', onAxisAutoLabelAlign);
            StockChart_addEvent(AxisClass, 'destroy', onAxisDestroy);
            StockChart_addEvent(AxisClass, 'getPlotLinePath', onAxisGetPlotLinePath);
            ChartClass.prototype.setFixedRange = StockChart_setFixedRange;
            seriesProto.forceCropping = seriesForceCropping;
            StockChart_addEvent(SeriesClass, 'setOptions', onSeriesSetOptions);
            SVGRendererClass.prototype.crispPolyLine = svgRendererCrispPolyLine;
        }
    }
    StockChart.compose = compose;
    /**
     * Extend crosshairs to also draw the label.
     * @private
     */
    function onAxisAfterDrawCrosshair(event) {
        const axis = this;
        // Check if the label has to be drawn
        if (!(axis.crosshair?.label?.enabled &&
            axis.cross &&
            StockChart_isNumber(axis.min) &&
            StockChart_isNumber(axis.max))) {
            return;
        }
        const chart = axis.chart, log = axis.logarithmic, options = axis.crosshair.label, // The label's options
        horiz = axis.horiz, // Axis orientation
        opposite = axis.opposite, // Axis position
        left = axis.left, // Left position
        top = axis.top, // Top position
        width = axis.width, tickInside = axis.options.tickPosition === 'inside', snap = axis.crosshair.snap !== false, e = event.e || (axis.cross?.e), point = event.point;
        let crossLabel = axis.crossLabel, // The svgElement
        posx, posy, formatOption = options.format, formatFormat = '', limit, offset = 0, 
        // Use last available event (#5287)
        min = axis.min, max = axis.max;
        if (log) {
            min = log.lin2log(axis.min);
            max = log.lin2log(axis.max);
        }
        const align = (horiz ? 'center' : opposite ?
            (axis.labelAlign === 'right' ? 'right' : 'left') :
            (axis.labelAlign === 'left' ? 'left' : 'center'));
        // If the label does not exist yet, create it.
        if (!crossLabel) {
            crossLabel = axis.crossLabel = chart.renderer
                .label('', 0, void 0, options.shape || 'callout')
                .addClass('highcharts-crosshair-label highcharts-color-' + (point?.series ?
                point.series.colorIndex :
                axis.series[0] && this.series[0].colorIndex))
                .attr({
                align: options.align || align,
                padding: StockChart_pick(options.padding, 8),
                r: StockChart_pick(options.borderRadius, 3),
                zIndex: 2
            })
                .add(axis.labelGroup);
            // Presentational
            if (!chart.styledMode) {
                crossLabel
                    .attr({
                    fill: options.backgroundColor ||
                        point?.series?.color || // #14888
                        "#666666" /* Palette.neutralColor60 */,
                    stroke: options.borderColor || '',
                    'stroke-width': options.borderWidth || 0
                })
                    .css(StockChart_extend({
                    color: "#ffffff" /* Palette.backgroundColor */,
                    fontWeight: 'normal',
                    fontSize: '0.7em',
                    textAlign: 'center'
                }, options.style || {}));
            }
        }
        if (horiz) {
            posx = snap ? (point.plotX || 0) + left : e.chartX;
            posy = top + (opposite ? 0 : axis.height);
        }
        else {
            posx = left + axis.offset + (opposite ? width : 0);
            posy = snap ? (point.plotY || 0) + top : e.chartY;
        }
        if (!formatOption && !options.formatter) {
            if (axis.dateTime) {
                formatFormat = '%b %d, %Y';
            }
            formatOption =
                '{value' + (formatFormat ? ':' + formatFormat : '') + '}';
        }
        // Show the label
        const value = snap ?
            (axis.isXAxis ? point.x : point.y) :
            axis.toValue(horiz ? e.chartX : e.chartY);
        // Crosshair should be rendered within Axis range (#7219) and the point
        // of currentPriceIndicator should be inside the plot area (#14879).
        const isInside = point?.series ?
            point.series.isPointInside(point) :
            (StockChart_isNumber(value) && value > min && value < max);
        let text = '';
        if (formatOption) {
            text = format(formatOption, { value }, chart);
        }
        else if (options.formatter && StockChart_isNumber(value)) {
            text = options.formatter.call(axis, value);
        }
        crossLabel.attr({
            text,
            x: posx,
            y: posy,
            visibility: isInside ? 'inherit' : 'hidden'
        });
        const crossBox = crossLabel.getBBox();
        // Now it is placed we can correct its position
        if (StockChart_isNumber(crossLabel.x) && !horiz && !opposite) {
            posx = crossLabel.x - (crossBox.width / 2);
        }
        if (StockChart_isNumber(crossLabel.y)) {
            if (horiz) {
                if ((tickInside && !opposite) || (!tickInside && opposite)) {
                    posy = crossLabel.y - crossBox.height;
                }
            }
            else {
                posy = crossLabel.y - (crossBox.height / 2);
            }
        }
        // Check the edges
        if (horiz) {
            limit = {
                left,
                right: left + axis.width
            };
        }
        else {
            limit = {
                left: axis.labelAlign === 'left' ? left : 0,
                right: axis.labelAlign === 'right' ?
                    left + axis.width :
                    chart.chartWidth
            };
        }
        const translateX = crossLabel.translateX || 0;
        // Left edge
        if (translateX < limit.left) {
            offset = limit.left - translateX;
        }
        // Right edge
        if (translateX + crossBox.width >= limit.right) {
            offset = -(translateX + crossBox.width - limit.right);
        }
        // Show the crosslabel
        crossLabel.attr({
            x: Math.max(0, posx + offset),
            y: Math.max(0, posy),
            // First set x and y, then anchorX and anchorY, when box is actually
            // calculated, #5702
            anchorX: horiz ?
                posx :
                (axis.opposite ? 0 : chart.chartWidth),
            anchorY: horiz ?
                (axis.opposite ? chart.chartHeight : 0) :
                posy + crossBox.height / 2
        });
    }
    /**
     * Wrapper to hide the label.
     * @private
     */
    function onAxisAfterHideCrosshair() {
        const axis = this;
        if (axis.crossLabel) {
            axis.crossLabel = axis.crossLabel.hide();
        }
    }
    /**
     * Override the automatic label alignment so that the first Y axis' labels
     * are drawn on top of the grid line, and subsequent axes are drawn outside.
     * @private
     */
    function onAxisAutoLabelAlign(e) {
        const axis = this, chart = axis.chart, options = axis.options, panes = chart._labelPanes = chart._labelPanes || {}, labelOptions = options.labels;
        if (chart.options.isStock && axis.coll === 'yAxis') {
            const key = options.top + ',' + options.height;
            // Do it only for the first Y axis of each pane
            if (!panes[key] && labelOptions.enabled) {
                if (labelOptions.distance === 15 && // Default
                    axis.side === 1) {
                    labelOptions.distance = 0;
                }
                if (typeof labelOptions.align === 'undefined') {
                    labelOptions.align = 'right';
                }
                panes[key] = axis;
                e.align = 'right';
                e.preventDefault();
            }
        }
    }
    /**
     * Clear axis from label panes. (#6071)
     * @private
     */
    function onAxisDestroy() {
        const axis = this, chart = axis.chart, key = (axis.options &&
            (axis.options.top + ',' + axis.options.height));
        if (key && chart._labelPanes && chart._labelPanes[key] === axis) {
            delete chart._labelPanes[key];
        }
    }
    /**
     * Override getPlotLinePath to allow for multipane charts.
     * @private
     */
    function onAxisGetPlotLinePath(e) {
        const axis = this, series = (axis.isLinked && !axis.series && axis.linkedParent ?
            axis.linkedParent.series :
            axis.series), { chart, horiz } = axis, renderer = chart.renderer, result = [], { acrossPanes = true, force, translatedValue, value } = e, allPerpendicularAxes = (axis.isXAxis ? chart.yAxis : chart.xAxis) || [], 
        /**
         * Return the other axis based on either the axis option or on
         * related series.
         * @private
         */
        getAxis = (coll) => {
            const otherColl = coll === 'xAxis' ? 'yAxis' : 'xAxis', opt = axis.options[otherColl];
            if (acrossPanes && !axis.options.isInternal) {
                return allPerpendicularAxes.filter((a) => !a.options.isInternal);
            }
            // Other axis indexed by number
            if (StockChart_isNumber(opt)) {
                return [chart[otherColl][opt]];
            }
            // Other axis indexed by id (like navigator)
            if (StockChart_isString(opt)) {
                return [chart.get(opt)];
            }
            // Auto detect based on existing series
            return series.map((s) => s[otherColl]);
        };
        /**
         * Push a segment to the result SVGPath array
         */
        function pushSegment(pos, crossingPos1, crossingPos2) {
            result.push(['M', horiz ? pos : crossingPos1, horiz ? crossingPos1 : pos], ['L', horiz ? pos : crossingPos2, horiz ? crossingPos2 : pos]);
        }
        let axes = [], // #3416 need a default array
        uniqueAxes, transVal;
        if (chart.options.isStock &&
            // Ignore in case of colorAxis or zAxis. #3360, #3524, #6720
            (axis.coll === 'xAxis' || axis.coll === 'yAxis')) {
            e.preventDefault();
            // Get the related axes based on series
            axes = getAxis(axis.coll);
            // Get the related axes based options.*Axis setting #2810
            for (const A of allPerpendicularAxes) {
                if (!A.options.isInternal) {
                    const a = (A.isXAxis ? 'yAxis' : 'xAxis'), relatedAxis = (StockChart_defined(A.options[a]) &&
                        chart[a][A.options[a]]);
                    if (axis === relatedAxis) {
                        axes.push(A);
                    }
                }
            }
            // Remove duplicates in the axes array. If there are no axes in the
            // axes array, we are adding an axis without data, so we need to
            // populate this with grid lines (#2796).
            uniqueAxes = axes.length ?
                [] :
                [axis.isXAxis ? chart.yAxis[0] : chart.xAxis[0]]; // #3742
            for (const axis2 of axes) {
                if (uniqueAxes.indexOf(axis2) === -1 &&
                    // Do not draw on axis which overlap completely. #5424
                    !find(uniqueAxes, (unique) => (unique.pos === axis2.pos &&
                        unique.len === axis2.len))) {
                    uniqueAxes.push(axis2);
                }
            }
            transVal = StockChart_pick(translatedValue, axis.translate(value || 0, void 0, void 0, e.old));
            if (StockChart_isNumber(transVal)) {
                let skip, pos = horiz ?
                    transVal + axis.pos :
                    axis.pos + axis.len - transVal;
                // Outside plot area
                if (force !== 'pass' &&
                    (pos < axis.pos || pos > axis.pos + axis.len)) {
                    if (force) {
                        pos = clamp(pos, axis.pos, axis.pos + axis.len);
                    }
                    else {
                        skip = true;
                    }
                }
                if (!skip) {
                    const crossingPosName = horiz ? 'top' : 'left', crossingLenName = horiz ? 'height' : 'width';
                    if (!acrossPanes &&
                        // If the perpendicular position is set explicitly on
                        // the axis, use it. For example, if `top` and `height`
                        // options are set on a horizontal x-axis, the grid
                        // lines should conform to that position.
                        (axis.options[crossingPosName] ||
                            axis.options[crossingLenName])) {
                        pushSegment(pos, axis[crossingPosName], axis[crossingPosName] + axis[crossingLenName]);
                    }
                    else {
                        for (const perpendicularAxis of uniqueAxes) {
                            pushSegment(pos, perpendicularAxis.pos, perpendicularAxis.pos + perpendicularAxis.len);
                        }
                    }
                }
            }
            e.path = result.length > 0 ?
                renderer.crispPolyLine(result, e.lineWidth || 1) :
                // #3557 getPlotLinePath in regular Highcharts also returns null
                void 0;
        }
    }
    /**
     * Handle som Stock-specific series defaults, override the plotOptions
     * before series options are handled.
     * @private
     */
    function onSeriesSetOptions(e) {
        const series = this;
        if (series.chart.options.isStock) {
            let overrides;
            if (series.is('column') || series.is('columnrange')) {
                overrides = {
                    borderWidth: 0,
                    shadow: false
                };
            }
            else if (!series.is('scatter') && !series.is('sma')) {
                overrides = {
                    marker: {
                        enabled: false,
                        radius: 2
                    }
                };
            }
            if (overrides) {
                e.plotOptions[series.type] = StockChart_merge(e.plotOptions[series.type], overrides);
            }
        }
    }
    /**
     * Based on the data grouping options decides whether
     * the data should be cropped while processing.
     *
     * @ignore
     * @function Highcharts.Series#forceCropping
     */
    function seriesForceCropping() {
        const series = this, chart = series.chart, options = series.options, dataGroupingOptions = options.dataGrouping, groupingEnabled = (series.allowDG !== false &&
            dataGroupingOptions &&
            StockChart_pick(dataGroupingOptions.enabled, chart.options.isStock));
        return groupingEnabled;
    }
    /* eslint-disable jsdoc/check-param-names */
    /**
     * Factory function for creating new stock charts. Creates a new
     * {@link Highcharts.StockChart|StockChart} object with different default
     * options than the basic Chart.
     *
     * @example
     * let chart = Highcharts.stockChart('container', {
     *     series: [{
     *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     *         pointInterval: 24 * 60 * 60 * 1000
     *     }]
     * });
     *
     * @function Highcharts.stockChart
     *
     * @param {string|Highcharts.HTMLDOMElement} [renderTo]
     *        The DOM element to render to, or its id.
     *
     * @param {Highcharts.Options} options
     *        The chart options structure as described in the
     *        [options reference](https://api.highcharts.com/highstock).
     *
     * @param {Highcharts.ChartCallbackFunction} [callback]
     *        A function to execute when the chart object is finished
     *        rendering and all external image files (`chart.backgroundImage`,
     *        `chart.plotBackgroundImage` etc) are loaded. Defining a
     *        [chart.events.load](https://api.highcharts.com/highstock/chart.events.load)
     *        handler is equivalent.
     *
     * @return {Highcharts.StockChart}
     *         The chart object.
     */
    function stockChart(a, b, c) {
        return new StockChart(a, b, c);
    }
    StockChart.stockChart = stockChart;
    /* eslint-enable jsdoc/check-param-names */
    /**
     * Function to crisp a line with multiple segments
     *
     * @private
     * @function Highcharts.SVGRenderer#crispPolyLine
     */
    function svgRendererCrispPolyLine(points, width) {
        // Points format: [['M', 0, 0], ['L', 100, 0]]
        // normalize to a crisp line
        for (let i = 0; i < points.length; i = i + 2) {
            const start = points[i], end = points[i + 1];
            if (StockChart_defined(start[1]) && start[1] === end[1]) {
                start[1] = end[1] = crisp(start[1], width);
            }
            if (StockChart_defined(start[2]) && start[2] === end[2]) {
                start[2] = end[2] = crisp(start[2], width);
            }
        }
        return points;
    }
})(StockChart || (StockChart = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Chart_StockChart = (StockChart);

;// ./code/es-modules/Series/HLC/HLCPoint.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { column: { prototype: { pointClass: ColumnPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class HLCPoint extends ColumnPoint {
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HLC_HLCPoint = (HLCPoint);

;// ./code/es-modules/Series/HLC/HLCSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * An HLC chart is a style of financial chart used to describe price
 * movements over time. It displays high, low and close values per
 * data point.
 *
 * @sample stock/demo/hlc/
 *         HLC chart
 *
 * @extends      plotOptions.column
 * @excluding    borderColor, borderRadius, borderWidth, crisp, stacking,
 *               stack
 * @product      highstock
 * @optionparent plotOptions.hlc
 */
const HLCSeriesDefaults = {
    /**
     * The approximate pixel width of each group. If for example a series
     * with 30 points is displayed over a 600 pixel wide plot area, no
     * grouping is performed. If however the series contains so many points
     * that the spacing is less than the groupPixelWidth, Highcharts will
     * try to group it into appropriate groups so that each is more or less
     * two pixels wide. Defaults to `5`.
     *
     * @type      {number}
     * @default   5
     * @product   highstock
     * @apioption plotOptions.hlc.dataGrouping.groupPixelWidth
     */
    /**
     * @type      {Highcharts.DataGroupingApproximationValue|Function}
     * @default   hlc
     * @product   highstock
     * @apioption plotOptions.hlc.dataGrouping.approximation
     */
    /**
     * @default   close
     * @apioption plotOptions.hlc.colorKey
     */
    /**
     * The pixel width of the line/border. Defaults to `1`.
     *
     * @sample {highstock} stock/plotoptions/hlc-linewidth/
     *         A greater line width
     *
     * @type    {number}
     * @default 1
     * @product highstock
     *
     * @public
     */
    lineWidth: 1,
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
            '<b> {series.name}</b><br/>' +
            '{series.chart.options.lang.stockHigh}: {point.high}<br/>' +
            '{series.chart.options.lang.stockLow}: {point.low}<br/>' +
            '{series.chart.options.lang.stockClose}: {point.close}<br/>'
    },
    /**
     * @type {number|null}
     */
    threshold: null,
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The pixel width of the line representing the HLC point.
             *
             * @type    {number}
             * @default 3
             * @product highstock
             */
            lineWidth: 3
        }
    },
    /**
     * Determines which one of  `high`, `low`, `close` values should
     * be represented as `point.y`, which is later used to set dataLabel
     * position and [compare](#plotOptions.series.compare).
     *
     * @sample {highstock} stock/plotoptions/hlc-pointvalkey/
     *         Possible values
     *
     * @declare    Highcharts.OptionsHLCPointValKeyValue
     * @type       {string}
     * @default    close
     * @validvalue ["high", "low", "close"]
     * @product    highstock
     * @apioption  plotOptions.hlc.pointValKey
     */
    /**
     * @default   close
     * @apioption plotOptions.hlc.colorKey
     */
    stickyTracking: true
};
/**
 * A `hlc` series. If the [type](#series.hlc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.hlc
 * @excluding dataParser, dataURL
 * @product   highstock
 * @apioption series.hlc
 */
/**
 * An array of data points for the series. For the `hlc` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 4 or 3 values. In this case, the values correspond
 *    to `x,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length of 3\.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 5, 6, 7],
 *        [1, 4, 8, 2],
 *        [2, 3, 4, 10]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.hlc.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        high: 4,
 *        low: 5,
 *        close: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        high: 3,
 *        low: 6,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number,number>|Array<(number|string),number,number,number>|*>}
 * @extends   series.arearange.data
 * @excluding y, marker
 * @product   highstock
 * @apioption series.hlc.data
 */
/**
 * The closing value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.hlc.data.close
 */
(''); // Keeps doclets above in JS file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HLC_HLCSeriesDefaults = (HLCSeriesDefaults);

;// ./code/es-modules/Series/HLC/HLCSeries.js
/* *
 *
 *  (c) 2010-2025 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




const { column: ColumnSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { crisp: HLCSeries_crisp, extend: HLCSeries_extend, merge: HLCSeries_merge } = (external_highcharts_src_js_default_default());

const { defaultOptions } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The hlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.hlc
 *
 * @augments Highcharts.Series
 */
class HLCSeries extends ColumnSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the path if close is not between high and low.
     *
     * @param {SVGPath} path the path array of the point
     * @param {number} halfStrokeWidth
     * @param {number} value value of the point to which the stem should be extended
     */
    extendStem(path, halfStrokeWidth, value) {
        const start = path[0];
        const end = path[1];
        // We don't need to worry about crisp - close value
        // is already crisped and halfStrokeWidth should remove it.
        if (typeof start[2] === 'number') {
            start[2] = Math.max(value + halfStrokeWidth, start[2]);
        }
        if (typeof end[2] === 'number') {
            end[2] = Math.min(value - halfStrokeWidth, end[2]);
        }
    }
    /**
     * Function to create SVGPath of the point based on the
     * plot positions of this point.
     * @private
     */
    getPointPath(point, graphic) {
        // Crisp vector coordinates
        const strokeWidth = graphic.strokeWidth(), series = point.series, 
        // #2596:
        crispX = HLCSeries_crisp(point.plotX || 0, strokeWidth), halfWidth = Math.round(point.shapeArgs.width / 2);
        // The vertical stem
        const path = [
            ['M', crispX, Math.round(point.yBottom)],
            ['L', crispX, Math.round(point.plotHigh)]
        ];
        // Close
        if (point.close !== null) {
            const plotClose = HLCSeries_crisp(point.plotClose, strokeWidth);
            path.push(['M', crispX, plotClose], ['L', crispX + halfWidth, plotClose]);
            series.extendStem(path, strokeWidth / 2, plotClose);
        }
        return path;
    }
    /**
     * Draw single point
     * @private
     */
    drawSinglePoint(point) {
        const series = point.series, chart = series.chart;
        let path, graphic = point.graphic;
        if (typeof point.plotY !== 'undefined') {
            // Create and/or update the graphic
            if (!graphic) {
                point.graphic = graphic = chart.renderer.path()
                    .add(series.group);
            }
            if (!chart.styledMode) {
                graphic.attr(series.pointAttribs(point, (point.selected && 'select'))); // #3897
            }
            // Crisp vector coordinates
            path = series.getPointPath(point, graphic);
            graphic[!graphic ? 'attr' : 'animate']({ d: path })
                .addClass(point.getClassName(), true);
        }
    }
    /**
     * Draw the data points
     * @private
     */
    drawPoints() {
        this.points.forEach(this.drawSinglePoint);
    }
    /**
     * @private
     * @function Highcharts.seriesTypes.hlc#init
     */
    init() {
        super.init.apply(this, arguments);
        this.options.stacking = void 0; // #8817
    }
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point, state) {
        const attribs = super.pointAttribs.call(this, point, state);
        delete attribs.fill;
        return attribs;
    }
    toYData(point) {
        // Return a plain array for speedy calculation
        return [point.high, point.low, point.close];
    }
    /**
     * Translate data points from raw values x and y to plotX and plotY
     *
     * @private
     * @function Highcharts.seriesTypes.hlc#translate
     */
    translate() {
        const series = this, yAxis = series.yAxis, names = (this.pointArrayMap && this.pointArrayMap.slice()) || [], translated = names.map((name) => `plot${name.charAt(0).toUpperCase() + name.slice(1)}`);
        translated.push('yBottom');
        names.push('low');
        super.translate.apply(series);
        // Do the translation
        series.points.forEach(function (point) {
            names.forEach(function (name, i) {
                let value = point[name];
                if (value !== null) {
                    if (series.dataModify) {
                        value = series.dataModify.modifyValue(value);
                    }
                    point[translated[i]] =
                        yAxis.toPixels(value, true);
                }
            });
            // Align the tooltip to the high value to avoid covering the
            // point
            point.tooltipPos[1] =
                point.plotHigh + yAxis.pos - series.chart.plotTop;
        });
    }
}
/* *
 *
 *  Static Properties
 *
 * */
HLCSeries.defaultOptions = HLCSeries_merge(ColumnSeries.defaultOptions, HLC_HLCSeriesDefaults);
HLCSeries_extend(HLCSeries.prototype, {
    pointClass: HLC_HLCPoint,
    animate: null, // Disable animation
    directTouch: false,
    keysAffectYAxis: ['low', 'high'],
    pointArrayMap: ['high', 'low', 'close'],
    pointAttrToOptions: {
        stroke: 'color',
        'stroke-width': 'lineWidth'
    },
    pointValKey: 'close'
});
// Extend default lang options with OHLC terms
const HLCDefaultLangOptions = {
    stockOpen: 'Open',
    stockHigh: 'High',
    stockLow: 'Low',
    stockClose: 'Close'
};
HLCSeries_extend(defaultOptions.lang, HLCDefaultLangOptions);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('hlc', HLCSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const HLC_HLCSeries = ((/* unused pure expression or super */ null && (HLCSeries)));

;// ./code/es-modules/Series/OHLC/OHLCPoint.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { seriesTypes: { hlc: OHLCPoint_HLCSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());
/* *
 *
 *  Class
 *
 * */
class OHLCPoint extends OHLCPoint_HLCSeries.prototype.pointClass {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extend the parent method by adding up or down to the class name.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getClassName
     */
    getClassName() {
        return super.getClassName.call(this) +
            (this.open < this.close ?
                ' highcharts-point-up' :
                ' highcharts-point-down');
    }
    /**
     * Save upColor as point color (#14826).
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveUpColor
     */
    resolveUpColor() {
        if (this.open < this.close &&
            !this.options.color &&
            this.series.options.upColor) {
            this.color = this.series.options.upColor;
        }
    }
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#resolveColor
     */
    resolveColor() {
        super.resolveColor();
        if (!this.series.is('heikinashi')) {
            this.resolveUpColor();
        }
    }
    /**
     * Extend the parent method by saving upColor.
     * @private
     * @function Highcharts.seriesTypes.ohlc#getZone
     *
     * @return {Highcharts.SeriesZonesOptionsObject}
     *         The zone item.
     */
    getZone() {
        const zone = super.getZone();
        this.resolveUpColor();
        return zone;
    }
    /**
     * Extend the parent method by resolving up/down colors (#15849)
     * @private
     **/
    applyOptions() {
        super.applyOptions.apply(this, arguments);
        if (this.resolveColor) {
            this.resolveColor();
        }
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OHLC_OHLCPoint = (OHLCPoint);

;// ./code/es-modules/Series/OHLC/OHLCSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * An OHLC chart is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per
 * data point.
 *
 * @sample stock/demo/ohlc
 *         OHLC chart
 *
 * @extends      plotOptions.hlc
 * @product      highstock
 * @optionparent plotOptions.ohlc
 */
const OHLCSeriesDefaults = {
    /**
     * @type      {Highcharts.DataGroupingApproximationValue|Function}
     * @default   ohlc
     * @product   highstock
     * @apioption plotOptions.ohlc.dataGrouping.approximation
     */
    /**
     * Determines which one of  `open`, `high`, `low`, `close` values should
     * be represented as `point.y`, which is later used to set dataLabel
     * position and [compare](#plotOptions.series.compare).
     *
     * @declare    Highcharts.OptionsPointValKeyValue
     * @default    close
     * @validvalue ["open", "high", "low", "close"]
     * @product    highstock
     * @apioption  plotOptions.ohlc.pointValKey
     */
    /**
     * Line color for up points.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product   highstock
     * @apioption plotOptions.ohlc.upColor
     */
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
            '<b> {series.name}</b><br/>' +
            '{series.chart.options.lang.stockOpen}: {point.open}<br/>' +
            '{series.chart.options.lang.stockHigh}: {point.high}<br/>' +
            '{series.chart.options.lang.stockLow}: {point.low}<br/>' +
            '{series.chart.options.lang.stockClose}: {point.close}<br/>'
    }
};
/**
 * The parameter allows setting line series type and use OHLC indicators.
 * Data in OHLC format is required.
 *
 * @sample {highstock} stock/indicators/use-ohlc-data
 *         Use OHLC data format to plot line chart
 *
 * @type      {boolean}
 * @product   highstock
 * @apioption plotOptions.line.useOhlcData
 */
/**
 * A `ohlc` series. If the [type](#series.ohlc.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.ohlc
 * @excluding dataParser, dataURL
 * @product   highstock
 * @apioption series.ohlc
 */
/**
 * An array of data points for the series. For the `ohlc` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4\.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 6, 5, 6, 7],
 *        [1, 9, 4, 8, 2],
 *        [2, 6, 3, 4, 10]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.ohlc.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 3,
 *        high: 4,
 *        low: 5,
 *        close: 2,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 4,
 *        high: 3,
 *        low: 6,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.arearange.data
 * @excluding y, marker
 * @product   highstock
 * @apioption series.ohlc.data
 */
/**
 * The closing value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.ohlc.data.close
 */
/**
 * The opening value of each data point.
 *
 * @type      {number}
 * @product   highstock
 * @apioption series.ohlc.data.open
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OHLC_OHLCSeriesDefaults = (OHLCSeriesDefaults);

;// ./code/es-modules/Series/OHLC/OHLCSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { composed } = (external_highcharts_src_js_default_default());



const { hlc: OHLCSeries_HLCSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { addEvent: OHLCSeries_addEvent, crisp: OHLCSeries_crisp, extend: OHLCSeries_extend, merge: OHLCSeries_merge, pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function onSeriesAfterSetOptions(e) {
    const options = e.options, dataGrouping = options.dataGrouping;
    if (dataGrouping &&
        options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        dataGrouping.approximation = 'ohlc';
    }
}
/**
 * Add useOhlcData option
 * @private
 */
function onSeriesInit(eventOptions) {
    // eslint-disable-next-line no-invalid-this
    const series = this, options = eventOptions.options;
    if (options.useOhlcData &&
        options.id !== 'highcharts-navigator-series') {
        OHLCSeries_extend(series, {
            pointValKey: OHLCSeries.prototype.pointValKey,
            // Keys: ohlcProto.keys, // @todo potentially nonsense
            pointArrayMap: OHLCSeries.prototype.pointArrayMap,
            toYData: OHLCSeries.prototype.toYData
        });
    }
}
/* *
 *
 *  Class
 *
 * */
/**
 * The ohlc series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.ohlc
 *
 * @augments Highcharts.Series
 */
class OHLCSeries extends OHLCSeries_HLCSeries {
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(SeriesClass, ..._args) {
        if (pushUnique(composed, 'OHLCSeries')) {
            OHLCSeries_addEvent(SeriesClass, 'afterSetOptions', onSeriesAfterSetOptions);
            OHLCSeries_addEvent(SeriesClass, 'init', onSeriesInit);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    getPointPath(point, graphic) {
        const path = super.getPointPath(point, graphic), strokeWidth = graphic.strokeWidth(), crispX = OHLCSeries_crisp(point.plotX || 0, strokeWidth), halfWidth = Math.round(point.shapeArgs.width / 2);
        if (point.open !== null) {
            const plotOpen = OHLCSeries_crisp(point.plotOpen, strokeWidth);
            path.push(['M', crispX, plotOpen], ['L', crispX - halfWidth, plotOpen]);
            super.extendStem(path, strokeWidth / 2, plotOpen);
        }
        return path;
    }
    /**
     * Postprocess mapping between options and SVG attributes
     * @private
     */
    pointAttribs(point, state) {
        const attribs = super.pointAttribs.call(this, point, state), options = this.options;
        delete attribs.fill;
        if (!point.options.color &&
            options.upColor &&
            point.open < point.close) {
            attribs.stroke = options.upColor;
        }
        return attribs;
    }
    toYData(point) {
        // Return a plain array for speedy calculation
        return [point.open, point.high, point.low, point.close];
    }
}
/* *
 *
 *  Static Properties
 *
 * */
OHLCSeries.defaultOptions = OHLCSeries_merge(OHLCSeries_HLCSeries.defaultOptions, OHLC_OHLCSeriesDefaults);
OHLCSeries_extend(OHLCSeries.prototype, {
    pointClass: OHLC_OHLCPoint,
    pointArrayMap: ['open', 'high', 'low', 'close']
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('ohlc', OHLCSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const OHLC_OHLCSeries = (OHLCSeries);

;// ./code/es-modules/Series/Candlestick/CandlestickSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * A candlestick chart is a style of financial chart used to describe
 * price movements over time.
 *
 * @sample stock/demo/candlestick/
 *         Candlestick chart
 *
 * @extends      plotOptions.ohlc
 * @excluding    borderColor,borderRadius,borderWidth
 * @product      highstock
 * @optionparent plotOptions.candlestick
 */
const CandlestickSeriesDefaults = {
    /**
     * The specific line color for up candle sticks. The default is to
     * inherit the general `lineColor` setting.
     *
     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
     *         Candlestick line colors
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since     1.3.6
     * @product   highstock
     * @apioption plotOptions.candlestick.upLineColor
     */
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The pixel width of the line/border around the
             * candlestick.
             *
             * @product highstock
             */
            lineWidth: 2
        }
    },
    /**
     * @type    {number|null}
     * @product highstock
     */
    threshold: null,
    /**
     * The color of the line/border of the candlestick.
     *
     * In styled mode, the line stroke can be set with the
     * `.highcharts-candlestick-series .highcahrts-point` rule.
     *
     * @see [upLineColor](#plotOptions.candlestick.upLineColor)
     *
     * @sample {highstock} stock/plotoptions/candlestick-linecolor/
     *         Candlestick line colors
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default #000000
     * @product highstock
     */
    lineColor: "#000000" /* Palette.neutralColor100 */,
    /**
     * The pixel width of the candlestick line/border. Defaults to `1`.
     *
     *
     * In styled mode, the line stroke width can be set with the
     * `.highcharts-candlestick-series .highcahrts-point` rule.
     *
     * @product highstock
     */
    lineWidth: 1,
    /**
     * The fill color of the candlestick when values are rising.
     *
     * In styled mode, the up color can be set with the
     * `.highcharts-candlestick-series .highcharts-point-up` rule.
     *
     * @sample {highstock} stock/plotoptions/candlestick-color/
     *         Custom colors
     * @sample {highstock} highcharts/css/candlestick/
     *         Colors in styled mode
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default #ffffff
     * @product highstock
    */
    upColor: "#ffffff" /* Palette.backgroundColor */,
    /**
     * @product highstock
     */
    stickyTracking: true
};
/**
 * A `candlestick` series. If the [type](#series.candlestick.type)
 * option is not specified, it is inherited from [chart.type](
 * #chart.type).
 *
 * @type      {*}
 * @extends   series,plotOptions.candlestick
 * @excluding dataParser, dataURL, marker
 * @product   highstock
 * @apioption series.candlestick
 */
/**
 * An array of data points for the series. For the `candlestick` series
 * type, points can be given in the following ways:
 *
 * 1. An array of arrays with 5 or 4 values. In this case, the values correspond
 *    to `x,open,high,low,close`. If the first value is a string, it is applied
 *    as the name of the point, and the `x` value is inferred. The `x` value can
 *    also be omitted, in which case the inner arrays should be of length 4.
 *    Then the `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 7, 2, 0, 4],
 *        [1, 1, 4, 2, 8],
 *        [2, 3, 3, 9, 3]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.candlestick.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        open: 9,
 *        high: 2,
 *        low: 4,
 *        close: 6,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        open: 1,
 *        high: 4,
 *        low: 7,
 *        close: 7,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number,number,number>|Array<(number|string),number,number,number,number>|*>}
 * @extends   series.ohlc.data
 * @excluding y
 * @product   highstock
 * @apioption series.candlestick.data
 */
''; // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Candlestick_CandlestickSeriesDefaults = (CandlestickSeriesDefaults);

;// ./code/es-modules/Series/Candlestick/CandlestickSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { column: CandlestickSeries_ColumnSeries, ohlc: CandlestickSeries_OHLCSeries } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { crisp: CandlestickSeries_crisp, merge: CandlestickSeries_merge } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The candlestick series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.candlestick
 *
 * @augments Highcharts.seriesTypes.ohlc
 */
class CandlestickSeries extends CandlestickSeries_OHLCSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Postprocess mapping between options and SVG attributes
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#pointAttribs
     */
    pointAttribs(point, state) {
        const attribs = CandlestickSeries_ColumnSeries.prototype.pointAttribs.call(this, point, state), options = this.options, isUp = point.open < point.close, stroke = options.lineColor || this.color, color = point.color || this.color; // (#14826)
        attribs['stroke-width'] = options.lineWidth;
        attribs.fill = point.options.color ||
            (isUp ? (options.upColor || color) : color);
        attribs.stroke = point.options.lineColor ||
            (isUp ? (options.upLineColor || stroke) : stroke);
        // Select or hover states
        if (state) {
            const stateOptions = options.states[state];
            attribs.fill = stateOptions.color || attribs.fill;
            attribs.stroke = stateOptions.lineColor || attribs.stroke;
            attribs['stroke-width'] =
                stateOptions.lineWidth || attribs['stroke-width'];
        }
        return attribs;
    }
    /**
     * Draw the data points.
     *
     * @private
     * @function Highcharts.seriesTypes.candlestick#drawPoints
     */
    drawPoints() {
        const series = this, points = series.points, chart = series.chart, reversedYAxis = series.yAxis.reversed;
        for (const point of points) {
            let graphic = point.graphic, plotOpen, plotClose, topBox, bottomBox, hasTopWhisker, hasBottomWhisker, crispX, path, halfWidth;
            const isNew = !graphic;
            if (typeof point.plotY !== 'undefined') {
                if (!graphic) {
                    point.graphic = graphic = chart.renderer.path()
                        .add(series.group);
                }
                if (!series.chart.styledMode) {
                    graphic
                        .attr(series.pointAttribs(point, (point.selected && 'select'))) // #3897
                        .shadow(series.options.shadow);
                }
                // Crisp vector coordinates
                const strokeWidth = graphic.strokeWidth();
                // #2596:
                crispX = CandlestickSeries_crisp(point.plotX || 0, strokeWidth);
                plotOpen = point.plotOpen;
                plotClose = point.plotClose;
                topBox = Math.min(plotOpen, plotClose);
                bottomBox = Math.max(plotOpen, plotClose);
                halfWidth = Math.round(point.shapeArgs.width / 2);
                hasTopWhisker = reversedYAxis ?
                    bottomBox !== point.yBottom :
                    Math.round(topBox) !==
                        Math.round(point.plotHigh || 0);
                hasBottomWhisker = reversedYAxis ?
                    Math.round(topBox) !==
                        Math.round(point.plotHigh || 0) :
                    bottomBox !== point.yBottom;
                topBox = CandlestickSeries_crisp(topBox, strokeWidth);
                bottomBox = CandlestickSeries_crisp(bottomBox, strokeWidth);
                // Create the path. Due to a bug in Chrome 49, the path is
                // first instantiated with no values, then the values
                // pushed. For unknown reasons, instantiating the path array
                // with all the values would lead to a crash when updating
                // frequently (#5193).
                path = [];
                path.push(['M', crispX - halfWidth, bottomBox], ['L', crispX - halfWidth, topBox], ['L', crispX + halfWidth, topBox], ['L', crispX + halfWidth, bottomBox], ['Z'], // Ensure a nice rectangle #2602
                ['M', crispX, topBox], [
                    'L',
                    // #460, #2094
                    crispX,
                    hasTopWhisker ?
                        Math.round(reversedYAxis ?
                            point.yBottom :
                            point.plotHigh) :
                        topBox
                ], ['M', crispX, bottomBox], [
                    'L',
                    // #460, #2094
                    crispX,
                    hasBottomWhisker ?
                        Math.round(reversedYAxis ?
                            point.plotHigh :
                            point.yBottom) :
                        bottomBox
                ]);
                graphic[isNew ? 'attr' : 'animate']({ d: path })
                    .addClass(point.getClassName(), true);
            }
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
CandlestickSeries.defaultOptions = CandlestickSeries_merge(CandlestickSeries_OHLCSeries.defaultOptions, { tooltip: CandlestickSeries_OHLCSeries.defaultOptions.tooltip }, Candlestick_CandlestickSeriesDefaults);
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('candlestick', CandlestickSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Candlestick_CandlestickSeries = ((/* unused pure expression or super */ null && (CandlestickSeries)));

;// ./code/es-modules/Series/Flags/FlagsPoint.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { column: { prototype: { pointClass: FlagsPoint_ColumnPoint } } } = (external_highcharts_src_js_default_SeriesRegistry_default()).seriesTypes;

const { isNumber: FlagsPoint_isNumber } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Class
 *
 * */
class FlagsPoint extends FlagsPoint_ColumnPoint {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        super(...arguments);
        this.ttBelow = false;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    isValid() {
        // #9233 - Prevent from treating flags as null points (even if
        // they have no y values defined).
        return FlagsPoint_isNumber(this.y) || typeof this.y === 'undefined';
    }
    /**
     * @private
     */
    hasNewShapeType() {
        const shape = this.options.shape || this.series.options.shape;
        return this.graphic && shape && shape !== this.graphic.symbolKey;
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsPoint = (FlagsPoint);

;// ./code/es-modules/Series/Flags/FlagsSeriesDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * Flags are used to mark events in stock charts. They can be added on the
 * timeline, or attached to a specific series.
 *
 * @sample stock/demo/flags-general/
 *         Flags on a line series
 *
 * @extends      plotOptions.column
 * @excluding    animation, borderColor, borderWidth,
 *               colorByPoint, cropThreshold, dataGrouping, pointPadding,
 *               pointWidth, turboThreshold
 * @product      highstock
 * @optionparent plotOptions.flags
 */
const FlagsSeriesDefaults = {
    /**
     * The corner radius of the border surrounding each flag. For `squarepin`
     * shaped flags only. A number signifies pixels. A percentage string, like
     * for example 50%, signifies a relative size.
     */
    borderRadius: 0,
    /**
     * In case the flag is placed on a series, on what point key to place
     * it. Line and columns have one key, `y`. In range or OHLC-type series,
     * however, the flag can optionally be placed on the `open`, `high`,
     * `low` or `close` key.
     *
     * @sample {highstock} stock/plotoptions/flags-onkey/
     *         Range series, flag on high
     *
     * @type       {string}
     * @default    y
     * @since      4.2.2
     * @product    highstock
     * @validvalue ["y", "open", "high", "low", "close"]
     * @apioption  plotOptions.flags.onKey
     */
    /**
     * The id of the series that the flags should be drawn on. If no id
     * is given, the flags are drawn on the x axis.
     *
     * @sample {highstock} stock/plotoptions/flags/
     *         Flags on series and on x axis
     *
     * @type      {string}
     * @product   highstock
     * @apioption plotOptions.flags.onSeries
     */
    pointRange: 0, // #673
    /**
     * Whether the flags are allowed to overlap sideways. If `false`, the
     * flags are moved sideways using an algorithm that seeks to place every
     * flag as close as possible to its original position.
     *
     * @sample {highstock} stock/plotoptions/flags-allowoverlapx
     *         Allow sideways overlap
     *
     * @since 6.0.4
     */
    allowOverlapX: false,
    /**
     * The shape of the marker. Can be one of "flag", "circlepin",
     * "squarepin", or an image of the format `url(/path-to-image.jpg)`.
     * Individual shapes can also be set for each point.
     *
     * @sample {highstock} stock/plotoptions/flags/
     *         Different shapes
     *
     * @type    {Highcharts.FlagsShapeValue}
     * @product highstock
     */
    shape: 'flag',
    /**
     * When multiple flags in the same series fall on the same value, this
     * number determines the vertical offset between them.
     *
     * @sample {highstock} stock/plotoptions/flags-stackdistance/
     *         A greater stack distance
     *
     * @product highstock
     */
    stackDistance: 12,
    /**
     * Text alignment for the text inside the flag.
     *
     * @since      5.0.0
     * @product    highstock
     * @validvalue ["left", "center", "right"]
     */
    textAlign: 'center',
    /**
     * Specific tooltip options for flag series. Flag series tooltips are
     * different from most other types in that a flag doesn't have a data
     * value, so the tooltip rather displays the `text` option for each
     * point.
     *
     * @extends   plotOptions.series.tooltip
     * @excluding changeDecimals, valueDecimals, valuePrefix, valueSuffix
     * @product   highstock
     */
    tooltip: {
        pointFormat: '{point.text}'
    },
    /**
     * @type {number|null}
     */
    threshold: null,
    /**
     * The text to display on each flag. This can be defined on series
     * level, or individually for each point. Defaults to `"A"`.
     *
     * @type      {string}
     * @default   A
     * @product   highstock
     * @apioption plotOptions.flags.title
     */
    /**
     * The y position of the top left corner of the flag relative to either
     * the series (if onSeries is defined), or the x axis. Defaults to
     * `-30`.
     *
     * @product highstock
     */
    y: -30,
    /**
     * Whether to use HTML to render the flag texts. Using HTML allows for
     * advanced formatting, images and reliable bi-directional text
     * rendering. Note that exported images won't respect the HTML, and that
     * HTML won't respect Z-index settings.
     *
     * @type      {boolean}
     * @default   false
     * @since     1.3
     * @product   highstock
     * @apioption plotOptions.flags.useHTML
     */
    /**
     * Fixed width of the flag's shape. By default, width is autocalculated
     * according to the flag's title.
     *
     * @sample {highstock} stock/demo/flags-shapes/
     *         Flags with fixed width
     *
     * @type      {number}
     * @product   highstock
     * @apioption plotOptions.flags.width
     */
    /**
     * Fixed height of the flag's shape. By default, height is
     * autocalculated according to the flag's title.
     *
     * @type      {number}
     * @product   highstock
     * @apioption plotOptions.flags.height
     */
    /**
     * The fill color for the flags.
     *
     * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @product highstock
     */
    fillColor: "#ffffff" /* Palette.backgroundColor */,
    /**
     * The color of the line/border of the flag.
     *
     * In styled mode, the stroke is set in the
     * `.highcharts-flag-series.highcharts-point` rule.
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default   #000000
     * @product   highstock
     * @apioption plotOptions.flags.lineColor
     */
    /**
     * The pixel width of the flag's line/border.
     *
     * @product highstock
     */
    lineWidth: 1,
    states: {
        /**
         * @extends plotOptions.column.states.hover
         * @product highstock
         */
        hover: {
            /**
             * The color of the line/border of the flag.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @product highstock
             */
            lineColor: "#000000" /* Palette.neutralColor100 */,
            /**
             * The fill or background color of the flag.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @product highstock
             */
            fillColor: "#ccd3ff" /* Palette.highlightColor20 */
        }
    },
    /**
     * The text styles of the flag.
     *
     * In styled mode, the styles are set in the
     * `.highcharts-flag-series .highcharts-point` rule.
     *
     * @type    {Highcharts.CSSObject}
     * @default {"fontSize": "11px", "fontWeight": "bold"}
     * @product highstock
     */
    style: {
        /** @ignore-option */
        color: "#000000" /* Palette.neutralColor100 */,
        /** @ignore-option */
        fontSize: '0.7em',
        /** @ignore-option */
        fontWeight: 'bold'
    }
};
/**
 * A `flags` series. If the [type](#series.flags.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.flags
 * @excluding animation, borderColor, borderRadius, borderWidth, colorByPoint,
 *            connectNulls, cropThreshold, dashStyle, dataGrouping, dataParser,
 *            dataURL, gapSize, gapUnit, linecap, lineWidth, marker,
 *            pointPadding, pointWidth, step, turboThreshold, useOhlcData
 * @product   highstock
 * @apioption series.flags
 */
/**
 * An array of data points for the series. For the `flags` series type,
 * points can be given in the following ways:
 *
 * 1. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.flags.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        title: "A",
 *        text: "First event"
 *    }, {
 *        x: 1,
 *        title: "B",
 *        text: "Second event"
 *    }]
 *    ```
 *
 * @type      {Array<*>}
 * @extends   series.line.data
 * @excluding dataLabels, marker, name, y
 * @product   highstock
 * @apioption series.flags.data
 */
/**
 * The fill color of an individual flag. By default it inherits from
 * the series color.
 *
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @product   highstock
 * @apioption series.flags.data.fillColor
 */
/**
 * The longer text to be shown in the flag's tooltip.
 *
 * @type      {string}
 * @product   highstock
 * @apioption series.flags.data.text
 */
/**
 * The short text to be shown on the flag.
 *
 * @type      {string}
 * @product   highstock
 * @apioption series.flags.data.title
 */
''; // Keeps doclets above in transpiled file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsSeriesDefaults = (FlagsSeriesDefaults);

;// external ["../highcharts.src.js","default","RendererRegistry"]
const external_highcharts_src_js_default_RendererRegistry_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].RendererRegistry;
var external_highcharts_src_js_default_RendererRegistry_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_RendererRegistry_namespaceObject);
;// ./code/es-modules/Series/Flags/FlagsSymbols.js
/* *
 *
 *  Imports
 *
 * */

/* *
 *
 *  Composition
 *
 * */
var FlagsSymbols;
(function (FlagsSymbols) {
    /* *
     *
     *  Constants
     *
     * */
    const modifiedMembers = [];
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * @private
     */
    function compose(SVGRendererClass) {
        if (modifiedMembers.indexOf(SVGRendererClass) === -1) {
            modifiedMembers.push(SVGRendererClass);
            const symbols = SVGRendererClass.prototype.symbols;
            symbols.flag = flag;
            createPinSymbol(symbols, 'circle');
            createPinSymbol(symbols, 'square');
        }
        const RendererClass = external_highcharts_src_js_default_RendererRegistry_default().getRendererType();
        // The symbol callbacks are generated on the SVGRenderer object in all
        // browsers.
        if (modifiedMembers.indexOf(RendererClass)) {
            modifiedMembers.push(RendererClass);
        }
    }
    FlagsSymbols.compose = compose;
    /**
     * Create the flag icon with anchor.
     * @private
     */
    function flag(x, y, w, h, options) {
        const anchorX = (options && options.anchorX) || x, anchorY = (options && options.anchorY) || y;
        // To do: unwanted any cast because symbols.circle has wrong type, it
        // actually returns an SVGPathArray
        const path = this.circle(anchorX - 1, anchorY - 1, 2, 2);
        path.push(['M', anchorX, anchorY], ['L', x, y + h], ['L', x, y], ['L', x + w, y], ['L', x + w, y + h], ['L', x, y + h], ['Z']);
        return path;
    }
    /**
     * Create the circlepin and squarepin icons with anchor.
     * @private
     */
    function createPinSymbol(symbols, shape) {
        symbols[(shape + 'pin')] = function (x, y, w, h, options) {
            const anchorX = options && options.anchorX, anchorY = options && options.anchorY;
            let path;
            // For single-letter flags, make sure circular flags are not taller
            // than their width
            if (shape === 'circle' && h > w) {
                x -= Math.round((h - w) / 2);
                w = h;
            }
            path = (symbols[shape])(x, y, w, h, options);
            if (anchorX && anchorY) {
                /**
                 * If the label is below the anchor, draw the connecting line
                 * from the top edge of the label, otherwise start drawing from
                 * the bottom edge
                 */
                let labelX = anchorX;
                if (shape === 'circle') {
                    labelX = x + w / 2;
                }
                else {
                    const startSeg = path[0];
                    const endSeg = path[1];
                    if (startSeg[0] === 'M' && endSeg[0] === 'L') {
                        labelX = (startSeg[1] + endSeg[1]) / 2;
                    }
                }
                const labelY = (y > anchorY) ? y : y + h;
                path.push([
                    'M',
                    labelX,
                    labelY
                ], [
                    'L',
                    anchorX,
                    anchorY
                ]);
                path = path.concat(symbols.circle(anchorX - 1, anchorY - 1, 2, 2));
            }
            return path;
        };
    }
})(FlagsSymbols || (FlagsSymbols = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsSymbols = (FlagsSymbols);

;// external ["../highcharts.src.js","default","Series","types","column"]
const external_highcharts_src_js_default_Series_types_column_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].Series.types.column;
var external_highcharts_src_js_default_Series_types_column_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_Series_types_column_namespaceObject);
;// ./code/es-modules/Series/OnSeriesComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { composed: OnSeriesComposition_composed } = (external_highcharts_src_js_default_default());
const { prototype: OnSeriesComposition_columnProto } = (external_highcharts_src_js_default_Series_types_column_default());

const { prototype: seriesProto } = (external_highcharts_src_js_default_Series_default());

const { defined: OnSeriesComposition_defined, pushUnique: OnSeriesComposition_pushUnique, stableSort } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
var OnSeriesComposition;
(function (OnSeriesComposition) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @private
     */
    function compose(SeriesClass) {
        if (OnSeriesComposition_pushUnique(OnSeriesComposition_composed, 'OnSeries')) {
            const seriesProto = SeriesClass.prototype;
            seriesProto.getPlotBox = getPlotBox;
            seriesProto.translate = translate;
        }
        return SeriesClass;
    }
    OnSeriesComposition.compose = compose;
    /**
     * Override getPlotBox. If the onSeries option is valid, return the plot box
     * of the onSeries, otherwise proceed as usual.
     *
     * @private
     */
    function getPlotBox(name) {
        return seriesProto.getPlotBox.call((this.options.onSeries &&
            this.chart.get(this.options.onSeries)) || this, name);
    }
    OnSeriesComposition.getPlotBox = getPlotBox;
    /**
     * Extend the translate method by placing the point on the related series
     *
     * @private
     */
    function translate() {
        OnSeriesComposition_columnProto.translate.apply(this);
        const series = this, options = series.options, chart = series.chart, points = series.points, optionsOnSeries = options.onSeries, onSeries = (optionsOnSeries &&
            chart.get(optionsOnSeries)), step = onSeries && onSeries.options.step, onData = (onSeries && onSeries.points), inverted = chart.inverted, xAxis = series.xAxis, yAxis = series.yAxis;
        let cursor = points.length - 1, point, lastPoint, onKey = options.onKey || 'y', i = onData && onData.length, xOffset = 0, leftPoint, lastX, rightPoint, currentDataGrouping, distanceRatio;
        // Relate to a master series
        if (onSeries && onSeries.visible && i) {
            xOffset = (onSeries.pointXOffset || 0) + (onSeries.barW || 0) / 2;
            currentDataGrouping = onSeries.currentDataGrouping;
            lastX = (onData[i - 1].x +
                (currentDataGrouping ? currentDataGrouping.totalRange : 0)); // #2374
            // sort the data points
            stableSort(points, (a, b) => (a.x - b.x));
            onKey = 'plot' + onKey[0].toUpperCase() + onKey.substr(1);
            while (i-- && points[cursor]) {
                leftPoint = onData[i];
                point = points[cursor];
                point.y = leftPoint.y;
                if (leftPoint.x <= point.x &&
                    typeof leftPoint[onKey] !== 'undefined') {
                    if (point.x <= lastX) { // #803
                        point.plotY = leftPoint[onKey];
                        // Interpolate between points, #666
                        if (leftPoint.x < point.x &&
                            !step) {
                            rightPoint = onData[i + 1];
                            if (rightPoint &&
                                typeof rightPoint[onKey] !== 'undefined') {
                                // If the series is spline, calculate Y of the
                                // point on the bezier line. #19264
                                if (OnSeriesComposition_defined(point.plotX) &&
                                    onSeries.is('spline')) {
                                    leftPoint = leftPoint;
                                    rightPoint = rightPoint;
                                    const p0 = [
                                        leftPoint.plotX || 0,
                                        leftPoint.plotY || 0
                                    ], p3 = [
                                        rightPoint.plotX || 0,
                                        rightPoint.plotY || 0
                                    ], p1 = (leftPoint.controlPoints?.high ||
                                        p0), p2 = (rightPoint.controlPoints?.low ||
                                        p3), pixelThreshold = 0.25, maxIterations = 100, calculateCoord = (t, key) => (
                                    // The parametric formula for the
                                    // cubic Bezier curve.
                                    Math.pow(1 - t, 3) * p0[key] +
                                        3 * (1 - t) * (1 - t) * t *
                                            p1[key] + 3 * (1 - t) * t * t *
                                        p2[key] + t * t * t * p3[key]);
                                    let tMin = 0, tMax = 1, t;
                                    // Find `t` of the parametric function of
                                    // the bezier curve for the given `plotX`.
                                    for (let i = 0; i < maxIterations; i++) {
                                        const tMid = (tMin + tMax) / 2;
                                        const xMid = calculateCoord(tMid, 0);
                                        if (xMid === null) {
                                            break;
                                        }
                                        if (Math.abs(xMid - point.plotX) < pixelThreshold) {
                                            t = tMid;
                                            break;
                                        }
                                        if (xMid < point.plotX) {
                                            tMin = tMid;
                                        }
                                        else {
                                            tMax = tMid;
                                        }
                                    }
                                    if (OnSeriesComposition_defined(t)) {
                                        point.plotY =
                                            calculateCoord(t, 1);
                                        point.y =
                                            yAxis.toValue(point.plotY, true);
                                    }
                                }
                                else {
                                    // The distance ratio, between 0 and 1
                                    distanceRatio =
                                        (point.x - leftPoint.x) /
                                            (rightPoint.x - leftPoint.x);
                                    point.plotY +=
                                        distanceRatio *
                                            // The plotY distance
                                            (rightPoint[onKey] - leftPoint[onKey]);
                                    point.y +=
                                        distanceRatio *
                                            (rightPoint.y - leftPoint.y);
                                }
                            }
                        }
                    }
                    cursor--;
                    i++; // Check again for points in the same x position
                    if (cursor < 0) {
                        break;
                    }
                }
            }
        }
        // Add plotY position and handle stacking
        points.forEach((point, i) => {
            let stackIndex;
            point.plotX += xOffset; // #2049
            // Undefined plotY means the point is either on axis, outside series
            // range or hidden series. If the series is outside the range of the
            // x axis it should fall through with an undefined plotY, but then
            // we must remove the shapeArgs (#847). For inverted charts, we need
            // to calculate position anyway, because series.invertGroups is not
            // defined
            if (typeof point.plotY === 'undefined' || inverted) {
                if (point.plotX >= 0 &&
                    point.plotX <= xAxis.len) {
                    // We're inside xAxis range
                    if (inverted) {
                        point.plotY = xAxis.translate(point.x, 0, 1, 0, 1);
                        point.plotX = OnSeriesComposition_defined(point.y) ?
                            yAxis.translate(point.y, 0, 0, 0, 1) :
                            0;
                    }
                    else {
                        point.plotY = (xAxis.opposite ? 0 : series.yAxis.len) +
                            xAxis.offset; // For the windbarb demo
                    }
                }
                else {
                    point.shapeArgs = {}; // 847
                }
            }
            // If multiple flags appear at the same x, order them into a stack
            lastPoint = points[i - 1];
            if (lastPoint && lastPoint.plotX === point.plotX) {
                if (typeof lastPoint.stackIndex === 'undefined') {
                    lastPoint.stackIndex = 0;
                }
                stackIndex = lastPoint.stackIndex + 1;
            }
            point.stackIndex = stackIndex; // #3639
        });
        this.onSeries = onSeries;
    }
    OnSeriesComposition.translate = translate;
})(OnSeriesComposition || (OnSeriesComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Series_OnSeriesComposition = (OnSeriesComposition);

;// external ["../highcharts.src.js","default","SVGElement"]
const external_highcharts_src_js_default_SVGElement_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].SVGElement;
var external_highcharts_src_js_default_SVGElement_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_SVGElement_namespaceObject);
;// ./code/es-modules/Series/Flags/FlagsSeries.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { noop: FlagsSeries_noop } = (external_highcharts_src_js_default_default());


const { distribute } = (external_highcharts_src_js_default_default());

const { series: Series, seriesTypes: { column: FlagsSeries_ColumnSeries } } = (external_highcharts_src_js_default_SeriesRegistry_default());


const { addEvent: FlagsSeries_addEvent, defined: FlagsSeries_defined, extend: FlagsSeries_extend, isNumber: FlagsSeries_isNumber, merge: FlagsSeries_merge, objectEach: FlagsSeries_objectEach, wrap } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Classes
 *
 * */
/**
 * The Flags series.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.flags
 *
 * @augments Highcharts.Series
 */
class FlagsSeries extends FlagsSeries_ColumnSeries {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Disable animation, but keep clipping (#8546).
     * @private
     */
    animate(init) {
        if (init) {
            this.setClip();
        }
    }
    /**
     * Draw the markers.
     * @private
     */
    drawPoints() {
        const series = this, points = series.points, chart = series.chart, renderer = chart.renderer, inverted = chart.inverted, options = series.options, optionsY = options.y, yAxis = series.yAxis, boxesMap = {}, boxes = [], borderRadius = FlagsSeries_isNumber(options.borderRadius) ?
            options.borderRadius : 0;
        let plotX, plotY, shape, i, point, graphic, stackIndex, anchorY, attribs, outsideRight, centered;
        i = points.length;
        while (i--) {
            point = points[i];
            outsideRight =
                (inverted ? point.plotY : point.plotX) >
                    series.xAxis.len;
            plotX = point.plotX;
            stackIndex = point.stackIndex;
            shape = point.options.shape || options.shape;
            plotY = point.plotY;
            if (typeof plotY !== 'undefined') {
                plotY = point.plotY + optionsY -
                    (typeof stackIndex !== 'undefined' &&
                        (stackIndex * options.stackDistance));
            }
            // Skip connectors for higher level stacked points
            point.anchorX = stackIndex ? void 0 : point.plotX;
            anchorY = stackIndex ? void 0 : point.plotY;
            centered = shape !== 'flag';
            graphic = point.graphic;
            // Only draw the point if y is defined and the flag is within
            // the visible area
            if (typeof plotY !== 'undefined' &&
                plotX >= 0 &&
                !outsideRight) {
                // #15384
                if (graphic && point.hasNewShapeType()) {
                    graphic = graphic.destroy();
                }
                // Create the flag
                if (!graphic) {
                    graphic = point.graphic = renderer.label('', 0, void 0, shape, void 0, void 0, options.useHTML)
                        .addClass(point.getClassName())
                        .add(series.markerGroup);
                    // Add reference to the point for tracker (#6303)
                    if (point.graphic.div) {
                        point.graphic.div.point = point;
                    }
                    graphic.isNew = true;
                }
                graphic.attr({
                    align: centered ? 'center' : 'left',
                    width: options.width,
                    height: options.height,
                    'text-align': options.textAlign,
                    r: borderRadius
                });
                if (!chart.styledMode) {
                    graphic
                        .attr(series.pointAttribs(point))
                        .css(FlagsSeries_merge(options.style, point.style))
                        .shadow(options.shadow);
                }
                if (plotX > 0) { // #3119
                    plotX -= graphic.strokeWidth() % 2; // #4285
                }
                // Plant the flag
                attribs = {
                    y: plotY,
                    anchorY: anchorY
                };
                if (options.allowOverlapX) {
                    attribs.x = plotX;
                    attribs.anchorX = point.anchorX;
                }
                graphic.attr({
                    // Allow empty string as a flag title (#20549)
                    text: point.options.title ?? options.title ?? 'A'
                })[graphic.isNew ? 'attr' : 'animate'](attribs);
                // Rig for the distribute function
                if (!options.allowOverlapX) {
                    if (!boxesMap[point.plotX]) {
                        boxesMap[point.plotX] = {
                            align: centered ? 0.5 : 0,
                            size: graphic.width || 0,
                            target: plotX,
                            anchorX: plotX
                        };
                    }
                    else {
                        boxesMap[point.plotX].size = Math.max(boxesMap[point.plotX].size, graphic.width || 0);
                    }
                }
                // Set the tooltip anchor position
                point.tooltipPos = [
                    plotX,
                    plotY + yAxis.pos - chart.plotTop
                ]; // #6327
            }
            else if (graphic) {
                point.graphic = graphic.destroy();
            }
        }
        // Handle X-dimension overlapping
        if (!options.allowOverlapX) {
            let maxDistance = 100;
            FlagsSeries_objectEach(boxesMap, function (box) {
                box.plotX = box.anchorX;
                boxes.push(box);
                maxDistance = Math.max(box.size, maxDistance);
            });
            // If necessary (for overlapping or long labels)  distribute it
            // depending on the label width or a hardcoded value, #16041.
            distribute(boxes, inverted ? yAxis.len : this.xAxis.len, maxDistance);
            for (const point of points) {
                const plotX = point.plotX, graphic = point.graphic, box = graphic && boxesMap[plotX];
                if (box && graphic) {
                    // Hide flag when its box position is not specified
                    // (#8573, #9299)
                    if (!FlagsSeries_defined(box.pos)) {
                        graphic.hide().isNew = true;
                    }
                    else {
                        graphic[graphic.isNew ? 'attr' : 'animate']({
                            x: box.pos + (box.align || 0) * box.size,
                            anchorX: point.anchorX
                        }).show().isNew = false;
                    }
                }
            }
        }
        // Can be a mix of SVG and HTML and we need events for both (#6303)
        if (options.useHTML && series.markerGroup) {
            wrap(series.markerGroup, 'on', function (proceed) {
                return external_highcharts_src_js_default_SVGElement_default().prototype.on.apply(
                // For HTML
                // eslint-disable-next-line no-invalid-this
                proceed.apply(this, [].slice.call(arguments, 1)), 
                // And for SVG
                [].slice.call(arguments, 1));
            });
        }
    }
    /**
     * Extend the column trackers with listeners to expand and contract
     * stacks.
     * @private
     */
    drawTracker() {
        const series = this, points = series.points;
        super.drawTracker();
        /* *
        * Bring each stacked flag up on mouse over, this allows readability
        * of vertically stacked elements as well as tight points on the x
        * axis. #1924.
        */
        for (const point of points) {
            const graphic = point.graphic;
            if (graphic) {
                if (point.unbindMouseOver) {
                    point.unbindMouseOver();
                }
                point.unbindMouseOver = FlagsSeries_addEvent(graphic.element, 'mouseover', function () {
                    // Raise this point
                    if (point.stackIndex > 0 &&
                        !point.raised) {
                        point._y = graphic.y;
                        graphic.attr({
                            y: point._y - 8
                        });
                        point.raised = true;
                    }
                    // Revert other raised points
                    for (const otherPoint of points) {
                        if (otherPoint !== point &&
                            otherPoint.raised &&
                            otherPoint.graphic) {
                            otherPoint.graphic.attr({
                                y: otherPoint._y
                            });
                            otherPoint.raised = false;
                        }
                    }
                });
            }
        }
    }
    /**
     * Get presentational attributes
     * @private
     */
    pointAttribs(point, state) {
        const options = this.options, color = (point && point.color) || this.color;
        let lineColor = options.lineColor, lineWidth = (point && point.lineWidth), fill = (point && point.fillColor) || options.fillColor;
        if (state) {
            fill = options.states[state].fillColor;
            lineColor = options.states[state].lineColor;
            lineWidth = options.states[state].lineWidth;
        }
        return {
            fill: fill || color,
            stroke: lineColor || color,
            'stroke-width': lineWidth || options.lineWidth || 0
        };
    }
    /**
     * @private
     */
    setClip() {
        Series.prototype.setClip.apply(this, arguments);
        if (this.options.clip !== false &&
            this.sharedClipKey &&
            this.markerGroup) {
            this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey]);
        }
    }
}
/* *
 *
 *  Static Properties
 *
 * */
FlagsSeries.compose = Flags_FlagsSymbols.compose;
FlagsSeries.defaultOptions = FlagsSeries_merge(FlagsSeries_ColumnSeries.defaultOptions, Flags_FlagsSeriesDefaults);
Series_OnSeriesComposition.compose(FlagsSeries);
FlagsSeries_extend(FlagsSeries.prototype, {
    allowDG: false,
    forceCrop: true,
    invertible: false, // Flags series group should not be invertible (#14063).
    noSharedTooltip: true,
    pointClass: Flags_FlagsPoint,
    sorted: false,
    takeOrdinalPosition: false, // #1074
    trackerGroups: ['markerGroup'],
    buildKDTree: FlagsSeries_noop,
    /**
     * Inherit the initialization from base Series.
     * @private
     */
    init: Series.prototype.init
});
external_highcharts_src_js_default_SeriesRegistry_default().registerSeriesType('flags', FlagsSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Flags_FlagsSeries = (FlagsSeries);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"circlepin"|"flag"|"squarepin"} Highcharts.FlagsShapeValue
 */
''; // Detach doclets above

;// external ["../highcharts.src.js","default","StackItem"]
const external_highcharts_src_js_default_StackItem_namespaceObject = __WEBPACK_EXTERNAL_MODULE__highcharts_src_js_8202131d__["default"].StackItem;
var external_highcharts_src_js_default_StackItem_default = /*#__PURE__*/__webpack_require__.n(external_highcharts_src_js_default_StackItem_namespaceObject);
;// ./code/es-modules/Core/Axis/BrokenAxis.js
/* *
 *
 *  (c) 2009-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { addEvent: BrokenAxis_addEvent, find: BrokenAxis_find, fireEvent: BrokenAxis_fireEvent, isArray: BrokenAxis_isArray, isNumber: BrokenAxis_isNumber, pick: BrokenAxis_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/**
 * Axis with support of broken data rows.
 * @private
 */
var BrokenAxis;
(function (BrokenAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Adds support for broken axes.
     * @private
     */
    function compose(AxisClass, SeriesClass) {
        if (!AxisClass.keepProps.includes('brokenAxis')) {
            AxisClass.keepProps.push('brokenAxis');
            BrokenAxis_addEvent(AxisClass, 'init', onAxisInit);
            BrokenAxis_addEvent(AxisClass, 'afterInit', onAxisAfterInit);
            BrokenAxis_addEvent(AxisClass, 'afterSetTickPositions', onAxisAfterSetTickPositions);
            BrokenAxis_addEvent(AxisClass, 'afterSetOptions', onAxisAfterSetOptions);
            const seriesProto = SeriesClass.prototype;
            seriesProto.drawBreaks = seriesDrawBreaks;
            seriesProto.gappedPath = seriesGappedPath;
            BrokenAxis_addEvent(SeriesClass, 'afterGeneratePoints', onSeriesAfterGeneratePoints);
            BrokenAxis_addEvent(SeriesClass, 'afterRender', onSeriesAfterRender);
        }
        return AxisClass;
    }
    BrokenAxis.compose = compose;
    /**
     * @private
     */
    function onAxisAfterInit() {
        if (typeof this.brokenAxis !== 'undefined') {
            this.brokenAxis.setBreaks(this.options.breaks, false);
        }
    }
    /**
     * Force Axis to be not-ordinal when breaks are defined.
     * @private
     */
    function onAxisAfterSetOptions() {
        const axis = this;
        // Too early for axis.brokenAxis?.hasBreaks.
        if (Object.keys(axis.options.breaks?.[0] || {}).length) {
            axis.options.ordinal = false;
        }
    }
    /**
     * @private
     */
    function onAxisAfterSetTickPositions() {
        const axis = this, brokenAxis = axis.brokenAxis;
        if (brokenAxis?.hasBreaks) {
            const tickPositions = axis.tickPositions, info = axis.tickPositions.info, newPositions = [];
            for (let i = 0; i < tickPositions.length; i++) {
                if (!brokenAxis.isInAnyBreak(tickPositions[i])) {
                    newPositions.push(tickPositions[i]);
                }
            }
            axis.tickPositions = newPositions;
            axis.tickPositions.info = info;
        }
    }
    /**
     * @private
     */
    function onAxisInit() {
        const axis = this;
        if (!axis.brokenAxis) {
            axis.brokenAxis = new Additions(axis);
        }
    }
    /**
     * @private
     */
    function onSeriesAfterGeneratePoints() {
        const { isDirty, options: { connectNulls }, points, xAxis, yAxis } = this;
        // Set, or reset visibility of the points. Axis.setBreaks marks
        // the series as isDirty
        if (isDirty) {
            let i = points.length;
            while (i--) {
                const point = points[i];
                // Respect nulls inside the break (#4275)
                const nullGap = point.y === null && connectNulls === false;
                const isPointInBreak = (!nullGap && (xAxis?.brokenAxis?.isInAnyBreak(point.x, true) ||
                    yAxis?.brokenAxis?.isInAnyBreak(point.y, true)));
                // Set point.visible if in any break.
                // If not in break, reset visible to original value.
                point.visible = isPointInBreak ?
                    false :
                    point.options.visible !== false;
            }
        }
    }
    /**
     * @private
     */
    function onSeriesAfterRender() {
        this.drawBreaks(this.xAxis, ['x']);
        this.drawBreaks(this.yAxis, BrokenAxis_pick(this.pointArrayMap, ['y']));
    }
    /**
     * @private
     */
    function seriesDrawBreaks(axis, keys) {
        const series = this, points = series.points;
        let breaks, threshold, y;
        if (axis?.brokenAxis?.hasBreaks) {
            const brokenAxis = axis.brokenAxis;
            keys.forEach(function (key) {
                breaks = brokenAxis?.breakArray || [];
                threshold = axis.isXAxis ?
                    axis.min :
                    BrokenAxis_pick(series.options.threshold, axis.min);
                points.forEach(function (point) {
                    y = point['stack' + key.toUpperCase()] ??
                        point[key];
                    breaks.forEach(function (brk) {
                        if (BrokenAxis_isNumber(threshold) && BrokenAxis_isNumber(y)) {
                            let eventName = '';
                            if ((threshold < brk.from && y > brk.to) ||
                                (threshold > brk.from && y < brk.from)) {
                                eventName = 'pointBreak';
                            }
                            else if ((threshold < brk.from &&
                                y > brk.from &&
                                y < brk.to) || (threshold > brk.from &&
                                y > brk.to &&
                                y < brk.from)) {
                                eventName = 'pointInBreak';
                            }
                            if (eventName) {
                                BrokenAxis_fireEvent(axis, eventName, { point, brk });
                            }
                        }
                    });
                });
            });
        }
    }
    /**
     * Extend getGraphPath by identifying gaps in the data so that we
     * can draw a gap in the line or area. This was moved from ordinal
     * axis module to broken axis module as of #5045.
     *
     * @private
     * @function Highcharts.Series#gappedPath
     *
     * @return {Highcharts.SVGPathArray}
     * Gapped path
     */
    function seriesGappedPath() {
        const currentDataGrouping = this.currentDataGrouping, groupingSize = currentDataGrouping?.gapSize, points = this.points.slice(), yAxis = this.yAxis;
        let gapSize = this.options.gapSize, i = points.length - 1, stack;
        /**
         * Defines when to display a gap in the graph, together with the
         * [gapUnit](plotOptions.series.gapUnit) option.
         *
         * In case when `dataGrouping` is enabled, points can be grouped
         * into a larger time span. This can make the grouped points to
         * have a greater distance than the absolute value of `gapSize`
         * property, which will result in disappearing graph completely.
         * To prevent this situation the mentioned distance between
         * grouped points is used instead of previously defined
         * `gapSize`.
         *
         * In practice, this option is most often used to visualize gaps
         * in time series. In a stock chart, intraday data is available
         * for daytime hours, while gaps will appear in nights and
         * weekends.
         *
         * @see [gapUnit](plotOptions.series.gapUnit)
         * @see [xAxis.breaks](#xAxis.breaks)
         *
         * @sample {highstock} stock/plotoptions/series-gapsize/
         * Setting the gap size to 2 introduces gaps for weekends in
         * daily datasets.
         *
         * @type      {number}
         * @default   0
         * @product   highstock
         * @requires  modules/broken-axis
         * @apioption plotOptions.series.gapSize
         */
        /**
         * Together with [gapSize](plotOptions.series.gapSize), this
         * option defines where to draw gaps in the graph.
         *
         * When the `gapUnit` is `"relative"` (default), a gap size of 5
         * means that if the distance between two points is greater than
         * 5 times that of the two closest points, the graph will be
         * broken.
         *
         * When the `gapUnit` is `"value"`, the gap is based on absolute
         * axis values, which on a datetime axis is milliseconds. This
         * also applies to the navigator series that inherits gap
         * options from the base series.
         *
         * @see [gapSize](plotOptions.series.gapSize)
         *
         * @type       {string}
         * @default    relative
         * @since      5.0.13
         * @product    highstock
         * @validvalue ["relative", "value"]
         * @requires   modules/broken-axis
         * @apioption  plotOptions.series.gapUnit
         */
        if (gapSize && i > 0) { // #5008
            // Gap unit is relative
            if (this.options.gapUnit !== 'value') {
                gapSize *= this.basePointRange;
            }
            // Setting a new gapSize in case dataGrouping is enabled
            // (#7686)
            if (groupingSize &&
                groupingSize > gapSize &&
                // Except when DG is forced (e.g. from other series)
                // and has lower granularity than actual points (#11351)
                groupingSize >= this.basePointRange) {
                gapSize = groupingSize;
            }
            // Extension for ordinal breaks
            let current, next;
            while (i--) {
                // Reassign next if it is not visible
                if (!(next && next.visible !== false)) {
                    next = points[i + 1];
                }
                current = points[i];
                // Skip iteration if one of the points is not visible
                if (next.visible === false || current.visible === false) {
                    continue;
                }
                if (next.x - current.x > gapSize) {
                    const xRange = (current.x + next.x) / 2;
                    points.splice(// Insert after this one
                    i + 1, 0, {
                        isNull: true,
                        x: xRange
                    });
                    // For stacked chart generate empty stack items, #6546
                    if (yAxis.stacking && this.options.stacking) {
                        stack = yAxis.stacking.stacks[this.stackKey][xRange] = new (external_highcharts_src_js_default_StackItem_default())(yAxis, yAxis.options.stackLabels, false, xRange, this.stack ?? '');
                        stack.total = 0;
                    }
                }
                // Assign current to next for the upcoming iteration
                next = current;
            }
        }
        // Call base method
        return this.getGraphPath(points);
    }
    /* *
     *
     *  Class
     *
     * */
    /**
     * Provides support for broken axes.
     * @private
     * @class
     */
    class Additions {
        /* *
         *
         *  Static Functions
         *
         * */
        /**
         * @private
         */
        static isInBreak(brk, val) {
            const repeat = brk.repeat || Infinity, from = brk.from, length = brk.to - brk.from, test = (val >= from ?
                (val - from) % repeat :
                repeat - ((from - val) % repeat));
            let ret;
            if (!brk.inclusive) {
                ret = test < length && test !== 0;
            }
            else {
                ret = test <= length;
            }
            return ret;
        }
        /**
         * @private
         */
        static lin2Val(val) {
            const axis = this, threshold = axis.min || 0, brokenAxis = axis.brokenAxis, breakArray = brokenAxis?.breakArray;
            if (!breakArray?.length || !BrokenAxis_isNumber(val)) {
                return val;
            }
            let nval = val;
            // Axis min is the anchor point. Above it, break gaps impact the
            // result differently than below.
            if (val > threshold) {
                for (const brk of breakArray) {
                    if (brk.from > nval) {
                        // Skip all breaks after the nval.
                        break;
                    }
                    else if (brk.to <= nval && brk.to > threshold) {
                        nval += brk.len;
                    }
                    else if (Additions.isInBreak(brk, nval)) {
                        nval += brk.len;
                    }
                }
            }
            else if (val < threshold) {
                for (const brk of breakArray) {
                    if (brk.from > threshold) {
                        // Skip all breaks above the threshold.
                        break;
                    }
                    else if (brk.from >= nval && brk.from < threshold) {
                        nval -= brk.len;
                    }
                    else if (Additions.isInBreak(brk, nval)) {
                        nval -= brk.len;
                    }
                }
            }
            return nval;
        }
        /**
         * @private
         */
        static val2Lin(val) {
            const axis = this, threshold = axis.min || 0, brokenAxis = axis.brokenAxis, breakArray = brokenAxis?.breakArray;
            if (!breakArray?.length || !BrokenAxis_isNumber(val)) {
                return val;
            }
            let nval = val;
            // Axis min is the anchor point. Above it, break gaps impact the
            // result differently than below.
            if (val > threshold) {
                for (const brk of breakArray) {
                    if (brk.to <= val && brk.to > threshold) {
                        nval -= brk.len;
                    }
                    else if (brk.from > val) {
                        // Skip all breaks after the val.
                        break;
                    }
                    else if (Additions.isInBreak(brk, val)) {
                        nval -= (val - brk.from);
                        break;
                    }
                }
            }
            else if (val < threshold) {
                for (const brk of breakArray) {
                    if (brk.from >= val && brk.from < threshold) {
                        nval += brk.len;
                    }
                    else if (brk.from > threshold) {
                        // Skip all breaks before the threshold.
                        break;
                    }
                    else if (Additions.isInBreak(brk, val)) {
                        nval += (brk.to - val);
                        break;
                    }
                }
            }
            return nval;
        }
        /* *
         *
         *  Constructors
         *
         * */
        constructor(axis) {
            this.axis = axis;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Returns the first break found where the x is larger then break.from
         * and smaller then break.to.
         *
         * @param {number} x
         * The number which should be within a break.
         *
         * @param {Array<Highcharts.XAxisBreaksOptions>} breaks
         * The array of breaks to search within.
         *
         * @return {Highcharts.XAxisBreaksOptions|undefined}
         * Returns the first break found that matches, returns false if no break
         * is found.
         */
        findBreakAt(x, breaks) {
            return BrokenAxis_find(breaks, function (b) {
                return b.from < x && x < b.to;
            });
        }
        /**
         * @private
         */
        isInAnyBreak(val, testKeep) {
            const brokenAxis = this, axis = brokenAxis.axis, breaks = axis.options.breaks || [];
            let i = breaks.length, inbrk, keep, ret;
            if (i && BrokenAxis_isNumber(val)) {
                while (i--) {
                    if (Additions.isInBreak(breaks[i], val)) {
                        inbrk = true;
                        if (!keep) {
                            keep = BrokenAxis_pick(breaks[i].showPoints, !axis.isXAxis);
                        }
                    }
                }
                if (inbrk && testKeep) {
                    ret = inbrk && !keep;
                }
                else {
                    ret = inbrk;
                }
            }
            return ret;
        }
        /**
         * Dynamically set or unset breaks in an axis. This function in lighter
         * than using Axis.update, and it also preserves animation.
         *
         * @private
         * @function Highcharts.Axis#setBreaks
         *
         * @param {Array<Highcharts.XAxisBreaksOptions>} [breaks]
         * The breaks to add. When `undefined` it removes existing breaks.
         *
         * @param {boolean} [redraw=true]
         * Whether to redraw the chart immediately.
         */
        setBreaks(breaks, redraw) {
            const brokenAxis = this, axis = brokenAxis.axis, time = axis.chart.time, hasBreaks = BrokenAxis_isArray(breaks) &&
                !!Object.keys(breaks?.[0] || {}).length;
            axis.isDirty = (brokenAxis.hasBreaks ?? false) !== hasBreaks;
            brokenAxis.hasBreaks = hasBreaks;
            // Compile string dates
            breaks?.forEach((brk) => {
                brk.from = time.parse(brk.from) || 0;
                brk.to = time.parse(brk.to) || 0;
            });
            if (breaks !== axis.options.breaks) {
                axis.options.breaks = axis.userOptions.breaks = breaks;
            }
            axis.forceRedraw = true; // Force recalculation in setScale
            // Recalculate series related to the axis.
            axis.series.forEach(function (series) {
                series.isDirty = true;
            });
            if (!hasBreaks && axis.val2lin === Additions.val2Lin) {
                // Revert to prototype functions
                delete axis.val2lin;
                delete axis.lin2val;
            }
            if (hasBreaks) {
                axis.userOptions.ordinal = false;
                axis.lin2val = Additions.lin2Val;
                axis.val2lin = Additions.val2Lin;
                axis.setExtremes = function (newMin, newMax, redraw, animation, eventArguments) {
                    // If trying to set extremes inside a break, extend min to
                    // after, and max to before the break ( #3857 )
                    // but not for gantt (#13898);
                    if (brokenAxis.hasBreaks && !axis.treeGrid?.tree) {
                        const breaks = (this.brokenAxis.breakArray || []);
                        let axisBreak;
                        while ((axisBreak = brokenAxis.findBreakAt(newMin, breaks))) {
                            newMin = axisBreak.to;
                        }
                        while ((axisBreak = brokenAxis.findBreakAt(newMax, breaks))) {
                            newMax = axisBreak.from;
                        }
                        // If both min and max is within the same break.
                        if (newMax < newMin) {
                            newMax = newMin;
                        }
                    }
                    axis.constructor.prototype.setExtremes.call(this, newMin, newMax, redraw, animation, eventArguments);
                };
                axis.setAxisTranslation = function () {
                    axis.constructor.prototype.setAxisTranslation.call(this);
                    brokenAxis.unitLength = void 0;
                    if (brokenAxis.hasBreaks) {
                        const breaks = axis.options.breaks || [], breakArrayTemp = [], breakArray = [], pointRangePadding = axis.pointRangePadding ?? 0;
                        let length = 0, inBrk, repeat, min = axis.userMin ?? axis.min, max = axis.userMax ?? axis.max, dataMin = axis.dataMin ?? min, dataMax = axis.dataMax ?? max, start, i;
                        if (BrokenAxis_isNumber(axis.threshold)) {
                            dataMin = Math.min(dataMin ?? axis.threshold, axis.threshold);
                            dataMax = Math.max(dataMax ?? axis.threshold, axis.threshold);
                        }
                        // Min & max check (#4247) but not for gantt (#13898)
                        if (!axis.treeGrid?.tree) {
                            breaks.forEach(function (brk) {
                                repeat = brk.repeat || Infinity;
                                if (BrokenAxis_isNumber(min) && BrokenAxis_isNumber(max)) {
                                    if (Additions.isInBreak(brk, min)) {
                                        min += ((brk.to % repeat) -
                                            (min % repeat));
                                    }
                                    if (Additions.isInBreak(brk, max)) {
                                        max -= ((max % repeat) -
                                            (brk.from % repeat));
                                    }
                                }
                            });
                        }
                        // Construct an array holding all breaks in the axis
                        // for the current data range.
                        if (BrokenAxis_isNumber(dataMin) && BrokenAxis_isNumber(dataMax)) {
                            breaks.forEach(function (brk) {
                                start = brk.from;
                                repeat = brk.repeat || Infinity;
                                while (start - repeat > dataMin) {
                                    start -= repeat;
                                }
                                while (start < dataMin) {
                                    start += repeat;
                                }
                                for (i = start; i < dataMax; i += repeat) {
                                    breakArrayTemp.push({
                                        value: i,
                                        move: 'in'
                                    });
                                    breakArrayTemp.push({
                                        value: i + brk.to - brk.from,
                                        move: 'out',
                                        size: brk.breakSize
                                    });
                                }
                            });
                        }
                        breakArrayTemp.sort(function (a, b) {
                            return ((a.value === b.value) ?
                                ((a.move === 'in' ? 0 : 1) -
                                    (b.move === 'in' ? 0 : 1)) :
                                a.value - b.value);
                        });
                        // Simplify the breaks
                        inBrk = 0;
                        start = dataMin;
                        breakArrayTemp.forEach((brk) => {
                            inBrk += (brk.move === 'in' ? 1 : -1);
                            if (inBrk === 1 && brk.move === 'in') {
                                start = brk.value;
                            }
                            if (inBrk === 0 && BrokenAxis_isNumber(start)) {
                                breakArray.push({
                                    from: start,
                                    to: brk.value,
                                    len: brk.value - start - (brk.size || 0)
                                });
                                if (BrokenAxis_isNumber(min) && BrokenAxis_isNumber(max) &&
                                    start < max && brk.value > min) {
                                    // Sum break gaps in the visible range
                                    length += (brk.value -
                                        start -
                                        (brk.size || 0));
                                }
                            }
                        });
                        brokenAxis.breakArray = breakArray;
                        // Used with staticScale, and below the actual axis
                        // length, when breaks are subtracted.
                        if (BrokenAxis_isNumber(min) &&
                            BrokenAxis_isNumber(max) &&
                            BrokenAxis_isNumber(axis.min)) {
                            brokenAxis.unitLength = max - min - length +
                                pointRangePadding;
                            BrokenAxis_fireEvent(axis, 'afterBreaks');
                            if (axis.staticScale) {
                                axis.transA = axis.staticScale;
                            }
                            else if (brokenAxis.unitLength) {
                                axis.transA *=
                                    (max - axis.min + pointRangePadding) /
                                        brokenAxis.unitLength;
                            }
                            if (pointRangePadding) {
                                axis.minPixelPadding =
                                    axis.transA * (axis.minPointOffset || 0);
                            }
                            axis.min = min;
                            axis.max = max;
                        }
                    }
                };
            }
            if (BrokenAxis_pick(redraw, true)) {
                axis.chart.redraw();
            }
        }
    }
    BrokenAxis.Additions = Additions;
})(BrokenAxis || (BrokenAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_BrokenAxis = (BrokenAxis);

;// ./code/es-modules/masters/modules/broken-axis.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-06)
 * @module highcharts/modules/broken-axis
 * @requires highcharts
 *
 * (c) 2009-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */



const G = (external_highcharts_src_js_default_default());
G.BrokenAxis = G.BrokenAxis || Axis_BrokenAxis;
G.BrokenAxis.compose(G.Axis, G.Series);
/* harmony default export */ const broken_axis_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// external ["../modules/datagrouping.src.js","default","dataGrouping","approximationDefaults"]
const datagrouping_src_js_default_dataGrouping_approximationDefaults_namespaceObject = __WEBPACK_EXTERNAL_MODULE__modules_datagrouping_src_js_b7a4250c__["default"].dataGrouping.approximationDefaults;
var datagrouping_src_js_default_dataGrouping_approximationDefaults_default = /*#__PURE__*/__webpack_require__.n(datagrouping_src_js_default_dataGrouping_approximationDefaults_namespaceObject);
;// ./code/es-modules/Extensions/DataGrouping/DataGroupingDefaults.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Constants
 *
 * */
/**
 * Common options
 * @private
 */
const common = {
    /// enabled: null, // (true for stock charts, false for basic),
    // forced: undefined,
    groupPixelWidth: 2,
    // The first one is the point or start value, the second is the start
    // value if we're dealing with range, the third one is the end value if
    // dealing with a range
    dateTimeLabelFormats: {
        millisecond: [
            '%[AebHMSL]',
            '%[AebHMSL]',
            '-%[HMSL]'
        ],
        second: [
            '%[AebHMS]',
            '%[AebHMS]',
            '-%[HMS]'
        ],
        minute: [
            '%[AebHM]',
            '%[AebHM]',
            '-%[HM]'
        ],
        hour: [
            '%[AebHM]',
            '%[AebHM]',
            '-%[HM]'
        ],
        day: [
            '%[AebY]',
            '%[Aeb]',
            '-%[AebY]'
        ],
        week: [
            '%v %[AebY]',
            '%[Aeb]',
            '-%[AebY]'
        ],
        month: [
            '%[BY]',
            '%[B]',
            '-%[BY]'
        ],
        year: [
            '%Y',
            '%Y',
            '-%Y'
        ]
    }
    /// smoothed = false, // enable this for navigator series only
};
/**
 * Extends common options
 * @private
 */
const seriesSpecific = {
    line: {},
    spline: {},
    area: {},
    areaspline: {},
    arearange: {},
    column: {
        groupPixelWidth: 10
    },
    columnrange: {
        groupPixelWidth: 10
    },
    candlestick: {
        groupPixelWidth: 10
    },
    ohlc: {
        groupPixelWidth: 5
    },
    hlc: {
        groupPixelWidth: 5
        // Move to HeikinAshiSeries.ts after refactoring data grouping.
    },
    heikinashi: {
        groupPixelWidth: 10
    }
};
/**
 * Units are defined in a separate array to allow complete overriding in
 * case of a user option.
 * @private
 */
const units = [
    [
        'millisecond', // Unit name
        [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // Allowed multiples
    ], [
        'second',
        [1, 2, 5, 10, 15, 30]
    ], [
        'minute',
        [1, 2, 5, 10, 15, 30]
    ], [
        'hour',
        [1, 2, 3, 4, 6, 8, 12]
    ], [
        'day',
        [1]
    ], [
        'week',
        [1]
    ], [
        'month',
        [1, 3, 6]
    ], [
        'year',
        null
    ]
];
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingDefaults = {
    common,
    seriesSpecific,
    units
};
/* harmony default export */ const DataGrouping_DataGroupingDefaults = (DataGroupingDefaults);

;// ./code/es-modules/Extensions/DataGrouping/DataGroupingAxisComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */



const { addEvent: DataGroupingAxisComposition_addEvent, extend: DataGroupingAxisComposition_extend, merge: DataGroupingAxisComposition_merge, pick: DataGroupingAxisComposition_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Variables
 *
 * */
let AxisConstructor;
/* *
 *
 *  Functions
 *
 * */
/**
 * Check the groupPixelWidth and apply the grouping if needed.
 * Fired only after processing the data.
 *
 * @product highstock
 *
 * @function Highcharts.Axis#applyGrouping
 */
function applyGrouping(e) {
    const axis = this, series = axis.series;
    // Reset the groupPixelWidth for all series, #17141.
    series.forEach(function (series) {
        series.groupPixelWidth = void 0; // #2110
    });
    series.forEach(function (series) {
        series.groupPixelWidth = (axis.getGroupPixelWidth &&
            axis.getGroupPixelWidth());
        if (series.groupPixelWidth) {
            series.hasProcessed = true; // #2692
        }
        // Fire independing on series.groupPixelWidth to always set a proper
        // dataGrouping state, (#16238)
        series.applyGrouping(!!e.hasExtremesChanged);
    });
}
/**
 * @private
 */
function compose(AxisClass) {
    AxisConstructor = AxisClass;
    const axisProto = AxisClass.prototype;
    if (!axisProto.applyGrouping) {
        DataGroupingAxisComposition_addEvent(AxisClass, 'afterSetScale', onAfterSetScale);
        // When all series are processed, calculate the group pixel width and
        // then if this value is different than zero apply groupings.
        DataGroupingAxisComposition_addEvent(AxisClass, 'postProcessData', applyGrouping);
        DataGroupingAxisComposition_extend(axisProto, {
            applyGrouping,
            getGroupPixelWidth,
            setDataGrouping
        });
    }
}
/**
 * Get the data grouping pixel width based on the greatest defined individual
 * width of the axis' series, and if whether one of the axes need grouping.
 * @private
 */
function getGroupPixelWidth() {
    const series = this.series;
    let i = series.length, groupPixelWidth = 0, doGrouping = false, dataLength, dgOptions;
    // If one of the series needs grouping, apply it to all (#1634)
    while (i--) {
        dgOptions = series[i].options.dataGrouping;
        if (dgOptions) { // #2692
            // If multiple series are compared on the same x axis, give them the
            // same group pixel width (#334)
            groupPixelWidth = Math.max(groupPixelWidth, 
            // Fallback to commonOptions (#9693)
            DataGroupingAxisComposition_pick(dgOptions.groupPixelWidth, DataGrouping_DataGroupingDefaults.common.groupPixelWidth));
            dataLength = (series[i].dataTable.getModified() ||
                series[i].dataTable).rowCount;
            // Execute grouping if the amount of points is greater than the
            // limit defined in groupPixelWidth
            if (series[i].groupPixelWidth ||
                (dataLength >
                    (this.chart.plotSizeX / groupPixelWidth)) ||
                (dataLength && dgOptions.forced)) {
                doGrouping = true;
            }
        }
    }
    return doGrouping ? groupPixelWidth : 0;
}
/**
 * When resetting the scale reset the hasProcessed flag to avoid taking
 * previous data grouping of neighbour series into account when determining
 * group pixel width (#2692).
 * @private
 */
function onAfterSetScale() {
    this.series.forEach(function (series) {
        series.hasProcessed = false;
    });
}
/**
 * Highcharts Stock only. Force data grouping on all the axis' series.
 *
 * @product highstock
 *
 * @function Highcharts.Axis#setDataGrouping
 *
 * @param {boolean|Highcharts.DataGroupingOptionsObject} [dataGrouping]
 *        A `dataGrouping` configuration. Use `false` to disable data grouping
 *        dynamically.
 *
 * @param {boolean} [redraw=true]
 *        Whether to redraw the chart or wait for a later call to
 *        {@link Chart#redraw}.
 */
function setDataGrouping(dataGrouping, redraw) {
    const axis = this;
    let i;
    redraw = DataGroupingAxisComposition_pick(redraw, true);
    if (!dataGrouping) {
        dataGrouping = {
            forced: false,
            units: null
        };
    }
    // Axis is instantiated, update all series
    if (this instanceof AxisConstructor) {
        i = this.series.length;
        while (i--) {
            this.series[i].update({
                dataGrouping: dataGrouping
            }, false);
        }
        // Axis not yet instantiated, alter series options
    }
    else {
        this.chart.options.series.forEach(function (seriesOptions) {
            // Merging dataGrouping options with already defined options #16759
            seriesOptions.dataGrouping = typeof dataGrouping === 'boolean' ?
                dataGrouping :
                DataGroupingAxisComposition_merge(dataGrouping, seriesOptions.dataGrouping);
        });
    }
    // Clear ordinal slope, so we won't accidentally use the old one (#7827)
    if (axis.ordinal) {
        axis.ordinal.slope = void 0;
    }
    if (redraw) {
        this.chart.redraw();
    }
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingAxisComposition = {
    compose
};
/* harmony default export */ const DataGrouping_DataGroupingAxisComposition = (DataGroupingAxisComposition);

;// ./code/es-modules/Core/Axis/DateTimeAxis.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: DateTimeAxis_addEvent, getMagnitude, normalizeTickInterval, timeUnits: DateTimeAxis_timeUnits } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Composition
 *
 * */
/* eslint-disable valid-jsdoc */
var DateTimeAxis;
(function (DateTimeAxis) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Extends axis class with date and time support.
     * @private
     */
    function compose(AxisClass) {
        if (!AxisClass.keepProps.includes('dateTime')) {
            AxisClass.keepProps.push('dateTime');
            const axisProto = AxisClass.prototype;
            axisProto.getTimeTicks = getTimeTicks;
            DateTimeAxis_addEvent(AxisClass, 'afterSetType', onAfterSetType);
        }
        return AxisClass;
    }
    DateTimeAxis.compose = compose;
    /**
     * Set the tick positions to a time unit that makes sense, for example
     * on the first of each month or on every Monday. Return an array with
     * the time positions. Used in datetime axes as well as for grouping
     * data on a datetime axis.
     *
     * @private
     * @function Highcharts.Axis#getTimeTicks
     * @param {Highcharts.TimeNormalizeObject} normalizedInterval
     * The interval in axis values (ms) and the count.
     * @param {number} min
     * The minimum in axis values.
     * @param {number} max
     * The maximum in axis values.
     */
    function getTimeTicks() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    }
    /**
     * @private
     */
    function onAfterSetType() {
        if (this.type !== 'datetime') {
            this.dateTime = void 0;
            return;
        }
        if (!this.dateTime) {
            this.dateTime = new Additions(this);
        }
    }
    /* *
     *
     *  Classes
     *
     * */
    class Additions {
        /* *
         *
         *  Constructors
         *
         * */
        constructor(axis) {
            this.axis = axis;
        }
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Get a normalized tick interval for dates. Returns a configuration
         * object with unit range (interval), count and name. Used to prepare
         * data for `getTimeTicks`. Previously this logic was part of
         * getTimeTicks, but as `getTimeTicks` now runs of segments in stock
         * charts, the normalizing logic was extracted in order to prevent it
         * for running over again for each segment having the same interval.
         * #662, #697.
         * @private
         */
        normalizeTimeTickInterval(tickInterval, unitsOption) {
            const units = (unitsOption || [[
                    // Unit name
                    'millisecond',
                    // Allowed multiples
                    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
                ], [
                    'second',
                    [1, 2, 5, 10, 15, 30]
                ], [
                    'minute',
                    [1, 2, 5, 10, 15, 30]
                ], [
                    'hour',
                    [1, 2, 3, 4, 6, 8, 12]
                ], [
                    'day',
                    [1, 2]
                ], [
                    'week',
                    [1, 2]
                ], [
                    'month',
                    [1, 2, 3, 4, 6]
                ], [
                    'year',
                    null
                ]]);
            let unit = units[units.length - 1], // Default unit is years
            interval = DateTimeAxis_timeUnits[unit[0]], multiples = unit[1], i;
            // Loop through the units to find the one that best fits the
            // tickInterval
            for (i = 0; i < units.length; i++) {
                unit = units[i];
                interval = DateTimeAxis_timeUnits[unit[0]];
                multiples = unit[1];
                if (units[i + 1]) {
                    // `lessThan` is in the middle between the highest multiple
                    // and the next unit.
                    const lessThan = (interval *
                        multiples[multiples.length - 1] +
                        DateTimeAxis_timeUnits[units[i + 1][0]]) / 2;
                    // Break and keep the current unit
                    if (tickInterval <= lessThan) {
                        break;
                    }
                }
            }
            // Prevent 2.5 years intervals, though 25, 250 etc. are allowed
            if (interval === DateTimeAxis_timeUnits.year && tickInterval < 5 * interval) {
                multiples = [1, 2, 5];
            }
            // Get the count
            const count = normalizeTickInterval(tickInterval / interval, multiples, unit[0] === 'year' ? // #1913, #2360
                Math.max(getMagnitude(tickInterval / interval), 1) :
                1);
            return {
                unitRange: interval,
                count: count,
                unitName: unit[0]
            };
        }
        /**
         * Get the best date format for a specific X value based on the closest
         * point range on the axis.
         *
         * @private
         */
        getXDateFormat(x, dateTimeLabelFormats) {
            const { axis } = this, time = axis.chart.time;
            return axis.closestPointRange ?
                time.getDateFormat(axis.closestPointRange, x, axis.options.startOfWeek, dateTimeLabelFormats) ||
                    // #2546, 2581
                    time.resolveDTLFormat(dateTimeLabelFormats.year).main :
                time.resolveDTLFormat(dateTimeLabelFormats.day).main;
        }
    }
    DateTimeAxis.Additions = Additions;
})(DateTimeAxis || (DateTimeAxis = {}));
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Axis_DateTimeAxis = (DateTimeAxis);

;// ./code/es-modules/Extensions/DataGrouping/DataGroupingSeriesComposition.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */







const { series: { prototype: DataGroupingSeriesComposition_seriesProto } } = (external_highcharts_src_js_default_SeriesRegistry_default());

const { addEvent: DataGroupingSeriesComposition_addEvent, defined: DataGroupingSeriesComposition_defined, error: DataGroupingSeriesComposition_error, extend: DataGroupingSeriesComposition_extend, isNumber: DataGroupingSeriesComposition_isNumber, merge: DataGroupingSeriesComposition_merge, pick: DataGroupingSeriesComposition_pick, splat: DataGroupingSeriesComposition_splat } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
const baseGeneratePoints = DataGroupingSeriesComposition_seriesProto.generatePoints;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function adjustExtremes(xAxis, groupedXData) {
    // Make sure the X axis extends to show the first group (#2533)
    // But only for visible series (#5493, #6393)
    if (DataGroupingSeriesComposition_defined(groupedXData[0]) &&
        DataGroupingSeriesComposition_isNumber(xAxis.min) &&
        DataGroupingSeriesComposition_isNumber(xAxis.dataMin) &&
        groupedXData[0] < xAxis.min) {
        if ((!DataGroupingSeriesComposition_defined(xAxis.options.min) &&
            xAxis.min <= xAxis.dataMin) ||
            xAxis.min === xAxis.dataMin) {
            xAxis.min = Math.min(groupedXData[0], xAxis.min);
        }
        xAxis.dataMin = Math.min(groupedXData[0], xAxis.dataMin);
    }
    // When the last anchor set, change the extremes that
    // the last point is visible (#12455).
    if (DataGroupingSeriesComposition_defined(groupedXData[groupedXData.length - 1]) &&
        DataGroupingSeriesComposition_isNumber(xAxis.max) &&
        DataGroupingSeriesComposition_isNumber(xAxis.dataMax) &&
        groupedXData[groupedXData.length - 1] > xAxis.max) {
        if ((!DataGroupingSeriesComposition_defined(xAxis.options.max) &&
            DataGroupingSeriesComposition_isNumber(xAxis.dataMax) &&
            xAxis.max >= xAxis.dataMax) || xAxis.max === xAxis.dataMax) {
            xAxis.max = Math.max(groupedXData[groupedXData.length - 1], xAxis.max);
        }
        xAxis.dataMax = Math.max(groupedXData[groupedXData.length - 1], xAxis.dataMax);
    }
}
/**
 * @private
 */
function anchorPoints(series, groupedXData, xMax) {
    const options = series.options, dataGroupingOptions = options.dataGrouping, totalRange = (series.currentDataGrouping && series.currentDataGrouping.gapSize), xData = series.getColumn('x');
    if (!(dataGroupingOptions &&
        xData.length &&
        totalRange &&
        series.groupMap)) {
        return;
    }
    const groupedDataLastIndex = groupedXData.length - 1, anchor = dataGroupingOptions.anchor, firstAnchor = dataGroupingOptions.firstAnchor, lastAnchor = dataGroupingOptions.lastAnchor;
    let anchorIndexIterator = groupedXData.length - 1, anchorFirstIndex = 0;
    // Change the first point position, but only when it is
    // the first point in the data set not in the current zoom.
    if (firstAnchor && xData[0] >= groupedXData[0]) {
        anchorFirstIndex++;
        const groupStart = series.groupMap[0].start, groupLength = series.groupMap[0].length;
        let firstGroupEnd;
        if (DataGroupingSeriesComposition_isNumber(groupStart) && DataGroupingSeriesComposition_isNumber(groupLength)) {
            firstGroupEnd = groupStart + (groupLength - 1);
        }
        groupedXData[0] = {
            start: groupedXData[0],
            middle: groupedXData[0] + 0.5 * totalRange,
            end: groupedXData[0] + totalRange,
            firstPoint: xData[0],
            lastPoint: firstGroupEnd && xData[firstGroupEnd]
        }[firstAnchor];
    }
    // Change the last point position but only when it is
    // the last point in the data set not in the current zoom,
    // or if it is not the 1st point simultaneously.
    if (groupedDataLastIndex > 0 &&
        lastAnchor &&
        totalRange &&
        groupedXData[groupedDataLastIndex] >= xMax - totalRange) {
        anchorIndexIterator--;
        const lastGroupStart = series.groupMap[series.groupMap.length - 1].start;
        groupedXData[groupedDataLastIndex] = {
            start: groupedXData[groupedDataLastIndex],
            middle: groupedXData[groupedDataLastIndex] + 0.5 * totalRange,
            end: groupedXData[groupedDataLastIndex] + totalRange,
            firstPoint: lastGroupStart && xData[lastGroupStart],
            lastPoint: xData[xData.length - 1]
        }[lastAnchor];
    }
    if (anchor && anchor !== 'start') {
        const shiftInterval = (totalRange *
            { middle: 0.5, end: 1 }[anchor]);
        // Anchor the rest of the points apart from the ones, that were
        // previously moved.
        while (anchorIndexIterator >= anchorFirstIndex) {
            groupedXData[anchorIndexIterator] += shiftInterval;
            anchorIndexIterator--;
        }
    }
}
/**
 * For the processed data, calculate the grouped data if needed.
 *
 * @private
 * @function Highcharts.Series#applyGrouping
 */
function DataGroupingSeriesComposition_applyGrouping(hasExtremesChanged) {
    const series = this, chart = series.chart, options = series.options, dataGroupingOptions = options.dataGrouping, groupingEnabled = series.allowDG !== false && dataGroupingOptions &&
        DataGroupingSeriesComposition_pick(dataGroupingOptions.enabled, chart.options.isStock), reserveSpace = series.reserveSpace(), lastDataGrouping = this.currentDataGrouping;
    let currentDataGrouping, croppedData, revertRequireSorting = false;
    // Data needs to be sorted for dataGrouping
    if (groupingEnabled && !series.requireSorting) {
        series.requireSorting = revertRequireSorting = true;
    }
    // Skip if skipDataGrouping method returns false or if grouping is disabled
    // (in that order).
    const skip = skipDataGrouping(series, hasExtremesChanged) === false || !groupingEnabled;
    // Revert original requireSorting value if changed
    if (revertRequireSorting) {
        series.requireSorting = false;
    }
    if (skip) {
        return;
    }
    series.destroyGroupedData();
    const table = dataGroupingOptions.groupAll ?
        series.dataTable :
        series.dataTable.getModified() || series.dataTable, processedXData = series.getColumn('x', !dataGroupingOptions.groupAll), xData = processedXData, plotSizeX = chart.plotSizeX, xAxis = series.xAxis, extremes = xAxis.getExtremes(), ordinal = xAxis.options.ordinal, groupPixelWidth = series.groupPixelWidth;
    let i, hasGroupedData;
    // Execute grouping if the amount of points is greater than the limit
    // defined in groupPixelWidth
    if (groupPixelWidth &&
        xData &&
        table.rowCount &&
        plotSizeX &&
        DataGroupingSeriesComposition_isNumber(extremes.min)) {
        hasGroupedData = true;
        // Force recreation of point instances in series.translate, #5699
        series.isDirty = true;
        series.points = null; // #6709
        const xMin = extremes.min, xMax = extremes.max, groupIntervalFactor = (ordinal &&
            xAxis.ordinal &&
            xAxis.ordinal.getGroupIntervalFactor(xMin, xMax, series)) || 1, interval = (groupPixelWidth * (xMax - xMin) / plotSizeX) *
            groupIntervalFactor, groupPositions = xAxis.getTimeTicks(Axis_DateTimeAxis.Additions.prototype.normalizeTimeTickInterval(interval, dataGroupingOptions.units ||
            DataGrouping_DataGroupingDefaults.units), 
        // Processed data may extend beyond axis (#4907)
        Math.min(xMin, xData[0]), Math.max(xMax, xData[xData.length - 1]), xAxis.options.startOfWeek, processedXData, series.closestPointRange), groupedData = DataGroupingSeriesComposition_seriesProto.groupData.apply(series, [
            table,
            groupPositions,
            dataGroupingOptions.approximation
        ]);
        let modified = groupedData.modified, groupedXData = modified.getColumn('x', true), gapSize = 0;
        // The smoothed option is deprecated, instead, there is a fallback
        // to the new anchoring mechanism. #12455.
        if (dataGroupingOptions?.smoothed &&
            modified.rowCount) {
            dataGroupingOptions.firstAnchor = 'firstPoint';
            dataGroupingOptions.anchor = 'middle';
            dataGroupingOptions.lastAnchor = 'lastPoint';
            DataGroupingSeriesComposition_error(32, false, chart, {
                'dataGrouping.smoothed': 'use dataGrouping.anchor'
            });
        }
        // Record what data grouping values were used
        for (i = 1; i < groupPositions.length; i++) {
            // The grouped gapSize needs to be the largest distance between
            // the group to capture varying group sizes like months or DST
            // crossing (#10000). Also check that the gap is not at the
            // start of a segment.
            if (!groupPositions.info.segmentStarts ||
                groupPositions.info.segmentStarts.indexOf(i) === -1) {
                gapSize = Math.max(groupPositions[i] - groupPositions[i - 1], gapSize);
            }
        }
        currentDataGrouping = groupPositions.info;
        currentDataGrouping.gapSize = gapSize;
        series.closestPointRange = groupPositions.info.totalRange;
        series.groupMap = groupedData.groupMap;
        series.currentDataGrouping = currentDataGrouping;
        anchorPoints(series, groupedXData || [], xMax);
        if (reserveSpace && groupedXData) {
            adjustExtremes(xAxis, groupedXData);
        }
        // We calculated all group positions but we should render only the ones
        // within the visible range
        if (dataGroupingOptions.groupAll) {
            // Keep the reference to all grouped points for further calculation,
            // used in Heikin-Ashi and hollow candlestick series.
            series.allGroupedTable = modified;
            croppedData = series.cropData(modified, xAxis.min || 0, xAxis.max || 0);
            modified = croppedData.modified;
            groupedXData = modified.getColumn('x');
            series.cropStart = croppedData.start; // #15005
        }
        // Set the modified table
        series.dataTable.modified = modified;
    }
    else {
        series.groupMap = void 0;
        series.currentDataGrouping = void 0;
    }
    series.hasGroupedData = hasGroupedData;
    series.preventGraphAnimation =
        (lastDataGrouping && lastDataGrouping.totalRange) !==
            (currentDataGrouping && currentDataGrouping.totalRange);
}
/**
 * @private
 */
function DataGroupingSeriesComposition_compose(SeriesClass) {
    const seriesProto = SeriesClass.prototype;
    if (!seriesProto.applyGrouping) {
        const PointClass = SeriesClass.prototype.pointClass;
        // Override point prototype to throw a warning when trying to update
        // grouped points.
        DataGroupingSeriesComposition_addEvent(PointClass, 'update', function () {
            if (this.dataGroup) {
                DataGroupingSeriesComposition_error(24, false, this.series.chart);
                return false;
            }
        });
        DataGroupingSeriesComposition_addEvent(SeriesClass, 'afterSetOptions', onAfterSetOptions);
        DataGroupingSeriesComposition_addEvent(SeriesClass, 'destroy', destroyGroupedData);
        DataGroupingSeriesComposition_extend(seriesProto, {
            applyGrouping: DataGroupingSeriesComposition_applyGrouping,
            destroyGroupedData,
            generatePoints,
            getDGApproximation,
            groupData
        });
    }
}
/**
 * Destroy the grouped data points. #622, #740
 * @private
 */
function destroyGroupedData() {
    // Clear previous groups
    if (this.groupedData) {
        this.groupedData.forEach(function (point, i) {
            if (point) {
                this.groupedData[i] = point.destroy ?
                    point.destroy() : null;
            }
        }, this);
        // Clears all:
        // - `this.groupedData`
        // - `this.points`
        // - `preserve` object in series.update()
        this.groupedData.length = 0;
        delete this.allGroupedTable;
    }
}
/**
 * Override the generatePoints method by adding a reference to grouped data
 * @private
 */
function generatePoints() {
    baseGeneratePoints.apply(this);
    // Record grouped data in order to let it be destroyed the next time
    // processData runs
    this.destroyGroupedData(); // #622
    this.groupedData = this.hasGroupedData ? this.points : null;
}
/**
 * Set default approximations to the prototypes if present. Properties are
 * inherited down. Can be overridden for individual series types.
 * @private
 */
function getDGApproximation() {
    if (this.is('arearange')) {
        return 'range';
    }
    if (this.is('ohlc')) {
        return 'ohlc';
    }
    if (this.is('hlc')) {
        return 'hlc';
    }
    if (
    // #18974, default approximation for cumulative
    // should be `sum` when `dataGrouping` is enabled
    this.is('column') ||
        this.options.cumulative) {
        return 'sum';
    }
    return 'average';
}
/**
 * Highcharts Stock only. Takes parallel arrays of x and y data and groups the
 * data into intervals defined by groupPositions, a collection of starting x
 * values for each group.
 *
 * @product highstock
 *
 * @function Highcharts.Series#groupData
 * @param {Highcharts.DataTable} table
 *        The series data table.
 * @param {Array<number>} groupPositions
 *        Group positions.
 * @param {string|Function} [approximation]
 *        Approximation to use.
 * @return {Highcharts.DataGroupingResultObject}
 *         Mapped groups.
 */
function groupData(table, groupPositions, approximation) {
    const xData = table.getColumn('x', true) || [], yData = table.getColumn('y', true), series = this, data = series.data, dataOptions = series.options && series.options.data, groupedXData = [], modified = new Data_DataTableCore(), groupMap = [], dataLength = table.rowCount, 
    // When grouping the fake extended axis for panning, we don't need to
    // consider y
    handleYData = !!yData, values = [], pointArrayMap = series.pointArrayMap, pointArrayMapLength = pointArrayMap && pointArrayMap.length, extendedPointArrayMap = ['x'].concat(pointArrayMap || ['y']), 
    // Data columns to be applied to the modified data table at the end
    valueColumns = (pointArrayMap || ['y']).map(() => []), groupAll = (this.options.dataGrouping &&
        this.options.dataGrouping.groupAll);
    let pointX, pointY, groupedY, pos = 0, start = 0;
    const approximationFn = (typeof approximation === 'function' ?
        approximation :
        approximation && (datagrouping_src_js_default_dataGrouping_approximations_default())[approximation] ?
            (datagrouping_src_js_default_dataGrouping_approximations_default())[approximation] :
            (datagrouping_src_js_default_dataGrouping_approximations_default())[(series.getDGApproximation && series.getDGApproximation() ||
                'average')]);
    // Calculate values array size from pointArrayMap length
    if (pointArrayMapLength) {
        let len = pointArrayMap.length;
        while (len--) {
            values.push([]);
        }
    }
    else {
        values.push([]);
    }
    const valuesLen = pointArrayMapLength || 1;
    for (let i = 0; i <= dataLength; i++) {
        // Start with the first point within the X axis range (#2696)
        if (xData[i] < groupPositions[0]) {
            continue; // With next point
        }
        // When a new group is entered, summarize and initialize
        // the previous group
        while ((typeof groupPositions[pos + 1] !== 'undefined' &&
            xData[i] >= groupPositions[pos + 1]) ||
            i === dataLength) { // Get the last group
            // get group x and y
            pointX = groupPositions[pos];
            series.dataGroupInfo = {
                start: groupAll ? start : (series.cropStart + start),
                length: values[0].length,
                groupStart: pointX
            };
            groupedY = approximationFn.apply(series, values);
            // By default, let options of the first grouped point be passed over
            // to the grouped point. This allows preserving properties like
            // `name` and `color` or custom properties. Implementers can
            // override this from the approximation function, where they can
            // write custom options to `this.dataGroupInfo.options`.
            if (series.pointClass && !DataGroupingSeriesComposition_defined(series.dataGroupInfo.options)) {
                // Convert numbers and arrays into objects
                series.dataGroupInfo.options = DataGroupingSeriesComposition_merge(series.pointClass.prototype
                    .optionsToObject.call({ series: series }, series.options.data[series.cropStart + start]));
                // Make sure the raw data (x, y, open, high etc) is not copied
                // over and overwriting approximated data.
                extendedPointArrayMap.forEach(function (key) {
                    delete series.dataGroupInfo.options[key];
                });
            }
            // Push the grouped data
            if (typeof groupedY !== 'undefined') {
                groupedXData.push(pointX);
                // Push the grouped values to the parallel columns
                const groupedValuesArr = DataGroupingSeriesComposition_splat(groupedY);
                for (let j = 0; j < groupedValuesArr.length; j++) {
                    valueColumns[j].push(groupedValuesArr[j]);
                }
                groupMap.push(series.dataGroupInfo);
            }
            // Reset the aggregate arrays
            start = i;
            for (let j = 0; j < valuesLen; j++) {
                values[j].length = 0; // Faster than values[j] = []
                values[j].hasNulls = false;
            }
            // Advance on the group positions
            pos += 1;
            // Don't loop beyond the last group
            if (i === dataLength) {
                break;
            }
        }
        // Break out
        if (i === dataLength) {
            break;
        }
        // For each raw data point, push it to an array that contains all values
        // for this specific group
        if (pointArrayMap) {
            const index = groupAll ? i : series.cropStart + i, point = (data && data[index]) ||
                series.pointClass.prototype.applyOptions.apply({
                    series: series
                }, [dataOptions[index]]);
            let val;
            for (let j = 0; j < pointArrayMapLength; j++) {
                val = point[pointArrayMap[j]];
                if (DataGroupingSeriesComposition_isNumber(val)) {
                    values[j].push(val);
                }
                else if (val === null) {
                    values[j].hasNulls = true;
                }
            }
        }
        else {
            pointY = handleYData ? yData[i] : null;
            if (DataGroupingSeriesComposition_isNumber(pointY)) {
                values[0].push(pointY);
            }
            else if (pointY === null) {
                values[0].hasNulls = true;
            }
        }
    }
    const columns = {
        x: groupedXData
    };
    (pointArrayMap || ['y']).forEach((key, i) => {
        columns[key] = valueColumns[i];
    });
    modified.setColumns(columns);
    return {
        groupMap,
        modified
    };
}
/**
 * Handle default options for data grouping. This must be set at runtime because
 * some series types are defined after this.
 * @private
 */
function onAfterSetOptions(e) {
    const options = e.options, type = this.type, plotOptions = this.chart.options.plotOptions, 
    // External series, for example technical indicators should also inherit
    // commonOptions which are not available outside this module
    baseOptions = (this.useCommonDataGrouping &&
        DataGrouping_DataGroupingDefaults.common), seriesSpecific = DataGrouping_DataGroupingDefaults.seriesSpecific;
    let defaultOptions = (external_highcharts_src_js_default_default()).defaultOptions.plotOptions[type].dataGrouping;
    if (plotOptions && (seriesSpecific[type] || baseOptions)) { // #1284
        const rangeSelector = this.chart.rangeSelector;
        if (!defaultOptions) {
            defaultOptions = DataGroupingSeriesComposition_merge(DataGrouping_DataGroupingDefaults.common, seriesSpecific[type]);
        }
        options.dataGrouping = DataGroupingSeriesComposition_merge(baseOptions, defaultOptions, plotOptions.series && plotOptions.series.dataGrouping, // #1228
        // Set by the StockChart constructor:
        plotOptions[type].dataGrouping, this.userOptions.dataGrouping, !options.isInternal &&
            rangeSelector &&
            DataGroupingSeriesComposition_isNumber(rangeSelector.selected) &&
            rangeSelector.buttonOptions[rangeSelector.selected].dataGrouping);
    }
}
/**
 * @private
 */
function skipDataGrouping(series, force) {
    return !(series.isCartesian &&
        !series.isDirty &&
        !series.xAxis.isDirty &&
        !series.yAxis.isDirty &&
        !force);
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingSeriesComposition = {
    compose: DataGroupingSeriesComposition_compose,
    groupData
};
/* harmony default export */ const DataGrouping_DataGroupingSeriesComposition = (DataGroupingSeriesComposition);

;// ./code/es-modules/Extensions/DataGrouping/DataGrouping.js
/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */





const { format: DataGrouping_format } = (external_highcharts_src_js_default_Templating_default());

const { composed: DataGrouping_composed } = (external_highcharts_src_js_default_default());

const { addEvent: DataGrouping_addEvent, extend: DataGrouping_extend, isNumber: DataGrouping_isNumber, pick: DataGrouping_pick, pushUnique: DataGrouping_pushUnique } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function DataGrouping_compose(AxisClass, SeriesClass, TooltipClass) {
    DataGrouping_DataGroupingAxisComposition.compose(AxisClass);
    DataGrouping_DataGroupingSeriesComposition.compose(SeriesClass);
    if (TooltipClass &&
        DataGrouping_pushUnique(DataGrouping_composed, 'DataGrouping')) {
        DataGrouping_addEvent(TooltipClass, 'headerFormatter', onTooltipHeaderFormatter);
    }
}
/**
 * Extend the original method, make the tooltip's header reflect the grouped
 * range.
 * @private
 */
function onTooltipHeaderFormatter(e) {
    const chart = this.chart, time = chart.time, point = e.point, series = point.series, options = series.options, tooltipOptions = series.tooltipOptions, dataGroupingOptions = options.dataGrouping, xAxis = series.xAxis;
    let xDateFormat = tooltipOptions.xDateFormat || '', xDateFormatEnd, currentDataGrouping, dateTimeLabelFormats, labelFormats, formattedKey, formatString = tooltipOptions[e.isFooter ? 'footerFormat' : 'headerFormat'];
    // Apply only to grouped series
    if (xAxis &&
        xAxis.options.type === 'datetime' &&
        dataGroupingOptions &&
        DataGrouping_isNumber(point.key)) {
        // Set variables
        currentDataGrouping = series.currentDataGrouping;
        dateTimeLabelFormats = dataGroupingOptions.dateTimeLabelFormats ||
            // Fallback to commonOptions (#9693)
            DataGrouping_DataGroupingDefaults.common.dateTimeLabelFormats;
        // If we have grouped data, use the grouping information to get the
        // right format
        if (currentDataGrouping) {
            labelFormats = dateTimeLabelFormats[currentDataGrouping.unitName];
            if (currentDataGrouping.count === 1) {
                xDateFormat = labelFormats[0];
            }
            else {
                xDateFormat = labelFormats[1];
                xDateFormatEnd = labelFormats[2];
            }
            // If not grouped, and we don't have set the xDateFormat option, get the
            // best fit, so if the least distance between points is one minute, show
            // it, but if the least distance is one day, skip hours and minutes etc.
        }
        else if (!xDateFormat && dateTimeLabelFormats && xAxis.dateTime) {
            xDateFormat = xAxis.dateTime.getXDateFormat(point.x, tooltipOptions.dateTimeLabelFormats);
        }
        const groupStart = DataGrouping_pick(series.groupMap?.[point.index].groupStart, point.key), groupEnd = groupStart + (currentDataGrouping?.totalRange || 0) - 1;
        formattedKey = time.dateFormat(xDateFormat, groupStart);
        if (xDateFormatEnd) {
            formattedKey += time.dateFormat(xDateFormatEnd, groupEnd);
        }
        // Replace default header style with class name
        if (series.chart.styledMode) {
            formatString = this.styledModeFormat(formatString);
        }
        // Return the replaced format
        e.text = DataGrouping_format(formatString, {
            point: DataGrouping_extend(point, { key: formattedKey }),
            series
        }, chart);
        e.preventDefault();
    }
}
/* *
 *
 *  Default Export
 *
 * */
const DataGroupingComposition = {
    compose: DataGrouping_compose,
    groupData: DataGrouping_DataGroupingSeriesComposition.groupData
};
/* harmony default export */ const DataGrouping = (DataGroupingComposition);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @typedef {"average"|"averages"|"open"|"high"|"low"|"close"|"sum"} Highcharts.DataGroupingApproximationValue
 */
/**
 * The position of the point inside the group.
 *
 * @typedef    {"start"|"middle"|"end"} Highcharts.DataGroupingAnchor
 */
/**
 * The position of the first or last point in the series inside the group.
 *
 * @typedef    {"start"|"middle"|"end"|"firstPoint"|"lastPoint"} Highcharts.DataGroupingAnchorExtremes
 */
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingInfoObject
 */ /**
* @name Highcharts.DataGroupingInfoObject#length
* @type {number}
*/ /**
* @name Highcharts.DataGroupingInfoObject#options
* @type {Highcharts.SeriesOptionsType|undefined}
*/ /**
* @name Highcharts.DataGroupingInfoObject#start
* @type {number}
*/
/**
 * Highcharts Stock only.
 *
 * @product highstock
 * @interface Highcharts.DataGroupingResultObject
 */ /**
* @name Highcharts.DataGroupingResultObject#groupedXData
* @type {Array<number>}
*/ /**
* @name Highcharts.DataGroupingResultObject#groupedYData
* @type {Array<(number|null|undefined)>|Array<Array<(number|null|undefined)>>}
*/ /**
* @name Highcharts.DataGroupingResultObject#groupMap
* @type {Array<DataGroupingInfoObject>}
*/
/**
 * Highcharts Stock only. If a point object is created by data
 * grouping, it doesn't reflect actual points in the raw
 * data. In this case, the `dataGroup` property holds
 * information that points back to the raw data.
 *
 * - `dataGroup.start` is the index of the first raw data
 *   point in the group.
 *
 * - `dataGroup.length` is the amount of points in the
 *   group.
 *
 * @sample stock/members/point-datagroup
 *         Click to inspect raw data points
 *
 * @product highstock
 *
 * @name Highcharts.Point#dataGroup
 * @type {Highcharts.DataGroupingInfoObject|undefined}
 */
(''); // Detach doclets above
/* *
 *
 *  API Options
 *
 * */
/**
 * Data grouping is the concept of sampling the data values into larger
 * blocks in order to ease readability and increase performance of the
 * JavaScript charts. Highcharts Stock by default applies data grouping when
 * the points become closer than a certain pixel value, determined by
 * the `groupPixelWidth` option.
 *
 * If data grouping is applied, the grouping information of grouped
 * points can be read from the [Point.dataGroup](
 * /class-reference/Highcharts.Point#dataGroup). If point options other than
 * the data itself are set, for example `name` or `color` or custom properties,
 * the grouping logic doesn't know how to group it. In this case the options of
 * the first point instance are copied over to the group point. This can be
 * altered through a custom `approximation` callback function.
 *
 * @declare   Highcharts.DataGroupingOptionsObject
 * @product   highstock
 * @requires  modules/stock
 * @apioption plotOptions.series.dataGrouping
 */
/**
 * Specifies how the points should be located on the X axis inside the group.
 * Points that are extremes can be set separately. Available options:
 *
 * - `start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * - `middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * - `end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-anchor
 *         Changing the point x-coordinate inside the group.
 *
 * @see [dataGrouping.firstAnchor](#plotOptions.series.dataGrouping.firstAnchor)
 * @see [dataGrouping.lastAnchor](#plotOptions.series.dataGrouping.lastAnchor)
 *
 * @type       {Highcharts.DataGroupingAnchor}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.anchor
 */
/**
 * The method of approximation inside a group. When for example 30 days
 * are grouped into one month, this determines what value should represent
 * the group. Possible values are "average", "averages", "open", "high",
 * "low", "close" and "sum". For OHLC and candlestick series the approximation
 * is "ohlc" by default, which finds the open, high, low and close values
 * within all the grouped data. For ranges, the approximation is "range",
 * which finds the low and high values. For multi-dimensional data,
 * like ranges and OHLC, "averages" will compute the average for each
 * dimension.
 *
 * Custom aggregate methods can be added by assigning a callback function
 * as the approximation. This function takes a numeric array as the
 * argument and should return a single numeric value or `null`. Note
 * that the numeric array will never contain null values, only true
 * numbers. Instead, if null values are present in the raw data, the
 * numeric array will have an `.hasNulls` property set to `true`. For
 * single-value data sets the data is available in the first argument
 * of the callback function. For OHLC data sets, all the open values
 * are in the first argument, all high values in the second etc.
 *
 * Since v4.2.7, grouping meta data is available in the approximation
 * callback from `this.dataGroupInfo`. It can be used to extract information
 * from the raw data.
 *
 * Defaults to `average` for line-type series, `sum` for columns, `range`
 * for range series, `hlc` for HLC, and `ohlc` for OHLC and candlestick.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-approximation
 *         Approximation callback with custom data
 * @sample {highstock} stock/plotoptions/series-datagrouping-simple-approximation
 *         Simple approximation demo
 *
 * @type       {Highcharts.DataGroupingApproximationValue|Function}
 * @apioption  plotOptions.series.dataGrouping.approximation
 */
/**
 * Datetime formats for the header of the tooltip in a stock chart.
 * The format can vary within a chart depending on the currently selected
 * time range and the current data grouping.
 *
 * The default formats are:
 * ```js
 * {
 *     millisecond: [
 *         '%A, %e %b, %H:%M:%S.%L', '%A, %e %b, %H:%M:%S.%L', '-%H:%M:%S.%L'
 *     ],
 *     second: ['%A, %e %b, %H:%M:%S', '%A, %e %b, %H:%M:%S', '-%H:%M:%S'],
 *     minute: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
 *     hour: ['%A, %e %b, %H:%M', '%A, %e %b, %H:%M', '-%H:%M'],
 *     day: ['%A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
 *     week: ['%v %A, %e %b %Y', '%A, %e %b', '-%A, %e %b %Y'],
 *     month: ['%B %Y', '%B', '-%B %Y'],
 *     year: ['%Y', '%Y', '-%Y']
 * }
 * ```
 *
 * For each of these array definitions, the first item is the format
 * used when the active time span is one unit. For instance, if the
 * current data applies to one week, the first item of the week array
 * is used. The second and third items are used when the active time
 * span is more than two units. For instance, if the current data applies
 * to two weeks, the second and third item of the week array are used,
 *  and applied to the start and end date of the time span.
 *
 * @type      {Object}
 * @apioption plotOptions.series.dataGrouping.dateTimeLabelFormats
 */
/**
 * Enable or disable data grouping.
 *
 * @type      {boolean}
 * @default   true
 * @apioption plotOptions.series.dataGrouping.enabled
 */
/**
 * Specifies how the first grouped point is positioned on the xAxis.
 * If firstAnchor and/or lastAnchor are defined, then those options take
 * precedence over anchor for the first and/or last grouped points.
 * Available options:
 *
 * -`start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * -`middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * -`end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * -`firstPoint` the first point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:13)
 *
 * -`lastPoint` the last point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-first-anchor
 *         Applying first and last anchor.
 *
 * @see [dataGrouping.anchor](#plotOptions.series.dataGrouping.anchor)
 *
 * @type       {Highcharts.DataGroupingAnchorExtremes}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.firstAnchor
 */
/**
 * When data grouping is forced, it runs no matter how small the intervals
 * are. This can be handy for example when the sum should be calculated
 * for values appearing at random times within each hour.
 *
 * @type      {boolean}
 * @default   false
 * @apioption plotOptions.series.dataGrouping.forced
 */
/**
 * The approximate pixel width of each group. If for example a series
 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
 * is performed. If however the series contains so many points that
 * the spacing is less than the groupPixelWidth, Highcharts will try
 * to group it into appropriate groups so that each is more or less
 * two pixels wide. If multiple series with different group pixel widths
 * are drawn on the same x axis, all series will take the greatest width.
 * For example, line series have 2px default group width, while column
 * series have 10px. If combined, both the line and the column will
 * have 10px by default.
 *
 * @type      {number}
 * @default   2
 * @apioption plotOptions.series.dataGrouping.groupPixelWidth
 */
/**
 * By default only points within the visible range are grouped. Enabling this
 * option will force data grouping to calculate all grouped points for a given
 * dataset. That option prevents for example a column series from calculating
 * a grouped point partially. The effect is similar to
 * [Series.getExtremesFromAll](#plotOptions.series.getExtremesFromAll) but does
 * not affect yAxis extremes.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-groupall/
 *         Two series with the same data but different groupAll setting
 *
 * @type      {boolean}
 * @default   false
 * @since     6.1.0
 * @apioption plotOptions.series.dataGrouping.groupAll
 */
/**
 * Specifies how the last grouped point is positioned on the xAxis.
 * If firstAnchor and/or lastAnchor are defined, then those options take
 * precedence over anchor for the first and/or last grouped points.
 * Available options:
 *
 * -`start` places the point at the beginning of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 00:00:00)
 *
 * -`middle` places the point in the middle of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 12:00:00)
 *
 * -`end` places the point at the end of the group
 * (e.g. range 00:00:00 - 23:59:59 -> 23:59:59)
 *
 * -`firstPoint` the first point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:13)
 *
 * -`lastPoint` the last point in the group
 * (e.g. points at 00:13, 00:35, 00:59 -> 00:59)
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-first-anchor
 *         Applying first and last anchor.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-last-anchor
 *         Applying the last anchor in the chart with live data.
 *
 * @see [dataGrouping.anchor](#plotOptions.series.dataGrouping.anchor)
 *
 * @type       {Highcharts.DataGroupingAnchorExtremes}
 * @since 9.1.0
 * @default    start
 * @apioption  plotOptions.series.dataGrouping.lastAnchor
 */
/**
 * Normally, a group is indexed by the start of that group, so for example
 * when 30 daily values are grouped into one month, that month's x value
 * will be the 1st of the month. This apparently shifts the data to
 * the left. When the smoothed option is true, this is compensated for.
 * The data is shifted to the middle of the group, and min and max
 * values are preserved. Internally, this is used in the Navigator series.
 *
 * @type      {boolean}
 * @default   false
 * @deprecated
 * @apioption plotOptions.series.dataGrouping.smoothed
 */
/**
 * An array determining what time intervals the data is allowed to be
 * grouped to. Each array item is an array where the first value is
 * the time unit and the second value another array of allowed multiples.
 *
 * Defaults to:
 * ```js
 * units: [[
 *     'millisecond', // unit name
 *     [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
 * ], [
 *     'second',
 *     [1, 2, 5, 10, 15, 30]
 * ], [
 *     'minute',
 *     [1, 2, 5, 10, 15, 30]
 * ], [
 *     'hour',
 *     [1, 2, 3, 4, 6, 8, 12]
 * ], [
 *     'day',
 *     [1]
 * ], [
 *     'week',
 *     [1]
 * ], [
 *     'month',
 *     [1, 3, 6]
 * ], [
 *     'year',
 *     null
 * ]]
 * ```
 *
 * @type      {Array<Array<string,(Array<number>|null)>>}
 * @apioption plotOptions.series.dataGrouping.units
 */
/**
 * The approximate pixel width of each group. If for example a series
 * with 30 points is displayed over a 600 pixel wide plot area, no grouping
 * is performed. If however the series contains so many points that
 * the spacing is less than the groupPixelWidth, Highcharts will try
 * to group it into appropriate groups so that each is more or less
 * two pixels wide. Defaults to `10`.
 *
 * @sample {highstock} stock/plotoptions/series-datagrouping-grouppixelwidth/
 *         Two series with the same data density but different groupPixelWidth
 *
 * @type      {number}
 * @default   10
 * @apioption plotOptions.column.dataGrouping.groupPixelWidth
 */
''; // Required by JSDoc parsing

;// ./code/es-modules/masters/modules/datagrouping.src.js
/**
 * @license Highstock JS v12.4.0-modified (2025-11-06)
 * @module highcharts/modules/datagrouping
 * @requires highcharts
 *
 * Data grouping module
 *
 * (c) 2010-2025 Torstein Hønsi
 *
 * License: www.highcharts.com/license
 */





const datagrouping_src_G = (external_highcharts_src_js_default_default());
datagrouping_src_G.dataGrouping = datagrouping_src_G.dataGrouping || {};
datagrouping_src_G.dataGrouping.approximationDefaults = (datagrouping_src_G.dataGrouping.approximationDefaults ||
    (datagrouping_src_js_default_dataGrouping_approximationDefaults_default()));
datagrouping_src_G.dataGrouping.approximations = (datagrouping_src_G.dataGrouping.approximations ||
    (datagrouping_src_js_default_dataGrouping_approximations_default()));
DataGrouping.compose(datagrouping_src_G.Axis, datagrouping_src_G.Series, datagrouping_src_G.Tooltip);
/* harmony default export */ const datagrouping_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/Extensions/Annotations/NavigationBindingsUtilities.js
/* *
 *
 *  (c) 2009-2025 Highsoft, Black Label
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { defined: NavigationBindingsUtilities_defined, isNumber: NavigationBindingsUtilities_isNumber, pick: NavigationBindingsUtilities_pick } = (external_highcharts_src_js_default_default());
/* *
 *
 *  Constants
 *
 * */
/**
 * Define types for editable fields per annotation. There is no need to define
 * numbers, because they won't change their type to string.
 * @private
 */
const annotationsFieldsTypes = {
    backgroundColor: 'string',
    borderColor: 'string',
    borderRadius: 'string',
    color: 'string',
    fill: 'string',
    fontSize: 'string',
    labels: 'string',
    name: 'string',
    stroke: 'string',
    title: 'string'
};
/* *
 *
 *  Functions
 *
 * */
/**
 * Returns the first xAxis or yAxis that was clicked with its value.
 *
 * @private
 *
 * @param {Array<Highcharts.PointerAxisCoordinateObject>} coords
 *        All the chart's x or y axes with a current pointer's axis value.
 *
 * @return {Highcharts.PointerAxisCoordinateObject}
 *         Object with a first found axis and its value that pointer
 *         is currently pointing.
 */
function getAssignedAxis(coords) {
    return coords.filter((coord) => {
        const extremes = coord.axis.getExtremes(), axisMin = extremes.min, axisMax = extremes.max, 
        // Correct axis edges when axis has series
        // with pointRange (like column)
        minPointOffset = NavigationBindingsUtilities_pick(coord.axis.minPointOffset, 0);
        return NavigationBindingsUtilities_isNumber(axisMin) && NavigationBindingsUtilities_isNumber(axisMax) &&
            coord.value >= (axisMin - minPointOffset) &&
            coord.value <= (axisMax + minPointOffset) &&
            // Don't count navigator axis
            !coord.axis.options.isInternal;
    })[0]; // If the axes overlap, return the first axis that was found.
}
/**
 * Get field type according to value
 *
 * @private
 *
 * @param {'boolean'|'number'|'string'} value
 * Atomic type (one of: string, number, boolean)
 *
 * @return {'checkbox'|'number'|'text'}
 * Field type (one of: text, number, checkbox)
 */
function getFieldType(key, value) {
    const predefinedType = annotationsFieldsTypes[key];
    let fieldType = typeof value;
    if (NavigationBindingsUtilities_defined(predefinedType)) {
        fieldType = predefinedType;
    }
    return {
        'string': 'text',
        'number': 'number',
        'boolean': 'checkbox'
    }[fieldType];
}
/* *
 *
 *  Default Export
 *
 * */
const NavigationBindingUtilities = {
    annotationsFieldsTypes,
    getAssignedAxis,
    getFieldType
};
/* harmony default export */ const NavigationBindingsUtilities = (NavigationBindingUtilities);

;// ./code/es-modules/Extensions/MouseWheelZoom/MouseWheelZoom.js
/* *
 *
 *  (c) 2023 Torstein Honsi, Askel Eirik Johansson
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { addEvent: MouseWheelZoom_addEvent, isObject, pick: MouseWheelZoom_pick, defined: MouseWheelZoom_defined, merge: MouseWheelZoom_merge } = (external_highcharts_src_js_default_default());

const { getAssignedAxis: MouseWheelZoom_getAssignedAxis } = NavigationBindingsUtilities;
/* *
 *
 *  Constants
 *
 * */
const composedClasses = [], MouseWheelZoom_defaultOptions = {
    enabled: true,
    sensitivity: 1.1,
    showResetButton: false
};
let wheelTimer;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
const optionsToObject = (options) => {
    if (!isObject(options)) {
        options = {
            enabled: options ?? true
        };
    }
    return MouseWheelZoom_merge(MouseWheelZoom_defaultOptions, options);
};
/**
 * @private
 */
const zoomBy = function (chart, howMuch, xAxis, yAxis, mouseX, mouseY, options) {
    const type = MouseWheelZoom_pick(options.type, chart.zooming.type, '');
    let axes = [];
    if (type === 'x') {
        axes = xAxis;
    }
    else if (type === 'y') {
        axes = yAxis;
    }
    else if (type === 'xy') {
        axes = chart.axes;
    }
    const hasZoomed = chart.transform({
        axes,
        // Create imaginary reference and target rectangles around the mouse
        // point that scales up or down with `howMuch`;
        to: {
            x: mouseX - 5,
            y: mouseY - 5,
            // Must use 10 to get passed the limit for too small reference.
            // Below this, the transform will default to a pan.
            width: 10,
            height: 10
        },
        from: {
            x: mouseX - 5 * howMuch,
            y: mouseY - 5 * howMuch,
            width: 10 * howMuch,
            height: 10 * howMuch
        },
        trigger: 'mousewheel',
        allowResetButton: options.showResetButton
    });
    if (hasZoomed) {
        if (MouseWheelZoom_defined(wheelTimer)) {
            clearTimeout(wheelTimer);
        }
        // Some time after the last mousewheel event, run drop. In case any of
        // the affected axes had `startOnTick` or `endOnTick`, they will be
        // re-adjusted now.
        wheelTimer = setTimeout(() => {
            chart.pointer?.drop();
        }, 400);
    }
    return hasZoomed;
};
/**
 * @private
 */
function onAfterGetContainer() {
    const wheelZoomOptions = optionsToObject(this.zooming.mouseWheel);
    if (wheelZoomOptions.enabled) {
        MouseWheelZoom_addEvent(this.container, 'wheel', (e) => {
            e = this.pointer?.normalize(e) || e;
            const { pointer } = this, allowZoom = pointer && !pointer.inClass(e.target, 'highcharts-no-mousewheel');
            // Firefox uses e.detail, WebKit and IE uses deltaX, deltaY, deltaZ.
            if (this.isInsidePlot(e.chartX - this.plotLeft, e.chartY - this.plotTop) && allowZoom) {
                const wheelSensitivity = wheelZoomOptions.sensitivity || 1.1, delta = e.detail || ((e.deltaY || 0) / 120), xAxisCoords = MouseWheelZoom_getAssignedAxis(pointer.getCoordinates(e).xAxis), yAxisCoords = MouseWheelZoom_getAssignedAxis(pointer.getCoordinates(e).yAxis);
                const hasZoomed = zoomBy(this, Math.pow(wheelSensitivity, delta), xAxisCoords ? [xAxisCoords.axis] : this.xAxis, yAxisCoords ? [yAxisCoords.axis] : this.yAxis, e.chartX, e.chartY, wheelZoomOptions);
                // Prevent page scroll
                if (hasZoomed) {
                    e.preventDefault?.();
                }
            }
        });
    }
}
/**
 * @private
 */
function MouseWheelZoom_compose(ChartClass) {
    if (composedClasses.indexOf(ChartClass) === -1) {
        composedClasses.push(ChartClass);
        MouseWheelZoom_addEvent(ChartClass, 'afterGetContainer', onAfterGetContainer);
    }
}
/* *
 *
 *  Default Export
 *
 * */
const MouseWheelZoomComposition = {
    compose: MouseWheelZoom_compose
};
/* harmony default export */ const MouseWheelZoom = (MouseWheelZoomComposition);
/* *
 *
 *  API Options
 *
 * */
/**
 * The mouse wheel zoom is a feature included in Highcharts Stock, but is also
 * available for Highcharts Core as a module. Zooming with the mouse wheel is
 * enabled by default in Highcharts Stock. In Highcharts Core it is enabled if
 * [chart.zooming.type](chart.zooming.type) is set. It can be disabled by
 * setting this option to `false`.
 *
 * @type      {boolean|object}
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/enabled
 *            Enable or disable
 * @sample    {highstock} stock/mouse-wheel-zoom/enabled
 *            Enable or disable
 * @apioption chart.zooming.mouseWheel
 */
/**
 * Zooming with the mouse wheel can be disabled by setting this option to
 * `false`.
 *
 * @type      {boolean}
 * @default   true
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @apioption chart.zooming.mouseWheel.enabled
 */
/**
 * Adjust the sensitivity of the zoom. Sensitivity of mouse wheel or trackpad
 * scrolling. `1` is no sensitivity, while with `2`, one mouse wheel delta will
 * zoom in `50%`.
 *
 * @type      {number}
 * @default   1.1
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/sensitivity
 *            Change mouse wheel zoom sensitivity
 * @sample    {highstock} stock/mouse-wheel-zoom/sensitivity
 *            Change mouse wheel zoom sensitivity
 * @apioption chart.zooming.mouseWheel.sensitivity
 */
/**
 * Decides in what dimensions the user can zoom scrolling the wheel. Can be one
 * of `x`, `y` or `xy`. In Highcharts Core, if not specified here, it will
 * inherit the type from [chart.zooming.type](chart.zooming.type). In Highcharts
 * Stock, it defaults to `x`.
 *
 * Note that particularly with mouse wheel in the y direction, the zoom is
 * affected by the default [yAxis.startOnTick](#yAxis.startOnTick) and
 * [endOnTick]((#yAxis.endOnTick)) settings. In order to respect these settings,
 * the zoom level will adjust after the user has stopped zooming. To prevent
 * this, consider setting `startOnTick` and `endOnTick` to `false`.
 *
 * @type      {string}
 * @default   {highcharts} undefined
 * @default   {highstock} x
 * @validvalue ["x", "y", "xy"]
 * @since 11.1.0
 * @requires  modules/mouse-wheel-zoom
 * @apioption chart.zooming.mouseWheel.type
 */
/**
 * Whether to enable the reset zoom button when zooming with the mouse wheel.
 *
 * @type      {boolean}
 * @default   false
 * @since {next}
 * @requires  modules/mouse-wheel-zoom
 * @sample    {highcharts} highcharts/mouse-wheel-zoom/reset-zoom-button
 *            Enable reset zoom button for mouse wheel zooming
 * @sample    {highstock} stock/mouse-wheel-zoom/reset-zoom-button
 *            Enable reset zoom button for mouse wheel zooming
 * @apioption chart.zooming.mouseWheel.showResetButton
 */
(''); // Keeps doclets above in JS file

;// ./code/es-modules/masters/modules/mouse-wheel-zoom.src.js
/**
 * @license Highcharts JS v12.4.0-modified (2025-11-06)
 * @module highcharts/modules/mouse-wheel-zoom
 * @requires highcharts
 *
 * Mousewheel zoom module
 *
 * (c) 2023 Askel Eirik Johansson
 *
 * License: www.highcharts.com/license
 */



const mouse_wheel_zoom_src_G = (external_highcharts_src_js_default_default());
mouse_wheel_zoom_src_G.MouseWheelZoom = mouse_wheel_zoom_src_G.MouseWheelZoom || MouseWheelZoom;
mouse_wheel_zoom_src_G.MouseWheelZoom.compose(mouse_wheel_zoom_src_G.Chart);
/* harmony default export */ const mouse_wheel_zoom_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/masters/modules/stock.src.js
/**
 * @license Highstock JS v12.4.0-modified (2025-11-06)
 * @module highcharts/modules/stock
 * @requires highcharts
 *
 * Highcharts Stock as a plugin for Highcharts
 *
 * (c) 2010-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */















const stock_src_G = (external_highcharts_src_js_default_default());
// Classes
stock_src_G.Navigator = stock_src_G.Navigator || (accessibility_src_js_default_Navigator_default());
stock_src_G.OrdinalAxis = stock_src_G.OrdinalAxis || Axis_OrdinalAxis;
stock_src_G.RangeSelector = stock_src_G.RangeSelector || (accessibility_src_js_default_RangeSelector_default());
stock_src_G.Scrollbar = stock_src_G.Scrollbar || (accessibility_src_js_default_Scrollbar_default());
// Functions
stock_src_G.stockChart = stock_src_G.stockChart || Chart_StockChart.stockChart;
stock_src_G.StockChart = stock_src_G.StockChart || stock_src_G.stockChart;
stock_src_G.extend(stock_src_G.StockChart, Chart_StockChart);
// Compositions
Series_DataModifyComposition.compose(stock_src_G.Series, stock_src_G.Axis, stock_src_G.Point);
Flags_FlagsSeries.compose(stock_src_G.Renderer);
OHLC_OHLCSeries.compose(stock_src_G.Series);
stock_src_G.Navigator.compose(stock_src_G.Chart, stock_src_G.Axis, stock_src_G.Series);
stock_src_G.OrdinalAxis.compose(stock_src_G.Axis, stock_src_G.Series, stock_src_G.Chart);
stock_src_G.RangeSelector.compose(stock_src_G.Axis, stock_src_G.Chart);
stock_src_G.Scrollbar.compose(stock_src_G.Axis);
stock_src_G.StockChart.compose(stock_src_G.Chart, stock_src_G.Axis, stock_src_G.Series, stock_src_G.SVGRenderer);
/* harmony default export */ const stock_src = ((/* unused pure expression or super */ null && (Highcharts)));

;// ./code/es-modules/masters/indicators/indicators-all.src.js





















































const indicators_all_src_G = (external_highcharts_src_js_default_default());
indicators_all_src_G.MultipleLinesComposition =
    indicators_all_src_G.MultipleLinesComposition || Indicators_MultipleLinesComposition;
/* harmony default export */ const indicators_all_src = ((external_highcharts_src_js_default_default()));

export { indicators_all_src as default };
