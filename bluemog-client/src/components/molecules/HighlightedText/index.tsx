import React from 'react';
import { css } from '@emotion/react';
import { highlightBlue } from 'constants/theme';
import Heading from 'components/molecules/Heading';

export interface Props {
  text: string;
}

function HighlightedText({ text }: Props) {
  const componentCSS = css`
    display: inline;
    box-shadow: inset 0 -15px 0 ${highlightBlue};
  `;

  return (
    <Heading><span css={componentCSS}>{text}</span></Heading>
  );
}

export default HighlightedText;
