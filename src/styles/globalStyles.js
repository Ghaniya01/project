import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background:linear-gradient(
    106.37deg,
    #82A4E3 29.63%,
    #2255DC 51.55%,
    #C3D7F9 90.85%
  );
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', monospace;
        letter-spacing: .3px;
    }
`;
