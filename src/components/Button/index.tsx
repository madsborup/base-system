import React, { ReactNode } from 'react';
import { StyledComponent } from 'styled-components';
import {
  StyledButton,
  StyledPrimaryButton,
  StyledOutlineButton,
  StyledTextButton,
  StyledDangerButton
} from './style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const handleButtonLinking = (
  ButtonComponent: StyledComponent<'button', ButtonProps>,
  props: ButtonProps
): JSX.Element => {
  const { children, ...rest } = props;
  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

export const Button = (props: ButtonProps) => {
  return handleButtonLinking(StyledButton, props);
};

export const PrimaryButton = (props: ButtonProps): JSX.Element => {
  return handleButtonLinking(StyledPrimaryButton, props);
};

export const OutlineButton = (props: ButtonProps): JSX.Element => {
  return handleButtonLinking(StyledOutlineButton, props);
};

export const TextButton = (props: ButtonProps): JSX.Element => {
  return handleButtonLinking(StyledTextButton, props);
};

export const DangerButton = (props: ButtonProps): JSX.Element => {
  return handleButtonLinking(StyledDangerButton, props);
};
