class GameModel {
  id: string;
  title: string;
  cover: string;
  category: string;
  plataform: string;
  infos: string[];
  description: string;

  constructor(id: string,
    title: string,
    cover: string,
    category: string,
    plataform: string,
    infos: string[],
    description: string,) {
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.category = category;
    this.plataform = plataform;
    this.infos = infos;
    this.description = description;
  }
};

export default GameModel;
