import { Overlay } from "../../styles/GlobalStyles";
import Button from "../Button";
import ItemCart from "./ItemCart";
import * as S from "./CartStyled";

const Cart = () => {
  return (
    <S.CartContainer>
      <Overlay />
      <S.Siderbar>
        <ul>
          <ItemCart />
          <ItemCart />
        </ul>
        <S.Amount>3 jogo(s) no carrinho</S.Amount>
        <S.Prices>Total R$ 255,99 <span>Em até 6x sem juros</span></S.Prices>
        <Button title="Continuar compra" variantbutton="primary"
          type="button">Continuar com a compra</Button>
      </S.Siderbar>
    </S.CartContainer>
  )
};

export default Cart;
