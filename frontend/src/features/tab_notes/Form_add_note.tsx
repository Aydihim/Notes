import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { add_note } from "./notes_slice";

function Form_add_note (): JSX.Element {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useAppDispatch();

    function add(e: React.FormEvent<HTMLFormElement>): void {
      e.preventDefault();
      dispatch(add_note({ title, description }));
    }
return (
<form onSubmit={add} className="decor">
        <div className="form-left-decoration" />
        <div className="form-right-decoration" />
        <div className="circle" />
        <div className="form-inner">
          <h3 className="form-title">Добавьте заметку</h3>
          <input
            placeholder="Заголовок"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Текст заметки"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <input type="submit" value="Добавить" />
        </div>
      </form>
);
}

export default Form_add_note;