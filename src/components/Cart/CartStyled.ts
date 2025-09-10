import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Button } from "../Button/ButtonStyled";
import { TagContainer } from "../Tag/TagStyled";
import closeIcon from "../../assets/imgs/close.png";

type Props = { isopen: boolean };

export const CartContainer = styled.div<Props>`
  display: ${props => props.isopen === true ? "flex" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
`

export const Siderbar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1;
  padding: 40px 16px;
  max-width: 360px;
  width: 100%;
  ${Button}{
    max-width: 100%;
  width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;
  span{
    display: block;
    font-size: 12px;
    color: ${colors.ligthGray};
  }
`

export const Amount = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.ligthGray};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.white};
  p{
    margin-bottom: 8px;
  }

  img{
    width: 100%;
  }
`
