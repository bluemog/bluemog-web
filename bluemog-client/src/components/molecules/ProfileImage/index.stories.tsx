import React from 'react';
import ProfileImage from './index';
import imageFile from '../../../assets/images/gummy.jpg';

export default {
  component: ProfileImage,
  title: 'Profile Image',
};

const Template = (args) => <ProfileImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: imageFile,
  width: '130px',
  height: '130px',
};
