import React from 'react';
import { css } from '@emotion/react';
import { BMDeepMint } from 'constants/theme';

export interface Props {
    name: string;
}

function Name({
  name,
}: Props) {
  const componentCSS = css`
        color: ${BMDeepMint};
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
    `;

  return (
    <span css={componentCSS}>
      {name}
    </span>
  );
}

export default Name;
