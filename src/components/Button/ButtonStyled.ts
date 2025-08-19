import { colors } from './../../styles/GlobalStyles';
import styled from "styled-components";
import { Link } from "react-router";
import type { PropsButton } from '.';

export const Button = styled.button<PropsButton>`
  border: 2px solid;
  border-color: ${({ variantbutton }) => (variantbutton === "primary" ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${({ variantbutton }) => (variantbutton === "primary" ? colors.green : 'transparent')} ;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
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
