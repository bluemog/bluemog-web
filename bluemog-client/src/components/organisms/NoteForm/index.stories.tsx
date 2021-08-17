import React from 'react';
import { Story } from '@storybook/react';
import NoteForm from '.';

export default {
  component: NoteForm,
  title: 'Components/Organisms/NoteForm',
};

export const Default: Story = () => (
  <NoteForm />
);
