import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <Cart />
  </>
);

export default Layout;
