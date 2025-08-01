import styled from "styled-components";
import { TagContainer } from "../Tag/TagStyled";
import { Container } from "../../styles/GlobalStyles";

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url("https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/97e9f5fa6e50c185d249956c6f198a2652a9217e69a59ecd.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-weight: bold;

  ${Container}{
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
