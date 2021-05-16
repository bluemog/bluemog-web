import React from 'react';
import NoteDateInfo, { Props } from '.';

export default {
  component: NoteDateInfo,
  title: 'Components/Molecules/NoteDateInfo',
};

const Template = (args: Props) => <NoteDateInfo {...args} />;

export const sampleNote = {
  title: '파과',
  text: '하나의 존재에서 가장 큰 비중을 차지하는 영혼이라는 게 빠져나갔는데도 육신이 더 무거워진다는 것은.',
  createdAt: '2020. 03. 22.',
  user: '구미',
};

export const Default = Template.bind({});
Default.args = {
  note: sampleNote,
};
