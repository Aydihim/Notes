import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { add_reminder } from './reminders_slice';
// import { add_note } from './notes_slice';

function Form_add_reminder(): JSX.Element {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useAppDispatch();

  function add(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(add_reminder({ title, content }));
    setTitle('');
    setContent('');
  }
  return (
    <form onSubmit={add} className="form">
      <h3 className="form-title">Добавьте напоминание</h3>
      <input
        placeholder="Заголовок"
        type="text"
        maxLength={40}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <textarea
        placeholder="Текст заметки"
        name="content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        required
      />
      <input type="submit" className="btn-add" value="Добавить" />
    </form>
  );
}

export default Form_add_reminder;
