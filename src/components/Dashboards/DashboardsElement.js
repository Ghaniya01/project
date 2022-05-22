import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardContainer = styled.div`
color: blue;
background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

@media screen and (max-width: 768px){
    padding: 100px 0;

`;

export const DashboardWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
height: 860px;
width: 800px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;


@media screen and (max-width: 500px){
    width: 400px;
`;
export const Balance = styled.div`
  background: #82a4e3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  padding-top: 30px;
  margin-top: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  align-items: center;
  max-height: 100px;

  @media screen and (max-width: 500px){
   margin-top: 50px;
`;

export const Balanceh1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;

`;

export const Recharge = styled.div`
  background: #82a4e3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  align-items: center;
  max-height: 140px;
`;

export const RechargeLabel = styled.label`
  margin-bottom: 8px;
  font-size: 24px;
  color: #fff;
`;

export const Rechargeinput = styled.input`
  padding: 16px 16px;
  width: 300px;
  border-radius: 4px;
  border: none;
  margin-bottom: 20px;
  text-align: center;
`;

export const Pay = styled.div`
  background: #82a4e3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  align-items: center;
  max-height: 150px;
  max-width: 800px;

  @media screen and (max-width: 480px) {
    max-width: 500px;
  }
`;

export const PayLabel = styled.label`
  margin-bottom: 8px;
  font-size: 24px;
  color: #fff;
`;

export const Payinput = styled.input`
  padding: 16px 16px;
  width: 300px;
  border-radius: 4px;
  border: none;
  margin-bottom: 20px;
  text-align: center;
`;

export const TransactionHistory = styled.div`
  background-color: white;
  margin-top: 30px;
`;

export const Transactionh1 = styled.h1`
  color: black;
  text-align: center;
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
