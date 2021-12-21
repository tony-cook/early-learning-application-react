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
          <Route path='/StudentProfile' element={<StudentProfile />} />
          <Route path='/TeacherProfile' element={<TeacherProfile />} />
          <Route path='/StudentProjectBuilder' element={<StudentProjectBuilder />} />
          <Route path="/student/projects" element={<StudentProjects />} />
          <Route path="/teacher/projects" element={<TeacherProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
