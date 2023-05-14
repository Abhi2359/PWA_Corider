import React from 'react'
import {HiArrowLeft} from "react-icons/hi"
import {BiEdit} from "react-icons/bi"
import  styles from"./App.css"
const Header = () => {
  return (
  
    <>
    <div className="header">
        <div className="trip">
           <div className="icon"><HiArrowLeft/></div>
           <div className="trip_no"><h3>Trip 1</h3></div>
           <div className="edit_icon"><BiEdit/></div>
        </div>
        <div className="trip_details">
            <div className="user_icon"></div>
            <div className="travel_data"></div>
            
        </div>
    </div>
    </>
  )
}

export default Header