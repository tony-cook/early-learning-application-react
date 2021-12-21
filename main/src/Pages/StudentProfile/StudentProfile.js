import React, {useEffect} from 'react'
import StudentProfileHeader from '././Components/StudentProfileHeader'
import StudentProfileBody from '././Components/StudentProfileBody'
import StudentProfileFooter from '././Components/StudentProfileFooter'
// import './body.css'

export default function StudentProfile() {

    useEffect(() => {
        localStorage.clear();
            let teacherId = prompt("Enter the teacher_id", "1")
            if (teacherId === null || teacherId === "") {
                let studentID = prompt("Enter the student_id", "1")
                alert(`You have logged in as student_id ${studentID}`)
                localStorage.setItem('studentID', studentID)
            } else {
                alert(`You have logged in as teacher_id ${teacherId}`)
                localStorage.setItem('userIdTeacher', teacherId)
            }
    },[])

    const studentID = localStorage.getItem('studentID')
    const teacherId = localStorage.getItem('teacherID')

    return (
        <div className='holder-box'>
            <StudentProfileHeader />
            <StudentProfileBody />
            <StudentProfileFooter />
        </div>
    )
}
