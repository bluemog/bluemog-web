import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';
import Name from '../Name';

type NameProps = ComponentProps<typeof Name>;
type ProfileInfoProps = ComponentProps<typeof ProfileInfo>;
type ProfileImageProps = ComponentProps<typeof ProfileImage>;
type Labels = Pick<ProfileInfoProps, 'labels'>
type NameText = NameProps['name'];

export interface Props extends Labels, ProfileImageProps {
    // labels: ExperienceLabelText[];
    name: NameText;
}

const StyledImage = styled(ProfileImage)`
  height: '140px';
  width: '140px';
`;

function ProfileCardHead({
  name, labels, ...imageProps
}: Props) {
  const componentCSS = css`
    display: flex;
    height: '30%';
    width: '100%';
    justify-content: flex-start;
  `;

  const labelsToBeShown = labels.filter((label) => label !== '').slice(0, 2);

  return (
    <div css={componentCSS}>
      <StyledImage {...imageProps} />
      <ProfileInfo marginLeft="10%" name={name} labels={labelsToBeShown} />
    </div>
  );
}

export default ProfileCardHead;
