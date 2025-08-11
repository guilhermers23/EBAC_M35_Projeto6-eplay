import { Container } from "../../styles/GlobalStyles";
import Button from "../Button";
import Tag from "../Tag";
import * as S from "./HeroStyled";

const Hero = () => {
  return (
    <S.Banner>
      <Container>
        <div>
          <Tag>Corrida</Tag>
          <Tag>PS5</Tag>
        </div>

        <S.Infos>
          <h2>F1® 25</h2>
          <p>De <span>R$ 349,90 </span> <br />
            Por R$ 249,90</p>
          <Button title="Adiconar item ao carrinho"
            type="button"
            variantbutton="primary">Adicionar ao carrinho</Button>
        </S.Infos>
      </Container>
    </S.Banner>
  )
};

export default Hero;
