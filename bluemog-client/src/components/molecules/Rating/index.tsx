import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Note } from 'types/note';
import Star from 'components/molecules/Star';

type RatingType = Note['rating'];

export interface Props {
  rating: RatingType;
}

const StyledStar = styled(Star)`
  width: 25px;
  margin-right: 5px;
`;

function Rating({ rating }: Props) {
  const componentCSS = css`
    display: flex;
    justify-content: flex-start;
    width: 145px;
  `;

  const num = rating > 5 ? 5 : rating;

  return (
    <div css={componentCSS}>
      {[
        ...Array(num),
      ].map((value: undefined, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledStar key={index} />))}
    </div>
  );
}

export default Rating;
