import React from 'react';
import Image, { Props } from '.';
import imageFile from '../../../../public/assets/images/gummy.jpg';

export default {
  component: Image,
  title: 'Components/Molecules/Image',
};

const Template = (args: Props) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: imageFile,
  alt: 'profile',
};
