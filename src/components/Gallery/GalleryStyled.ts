import styled from "styled-components";
import { colors, Container } from "../../styles/GlobalStyles";

export const ListImg = styled.ul`
  display: flex;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  opacity: 0;
  transition: opacity .5s ease;
`

export const Item = styled.li`
  position: relative;
  margin-right: 16px;

  > img{
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover{
    ${Action}{
      opacity: 1;
      transition: opacity .5s ease;
    }
  }
`

export const Overlay = styled.div`
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0,0,0,0.7);
`

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${Overlay}{
    position: absolute;
  }
`

export const ModalContent = styled(Container)`
  position: relative;
  max-width: 960px;
  z-index: 1;
  header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4{
      font-size: 18px;
      font-weight: bold;
    }
  }
  img{
    display: block;
    max-width: 100%;
  }
`
