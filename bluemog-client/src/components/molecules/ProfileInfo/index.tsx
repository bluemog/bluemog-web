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
    className?: string;
}

function ProfileInfo({
  name, labels, className,
}: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 130px;
    justify-content: space-between;
    `;

  return (
    <div className={className} css={componentCSS}>
      <Name name={name} />
      {labels.map((label) => (
        <ExperienceLabel text={label} />
      ))}
    </div>
  );
}

export default ProfileInfo;
