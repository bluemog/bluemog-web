import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteHistory from 'components/organisms/NoteHistory';
import { Note } from 'components/molecules/NoteCard';

interface Props {
  fetchUrl: string;
}

function NoteHistoryContainer({ fetchUrl }: Props) {
  const [noteList, setNoteList] = useState<Note[]>([]);

  const fetchNoteList = async () => {
    try {
      const response = await axios.get<Note[]>(fetchUrl);
      const fetchedNoteList = response.data;
      setNoteList(fetchedNoteList);
    } catch (e) {
      alert('데이터를 불러오는 중 에러가 발생했습니다 😥');
    }
  };

  useEffect(() => {
    fetchNoteList();
  }, [fetchUrl]);

  return <NoteHistory noteList={noteList} />;
}

export default NoteHistoryContainer;
