import React from 'react';
import { css } from '@emotion/react';

export interface Props {
    src: string,
}

function ProfileImage({ src }: Props) {
  const imageStyle = css`
        border-radius: 12px;
    `;

  return (
    <img css={imageStyle} src={src} alt="profile iamge" />
  );
}

export default ProfileImage;
