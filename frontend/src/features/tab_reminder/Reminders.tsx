import React from 'react';
import Form_add_reminder from './Form_add_reminder';
import Reminders_list from './Reminders_list';

function Reminders(): JSX.Element {
  return (
      <div className="notes-list-form">
      <Reminders_list />
      <Form_add_reminder />
      {/* ghjdthrf */}
      </div>
  );
}

export default Reminders;
