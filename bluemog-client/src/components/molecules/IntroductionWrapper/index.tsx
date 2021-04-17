import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    text: string;
    backgroundColorInHex?: string;
    font?: string;
    fontSize?: string;
    width?: string;
    height?: string
    margin?: string;
    lineClamp?: number;
}

function IntroductionWrapper({
  backgroundColorInHex = 'edf5fa',
  font = 'Noto Sans KR',
  fontSize = '18px',
  text,
  width = '100%',
  height = '60%',
  margin = '10px 25px 5px 25px',
  lineClamp = 8,
}: Props) {
  const wrapperStyle = css`
    padding: 10px 0;
    border-radius: 12px;
    width: ${width};
    height: ${height};
    background: #${backgroundColorInHex};

    p {
      color: #1684b5;
      font-family: ${font}, sans-serif;
      font-size: ${fontSize};
      line-height: 2;
      letter-spacing: 0.65px;
      margin: ${margin};
  
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
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
