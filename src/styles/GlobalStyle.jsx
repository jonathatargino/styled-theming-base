import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
`
export default GlobalStyle;
