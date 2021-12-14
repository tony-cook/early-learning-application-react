import React from 'react'
import TeacherProfileHeader from '../Components/TeacherProfileHeader'
import TeacherProfileFooter from '../Components/TeacherProfileFooter'
import TeacherProfileBody from '../Components/TeacherProfileBody'
import '../Components/CSS/body.css'

export default function StudentProfile() {
    return (
        <div className='holder-box'>
            <TeacherProfileHeader />
            <TeacherProfileBody />
            <TeacherProfileFooter />
        </div>
    )
}
