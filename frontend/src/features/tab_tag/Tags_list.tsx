import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Pagination from '../pagination/Pagination';
import { init_tags } from './tags_slice';
import Tag_card from './Tag_card';

function Tags_list(): JSX.Element {
  const { tags_arr, total_pages, for_get } = useSelector(
    (store: RootState) => store.tag,
  );
  const [current_page, setCurrent_page] = useState(1);
  const page_size = 30;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(init_tags({ current_page, page_size }));
  }, [current_page, page_size, for_get]);

  return (
    <div className="all_tags">
      {tags_arr?.map((tag) => (
        <Tag_card key={tag.id} tag={tag} />
      ))}
      <Pagination
        currentPage={current_page}
        totalCount={total_pages}
        pageSize={page_size}
        onPageChange={(page: number) => setCurrent_page(page)}
      />
    </div>
  );
}

export default Tags_list;
