import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { delete_note } from './notes_slice';
import { Note } from './types/types';

function Note_card({ note }: { note: Note }): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const delete_note_onClick = () => {
    dispatch(delete_note(Number(note.id)));
  };
  return (
    <>
      <div onClick={() => navigate(`/note/${note.id}`)}>{note.title}</div>
      <button type="button" onClick={() => delete_note_onClick} />
    </>
  );
}

export default Note_card;
