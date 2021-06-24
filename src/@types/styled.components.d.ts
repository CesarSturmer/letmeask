import { light } from '../styles/theme/theme';

type CustomTheme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}