import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImage from '../ProfileImage';
import ProfileInfo from '../ProfileInfo';
import Name from '../Name';

type NameProps = ComponentProps<typeof Name>;
type ProfileInfoProps = ComponentProps<typeof ProfileInfo>;
type ProfileImageProps = ComponentProps<typeof ProfileImage>;
type ProfileImageSrc = ProfileImageProps['src'];
type Labels = ProfileInfoProps['labels'];
type NameText = NameProps['name'];

export interface Props {
    name: NameText;
    src: ProfileImageSrc;
    labels: Labels;
}

const StyledImage = styled(ProfileImage)`
  height: '140px';
  width: '140px';
`;

function ProfileCardHead({
  name, labels, src,
}: Props) {
  const componentCSS = css`
    display: flex;
    height: '30%';
    width: '100%';
    justify-content: flex-start;
  `;

  const labelsToBeShown = labels.filter((label) => label !== '').slice(0, 2);
  const imageAlt = `${name} profile`;

  const StyledProfileInfo = styled(ProfileInfo)`
    margin-left: 10%;
  `;

  return (
    <div css={componentCSS}>
      <StyledImage src={src} alt={imageAlt} />
      <StyledProfileInfo name={name} labels={labelsToBeShown} />
    </div>
  );
}

export default ProfileCardHead;
