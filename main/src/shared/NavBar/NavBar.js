import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button';

import './NavBar.css';
import StarLogo from '../../assets/images/Star Logo 07-2@2x.png'
import NzFlag from '../../assets/images/NZ Flag@2x.png'
import MaoriFlag from '../../assets/images/Maori flag@2x.png'
import Popup from '../Popup/Popup'

function NavBar({profileName,profileImage}) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.target);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <div className= "navbar-container">
                <img id="star-logo-top" src={StarLogo} alt=""/>
                <div id="home-link">HOME</div>
                <div id="projects-link">PROJECTS</div>
                <div id="teachers-link">TEACHERS</div>

                <div className="navbar-right-container">
                    <div className= "navbar-right-line1">
                        LANG
                        <img id="nz-flag-image" src={NzFlag} alt=""/>
                        <img id="maori-flag-image" src={MaoriFlag} alt="" />
                        <br />
                    </div>
                    <div className= "navbar-right-line2">
                        <img id="profile-image" src={profileImage} alt="" />
                        <Button onClick={handleClick}>
                            <div id="profile-name">{profileName}</div>
                        </Button>
                        <Popup handleClose={handleClose} open={open} anchorEl={anchorEl} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
