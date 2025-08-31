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
        <ProductList games={sportGames} title="Esportes" background="black" sectionid="sports" />
        <ProductList games={actionGames} title="Ação" background="gray" sectionid="action" />
        <ProductList games={rpgGames} title="RPJ" background="black" sectionid="rpg" />
        <ProductList games={figthGames} title="Luta" background="gray" sectionid="figth" />
        <ProductList games={simulationGames} title="Simulação" background="black" sectionid="simulation" />
      </>
    )
  }

  return <h3>Carregando...</h3>
};
