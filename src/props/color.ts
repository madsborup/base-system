import { ThemedStyledProps, css, DefaultTheme } from 'styled-components';
import { themeColors } from '../types';

export interface ColorProps {
  color?: themeColors;
  bg?: themeColors;
};

export const color = ({ theme: { colors }, color, bg }: ThemedStyledProps<ColorProps, DefaultTheme>) => css`
  color: ${color && colors[color]};
  background-color: ${bg && colors[bg]};
`;