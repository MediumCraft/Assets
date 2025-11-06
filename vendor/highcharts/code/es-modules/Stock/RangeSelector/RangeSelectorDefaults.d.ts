import type RangeSelectorOptions from './RangeSelectorOptions';
declare const RangeSelectorDefaults: {
    lang: {
        /**
         * The text for the label for the range selector buttons.
         *
         * @product highstock gantt
         */
        rangeSelectorZoom: string;
        /**
         * The text for the label for the "from" input box in the range
         * selector. Since v9.0, this string is empty as the label is not
         * rendered by default.
         *
         * @product highstock gantt
         */
        rangeSelectorFrom: string;
        /**
         * The text for the label for the "to" input box in the range selector.
         *
         * @product highstock gantt
         */
        rangeSelectorTo: string;
        /**
         * The default text for the rangeselector buttons.
         *
         * @since 12.2.0
         */
        rangeSelector: {
            allText: string;
            allTitle: string;
            monthText: string;
            monthTitle: string;
            yearText: string;
            yearTitle: string;
            ytdText: string;
            ytdTitle: string;
        };
    };
    rangeSelector: RangeSelectorOptions;
};
export default RangeSelectorDefaults;
