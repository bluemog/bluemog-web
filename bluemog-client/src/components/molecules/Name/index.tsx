import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    name: string,
    color?: string,
    font?: string,
    fontSize?: string,
}

function Name({
  name, color = '1684b5', font = 'Roboto', fontSize = '20px',
}: Props) {
  const nameStyle = css`
        color: #${color};
        font-family: ${font}, sans-serif;
        font-size: ${fontSize};
        font-weight: bold;
    `;

  return (
    <span css={nameStyle}>
      {name}
    </span>
  );
}

export default Name;
