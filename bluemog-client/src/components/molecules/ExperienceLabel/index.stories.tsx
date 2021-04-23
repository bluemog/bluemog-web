import React from 'react';
import ExperienceLabel, { Props } from '.';

export default {
  component: ExperienceLabel,
  title: 'Components/Molcules/Experience Label',
};

const Template = (args: Props) => <ExperienceLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '네이버 백엔드',
};
