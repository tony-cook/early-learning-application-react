import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import TeacherProjects from '../pages/Projects/TeacherProjects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/teacher/:id/projects" element={<TeacherProjects />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
