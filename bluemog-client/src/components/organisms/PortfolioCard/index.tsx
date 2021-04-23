import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import IntroductionWrapper from 'components/molecules/IntroductionWrapper';
import PortfolioCardHead from 'components/molecules/PortfolioCardHead';
import ProfileInfo from 'components/molecules/ProfileInfo';
import styled from '@emotion/styled';
import ProfileImage from '../../molecules/ProfileImage/index';

type ProfileInfoProps = ComponentProps<typeof ProfileInfo>;
type ProfileImageProps = ComponentProps<typeof ProfileImage>;
type IntroductionWrapperProps = ComponentProps<typeof IntroductionWrapper>;

export type Portfolio = Pick<ProfileImageProps, 'imageUrl'> & ProfileInfoProps & IntroductionWrapperProps;

export interface Props {
    portfolio: Portfolio;
}

const StyledPortfolioCardHead = styled(PortfolioCardHead)`
  width: 100%;
  height: 30%;
`;

const StyledIntroductionWrapper = styled(IntroductionWrapper)`
  width: 100%;
  height: 60%;
`;

function ProfileCard({ portfolio }: Props) {
  const componentCSS = css`
        width: 30vw;
        height: 45.4vw;
        min-width: 260px;
        min-height: 400px;
        border-radius: 12px;
        padding: calc(50vw * 0.08) calc(30vw * 0.08) calc(32vw * 0.08) calc(30vw * 0.08);
        background-color: skyblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        `;

  return (
    <div css={componentCSS}>
      <StyledPortfolioCardHead
        imageUrl={portfolio.imageUrl}
        labels={portfolio.labels}
        name={portfolio.name}
      />
      <StyledIntroductionWrapper text={portfolio.text} />
    </div>
  );
}

export default ProfileCard;
