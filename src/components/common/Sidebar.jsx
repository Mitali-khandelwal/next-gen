import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { LiaCalendarMinusSolid } from "react-icons/lia";
import { PiChatTeardropTextThin } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

import "../../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar_wrapper">
      <BiMenuAltRight />
      <BiHomeAlt />
      <LiaCalendarMinusSolid />
      <PiChatTeardropTextThin />
      <RiUserLine />
      <IoSettingsOutline />
    </div>
  );
};

export default Sidebar;
