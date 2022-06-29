import React from 'react'
import {Link} from 'react-router-dom'
import './SideBarRow.css'

function SideBarRow({Icon, title, link, location}) {
  return (
    <Link to={link}>
      <div className={`sideBarRow ${location === link && 'selected'}`}>
        <Icon className="sideBarRow__icon"/>
        <h2 className="sideBarRow__title">{title}</h2>
      </div>
    </Link>
  )
}

export default SideBarRow