import React from 'react';
import IntroPageContainer from 'containers/IntroPageContainer';

function IntroPage() {
  const fetchUrl = 'https://portfolio-mocks.s3.ap-northeast-2.amazonaws.com/portfolio_list.json';

  return <IntroPageContainer fetchUrl={fetchUrl} />;
}

export default IntroPage;
