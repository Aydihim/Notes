import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { delete_reminder } from './reminders_slice';
import { Id_reminder } from './types/types';

function Popup({
  active,
  setActive,
  idReminder,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  idReminder: Id_reminder;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const delete_reminder_onClick = () => {
    setActive(false);
    dispatch(delete_reminder(Number(idReminder)));
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
        <p>Вы уверены, что хотите удалить напоминание?</p>
        <input
          type="submit"
          className="btn-all"
          onClick={delete_reminder_onClick}
          value="Ok"
        />
      </div>
    </div>
  );
}

export default Popup;
