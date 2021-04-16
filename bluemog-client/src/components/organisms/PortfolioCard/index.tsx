import React from 'react';
import IntroductionWrapper from '../../molecules/IntroductionWrapper';
import ProfileImage from '../../molecules/ProfileImage';

interface Portfolio {
    name: string;
    profileImageURL: string;
    labels: string[];
    introduction: string;
}

interface Props {
    portfolio: Portfolio;
}

function ProfileCard({ portfolio }: Props) {
  const imageStyle = css`
        width: ${width};
        height: ${height};
        border-radius: 12px;
    `;

  return (
    <div>
      <div>
        <ProfileImage src={portfolio.profileImageURL} />
        
      </div>
      <IntroductionWrapper text={portfolio.introduction} />
    </div>
  );
}

export default ProfileImage;
