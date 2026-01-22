import Banner from "../../components/Banner";
import ProductList from "../../containers/ProductList";
import { useGetAllGamesQuery } from "../../services/api";

export const Home = () => {
  const { data: games, isLoading } = useGetAllGamesQuery();
  const onSaleGames = games?.filter((game) => game.tag === "on-sale");
  const gamesComingSoon = games?.filter((game) => game.tag === "ComingSoonGames");

  return (
    <>
      <Banner />
      <ProductList title="Promoções"
        games={onSaleGames}
        background="gray"
        isLoading={isLoading}
        sectionid="on-sale" />
      <ProductList title="Em Breve"
        games={gamesComingSoon}
        background="black"
        isLoading={isLoading}
        sectionid="coming-soon" />
    </>
  )
};
