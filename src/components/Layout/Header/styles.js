import styled from "styled-components";

import { v } from "../../../styles/variables";

export const Nav = styled.div`
  background: ${({ theme }) => theme.bgSecondary};
  background: ${({ scrollNav }) =>
    scrollNav ? "theme.bgSecondary" : "transparent"};
  color: ${({ theme }) => theme.textSecondary};
`;

export const NavbarContainer = styled.div`
  height: ${v.headerHeight};
  max-width: 1920px;
  display: flex;
  align-items: center;
  padding: 0 ${v.mdSpacing};
  justify-content: space-between;
`;

export const NavLogo = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const SAttribute = styled.a`
  color: ${({ theme }) => theme.primary};
`;
