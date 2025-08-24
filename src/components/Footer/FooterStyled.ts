import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: 32px 0;
  font-size: 14px;
`

export const Title = styled.h4`
  font-size: 1rem;
  color: ${colors.white};
  `

export const SectionFooter = styled.section`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  li{
    color: ${colors.gray2};

  }
`
