import React from 'react';
import { css } from '@emotion/react';

interface Props {
    children?: React.ReactNode;
    backgroundColorInHex?: string;
    font?: string;
}

function ExperienceLabel({ backgroundColorInHex = 'fe03ee', font = 'Noto Sans KR', children }: Props) {
  const labelStyle = css`
    display: inline-block;
    padding: 16px;
    background: #${backgroundColorInHex};
    font-family: ${font}, sans-serif
  `;

  return (
    <span css={labelStyle}>
      {children}
    </span>
  );
}

export default ExperienceLabel;
