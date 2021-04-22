import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import ExperienceLabel from '../ExperienceLabel';
import Name from '../Name';

type NameProps = ComponentProps<typeof Name>;
type ExperienceLabelProps = ComponentProps<typeof ExperienceLabel>;
type NameText = NameProps['name'];
type ExperienceLabelText = ExperienceLabelProps['text'];

export interface Props {
    name: NameText;
    labels: ExperienceLabelText[];
    height?: string;
    marginLeft?: string;
}

function ProfileInfo({
  name, labels, marginLeft,
}: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: '100%';
    justify-content: space-between;
    margin-left: ${marginLeft};
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
