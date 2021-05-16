import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'components/molecules/Image';
import { Note } from 'components/molecules/NoteCard';
import NoteDetailInfo, { Book } from 'components/molecules/NoteDetailInfo';

export interface Props {
  className?: string;
  note: Note;
  book: Book;
}

const StyledImage = styled(Image)`
  height: 200px;
  width: auto;
  border-radius: 10px;
  margin-right: 25px;
`;

function NoteDetailHead({ className, note, book }: Props) {
  const componentCSS = css`
    display: flex;
    width: 310px;
  `;

  return (
    <div className={className} css={componentCSS}>
      <StyledImage imageUrl={book.imageUrl} alt="Book Cover" />
      <NoteDetailInfo note={note} book={book} />
    </div>
  );
}

export default NoteDetailHead;
