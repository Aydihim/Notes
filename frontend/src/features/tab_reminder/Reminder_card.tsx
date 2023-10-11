import React, { ReactNode, useState } from 'react';
// import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';

import { Reminder } from './types/types';
import Popup from './Popup';

function Reminder_card({ reminder }: { reminder: Reminder }): JSX.Element {
  const [popupActive, setPopupActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="line">
      <div
        className="title_note"
        onClick={() => navigate(`/reminder/${reminder.id}`)}
      >
        {reminder.content}
      </div>
      <div>{reminder.deadline}</div>
      <button
        className="button icon-del"
        onClick={() => setPopupActive(true)}
      />
      <Popup
        active={popupActive}
        setActive={setPopupActive}
        idReminder={reminder.id}
      />
    </div>
  );
}

export default Reminder_card;
