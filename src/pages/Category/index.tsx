import { useEffect, useState } from "react";
import ProductList from "../../containers/ProductList";
import type { IGame } from "../../interfaces/IGame";
import { getActionGames, getFightGames, getRpgGames, getSimulationGames, getSportsGames } from "../../services/gamesService";

export const Category = () => {
  const [actionGames, setActionGames] = useState<IGame[]>([]);
  const [sportGames, setSportGames] = useState<IGame[]>([]);
  const [figthGames, setFigthGames] = useState<IGame[]>([]);
  const [rpgGames, setRpgGames] = useState<IGame[]>([]);
  const [simulationGames, setSimulationGames] = useState<IGame[]>([]);

  const getGamesCategory = async () => {
    try {
      setActionGames((await (getActionGames())).data);
      setSportGames((await (getSportsGames())).data);
      setFigthGames((await (getFightGames())).data);
      setRpgGames((await (getRpgGames())).data);
      setSimulationGames((await (getSimulationGames())).data);

    } catch (error) {
      console.error('Ocorreu um erro!', error)
    }
  };

  useEffect(() => { getGamesCategory() }, []);

  return (
    <>
      <ProductList games={actionGames} title="Ação" background="gray" />
      <ProductList games={sportGames} title="Esportes" background="black" />
      <ProductList games={figthGames} title="Luta" background="gray" />
      <ProductList games={rpgGames} title="RPJ" background="black" />
      <ProductList games={simulationGames} title="Simulação" background="gray" />
    </>
  )
};
