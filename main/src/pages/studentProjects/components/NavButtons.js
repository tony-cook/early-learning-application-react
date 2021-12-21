import React from 'react'
import Button from '@mui/material/Button';
import '../StudentProjects.css';

function NavButtons({useAxios}) {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
            <div className="btn-to-top">
                <Button style={{background:"#E5AB2C",fontWeight:800}} fullWidth variant="contained" onClick={scrollToTop}>BACK TO TOP</Button>
            </div>
    )
}

export default NavButtons
