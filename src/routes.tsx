import { BrowserRouter, Route, Routes } from "react-router";
import Banner from "./components/Banner";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Banner />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
