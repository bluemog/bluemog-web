import React from 'react';
import NoteHistoryContainer from 'containers/NoteHistoryContainer';

function IntroPage() {
  const fetchUrl = 'https://portfolio-mocks.s3.ap-northeast-2.amazonaws.com/notes.json';

  return <NoteHistoryContainer fetchUrl={fetchUrl} />;
}

export default IntroPage;
