import React from 'react';
import { css } from '@emotion/react';
import ExperienceLabel from '../ExperienceLabel';
import Name from '../Name';

export interface Props {
    name: string;
    labels: string[];
    height?: string;
}

function ProfileInfo({ name, labels, height = '140px' }: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: ${height};
    justify-content: space-between;
    `;

  const labelsToBeShown = labels.filter((label) => label !== '').slice(0, 2);

  return (
    <div css={componentCSS}>
      <Name name={name} />
      {labelsToBeShown.map((label) => (
        <ExperienceLabel text={label} />
      ))}
    </div>
  );
}

export default ProfileInfo;
