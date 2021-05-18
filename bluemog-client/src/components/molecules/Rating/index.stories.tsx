import React from 'react';
import Rating, { Props } from '.';

export default {
  component: Rating,
  title: 'Components/Molecules/Rating',
};

const Template = (args: Props) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 3,
};
