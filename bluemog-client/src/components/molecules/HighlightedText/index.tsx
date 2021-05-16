import React from 'react';
import { css } from '@emotion/react';
import { highlightBlue } from 'constants/theme';
import Heading from 'components/molecules/Heading';

export interface Props {
  text: string;
  className?: string;
}

function HighlightedText({ className, text }: Props) {
  const componentCSS = css`
    display: inline;
    box-shadow: inset 0 -15px 0 ${highlightBlue};
  `;

  return (
    <Heading className={className}><span css={componentCSS}>{text}</span></Heading>
  );
}

export default HighlightedText;
