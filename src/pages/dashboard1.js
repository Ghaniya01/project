import React, { useState } from "react";
import Dashboards from "../components/Dashboards";
import { dashboard1 } from "../components/Dashboards/data";

import ScrollToTop from "../components/ScrollToTop";

const Dashboard1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Dashboards {...dashboard1} />
      <ScrollToTop />
    </>
  );
};

export default Dashboard1;
