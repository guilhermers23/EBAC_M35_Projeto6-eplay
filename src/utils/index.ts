import type { IGame } from "../interfaces/IGame";

export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: "BRL"
  }).format(price);
};

export const getAllTagsGames = (game: IGame) => {
  const tags = [];
  if (game.release_date) {
    tags.push(game.release_date);
  };
  if (game.prices.discount) {
    tags.push(`${game.prices.discount}%`);
  };
  if (game.prices.current) {
    tags.push(parseToBrl(game.prices.current));
  };

  return tags;
};

export const textLimit = (text: string) => {
  if (text.length > 95) {
    return text.slice(0, 92) + '...'
  }
  return text;
};

export const getTotalPrice = (items: IGame[]) => {
  return items.reduce((acc, currentValue) => {
    if (currentValue.prices.current) {
      return (acc += currentValue.prices.current)
    }
    return 0;
  }, 0)
};
