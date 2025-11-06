import type { DeepPartial } from '../../Shared/Types';
import type { DefaultOptions } from '../../Core/Options';
declare namespace BrandLightTheme {
    const options: DeepPartial<DefaultOptions>;
    /**
     * Apply the theme.
     */
    function apply(): void;
}
export default BrandLightTheme;
