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

const StyledPortfolioTemplateLabel = styled(PortfolioTemplateLabel)`
  margin-left: 20px;
`;

const StyledPortfolioCard = styled(PortfolioCard)`
  margin: 25px 20px;
  width: 20vw;
  height: 30vw;
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
    }
  `;

  return (
    <section className={className} css={componentCSS}>
      <StyledPortfolioTemplateLabel text={text} />
      <article>
        {portfolioList.map((portfolio) => (
          <StyledPortfolioCard portfolio={portfolio} />
        ))}
      </article>
    </section>
  );
}

export default IntroTemplate;
