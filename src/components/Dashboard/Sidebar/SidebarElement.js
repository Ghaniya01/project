import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SidebarCont = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;
  transition: all 300ms ease;
`;

export const SidebarLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  height: 4%;
  color: black;
`;
export const SidebarMenu = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  margin-left: 2rem;
  position: relative;
  transition: all 300ms ease;
  border-radius: 0.7rem;
  font-size: 14px;
  position: absolute;
  bottom: 2.3rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarItemactive = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  margin-left: 2rem;
  position: relative;
  transition: all 300ms ease;
  border-radius: 0.7rem;
  font-size: 14px;
  background: #f799a354;
  margin-left: 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  ::before {
    content: "";
    width: 8px;
    height: 100%;
    background: #ff919d;
    margin-right: calc(1rem - 8px);
  }
`;

export const SidebarIcon = styled.div``;
export const SidebarSpan = styled.div``;
