import React from 'react';
import { Note } from 'types/note';
import NoteCard, { Props } from '.';
import imageFile from '../../../../public/assets/images/sample-01.jpg';

export default {
  component: NoteCard,
  title: 'Components/Molecules/NoteCard',
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
