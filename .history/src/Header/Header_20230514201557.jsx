import React ,{useState}from "react";
import { HiArrowLeft } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./Header.css"

const Header = ({ from, to }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleToggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };
  return (
    <>
      <div className="header">
        <div className="trip">
          <div className="icon">
            <HiArrowLeft />
          </div>
          <div className="trip_no">
            <h3 className="no">Trip 1</h3>
          </div>
          <div className="edit_icon">
            <BiEdit />
          </div>
        </div>
        <div className="trip_details">
          <div className="user_icon">
            <img
              src="https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8"
              alt=""
            />
          </div>
          <div className="travel_data">From {from}</div>
          <div className="dot_icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        div.too
        <div className="horizontal_line">

        <div className="line"></div>
        </div>
        <div className="date_section">
          <div className="date_line"></div>
          <div className="date">14 May 2023</div>
          <div className="date_line"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
