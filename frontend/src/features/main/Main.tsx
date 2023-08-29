import React, { useState } from 'react';
import Notes from '../tab_notes/Notes';
import Remindes from '../tab_reminder/Remindes';
import Tags from '../tab_tag/Tags';
import TabContent from './TabContent';

function Main(): JSX.Element {
  const [active, setActive] = useState(0);
  const items = [
    { title: 'Заметки', content: Notes },
    { title: 'Напоминания', content: Remindes },
    { title: 'Теги', content: Tags },
  ];
  const openTab = (e: any) => setActive(e.target.dataset.index);
  return (
    <div>
      <div className="tab">
        {items.map((tab, i) => (
          <button
            key={i}
            className={`tablinks ${i === active ? 'active' : ''}`}
            onClick={openTab}
            data-index={i}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {items[active] && <TabContent {...items[active]}/>}
    </div>
    // <Notes />
  );
}

export default Main;
