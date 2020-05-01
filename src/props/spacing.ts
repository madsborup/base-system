import { ThemedStyledProps, css, DefaultTheme } from 'styled-components';
import { themeSpacing } from '../types';

export interface SpacingProps {
  size?: themeSpacing;
};

export const spacing = ({ theme: { spacing }, size }: ThemedStyledProps<SpacingProps, DefaultTheme>) => css`
  padding: ${size && `${spacing[size]}px`};
`;