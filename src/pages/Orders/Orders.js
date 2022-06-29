import React, {useState, useEffect} from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Pending from '../../components/Pending/Pending'
import Accepted from '../../components/Accepted/Accepted'
import AWBCreated from '../../components/AWBCreated/AWBCreated'
import ReadyToShip from '../../components/ReadyToShip/ReadyToShip'
import Shipped from '../../components/Shipped/Shipped'
import Completed from '../../components/Completed/Completed'
import Cancelled from '../../components/Cancelled/Cancelled'
import {Link} from 'react-router-dom'
import './Orders.css'

function Orders({editLocation}) {
  const [activeTab, setActiveTab] = useState("Pending")
  useEffect(()=>{
    editLocation(window.location.pathname)
  },[editLocation])
  return (
    <div className='orders'>
      <div className='orders__heading'>
        <div>{activeTab} <CloseOutlinedIcon style={{cursor: "pointer", marginLeft: "10px", fontSize: "medium", paddingTop: "3px", color: "#000"}}/></div>
        <SettingsOutlinedIcon style={{cursor: "pointer"}}/>
      </div>
      <div className='orders__menu'>
        <Link to="" className={`${activeTab === 'Pending' && 'selected'}`} onClick={()=> setActiveTab("Pending")}>Pending</Link>
        <Link to="" className={`${activeTab === 'Accepted' && 'selected'}`} onClick={()=> setActiveTab("Accepted")}>Accepted</Link>
        <Link to="" className={`${activeTab === 'AWB Created' && 'selected'}`} onClick={()=> setActiveTab("AWB Created")}>AWB Created</Link>
        <Link to="" className={`${activeTab === 'Ready to Ship' && 'selected'}`} onClick={()=> setActiveTab("Ready to Ship")}>Ready to Ship</Link>
        <Link to="" className={`${activeTab === 'Shipped' && 'selected'}`} onClick={()=> setActiveTab("Shipped")}>Shipped</Link>
        <Link to="" className={`${activeTab === 'Completed' && 'selected'}`} onClick={()=> setActiveTab("Completed")}>Completed</Link>
        <Link to="" className={`${activeTab === 'Cancelled' && 'selected'}`} onClick={()=> setActiveTab("Cancelled")}>Cancelled</Link>
      </div>
      <div className='orders__activeTabContent'>
        {activeTab === "Pending" && <Pending/>}
        {activeTab === "Accepted" && <Accepted/>}
        {activeTab === "AWB Created" && <AWBCreated/>}
        {activeTab === "Ready to Ship" && <ReadyToShip/>}
        {activeTab === "Shipped" && <Shipped/>}
        {activeTab === "Completed" && <Completed/>}
        {activeTab === "Cancelled" && <Cancelled/>}
      </div>
    </div>
  )
}

export default Orders