import React from 'react';
import Name, { Props } from '.';

export default {
  component: Name,
  title: 'Name',
};

const Template = (args: Props) => <Name {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'JSKeum',
  font: 'Roboto',
};
