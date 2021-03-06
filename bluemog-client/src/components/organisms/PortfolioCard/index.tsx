import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import IntroductionWrapper from 'components/molecules/IntroductionWrapper';
import PortfolioCardHead from 'components/molecules/PortfolioCardHead';
import ProfileInfo from 'components/molecules/ProfileInfo';
import Image from 'components/molecules/Image';

type ProfileInfoProps = ComponentProps<typeof ProfileInfo>;
type ImageProps = ComponentProps<typeof Image>;
type IntroductionWrapperProps = ComponentProps<typeof IntroductionWrapper>;
type ImageUrl = ImageProps['imageUrl'];

export interface Portfolio extends ProfileInfoProps, IntroductionWrapperProps{
  id: number;
  imageUrl: ImageUrl;
}

export interface Props {
  portfolio: Portfolio;
  className?: string;
}

const StyledPortfolioCardHead = styled(PortfolioCardHead)`
  width: 100%;
  height: 30%;
`;

const StyledIntroductionWrapper = styled(IntroductionWrapper)`
  width: 100%;
  height: 60%;
`;

function PortfolioCard({ portfolio, className }: Props) {
  const componentCSS = css`
    width: 30vw;
    height: calc(30vw * 1.5);
    min-width: 260px;
    min-height: 400px;
    max-width: 430px;
    border-radius: 12px;
    padding: 4% 2% 2% 2%;
    background-color: skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `;

  return (
    <div className={className} css={componentCSS}>
      <StyledPortfolioCardHead
        imageUrl={portfolio.imageUrl}
        experiences={portfolio.experiences}
        name={portfolio.name}
      />
      <StyledIntroductionWrapper introduction={portfolio.introduction} />
    </div>
  );
}

export default PortfolioCard;
