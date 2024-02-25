import React from "react";
import Svg7 from "../../../assets/svg/Svg7";
import { LuChevronRight } from "react-icons/lu";

const patientlist = [
  {
    id: 1,
    profile: <Svg7 />,
    name: " Arumi Nelson",
    time: "08.00 - 08.30 am ",
    btn: <LuChevronRight />,
  },

  {
    id: 2,
    profile: <Svg7 />,
    name: " Wiliam Marchel",
    time: " 08.30 - 09.10 am",
    btn: <LuChevronRight />,
  },
  {
    id: 3,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  },

  {
    id: 4,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  },
  {
    id: 5,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  },
  {
    id: 6,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  }, {
    id: 7,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  }, {
    id: 7,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  }, {
    id: 9,
    profile: <Svg7 />,
    name: "Jefri Mikael ",
    time: "09.10 - 10.20 am ",
    btn: <LuChevronRight />,
  },
];

const TotalPatients = () => {
  return (
    <div className="patient_wrapper">
      <div className="patient_container">
        <div className="patient_box">
          <h4>Monday, 16 Jan 2023</h4>
          <h3>150 Patient</h3>
        </div>
        <div className="patient_list">
          {patientlist.map((item) => (
            <div className="patient_list_wrapper">
              <div className="patient_list_container">
                {item.profile}
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.time}</p>
                </div>
              </div>
<button className="patient_list_btn">
{item.btn}
</button>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalPatients;
