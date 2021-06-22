import React from 'react';
import { Story } from '@storybook/react';
import RatingButton from '.';

export default {
  component: RatingButton,
  title: 'components/molecules/RatingButton',
};

export const Default: Story = () => (
  <RatingButton />
);
