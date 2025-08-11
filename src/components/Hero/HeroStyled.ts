import styled from "styled-components";
import { colors, Container } from "../../styles/GlobalStyles";

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-image: url("https://i.ytimg.com/vi/u5rWBgBjDsc/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 16px;

  &::after{
    position: absolute;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 56%;
  }

  ${Container}{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2{
    font-size: 32px;
  }

  p{
    font-size: 18px;
    margin: 16px 0;

    span{
      text-decoration: line-through;
    }
  }
`
