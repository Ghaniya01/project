import styled from "styled-components";

export const MainDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
