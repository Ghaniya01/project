import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import {
  CompactCard,
  RadialBar,
  RadialBarspan,
  Detailspan1,
  Detailspan2,
  ExpandedCard,
  ChartContainer,
  Detail,
  ExpandedCardspan1,
  ExpandedCardspan2,
} from "./CardElement";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <Expanded param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <Compact param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function Compact({ param, setExpanded }) {
  const Png = param.png;
  return (
    <CompactCard
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <RadialBar>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <RadialBarspan>{param.title}</RadialBarspan>
      </RadialBar>
      <Detail>
        <Png />
        <Detailspan1>${param.value}</Detailspan1>
        <Detailspan2>Last 24 hours</Detailspan2>
      </Detail>
    </CompactCard>
  );
}

// Expanded Card
function Expanded({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <ExpandedCard
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <ExpandedCardspan1>{param.title}</ExpandedCardspan1>
      <ChartContainer>
        <Chart options={data.options} series={param.series} type="area" />
      </ChartContainer>
      <ExpandedCardspan2>Last 24 hours</ExpandedCardspan2>
    </ExpandedCard>
  );
}

export default Card;
