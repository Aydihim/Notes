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
  const [content, setContent] = useState(detail_note?.content);
  const [visible_text, setVisible_text] = useState(true);
  const [visible_input, setVisible_input] = useState(false);

  useEffect(() => {
    dispatch(one_note(Number(id)));
  }, [id]);

  useEffect(() => {
    setTitle(detail_note?.title);
    setContent(detail_note?.content);
  }, [detail_note]);

  const replace_visible = () => {
    setVisible_input(!visible_input);
    setVisible_text(!visible_text);
  };

  const update_note_onClick = () => {
    replace_visible();
    dispatch(update_note({ id: Number(id), title, content }));
  };

  return (
    <>
      {visible_text && (
        <div className="content params_content">
          <h3 className='title_detail'>{title}</h3>
          <div className='content_detail'>{content}</div>
          <input
            type="submit"
            className="btn-all"
            onClick={replace_visible}
            value="Редактировать"
          />
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
            required
          />
          <textarea
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            required
          />
          <input
            type="submit"
            className="btn-all"
            onClick={update_note_onClick}
            value="Сохранить"
          />
        </div>
      )}
    </>
  );
}

export default Note_params;
