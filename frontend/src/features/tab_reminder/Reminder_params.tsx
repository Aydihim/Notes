import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { one_reminder, update_reminder } from './reminders_slice';

function Reminder_params(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { detail_reminder } = useSelector((store: RootState) => store.reminder);
  const [content, setContent] = useState(detail_reminder?.content);
  const [deadline, setDeadline] = useState(detail_reminder?.deadline);
  console.log(deadline, 'state');

  const [visible_text, setVisible_text] = useState(true);
  const [visible_input, setVisible_input] = useState(false);

  useEffect(() => {
    dispatch(one_reminder(Number(id)));
  }, [id]);

  useEffect(() => {
    setDeadline(detail_reminder?.deadline);
    setContent(detail_reminder?.content);
  }, [detail_reminder]);

  const replace_visible = () => {
    setVisible_input(!visible_input);
    setVisible_text(!visible_text);
  };

  const update_reminder_onClick = () => {
    replace_visible();
    console.log(deadline, 'store');
    dispatch(update_reminder({ id: Number(id), content, deadline }));
  };

  return (
    <>
      {visible_text && (
        <div className="content params_content">
          <h3 className="title_detail">{content}</h3>
          <div className="content_detail">{deadline}</div>
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
              setContent(e.target.value);
            }}
            value={content}
            required
          />
          <input
            type="datetime-local"
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
            value={deadline}
            required
          />
          <input
            type="submit"
            className="btn-all"
            onClick={update_reminder_onClick}
            value="Сохранить"
          />
        </div>
      )}
    </>
  );
}

export default Reminder_params;
