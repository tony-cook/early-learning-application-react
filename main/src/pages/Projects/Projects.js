import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'

import './Projects.css';
import NavBar from '../../shared/NavBar/NavBar'
import Footer from '../../shared/Footer/Footer'
import Checkboxes from './components/Checkboxes'
import ContentHeading from './components/ContentHeading';
import ButtonGroups from './components/ButtonGroups'
import NavButtons from './components/NavButtons'
import ProjectsList from './components/ProjectsList'

function Projects() {

// Variable found in the dynamic route to query the user information from the backend

    const {id} = useParams()

// Variables with useState hooks to store user name, user profile and 
// project list for current list of projects shown in the project library

    const [profileName,setProfileName] = useState ("")
    const [profileImage,setProfileImage] = useState("")
    const [projectsData,setProjectsData] = useState([])

// Variable (object) with useState hooks to store the state of the checkboxes checked/unchecked by the user.

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

// Variables with useState hooks to store the users selected course level (beginner, intermediate or advanced) 
// and the number of projects selected to be shown in the project library

    const [courseLevel, setCourseLevel] = useState("beginner");
    const [showResults, setShowResults] = useState("1")

// Event handlers to update state variables using the useState hooks when the user 
// interacts with a checkbox or button in the DOM

    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        })
       
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

//Axios API to fetch profile information and project list from the backend server with the user id, and project variables
//updated from the state. useEffect hook will allow this to run each time there is an update to the selected state variables
      useEffect(() => {
        axios.get(`http://localhost:4000/teacher/${id}/projects?subscription=free&subscription=premium&activity_type=animation&activity_type=game&activity_type=chatbot&activity_type=teacher&activity_type=augmentedreality&yearMin=1&yearMin=5&yearMin=7&yearMin=9&yearMax=4&yearMax=6&yearMax=8&yearMax=13&CSC=%CSC%&MAT=%MAT%&SCI=%SCI%&LAN=%LAN%&ART=%ART%&MUS=%MUS%&course=beginner&course=intermediate&course=advanced&showMax=10`)
        .then(res => {
          const response = res.data
          setProfileName(response[1][0].name)
          setProfileImage(response[1][0].profile_pic)
          setProjectsData(response[0])
        })
      }, [id,state,courseLevel,showResults])

    console.log(state, courseLevel,showResults);

    return (
        <div>
            
            <NavBar profileName={profileName} profileImage={profileImage}/>
            <div className="content-container">
                <div className="content-left-container">
                    <Checkboxes state={state} handleChange={handleChange} />
                </div>
                <div className="content-right-container">
                    <ContentHeading />
                    <ButtonGroups courseLevel={courseLevel} showResults={showResults} handleCourseLevel={handleCourseLevel} handleShowResults={handleShowResults} />
                    <ProjectsList projectsData={projectsData} />
                </div>
            </div>
            <NavButtons />
            <Footer />
        </div>
    )
}

export default Projects
