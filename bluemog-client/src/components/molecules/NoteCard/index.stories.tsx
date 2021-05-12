import React from 'react';
import NoteCard, { Props, Note } from '.';
import imageFile from '../../../../public/assets/images/sample.jpg';

export default {
  component: NoteCard,
  title: 'Components/Molcules/NoteCard',
};

const Template = (args: Props) => <NoteCard {...args} />;

export const Default = Template.bind({});

const sampleNote: Note = {
  title: '공정하다는 착각',
  text: '능력주의는 모두에게 같은 기회를 제공하는가',
  imageUrl: imageFile,
};

Default.args = {
  note: sampleNote,
};
