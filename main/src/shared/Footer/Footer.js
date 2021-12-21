import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <>
            <div className= "footer-container">
                <div className="flexbox">
                    <div className="text-group" >
                        <span id="title">COMPANY</span> <br/><br/> About Us <br/>Careers <br/> Partners
                    </div>
                    <div className="text-group" >
                        <span id="title">COURSES</span> <br/><br/> Register <br/> Login <br/> Projects <br/>
                        Teachers <br/> Parents <br/> Resources
                    </div>
                    <div className="text-group" >
                        <span id="title">SUPPORT</span> <br/><br/> FAQs <br/> Helpdesk <br/> Contact Us <br/>
                    </div>
                    <div className="text-group" >
                        <span id="title">LEGAL</span> <br/><br/> Terms & Conditions <br/> Privacy Policy
                    </div>
                    <div className="text-group lg" >
                        <span id="title">LevelUp Works</span> <br/>LevelUp Works is an Auckland-based enterprise dedicated 
                        to developing game-based learning software to help teachers in response to the New Zealand Digital Technologies 
                        & Hangarau Matihiko.<br/> alan@levelupworks.com <br/>(021) 668 185

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
