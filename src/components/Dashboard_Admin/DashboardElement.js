import styled from "styled-components";

export const DashboardCont = styled.div`
  background: linear-gradient(
    106.37deg,
    #ffe1bc 29.63%,
    #ffcfd1 51.55%,
    #f3c6f1 90.85%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", monospace;
`;

export const DashboardGlass = styled.div`
  display: grid;
  height: 97%;
  width: 97%;
  background: rgba(255, 255, 255, 0.54);
  border-radius: 2rem;
  gap: 16px;
  grid-template-columns: 15rem auto;
  overflow: hidden;
  font-family: "Roboto", monospace;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 15% auto;
    overflow-y: scroll;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
