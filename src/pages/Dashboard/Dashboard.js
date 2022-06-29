import React, {useEffect} from 'react'
import './Dashboard.css'

function Dashboard({editLocation}) {
  useEffect(()=>{
    editLocation(window.location.pathname)
  },[editLocation])
  return (
    <div className='dashboard'>Dashboard! <strong>check orders page</strong>.</div>
  )
}

export default Dashboard