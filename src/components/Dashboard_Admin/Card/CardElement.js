import styled from "styled-components";

export const CompactCard = styled.div`
  display: flex;
  flex: 1;
  height: 7rem !important;
  border-radius: 0.7rem;
  color: white;
  padding: 1rem;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: none !important;
  }
`;

/* radial bar */
export const RadialBar = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
`;

export const CircularProgressbar = styled.div`
  width: 4rem !important;
  overflow: visible;
`;

export const RadialBarspan = styled.span`
  font-size: 17px;
  font-weight: bold;
`;

/* sideDetail*/
export const Detail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Detailspan1 = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
export const Detailspan2 = styled.span`
  font-size: 12px;
`;

/* ExpandedCard */
export const ExpandedCard = styled.div`
  position: absolute;
  width: 60%;
  height: 70vh;
  z-index: 9;
  left: 13rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  @media screen and (max-width: 1200px) {
    top: 2rem;
    height: 70vh;
    left: 6rem;
  }

  @media screen and (max-width: 768px) {
    top: 8rem;
    height: 50%;
    left: 25px;
    width: 80%;
  }
`;

export const ExpandedCardspan1 = styled.span`
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-shadow: 0px 0px 15px white;
`;
export const ExpandedCardspan2 = styled.span`
  color: rgb(236, 236, 236);
  font-size: 15px;
`;

export const ChartContainer = styled.div`
  width: 70%;
`;
