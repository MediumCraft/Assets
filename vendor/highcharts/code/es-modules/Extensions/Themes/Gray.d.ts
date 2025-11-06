import type { DeepPartial } from '../../Shared/Types';
import type { DefaultOptions } from '../../Core/Options';
declare namespace GrayTheme {
    const options: DeepPartial<DefaultOptions>;
    /**
     * Apply the theme.
     */
    function apply(): void;
}
export default GrayTheme;
