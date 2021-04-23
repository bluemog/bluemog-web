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
  src: imageFile,
  labels: ['국어국문학과', '정보문화학'],
  text: '따뜻한 얼그레이 한 잔 주세요',
};

Default.args = {
  portfolio: samplePortfolio,
};
