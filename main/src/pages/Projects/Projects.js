import React from 'react'
import {useState} from 'react'
import './Projects.css';
import NavBar from '../../shared/NavBar/NavBar'
import Footer from '../../shared/Footer/Footer'
import Checkboxes from './Checkboxes'
import ContentHeading from './ContentHeading';
import ButtonGroups from './ButtonGroups'

function Projects() {

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
 
    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (
        <div>
            <NavBar />
            <div className="content-container">
                <div className="content-left-container">
                    <Checkboxes state={state} handleChange={handleChange} />
                </div>
                <div className="content-right-container">
                    <ContentHeading />
                    <ButtonGroups />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
