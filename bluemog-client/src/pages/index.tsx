import React from 'react';
import PortfolioCardsContainer from 'containers/PortfolioCardsContainer';

function IntroPage() {
  const fetchUrl = 'https://portfolio-mocks.s3.ap-northeast-2.amazonaws.com/portfolio_list.json';

  return <PortfolioCardsContainer fetchUrl={fetchUrl} />;
}

export default IntroPage;
