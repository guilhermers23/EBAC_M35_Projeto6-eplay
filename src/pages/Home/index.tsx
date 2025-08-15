import { useEffect, useState } from "react";
import type { IGame } from "../../interfaces/IGame";
import Banner from "../../components/Banner";
import ProductList from "../../containers/ProductList";
import { getComingSoonGames, getSaleGames } from "../../services/gamesService";

export const Home = () => {
  const [gamesSale, setGamesSale] = useState<IGame[]>([]);
  const [gamesComingSoon, setGamesComingSoon] = useState<IGame[]>([]);

  const findGames = async () => {
    try {
      setGamesSale((await getSaleGames()).data);
      setGamesComingSoon((await getComingSoonGames()).data);
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
