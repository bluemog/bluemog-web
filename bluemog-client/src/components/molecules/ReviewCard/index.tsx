import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImage from 'components/molecules/ProfileImage';
import Heading from 'components/molecules/Heading';
import Paragraph from 'components/molecules/Paragraph';

// type ProfileImageProps = ComponentProps<typeof ProfileImage>;
// type ProfileImageSrc = ProfileImageProps['imageUrl'];

export interface Props {
  title: string,
  text: string,
  imageUrl: string,

}

const StyledDiv = styled.div`
  width: 370px;
  height: 117px;
  padding: 10px 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
`;

const StyledImage = styled(ProfileImage)`
  height: 100%;
  width: auto;
  border-radius: 10px;
`;

function ReviewCard({ title, text, imageUrl }: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 313px;
    justify-content: center;
    margin-left: 13px;
  `;

  const imageAlt = `${title}`;

  return (
    <StyledDiv>
      <StyledImage imageUrl={imageUrl} alt={imageAlt} />
      <div css={componentCSS}>
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
      </div>
    </StyledDiv>
  );
}

export default ReviewCard;
