import ProductList from "../../containers/ProductList";
import { GamesCorrida, GamesEmBreve, GamesPromo } from "../../db/games";

export const Category = () => (
  <>
    <ProductList games={GamesCorrida} title="Corrida" background="black" />
    <ProductList games={GamesEmBreve} title="Ação" background="gray" />
    <ProductList games={GamesPromo} title="RPJ" background="black" />
    <ProductList games={GamesEmBreve} title="FPS" background="gray" />
  </>
);
