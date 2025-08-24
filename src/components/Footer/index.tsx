import { HashLink } from "react-router-hash-link";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./FooterStyled";

const currentDate = new Date().getFullYear();

const Footer = () => (
  <S.Footer>
    <Container>
      <S.SectionFooter>
        <S.Title>Categoria</S.Title>
        <S.List>
          <HashLink to="/category#rpg"><li>RPG</li></HashLink>
          <HashLink to="/category#action"><li>Ação</li></HashLink>
          <HashLink to="/category#sports"><li>Esportes</li></HashLink>
          <HashLink to="/category#simulation"><li>Simulação</li></HashLink>
          <HashLink to="/category#figth"><li>Luta</li></HashLink>
        </S.List>
      </S.SectionFooter>
      <S.SectionFooter>
        <S.Title>Acesso Rápido</S.Title>
        <S.List>
          <HashLink to="/#on-sale"><li>Promoções</li></HashLink>
          <HashLink to="/#coming-soon"><li>Em breve</li></HashLink>
        </S.List>
      </S.SectionFooter>
      <p>{currentDate} - © E-PLAY Todos os direitos reservados</p>
    </Container>
  </S.Footer>
);

export default Footer;
