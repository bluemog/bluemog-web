import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    src: string,
    alt: string,
    className?: string;
}

function ProfileImage({ src, alt, className }: Props) {
  const componentCSS = css`
        border-radius: 12px;
        width: 130px;
        height: 130px;
    `;

  return (
    <img className={className} css={componentCSS} src={src} alt={alt} />
  );
}

export default ProfileImage;
