import styled from "styled-components";
import { TagContainer } from "../Tag/TagStyled";
import { colors, Container } from "../../styles/GlobalStyles";

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-weight: bold;

  &::after{
      position: absolute;
      background-color: ${colors.black};
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      opacity: 70%;
    }

  ${Container}{
    z-index: 1;
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${TagContainer}{
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

span{
  text-decoration: line-through;
}
`
