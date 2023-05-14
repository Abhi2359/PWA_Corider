import React , from "react";
import { HiArrowLeft } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./App.css";
import { fetchData } from "./api/fetchData";
const Header = () => {
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);

      try {
        const {from,to} = await fetchData(page);
        
        
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
  }, [page]);

  return (
    <>
      <div className="header">
        <div className="trip">
          <div className="icon">
            <HiArrowLeft />
          </div>
          <div className="trip_no">
            <h3>Trip 1</h3>
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
          <div className="travel_data">From {from} to {to}</div>
          <div className="dot_icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="line"></div>
        <div className="date_container">
          <div className="date-line"></div>
          <div className="date">May 13, 2023</div>
          <div className="date-line"></div>
        </div>
      </div>
    </>
  );
};

export default Header;