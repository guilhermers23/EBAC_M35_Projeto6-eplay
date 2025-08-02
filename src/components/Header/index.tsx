import { Link, Outlet } from "react-router";
import logo from "../../assets/imgs/logo.svg";
import cart from "../../assets/imgs/carrinho.svg";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./HeaderStyled";
import Footer from "../Footer";

const Header = () => (
  <>
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

        <S.LinkCart href="#">
          0 - Produtos
          <img src={cart} alt="Cart" />
        </S.LinkCart>
      </S.HeaderBar>
    </Container>

    <Outlet />
    <Footer />
  </>
);

export default Header;
