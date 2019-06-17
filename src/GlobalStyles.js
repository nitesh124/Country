import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${normalize}
body {
  background: ${props => props.theme.backgroundColor};
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.textColor};
  transition: all .1s ease-out;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default GlobalStyle;
