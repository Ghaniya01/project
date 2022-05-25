import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";
export const FormCont = styled.div`
  background: linear-gradient(
    106.37deg,
    #ffe1bc 29.63%,
    #ffcfd1 51.55%,
    #f3c6f1 90.85%
  );
`;

export const SForm = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.bg2};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  margin-top: 90px;
`;

export const SFormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const SFormControl = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

export const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 14px;
  border-radius: ${v.borderRadius};
`;

export const SButton = styled.button`
  ${btnReset};
  width: 100%;
  background: #82a4e3;
  color: ${({ theme }) => theme.textSecondary};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${v.borderRadius};
  margin-top: ${v.mdSpacing};
  cursor: pointer;
`;

export const SRedirect = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${v.smSpacing};
`;
export const SRedirectLabel = styled.span`
  color: ${({ theme }) => theme.text2};
`;

export const SRedirectLink = styled(Link)`
  color: #82a4e3;
`;
