import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  gray2: '#A3A3A3',
  green: '#10AC84'
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px"
};

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Rubik", sans-serif;

  a{
    color: #FFF;
  }

  :visited{
    color: #FFF;
  }
}

body{
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}
`

export const Overlay = styled.div`
   top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`

export default GlobalStyles;
