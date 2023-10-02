import React, { useState } from 'react';
import Notes from '../tab_notes/Notes';
import Reminders from '../tab_reminder/Reminders';
import Tags from '../tab_tag/Tags';
import TabContent from './TabContent';

function Main(): JSX.Element {
  const [active, setActive] = useState(0);
  const items = [
    { title: 'Заметки', content: Notes },
    { title: 'Напоминания', content: Reminders },
    { title: 'Теги', content: Tags },
  ];
  const openTab = (e: any) => {
    setActive(e.target.dataset.index);
  }
  return (
    <div className="content">
      <div className="tab">
        {items.map((tab, i) => (
          <button
            key={i}
            // className={i === active ? 'active' : ''}
            onClick={openTab}
            data-index={i}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {items[active] && <TabContent {...items[active]}/>}
    </div>
  );
}

export default Main;
