import React from 'react';
import { Story } from '@storybook/react';
import Button from '.';

export default {
  component: Button,
  title: 'Components/Molecules/Button',
};

export const Default: Story = () => (
  <Button>작성 완료</Button>
);
