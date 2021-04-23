import React, { ComponentProps } from 'react';
import { css } from '@emotion/react';
import PortfolioCard, { Portfolio } from '../../organisms/PortfolioCard';
import PortfolioTemplateLabel from '../../molecules/PortfolioTemplateLabel/index';

type PortfolioTemplateLabelProps = ComponentProps<typeof PortfolioTemplateLabel>;
type PortfolioTemplateLabelText = PortfolioTemplateLabelProps['text'];

export interface Props {
  text: PortfolioTemplateLabelText,
  portfolioList: Portfolio[],
}

function IntroTemplate({ text, portfolioList }: Props) {
  const componentCSS = css`
   article {
    display: flex;
    flex-direction: center;
    justify-content: space-between;

   }
  `;

  return (
    <section css={componentCSS}>
      <PortfolioTemplateLabel text={text} />
      <article>
        {portfolioList.map((portfolio) => (
          <PortfolioCard portfolio={portfolio} />
        ))}
      </article>
    </section>
  );
}

export default IntroTemplate;
