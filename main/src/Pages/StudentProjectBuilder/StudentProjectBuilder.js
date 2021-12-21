import React, {useEffect} from 'react'
import StudentProjectHeader from '././Components/StudentProjectHeader'
import StudentProjectBody from '././Components/StudentProjectBody'
import StudentProjectFooter from '././Components/StudentProjectFooter'

export default function StudentProjectBuilder() {

    useEffect(() => {
        localStorage.clear();
            let teacherId = prompt("Enter the teacher_id", "1")
            if (teacherId === null || teacherId === "") {
                let studentID = prompt("Enter the student_id", "1")
                alert(`You have logged in as student_id ${studentID}`)
                localStorage.setItem('studentID', studentID)
            } else {
                alert(`You have logged in as teacher_id ${teacherId}`)
                localStorage.setItem('teacherID', teacherId)
            }
    },[])

    const studentID = localStorage.getItem('studentID')
    const teacherId = localStorage.getItem('teacherID')

    return (

        <div className='holder-box'>
            <StudentProjectHeader />
            <StudentProjectBody />
            <StudentProjectFooter />
        </div>
        
    )
}
