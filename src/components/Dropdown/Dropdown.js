import React, {useState, useRef} from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import useOutsideClick from '../../hook/useOutsideClick'
import { v4 as uuid } from 'uuid';
import './Dropdown.css'

function Dropdown({selected, setSelected, options}) {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef();
  useOutsideClick(dropdownRef, () => {
    setIsActive(false);
  });
  return (
    <div className='dropdown' ref={dropdownRef}>
        <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>{selected} <ArrowDropDownOutlinedIcon style={{fontSize: "large", cursor: "pointer"}}/></div>
        {isActive && (
            <div className="dropdown-content">
                {options.map(option => (
                    <div key={uuid().slice(0,8)} onClick={(e)=> {
                        setSelected(option)
                        setIsActive(false)
                    }} 
                    className='dropdown-item'>{option}</div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Dropdown