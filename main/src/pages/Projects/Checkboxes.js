import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Projects.css';


function Checkboxes({state, handleChange}) {

    const { free, premium,animation,
        game,chatbot,augmentedReality,
        yearLevel1,yearLevel2,yearLevel3,
        yearLevel4,subjectCsc,subjectMat,
        subjectSci,subjectLan,subjectArt,
        subjectMus } = state;


    return (
        <div>
            <div className="checkbox-section">
                <div className="checkbox-heading">SUBSCRIPTION <br/><hr/></div>
                <FormGroup className="checkbox-labels">
                    <FormControlLabel control={<Checkbox name="free" checked={free} onChange={handleChange}/>} label="Free" /> <br/>
                    <FormControlLabel control={<Checkbox name="premium" checked={premium} onChange={handleChange} />} label="Premium" />
                </FormGroup>
                </div>

            <div className="checkbox-section">
                <div className="checkbox-heading">Activity Type <br/><hr/></div>
                <FormGroup className="checkbox-labels">
                    <FormControlLabel control={<Checkbox name="animation" checked={animation} onChange={handleChange}/>} label="Animation" /> <br/>
                    <FormControlLabel control={<Checkbox name="game" checked={game} onChange={handleChange} />} label="Game" /><br/>
                    <FormControlLabel control={<Checkbox name="chatbot" checked={chatbot} onChange={handleChange}/>} label="Chatbot" /> <br/>
                    <FormControlLabel control={<Checkbox name="augmentedReality" checked={augmentedReality} onChange={handleChange} />} label="Augmented Reality" /><br/>
                </FormGroup>
            </div>

            <div className="checkbox-section">
                <div className="checkbox-heading">Year Level <br/><hr/></div>
                <FormGroup className="checkbox-labels">
                    <FormControlLabel control={<Checkbox name="yearLevel1" checked={yearLevel1} onChange={handleChange}/>} label="1 - 4" /> <br/>
                    <FormControlLabel control={<Checkbox name="yearLevel2" checked={yearLevel2} onChange={handleChange} />} label="5 - 6" /><br/>
                    <FormControlLabel control={<Checkbox name="yearLevel3" checked={yearLevel3} onChange={handleChange}/>} label="7 - 8" /> <br/>
                    <FormControlLabel control={<Checkbox name="yearLevel4" checked={yearLevel4} onChange={handleChange} />} label="9 - 13" /><br/>
                </FormGroup>
            </div>

            <div className="checkbox-section">
                <div className="checkbox-heading">Subject Matter <br/><hr/></div>
                <FormGroup className="checkbox-labels">
                    <FormControlLabel control={<Checkbox name="subjectCsc" checked={subjectCsc} onChange={handleChange}/>} label="Computer Science" /> <br/>
                    <FormControlLabel control={<Checkbox name="subjectMat" checked={subjectMat} onChange={handleChange} />} label="Maths" /><br/>
                    <FormControlLabel control={<Checkbox name="subjectSci" checked={subjectSci} onChange={handleChange}/>} label="Science" /> <br/>
                    <FormControlLabel control={<Checkbox name="subjectLan" checked={subjectLan} onChange={handleChange} />} label="Language" /><br/>
                    <FormControlLabel control={<Checkbox name="subjectArt" checked={subjectArt} onChange={handleChange}/>} label="Art" /> <br/>
                    <FormControlLabel control={<Checkbox name="subjectMus" checked={subjectMus} onChange={handleChange} />} label="Music" /><br/>
                </FormGroup>
            </div>
        </div>
    )
}

export default Checkboxes
