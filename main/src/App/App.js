import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import StudentProjects from '../pages/Projects/StudentProjects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/student/projects" element={<StudentProjects />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
