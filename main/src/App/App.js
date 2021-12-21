import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import StudentProjects from '../pages/studentProjects/StudentProjects'
import TeacherProjects from '../pages/Projects/TeacherProjects'
import StudentProfile from '../pages/StudentProfile/StudentProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentProfile />} />
          <Route path="/student/projects" element={<StudentProjects />} />
          <Route path="/teacher/projects" element={<TeacherProjects />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
