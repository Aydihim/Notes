import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../../store';
// import { init_notes } from './notes_slice';
// import Note_card from './Note_card';

function TabContent({
  title,
  content,
}: {
  title: string;
  content: () => JSX.Element;
}): JSX.Element {
  return (
    <>
      {content()}
    </>
  );
}

export default TabContent;
