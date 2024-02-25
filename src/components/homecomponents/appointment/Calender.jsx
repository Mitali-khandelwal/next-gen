import React, { useState } from "react";
import Calendar from "react-calendar";
import { CiSearch } from "react-icons/ci";

import "../../../App.css";
const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="app">
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
       
      </div>
    </div>
  );
};

export default Calender;
