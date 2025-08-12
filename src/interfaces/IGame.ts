export interface IGame {
  id: number;
  name: string;
  description: string;
  release_date: string | null;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: IPropsGallery[];
  };
};

export interface IPropsGallery { type: "image" | "video"; url: string; };
export interface IModalState extends IPropsGallery { visible: boolean };
