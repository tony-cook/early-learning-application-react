import React from 'react'
import {useState} from 'react'
import './Projects.css';
import NavBar from '../../shared/NavBar/NavBar'
import Footer from '../../shared/Footer/Footer'
import Checkboxes from './Checkboxes'
import ContentHeading from './ContentHeading';
import ButtonGroups from './ButtonGroups'

function Projects() {

    const [state,setState] = useState ({
        free: true,
        premium:true,
        animation: true,
        game:true,
        chatbot: true,
        augmentedReality: true,
        yearLevel1: true,
        yearLevel2: true,
        yearLevel3: true,
        yearLevel4: true,
        subjectCsc: true,
        subjectMat: true,
        subjectSci: true,
        subjectLan: true,
        subjectArt: true,
        subjectMus: true,
    })

    const [courseLevel, setCourseLevel] = useState("beginner");
    const [showResults, setShowResults] = useState("1")


    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      const handleCourseLevel = (e, newCourse) => {
        if (newCourse !== null) {
            setCourseLevel(newCourse);
          }
    };

    const handleShowResults = (e, newResults) => {
        if (newResults !== null) {
            setShowResults(newResults);
          }
    };
    console.log(courseLevel);
    console.log(showResults);
    return (
        <div>
            <NavBar />
            <div className="content-container">
                <div className="content-left-container">
                    <Checkboxes state={state} handleChange={handleChange} />
                </div>
                <div className="content-right-container">
                    <ContentHeading />
                    <ButtonGroups courseLevel={courseLevel} showResults={showResults} handleCourseLevel={handleCourseLevel} handleShowResults={handleShowResults} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
