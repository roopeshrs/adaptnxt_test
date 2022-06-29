import React, {useEffect} from 'react'
import './Inventory.css'

function Inventory({editLocation}) {
  useEffect(()=>{
    editLocation(window.location.pathname)
  },[editLocation])
  return (
    <div className='inventory'>Inventory! <strong>check orders page</strong>.</div>
  )
}

export default Inventory