import React, { useEffect } from 'react';

function TabContent({
  title,
  content,
}: {
  title: string;
  content: () => JSX.Element;
}): JSX.Element {
  return (
    <>
      {content()}
    </>
  );
}

export default TabContent;
