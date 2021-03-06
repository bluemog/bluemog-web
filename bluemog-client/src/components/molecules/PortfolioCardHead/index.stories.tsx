import React from 'react';
import PortfolioCardHead, { Props } from '.';
import imageFile from '../../../../public/assets/images/gummy.jpg';

export default {
  component: PortfolioCardHead,
  title: 'Components/Molecules/PortfolioCardHead',
};

const Template = (args: Props) => <PortfolioCardHead {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Juyoung',
  experiences: ['정문과', '플랫가든'],
  imageUrl: imageFile,
};
