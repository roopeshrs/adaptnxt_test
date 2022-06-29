import React, {useState} from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Dropdown from '../Dropdown/Dropdown';
import MOCK_DATA from "../../MOCK_DATA.json";
import { v4 as uuid } from 'uuid';
import './OrderDetail.css'

function OrderDetail() {
  const [orders, setOrders] = useState(MOCK_DATA)
  const [pageNumber, setPageNumber] = useState(0)
  const ordersPerPage = 3;
  const totalPages = orders.length / ordersPerPage;
  const ordersViewed = pageNumber * ordersPerPage;
  const displayOrders = orders.slice(ordersViewed, ordersViewed + ordersPerPage)

  const getPreviousPage = () => {
    if(pageNumber === 0){
      return;
    }
    setPageNumber(pageNumber - 1);
  }
  const getNextPage = () => {
    if(pageNumber === totalPages-1){
      return;
    }
    setPageNumber(pageNumber + 1);
  }

  const [orderStatus, setOrderStatus] = useState("Actions")
  const statusOptions = ["Pending", "Accepted", "AWB Created", "Ready to Ship", "Shipped", "Completed", "Cancelled"]

  const [currentPageNo, setCurrentPageNo] = useState(`${pageNumber + 1} / ${totalPages} pages`)
  const pageNoOptions = [];
  for(let i=0; i<totalPages; i++){
    pageNoOptions.push(`${i + 1} / ${totalPages} pages`)
  }

  return (
    <div className='orderDetail'>
        <table border={0} cellSpacing={0} cellPadding={0}>
            <thead>
                <tr>
                    <th></th>
                    <th><input type="checkbox" /></th>
                    <th>Channel <span><HeightOutlinedIcon/><FilterAltOutlinedIcon/></span></th>
                    <th>Order No <span><HeightOutlinedIcon/><SearchOutlinedIcon/></span></th>
                    <th>Order Date <span><HeightOutlinedIcon/><SearchOutlinedIcon/></span></th>
                    <th>City <HeightOutlinedIcon/></th>
                    <th className='customer_name'>Customer Name <SearchOutlinedIcon/></th>
                    <th>Order Value <HeightOutlinedIcon/></th>
                    <th>Status <HeightOutlinedIcon/></th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    displayOrders.map(order => (
                        <tr key={uuid().slice(0,8)}>
                            <td><AddBoxOutlinedIcon style={{color: "#A9A9A9", cursor: "pointer"}}/></td>
                            <td><input type="checkbox" /></td>
                            <td><img src={order.channel} alt='channel' className='channelImg'/></td>
                            <td>{order.order_no}</td>
                            <td>{order.order_date}</td>
                            <td>{order.city}</td>
                            <td className='customer_name'>{order.customer_name}</td>
                            <td>{order.order_value}</td>
                            <td><span className='order__statusPending'>{order.status}</span></td>
                            <td><Dropdown selected={orderStatus} setSelected={setOrderStatus} options={statusOptions}/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className='pagination'>
            <button className='pagination__prevBtn' onClick={()=>getPreviousPage()} disabled={pageNumber === 0}><ArrowBackIosNewOutlinedIcon/></button>
            <div className='pagination__currentPageNo'>{pageNumber + 1}</div>
            <button className='pagination__nextBtn' onClick={()=>getNextPage()} disabled={pageNumber === totalPages-1}><ArrowForwardIosOutlinedIcon/></button>
            <Dropdown selected={currentPageNo} setSelected={setCurrentPageNo} options={pageNoOptions}/>
        </div>
    </div>
  )
}

export default OrderDetail