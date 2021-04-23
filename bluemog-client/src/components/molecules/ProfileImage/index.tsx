import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    src: string,
    alt?: string,
}

function ProfileImage({ src, alt }: Props) {
  const componentStyle = css`
        border-radius: 12px;
    `;

  return (
    <img css={componentStyle} src={src} alt={alt} />
  );
}

export default ProfileImage;
