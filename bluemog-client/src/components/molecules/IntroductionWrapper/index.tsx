import React from 'react';
import { css } from '@emotion/react';

interface Props {
    children?: React.ReactNode;
    backgroundColorInHex?: string;
    textColorInHex?: string;
    font?: string;
    width?: string;
    height?: string
}

function IntroductionWrapper({
  backgroundColorInHex = 'edf5fa', font = 'Noto Sans KR', children, width = '310px', height = '320px',
}: Props) {
  const wrapperStyle = css`
    padding: 10px;
    border-radius: 12px;
    width: ${width};
    height: ${height};
    background: #${backgroundColorInHex};
  `;

  const textStyle = css`
    color: #1684b5;
    font-family: ${font}, sans-serif;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.65px;
    margin: 10px 20px 5px 20px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
  `;

  return (
    <div css={wrapperStyle}>
      <p css={textStyle}>
        {children}
      </p>
    </div>
  );
}

export default IntroductionWrapper;
