import { useEffect, useState } from "react";
import type { IGame } from "../../interfaces/IGame";
import { comingSoonGames, saleGames } from "../../services/gamesService";
import Banner from "../../components/Banner";
import ProductList from "../../containers/ProductList";

export const Home = () => {
  const [gamesSale, setGamesSale] = useState<IGame[]>([]);
  const [gamesComingSoon, setGamesComingSoon] = useState<IGame[]>([]);

  const findGames = async () => {
    try {
      setGamesSale((await saleGames()).data);
      setGamesComingSoon((await comingSoonGames()).data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os jogos!")
      console.error(error);
    }
  };

  useEffect(() => { findGames() }, []);

  return (
    <>
      <Banner />
      <ProductList games={gamesSale} title="Promoções" background="black" />
      <ProductList games={gamesComingSoon} title="Em Breve" background="gray" />
    </>
  )
};
