import React from "react";
import { FiUsers, FiPhoneCall, FiAlertCircle } from "react-icons/fi";

const Card = () => {
  return (
     
      <div className="card-body">
        <div className="members">
          <div className="icon">
            <FiUsers />
          </div>
          div.ic
          <div className="text"><p>Members</p></div>
          </div>
          <div className="share-members">

          <div className="icon">
            <FiPhoneCall />
          </div>
          <div className="text"><p>Share Members</p></div>
          </div>
          <div className="report">

          <div className="icon">
            <FiAlertCircle />
          </div>
          <div className="text"><p>Report</p></div>
          </div>
        
      </div>
    </div>
  );
};

export default Card;
