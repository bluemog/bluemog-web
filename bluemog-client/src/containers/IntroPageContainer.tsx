import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntroTemplate from 'components/templates/IntroTemplate';
import { Portfolio } from 'components/organisms/PortfolioCard';

interface Props {
    fetchUrl: string;
}

function IntroPageContainer({ fetchUrl }: Props) {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>([]);

  const fetchPortfolioList = async () => {
    try {
      const response = await axios.get<Portfolio[]>(fetchUrl);
      const fetchedPortfolioList = response.data;
      setPortfolioList(fetchedPortfolioList);
    } catch (e) {
      alert('데이터를 불러오는 중 에러가 발생했습니다 😥');
    }
  };

  useEffect(() => {
    fetchPortfolioList();
  }, [fetchUrl]);

  return <IntroTemplate portfolioList={portfolioList} text="이런 동료들이 있어요!" />;
}

export default IntroPageContainer;
