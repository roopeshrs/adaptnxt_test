import React, {useEffect} from 'react'
import './Channel.css'

function Channel({editLocation}) {
  useEffect(()=>{
    editLocation(window.location.pathname)
  },[editLocation])
  return (
    <div className='channel'>Channel! <strong>check orders page</strong>.</div>
  )
}

export default Channel