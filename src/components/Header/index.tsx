import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../store/reducers/cart";
import logo from "../../assets/imgs/logo.svg";
import cart from "../../assets/imgs/carrinho.svg";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./HeaderStyled";
import type { RootReducer } from "../../store";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const plural = items.length <= 1 ? "Produto" : "Produtos";
  const open = () => dispatch(openCart());

  return (
    <Container>
      <S.HeaderBar>
        <S.NavbarHeader>
          <Link to="/">
            <img src={logo} alt="Logo EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <li><Link to="/category">Categoria</Link></li>
              <li><a href="#">Novidade</a></li>
              <li><a href="#">Promoções</a></li>
            </S.Links>
          </nav>
        </S.NavbarHeader>

        <S.ButtonCart onClick={open}>
          {items.length} - {plural}
          <img src={cart} alt="Cart" />
        </S.ButtonCart>
      </S.HeaderBar>
    </Container>
  )
};

export default Header;
