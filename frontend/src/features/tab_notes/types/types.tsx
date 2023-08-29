export type Note = {
  id?: number;
  title: string;
  content: string;
};
export type State = {
  notes_arr: Note[];
  detail_note: Note;
  error: string | undefined;
};

export type Id_note = Note['id'];
