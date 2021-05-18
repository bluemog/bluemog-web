import React from 'react';
import { css } from '@emotion/react';

export interface Props {
  imageUrl: string;
  alt: string;
  className?: string;
}

function Iamge({ imageUrl, alt, className }: Props) {
  const componentCSS = css`
    border-radius: 12px;
    width: 130px;
    height: 130px;
  `;

  return (
    <img className={className} css={componentCSS} src={imageUrl} alt={alt} />
  );
}

export default Iamge;
