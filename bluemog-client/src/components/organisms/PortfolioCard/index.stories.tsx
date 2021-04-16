import React from 'react';
import PortfolioCard, { Props, Portfolio } from '.';
import imageFile from '../../../../public/assets/images/gummy.jpg';

export default {
  component: PortfolioCard,
  title: 'Organisms/PortfolioCard',
};

const Template = (args: Props) => <PortfolioCard {...args} />;

export const Default = Template.bind({});

const samplePortfolio: Portfolio = {
  name: 'Juyoung',
  profileImageURL: imageFile,
  labels: ['국문과', '정문과'],
  introduction: '배고프다',
};

Default.args = {
  portfolio: samplePortfolio,
};
