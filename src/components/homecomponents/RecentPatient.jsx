import React from "react";
import "../../App.css";
import Svg3 from "../../assets/svg/Svg3";

const recentPatients = [
  {
    id: 1,
    profile: <Svg3 />,
    name: " Arumi Nelson",
    time: "08.00 - 08.30 am ",
  },

  {
    id: 2,
    profile: <Svg3 />,
    name: " Wiliam Marchel",
    time: " 08.30 - 09.10 am",
  },
  {
    id: 3,
    profile: <Svg3 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
  },
];

const RecentPatient = () => {
  return (
    <div className=" recent_patients_wrapper">
      <h4> Recent Patient</h4>
      <div className="recent_pateint">
        {recentPatients.map((item) => (
          <div className="recent_patient_container">
            <div className="patient_profile_container">
              <div className="patient_profile">{item.profile}</div>
              <div className="pateint_detail">
                <h6>{item.name}</h6>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPatient;
