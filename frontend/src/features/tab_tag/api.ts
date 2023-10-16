import {
  Page_size,
  Tag,
  Id_tag,
  Tags_quantity,
} from './types/types';

export const init_tags_api = async (
  obj: Page_size,
): Promise<Tags_quantity> => {
  const res = await fetch(`/api/tag/page/${obj.current_page}/limit/${obj.page_size}`);
  return res.json();
};

export const add_tag_api = async (obj: Tag): Promise<Tag> => {
  const res = await fetch('/api/tag', {
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

export const delete_tag_api = async (id: Id_tag): Promise<number> => {
  const res = await fetch(`/api/tag/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
