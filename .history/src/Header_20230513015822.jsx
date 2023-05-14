import React from 'react'
import {HiArrowLeft} from "react-icons/hi"
const Header = () => {
  return (
  
    <>
    <div className="header">
        <div className="trip">
           <div className="icon"><HiArrowLeft/></div>
           <div className="trip_no"></div>
           <div className="edit_icon"></div>
        </div>
    </div>
    </>
  )
}

export default Header