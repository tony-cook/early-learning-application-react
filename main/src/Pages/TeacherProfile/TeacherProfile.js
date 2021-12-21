import React from 'react'
import TeacherProfileHeader from '././Components/TeacherProfileHeader'
import TeacherProfileFooter from '././Components/TeacherProfileFooter'
import TeacherProfileBody from '././Components/TeacherProfileBody'
// import '../Components/CSS/body.css'

export default function StudentProfile() {

    const id = 5

    return (
        <div className='holder-box'>
            <TeacherProfileHeader id={id}/>
            <TeacherProfileBody id={id}/>
            <TeacherProfileFooter />
        </div>
    )
}
