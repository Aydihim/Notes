import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { add_note } from "./notes_slice";

function Form_add_note (): JSX.Element {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useAppDispatch();

    function add(e: React.FormEvent<HTMLFormElement>): void {
      e.preventDefault();
      dispatch(add_note({ title, content }));
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
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <input type="submit" value="Добавить" />
        </div>
      </form>
);
}

export default Form_add_note;