import React from 'react'
import SideBarRow from '../SideBarRow/SideBarRow'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import './SideBar.css'

function SideBar({location}) {
  return (
    <div className='sidebar'>
      <SideBarRow Icon={DashboardOutlinedIcon} title="Dashboard" link="/dashboard" location={location}/>
      <SideBarRow Icon={InventoryOutlinedIcon} title="Inventory" link="/inventory" location={location}/>
      <SideBarRow Icon={ListAltOutlinedIcon} title="Orders" link="/orders" location={location}/>
      <SideBarRow Icon={LocalShippingOutlinedIcon} title="Shipping" link="/shipping" location={location}/>
      <SideBarRow Icon={AccountTreeOutlinedIcon} title="Channel" link="/channel" location={location}/>
    </div>
  )
}

export default SideBar