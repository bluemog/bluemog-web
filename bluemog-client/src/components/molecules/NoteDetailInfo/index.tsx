import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HighlightedText from 'components/molecules/HighlightedText';
import Paragraph from 'components/molecules/Paragraph';
import Rating from 'components/molecules/Rating/';
import { Note } from 'components/molecules/NoteCard';

export interface Book {
  title: string;
  writer: string;
  publishing: string;
  imageUrl: string;
}
export interface Props {
  note: Note;
  book: Book;
  className?: string;
}

const StyledHighlightedText = styled(HighlightedText)`
  font-size: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 20px;
  color: black;
`;

function NoteDetailInfo({ className, note, book }:Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 180px;
    height: 170px;
  `;

  return (
    <div className={className} css={componentCSS}>
      <StyledHighlightedText text={book.title} />
      <div>
        <StyledParagraph>{book.writer}</StyledParagraph>
        <StyledParagraph>{book.publishing}</StyledParagraph>
      </div>
      <Rating rating={note.rating} />
    </div>
  );
}

export default NoteDetailInfo;
