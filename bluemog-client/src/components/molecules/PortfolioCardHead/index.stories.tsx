import React from 'react';
import PortfolioCardHead, { Props } from '.';
import imageFile from '../../../../public/assets/images/gummy.jpg';

export default {
  component: PortfolioCardHead,
  title: 'Portfolio Card Head',
};

const Template = (args: Props) => <PortfolioCardHead {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Juyoung',
  labels: ['정문과', '플랫가든'],
  height: '140px',
  width: '313px',
  profileImageURL: imageFile,
};
