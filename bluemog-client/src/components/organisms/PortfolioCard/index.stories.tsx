import React from 'react';
import PortfolioCard, { Props, Portfolio } from '.';
import imageFile from '../../../../public/assets/images/gummy.jpg';

export default {
  component: PortfolioCard,
  title: 'Components/Organisms/PortfolioCard',
};

const Template = (args: Props) => <PortfolioCard {...args} />;

export const Default = Template.bind({});

const samplePortfolio: Portfolio = {
  name: 'Juyoung',
  imageUrl: imageFile,
  experiences: ['국어국문학과', '정보문화학'],
  introduction: '따뜻한 얼그레이 한 잔 주세요',
};

Default.args = {
  portfolio: samplePortfolio,
};
