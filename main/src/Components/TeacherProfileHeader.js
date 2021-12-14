import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CSS/StudentProfileHeader.css'
import axios from 'axios'

export default function StudentProfileHeader() {

    const teacherID = 2 //====== SET STUDENT ID HERE
    const teacherProfile = `http://localhost:4000/teachersProfile/${teacherID}`
    
    const [teacher, setTeacher] = useState('Teacher')

    axios.get(teacherProfile)
    .then(res => {
        console.log(res);
        setTeacher(res.data[0].name)
    })

    return (
            <div className='top'>
                <div className='header'>
                    
                    <div className='header-box-one'>
                        <Link to='/StudentProject'><img src="./Images/Home/Star Logo 07-2.png" /></Link>
                    </div>

                    <div className='header-box-two'>
                        <a href="#" onmousedown="click()" onclick="click()">HOME</a>
                        <a href="#">PROJECTS</a>
                        <a href="#">TEACHERS</a>
                    </div>

                    <div className='header-box-three'>
                        <div className='holder'>

                            <div className='flags'>
                                LANG <img src="./Images/Home/NZ Flag.png" /> <img src="./Images/Home/Maori flag.png" />
                            </div>

                            <div className='header-profile-box'>
                                
                                <img src="./Images/teacher Areas/Ellipse 38.png" className='smallProfile' />
                                <span className='profileStudentName'>{teacher}</span>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        
    )
}
