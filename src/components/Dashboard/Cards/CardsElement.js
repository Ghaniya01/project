import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ParentContainer = styled.div`
  width: 100%;
`;
