import React from 'react'
import {useState} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Projects.css';

function ButtonGroups() {
    const [course, setCourse] = useState("beginner");
    const [showResults, setShowResults] = useState("1")

    const handleCourse = (e, newCourse) => {
        if (newCourse !== null) {
            setCourse(newCourse);
          }
    };

    const handleShowResults = (e, newResults) => {
        if (newResults !== null) {
            setShowResults(newResults);
          }
    };

    console.log(course);
    console.log(showResults);
    return (
        <div className="filter-container">
            <div className="filter-left-container">
                <ToggleButtonGroup fullWidth value={course} exclusive onChange={handleCourse} aria-label="course level">
                    <ToggleButton style={{ fontWeight: 700 }} size="small" color="primary" value="beginner" aria-label="beginner">
                        BEGINNER
                    </ToggleButton>
                    <ToggleButton style={{ fontWeight: 700 }} size="small" color="primary" value="intermediate" aria-label="intermediate">
                        INTERMEDIATE
                    </ToggleButton>
                    <ToggleButton style={{ fontWeight: 700 }} size="small" color="primary" value="advanced" aria-label="advanced">
                        ADVANCED
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="filter-right-container">
                    <div className="filter-text">SHOW </div>
                    <div className="filter-right-container-buttons">
                        <ToggleButtonGroup fullWidth value={showResults} exclusive onChange={handleShowResults} aria-label="course level">
                            
                            <ToggleButton style={{ fontWeight: 700 }} size="small" color="success" value="1" aria-label="beginner">
                                1
                            </ToggleButton>
                            <ToggleButton style={{ fontWeight: 700 }} size="small" color="success" value="5" aria-label="intermediate">
                                5
                            </ToggleButton>
                            <ToggleButton style={{ fontWeight: 700 }} size="small" color="primary" value="10" aria-label="advanced">
                                10
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
            </div>

        </div>

    )
}

export default ButtonGroups
