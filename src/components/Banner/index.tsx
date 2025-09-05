import useAttributesGames from "../../hooks/useAttributesGames";
import { useGetFeaturedGamesQuery } from "../../services/api";
import Button from "../Button";
import Tag from "../Tag";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./BannerStyled";

const Banner = () => {
  const { data: gameDestaque } = useGetFeaturedGamesQuery();
  const { formatPrice } = useAttributesGames();

  if (!gameDestaque) {
    return <h1>Carregando...</h1>
  };

  return (
    <S.Imagem style={{ backgroundImage: `url(${gameDestaque.media.cover})` }}>
      <Container>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{gameDestaque.name}</S.Title>
          <S.Prices>De <span>R$ {formatPrice(gameDestaque.prices.old)}</span><br />
            Por apenas R$ {formatPrice(gameDestaque.prices.current)}
          </S.Prices>
        </div>
        <Button type="link" to={`/product/${gameDestaque.id}`} title="Aproveitar oferta">Aproveitar</Button>
      </Container>
    </S.Imagem>
  )
};

export default Banner;
