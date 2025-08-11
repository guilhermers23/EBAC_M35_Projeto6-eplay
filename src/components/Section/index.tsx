import type { JSX } from "react";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./SectionStyled";

export type Props = {
  title: string;
  background: "black" | "gray"
  children: JSX.Element
};

const Section = ({ title, background, children }: Props) => {
  return (
    <S.Section background={background} >
      <Container>
        <S.Title>{title}</S.Title>
        {children}
      </Container>
    </S.Section>
  )
};

export default Section;
