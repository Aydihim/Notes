import {
  Id_reminder,
  Reminder,
  Reminders_quantity,
  Page_size,
} from './types/types';

export const init_reminders_api = async (
  obj: Page_size,
): Promise<Reminders_quantity> => {
  const res = await fetch(`/api/reminder/page/${obj.current_page}/limit/${obj.page_size}`);
  return res.json();
};

export const one_reminder_api = async (id: Id_reminder): Promise<Reminder> => {
  const res = await fetch(`/api/reminder/${id}`);
  return res.json();
};

export const add_reminder_api = async (obj: Reminder): Promise<Reminder> => {
  const res = await fetch('/api/reminder', {
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

export const delete_reminder_api = async (id: Id_reminder): Promise<number> => {
  const res = await fetch(`/api/reminder/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const upd_reminder_api = async (obj: Reminder): Promise<Reminder> => {
  const res = await fetch(`/api/reminder/${obj.id}`, {
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
