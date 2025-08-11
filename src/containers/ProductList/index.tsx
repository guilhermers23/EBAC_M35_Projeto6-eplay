import { Link } from "react-router";
import Product from "../../components/Product";
import Section from "../../components/Section";
import type GameModel from "../../models/Game";
import * as S from "./ProductListStyled";

export type PropsProductList = { title: string; background: "gray" | "black"; games: GameModel[] };
const ProductList = ({ title, background, games }: PropsProductList) => {
  return (
    <Section title={title} background={background}>
      <S.List>
        {games.map((game) => (
          <Link to={`/product/${game.id}`}>
            <Product key={game.id}
              title={game.title} cover={game.cover}
              plataform={game.plataform} category={game.category}
              description={game.description} infos={game.infos} />
          </Link>
        ))}
      </S.List>
    </Section>
  )
};

export default ProductList;
