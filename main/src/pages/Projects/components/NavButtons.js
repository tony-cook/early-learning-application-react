import React from 'react'
import Button from '@mui/material/Button';
import '../Projects.css';

function NavButtons() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <div className="nav-buttons">
            <div className="btn-to-top">
                <Button style={{background:"#E5AB2C",fontWeight:800}} fullWidth variant="contained" onClick={scrollToTop}>BACK TO TOP</Button>
            </div>
            <div className="btn-to-dashboard">
                <Button style={{background:"#F91C85",fontWeight:800}} fullWidth variant="contained" >BACK TO DASHBOARD</Button>
             </div>
        </div>
    )
}

export default NavButtons
