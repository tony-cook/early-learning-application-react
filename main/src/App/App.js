import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Projects from '../pages/Projects/Projects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/teacher/:id/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
