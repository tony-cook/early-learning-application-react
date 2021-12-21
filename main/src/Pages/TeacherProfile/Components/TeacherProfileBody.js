import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './StudentProfileBody.css'

export default function StudentProfileHeader(props) {

    const teacherID = (props.id) //====== SET STUDENT ID HERE
    const teacherProfile = `http://localhost:4000/teachersProfile/${teacherID}`
    // not secure "https", s needed to be removed
    
    const [contactNumber, setContactNumber] = useState('Contact Number')
    const [date_of_birth, setDate_of_birth] = useState('Date of Birth')
    const [course, setCourse] = useState('Course')
    const [email, setEmail] = useState('Teacher Email')
    const [school, setSchool] = useState('School')
    const [teacher, setTeacher] = useState('Teacher')
    // const [student, setStudent] = useState('Teacher Profile')

    // contact_number: "(026) 4465-010"
    // course: "Beginner"
    // date_of_birth: "2000 March 24th"
    // email: "PearlPHall@dayrep.com"
    // name: "Pearl Hall"
    // school: "Kristin School"

    axios.get(teacherProfile)
    .then(res => {
        // console.log(res);
        setContactNumber(res.data[0].contact_number);
        setDate_of_birth(res.data[0].date_of_birth)
        setCourse(res.data[0].course)
        setEmail(res.data[0].email)
        setSchool(res.data[0].school)
        setTeacher(res.data[0].name)
    })

    return (
        <div>
            <div className='middle'>
                <div className='main'>
                    <div className='main-box'>

                        <div className='main-left'>
                            <img src="./Images/Teacher_areas/Ellipse 38.png" /><br/>
                            <button><a href=''>EDIT PROFILE</a></button>
                            <button><a href=''>CHANGE PHOTO</a></button>
                            <button><a href=''>SETTINGS</a></button>
                        </div>

                        <div className='main-right'>
                            <h2 className='studentName'>{teacher}</h2>
                            <span className='info'>
                            <span className="left">School</span>
                            <span className="right">{school}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Courses Purchased</span>
                            <span className="right">{course}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Date of Birth</span>
                            <span className="right">{date_of_birth}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Contact No</span>
                            <span className="right">{contactNumber}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Email Address</span>
                            <span className="right">{email}</span>
                            </span>
                        </div>
                    </div>

                    <div className='teacher-main-footer'>
                        <span className='teacher-footer-btn-one'><button><a href=''>BACK TO PROJECTS</a></button></span>
                        <span className='teacher-footer-btn-two'><button><a href=''>BACK TO DASHBOARD</a></button></span>
                    </div>
                </div>
            </div>  
        </div>
        
    )
}
