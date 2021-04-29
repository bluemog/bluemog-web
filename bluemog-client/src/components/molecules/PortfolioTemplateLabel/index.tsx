import React from 'react';
import { css } from '@emotion/react';
import { BMDeepMint } from 'constants/theme';
import { BMFont } from 'styles/base';

export interface Props {
  text: string,
  className?: string,
}

function PortfolioTemplateLabel({ text, className }: Props) {
  const componentCSS = css`
      ${BMFont}
      color: ${BMDeepMint};
      font-size: 20px;
      border-bottom: solid ${BMDeepMint} 2px;
  `;

  return (
    <span className={className} css={componentCSS}>
      {text}
    </span>
  );
}

export default PortfolioTemplateLabel;
