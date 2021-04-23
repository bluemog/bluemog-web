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
    className?: string;
}

const StyledImage = styled(ProfileImage)`
  height: 100%;
  width: auto;
`;

const StyledProfileInfo = styled(ProfileInfo)`
  margin-left: 10%;
  height: 100%;
`;

function ProfileCardHead({
  name, labels, src, className,
}: Props) {
  const componentCSS = css`
    display: flex;
    height: 130px;
    width: 313px;
    justify-content: flex-start;
  `;

  const labelsToBeShown = labels.filter((label) => label !== '').slice(0, 2);
  const imageAlt = `${name} profile`;

  return (
    <div className={className} css={componentCSS}>
      <StyledImage src={src} alt={imageAlt} />
      <StyledProfileInfo name={name} labels={labelsToBeShown} />
    </div>
  );
}

export default ProfileCardHead;
