import type { IGame } from "../../interfaces/IGame";
import { getAllTagsGames } from "../../utils";
import Product from "../../components/Product";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import * as S from "./ProductListStyled";

export type PropsProductList = { title: string; background: "gray" | "black"; games?: IGame[]; sectionid?: string, isLoading: boolean };

const ProductList = ({ title, background, games, sectionid, isLoading }: PropsProductList) => {
  if (isLoading) return <Loader />;

  return (
    <Section title={title} background={background} id={sectionid}>
      <S.List>
        {games && games.map((game) => (
          <Product key={game.id}
            title={game.name}
            cover={game.media.thumbnail}
            plataform={game.details.system}
            category={game.details.category}
            description={game.description}
            infos={getAllTagsGames(game)}
            id={game.id} />
        ))}
      </S.List>
    </Section>
  )
};

export default ProductList;
