import React from "react";
import { MainDashboard } from "./MainDashElement";
import Cards from "../Cards/Cards";

const MainDash = () => {
  return (
    <MainDashboard>
      <h1>Dashboard</h1>
      <Cards />
    </MainDashboard>
  );
};

export default MainDash;
