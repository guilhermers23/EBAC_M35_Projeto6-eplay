import Product from "../../components/Product";
import type GameModel from "../../models/Game";
import { Container } from "../../styles/GlobalStyles";
import * as S from "./ProductListStyled";

export type PropsProductList = { title: string; background: "gray" | "black"; games: GameModel[] };
const ProductList = ({ title, background, games }: PropsProductList) => {
  return (
    <S.SectionProducts background={background}>
      <Container>
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <Product key={game.id}
              title={game.title} cover={game.cover}
              plataform={game.plataform} category={game.category}
              description={game.description} infos={game.infos} />
          ))}
        </S.List>
      </Container>
    </S.SectionProducts>
  )
};

export default ProductList;
