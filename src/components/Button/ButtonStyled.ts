import styled from "styled-components";
import { Link } from "react-router";
import { colors } from "../../styles/GlobalStyles";

export const Button = styled.button`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
`
