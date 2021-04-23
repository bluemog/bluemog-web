import React from 'react';
import { css } from '@emotion/react';
import { BMFont } from 'styles/base';
import { BMSkyblue } from 'constants/theme';

export interface Props {
    text: string;
}

function ExperienceLabel({ text }: Props) {
  const labelStyle = css`
    ${BMFont};
    display: inline-block;
    padding: 8px 12px;
    border-radius: 10px;
    background: ${BMSkyblue};  
  `;

  return (
    <span css={labelStyle}>
      {text}
    </span>
  );
}

export default ExperienceLabel;
