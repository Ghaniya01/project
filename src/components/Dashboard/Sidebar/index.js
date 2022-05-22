import React, { useState } from "react";
import {
  SidebarLogo,
  SidebarCont,
  SidebarMenu,
  SidebarItem,
  SidebarItemactive,
  SidebarIcon,
  SidebarSpan,
} from "../Sidebar/SidebarElement";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/data";

const SidebarDash = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <SidebarCont>
      <SidebarLogo to="/"> DigiSmart</SidebarLogo>
      <SidebarMenu>
        {SidebarData.map((item, index) => {
          return (
            <SidebarItemactive key={index} onClick={() => setSelected(index)}>
              <item.icon />
              <span>{item.heading}</span>
            </SidebarItemactive>
          );
        })}
        <SidebarItem className="SidebarItem">
          <UilSignOutAlt />
        </SidebarItem>
      </SidebarMenu>
    </SidebarCont>
  );
};

export default SidebarDash;
