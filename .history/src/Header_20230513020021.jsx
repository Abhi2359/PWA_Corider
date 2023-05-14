import React from 'react'
import {HiArrowLeft} from "react-icons/hi"
import {BiEdit} from "react-icons/bi"
import  styles from"./App."
const Header = () => {
  return (
  
    <>
    <div className="header">
        <div className="trip">
           <div className="icon"><HiArrowLeft/></div>
           <div className="trip_no">Trip 1</div>
           <div className="edit_icon"><BiEdit/></div>
        </div>
    </div>
    </>
  )
}

export default Header