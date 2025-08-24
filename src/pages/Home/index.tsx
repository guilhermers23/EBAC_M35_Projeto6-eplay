import Banner from "../../components/Banner";
import ProductList from "../../containers/ProductList";
import { useGetComingSoonGamesQuery, useGetSaleGamesQuery } from "../../services/api";

export const Home = () => {
  const { data: gamesSale } = useGetSaleGamesQuery();
  const { data: gamesComingSoon } = useGetComingSoonGamesQuery();

  if (gamesComingSoon && gamesSale) {
    return (
      <>
        <Banner />
        <ProductList games={gamesSale} title="Promoções" background="black" sectionid="on-sale" />
        <ProductList games={gamesComingSoon} title="Em Breve" background="gray" sectionid="coming-soon" />
      </>
    )
  }
  return <h3>Carregando...</h3>
};
