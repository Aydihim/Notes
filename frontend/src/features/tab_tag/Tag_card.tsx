import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tag } from './types/types';
import Popup from './Popup';

function Tag_card({ tag }: { tag: Tag }): JSX.Element {
  const [popupActive, setPopupActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="tag_line">
      <div className="title_tag" onClick={() => navigate(`/tag/${tag.id}`)}>
        {tag.title}
      </div>
      <button
        className="button"
        onClick={() => setPopupActive(true)}> x </button>
      <Popup active={popupActive} setActive={setPopupActive} idTag={tag.id} />
    </div>
  );
}

export default Tag_card;
