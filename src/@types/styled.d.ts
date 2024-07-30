import 'styled-components';
import { ThemeDefault } from '../styles/themes/default';

type ThemeType = typeof ThemeDefault;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}