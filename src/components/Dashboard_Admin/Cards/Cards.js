import React from "react";
import { CardsContainer, ParentContainer } from "./CardsElement";
import { cardsData } from "../Data/data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <CardsContainer>
      {cardsData.map((card, id) => {
        return (
          <ParentContainer key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </ParentContainer>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
