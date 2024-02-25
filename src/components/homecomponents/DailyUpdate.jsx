import React from "react";
import Svg1 from "../../assets/svg/Svg1";
import Svg2 from "../../assets/svg/Svg2";
import Svg4 from "../../assets/svg/Svg4";
import Svg5 from "../../assets/svg/Svg5";
import Svg6 from "../../assets/svg/Svg6";
import Svg8 from "../../assets/svg/Svg8";
import Svg9 from "../../assets/svg/Svg9";
import Svg10 from "../../assets/svg/Svg10";

const dailydata = [
  {
    id: 1,
    img: <Svg1 />,
    title: "Patient",
    graph: <Svg2 />,
    count: "1.856",
    lastUpdate: "Last 7 days",
  },

  {
    id: 2,
    img: <Svg4 />,
    title: "Inject",
    graph: <Svg9 />,
    count: "250",
    lastUpdate: "Last 7 days",
  },
  {
    id: 3,
    img: <Svg5 />,
    title: "Surgery",
    graph: <Svg8 />,
    count: "228",
    lastUpdate: "Last 7 days",
  },
  {
    id: 4,
    img: <Svg6 />,
    title: "Report",
    graph: <Svg10 />,
    count: "870",
    lastUpdate: "Last 7 days",
  },
];

const DailyUpdate = () => {
  return (
    <div className="daily_Update_wrapper">
      {dailydata.map((item) => (
        <div className="daily_update">
          <div className="daily_update_container">
            <div className="daily_update_box">
              {item.img}
              <h6>{item.title}</h6>
              <h5>{item.count}</h5>
            </div>
            <div className="update_graph">{item.graph}</div>
          </div>
          <div>
            <p>{item.lastUpdate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyUpdate;
