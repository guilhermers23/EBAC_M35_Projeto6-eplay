import ProductList from "../../containers/ProductList";
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationGamesQuery, useGetSportsGamesQuery } from "../../services/api";

export const Category = () => {
  const { data: actionGames } = useGetActionGamesQuery();
  const { data: sportGames } = useGetSportsGamesQuery();
  const { data: figthGames } = useGetFightGamesQuery();
  const { data: rpgGames } = useGetRpgGamesQuery();
  const { data: simulationGames } = useGetSimulationGamesQuery();

  if (actionGames && sportGames && figthGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="gray" />
        <ProductList games={sportGames} title="Esportes" background="black" />
        <ProductList games={figthGames} title="Luta" background="gray" />
        <ProductList games={rpgGames} title="RPJ" background="black" />
        <ProductList games={simulationGames} title="Simulação" background="gray" />
      </>
    )
  }

  return <h3>Carregando...</h3>
};
