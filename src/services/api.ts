import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

type Product = {
  id: number;
  price: number
};

type PurchasePayload = {
  products: Product[];
  billing: {
    name: string;
    email: string;
    document: string;
  },
  delivery: {
    email: string;
  },
  payment: {
    card: {
      active: boolean;
      owner?: {
        name: string;
        document: string;
      }
      name?: string;
      number?: string;
      expires?: {
        moth: number;
        year: number;
      }
      code?: number;
    }
    installments: number;
  }
};
const featuredGame = (Math.random() * (6 - 1) + 1).toFixed();

const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://696a26f63a2b2151f8473fce.mockapi.io/projects/"
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<IGame[], void>({
      query: () => "games"
    }),
    getFeaturedGames: builder.query<IGame, void>({
      query: () => `games/${featuredGame}`
    }),
    getGameById: builder.query<IGame, string>({
      query: (id) => `games/${id}`
    }),
    purchase: builder.mutation<{ orderId: string }, PurchasePayload>({
      query: (data) => ({
        url: "checkout",
        method: "POST",
        body: data,
      })
    })
  })
});

export const { useGetFeaturedGamesQuery, useGetGameByIdQuery, usePurchaseMutation, useGetAllGamesQuery } = API;
export default API;
