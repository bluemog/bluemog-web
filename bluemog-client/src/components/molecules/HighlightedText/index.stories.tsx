import React from 'react';
import { Story } from '@storybook/react';
import HighlightedText, { Props } from '.';

export default {
  component: HighlightedText,
  title: 'Components/Molcules/HighlightedText',
};

const Template = (args: Props) => <HighlightedText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '파과',
};
