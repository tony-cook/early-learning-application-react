import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Projects.css';


function ButtonGroups({courseLevel, showResults, handleCourseLevel, handleShowResults}) {

    return (
        <div className="filter-container">
            <div className="filter-left-container">
                <ToggleButtonGroup fullWidth value={courseLevel} exclusive onChange={handleCourseLevel} aria-label="course level">
                    <ToggleButton 
                        sx={{
                            ":active": {color: 'white',
                            background: '#0E81FF'},
                            ":focus": {color: 'white',
                            background: '#0E81FF'},
                            ":hover": {color: 'white',
                            background: '#65AFFA'}
                            }}
                        style={{ fontWeight: 800 }}
                        color="primary"
                        size="small"  
                        value="beginner" 
                        aria-label="beginner">
                                BEGINNER
                    </ToggleButton>
                    <ToggleButton 
                        sx={{
                            ":active": {color: 'white',
                            background: '#0E81FF'},
                            ":focus": {color: 'white',
                            background: '#0E81FF'},
                            ":hover": {color: 'white',
                            background: '#65AFFA'}
                            }}
                        style={{ fontWeight: 800 }}
                        color="primary"
                        size="small"  
                        value="intermediate" 
                        aria-label="intermediate">
                        INTERMEDIATE
                    </ToggleButton>
                    <ToggleButton 
                        sx={{
                            ":active": {color: 'white',
                            background: '#0E81FF'},
                            ":focus": {color: 'white',
                            background: '#0E81FF'},
                            ":hover": {color: 'white',
                            background: '#65AFFA'}
                            }}
                        style={{ fontWeight: 800 }}
                        color="primary"
                        size="small"  
                        value="advanced" 
                        aria-label="advanced">
                        ADVANCED
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="filter-right-container">
                    <div className="filter-text">SHOW </div>
                    <div className="filter-right-container-buttons">
                        <ToggleButtonGroup fullWidth value={showResults} exclusive onChange={handleShowResults} aria-label="course level">
                            <ToggleButton
                                sx={{
                                    ":active": {color: 'white',
                                    background: '#0E81FF'},
                                    ":focus": {color: 'white',
                                    background: '#0E81FF'},
                                    ":hover": {color: 'white',
                                    background: '#65AFFA'}
                                    }} 
                                style={{ fontWeight: 800 }}
                                size="small" 
                                color="primary" 
                                value="1" 
                                aria-label="1">
                                1
                            </ToggleButton>
                            <ToggleButton
                                sx={{
                                    ":active": {color: 'white',
                                    background: '#0E81FF'},
                                    ":focus": {color: 'white',
                                    background: '#0E81FF'},
                                    ":hover": {color: 'white',
                                    background: '#65AFFA'}
                                    }} 
                                style={{ fontWeight: 800 }}
                                size="small" 
                                color="primary" 
                                value="5" 
                                aria-label="5">
                                5
                            </ToggleButton>
                            <ToggleButton
                                sx={{
                                    ":active": {color: 'white',
                                    background: '#0E81FF'},
                                    ":focus": {color: 'white',
                                    background: '#0E81FF'},
                                    ":hover": {color: 'white',
                                    background: '#65AFFA'}
                                    }} 
                                style={{ fontWeight: 800 }}
                                size="small" 
                                color="primary" 
                                value="10" 
                                aria-label="10">
                                10
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
            </div>

        </div>

    )
}

export default ButtonGroups
