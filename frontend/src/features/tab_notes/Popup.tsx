import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { delete_note, init_notes } from './notes_slice';
import { Id_note } from './types/types';

function Popup({
  active,
  setActive,
  idNote,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  idNote: Id_note;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const delete_note_onClick = () => {
    setActive(false);
    dispatch(delete_note(Number(idNote)));
    // dispatch(init_notes(Number(idNote)));
  };
  const closePopup = () => {
    setActive(false);
    close();
  };
  return (
    <div
      className={active ? 'popup active' : 'popup'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'popup-content active' : 'popup-content'}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={closePopup}>
          x
        </button>
        <p>Вы уверены, что хотите удалить заметку?</p>
        <input
          type="submit"
          className="btn-all"
          onClick={delete_note_onClick}
          value="Ok"
        />
      </div>
    </div>
  );
}

export default Popup;
