import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Note } from 'component/molecules/NoteCard';
import Paragraph from 'components/molecules/Paragraph';

export interface Props {
  note: Note;
  className?: string;
}

const StyledDateInfo = styled(Paragraph)`
  font-size: 16px;
  color: black;
`;

const StyledUserInfo = styled(Paragraph)`
  font-size: 18px;
  color: black;
`;

function NoteDateInfo({ note, className }: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <div className={className} css={componentCSS}>
      <StyledDateInfo>{note.createdAt}</StyledDateInfo>
      <StyledUserInfo>{note.user}</StyledUserInfo>
    </div>
  );
}

export default NoteDateInfo;
