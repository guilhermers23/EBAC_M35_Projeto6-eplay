import { useDispatch } from "react-redux";
import type { IGame } from "../../interfaces/IGame";
import useAttributesGames from "../../hooks/useAttributesGames";
import { addItemCart, openCart } from "../../store/reducers/cart";
import Button from "../Button";
import Tag from "../Tag";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./HeroStyled";

type PropsHero = { game: IGame };

const Hero = ({ game }: PropsHero) => {
  const dispacth = useDispatch();
  const { formatPrice } = useAttributesGames();

  const addToCart = () => {
    dispacth(addItemCart(game))
    dispacth(openCart())
  };

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <Container>
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount &&
              <>
                De < span > R$ {formatPrice(game.prices.old)} </span> <br />
              </>
            }
            {game.prices.current ? <>Por {formatPrice(game.prices.current)}</> : <>Em Breve</>}
          </p>
          <Button title="Adiconar item ao carrinho"
            type="button"
            variantbutton="primary"
            onClick={addToCart}>Adicionar ao carrinho</Button>
        </S.Infos>
      </Container>
    </S.Banner >
  )
};

export default Hero;
