import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";
import { parseToBrl } from "../../utils";
import Button from "../Button";
import ItemCart from "./ItemCart";
import { Overlay } from "../../styles/GlobalStyles";
import * as S from "./CartStyled";

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const plural = items.length === 1 ? "jogo" : "jogos";
  const close = () => dispatch(closeCart());

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.prices.current!)
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
              price={parseToBrl(game.prices.current)} />
          )}
        </ul>
        <S.Amount>{items.length} {plural} no carrinho</S.Amount>
        <S.Prices>Total {parseToBrl(getTotalPrice())}
          <span>Em até 6x sem juros</span></S.Prices>
        <Button title="Continuar compra" variantbutton="primary"
          type="button">Continuar com a compra</Button>
      </S.Siderbar>
    </S.CartContainer>
  )
};

export default Cart;
