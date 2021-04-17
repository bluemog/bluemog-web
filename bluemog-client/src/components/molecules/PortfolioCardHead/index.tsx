import React from 'react';
import { css } from '@emotion/react';
import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';

export interface Props {
    profileImageURL: string;
    labels: string[];
    name: string;
    height?: string;
    width?: string;
}

function ProfileCardHead({
  profileImageURL, name, labels, height = '30%', width = '100%',
}: Props) {
  const componentCSS = css`
    display: flex;
    height: ${height};
    width: ${width};
    justify-content: flex-start;
    `;

  const labelsToBeShown = labels.filter((label) => label !== '').slice(0, 2);

  return (
    <div css={componentCSS}>
      <ProfileImage src={profileImageURL} />
      <ProfileInfo marginLeft="10%" name={name} labels={labelsToBeShown} />
    </div>
  );
}

export default ProfileCardHead;
