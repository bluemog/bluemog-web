import React from 'react';
import { css } from '@emotion/react';
import { BMFont } from '../../../styles/base';
import { BMBackgroundBlue, BMDeepMint } from '../../../constants/theme';

export interface Props {
    text: string;
}

function IntroductionWrapper({
  text,
}: Props) {
  const wrapperStyle = css`
    padding: 10px 0;
    border-radius: 12px;
    width: 100%;
    height: 60%;
    background: ${BMBackgroundBlue};

    p {
      ${BMFont}
      color: ${BMDeepMint};
      font-size: 18px;
      line-height: 2;
      letter-spacing: 0.65px;
      margin: 10px 25px 5px 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      word-wrap:break-word; 
    }
  `;

  return (
    <div css={wrapperStyle}>
      <p>
        {text}
      </p>
    </div>
  );
}

export default IntroductionWrapper;
