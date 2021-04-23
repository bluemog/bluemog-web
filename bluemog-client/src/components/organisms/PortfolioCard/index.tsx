import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import IntroductionWrapper from 'components/molecules/IntroductionWrapper';
import PortfolioCardHead from 'components/molecules/PortfolioCardHead';
import ProfileInfo from 'components/molecules/ProfileInfo';
import ProfileImage from '../../molecules/ProfileImage/index';

type ProfileInfoProps = ComponentProps<typeof ProfileInfo>;
type ProfileImageProps = ComponentProps<typeof ProfileImage>;
type IntroductionWrapperProps = ComponentProps<typeof IntroductionWrapper>;

export type Portfolio = Pick<ProfileImageProps, 'src'> & ProfileInfoProps & IntroductionWrapperProps;

export interface Props {
    portfolio: Portfolio;
}

function ProfileCard({ portfolio }: Props) {
  const componentCSS = css`
        width: 30vw;
        height: 45.4vw;
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
        src={portfolio.src}
        labels={portfolio.labels}
        name={portfolio.name}
      />
      <IntroductionWrapper text={portfolio.text} />
    </div>
  );
}

export default ProfileCard;
