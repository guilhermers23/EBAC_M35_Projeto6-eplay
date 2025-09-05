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
          <li><HashLink to="/category#rpg">RPG</HashLink></li>
          <li><HashLink to="/category#action">Ação</HashLink></li>
          <li><HashLink to="/category#sports">Esportes</HashLink></li>
          <li><HashLink to="/category#simulation">Simulação</HashLink></li>
          <li><HashLink to="/category#figth">Luta</HashLink></li>
        </S.List>
      </S.SectionFooter>
      <S.SectionFooter>
        <S.Title>Acesso Rápido</S.Title>
        <S.List>
          <li><HashLink to="/#on-sale">Promoções</HashLink></li>
          <li><HashLink to="/#coming-soon">Em breve</HashLink></li>
        </S.List>
      </S.SectionFooter>
      <p>{currentDate} - © E-PLAY Todos os direitos reservados</p>
    </Container>
  </S.Footer>
);

export default Footer;
