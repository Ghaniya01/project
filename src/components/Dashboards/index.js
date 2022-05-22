import { Button } from "../ButtonElements";
import React, { useState, useEffect } from "react";

import {
  DashboardContainer,
  DashboardWrapper,
  Balance,
  Balanceh1,
  Recharge,
  RechargeLabel,
  Rechargeinput,
  Pay,
  PayLabel,
  Payinput,
  TransactionHistory,
  Transactionh1,
} from "./DashboardsElement";

const Dashboards = ({ balance, recharge, button, pay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DashboardContainer>
        <DashboardWrapper>
          <Balance>
            <Balanceh1>{balance}</Balanceh1>
          </Balance>
          <Recharge>
            <RechargeLabel>{recharge}</RechargeLabel>
            <Rechargeinput placeholder="Please Enter amount " />

            <Button>{button}</Button>
          </Recharge>

          <Pay>
            <PayLabel>{pay}</PayLabel>
            <Payinput placeholder="Please Enter amount " />
            <Button>{button}</Button>
          </Pay>

          <TransactionHistory>
            <Transactionh1>Transaction history</Transactionh1>
          </TransactionHistory>
        </DashboardWrapper>
      </DashboardContainer>
    </>
  );
};

export default Dashboards;
