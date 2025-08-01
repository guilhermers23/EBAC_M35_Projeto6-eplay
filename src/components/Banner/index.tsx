import { Container } from "../../styles/GlobalStyles";
import Button from "../Button";
import Tag from "../Tag";
import * as S from "./BannerStyled";

const Banner = () => (
  <S.Imagem>
    <Container>
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <S.Title>Marvel's Spider-Man 2 PS5</S.Title>
        <S.Prices>De <span>R$349,90</span><br />
          por apena R$149,99
        </S.Prices>
      </div>
      <Button type="link" to="/produtos" title="Aproveitar oferta">Aproveitar</Button>
    </Container>
  </S.Imagem>
)

export default Banner;
