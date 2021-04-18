import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    text: string;
    backgroundColorInHex?: string;
    font?: string;
}

function ExperienceLabel({ backgroundColorInHex = 'C7E9FF', font = 'Noto Sans KR', text }: Props) {
  const labelStyle = css`
    display: inline-block;
    padding: 8px 12px;
    border-radius: 10px;
    background: #${backgroundColorInHex};
    font-family: ${font}, sans-serif
  `;

  return (
    <span css={labelStyle}>
      {text}
    </span>
  );
}

export default ExperienceLabel;
