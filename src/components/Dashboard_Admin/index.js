import React from "react";
import { DashboardCont, DashboardGlass } from "./DashboardElement";
import MainDash from "./MainDash/MainDash";
import SidebarDash from "./Sidebar";

const DashboardA = () => {
  return (
    <DashboardCont>
      <DashboardGlass>
        <SidebarDash />
        <MainDash />
      </DashboardGlass>
    </DashboardCont>
  );
};

export default DashboardA;
