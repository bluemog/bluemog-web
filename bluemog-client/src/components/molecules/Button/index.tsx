import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { orange } from 'constants/theme';
import { mainFont } from 'styles/base';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const StyledButton = styled.button`
  ${mainFont}
  border: none;
  background: ${orange};
  color: rgb(255, 255, 255);
  font-size: 20px;
  border-radius: 30px;
  width: 140px;
  height: 50px;
`;

function Button({ className, ...rest }: Props) {
  return (
    <StyledButton className={className} {...rest} />
  );
}

export default Button;
