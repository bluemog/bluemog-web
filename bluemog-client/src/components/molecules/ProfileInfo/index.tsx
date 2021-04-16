import React from 'react';
import { css } from '@emotion/react';
import ExperienceLabel from '../ExperienceLabel';
import Name from '../Name';

export interface Props {
    name: string;
    labels: string[];
    height?: string;
}

function ProfileInfo({ name, labels, height = '100%' }: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: ${height};
    justify-content: space-between;
    `;

  return (
    <div css={componentCSS}>
      <Name name={name} />
      {labels.map((label) => (
        <ExperienceLabel text={label} />
      ))}
    </div>
  );
}

export default ProfileInfo;
