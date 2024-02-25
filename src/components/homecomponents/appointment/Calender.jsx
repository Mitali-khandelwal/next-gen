import React, { useState } from "react";
import Calendar from "react-calendar";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../../App.css";
import Svg11 from "../../../assets/svg/Svg11";
const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="app">
        <div className="search_wrapper">
          <div>
            <CiSearch />
          </div>
          <div className="client_name">
            <Svg11 className="client_profile" />
            <h6> Narsimha r.</h6>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
};

export default Calender;
