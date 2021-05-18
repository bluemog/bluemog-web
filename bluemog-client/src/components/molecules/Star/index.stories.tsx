import React from 'react';
import { Story } from '@storybook/react';
import Star from '.';

export default {
  component: Star,
  title: 'Components/Molecules/Star',
};

export const Default: Story = () => (
  <Star />
);
