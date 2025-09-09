import Banner from "../../components/Banner";
import ProductList from "../../containers/ProductList";
import { useGetComingSoonGamesQuery, useGetSaleGamesQuery } from "../../services/api";

export const Home = () => {
  const { data: gamesSale, isLoading: isLoadingSale } = useGetSaleGamesQuery();
  const { data: gamesComingSoon, isLoading: isLoadingSoon } = useGetComingSoonGamesQuery();

  return (
    <>
      <Banner />
      <ProductList title="Promoções"
        games={gamesSale}
        background="gray"
        isLoading={isLoadingSale}
        sectionid="on-sale" />
      <ProductList title="Em Breve"
        games={gamesComingSoon}
        background="black"
        isLoading={isLoadingSoon}
        sectionid="coming-soon" />
    </>
  )
};
