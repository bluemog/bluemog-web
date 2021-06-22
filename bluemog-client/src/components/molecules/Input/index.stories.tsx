import React from 'react';
import { Story } from '@storybook/react';
import Input, { Props } from '.';

export default {
  component: Input,
  title: 'Components/Molecules/Input',
};

const Template = (args: Props) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '제목',
};
