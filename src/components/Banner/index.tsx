import { useGetFeaturedGamesQuery } from "../../services/api";
import { parseToBrl } from "../../utils";
import Button from "../Button";
import Loader from "../Loader";
import Tag from "../Tag";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./BannerStyled";

const Banner = () => {
  const { data: gameDestaque } = useGetFeaturedGamesQuery();

  if (!gameDestaque) return <Loader />;

  return (
    <S.Imagem style={{ backgroundImage: `url(${gameDestaque.media.cover})` }}>
      <Container>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{gameDestaque.name}</S.Title>
          <S.Prices>De <span>R$ {parseToBrl(gameDestaque.prices.old)}</span><br />
            Por apenas R$ {parseToBrl(gameDestaque.prices.current)}
          </S.Prices>
        </div>
        <Button type="link" to={`/product/${gameDestaque.id}`} title="Aproveitar oferta">Aproveitar</Button>
      </Container>
    </S.Imagem>
  )
};

export default Banner;
