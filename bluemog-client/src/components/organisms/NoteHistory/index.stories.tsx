import React from 'react';
import noteList from 'mocks/notes.json';
import NoteHistory, { Props } from '.';

export default {
  component: NoteHistory,
  title: 'Components/Organisms/NoteHistory',
};

const Template = (args: Props) => <NoteHistory {...args} />;

export const Default = Template.bind({});
Default.args = {
  noteList,
};
