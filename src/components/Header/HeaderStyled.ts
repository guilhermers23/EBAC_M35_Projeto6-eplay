import { breakpoints, colors } from './../../styles/GlobalStyles';
import styled from "styled-components";

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a, span{
    color: ${colors.white};
    font-weight: bold;
  }

  h1{
    line-height: 0;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;
  }
`

export const ButtonCart = styled.span`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 4px;
 cursor: pointer;
 @media (max-width: ${breakpoints.tablet}) {
   span{display: none;}
 }
`

export const Humburger = styled.div`
  width: 32px;
  cursor: pointer;
  span{
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 6px;

    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const NavDesktop = styled.nav`
  @media (max-width: ${breakpoints.tablet}) {
  ${Links}{display: none;}
}
`

export const NavMobile = styled.nav`
display: none;

&.active {
  display: block;
  text-align: center;
  a{
    padding: 8px 0;
    display: block;
  }
}`
