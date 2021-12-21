import React from 'react'
import StudentProfileHeader from '././Components/StudentProfileHeader'
import StudentProfileBody from '././Components/StudentProfileBody'
import StudentProfileFooter from '././Components/StudentProfileFooter'
// import './body.css'

export default function StudentProfile() {

    const id=1

    return (
        <div className='holder-box'>
            <StudentProfileHeader id={id}/>
            <StudentProfileBody id={id}/>
            <StudentProfileFooter />
        </div>
    )
}
