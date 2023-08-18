import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { one_note, update_note } from './notes_slice';

function Note_params(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { detail_note } = useSelector((store: RootState) => store.note);
  const [title, setTitle] = useState(detail_note?.title);
  const [description, setDescription] = useState(detail_note?.description);
  const [visible_text, setVisible_text] = useState(true);
  const [visible_input, setVisible_input] = useState(false);

  useEffect(() => {
    dispatch(one_note(Number(id)));
  }, [id]);

  const replace_visible = () => {
    setVisible_input(!visible_input);
    setVisible_text(!visible_text);
  };

  const update_note_onClick = () => {
    replace_visible();
    dispatch(update_note({ id: Number(id), title, description }));
  };

  return (
    <>
      {visible_text && (
        <div>
          <div>{detail_note?.title}</div>
          <div>{detail_note?.description}</div>
          <button type="button" onClick={replace_visible}>
            Редактировать
          </button>
        </div>
      )}
      {visible_input && (
        <div>
          <input
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          ></input>
          <input
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></input>
          <button type="button" onClick={update_note_onClick}>
            Сохранить
          </button>
        </div>
      )}
    </>
  );
}

export default Note_params;
