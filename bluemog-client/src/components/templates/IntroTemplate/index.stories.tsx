import React from 'react';
import portfolioList from 'mocks/portfolio.json';
import IntroTemplate, { Props } from '.';

export default {
  component: IntroTemplate,
  title: 'Components/Templates/IntroTemplate',
};

const Template = (args: Props) => <IntroTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '이런 동료들이 있어요',
  portfolioList,
};
