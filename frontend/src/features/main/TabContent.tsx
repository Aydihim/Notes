import React, { useEffect } from 'react';
<<<<<<< HEAD
=======
// import { useSelector } from 'react-redux';
// import { RootState, useAppDispatch } from '../../store';
// import { init_notes } from './notes_slice';
// import Note_card from './Note_card';
>>>>>>> dev

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
