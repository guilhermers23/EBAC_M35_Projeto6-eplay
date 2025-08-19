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
        <ProductList games={gamesSale} title="Promoções" background="black" />
        <ProductList games={gamesComingSoon} title="Em Breve" background="gray" />
      </>
    )
  }
  return <h3>Carregando...</h3>
};
