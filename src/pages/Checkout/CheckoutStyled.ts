import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGrup = styled.div`
  flex: auto;

  label{
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input{
    background-color: ${colors.white};
    border: 2px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }

  p{
    font-size: 14px;
    line-height: 22px;
  }
`
