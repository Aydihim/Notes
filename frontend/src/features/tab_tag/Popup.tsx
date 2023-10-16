import React from 'react';
import { useAppDispatch } from '../../store';
import { delete_tag } from './tags_slice';
import { Id_tag } from './types/types';

function Popup({
  active,
  setActive,
  idTag,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  idTag: Id_tag;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const delete_tag_onClick = () => {
    setActive(false);
    dispatch(delete_tag(Number(idTag)));
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
        <p>Вы уверены, что хотите удалить тег?</p>
        <input
          type="submit"
          className="btn-all"
          onClick={delete_tag_onClick}
          value="Ok"
        />
      </div>
    </div>
  );
}

export default Popup;
