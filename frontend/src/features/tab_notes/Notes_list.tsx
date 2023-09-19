import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Pagination from '../pagination/Pagination';
import { init_notes } from './notes_slice';
import Note_card from './Note_card';

function Notes_list(): JSX.Element {
  const { notes_arr, total_pages, for_get } = useSelector((store: RootState) => store.note);
  const [current_page, setCurrent_page] = useState(1);
  const page_size = 6;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(init_notes({current_page, page_size}));
  }, [current_page, page_size, for_get]);

  return (
    <div className='one-note-card'>
      {notes_arr?.map((note) => (
          <Note_card key={note.id} note={note} />
      ))} 
      <Pagination currentPage={current_page}
            totalCount={total_pages}
            pageSize={page_size}
            onPageChange={(page: number) => setCurrent_page(page)}
            />
    </div>
  );
}

export default Notes_list;
