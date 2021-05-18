import React from 'react';
import NoteDetailInfo, { Props } from '.';
import imageFile from '../../../../public/assets/images/sample-02.png';

export default {
  component: NoteDetailInfo,
  title: 'Components/Molecules/NoteDetailInfo',
};

const bookSample = {
  title: '파과',
  writer: '구병모',
  publishing: '위즈덤하우스',
  imageUrl: imageFile,
};

const Template = (args: Props) => <NoteDetailInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  book: bookSample,
  note: { rating: 4 },
};
