import React from 'react';
import { css } from '@emotion/react';

interface Props {
    children?: React.ReactNode,
    color?: string,
    font?: string,
    fontSize?: string,
}

function Name({
  children, color = '1684b5', font = 'Roboto', fontSize = '20px',
}: Props) {
  const nameStyle = css`
        color: #${color};
        font-family: ${font}, sans-serif;
        font-size: ${fontSize};
        font-weight: bold;
    `;

  return (
    <span css={nameStyle}>
      {children}
    </span>
  );
}

export default Name;
