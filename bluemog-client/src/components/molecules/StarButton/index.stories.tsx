import React from 'react';
import { Story } from '@storybook/react';
import StarButton from '.';

export default {
  component: StarButton,
  title: 'components/molecules/StarButton',
};

export const Default: Story = () => (
  <StarButton />
);
