import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./containers/Layout";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { ProductView } from "./pages/ProductView";
import { Checkout } from "./pages/Checkout";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
