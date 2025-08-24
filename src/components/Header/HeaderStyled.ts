import { breakpoints, colors } from './../../styles/GlobalStyles';
import styled from "styled-components";

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a{
    color: ${colors.white};
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
`

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-left: 40px;
`

export const ButtonCart = styled.a`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 10px;
 cursor: pointer;
`
