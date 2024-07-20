import React, { useState } from "react";
import { sideBarData } from "../utils/sideBarData";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";

const iconsRenderer = (icon) => {
  switch (icon) {
    case "LocalShippingIcon":
      return <LocalShippingIcon />;
      break;
    case "PersonIcon":
      return <PersonIcon />;
      break;
    case "ReceiptLongIcon":
      return <ReceiptLongIcon />;
      break;
    case "LogoutIcon":
      return <LogoutIcon />;
      break;
  }
};

const SideBar = () => {
  const [selected, setSelected] = useState("MY MOVES");

  
  return (
    <div className="Sidebar">
      <ul className="SidebarList ">
        {sideBarData.map((item, index) => {
          return (
            <li
              key={index}
              className={(selected == item?.title ? "row selected" : "row")}
            onClick={()=>setSelected(item?.title)}
            >
              <div>{iconsRenderer(item?.icon)}</div>
              <div>{item?.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
