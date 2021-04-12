import React from 'react';
import Name from './index';

export default {
  component: Name,
  title: 'Name',
};

const Template = (args) => <Name {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'JSKeum',
  font: 'Roboto',
};
