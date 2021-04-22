import React from 'react';
import PortfolioInfo, { Props } from '.';

export default {
  component: PortfolioInfo,
  title: 'Molcules/Portfolio Info',
};

const Template = (args: Props) => <PortfolioInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Juyoung',
  labels: ['정문과', '플랫가든'],
};
