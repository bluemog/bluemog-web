import React from 'react';
import { Story } from '@storybook/react';
import Paragraph from '.';

export default {
  component: Paragraph,
  title: 'Components/Molcules/Paragraph',
};

export const Default: Story = () => (
  <Paragraph>
    담을 넘어서 어쩌구 저쩌구 담을 넘어서 어쩌구 저쩌구 담을 넘어서 어쩌구 ...
  </Paragraph>
);
