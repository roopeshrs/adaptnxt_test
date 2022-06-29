import React from 'react'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import OrderDetail from '../OrderDetail/OrderDetail';
import './Pending.css'

function Pending() {
  return (
    <div className='pending'>
      <div className='pending__actionBtns'>
        <div className='pending__leftActionBtns'>
          <button><ExitToAppOutlinedIcon/> Import Orders</button>
          <button disabled><DoubleArrowOutlinedIcon/> Accept</button>
          <button disabled><PrintOutlinedIcon/> Print</button>
        </div>
        <div className='pending__rightActionBtns'>
          <button><CachedOutlinedIcon/> Refresh</button>
        </div>
      </div>
      <OrderDetail/>
    </div>
  )
}

export default Pending