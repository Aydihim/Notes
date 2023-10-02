import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Pagination from '../pagination/Pagination';
import { init_reminders } from './reminders_slice';
import Reminder_card from './Reminder_card';

function Reminders_list(): JSX.Element {
  const { reminders_arr, total_pages, for_get } = useSelector((store: RootState) => store.reminder);
  const [current_page, setCurrent_page] = useState(1);
  const page_size = 6;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(init_reminders({current_page, page_size}));
  }, [current_page, page_size, for_get]);

  return (
    <div className='one-note-card'>
      {reminders_arr?.map((reminder) => (
          <Reminder_card key={reminder.id} reminder={reminder} />
      ))} 
      <Pagination currentPage={current_page}
            totalCount={total_pages}
            pageSize={page_size}
            onPageChange={(page: number) => setCurrent_page(page)}
            />
    </div>
  );
}

export default Reminders_list;
