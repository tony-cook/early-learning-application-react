import React from 'react'
import './CSS/StudentProjectBody.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DOMpurify from 'dompurify'

export default function StudentProjectBody() {

    const [contentBox, setContentBox] = useState('SELECT an option from the left tab')

    const studentID = 9 //====== SET STUDENT ID HERE
    // const studentProfile = `http://localhost:4000/studentProjectBuilder/instructions/${studentID}`
    const studentProfile = `http://localhost:4000/studentProject/${studentID}`

    // axios.get(studentPofile)
    // .then(res => {
    //     console.log(res.data[0].instructions);
    //     setContentBox(res.data[0].instructions)
    // })

    function learningObjectives(){
        console.log('clicked learning')
        axios.get(studentProfile)
        .then(res => {
            console.log(res);
            setContentBox(res.data[0].learning_objective)
        })
    }

    function instructions(){
        console.log('clicked learning')
        axios.get(studentProfile)
        .then(res => {
            console.log(res.data[0].instructions);
            setContentBox(res.data[0].instructions)
        })
    }

    function video(){
        console.log('clicked video')
        axios.get(studentProfile)
        .then(res => {
            console.log(res);
            setContentBox(res.data[0].video)
        })
    }

    function project(){
        console.log('clicked project')
        axios.get(studentProfile)
        .then(res => {
            console.log(res.data[0].project_pic);
            setContentBox(res.data[0].project_pic)
        })
    }

    function clicked(){
        setContentBox('yet to be setup')
    }
    
    return (
        <div className='body-box-body'>
            <div className='left'>
            <div className='middle-left'>
                    <div className='profile-picture'>
                        <img src='Images/Student Areas/Ellipse 38.png' />
                    </div>

                    <div className='nav-links'>
                        <div className='links' onClick={learningObjectives}><a href="#"><img src='Images/Student Areas/objectives.png'/>LEARNING OBJECTIVES</a></div>
                        <div className='links' onClick={instructions}><a href="#"><img src='Images/Student Areas/steps.png'/>INSTRUCTIONS</a></div>
                        <div className='links' onClick={video}><a href="#"><img src='Images/Student Areas/video.png'/>VIDEO TUTORIAL</a></div>
                        <div className='links' onClick={project}><a href="#"><img src='Images/Student Areas/new proj.png'/>MAKE PROJECT</a></div>
                        <div className='links' onClick={clicked}><a href="#"><img src='Images/Student Areas/submit proj.png'/>SUBMIT PROJECT</a></div>
                        <div className='links' onClick={clicked}><a href="#"><img src='Images/Student Areas/prize.png'/>BONUS CHALLENGE</a></div>
                        <div className='links' onClick={clicked}><a href="#"><img src='Images/Student Areas/list copy.png'/>TAKE THE QUIZ</a></div>
                        
                    </div>

                    <div className='arrow-box'>
                        <div className='arrow'><a href="#"><img src='Images/Student Areas/Icon open-caret-left.png'/></a></div>
                    </div>


                    <div className='bottom-nav'>
                        <div className='bottom-nav-link'><a href="#"><img src='Images/Student Areas/Icon awesome-user-circle.png' /><br />Profile</a></div>
                        <div className='bottom-nav-link'><a href="#"><img src='Images/Student Areas/Icon material-settings.png' /><br />Settings</a></div>
                        <div className='bottom-nav-link'><a href="#"><img src='Images/Student Areas/Icon awesome-sign-out-alt.png' /><br />Log out</a></div>
                    </div>
                </div>
            </div>
                <div className='middle-right'>

                    <div className='middle-right-box'>
                            
                        <div className='middle-content-box' dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(contentBox)}}>
                        
                        </div>

                    </div>

                </div>
            
        </div>
    )
}
