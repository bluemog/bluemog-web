import React from 'react';
import PortfolioInfo, { Props } from '.';

export default {
  component: PortfolioInfo,
  title: 'Components/Molecules/PortfolioInfo',
};

const Template = (args: Props) => <PortfolioInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Juyoung',
  experiences: ['정문과', '플랫가든'],
};
