import React from 'react';
import Form_add_tag from './Form_add_tag';
import Tags_list from './Tags_list';

function Tags(): JSX.Element {
  return (
    <div className="notes-list-form">
      <Tags_list />
      <Form_add_tag />
      </div>
  );
}

export default Tags;
