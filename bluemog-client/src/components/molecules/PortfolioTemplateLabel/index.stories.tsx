import React from 'react';
import PortfolioTemplateLabel, { Props } from '.';

export default {
  component: PortfolioTemplateLabel,
  title: 'Components/Molecules/PortfolioTemplateLabel',
};

const Template = (args: Props) => <PortfolioTemplateLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '이런 동료들이 있어요',
};
