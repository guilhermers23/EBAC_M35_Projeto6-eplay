import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import type { PropsTag } from ".";


export const TagContainer = styled.div<PropsTag>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${({ size }) => size === "big" ? '16px' : "10px"};
  font-weight: bold;
  padding: ${({ size }) => size === "big" ? "8px 16px" : "4px 6px"};
  border-radius: 8px;
  display: inline-block;
  margin-right: 8px;
`
