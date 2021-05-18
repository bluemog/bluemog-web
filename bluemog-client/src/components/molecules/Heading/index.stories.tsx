import React from 'react';
import { Story } from '@storybook/react';
import Heading from '.';

export default {
  component: Heading,
  title: 'Components/Molecules/Heading',
};

export const Default: Story = () => (
  <Heading>
    담을 넘은 아이
  </Heading>
);
