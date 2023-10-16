export type Reminder = {
  id?: number;
  content: string;
  deadline: string;
};

export type Total_pages = number;

export type Reminders_quantity = {
  reminder_rows: Reminder[];
  total_pages: Total_pages;
};

export type State = {
  reminders_arr: Reminder[];
  detail_reminder: Reminder;
  total_pages: Total_pages,
  for_get: boolean,
  error: string | undefined;
};

export type Id_reminder = Reminder['id']

export type Page_size = {
  current_page: number;
  page_size: number;
};

