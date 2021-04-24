import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PortfolioCard, { Portfolio } from '../../organisms/PortfolioCard';
import PortfolioTemplateLabel from '../../molecules/PortfolioTemplateLabel/index';

type PortfolioTemplateLabelProps = ComponentProps<typeof PortfolioTemplateLabel>;
type PortfolioTemplateLabelText = PortfolioTemplateLabelProps['text'];

export interface Props {
  text: PortfolioTemplateLabelText,
  portfolioList: Portfolio[],
  className?: string;
}

const StyledPortfolioCard = styled(PortfolioCard)`
  margin: 25px 15px;
  width: 25%;
  /* height 값은 ?! */
`;

function IntroTemplate({ text, portfolioList, className }: Props) {
  const componentCSS = css`
    width: 83vw;
    margin: 0 8%;

    article {
      display: flex;
      flex-wrap: wrap;
      flex-direction: center;
      justify-content: space-between;
      /* margin-top: 30px; */
    }
  `;

  return (
    <section css={componentCSS}>
      <PortfolioTemplateLabel text={text} />
      <article>
        {portfolioList.map((portfolio) => (
          <StyledPortfolioCard className={className} portfolio={portfolio} />
        ))}
      </article>
    </section>
  );
}

export default IntroTemplate;
