import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from '../Image';
import ProfileInfo from '../ProfileInfo';
import Name from '../Name';

type NameProps = ComponentProps<typeof Name>;
type ProfileInfoProps = ComponentProps<typeof ProfileInfo>;
type ImageProps = ComponentProps<typeof Image>;
type ImageSrc = ImageProps['imageUrl'];
type Labels = ProfileInfoProps['experiences'];
type NameText = NameProps['name'];

export interface Props {
  name: NameText;
  imageUrl: ImageSrc;
  experiences: Labels;
  className?: string;
}

const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
`;

const StyledProfileInfo = styled(ProfileInfo)`
  margin-left: 10%;
  height: 100%;
`;

function ProfileCardHead({
  name, experiences, imageUrl, className,
}: Props) {
  const componentCSS = css`
    display: flex;
    height: 130px;
    width: 313px;
    justify-content: flex-start;
  `;

  const experiencesToBeShown = experiences.filter((label) => label !== '').slice(0, 2);
  const imageAlt = `${name} profile`;

  return (
    <div className={className} css={componentCSS}>
      <StyledImage imageUrl={imageUrl} alt={imageAlt} />
      <StyledProfileInfo name={name} experiences={experiencesToBeShown} />
    </div>
  );
}

export default ProfileCardHead;
