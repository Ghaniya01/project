import styled from "styled-components";

export const MuiTableRow = styled.table`
  padding: 10px;
  font-weight: bold !important;
`;
export const MuiTableHead = styled.table`
  font-weight: bold !important;
`;

export const Tables = styled.table`
  @media screen and (max-width: 1200px) {
    width: 90%;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
  }
`;

export const Status = styled.span`
  padding: 8px;
  border-radius: 9px;
`;

export const Details = styled.div`
  color: #00b5ff !important;
`;
