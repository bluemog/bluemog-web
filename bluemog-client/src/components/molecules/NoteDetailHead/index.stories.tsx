import React from 'react';
import { Note } from 'components/molecules/NoteCard';
import { Book } from 'components/molecules/NoteDetailInfo';
import NoteDetailHead, { Props } from '.';
import imageFile from '../../../../public/assets/images/sample-02.png';

export default {
  component: NoteDetailHead,
  title: 'Components/Molecules/NoteDetailHead',
};

const Template = (args: Props) => <NoteDetailHead {...args} />;

export const Default = Template.bind({});

const sampleNote: Note = {
  id: 1,
  title: '파과',
  text: '하나의 존재에서 가장 큰 비중을 차지하는 영혼이라는 게 빠져나갔는데도 육신이 더 무거워진다는 것은.',
  imageUrl: imageFile,
  rating: 4,
};

const sampleBook: Book = {
  title: '파과',
  writer: '구병모',
  publishing: '위즈덤하우스',
  imageUrl: imageFile,
};

Default.args = {
  note: sampleNote,
  book: sampleBook,
};
