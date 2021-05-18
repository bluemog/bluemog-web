import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'components/molecules/Image';
import Heading from 'components/molecules/Heading';
import Paragraph from 'components/molecules/Paragraph';
import { Note } from 'types/note';

export interface Props {
  note: Note;
  className?: string;
}

const StyledDiv = styled.div`
  width: 370px;
  height: 117px;
  padding: 10px 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
  border-radius: 10px;
`;

function NoteCard({ note, className }: Props) {
  const componentCSS = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 313px;
    justify-content: center;
    margin-left: 13px;
  `;

  const imageAlt = `${note.title}`;

  return (
    <StyledDiv className={className}>
      <StyledImage imageUrl={note.imageUrl} alt={imageAlt} />
      <div css={componentCSS}>
        <Heading>{note.title}</Heading>
        <Paragraph>{note.text}</Paragraph>
      </div>
    </StyledDiv>
  );
}

export default NoteCard;
