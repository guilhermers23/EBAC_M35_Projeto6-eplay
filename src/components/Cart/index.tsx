import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { closeCart } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";
import useAttributesGames from "../../hooks/useAttributesGames";
import Button from "../Button";
import ItemCart from "./ItemCart";
import { Overlay } from "../../styles/GlobalStyles";
import * as S from "./CartStyled";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const { formatPrice } = useAttributesGames();
  const plural = items.length === 1 ? "jogo" : "jogos";
  const close = () => dispatch(closeCart());

  const goToCheckout = () => {
    navigate("/checkout");
    close();
  };

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      if (currentValue.prices.current) {
        return (acc += currentValue.prices.current)
      }
      return 0;
    }, 0)
  };

  return (
    <S.CartContainer isopen={isOpen}>
      <Overlay onClick={close} />
      <S.Siderbar>
        <ul>
          {items.map(game =>
            <ItemCart key={game.id}
              plataform={game.details.system}
              id={game.id}
              category={game.details.category}
              cover={game.media.thumbnail}
              title={game.name}
              price={formatPrice(game.prices.current)} />
          )}
        </ul>
        <S.Amount>{items.length} {plural} no carrinho</S.Amount>
        <S.Prices>Total {formatPrice(getTotalPrice())}
          <span>Em até 6x sem juros</span></S.Prices>
        <Button title="Continuar compra" variantbutton="primary"
          type="button"
          onClick={goToCheckout}>Continuar com a compra</Button>
      </S.Siderbar>
    </S.CartContainer>
  )
};

export default Cart;
