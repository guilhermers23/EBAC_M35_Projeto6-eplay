import ProductList from "../../containers/ProductList";
import { useGetActionGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulationGamesQuery, useGetSportsGamesQuery } from "../../services/api";

export const Category = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionGamesQuery();
  const { data: sportGames, isLoading: isLoadingSports } = useGetSportsGamesQuery();
  const { data: figthGames, isLoading: isLoadingFigth } = useGetFightGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } = useGetSimulationGamesQuery();

  return (
    <>
      <ProductList title="Esportes"
        games={sportGames}
        background="black"
        sectionid="sports"
        isLoading={isLoadingSports}
      />
      <ProductList title="Ação"
        games={actionGames}
        background="gray"
        sectionid="action"
        isLoading={isLoadingAction}
      />
      <ProductList title="RPJ"
        games={rpgGames}
        background="black"
        sectionid="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList title="Luta"
        games={figthGames}
        background="gray"
        sectionid="figth"
        isLoading={isLoadingFigth}
      />
      <ProductList title="Simulação"
        games={simulationGames}
        background="black"
        sectionid="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
};
