import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { add_reminder } from './reminders_slice';

function Form_add_reminder(): JSX.Element {
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState('');

  const dispatch = useAppDispatch();

  function add(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(add_reminder({ content, deadline }));
    setContent('');
    setDeadline('');
  }
  return (
    <form onSubmit={add} className="form">
      <h3 className="form-title">Что вам напомнить?</h3>
      <input
        placeholder="Заголовок"
        type="text"
        maxLength={40}
        name="title"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        required
      />
      <input
        type="datetime-local"
        name="deadline"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
        required
      />
      <input type="submit" className="btn-add" value="Добавить" />
    </form>
  );
}

export default Form_add_reminder;
