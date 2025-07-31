import { createGlobalStyle } from "styled-components";

const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84'
};

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
}

body{
  background-color: ${colors.black};
  color: ${colors.white};
}
`

export default GlobalStyles;
