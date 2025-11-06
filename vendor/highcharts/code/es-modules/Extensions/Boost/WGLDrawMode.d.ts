import type { SeriesTypeRegistry } from '../../Core/Series/SeriesType';
export type WGLDrawModeValue = ('LINE_STRIP' | 'LINES' | 'POINTS' | 'TRIANGLES');
declare const WGLDrawMode: Record<keyof SeriesTypeRegistry, WGLDrawModeValue>;
export default WGLDrawMode;
