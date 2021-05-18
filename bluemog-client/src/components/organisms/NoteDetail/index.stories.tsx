import React from 'react';
import NoteDetail, { Props } from '.';
import imageFile from '../../../../public/assets/images/sample-02.png';

export default {
  component: NoteDetail,
  title: 'Components/Organisms/NoteDetail',
};

const Template = (args: Props) => <NoteDetail {...args} />;

const sampleNote = {
  title: '파과',
  text: '하나의 존재에서 가장 큰 비중을 차지하는 영혼이라는 게 빠져나갔는데도 육신이 더 무거워진다는 것은.',
  rating: 4,
  createdAt: '2020. 03. 22.',
  user: '구미',
};

const sampleBook = {
  title: '파과',
  writer: '구병모',
  publishing: '위즈덤하우스',
  imageUrl: imageFile,
};

export const Default = Template.bind({});
Default.args = {
  note: sampleNote,
  book: sampleBook,
};
