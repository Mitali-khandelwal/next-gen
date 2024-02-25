import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import img1 from "../../assets/images/Mask Group.png";
import img2 from "../../assets/images/Vector 11.png";
import img3 from "../../assets/images/Vector 12.png";
import Svg12 from "../../assets/svg/Svg12";
import Svg13 from "../../assets/svg/Svg13";

const Visitors = () => {
  return (
    <div className="visitors_wrapper">
      <div className="visitors_container">
        <div className="visitors_box">
          <div className="visitor">
            <h6> Visitor and Revenue</h6>
            <p>
              This Week <FaChevronDown />
            </p>
          </div>
          <div className="visitor_revenue">
            <p>
              <span>
                <Svg12 />
              </span>
              Visitors
            </p>
            <p>
              <span>
                <Svg13 />
              </span>
              Revenue
            </p>
          </div>
          <div className="wave_container">
            <img src={img2} alt="" className="wave1" />
            <img src={img3} alt="" className="wave2" />
          </div>
          <div className="days">
            <h6>Mon</h6>
            <h6>Tue</h6>
            <h6>Wed</h6>
            <h6>Thur</h6>
            <h6>Fri</h6>
            <h6>Sat</h6>
            <h6>Sun</h6>
          </div>
        </div>
        <div className="total_patient_container">
          <h5>Total Patient</h5>
          <h3>
            150 <span>/ days</span>
          </h3>
          <p>20 patient canceled</p>
          <p className="patient_reschedule">50 patient reschedule</p>
          <div className="revenue_container">
            <div>
              <h6>Revenue This Week</h6>
              <h5>$ 10,589,10</h5>
            </div>
            <div>
              <button className="detail_btn">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
