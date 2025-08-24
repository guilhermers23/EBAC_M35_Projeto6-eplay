import styled from "styled-components";
import { colors, Container, Overlay } from "../../styles/GlobalStyles";

type PropsVisible = { visible: boolean };

export const ListImg = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
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

export const Modal = styled.div<PropsVisible>`
  display: ${({ visible }) => visible === true ? "flex" : "none"};
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

    >img{
      cursor: pointer;
    }

    h4{
      font-size: 18px;
      font-weight: bold;
    }
  }

  >img {
    width: 100%;
  }

  img, iframe{
    display: block;
    max-width: 100%;
  }

  iframe{
    width: 100%;
    height: 480px;
    border: none;
  }
`
