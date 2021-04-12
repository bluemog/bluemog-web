import React from 'react';
import { css } from '@emotion/react';

interface Props {
    src: string,
    width?: string,
    height?: string,
}

function ProfileImage({ src, width, height }: Props) {
  const imageStyle = css`
        width: ${width};
        height: ${height};
        border-radius: 12px;
    `;

  return (
    <img css={imageStyle} src={src} alt="profile iamge" />
  );
}

export default ProfileImage;
