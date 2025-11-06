import type { DeepPartial } from '../../Shared/Types';
import type { DefaultOptions } from '../../Core/Options';
declare namespace HighContrastDarkTheme {
    const options: DeepPartial<DefaultOptions>;
    /**
     * Apply the theme.
     */
    function apply(): void;
}
export default HighContrastDarkTheme;
