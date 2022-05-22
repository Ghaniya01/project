import React from "react";
import { Button } from "../ButtonElements";
import {
  CardContainer,
  CardWrapper,
  CardHeader,
  CardTitle,
  CardFooter,
  Cardh3,
  Img,
  Img1,
  ImgWrap,
  ButtonWrap,
  CardWrap,
  CardUl,
  CardLi,
} from "./Cardelements";

const Card = ({ topline, img, alt }) => {
  return (
    <>
      <CardContainer>
        <CardWrap>
          <CardWrapper>
            <CardHeader>
              <CardTitle>
                <Cardh3>{topline}</Cardh3>
              </CardTitle>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </CardHeader>

            <CardFooter>
              <Img1 src={img} alt={alt} />
              <CardUl>
                <CardLi>Name</CardLi>
                <CardLi>ID Number</CardLi>
              </CardUl>
            </CardFooter>
          </CardWrapper>
          <CardWrapper>
            <CardHeader>
              <CardTitle>
                <Cardh3>{topline}</Cardh3>
              </CardTitle>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </CardHeader>

            <CardFooter>
              <Img1 src={img} alt={alt} />
              <ul>
                <li>Name</li>
                <li>ID Number</li>
              </ul>
            </CardFooter>
          </CardWrapper>
        </CardWrap>

        <ButtonWrap>
          <Button>Download</Button>
        </ButtonWrap>
      </CardContainer>
    </>
  );
};

export default Card;
