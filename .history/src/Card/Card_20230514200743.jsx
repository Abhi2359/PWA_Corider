import React from "react";
import { FiUsers, FiPhoneCall, FiAlertCircle } from "react-icons/fi";

const Card = () => {
  return (
    <div className="card">
     
      <div className="card-body">
        <div className="icon-container">
          <div className="icon">
            <FiUsers />
          </div>
          <div className="text"><p>Members</p></div>
          </div>
          <div className="icon">
            <FiPhoneCall />
          </div>
          <div className="icon">
            <FiAlertCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
