import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Link } from "react-router";

export const Card = styled(Link)`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  img{
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 1rem;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
