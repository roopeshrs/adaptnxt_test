import React from 'react'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import {Avatar} from '@mui/material'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to="">
          <img src='/images/logo-dummy.png' alt='logo'/>
        </Link>
      </div>
      <div className='header__leftMenu'>
        <Link to="">
          <MenuOpenOutlinedIcon style={{ color: "black" }}/>
        </Link>
      </div>
      <div className='header__rightMenu'>
        <Link to="">
          <DarkModeOutlinedIcon style={{ color: "black" }}/>
        </Link>
        <Link to="">
          <NotificationsNoneIcon style={{ color: "black" }}/>
        </Link>
        <Link to="">
          <GTranslateOutlinedIcon style={{ color: "black" }}/>
        </Link>
        <Link to="">
          <Avatar/>
        </Link>
      </div>
    </div>
  )
}

export default Header