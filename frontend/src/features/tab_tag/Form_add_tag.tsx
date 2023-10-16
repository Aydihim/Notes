import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { add_tag } from './tags_slice';

function Form_add_tag(): JSX.Element {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();

  function add(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(add_tag({ title }));
    setTitle('');
  }
  return (
    <form onSubmit={add} className="form">
      <div className="position">
      <h3 className="form-title">Придумайте тег</h3>
      <input
        placeholder="#"
        type="text"
        maxLength={40}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <input type="submit" className="btn-add" value="Добавить" />
      </div>
    </form>
  );
}

export default Form_add_tag;
