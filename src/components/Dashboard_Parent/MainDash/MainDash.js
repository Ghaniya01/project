import React from "react";
import { MainDashboard } from "./MainDashElement";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <MainDashboard>
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </MainDashboard>
  );
};

export default MainDash;
