import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import StudentProjects from '../pages/StudentProjects/StudentProjects'
import TeacherProjects from '../pages/Projects/TeacherProjects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/student/projects" element={<StudentProjects />} />
        <Route path="/teacher/projects" element={<TeacherProjects />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
