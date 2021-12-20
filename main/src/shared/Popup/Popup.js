import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Popup.css';


function Popup({handleClose, open, anchorEl}) {

    return (
        <div>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
            backgroundColor: '#FDF7D3',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 143,
              height: 151,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem style={{backgroundColor: '#FDF7D3', color: '#707070',font: 'normal normal 600 18px/30px Open Sans'}} >
          My Profile
        </MenuItem>
        <MenuItem style={{backgroundColor: '#FDF7D3', color: '#707070',font: 'normal normal 600 18px/30px Open Sans'}}>
          Settings
        </MenuItem >
        <MenuItem style={{backgroundColor: '#FDF7D3', color: '#707070',font: 'normal normal 600 18px/30px Open Sans'}}>
          Logout
        </MenuItem >
      </Menu>
        </div>
    )
}

export default Popup
