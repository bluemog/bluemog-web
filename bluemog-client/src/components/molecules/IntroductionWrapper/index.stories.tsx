import React from 'react';
import IntroductionWrapper from './index';

export default {
  component: IntroductionWrapper,
  title: 'Introduction Wrapper',
};

const Template = (args) => <IntroductionWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '저는 개발을 잘합니다. 저는 개발을 잘합니다. 저는 개발을 잘합니다.',
};
