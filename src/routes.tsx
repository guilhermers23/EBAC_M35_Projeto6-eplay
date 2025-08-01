import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import Header from "./components/Header";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
