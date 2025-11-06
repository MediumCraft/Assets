import type NavigationBindings from '../NavigationBindings';
import type Pointer from '../../../Core/Pointer';
/**
 * @private
 */
declare function compose(NagivationBindingsClass: typeof NavigationBindings, PointerClass: typeof Pointer): void;
declare const PopupComposition: {
    compose: typeof compose;
};
export default PopupComposition;
