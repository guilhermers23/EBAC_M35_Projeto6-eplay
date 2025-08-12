import { useEffect, useState } from "react";
import type { IGame } from "../../interfaces/IGame";
import { getFeaturedGames } from "../../services/gamesService";
import useAttributesGames from "../../hooks/useAttributesGames";
import Button from "../Button";
import Tag from "../Tag";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./BannerStyled";

const Banner = () => {
  const [gameDestaque, setGameDestaque] = useState<IGame>();
  const { formatPrice } = useAttributesGames()

  const getGameFeatured = async () => {
    try {
      const games = (await getFeaturedGames()).data;
      setGameDestaque(games);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => { getGameFeatured() }, []);

  if (!gameDestaque) {
    return <h1>Carregando...</h1>
  };

  return (
    <S.Imagem url={gameDestaque.media.cover}>
      <Container>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{gameDestaque.name}</S.Title>
          <S.Prices>De <span>R$ {formatPrice(gameDestaque.prices.old)}</span><br />
            Por apenas R$ {formatPrice(gameDestaque.prices.current)}
          </S.Prices>
        </div>
        <Button type="link" to="/produtos" title="Aproveitar oferta">Aproveitar</Button>
      </Container>
    </S.Imagem>
  )
};

export default Banner;
