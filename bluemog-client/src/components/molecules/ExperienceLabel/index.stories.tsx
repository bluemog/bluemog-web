import React from 'react';
import ExperienceLabel, { Props } from '.';

export default {
  component: ExperienceLabel,
  title: 'Experience Label',
};

const Template = (args: Props) => <ExperienceLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColorInHex: 'C7E9FF',
  children: '네이버 백엔드',
};
