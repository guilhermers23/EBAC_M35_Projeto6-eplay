import { Link } from "react-router";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./FooterStyled";

const currentDate = new Date().getFullYear();

const Footer = () => (
  <S.Footer>
    <Container>
      <S.SectionFooter>
        <S.Title>Categoria</S.Title>
        <S.List>
          <Link to="/"><li>RPG</li></Link>
          <Link to="/"><li>Ação</li></Link>
          <Link to="/"><li>Aventura</li></Link>
          <Link to="/"><li>Esportes</li></Link>
          <Link to="/"><li>Simulação</li></Link>
          <Link to="/"><li>Estratégia</li></Link>
          <Link to="/"><li>FPS</li></Link>
        </S.List>
      </S.SectionFooter>
      <S.SectionFooter>
        <S.Title>Acesso Rápido</S.Title>
        <S.List>
          <Link to="/"><li>Novidades</li></Link>
          <Link to="/"><li>Promoções</li></Link>
          <Link to="/"><li>Em breve</li></Link>
        </S.List>
      </S.SectionFooter>
      <p>{currentDate} - © E-PLAY Todos os direitos reservados</p>
    </Container>
  </S.Footer>
);

export default Footer;
