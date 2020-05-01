import styled from 'styled-components'
import { ColorProps, color } from '../../props/color'
import { SpacingProps, spacing } from '../../props/spacing'

type BoxProps = ColorProps & SpacingProps;

export const Box = styled.div<BoxProps>`
  ${color};
  ${spacing};
`;