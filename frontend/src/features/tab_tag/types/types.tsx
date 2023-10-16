export type Tag = {
  id?: number;
  title: string;
};

export type Total_pages = number;

export type Tags_quantity = {
  tag_rows: Tag[];
  total_pages: Total_pages;
};

export type State = {
  tags_arr: Tag[];
  total_pages: Total_pages,
  for_get: boolean,
  error: string | undefined;
};

export type Id_tag = Tag['id']

export type Page_size = {
  current_page: number;
  page_size: number;
};

