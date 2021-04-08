import React from 'react';
import { css } from '@emotion/react';

interface Props {
    children: React.ReactNode;
    backgroundColorInHex: string;
}

function ExperienceLabel({ backgroundColorInHex, children }: Props) {
  return (
    <span css={css`
    padding: 16px;
    background: #${backgroundColorInHex};
  `}
    >
      {children}
    </span>
  );
}

export default ExperienceLabel;
