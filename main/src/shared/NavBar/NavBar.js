import React from 'react'
import './NavBar.css';
import StarLogo from '../../assets/images/Star Logo 07-2@2x.png'
import NzFlag from '../../assets/images/NZ Flag@2x.png'
import MaoriFlag from '../../assets/images/Maori flag@2x.png'


function NavBar({profileImage, profileName}) {
    return (
        <>
            <div class= "navbar-container">
                <img id="star-logo-top" src={StarLogo} alt=""/>
                <div id="home-link">HOME</div>
                <div id="projects-link">PROJECTS</div>
                <div id="teachers-link">TEACHERS</div>

                <div class="navbar-right-container">
                    <div class= "navbar-right-line1">
                        LANG
                        <img id="nz-flag-image" src={NzFlag} alt=""/>
                        <img id="maori-flag-image" src={MaoriFlag} alt="" />
                        <br />
                    </div>
                    <div class= "navbar-right-line2">
                        <img id="profile-image" src={profileImage} alt="" />
                        <div id="profile-name">ADD PROPS HERE LATER</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
