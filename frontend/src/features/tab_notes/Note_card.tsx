import React, { ReactNode, useState } from 'react';
// import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';

import { Note } from './types/types';
import Popup from './Popup';

function Note_card({ note }: { note: Note }): JSX.Element {
  const [popupActive, setPopupActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="line">
      <div onClick={() => navigate(`/note/${note.id}`)}>{note.title}</div>
      <button
        className="button icon-del"
        onClick={() => setPopupActive(true)}
      />
      <Popup active={popupActive} setActive={setPopupActive} idNote={note.id} />
    </div>
  );
}

export default Note_card;
