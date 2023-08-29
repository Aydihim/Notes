import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { init_notes } from './notes_slice';
import Note_card from './Note_card';

function Notes_list(): JSX.Element {
  const { notes_arr } = useSelector((store: RootState) => store.note);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(init_notes());
    console.log('useEffect');
    
  }, []);
  return (
    <>
      {notes_arr.map((note) => (
        <>
          <Note_card key={note.id} note={note} />
        </>
      ))}
    </>
  );
}

export default Notes_list;
