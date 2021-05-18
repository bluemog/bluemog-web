import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NoteDetailHead from 'components/molecules/NoteDetailHead';
import Paragraph from 'components/molecules/Paragraph';
import { Note } from 'types/note';
import { Book } from 'types/book';
import NoteDateInfo from '../../molecules/NoteDateInfo/index';

export interface Props {
  note: Note;
  book: Book;
}

const StyledNoteDetailHead = styled(NoteDetailHead)`
  height: 201px;
  width: 310px;
  margin-bottom: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 25px;
  color: black;
  line-height: 1.5;
  -webkit-line-clamp: 6;
`;

const StyledNoteDateInfo = styled(NoteDateInfo)`
  height: 40px;
  width: auto;
`;

function NoteDetail({ note, book }: Props) {
  const componentCSS = css`
    width: 370px;
    height: 610px;
    padding: 24px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
  `;

  const noteContentCSS = css`
    width: 310px;
    height: 267px;
  `;

  return (
    <div css={componentCSS}>
      <StyledNoteDetailHead note={note} book={book} />
      <div css={noteContentCSS}><StyledParagraph>{note.text}</StyledParagraph></div>
      <StyledNoteDateInfo note={note} />
    </div>
  );
}

export default NoteDetail;
