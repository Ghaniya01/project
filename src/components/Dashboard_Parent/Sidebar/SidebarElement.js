import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { motion } from "framer-motion";

export const SidebarCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;
  transition: all 300ms ease;

  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 9;
    background: #ffe0e0;
    width: 55%;
    padding-right: 1rem;
    height: 100%;
  }
`;

export const Bars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 2rem;
    left: 60%;
    background: #ffe0e0;
    padding: 10px;
    border-radius: 10px;
    z-index: 9;
  }
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

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const SidebarMenu = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  margin-top: 2rem;
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
  position: relative;
  margin-top: 6rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    margin-top: 6rem;
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

export const SidebarSpan = styled.span`
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
