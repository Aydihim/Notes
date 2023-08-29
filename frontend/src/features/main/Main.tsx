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
<<<<<<< HEAD
  const openTab = (e: any) => {
    setActive(e.target.dataset.index);
  }
  return (
    <div className="content">
=======
  const openTab = (e: any) => setActive(e.target.dataset.index);
  return (
    <div>
>>>>>>> dev
      <div className="tab">
        {items.map((tab, i) => (
          <button
            key={i}
<<<<<<< HEAD
            // className={i === active ? 'active' : ''}
=======
            className={`tablinks ${i === active ? 'active' : ''}`}
>>>>>>> dev
            onClick={openTab}
            data-index={i}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {items[active] && <TabContent {...items[active]}/>}
    </div>
<<<<<<< HEAD
=======
    // <Notes />
>>>>>>> dev
  );
}

export default Main;
