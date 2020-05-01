import styled from "styled-components/macro";

export const StyledButton = styled.button`
  ${({ color }) => color};

  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
  }

`;

export const StyledPrimaryButton = styled(StyledButton)`

`;

export const StyledOutlineButton = styled(StyledButton)`

`;

export const StyledTextButton = styled(StyledButton)`

`;

export const StyledDangerButton = styled(StyledButton)`

`;