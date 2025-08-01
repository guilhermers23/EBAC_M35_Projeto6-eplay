import { BrowserRouter, Route, Routes } from "react-router";
import Banner from "./components/Banner";
import ProductList from "./containers/ProductList";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
          <Banner />
          <ProductList title="Promoções" background="black" />
          <ProductList title="Em Breve" background="gray" />
        </>
      } />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
