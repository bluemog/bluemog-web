import React, { InputHTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';
import { mainFont } from 'styles/base';
import { gray } from 'constants/theme';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string,
}

const StyledInput = styled.input`
${mainFont}
border: none;
outline: none;
background: none;
font-size: 20px;
padding: 0;
::placeholder {
  color: ${gray};
  font-size: 20px;
}
`;

function Input({
  className, ...rest
}: Props) {
  return (
    <StyledInput className={className} {...rest} />
  );
}

export default memo(Input);
