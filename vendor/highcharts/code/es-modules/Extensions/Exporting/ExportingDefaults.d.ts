import type ExportingOptions from './ExportingOptions';
import type NavigationOptions from './NavigationOptions';
declare const ExportingDefaults: {
    exporting: ExportingOptions;
    lang: {
        /**
         * Exporting module only. The text for the menu item to view the chart
         * in full screen.
         *
         * @since 8.0.1
         */
        viewFullscreen: string;
        /**
         * Exporting module only. The text for the menu item to exit the chart
         * from full screen.
         *
         * @since 8.0.1
         */
        exitFullscreen: string;
        /**
         * Exporting module only. The text for the menu item to print the chart.
         *
         * @since    3.0.1
         * @requires modules/exporting
         */
        printChart: string;
        /**
         * Exporting module only. The text for the PNG download menu item.
         *
         * @since    2.0
         * @requires modules/exporting
         */
        downloadPNG: string;
        /**
         * Exporting module only. The text for the JPEG download menu item.
         *
         * @since    2.0
         * @requires modules/exporting
         */
        downloadJPEG: string;
        /**
         * Exporting module only. The text for the PDF download menu item.
         *
         * @since    2.0
         * @requires modules/exporting
         */
        downloadPDF: string;
        /**
         * Exporting module only. The text for the SVG download menu item.
         *
         * @since    2.0
         * @requires modules/exporting
         */
        downloadSVG: string;
        /**
         * Exporting module menu. The tooltip title for the context menu holding
         * print and export menu items.
         *
         * @since    3.0
         * @requires modules/exporting
         */
        contextButtonTitle: string;
    };
    navigation: NavigationOptions;
};
export default ExportingDefaults;
