import { Container } from "../../styles/GlobalStyles";
import * as S from "./BannerStyled";

const Banner = () => (
  <S.Imagem>
    <Container>
      <S.Title>Marvel's Spider-Man 2 PS5</S.Title>
      <S.Prices>De <span>R$349,90</span><br />
        por apena R$149,99
      </S.Prices>
    </Container>
  </S.Imagem>
)

export default Banner;
