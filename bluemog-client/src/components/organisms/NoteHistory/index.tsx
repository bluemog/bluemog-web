import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Heading from 'components/molecules/Heading';
import NoteCard, { Note } from 'components/molecules/NoteCard/index';

export interface Props {
  noteList: Note[];
}

const StyledHeading = styled(Heading)`
  font-size: 25px;
  color: rgb(255, 255, 255);
`;

const StyledNoteCard = styled(NoteCard)`
  margin-bottom: 14px;
`;

function NoteHistory({ noteList }: Props) {
  const componentCSS = css`
    width: 370px;
  `;

  return (
    <div css={componentCSS}>
      <StyledHeading>지난 생각들</StyledHeading>
      <article>
        {noteList.map((note) => (
          <StyledNoteCard key={note.id} note={note} />
        ))}
      </article>
    </div>
  );
}
export default NoteHistory;
