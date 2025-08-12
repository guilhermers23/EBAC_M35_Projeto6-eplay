import type { IGame } from "../interfaces/IGame";

const useAttributesGames = () => {
  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: "BRL"
    }).format(price);
  };

  const getAllTagsGames = (game: IGame) => {
    const tags = [];
    if (game.release_date) {
      tags.push(game.release_date);
    };
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    };
    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current));
    };

    return tags;
  };

  return { formatPrice, getAllTagsGames };
};

export default useAttributesGames;
