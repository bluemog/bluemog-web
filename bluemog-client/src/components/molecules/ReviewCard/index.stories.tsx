import React from 'react';
import ReviewCard, { Props } from '.';
import imageFile from '../../../../public/assets/images/sample.jpg';

export default {
  component: ReviewCard,
  title: 'Components/Molcules/ReviewCard',
};

const Template = (args: Props) => <ReviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '공정하다는 착각',
  text: '능력주의는 모두에게 같은 기회를 제공하는가',
  imageUrl: imageFile,
};
