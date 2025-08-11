import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Card } from "../../components/Product/ProductStyled";
import type { Props } from ".";

export const Section = styled.section<Omit<Props, "title">>`
  padding: 32px 0;
  background-color: ${({ background }) => background === "black" ? colors.black : colors.gray};

  ${Card}{
    background-color: ${({ background }) => background === "black" ? colors.gray : colors.black};
  }

  p{
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
