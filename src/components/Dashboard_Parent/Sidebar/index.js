import React, { useState } from "react";

import {
  SidebarLogo,
  SidebarCont,
  SidebarMenu,
  SidebarItem,
  SidebarItemactive,
  SidebarSpan,
  Bars,
} from "../Sidebar/SidebarElement";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/data";

const SidebarDash = () => {
  const [expanded, setExpaned] = useState(true);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <Bars
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </Bars>
      <SidebarCont
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <SidebarLogo to="/"> DigiSmart</SidebarLogo>
        <SidebarMenu>
          {SidebarData.map((item, index) => {
            return (
              <SidebarItemactive key={index}>
                <item.icon />
                <SidebarSpan>{item.heading}</SidebarSpan>
              </SidebarItemactive>
            );
          })}
          <SidebarItem>
            <UilSignOutAlt />
          </SidebarItem>
        </SidebarMenu>
      </SidebarCont>
    </>
  );
};

export default SidebarDash;
