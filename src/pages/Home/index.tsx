import Banner from "../../components/Banner";
import ProductList from "../../containers/ProductList";
import { GamesEmBreve, GamesPromo } from "../../db/games";

export const Home = () => (
  <>
    <Banner />
    <ProductList games={GamesPromo} title="Promoções" background="black" />
    <ProductList games={GamesEmBreve} title="Em Breve" background="gray" />
  </>
);
