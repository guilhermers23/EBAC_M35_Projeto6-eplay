import type { JSX } from "react";
import * as S from "./CardStyled";
type PropsCard = { children: JSX.Element, title: string };

const Card = ({ children, title }: PropsCard) => {
  return (
    <S.CardContainer>
      <h2>{title}</h2>
      {children}
    </S.CardContainer>
  )
};

export default Card
