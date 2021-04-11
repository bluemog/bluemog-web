import React from 'react';
import { css } from '@emotion/react';

interface Props {
    children?: React.ReactNode;
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
  children,
  width = '310px',
  height = '320px',
  margin = '10px 20px 5px 20px',
  lineClamp = 8,
}: Props) {
  const wrapperStyle = css`
    padding: 10px;
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
        {children}
      </p>
    </div>
  );
}

export default IntroductionWrapper;
