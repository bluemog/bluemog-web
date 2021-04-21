import React from 'react';
import { css } from '@emotion/react';
import IntroductionWrapper from 'components/molecules/IntroductionWrapper';
import PortfolioCardHead from 'components/molecules/PortfolioCardHead';

export interface Portfolio {
    name: string;
    profileImageURL: string;
    labels: string[];
    introduction: string;
}

export interface Props {
    portfolio: Portfolio;
    width?: string;
    height?: string;
}

function ProfileCard({ portfolio, width = '30vw', height = '45.4vw' }: Props) {
  const componentCSS = css`
        width: ${width};
        height: ${height};
        border-radius: 12px;
        padding: 30px;
        background-color: skyblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        `;

  return (
    <div css={componentCSS}>
      <PortfolioCardHead
        profileImageURL={portfolio.profileImageURL}
        labels={portfolio.labels}
        name={portfolio.name}
      />
      <IntroductionWrapper text={portfolio.introduction} />
    </div>
  );
}

export default ProfileCard;
