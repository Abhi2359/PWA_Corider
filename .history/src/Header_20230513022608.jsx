import React from 'react'
import {HiArrowLeft} from "react-icons/hi"
import {BiEdit} from "react-icons/bi"
import {BsThreeDotsVertical} from "react-icons/bs"
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
            <div className="user_icon" >
                <img src="" alt="" />
            </div>
            <div className="travel_data">travel data</div>
            <div className="dot_icon"><BsThreeDotsVertical/></div>
        </div>
    </div>
    </>
  )
}

export default Header