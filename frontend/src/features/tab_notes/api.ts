import { Id_note, Note } from './types/types';

export const init_notes_api = async (): Promise<Note[]> => {
  const res = await fetch('/api/note');
  return res.json();
};

export const one_note_api = async (id: Id_note): Promise<Note> => {
    const res = await fetch(`api/note/${id}`);
    return res.json();
  };

export const add_note_api = async (obj: Note): Promise<Note> => {
  const res = await fetch('/api/note', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const delete_note_api = async (id: Id_note): Promise<number> => {
  const res = await fetch(`api/note/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const upd_note_api = async (obj: Note): Promise<Note> => {
    const res = await fetch(`api/note/${obj.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });
    if (!res.ok) {
      const { message } = await res.json();
      throw message;
    }
    return res.json();
  };