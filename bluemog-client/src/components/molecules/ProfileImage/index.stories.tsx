import React from 'react';
import ProfileImage, { Props } from '.';
import imageFile from '../../../../public/assets/images/gummy.jpg';

export default {
  component: ProfileImage,
  title: 'Profile Image',
};

const Template = (args: Props) => <ProfileImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: imageFile,
  width: '130px',
  height: '130px',
};
