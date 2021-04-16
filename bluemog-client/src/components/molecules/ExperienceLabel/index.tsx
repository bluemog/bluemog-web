import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    children?: React.ReactNode;
    backgroundColorInHex?: string;
    font?: string;
}

function ExperienceLabel({ backgroundColorInHex = 'fe03ee', font = 'Noto Sans KR', children }: Props) {
  const labelStyle = css`
    display: inline-block;
    padding: 8px 12px;
    border-radius: 10px;
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
