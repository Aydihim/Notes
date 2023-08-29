import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../features/main/Main';
import Note_params from '../features/tab_notes/Note_params';

function App() {
  return (
 <Routes>
  <Route path='/' element={<Main />}/>
  <Route path='/note/:id' element={<Note_params/>} />
 </Routes>
  );
}

export default App;
