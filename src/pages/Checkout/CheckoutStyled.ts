import styled from "styled-components";
import { breakpoints, colors } from "../../styles/GlobalStyles";
type PropsTabButton = { isActive: boolean };

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  @media (max-width:${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGrup = styled.div`
  flex: auto;

  label{
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input, select{
    background-color: ${colors.white};
    border: 2px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error{
      border: 1px solid ${colors.red};
    }
  }

  p{
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width:${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<PropsTabButton>`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${props => props.isActive ? colors.black : colors.green};
  height: 32px;
  border: none;
  padding: 0 8px;
  cursor: pointer;
`

export const Payments = styled.section`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

   @media (max-width:${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    ${TabButton}{
      width: 100%;
      text-align: center;
      padding: 20px 20px;
    }
  }
`
