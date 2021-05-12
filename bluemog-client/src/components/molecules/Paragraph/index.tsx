import React from 'react';
import styled from '@emotion/styled';
import { mainFont } from 'styles/base';

const Paragraph = styled.p`
  ${mainFont}
  display: inline-block;
  padding: 0;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: rgb(128, 128, 128);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
`;

export default Paragraph;
