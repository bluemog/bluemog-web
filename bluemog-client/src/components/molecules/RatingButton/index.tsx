import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import StarButton from 'components/molecules/StarButton';

export interface Props {
  onChange: (e: any) => void,
}

const StyledStarButton = styled(StarButton)`
  width: 25px;
  margin-right: 5px;
`;

function RatingButton({ onChange }: Props) {
  const [rating, setRating] = useState(0);

  const className = '';

  const componentCSS = css`
    display: flex;
    justify-content: flex-start;
    width: 145px;
    
  `;

  useEffect(() => {
    console.log(rating);
  });

  return (
    <div onChange={onChange} css={componentCSS}>
      <StyledStarButton className={`s1 ${className}`} onClick={() => { setRating(1); }} />
      <StyledStarButton className={className} onClick={() => { setRating(2); }} />
      <StyledStarButton className={className} onClick={() => { setRating(3); }} />
      <StyledStarButton className={className} onClick={() => { setRating(4); }} />
      <StyledStarButton className={className} onClick={() => { setRating(5); }} />

    </div>
  );
}

export default RatingButton;
