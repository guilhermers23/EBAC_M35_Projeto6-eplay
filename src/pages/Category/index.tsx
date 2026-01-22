import ProductList from "../../containers/ProductList";
import { useGetAllGamesQuery } from "../../services/api";

export const Category = () => {
  const { data: games, isLoading } = useGetAllGamesQuery();
  const sportGames = games?.filter((game) => game.tag === "SportsGames");
  const actionGames = games?.filter((game) => game.tag === "ActionGames");
  const rpgGames = games?.filter((game) => game.tag === "RpgGames");
  const figthGames = games?.filter((game) => game.tag === "FightGames");
  const simulationGames = games?.filter((game) => game.tag === "SimulationGames");

  return (
    <>
      <ProductList title="Esportes"
        games={sportGames}
        background="black"
        sectionid="sports"
        isLoading={isLoading}
      />
      <ProductList title="Ação"
        games={actionGames}
        background="gray"
        sectionid="action"
        isLoading={isLoading}
      />
      <ProductList title="RPJ"
        games={rpgGames}
        background="black"
        sectionid="rpg"
        isLoading={isLoading}
      />
      <ProductList title="Luta"
        games={figthGames}
        background="gray"
        sectionid="figth"
        isLoading={isLoading}
      />
      <ProductList title="Simulação"
        games={simulationGames}
        background="black"
        sectionid="simulation"
        isLoading={isLoading}
      />
    </>
  )
};
