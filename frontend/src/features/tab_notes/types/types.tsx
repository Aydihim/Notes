export type Note = {
  id?: number;
  title: string;
  content: string;
};

export type Total_pages = number;

export type Notes_quantity = {
  note_rows: Note[];
  total_pages: Total_pages;
};

export type State = {
  notes_arr: Note[];
  detail_note: Note;
  total_pages: Total_pages,
  for_get: boolean,
  error: string | undefined;
};

export type Id_note = Note['id']

export type Page_size = {
  current_page: number;
  page_size: number;
};

