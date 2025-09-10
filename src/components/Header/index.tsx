import { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";
import logo from "../../assets/imgs/logo.svg";
import cart from "../../assets/imgs/carrinho.svg";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./HeaderStyled";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const plural = items.length <= 1 ? "Produto" : "Produtos";
  const [hambuguerActive, setHambuguerActive] = useState(false);
  const open = () => dispatch(openCart());

  return (
    <Container>
      <S.HeaderBar>
        <S.HeaderRow>
          <S.NavbarHeader>
            <S.Humburger onClick={() => setHambuguerActive(!hambuguerActive)}>
              <span />
              <span />
              <span />
            </S.Humburger>

            <Link to="/">
              <h1>
                <img src={logo} alt="Logo EPLAY" />
              </h1>
            </Link>

            <S.NavDesktop>
              <S.Links>
                <li><Link to="/category">Categoria</Link></li>
                <li><HashLink to="/#coming-soon">Novidade</HashLink></li>
                <li><HashLink to="/#on-sale">Promoções</HashLink></li>
              </S.Links>
            </S.NavDesktop>
          </S.NavbarHeader>

          <S.ButtonCart role="button" onClick={open}>
            {items.length}<span>- {plural}</span>
            <img src={cart} alt="Cart" />
          </S.ButtonCart>

        </S.HeaderRow>

        <S.NavMobile className={hambuguerActive ? "active" : ""}>
          <S.Links>
            <li><Link to="/category" onClick={() => setHambuguerActive(false)}>Categoria</Link></li>
            <li><HashLink to="/#coming-soon" onClick={() => setHambuguerActive(false)}>Novidade</HashLink></li>
            <li><HashLink to="/#on-sale" onClick={() => setHambuguerActive(false)}>Promoções</HashLink></li>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </Container >
  )
};

export default Header;
