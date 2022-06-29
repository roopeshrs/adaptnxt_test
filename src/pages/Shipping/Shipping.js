import React, {useEffect} from 'react'
import './Shipping.css'

function Shipping({editLocation}) {
  useEffect(()=>{
    editLocation(window.location.pathname)
  },[editLocation])
  return (
    <div className='shipping'>Shipping! <strong>check orders page</strong>.</div>
  )
}

export default Shipping