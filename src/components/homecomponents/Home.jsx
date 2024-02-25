import React from "react";
import DailyUpdate from "./DailyUpdate";
import Sidebar from "../common/Sidebar";
import "../../App.css";
import RecentPatient from "./RecentPatient";
import Appointments from "./appointment/Appointments";
import Visitors from "./Visitors";

const Home = () => {
  return (
    <div className="home_wrapper">
      <div>
        <Sidebar />
      </div>
      <div className="home_container">
        <div className="doctor_profile">
          <h3>Dr. Narsimha rao</h3>
          <p>Hi Doctor, Let's check the schedule with the patient today</p>
        </div>
        <div>
          <DailyUpdate />
        </div>
        <div>
          <RecentPatient />
        </div>
        <Visitors />
      </div>
      <div>
        <Appointments />
      </div>
    </div>
  );
};

export default Home;
