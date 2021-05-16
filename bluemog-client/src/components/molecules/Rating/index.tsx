import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import Image from 'components/molecules/Image';
import { Note } from 'components/molecules/NoteCard';
import styled from '@emotion/styled';
import ratingImage from '../../../../public/assets/images/rating.svg';

type ImageProps = ComponentProps<typeof Image>;
type RatingType = Note['rating'];

export interface Props {
  rating: RatingType;
}

const StyledImage = styled(Image)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const starImage: ImageProps = {
  imageUrl: ratingImage,
  alt: 'Rating',
};

function Rating({ rating }: Props) {
  const componentCSS = css`
    display: flex;
    justify-content: flex-start;
    width: 145px;
  `;

  return (
    <div css={componentCSS}>
      {[
        ...Array(rating),
      ].map((value: undefined, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledImage {...starImage} key={index} />))}
    </div>
  );
}

export default Rating;
