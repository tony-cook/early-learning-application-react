import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import '../Projects/TeacherProjects.css'
import NavBar from '../../shared/NavBar/NavBar'
import Footer from '../../shared/Footer/Footer'
import Checkboxes from './components/Checkboxes'
import ContentHeading from './components/ContentHeading';
import ButtonGroups from './components/ButtonGroups'
import NavButtons from './components/NavButtons'
import ProjectsList from './components/ProjectsList'

function Projects() {

// Variable declared from a window prompt on pageload and stored in localStorage(line 137) to query the user information from the backend

    const teacherId = localStorage.getItem('userIdTeacher')
    const profileRoute = '/TeacherProfile'

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
    const [showResults, setShowResults] = useState("10")

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

//Axios API to fetch profile information and a detailed project list from the backend server with the user id and project type variables
//updated from the state. useEffect hook will allow this to run each time there is an update to the selected state variables.

// fetchApi variable with conditional statement based on variables in the state, when true the URL string is added to the fetch API URL

    const fetchApi = {
        freeString: state.free ? "subscription=free" : "",
        premiumString: state.premium ? "&subscription=premium" : "",
        animationString: state.animation ? "&activity_type=animation" : "",
        gameString: state.game ? "&activity_type=game" : "",
        chatbotString: state.chatbot ? "&activity_type=chatbot" : "",
        augmentedRealityString: state.augmentedReality ? "&activity_type=augmentedreality" : "",

        yearLevel1String: state.yearLevel1 ? "&yearMin=1&yearMax=4" : "",
        yearLevel2String: state.yearLevel2 ? "&yearMin=5&yearMax=6" : "",
        yearLevel3String: state.yearLevel3 ? "&yearMin=7&yearMax=8" : "",
        yearLevel4String: state.yearLevel4 ? "&yearMin=9&yearMax=13" : "",

        subjectCscString: state.subjectCsc ? "&CSC=%CSC%" : "",
        subjectMatString: state.subjectMat ? "&MAT=%MAT%" : "",
        subjectSciString: state.subjectSci ? "&SCI=%SCI%" : "",
        subjectLanString: state.subjectLan ? "&LAN=%LAN%" : "",
        subjectArtString: state.subjectArt ? "&ART=%ART%" : "",
        subjectMusString: state.subjectMus ? "&MUS=%MUS%" : "",

        courseLevelString: courseLevel === "beginner" ? "&course=beginner" : courseLevel === "intermediate" ? "&course=intermediate" : "&course=advanced",
        showResultsString: showResults === "1" ? "&showMax=1" : showResults === "5" ? "&showMax=5" : "&showMax=10"
    }

    const fetchApiQuery = (fetchApi.freeString +
                        fetchApi.premiumString +
                        fetchApi.animationString +
                        fetchApi.gameString +
                        fetchApi.chatbotString +
                        fetchApi.augmentedRealityString +
                        fetchApi.yearLevel1String +
                        fetchApi.yearLevel2String +
                        fetchApi.yearLevel3String +
                        fetchApi.yearLevel4String +
                        fetchApi.subjectCscString +
                        fetchApi.subjectMatString +
                        fetchApi.subjectSciString +
                        fetchApi.subjectLanString +
                        fetchApi.subjectArtString +
                        fetchApi.subjectMusString +
                        fetchApi.courseLevelString +
                        fetchApi.showResultsString)

    useEffect(() => {
        console.log(teacherId)
        axios.get(`http://localhost:4000/teacher/${teacherId}/projects?${fetchApiQuery}`)
        .then(res => {
          const response = res.data
          setProfileName(response[1][0].name)
          setProfileImage(response[1][0].profile_pic)
          setProjectsData(response[0])
        })
      }, [teacherId,state,courseLevel,showResults])


    useEffect(() => {
        localStorage.clear();
        let userIdTeacher = prompt("Enter the teacher_id", "1")
        if (userIdTeacher === null || userIdTeacher === "") {
            let userIdStudent = prompt("Enter the student_id", "1")
            alert(`You have logged in as student_id ${userIdStudent}`)
            localStorage.setItem('userIdStudent', userIdStudent)
          } else {
            alert(`You have logged in as teacher_id ${userIdTeacher}`)
            localStorage.setItem('userIdTeacher', userIdTeacher)
          }
    },[])



    return (
        <div>
            
            <NavBar profileName={profileName} profileImage={profileImage} profileRoute={profileRoute}/>
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
