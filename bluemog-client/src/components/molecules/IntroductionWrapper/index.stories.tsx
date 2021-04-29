import React from 'react';
import IntroductionWrapper, { Props } from '.';

export default {
  component: IntroductionWrapper,
  title: 'Components/Molcules/Introduction Wrapper',
};

const Template = (args: Props) => <IntroductionWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  introduction: '저는 개발을 잘합니다. 저는 개발을 잘합니다. 저는 개발을 잘합니다.',
};
