import React from 'react'
// import '../Components/CSS/body.css'
import StudentProjectHeader from '././Components/StudentProjectHeader'
import StudentProjectBody from '././Components/StudentProjectBody'
import StudentProjectFooter from '././Components/StudentProjectFooter'

export default function StudentProjectBuilder() {

    const id=9 //ID 9 is the best

    return (

        <div className='holder-box'>
            <StudentProjectHeader id={id}/>
            <StudentProjectBody id={id}/>
            <StudentProjectFooter />
            
            
        
        </div>
        
    )
}
