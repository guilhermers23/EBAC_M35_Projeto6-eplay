import * as S from "./HeaderStyled";
import logo from "../../assets/imgs/logo.svg";
import cart from "../../assets/imgs/carrinho.svg";

const Header = () => (
  <S.HeaderBar>
    <S.NavbarHeader>
      <img src={logo} alt="Logo EPLAY" />
      <nav>
        <S.Links>
          <li><a href="#">Categoria</a></li>
          <li><a href="#">Novidade</a></li>
          <li><a href="#">Promoções</a></li>
        </S.Links>
      </nav>
    </S.NavbarHeader>

    <S.LinkCart href="#">
      0 - Produtos
      <img src={cart} alt="Cart" />
    </S.LinkCart>
  </S.HeaderBar>
);

export default Header;
