import styled from "styled-components";
import type { PropsProductList } from ".";
import { colors } from "../../styles/GlobalStyles";
import { Card } from "../../components/Product/ProductStyled";

export const SectionProducts = styled.section<Omit<PropsProductList, "title" | "games">>`
  padding: 32px 0;
  background-color: ${({ background }) => background === "black" ? colors.black : colors.gray};

  ${Card}{
    background-color: ${({ background }) => background === "black" ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
