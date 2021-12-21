import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import StudentProjects from '../Pages/studentProjects/StudentProjects'
import TeacherProjects from '../Pages/Projects/TeacherProjects'
import StudentProfile from '../Pages/StudentProfile/StudentProfile';
import TeacherProfile from '../Pages/TeacherProfile/TeacherProfile';
import StudentProjectBuilder from '../Pages/StudentProjectBuilder/StudentProjectBuilder'

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
